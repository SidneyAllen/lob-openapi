"use strict";

const tape = require("tape");
const _test = require("tape-promise").default;
const test = _test(tape);
const Prism = require("./setup.js");

const resource_endpoint = "/intl_verifications",
  lobUri = "https://api.lob.com/v1",
  specFile = "./Lob-API-public.yml",
  primary_line = "370 Water St",
  city = "Summerside",
  state = "Prince Edwards Island",
  postal_code = "C1N 1C4",
  country = "CA";

const prism = new Prism(specFile, lobUri, process.env.LOB_API_LIVE_TOKEN);

test("verify an int'l address given primary line, and country", async function (t) {
  const response = await prism.setup().then((client) =>
    client.post(
      resource_endpoint,
      {
        primary_line: primary_line,
        city: city,
        state: state,
        postal_code: postal_code,
        country: country,
      },
      { headers: prism.authHeader }
    )
  );

  await t.doesNotReject(Promise.resolve(response));
  t.equal(response.status, 200);
});

test("errors when not given a country", async function (t) {
  try {
    await prism.setup().then((client) =>
      client.post(
        resource_endpoint,
        {
          primary_line: primary_line,
          city: city,
          state: state,
          postal_code: postal_code,
        },
        { headers: prism.authHeader }
      )
    );
  } catch (err) {
    const firstError = err.additional.validation[0]["message"];
    t.match(firstError, /required/);
  }
});

test("errors when given Puerto Rico", async function (t) {
  try {
    await prism.setup().then((client) =>
      client.post(
        resource_endpoint,
        {
          primary_line: primary_line,
          city: city,
          state: state,
          postal_code: postal_code,
          country: "PR",
        },
        { headers: prism.authHeader }
      )
    );
  } catch (err) {
    const firstError = err.additional.validation[0]["message"];
    t.match(firstError, /allowed values/);
  }
});

test("errors when not given a primary line", async function (t) {
  try {
    await prism.setup().then((client) =>
      client.post(
        resource_endpoint,
        {
          city: city,
          state: state,
          postal_code: postal_code,
          country: country,
        },
        { headers: prism.authHeader }
      )
    );
  } catch (err) {
    const firstError = err.additional.validation[0]["message"];
    t.match(firstError, /required/);
  }
});

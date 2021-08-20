(()=>{"use strict";var t={342:()=>{var t=function(t){return t.replace(/-/g,"_")},i=function(t){for(var i=window.location.search.substring(1).split("&"),a=0;a<i.length;a++){var e=i[a].split("=");if(e[0]===t)return e[1]}},a=function(){var i=window.location.pathname,a=window.location.hash,e=void 0,n={},o=/(products|pricing|solutions|legal)\/([^\/]*)$/.exec(i),s=/products\/([^\/]*)\/([^\/]*)/.exec(i);if(o){var c=o[1],l=o[2];e=c+"."+l+".view"}else if(s){e="products."+(l=s[1])+"."+s[2]+".view"}else/sla/.test(i)?e=(o=/sla\/([^\/]*)$/.exec(i))?"legal.sla."+o[1]+".view":"legal.sla.view":"/"===i?e="home.view":/sales/.test(i)?e="sales.contact.view":/integrations/.test(i)?e=(o=/integrations\/(.*)/.exec(i))?"integrations."+o[1]+".view":"integrations.view":/guides/.test(i)?(e="guides.view",(o=/guides\/([^\/]*)\/([^\/]*)/.exec(i))&&(n.article=t(o[2]),n.section=t(o[1]))):/careers/.test(i)?(o=/careers\/(.*)/.exec(i))&&-1!==o[0].indexOf("apply")?(e="careers.job.apply.view",n.id=$(".job-application button").data("id"),n.title=$(".job-application button").data("title")):o?(e="careers.job.view",n.id=$(".individual-job a").data("id"),n.title=$(".individual-job a").data("title")):e=a&&"#openings"===a?"careers.openings.view":"careers.view":/template-gallery/.test(i)?(o=/template-gallery\/(.*)/.exec(i))?(e="gallery_templates.template.view",n.id=$(".thumbnail-hover button").data("template"),n.name=$(".thumbnail-hover button").data("name")):e="gallery_templates.view":/support\/faq/.test(i)?(e="support.faq.view",a&&a.length&&(n.article=t(a.substr(1)))):/support/.test(i)?e=/pricing/.test(i)?"pricing.support.view":a&&a.length?"support."+a.substr(1)+".view":"support.view":/docs/.test(i)&&(e="docs.view",a&&a.length&&(n.article=t(a.substr(1))),o=/docs\/(.*)/.exec(i),n.language=o?o[1]:"curl");e&&window.analytics.track(t(e),n)};!function(t){t(document).ready((function(){window.analytics.ready((function(){a(),t(window).on("hashchange",(function(){a()})),i("event")&&window.analytics.track(decodeURI(i("event"))),t(".analytics-cta").click((function(){var i=t(this).attr("href"),a=t(this).data("location"),e=t(this).data("product"),n=t(this).data("plan"),o=t(this).data("solution"),s=t(this).data("destination");/register/.test(i)?window.analytics.track("Clicked Register CTA",{location:a}):/pricing/.test(i)?window.analytics.track("Clicked Full Pricing CTA",{location:a,product:e}):/settings\/plans/.test(i)||/settings\/editions/.test(i)?window.analytics.track("Clicked Try Plan CTA",{plan:n,product:e}):/sales/.test(i)?window.analytics.track("Clicked Contact Sales CTA",{product:e,location:a}):/solutions/.test(i)?window.analytics.track("Clicked Solutions CTA",{solution:o,location:a}):/special-offers/.test(i)?window.analytics.track("Clicked "+s+" CTA",{solution:o,location:a}):/docs\.google\.com.*1FAIpQLSdAkRXK4iCNSlpBLBYuUXSZw4DFySATYrOb1yvfE4V4kN_KlQ/.test(i)&&window.analytics.track("Clicked Apply Startups Free CTA",{solution:o,location:a})})),t(".solution-callout.solution a").click((function(){window.analytics.track("solutions.payment-collections.banner.click",{url:t(this).data("url")})})),t(".solution-callout.home a").click((function(){window.analytics.track("home.banner.click",{url:t(this).data("url")})})),t("#partner-cta").click((function(){window.analytics.track("footer.partner-form.click")})),t(".faq-list a").click((function(){window.analytics.track("Clicked FAQ List Question",{question:t(this).text()})})),t(".top-faq-question").click((function(){"true"!==t(this).attr("aria-expanded")&&window.analytics.track("Expanded Top FAQ Question",{question:t(this).text()})})),t(".careers-header a, .careers-people a, .careers-life-content a, .banner-button").click((function(){window.analytics.track("careers.click",{link:t(this).attr("href")})})),t(".openings-jobs a").click((function(){window.analytics.track("careers.job.click",{id:t(this).data("id"),title:t(this).data("title")})})),t(".individual-job a").click((function(){window.analytics.track("careers.job.apply",{id:t(this).data("id"),title:t(this).data("title")})})),t(".job-application button").click((function(){window.analytics.track("careers.job.apply.submit",{id:t(this).data("id"),title:t(this).data("title")})})),t(".guides-nav-collapse li a").click((function(){window.analytics.track("Clicked Guides Article",{article:t(this).text()})})),t(".integration-container a").click((function(){window.analytics.track("Clicked Integration",{integration:t(this).data("integration")})})),t(".gallery-template-mail-type, .gallery-template-use-case").click((function(){window.analytics.track("gallery_templates.toggle",{group_by:t(this).data("group")})})),t(".thumbnail-hover a").click((function(){window.analytics.track("gallery_templates.click",{id:t(this).data("id"),name:t(this).data("name")})})),t(".thumbnail-hover button").click((function(){var i=t(this).data("action"),a=t(this).data("resource"),e=t("input[name=template-size]:checked").val(),n={id:t(this).data("template"),name:t(this).data("name"),size:e||t(this).data("size")};"postcards"===a&&(n.file=t(this).data("position")),window.analytics.track("gallery_templates.template."+i,n)})),t(".radio label input").click((function(){window.analytics.track("gallery_templates.template.toggle",{id:t(".thumbnail-hover button").data("template"),name:t(".thumbnail-hover button").data("name"),size:t("input[name=template-size]:checked").val()})})),t(".analytics-case-studies").click((function(){window.analytics.track("Clicked Case Study CTA",{company:t(this).data("company")})})),t("#primary_line").on("autocomplete:selected",(function(){window.analytics.track("products.address_verification.suggestions.select")})),t("#primary_line").on("autocomplete:cursorchanged",(function(){window.analytics.track("products.address_verification.suggestions.change_cursor")})),t("#primary_line").on("autocomplete:opened",(function(){window.analytics.track("products.address_verification.suggestions.view")})),t("#primary_line").on("autocomplete:updated",(function(){window.analytics.track("products.address_verification.suggestions.update")}))}))}))}(jQuery)},880:()=>{$((function(){$(".nav-dropdown").on({mouseenter:function(){if($(window).width()>991){const t=this.getAttribute("data-w-id");$("#"+t).addClass("w--open");const i=$("#"+t).attr("aria-controls");$("#"+i).addClass("w--open")}},mouseleave:function(){if($(window).width()>991){const t=this.getAttribute("data-w-id");$("#"+t).removeClass("w--open");const i=$("#"+t).attr("aria-controls");$("#"+i).removeClass("w--open")}},click:function(){if($(window).width()<=991){const t=this.getAttribute("data-w-id"),i=$("#"+t).hasClass("w--open");if($(".w--open").removeClass("w--open"),!i){$("#"+t).addClass("w--open");const i=$("#"+t).attr("aria-controls");$("#"+i).addClass("w--open")}}}}),$(".menu-icon").on("click",(function(t){t.stopPropagation(),$(".w-nav-overlay").removeClass("nav-menu-mobile-hide"),$(".w-nav-overlay").addClass("nav-menu-mobile-show"),$(".nav-menu-wrapper-4").removeClass("nav-menu-mobile-hide").addClass("nav-menu-mobile-show"),$(".menu-cross-icon").css({transform:"translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",visibility:"visible"}),$(".menu-icon").css("visibility","hidden")})),$(".menu-cross-icon").on("click",(function(t){t.stopPropagation(),$(".w-nav-overlay").removeClass("nav-menu-mobile-show").addClass("nav-menu-mobile-hide"),$(".nav-menu-wrapper-4").removeClass("nav-menu-mobile-show").addClass("nav-menu-mobile-hide"),$(".menu-cross-icon").css({transform:"translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",visibility:"hidden"}),$(".menu-icon").css("visibility","visible")}))}))}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var o=i[e]={exports:{}};return t[e](o,o.exports,a),o.exports}window.Lob={},window.Lob.url=window.location.origin,window.Lob.pathname=window.location.pathname,window.Lob.qs={},$((function(){$('[data-toggle="tooltip"]').tooltip();var t=window.location.href.replace(window.location.hash,""),i=t.indexOf("?")+1;if(i>0)for(var a=t.slice(i).split("&"),e=0;e<a.length;e++){var n=a[e].split("=");window.Lob.qs[n[0]]=n[1]}})),a(342),a(880)})();
(()=>{var t=window.eb_frontend,e=t.EBGetIconClass,r=t.EBGetIconType;document.addEventListener("DOMContentLoaded",(function(t){var i=document.querySelectorAll(".eb-accordion-container > .eb-accordion-inner");if(i)for(var s=function(){var t=i[l].parentElement,s=Number(t.getAttribute("data-transition-duration")),d=t.children[0].children,c=[];Array.from(d).forEach((function(t){c.push(t.querySelector(".eb-accordion-title-wrapper"))}));var p=t.getAttribute("data-accordion-type"),u=window.location.hash.substr(1),y=!1;"toggle"===p?function(t){for(var e=0;e<t.length;e++){var r=t[e];u&&!y&&r.parentElement.getAttribute("id")===u&&(y=!0,S.call(r)),function(t){t.addEventListener("click",S),t.addEventListener("keydown",(function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),S.call(t))}))}(r)}}(c):function(t){for(var e=0;e<t.length;e++){var r=t[e];u&&!y&&r.parentElement.getAttribute("id")===u&&(y=!0,k.call(r)),function(t){t.addEventListener("click",k),t.addEventListener("keydown",(function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),k.call(t))}))}(r)}}(c),window.addEventListener("hashchange",(function(){u=window.location.hash.substr(1),c.forEach((function(t){t.parentElement.getAttribute("id")===u&&(y=!0,"toggle"===p?S.call(t):k.call(t))}))})),c.forEach((function(t,e){var r=Math.random().toString(36).substr(2,7);t.setAttribute("id","eb-accordion-header-"+r),t.setAttribute("aria-controls","eb-accordion-panel-"+r),t.setAttribute("aria-expanded",!1),t.setAttribute("role","button");var a=t.nextElementSibling;a.setAttribute("id","eb-accordion-panel-"+r),a.setAttribute("aria-labelledby","eb-accordion-header-"+r),a.setAttribute("role","region"),t.addEventListener("keydown",(function(t){var r=t.which.toString(),a=t.ctrlKey&&r.match(/33|34/);if(r.match(/38|40/)||a){var o=r.match(/34|40/)?1:-1,n=c.length;c[(e+n+o)%n].focus(),t.preventDefault()}else if(r.match(/35|36/)){switch(r){case"36":c[0].focus();break;case"35":c[c.length-1].focus()}t.preventDefault()}}))}));var m=[];Array.from(d).forEach((function(t){m.push(t.querySelector(".eb-accordion-content-wrapper"))}));var f="eb-accordion-hidden";t.classList.add("eb_accdn_loaded");for(var h=0;h<m.length;h++)m[h].style.height="0px";var v=document.createElement("span"),b=t.getAttribute("data-tab-icon")||"_ _",g=t.getAttribute("data-expanded-icon")||"_ _";b=e(b),g=e(g);var A=b.split(" ")[0],E="fontawesome"===r(b)?b.split(" ")[1]:b.split(" ")[2],w=g.split(" ")[0],L="fontawesome"===r(g)?g.split(" ")[1]:g.split(" ")[2];function P(t){var e=t.querySelector(".eb-accordion-icon")||v;e.classList.contains(L)?("dashicon"===r(L)&&e.classList.remove("dashicons"),e.classList.remove(w,L),"dashicon"===r(E)&&e.classList.add("dashicons"),e.classList.add(A,E)):("dashicon"===r(E)&&e.classList.remove("dashicons"),e.classList.remove(A,E),"dashicon"===r(L)&&e.classList.add("dashicons"),e.classList.add(w,L))}for(var x=0;x<d.length;x++)"true"==d[x].getAttribute("data-clickable")?(m[x].setAttribute("data-collapsed","false"),n(m[x],s),P(m[x].parentElement.querySelector(".eb-accordion-title-wrapper"))):(m[x].setAttribute("data-collapsed","true"),o(m[x],s),m[x].parentElement.classList.add(f));function S(){var t=this,e=this.nextElementSibling;"true"===e.getAttribute("data-collapsed")?(n(e,s),e.setAttribute("data-collapsed","false"),t.setAttribute("aria-expanded","true"),t.parentElement.classList.remove(f)):(o(e,s),e.setAttribute("data-collapsed","true"),t.setAttribute("aria-expanded","false"),t.parentElement.classList.add(f)),P(t)}function k(){var e=this;Array.from(d).forEach((function(t){t.classList.add(f)}));var r=e.nextElementSibling,i="true"===r.getAttribute("data-collapsed");!function(t){for(var e=t.querySelectorAll(".eb-accordion-icon"),r=0;r<e.length;r++)e[r].classList.contains(L)&&(e[r].classList.remove(w,L),e[r].classList.add(A,E))}(t),a(t,s),i?(n(r,s),r.setAttribute("data-collapsed","false"),e.setAttribute("aria-expanded","true"),e.parentElement.classList.remove(f)):(o(r,s),r.setAttribute("data-collapsed","true"),e.setAttribute("aria-expanded","false"),P(e),e.parentElement.classList.add(f)),P(e)}},l=0;l<i.length;l++)s()}));var a=function(t,e){var r=[];Array.from(t.children).forEach((function(t){r=t.querySelectorAll(".eb-accordion-content-wrapper")}));for(var a=0;a<r.length;a++)"false"===r[a].getAttribute("data-collapsed")&&(o(r[a],e),r[a].setAttribute("data-collapsed",!0),r[a].setAttribute("aria-expanded","false"))},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.boxSizing="border-box",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,window.setTimeout((function(){t.style.display="none",t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property")}),e)},n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;t.style.removeProperty("display");var r=window.getComputedStyle(t).display;"none"===r&&(r="block"),setTimeout((function(){t.style.display=r}),e+1);var a=t.offsetHeight;t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.offsetHeight,t.style.boxSizing="border-box",t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=a+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout((function(){t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property")}),e)}})();
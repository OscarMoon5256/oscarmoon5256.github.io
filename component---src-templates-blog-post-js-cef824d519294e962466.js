(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1QcF":function(e,t,a){},"3JpC":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("jelL")),o=a("nKUr"),i=(0,r.default)((0,o.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.default=i},"4TLd":function(e,t,a){},"7r2a":function(e,t,a){},"9H8W":function(e,t,a){},DMNx:function(e,t,a){},H6AK:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("jelL")),o=a("nKUr"),i=(0,r.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},JZBx:function(e,t,a){},RPjP:function(e,t,a){"use strict";e.exports=a("SLms")},SLms:function(e,t,a){"use strict";a("E9XD"),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=c(a("q1tI")),i=c(a("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function d(e,t){var a=t.onNewComment,n=t.language,r=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var f=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,a){return u.some((function(e){return e===a}))?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),m=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);f.displayName="DisqusThread",f.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},f.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=f},TsVF:function(e,t,a){},YVbu:function(e,t,a){},Yj20:function(e,t,a){},cTxA:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),o=a("Ub9Y"),i=a("pBHt"),c=a("JqEL"),l=(a("JZBx"),function(e){var t=e.isOnPage,a=function(){var e=c.h();c.e(".scroll-indicator-mini").textContent=e+"%"};return Object(o.a)((function(){return i.a(a,{})()})),t?r.a.createElement("div",{className:"scroll-indicator-mini on-page"},"0%"):r.a.createElement("div",{className:"scroll-indicator-mini on-content"},"0%")})},eTlp:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("jelL")),o=a("nKUr"),i=(0,r.default)([(0,o.jsx)("path",{d:"M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79zM21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98v9.47z"},"0"),(0,o.jsx)("path",{d:"M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83-.05.41-.42.71-.83.66-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03zm0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83-.05.41-.42.71-.83.66-1.62-.19-3.39-.04-4.73.39-.08.02-.16.03-.23.03zm0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83-.05.41-.42.7-.83.66-1.62-.19-3.39-.04-4.73.39-.08.02-.16.03-.23.03z"},"1")],"MenuBookRounded");t.default=i},hUWy:function(e,t,a){},jmfv:function(e,t,a){},lbRd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("9eSz"),c=a.n(i),l=(a("9H8W"),Object(n.forwardRef)((function(e,t){return r.a.createElement(o.StaticQuery,{query:s,render:function(e){var a=e.site.siteMetadata,n=a.author,i=a.social,l=a.introduction;return r.a.createElement("div",{ref:t,className:"bio"},r.a.createElement("div",{className:"author"},r.a.createElement("div",{className:"author-description"},r.a.createElement(c.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:n,style:{borderRadius:"100%"}}),r.a.createElement("div",{className:"author-name"},r.a.createElement("span",{className:"author-name-prefix"},"Written by"),r.a.createElement(o.Link,{to:"/about",className:"author-name-content"},r.a.createElement("span",null,"@",n)),r.a.createElement("div",{className:"author-introduction"},l),r.a.createElement("p",{className:"author-socials"},i.instagram&&r.a.createElement("a",{href:"https://www.instagram.com/"+i.instagram},"✤ Instagram"),i.github&&r.a.createElement("a",{href:"https://github.com/"+i.github},"✤ GitHub"),i.medium&&r.a.createElement("a",{href:"https://medium.com/"+i.medium},"✤ Medium"),i.twitter&&r.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"✤ Twitter"),i.facebook&&r.a.createElement("a",{href:"https://www.facebook.com/"+i.facebook},"✤ Facebook"),i.linkedin&&r.a.createElement("a",{href:"https://www.linkedin.com/in/"+i.linkedin+"/"},"✤ LinkedIn"))))))}})}))),s="2486386679"},"n1n/":function(e,t,a){},nyLm:function(e,t,a){},q1Jy:function(e,t,a){},sSRO:function(e,t,a){},uBfH:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("jelL")),o=a("nKUr"),i=(0,r.default)((0,o.jsx)("path",{d:"M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"}),"EventNote");t.default=i},uhgt:function(e,t,a){},vg9a:function(e,t,a){},weRM:function(e,t,a){},yZlL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=(a("TsVF"),function(){return r.a.createElement("hr",{className:"custom-hr"})}),i=a("hpys"),c=a("ivnd"),l=(a("YVbu"),function(e){var t=e.title;return r.a.createElement("div",{className:"post-title"},t)}),s=a("uBfH"),u=a.n(s),m=a("eTlp"),d=a.n(m),f=(a("1QcF"),function(e){var t=e.date,a=e.timeToRead;return r.a.createElement("div",{className:"post-date"},r.a.createElement("div",{className:"post-date-icon"},r.a.createElement(u.a,null)),t,r.a.createElement("div",{className:"divider"},"·"),r.a.createElement("div",{className:"post-read-time-icon"},r.a.createElement(d.a,null)),a," 분")}),p=function(e){var t=e.html;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},h=(a("weRM"),function(e){var t=e.onClick;return r.a.createElement("a",{className:"resp-sharing-button__link",href:"#",target:"_blank",rel:"noopener","aria-label":"Share on Facebook",onClick:t},r.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"},r.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}))),r.a.createElement("span",{className:"service-label"},"Share on Facebook")))}),v=(a("hUWy"),function(e){var t=e.onClick;return r.a.createElement("a",{className:"resp-sharing-button__link",href:"#",rel:"noopener","aria-label":"Share on Twitter",onClick:t},r.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"},r.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))),r.a.createElement("span",{className:"service-label"},"Share on Twitter")))}),b=(a("DMNx"),function(e){var t='Recommend on "'+e.title+'" written by @'+e.author;return r.a.createElement("div",{className:"social-share"},r.a.createElement(h,{onClick:function(e){return e.preventDefault(),function(e,t){window.FB.ui({method:"share",mobile_iframe:!0,href:e,quote:t})}(window.location.href,t)}}),r.a.createElement(v,{onClick:function(e){return e.preventDefault(),function(e,t){window.open("https://twitter.com/share?url="+encodeURI(encodeURI(e))+"&text="+t,"sharer","toolbar=0,status=0,width=626,height=436")}(window.location.href,t)}}))}),g=(a("jmfv"),function(e){var t=e.sponsorId;return r.a.createElement("div",{className:"sponsor-button"},r.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+t},r.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",null,"Buy me a coffee")))}),E=a("lbRd"),w=(a("4TLd"),function(){return r.a.createElement("div",{className:"post-header"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"inner-header flex"}),r.a.createElement("div",null,r.a.createElement("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto"},r.a.createElement("defs",null,r.a.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),r.a.createElement("g",{className:"parallax"},r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.1"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.3)"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.5)"}))))))}),y=a("Wbzz"),N=(a("q1Jy"),function(e){var t=e.category;return r.a.createElement("div",{className:"post-category-wrapper"},r.a.createElement("div",{className:"post-category"},r.a.createElement(y.Link,{to:"/category?category="+t,className:"link"},t)))}),k=(a("n1n/"),function(e){var t=e.pageContext,a=t.previous,n=t.next;return r.a.createElement("ul",{className:"navigator"},r.a.createElement("li",null,a&&r.a.createElement(y.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r.a.createElement("li",null,n&&r.a.createElement(y.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →")))}),j=a("JX7q"),_=a("dI71"),x=a("RPjP"),O=a.n(x),C=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(Object(j.a)(a)),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(Object(j.a)(a)),a}Object(_.a)(t,e);var a=t.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},a.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},a.render=function(){var e=this.props,t=e.post,a=e.shortName,n=e.siteUrl+e.slug;return r.a.createElement(O.a,{shortname:a,identifier:t.frontmatter.title,title:t.frontmatter.title,url:n,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},t}(n.Component),S=a("H6AK"),L=a.n(S),M=a("JqEL"),R=a("asA3"),q=a("Ub9Y"),A=a("pBHt");a("sSRO");function T(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function D(){var e="."+R.a.post_content+" > h0, h1, h2, h3, h4, h5, h6";return Array.from(M.f(e))}function H(e){var t=window.pageYOffset;return e.getBoundingClientRect().top+t}function z(e){if(e){var t=M.k(e,"open"),a=D().concat(Array.from(M.f("."+R.a.gatsby_plugin.post_img))),n=t?-1:"auto";a.forEach((function(e){e.style.zIndex=n}));M.e("."+R.a.theme_switch);for(var r=0,o=[M.e("."+R.a.author_name_content),M.e("."+R.a.post_navigator)];r<o.length;r++);}}function U(e){z(e.target.nextSibling)}function P(e){z(e.currentTarget.parentNode)}function B(e){return window.location.pathname+"#"+encodeURI(e)}var J=function(e){var t=e.toc,a=function(){for(var e,t=window.pageYOffset,a=T(D());!(e=a()).done;){var n=e.value;if(!1!=!!n.id){var r=H(n),o=B(n.id),i=M.e('a[href="'+o+'"]');t>=r-180?(n&&n.classList.add("toc-header-active"),i&&i.classList.add("toc-active")):(n&&n.classList.remove("toc-header-active"),i&&i.classList.remove("toc-active"))}}};return Object(q.a)((function(){return A.a(a,{})()})),Object(n.useEffect)((function(){D().forEach((function(e){e.classList.add("toc-header");var t=H(e),a=M.e('a[href="'+B(e.id)+'"]');a&&a.addEventListener("click",(function(e){e.preventDefault(),window.scroll({top:t,behavior:"smooth"})}))}))})),r.a.createElement("div",{className:"toc-wrapper"},r.a.createElement("div",{className:"toc-open-btn",onClick:U}),r.a.createElement("div",{className:"toc-content"},r.a.createElement("div",{className:"toc-list-btn"},r.a.createElement("div",{className:"red"}),r.a.createElement("div",{className:"yellow"}),r.a.createElement("div",{className:"green"})),r.a.createElement("div",{className:"toc-close-btn",onClick:P},r.a.createElement("span",{className:"toc-close-icon"},r.a.createElement(L.a,null))),r.a.createElement("div",{className:"toc",dangerouslySetInnerHTML:{__html:t}})))},V=a("3JpC"),F=a.n(V);a("nyLm");function W(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"icon-scroll"}),r.a.createElement("div",{className:"icon-arrow"},r.a.createElement(F.a,null)))}var K=a("cTxA");a("7r2a");function Y(){for(var e=M.h(),t=Math.floor(e/10),a=M.f("li[data-indicator]"),n=0;n<a.length;n++){var r=a[n];if(n===t)r.classList.add("active"),r.querySelector("a").textContent=e+"%";else r.removeAttribute("class")}}var Q=function(e){e.isFixed;var t=function(){Y()};function a(e){e.preventDefault();var t=e.target.parentNode.getAttribute("data-indicator"),a=M.g()*t/100;window.scroll({top:a,behavior:"smooth"})}return Object(q.a)((function(){return A.a(t,{})()})),Object(n.useEffect)((function(){!function(){for(var e=M.e(".scroll-indicator"),t=M.c("ul"),n=0;n<11;n++){var r=10*n,o=document.createElement("li"),i=document.createElement("a");o.setAttribute("data-indicator",r),i.textContent=r,i.addEventListener("click",a),o.appendChild(i),t.appendChild(o)}e.appendChild(t)}(),Y()}),[]),r.a.createElement("div",{className:"scroll-indicator-wrapper"},r.a.createElement(K.a,null),r.a.createElement("div",{className:"scroll-indicator"}))},X=(a("Yj20"),function(e){var t=e.children;return r.a.createElement("div",{className:"top-sticky-container"},t)}),Z=a("WlAH"),G=function(e){var t=e.repo,a=r.a.createRef();return Object(n.useEffect)((function(){var e=M.i(Z.d.DARK),n=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:e?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),a.current.appendChild(n)}),[]),r.a.createElement("div",{className:"utterances",ref:a})},$=a("p3AD"),ee=a("EXIE");a("uhgt"),a("vg9a"),t.default=function(e){var t=e.data,a=e.pageContext,s=e.location;Object(n.useEffect)((function(){return ee.c(),function(){return ee.a()}}),[]);var u=t.markdownRemark,m=t.site.siteMetadata,d=m.title,h=m.comment,v=m.siteUrl,y=m.author,j=m.sponsor,_=h.disqusShortName,x=h.utterances,O=u.tableOfContents,S=u.timeToRead,L=u.frontmatter,M=L.title,R=L.date,q=L.category;return r.a.createElement(i.a,{location:s,title:d},r.a.createElement(X,null,r.a.createElement(Q,null),r.a.createElement(J,{toc:O})),r.a.createElement(c.a,{title:M,description:u.excerpt}),r.a.createElement(w,null),r.a.createElement(N,{category:q}),r.a.createElement(l,{title:M}),r.a.createElement(f,{date:R,timeToRead:S}),r.a.createElement(W,null),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object($.a)(28),padding:Object($.a)(1.5)+" "+Object($.a)(3/4)+" "+Object($.a)(1)+" "+Object($.a)(3/4)}},r.a.createElement(p,{html:u.html}),r.a.createElement(b,{title:M,author:y}),!!j.buyMeACoffeeId&&r.a.createElement(g,{sponsorId:j.buyMeACoffeeId}),r.a.createElement(o,null),r.a.createElement(E.a,null),r.a.createElement(k,{pageContext:a}),!!_&&r.a.createElement(C,{post:u,shortName:_,siteUrl:v,slug:a.slug}),!!x&&r.a.createElement(G,{repo:x})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cef824d519294e962466.js.map
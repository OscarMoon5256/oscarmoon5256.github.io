(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1QcF":function(e,t,n){},"7r2a":function(e,t,n){},DMNx:function(e,t,n){},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("E9XD"),Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=c(n("q1tI")),i=c(n("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],f=!1;function m(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var d=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return u.some((function(e){return e===n}))?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!f){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),f=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){m(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){m(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);d.displayName="DisqusThread",d.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d},TsVF:function(e,t,n){},Yj20:function(e,t,n){},hUWy:function(e,t,n){},jmfv:function(e,t,n){},"n1n/":function(e,t,n){},sSRO:function(e,t,n){},uhgt:function(e,t,n){},vg9a:function(e,t,n){},weRM:function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=(n("TsVF"),function(){return r.a.createElement("hr",{className:"custom-hr"})}),i=n("hpys"),c=n("ivnd"),s=function(e){var t=e.title;return r.a.createElement("h1",null,t)},l=(n("1QcF"),function(e){var t=e.date;return r.a.createElement("p",{className:"post-date"},t)}),u=function(e){var t=e.html;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},f=(n("weRM"),function(e){var t=e.onClick;return r.a.createElement("a",{className:"resp-sharing-button__link",href:"#",target:"_blank",rel:"noopener","aria-label":"Share on Facebook",onClick:t},r.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"},r.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}))),r.a.createElement("span",{className:"service-label"},"Share on Facebook")))}),m=(n("hUWy"),function(e){var t=e.onClick;return r.a.createElement("a",{className:"resp-sharing-button__link",href:"#",rel:"noopener","aria-label":"Share on Twitter",onClick:t},r.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"},r.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))),r.a.createElement("span",{className:"service-label"},"Share on Twitter")))}),d=(n("DMNx"),function(e){var t='Recommend on "'+e.title+'" written by @'+e.author;return r.a.createElement("div",{className:"social-share"},r.a.createElement(f,{onClick:function(e){return e.preventDefault(),function(e,t){window.FB.ui({method:"share",mobile_iframe:!0,href:e,quote:t})}(window.location.href,t)}}),r.a.createElement(m,{onClick:function(e){return e.preventDefault(),function(e,t){window.open("https://twitter.com/share?url="+encodeURI(encodeURI(e))+"&text="+t,"sharer","toolbar=0,status=0,width=626,height=436")}(window.location.href,t)}}))}),p=(n("jmfv"),function(e){var t=e.sponsorId;return r.a.createElement("div",{className:"sponsor-button"},r.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+t},r.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",null,"Buy me a coffee")))}),h=n("lbRd"),v=n("Wbzz"),b=(n("n1n/"),function(e){var t=e.pageContext,n=t.previous,a=t.next;return r.a.createElement("ul",{className:"navigator"},r.a.createElement("li",null,n&&r.a.createElement(v.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,a&&r.a.createElement(v.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))}),g=n("JX7q"),y=n("dI71"),E=n("RPjP"),w=n.n(E),_=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(Object(g.a)(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(Object(g.a)(n)),n}Object(y.a)(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},n.render=function(){var e=this.props,t=e.post,n=e.shortName,a=e.siteUrl+e.slug;return r.a.createElement(w.a,{shortname:n,identifier:t.frontmatter.title,title:t.frontmatter.title,url:a,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},t}(a.Component),k=n("JqEL"),C=n("asA3"),N=n("Ub9Y"),j=n("pBHt");n("sSRO");function O(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function x(){var e="."+C.a.post_content+" > h2, h3, h4, h5, h6";return Array.from(k.f(e))}function A(e){var t=window.pageYOffset;return e.getBoundingClientRect().top+t}function D(e){if(e){var t=k.k(e,"open"),n=x().concat(Array.from(k.f("."+C.a.gatsby_plugin.post_img))),a=t?-1:"auto";n.forEach((function(e){e.style.zIndex=a}));var r=t?"none":"block";k.e("."+C.a.theme_switch).style.display=r;for(var o=0,i=[k.e("."+C.a.author_name_content),k.e("."+C.a.post_navigator)];o<i.length;o++);}}function I(e){D(e.target.nextSibling)}function q(e){D(e.currentTarget.parentNode)}function L(e){return window.location.pathname+"#"+encodeURI(e)}var R=function(e){var t=e.toc,n=function(){for(var e,t=window.pageYOffset,n=O(x());!(e=n()).done;){var a=e.value;if(!1!=!!a.id){var r=A(a),o=L(a.id),i=k.e('a[href="'+o+'"]');t>=r-180?(a&&a.classList.add("toc-header-active"),i&&i.classList.add("toc-active")):(a&&a.classList.remove("toc-header-active"),i&&i.classList.remove("toc-active"))}}};return Object(N.a)((function(){return j.a(n,{})()})),Object(a.useEffect)((function(){x().forEach((function(e){e.classList.add("toc-header");var t=A(e),n=k.e('a[href="'+L(e.id)+'"]');n&&n.addEventListener("click",(function(e){e.preventDefault(),window.scroll({top:t,behavior:"smooth"})}))}))})),r.a.createElement("div",{className:"toc-wrapper"},r.a.createElement("div",{className:"toc-open-btn",onClick:I}),r.a.createElement("div",{className:"toc-content"},r.a.createElement("div",{className:"toc-close-btn",onClick:q},r.a.createElement("span",{className:"toc-close-icon"})),r.a.createElement("div",{className:"toc",dangerouslySetInnerHTML:{__html:t}})))},M=n("cTxA");n("7r2a");function T(){for(var e=k.h(),t=Math.floor(e/10),n=k.f("li[data-indicator]"),a=0;a<n.length;a++){var r=n[a];if(a===t)r.classList.add("active"),r.querySelector("a").textContent=e+"%";else r.removeAttribute("class")}}var U=function(e){e.isFixed;var t=function(){T()};function n(e){e.preventDefault();var t=e.target.parentNode.getAttribute("data-indicator"),n=k.g()*t/100;window.scroll({top:n,behavior:"smooth"})}return Object(N.a)((function(){return j.a(t,{})()})),Object(a.useEffect)((function(){!function(){for(var e=k.e(".scroll-indicator"),t=k.c("ul"),a=0;a<11;a++){var r=10*a,o=document.createElement("li"),i=document.createElement("a");o.setAttribute("data-indicator",r),i.textContent=r,i.addEventListener("click",n),o.appendChild(i),t.appendChild(o)}e.appendChild(t)}(),T()}),[]),r.a.createElement("div",{className:"scroll-indicator-wrapper"},r.a.createElement(M.a,null),r.a.createElement("div",{className:"scroll-indicator"}))},P=(n("Yj20"),function(e){var t=e.children;return r.a.createElement("div",{className:"top-sticky-container"},t)}),B=n("WlAH"),F=function(e){var t=e.repo,n=r.a.createRef();return Object(a.useEffect)((function(){var e=k.i(B.d.DARK),a=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:e?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(r).forEach((function(e){a.setAttribute(e,r[e])})),n.current.appendChild(a)}),[]),r.a.createElement("div",{className:"utterances",ref:n})},z=n("p3AD"),H=n("EXIE");n("uhgt"),n("vg9a"),t.default=function(e){var t=e.data,n=e.pageContext,f=e.location;Object(a.useEffect)((function(){return H.c(),function(){return H.a()}}),[]);var m=t.markdownRemark,v=t.site.siteMetadata,g=v.title,y=v.comment,E=v.siteUrl,w=v.author,N=v.sponsor,j=y.disqusShortName,O=y.utterances,S=m.tableOfContents,x=m.frontmatter,A=x.title,D=x.date;return r.a.createElement(i.a,{location:f,title:g},r.a.createElement(P,null,r.a.createElement(U,null),r.a.createElement(R,{toc:S})),r.a.createElement("div",{onClick:function(){var e=k.e("."+C.a.toc_content);if(e.classList[1]){var t=k.k(e,"open")?"none":"block";k.e("."+C.a.theme_switch).style.display=t}},style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(z.a)(28),padding:Object(z.a)(1.5)+" "+Object(z.a)(3/4)+" "+Object(z.a)(1)+" "+Object(z.a)(3/4)}},r.a.createElement(c.a,{title:A,description:m.excerpt}),r.a.createElement(s,{title:A}),r.a.createElement(l,{date:D}),r.a.createElement(u,{html:m.html}),r.a.createElement(d,{title:A,author:w}),!!N.buyMeACoffeeId&&r.a.createElement(p,{sponsorId:N.buyMeACoffeeId}),r.a.createElement(o,null),r.a.createElement(h.a,null),r.a.createElement(b,{pageContext:n}),!!j&&r.a.createElement(_,{post:m,shortName:j,siteUrl:E,slug:n.slug}),!!O&&r.a.createElement(F,{repo:O})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-55052809c7b980bd605a.js.map
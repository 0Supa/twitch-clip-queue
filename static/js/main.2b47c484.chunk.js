(this["webpackJsonptwitch-clip-queue"]=this["webpackJsonptwitch-clip-queue"]||[]).push([[0],{103:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),u=n(35),i=n.n(u),c=(n(63),n(2));var o=function(t){var e=t.href;return Object(c.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{loading:"lazy",width:"128",height:"128",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",className:"absolute top-0 right-0 fork-on-github",alt:"Fork me on GitHub"})})},s=n(7),l=n(57),d=n(4),f=n(11),p=l.a;var b=a.a.lazy((function(){return n.e(4).then(n.bind(null,139))})),v=a.a.lazy((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,138))}));var h=function(){var t=Object(s.c)(f.c).get();return Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)("div",{}),children:Object(c.jsx)(p,{basename:"/twitch-clip-queue/",children:Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{path:"/queue",children:t?Object(c.jsx)(v,{}):Object(c.jsx)(d.a,{to:"/"})}),Object(c.jsx)(d.b,{exact:!0,path:"/",children:t?Object(c.jsx)(d.a,{to:"/queue"}):Object(c.jsx)(b,{})}),Object(c.jsx)(d.b,{path:"*",children:Object(c.jsx)(d.a,{to:"/"})})]})})})};var m=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{href:"https://github.com/JakeMiki/twitch-clip-queue"}),Object(c.jsx)(h,{})]})},g=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,136)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,u=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),u(t),i(t)}))},j=n(23);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),g(),j.a.processAuth()},11:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return p})),n.d(e,"g",(function(){return v})),n.d(e,"f",(function(){return h})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return g})),n.d(e,"b",(function(){return j}));var r=n(1),a=n.n(r),u=n(3),i=n(7),c=n(13),o=n(23),s=n(32),l=n(12),d=n(5),f=Object(i.a)(!1),p=Object(i.a)(null),b=Object(i.a)(null),v=Object(i.a)(null),h=Object(l.a)("userChannel",null),m=function(t,e,n){p.set(t),b.set(e),v.set(n),h.get()||h.set(n),f.set(!0),Object(c.a)("user-logged-in"),"wolfabelle"===n.toLowerCase()&&5===(new Date).getDay()&&d.h.set({title:"ITS FRIDAY THEN, ITS SATURDAY, SUNDAY! GO MUFASA!",channel:"MUFASA",id:"1TewCPi92ro",provider:"youtube",thumbnailUrl:"https://i.ytimg.com/vi/1TewCPi92ro/hqdefault.jpg",submitter:{displayName:"Friday",userName:""},submitters:new Array(69420),game:"Friday"})},g=function(){var t=Object(u.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=p.get(),p.set(null),b.set(null),v.set(null),f.set(!1),!e){t.next=8;break}return t.next=8,o.a.revokeToken(e);case 8:Object(c.a)("user-logged-out");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(t){s.a.leaveChannel(h.get()),h.set(t),s.a.joinChannel(t),Object(c.a)("channel-changed")}},12:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return i}));var r=n(7),a=n(54);function u(t,e){var n=Object(r.a)(e);return n.attach(Object(a.a)(t)),n}function i(t,e){return t.id===e.id&&t.provider===e.provider}},13:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(24),a=Object(r.a)("Umami Event"),u=window.umami,i=[];function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"custom";a.debug("".concat(e,": ").concat(t));try{if(i.push({type:e,value:t}),u)for(var n;n=i.shift();)"view"===n.type?u.trackView(n.value):u.trackEvent(n.value,n.type)}catch(r){}}},23:function(t,e,n){"use strict";var r=n(1),a=n.n(r),u=n(3),i=n(19),c=n.n(i),o=n(11),s="ryrnsuk3r4howfd6jac8lamdan279v",l=function(){return encodeURI("https://id.twitch.tv/oauth2/authorize?client_id=".concat(s)+"&redirect_uri=".concat("https://jakemiki.github.io/twitch-clip-queue/")+'&response_type=token id_token&scope=openid chat:read&claims={"id_token":{"preferred_username":null}}')};var d={getLoginUrl:l,redirectToLogin:function(){window.location.assign(l())},processAuth:function(){if(window.location.hash){var t,e,n=window.location.hash.substring(1).split("&").reduce((function(t,e){var n=e.split("=");return t[n[0]]=decodeURIComponent(decodeURIComponent(n[1])),t}),{});if(window.location.hash="",n.access_token&&n.id_token)n.decodedIdToken=function(t){if(!t)return;var e=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(e).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(n)}(n.id_token),Object(o.d)(n.access_token,n.id_token,null!==(t=null===(e=n.decodedIdToken)||void 0===e?void 0:e.preferred_username)&&void 0!==t?t:"")}},revokeToken:function(){var t=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("https://id.twitch.tv/oauth2/revoke?client_id=".concat(s,"&token=").concat(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};e.a=d},24:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r,a,u=n(51),i=n(52);!function(t){t[t.debug=0]="debug",t[t.info=1]="info",t[t.warn=2]="warn",t[t.error=3]="error"}(r||(r={}));var c=function(t){var e;return a=null!==(e=r[t])&&void 0!==e?e:r.info},o=function(){function t(e){Object(u.a)(this,t),this.name=e}return Object(i.a)(t,[{key:"debug",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];this.log.apply(this,[r.debug,t].concat(n))}},{key:"info",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];this.log.apply(this,[r.info,t].concat(n))}},{key:"warn",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];this.log.apply(this,[r.warn,t].concat(n))}},{key:"error",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];this.log.apply(this,[r.error,t].concat(n))}},{key:"log",value:function(t,e){var n,u,i,c;if(!(t<a)){for(var o="[".concat(this.name,"] ").concat(e),s=arguments.length,l=new Array(s>2?s-2:0),d=2;d<s;d++)l[d-2]=arguments[d];switch(t){case r.debug:(n=console).debug.apply(n,[o].concat(l));break;case r.info:(u=console).info.apply(u,[o].concat(l));break;case r.warn:(i=console).warn.apply(i,[o].concat(l));break;case r.error:(c=console).error.apply(c,[o].concat(l))}}}}]),t}();function s(t){return new o(t)}c("warn"),window.__setLogLevel=c},30:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e=t.indexOf("http");if(e>=0){var n=t.indexOf(" ",e);return t.slice(e,n>0?n:void 0)}}},31:function(t,e,n){"use strict";var r=n(1),a=n.n(r),u=n(56),i=n(3),c=n(15),o=n(26),s=n(19),l=n.n(s),d=n(11),f=l.a.create({baseURL:"https://api.twitch.tv/helix/",headers:{"Client-ID":"ryrnsuk3r4howfd6jac8lamdan279v"}}),p={getClip:function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("clips?id=".concat(e),{headers:{Authorization:"Bearer ".concat(d.a.get())}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r.data[0]);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getVideo:function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("videos?id=".concat(e),{headers:{Authorization:"Bearer ".concat(d.a.get())}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r.data[0]);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getGame:function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("games?id=".concat(e),{headers:{Authorization:"Bearer ".concat(d.a.get())}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r.data[0]);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=n(12),v=Object(b.a)("gamesDictionary",{}),h=function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=v.get())[e]){t.next=3;break}return t.abrupt("return",n[e]);case 3:return t.next=5,p.getGame(e);case 5:if(!(r=t.sent)){t.next=9;break}return v.set((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(o.a)({},e,r.name))})),t.abrupt("return",r.name);case 9:return t.abrupt("return","");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=n(5),g=function(t){var e=new URL(t);return"clips.twitch.tv"===e.hostname||!(!e.hostname.endsWith("twitch.tv")||!e.pathname.includes("/clip/"))},j=function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r,u,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=new URL(e),g(e)){t.next=4;break}return t.abrupt("return");case 4:if(r=n.pathname.lastIndexOf("/"),u=n.pathname.slice(r).split("?")[0].slice(1),!(i=Object(m.i)({provider:"twitch-clip",id:u}))){t.next=9;break}return t.abrupt("return",Object(c.a)({},i));case 9:return t.next=11,p.getClip(u);case 11:if(!(o=t.sent)){t.next=22;break}return t.t0=u,t.t1=o.broadcaster_name,t.next=17,h(o.game_id);case 17:return t.t2=t.sent,t.t3=o.thumbnail_url,t.t4=o.title,t.t5=o.created_at,t.abrupt("return",{id:t.t0,channel:t.t1,game:t.t2,provider:"twitch-clip",thumbnailUrl:t.t3,title:t.t4,timestamp:t.t5});case 22:t.next=26;break;case 24:t.prev=24,t.t6=t.catch(0);case 26:case"end":return t.stop()}}),t,null,[[0,24]])})));return function(e){return t.apply(this,arguments)}}(),w={canHandle:g,tryGetClip:j},O=function(t){var e=new URL(t);return!(!e.hostname.endsWith("twitch.tv")||!e.pathname.includes("/videos/"))},x=function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r,u,i,o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=new URL(e),O(e)){t.next=4;break}return t.abrupt("return");case 4:if(r=n.pathname.lastIndexOf("/"),u=n.pathname.slice(r).split("?")[0].slice(1),!(i=Object(m.i)({provider:"twitch-vod",id:u}))){t.next=9;break}return t.abrupt("return",Object(c.a)({},i));case 9:return t.next=11,p.getVideo(u);case 11:if(!(o=t.sent)){t.next=14;break}return t.abrupt("return",{id:u,channel:o.user_name,provider:"twitch-vod",thumbnailUrl:o.thumbnail_url.replace("%{width}x%{height}","480x272"),title:o.title,startTime:null!==(s=n.searchParams.get("t"))&&void 0!==s?s:void 0,timestamp:o.created_at});case 14:t.next=18;break;case 16:t.prev=16,t.t0=t.catch(0);case 18:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e){return t.apply(this,arguments)}}(),k={canHandle:O,tryGetClip:x},y={getClip:function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=".concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",void 0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},C=function(t){var e=new URL(t);return"youtu.be"===e.hostname||!!e.hostname.endsWith("youtube.com")},_=function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r,u,i,o,s,l,d,f,p,b;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o=new URL(e),C(e)){t.next=4;break}return t.abrupt("return");case 4:if(s=void 0,"youtu.be"===o.hostname?(l=o.pathname.lastIndexOf("/")+1,s=o.pathname.slice(l).split("?")[0]):o.hostname.endsWith("youtube.com")&&(s=null!==(d=o.searchParams.get("v"))&&void 0!==d?d:void 0),s){t.next=8;break}return t.abrupt("return");case 8:if(f=null!==(n=o.searchParams.get("t"))&&void 0!==n?n:void 0,!(p=Object(m.i)({provider:"youtube",id:s}))){t.next=12;break}return t.abrupt("return",Object(c.a)({},p));case 12:return t.next=14,y.getClip(s);case 14:return b=t.sent,t.abrupt("return",{id:s,channel:null!==(r=null===b||void 0===b?void 0:b.author_name)&&void 0!==r?r:"YouTube",thumbnailUrl:null!==(u=null===b||void 0===b?void 0:b.thumbnail_url)&&void 0!==u?u:"https://i.ytimg.com/vi/".concat(s,"/hqdefault.jpg"),provider:"youtube",title:null!==(i=null===b||void 0===b?void 0:b.title)&&void 0!==i?i:s,startTime:null===f||void 0===f?void 0:f.replace(/[^0-9]/g,"")});case 18:t.prev=18,t.t0=t.catch(0);case 20:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}(),U=[w,k,{canHandle:C,tryGetClip:_}],N={findByUrl:function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r,i,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(u.a)(U),t.prev=1,n.s();case 3:if((r=n.n()).done){t.next=15;break}if((i=r.value).canHandle(e)){t.next=7;break}return t.abrupt("continue",13);case 7:return t.next=9,i.tryGetClip(e);case 9:if(!(c=t.sent)){t.next=13;break}return c.hash=Date.now().toString(),t.abrupt("return",c);case 13:t.next=3;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),n.e(t.t0);case 20:return t.prev=20,n.f(),t.finish(20);case 23:return t.abrupt("return",void 0);case 24:case"end":return t.stop()}}),t,null,[[1,17,20,23]])})));return function(e){return t.apply(this,arguments)}}()};e.a=N},32:function(t,e,n){"use strict";var r,a=n(1),u=n.n(a),i=n(3),c=n(17),o=n(53),s=n(24),l=n(30),d=n(5),f=n(11),p=n(55),b=n(31),v=n(7),h={queuenext:function(){return Object(d.j)()},queueclose:function(){return Object(d.a)(!1)},queueopen:function(){return Object(d.a)(!0)},queueclear:function(){return Object(d.e)()},queuepurgememory:function(){return Object(d.d)()},queuesoftlimit:function(t){return null!==t&&Number.isInteger(+t)&&Object(d.n)(+t)}},m=Object(s.a)("Twitch Chat"),g=function(t){d.g.filter((function(e){var n,r;return(null===(n=e.submitter.get())||void 0===n?void 0:n.userName)===t||(null===(r=e.submitters.get())||void 0===r?void 0:r.some((function(e){return e.userName===t})))})).forEach((function(e){var n,r,a;(null===(n=e.submitter.get())||void 0===n?void 0:n.userName)===t?(null===(r=e.submitters.get())||void 0===r?void 0:r.length)?(e.submitter.set(null===(a=e.submitters.get())||void 0===a?void 0:a[0]),e.submitters.set((function(t){return null===t||void 0===t||t.shift(),t}))):e.set(v.b):e.submitters.set((function(e){return null===e||void 0===e?void 0:e.filter((function(e){return e.userName!==t}))}))}))},j=function(){var t=Object(i.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(e=r)||void 0===e?void 0:e.disconnect();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m.info("Joining channel",e),t.next=3,r.join(e.toLowerCase());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O={connect:function(){r=new p.Client({options:{debug:!1,skipUpdatingEmotesets:!0,skipMembership:!0},logger:{error:m.error.bind(m),info:m.info.bind(m),warn:m.warn.bind(m)},identity:{username:f.g.get(),password:"oauth:".concat(f.a.get())},connection:{reconnect:!0,secure:!0}}),m.info("Connecting and authenticating..."),r.connect().then((function(){m.info("Connected."),w(f.f.get())})).catch(m.error.bind(m)),r.on("disconnected",(function(t){return m.info("Disconnected:",t)})),r.on("message",(function(t,e,n,r){return function(t,e,n){if(m.debug("Userstate",t),e.startsWith("!")){var r;if(!t.mod&&"1"!==(null===(r=t.badges)||void 0===r?void 0:r.broadcaster))return;var a=e.substr(1).split(" "),u=Object(o.a)(a),i=u[0],s=u.slice(1),f=h[i];if(!f)return;f.apply(void 0,Object(c.a)(s))}if(d.b.get()||n){var p=Object(l.a)(e);p&&(m.debug("[handleMessage] Found url:",p),b.a.findByUrl(p).then((function(e){e&&(e.url=p,e.submitter={userName:t.username,displayName:t["display-name"]},Object(d.c)(e))})))}}(e,n,r)})),r.on("messagedeleted",(function(t,e,n){return function(t){var e=Object(l.a)(t);e&&(m.debug("[handleMessageDeleted] Found url:",e),b.a.findByUrl(e).then((function(t){t&&Object(d.l)(t)})))}(n)})),r.on("timeout",(function(t,e){return g(e)})),r.on("ban",(function(t,e){return g(e)}))},disconnect:j,joinChannel:w,leaveChannel:function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m.info("Leaving channel",e),t.next=3,r.part(e.toLowerCase());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};e.a=O},49:function(t,e){},5:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"g",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"p",(function(){return d})),n.d(e,"o",(function(){return f})),n.d(e,"c",(function(){return p})),n.d(e,"j",(function(){return b})),n.d(e,"i",(function(){return v})),n.d(e,"m",(function(){return h})),n.d(e,"l",(function(){return m})),n.d(e,"e",(function(){return g})),n.d(e,"d",(function(){return j})),n.d(e,"a",(function(){return w})),n.d(e,"k",(function(){return O})),n.d(e,"n",(function(){return x}));var r=n(17),a=n(7),u=n(13),i=n(12),c=Object(a.a)({}),o=Object(i.a)("clipQueue",[]),s=Object(i.a)("clipMemory",[]),l=Object(a.a)(!1),d=Object(i.a)("softClipLimit",0),f=Object(a.a)(0),p=function(t){var e,n,a,c,l=o.find((function(e){return Object(i.b)(e.get(),t)})),p=null===l||void 0===l?void 0:l.get(),b=d.get();p?(null===(e=p.submitter)||void 0===e?void 0:e.userName)===(null===(n=t.submitter)||void 0===n?void 0:n.userName)||null!==(a=null===(c=p.submitters)||void 0===c?void 0:c.find((function(e){var n;return e.userName===(null===(n=t.submitter)||void 0===n?void 0:n.userName)})))&&void 0!==a&&a||(null===l||void 0===l||l.submitters.set((function(e){return[].concat(Object(r.a)(null!==e&&void 0!==e?e:[]),[t.submitter])})),o.set((function(t){return t.sort((function(t,e){var n,r,a,u;return(null!==(n=null===(r=e.submitters)||void 0===r?void 0:r.length)&&void 0!==n?n:0)-(null!==(a=null===(u=t.submitters)||void 0===u?void 0:u.length)&&void 0!==a?a:0)}))}))):v(t)||b&&f.get()>=b||(s.set((function(e){return[].concat(Object(r.a)(null!==e&&void 0!==e?e:[]),[t])})),o.set((function(e){return[].concat(Object(r.a)(null!==e&&void 0!==e?e:[]),[t])})),f.set((function(t){return t+1})),Object(u.a)("clip-added"))},b=function(){var t,e;c.set(JSON.parse(JSON.stringify(null!==(t=null===(e=o[0])||void 0===e?void 0:e.get())&&void 0!==t?t:{}))),o[0].set(a.b),Object(u.a)("next-clip"),Object(u.a)("/queue?next","view")},v=function(t){var e=s.find((function(e){return Object(i.b)(e.get(),t)}));return null===e||void 0===e?void 0:e.get()},h=function(t){var e=function(t){var e=o.find((function(e){return Object(i.b)(e.get(),t)}));return null===e||void 0===e?void 0:e.get()}(t);e&&(c.set(JSON.parse(JSON.stringify(e))),m(e))},m=function(t){var e=o.findIndex((function(e){return Object(i.b)(e.get(),t)}));o[e].set(a.b),f.set((function(t){return Math.max(t-1,0)}))},g=function(){o.set([]),c.set({}),f.set(0),Object(u.a)("clear-queue")},j=function(){var t;s.set(Object(r.a)(null!==(t=o.get())&&void 0!==t?t:[])),Object(u.a)("purge-memory")},w=function(t){l.set(t),t&&f.set(o.length),Object(u.a)("accept-clips-".concat(t))},O=function(){c.hash.set((function(){return Date.now().toString()}))},x=function(t){d.set(t),Object(u.a)("set-soft-limit")}},63:function(t,e,n){},90:function(t,e){}},[[103,1,2]]]);
//# sourceMappingURL=main.2b47c484.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[604,119,129],{1003:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),r=t(1033),l=t(1020),c=t(1105),m=t(1032);var o=function(a){var e=a.metadata,t=e.previousPage,n=e.nextPage;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(m.a,{className:"pagination-nav__link",to:t},i.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(m.a,{className:"pagination-nav__link",to:n},i.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))},s=t(1073);e.default=function(a){var e=a.metadata,t=a.items,n=a.sidebar,m=Object(r.a)().siteConfig.title,u=e.blogDescription,d=e.blogTitle,v="/"===e.permalink?m:d;return i.a.createElement(l.a,{title:v,description:u},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--2"},i.a.createElement(s.a,{sidebar:n})),i.a.createElement("main",{className:"col col--8"},t.map((function(a){var e=a.content;return i.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},i.a.createElement(e,null))})),i.a.createElement(o,{metadata:e})))))}},1020:function(a,e,t){"use strict";t.d(e,"a",(function(){return m}));var n=t(0),i=t.n(n),r=t(1046),l=t(1031),c=function(){var a=Object(l.useLocation)();return a.pathname.endsWith("/")?i.a.createElement(l.Redirect,{to:a.pathname.slice(0,-1)}):null};function m(a){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,null),i.a.createElement(r.a,a))}}}]);
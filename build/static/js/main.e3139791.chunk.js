(this.webpackJsonprecaptcha=this.webpackJsonprecaptcha||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),o=t.n(r),l=(t(10),t(4)),i=t(3),s=t.n(i),u=function(e){var a=e.setIsVerified;return c.a.createElement(s.a,{className:"recaptcha",sitekey:"6LdmcfMUAAAAAOJiCcPC2fMijRs-fntKKFAUZf0r",render:"explicit",onloadCallback:function(){console.log("recatcha loaded ...")},verifyCallback:function(e){e&&a(!0)}})};t(11);var m=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],r=a[1];return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Recaptcha Demo"),c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"you@example.com"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),t?alert("You have successfully subscribed!"):alert("Please verify that you are a human!")}},"Subscribe"),c.a.createElement(u,{setIsVerified:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.e3139791.chunk.js.map
(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t(4),s=t.n(n),r=t(3),i=(t(9),t(0)),d="7c707d67bfaea395afd4f3cf375077ca",o="https://api.openweathermap.org/data/2.5/",u=function(){var e=Object(c.useState)(""),a=Object(r.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)({}),u=Object(r.a)(s,2),h=u[0],l=u[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("main",{children:[Object(i.jsx)("div",{className:"search-bar",children:Object(i.jsx)("input",{type:"text",className:"search",placeholder:"Enter city name",onChange:function(e){return n(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(o,"weather?q=").concat(t,"&unit=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){l(e),n(""),console.log(e)}))}})}),"undefined"!=typeof h.main?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"location-bar",children:[Object(i.jsxs)("div",{className:"location",children:[h.name,", ",h.sys.country]}),Object(i.jsx)("div",{className:"date",children:function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),c=["Jan","Feb","Mar","Ape","May","Jun","Jul","Aug","Sep","Oct","Nav","Dec"][e.getMonth()],n=e.getFullYear();return"".concat(a," ").concat(t," ").concat(c," ").concat(n)}(new Date)})]}),Object(i.jsxs)("div",{className:"weather-bar",children:[Object(i.jsxs)("div",{className:"temp",children:[Math.round(h.main.temp),"\xb0C "]}),Object(i.jsx)("div",{className:"weather",children:h.weather[0].main})]})]}):""]})})};s.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))},9:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.33a09a84.chunk.js.map
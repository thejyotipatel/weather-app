(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{42:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(4),s=c.n(a),r=c(11),i=c.n(r),j=c(17),o=c(6),l=c(56),h=(c(33),c(12)),d=c.n(h),p=c(1),b=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(o.a)(s,2),h=r[0],b=r[1],x=Object(n.useState)([]),O=Object(o.a)(x,2),u=O[0],m=O[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation.getCurrentPosition((function(e){a(e.coords.latitude),b(e.coords.longitude)})),fetch("".concat("https://api.openweathermap.org/data/2.5/","weather?lat=").concat(c,"&lon=").concat(h,"&appid=").concat("7c707d67bfaea395afd4f3cf375077ca")).then((function(e){return e.json()})).then((function(e){m(e),console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c,h]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"homePage",textAlign:"center",children:[Object(p.jsx)(l.a,{children:Object(p.jsxs)(l.a.Content,{children:[Object(p.jsx)(l.a.Header,{textAlign:"center",children:Object(p.jsxs)("p",{className:"day",children:["Time: ",d()().format("LT")]})}),Object(p.jsxs)(l.a.Header,{className:"Header",textAlign:"center",children:["City Name: ",u.sys.country,", ",u.name]}),Object(p.jsx)(l.a.Header,{children:Object(p.jsxs)("p",{className:"day",children:["Day: ",d()().format("Do MMMM YYYY")]})})]})}),Object(p.jsx)(l.a,{children:Object(p.jsxs)(l.a.Content,{textAlign:"center",children:[Object(p.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(u.weather[0].icon,"@2x.png")}),Object(p.jsxs)("h5",{children:[u.weather[0].main,"       ",u.sys.temp_max]}),Object(p.jsx)("p",{children:u.weather[0].description})]})}),Object(p.jsx)(l.a,{children:Object(p.jsxs)(l.a.Content,{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("i",{class:"fas fa-temperature-low"}),u.main.temp_min]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("i",{class:"fas fa-temperature-high"}),u.main.temp_max]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("i",{class:"fas fa-sun"}),u.sys.sunrise]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("i",{class:"fas fa-moon"}),u.sys.sunset]})]})})]})})};var x=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(b,{})})};s.a.render(Object(p.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e156443b.chunk.js.map
(this["webpackJsonpweather-data"]=this["webpackJsonpweather-data"]||[]).push([[0],{51:function(e,t,a){e.exports=a(84)},84:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(43),c=a.n(r),o=a(17),i=a(22),u=a.n(i),s=a(28),m=a(6),d=a(24),E=a(21),h=a.n(E),p=function(e,t){var a="http://api.openweathermap.org/data/2.5/weather?"+"lat=".concat(e,"&lon=").concat(t)+"&appid=76479de685af99998156cb1cc78930b2";return h.a.get(a)},f=function(e){return h.a.post("/api/weather",e)},v=function(){return h.a.get("/api/weather")},g=function(e){return h.a.delete("/api/weather/"+e)},b=a(85),k=a(86),y=a(87),w=a(88),N=a(89),j=a(90);var x=function(e){return l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement(k.a,null,l.a.createElement(y.a,null,l.a.createElement("strong",null,"Weather Detail")),l.a.createElement(w.a,null,l.a.createElement("strong",null,"Country:")," ",e.country),l.a.createElement(w.a,null,l.a.createElement("strong",null,"City:")," ",e.name),l.a.createElement(N.a,null,l.a.createElement("strong",null,"Temp:")," ",(1.8*(e.temp-273.15)+32).toFixed(2),"\xb0"),l.a.createElement(N.a,null,l.a.createElement("strong",null,"Feels Like:")," ",(1.8*(e.feelsLike-273.15)+32).toFixed(2),"\xb0"),l.a.createElement(N.a,null,l.a.createElement("strong",null,"Latitude:")," ",e.latitude),l.a.createElement(N.a,null,l.a.createElement("strong",null,"Longitude:")," ",e.longitude),l.a.createElement(j.a,{className:"btn btn-primary btn-width",onClick:function(t){t.preventDefault(),f({id:e.id,country:e.country,city:e.name,latitude:e.latitude,longitude:e.longitude,temp:e.temp,feelsLike:e.feelsLike,dateAdded:Date.now()}),alert("Saved ".concat(e.name,"!"))}},"Save this Weather Point"))))};var C=function(e){var t=e.selectedMarker;return l.a.createElement("div",null,t.main?l.a.createElement(x,{key:t.id,id:t.id,name:t.name,temp:t.main.temp,feelsLike:t.main.feels_like,latitude:t.coord.lat,longitude:t.coord.lon,country:t.sys.country,selectedMarker:t}):l.a.createElement("h1",null,"No Location selected"))},O=a(47),S=a(45);var F=function(e){var t=e.markerCount,a=e.onMarkerSelect;return l.a.createElement("div",null,console.log("markerCount: ",t),t?t.map((function(e){return l.a.createElement(d.a,{key:e.id,latitude:e.lat,longitude:e.lon,offsetLeft:-20,offsetTop:-10},l.a.createElement("button",{onClick:function(){return a(e)}},l.a.createElement(S.a,{className:"font-awesome-icon",icon:O.a})))})):null)},L=a(20);var W=function(e){var t=e.searchField,a=e.handleFormSubmit,n=e.handleInputChange;return l.a.createElement("header",null,l.a.createElement("div",{className:"container container-flex"},l.a.createElement("div",{className:"header-title-container"},l.a.createElement("h1",{className:"header-title"},"Weather Point"),l.a.createElement("p",{className:"header-subtitle"},"Generate Random Weather Point data")),l.a.createElement("nav",{className:"navigation"},l.a.createElement("ul",{className:"navigation-list"},l.a.createElement("li",{className:"navigation-list-item"}," ",l.a.createElement("input",{className:"",type:"text",name:"markerCount",value:t,id:"markerCount",placeholder:"Search up to 10 points",onChange:n})),l.a.createElement("li",{className:"navigation-list-item"},l.a.createElement("button",{className:"btn btn-primary",onClick:a},"Search")),l.a.createElement("li",{className:"navigation-list-item"},l.a.createElement(L.b,{to:"/",className:"navigation-link"},"Home")),l.a.createElement("li",{className:"navigation-list-item"},l.a.createElement(L.b,{to:"/saved",className:"navigation-link"},"Saved Weather Points"))))))};var D=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),o=Object(m.a)(c,2),i=o[0],E=o[1],h=Object(n.useState)(),f=Object(m.a)(h,2),v=f[0],g=f[1],b=Object(n.useState)({latitude:35.5501,longitude:-80.7821,zoom:1,width:"100vw",height:"60vh"}),k=Object(m.a)(b,2),y=k[0],w=k[1];function N(){return(N=Object(s.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.target.value,g(a),j();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("searchField: ",v),e.next=3,fetch("https://randomapi.com/api/?key=".concat("6JPH-QWD5-3TNH-0GN3","&ref=").concat("n4pftsxb","&results=").concat(v));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,a.results;case 9:n=e.sent,r(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",null,l.a.createElement(W,{handleInputChange:function(e){var t=e.target.value;g(t)},handleFormSubmit:function(e){return N.apply(this,arguments)},searchField:v}),l.a.createElement(d.b,Object.assign({},y,{mapStyle:"mapbox://styles/suarez9093/ck773vm2e08i91iqi1m48zfss",mapboxApiAccessToken:"pk.eyJ1Ijoic3VhcmV6OTA5MyIsImEiOiJjazcydXBjengwNmQzM2dvbjQ3ZW11aW0xIn0.eDdHq-b6NFeYRY4Nlwlgrg",onViewportChange:w}),l.a.createElement(F,{onMarkerSelect:function(e){p(e.lat,e.lon).then((function(e){E(e.data)}))},markerCount:a})),l.a.createElement(C,{selectedMarker:i}))};var I=function(){var e=Object(n.useState)(),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){v().then((function(e){console.log("res: ",e),r(e.data)})).catch((function(e){return console.log(e)}))}),[]),console.log("savedWeather: ",a),l.a.createElement("div",null,l.a.createElement(W,null),a?a.map((function(e){return l.a.createElement(b.a,{key:e._id},l.a.createElement(k.a,null,l.a.createElement(N.a,null,l.a.createElement("strong",null,"Country:")," ",e.country),l.a.createElement(N.a,null,l.a.createElement("strong",null,"City:")," ",e.city),l.a.createElement(N.a,null,l.a.createElement("strong",null,"Temp:")," ",(1.8*(e.temp-273.15)+32).toFixed(2),"\xb0"),l.a.createElement(N.a,null,l.a.createElement("strong",null,"Feels Like:")," ",(1.8*(e.feelsLike-273.15)+32).toFixed(2),"\xb0"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j.a,{className:"btn-width",color:"danger",onClick:function(){return t=e._id,g(t).then((function(e){})),void alert("Deleted!");var t}},"Delete this weather point")))})):l.a.createElement("h1",null,"No saved Results"))};var M=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(D,null)),l.a.createElement(o.a,{exact:!0,path:"/saved"},l.a.createElement(I,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(83);c.a.render(l.a.createElement(L.a,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.11b91f72.chunk.js.map
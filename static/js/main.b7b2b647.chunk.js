(this["webpackJsonpgif-search-app"]=this["webpackJsonpgif-search-app"]||[]).push([[0],{41:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(13),r=n.n(s),i=n(11),l=(n(41),n(14)),j=n(4),h=n(70),o=(n(42),n(31)),b=n.n(o),u=n(32),d=n.n(u),m=n(1),O=function(e){var t=e.title;return Object(m.jsx)("header",{className:"mb-2 mt-3",children:Object(m.jsx)("h1",{className:"display-3",children:t})})},x=function(){return Object(m.jsx)("nav",{className:"mb-4 navbar navbar-light bg-light navbar-expand-md d-flex justify-content-around",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)("li",{className:"nav-item mr-5",children:Object(m.jsx)(i.b,{className:"nav-link",to:"/search/funny",children:"Funny"})}),Object(m.jsx)("li",{className:"nav-item mr-5",children:Object(m.jsx)(i.b,{className:"nav-link",to:"/search/happy",children:"Happy"})}),Object(m.jsx)("li",{className:"nav-item mr-5",children:Object(m.jsx)(i.b,{className:"nav-link",to:"/search/hello",children:"Hello"})}),Object(m.jsx)("li",{className:"nav-item mr-5",children:Object(m.jsx)(i.b,{className:"nav-link",to:"/search/love",children:"Love"})}),Object(m.jsx)("li",{className:"nav-item mr-5",children:Object(m.jsx)(i.b,{className:"nav-link",to:"/search/quiet",children:"Quiet"})})]})})},f=Object(j.h)((function(e){var t=e.handleSearchSubmit,n=e.onSearchChange;return Object(m.jsxs)("form",{className:"mb-5 mt-5",onSubmit:t,children:[Object(m.jsx)("input",{type:"search",className:"w-50 mx-auto",onChange:n,placeholder:"Search"}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:Object(m.jsxs)("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(m.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),Object(m.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})})]})})),p=n(71),g=n(72),v=function(e){var t=e.src,n=e.handleImageClick,c=e.url;return Object(m.jsx)("img",{src:t,alt:"",width:"100%",onClick:function(){n(c)}})},N=function(){return Object(m.jsxs)("div",{className:"text-center w-75 mx-auto",children:[Object(m.jsx)("h3",{children:"No Results Found"}),Object(m.jsx)("p",{children:"You search did not return any results. Please try again."})]})},S=Object(j.h)((function(e){var t=e.gifs,n=e.isLoading,c=e.handleImageClick;return Object(m.jsx)(h.a,{fluid:!0,children:n?Object(m.jsx)("p",{className:"h4",children:"Loading..."}):t.length?Object(m.jsx)(p.a,{noGutters:!0,children:t.map((function(e){return Object(m.jsx)(g.a,{xs:{span:12},sm:{span:6},md:{span:4},lg:{span:3},xl:{span:3},children:Object(m.jsx)(v,{src:e.images.fixed_height.url,url:e.images.downsized.url,handleImageClick:c})},e.id)}))}):Object(m.jsx)(N,{})})})),y=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"404 Error"}),Object(m.jsx)("p",{children:"A 404 error has occurred.  Please try another search."})]})},k=n(74),C=n(73),w=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],a=t[1];return n?Object(m.jsxs)(k.a,{variant:"light",onClose:function(){return a(!1)},dismissible:!0,children:[Object(m.jsx)(k.a.Heading,{children:"Welcome to my Gif Search App!"}),Object(m.jsx)("p",{children:"You can click on a gif to copy it!!!!"})]}):Object(m.jsx)(C.a,{variant:"light",onClick:function(){return a(!0)},children:"Show Banner"})},L=function(){var e=Object(c.useState)("dogs"),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),i=r[0],o=r[1],u=Object(c.useState)(!0),p=Object(l.a)(u,2),g=p[0],v=p[1],N=Object(j.g)(),k=function(e){v(!0),b.a.get(" https://api.giphy.com/v1/gifs/search?api_key=".concat("0lfGk4FtTR5Vc037TVgYVPLj2ylA8Unv","&q=").concat(e,"&limit=48")).then((function(e){o(e.data.data),v(!1)}))};Object(c.useEffect)((function(){var e=N.location.pathname.replace("/search/","");a(e),k(e)}),[N.location.pathname]),Object(c.useEffect)((function(){return N.listen((function(e){var t=e.pathname.replace("/search/","");a(t),k(t)}))}),[N.location.pathname,N]);var C=function(e){d()(e)};return Object(m.jsxs)(h.a,{className:"text-center",children:[Object(m.jsx)(O,{title:"Gif Search"}),Object(m.jsx)(w,{}),Object(m.jsx)(f,{handleSearchSubmit:function(e){e.preventDefault(),k(n);var t="/search/".concat(n);N.push(t),e.currentTarget.reset()},onSearchChange:function(e){a(e.target.value)}}),Object(m.jsx)(x,{}),Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(j.a,{to:"/search/dogs"})}}),Object(m.jsx)(j.b,{path:"/search/:gif",render:function(){return Object(m.jsx)(S,{gifs:i,isLoading:g,handleImageClick:C})}}),Object(m.jsx)(j.b,{component:y})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(L,{})})}),document.getElementById("root")),F()}},[[68,1,2]]]);
//# sourceMappingURL=main.b7b2b647.chunk.js.map
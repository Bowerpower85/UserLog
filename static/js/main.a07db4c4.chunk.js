(this.webpackJsonpuserlog=this.webpackJsonpuserlog||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n.n(c),i=n(15),o=n.n(i),s=(n(54),n(55),n(12)),l=n(30);n(56);var j=function(e){var t=e.children;return Object(a.jsx)("div",{className:"wrapper",children:t})},u=(n(57),n(58),n(23)),d=n(45);var h=function(e){var t=e.inputValue,n=e.handleInputChange;return Object(a.jsxs)(d.a,{className:"has-search margin",onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)(u.d,{className:"form-control-feedback search-icon"}),Object(a.jsx)(d.a.Control,{type:"search",placeholder:"Search by name\u2026",className:"search-input",value:t,onChange:n})]})},b=(n(62),n(42)),m=n(27),O=n(44),f=n(11);var x=function(e){var t=e.sortBtn,n=e.resetBtn,c=e.children,r=e.handleSelectDropdown;return Object(a.jsxs)(b.a,{className:"margin full-width",children:[Object(a.jsx)(m.a,{onClick:t,children:c}),Object(a.jsxs)(O.a,{as:b.a,title:"Title",id:"bg-nested-dropdown",onSelect:r,children:[Object(a.jsx)(f.a.Item,{eventKey:"Front Man",children:"Front Man"}),Object(a.jsx)(f.a.Item,{eventKey:"Guitarist",children:"Guitarist"}),Object(a.jsx)(f.a.Item,{eventKey:"Bassist",children:"Bassist"}),Object(a.jsx)(f.a.Item,{eventKey:"Drummer",children:"Drummer"})]}),Object(a.jsxs)(O.a,{as:b.a,title:"Location",id:"bg-nested-dropdown",onSelect:r,children:[Object(a.jsx)(f.a.Item,{eventKey:"Washington",children:"Washington"}),Object(a.jsx)(f.a.Item,{eventKey:"California",children:"California"}),Object(a.jsx)(f.a.Item,{eventKey:"Arizona",children:"Arizona"})]}),Object(a.jsx)(m.a,{onClick:n,children:"Reset"})]})},p=n(47),v=n(26);var g=function(e){var t=e.inputValue,n=e.handleInputChange,c=e.resetBtn,r=e.sortBtn,i=e.children,o=e.handleSelectDropdown;return Object(a.jsxs)(p.a,{children:[Object(a.jsx)(v.a,{md:4,children:Object(a.jsx)(h,{inputValue:t,handleInputChange:n})}),Object(a.jsx)(v.a,{md:8,className:"button-group",children:Object(a.jsx)(x,{resetBtn:c,sortBtn:r,children:i,handleSelectDropdown:o})})]})},y=n(48),k=n(46),w=n(40);n(64);var S=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)(w.a,{children:Object(a.jsx)(y.a,{className:"justify-content-center",children:Object(a.jsx)(k.a,{children:Object(a.jsx)(k.a,{children:Object(a.jsx)("h1",{className:"text-center text-color",children:"Rock N Roll Directory"})})})})})})};n(65);var C=function(e){var t=e.name,n=e.title,c=e.location,r=e.phone,i=e.email;return Object(a.jsxs)("div",{className:"card-container",children:[Object(a.jsxs)("div",{className:"card-intro text-color",children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("h3",{children:n})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"card-contact",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)(u.b,{})," ",Object(a.jsxs)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.google.com/maps/place/".concat(c),children:[c," Rock Studio"]})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(u.c,{})," ",Object(a.jsx)("a",{href:"tel:".concat(r),children:r})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(u.a,{})," ",Object(a.jsx)("a",{href:"mailto:".concat(i),children:"Send Email"})]})]})})]})},A=n(9);var N=function(e){return Object(a.jsx)("main",{className:"bg-color",children:Object(a.jsx)(w.a,{children:e.children})})};var B=function(){var e=Object(c.useState)(A),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1],h=Object(c.useState)(!1),b=Object(l.a)(h,2),m=b[0],O=b[1],f=Object(c.useState)("AZ"),x=Object(l.a)(f,2),p=x[0],v=x[1];Object(c.useEffect)((function(){if(!u)return r(A);var e=n.filter((function(e){return e.name.includes(u.toLowerCase())}));r(e),O(!1)}),[u]);var y=function(){r(A),d("")};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S,{}),Object(a.jsxs)(N,{children:[Object(a.jsx)(g,{inputValue:u,handleInputChange:function(e){d(e.target.value)},resetBtn:y,sortBtn:function(){switch(p){case"AZ":r(Object(s.a)(n).sort((function(e,t){return e.name>t.name?1:-1}))),v("ZA");break;case"ZA":r(Object(s.a)(n).sort((function(e,t){return e.name<t.name?1:-1}))),v("AZ");break;default:return}},children:"AZ"===p?"Sort A\u2013Z":"Sort Z\u2013A",handleSelectDropdown:function(e){switch(e){case"Front Man":r(Object(s.a)(A).filter((function(e){return e.title.includes("Front Man")})));break;case"Guitarist":r(Object(s.a)(A).filter((function(e){return e.title.includes("Guitarist")})));break;case"Bassist":r(Object(s.a)(A).filter((function(e){return e.title.includes("Bassist")})));break;case"Drummer":r(Object(s.a)(A).filter((function(e){return e.title.includes("Drummer")})));break;case"Washington":r(Object(s.a)(A).filter((function(e){return e.location.includes("Washington")})));break;case"Arizona":r(Object(s.a)(A).filter((function(e){return e.location.includes("Arizona")})));break;case"California":r(Object(s.a)(A).filter((function(e){return e.location.includes("California")})));break;default:return void y()}}}),!1===m?null:Object(a.jsx)("h4",{children:"Woops, please use letters only. Numbers or special characters won't display results."}),0===n.length?Object(a.jsx)("h4",{children:'Looks like we don\'t have this team member. Please try a different name or hit "Reset".'}):null,Object(a.jsx)(j,{children:n.map((function(e){return Object(a.jsx)(C,{name:e.name,title:e.title,location:e.location,phone:e.phone,email:e.email},e.id)}))})]})]})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":1,"name":"Maynard Keenan","title":"Front Man","location":"Arizona","phone":"(303) 123-4567","email":"maynard@tool.com"},{"id":2,"name":"Adam Jones","title":"Guitarist","location":"California","phone":"(455) 345-9876","email":"jonesy@tool.com"},{"id":3,"name":"Justin Chancellor","title":"Bassist","location":"California","phone":"(678) 211-5757","email":"justin@tool.com"},{"id":4,"name":"Danny Carey","title":"Drummer","location":"Washington","phone":"(204) 421\u20137625","email":"danny@tool.com"},{"id":5,"name":"Dave Grohl","title":"Front Man","location":"Washington","phone":"(555) 555\u20135555","email":"dave@foofighter.com"},{"id":6,"name":"Pat Smear","title":"Guitarist","location":"Arizona","phone":"(415) 290\u20131212","email":"smear@foofighters.com"},{"id":7,"name":"Taylor Hawkins","title":"Drummer","location":"California","phone":"(578) 999\u20131245","email":"taylor@foofighters.com"},{"id":8,"name":"John Paul Jones","title":"Bassist","location":"Arizona","phone":"(970) 444\u20136867","email":"johnpaul@zepplin.com"}]')}},[[66,1,2]]]);
//# sourceMappingURL=main.a07db4c4.chunk.js.map
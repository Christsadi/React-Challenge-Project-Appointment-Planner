(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(19),s=n.n(a),i=n(17),j=n(4),r=n(11),l=n(2),b=n(0),o=function(e){var t=e.contacts,n=e.onChange;return Object(b.jsxs)("select",{onChange:n,name:"",children:[Object(b.jsx)("option",{selected:"selected",value:"",children:"No Contact Selected"},-1),t.map((function(e){return Object(b.jsxs)("option",{value:e,children:[" ",e]},e)}))]})},u=function(e){var t=e.contacts,n=e.title,c=e.setTitle,a=e.contact,s=e.setContact,i=e.date,r=e.setDate,l=e.time,u=e.setTime,d=e.handleSubmit;return Object(b.jsxs)("form",{onSubmit:d,children:[Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"text",name:"title",value:n,onChange:function(e){return c(e.target.value)},required:!0,placeholder:"Appointment Title"})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:Object(b.jsx)(o,{name:"contact",value:a,contacts:t.map((function(e){return e.name})),onChange:function(e){return s(e.target.value)},placeholder:"Appointment With"})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"date",name:"date",min:function(){var e=(new Date).toLocaleDateString("en-US").split("/"),t=Object(j.a)(e,3),n=t[0],c=t[1],a=t[2];return"".concat(a,"-").concat(n.padStart(2,"0"),"-").concat(c.padStart(2,"0"))}(),value:i,onChange:function(e){return r(e.target.value)},required:!0})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"time",name:"time",value:l,onChange:function(e){return u(e.target.value)},required:!0})}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",children:"Add Appointment"})]})},d=function(e){var t=e.tile;return Object(b.jsx)("div",{className:"tile-container",children:Object.values(t).map((function(e,t){return Object(b.jsxs)("p",{className:"".concat(0===t?"title-title":""," tile"),children:[" ",e]},t)}))})},O=function(e){var t=e.tiles;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)(d,{tile:e},t)}))})},h=function(e){var t=e.contacts,n=e.addAppointment,a=e.appointments,s=Object(c.useState)(""),i=Object(j.a)(s,2),r=i[0],l=i[1],o=Object(c.useState)(t.length>0?t[0].name:""),d=Object(j.a)(o,2),h=d[0],m=d[1],p=Object(c.useState)(""),x=Object(j.a)(p,2),v=x[0],f=x[1],g=Object(c.useState)(""),C=Object(j.a)(g,2),S=C[0],A=C[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Add Appointment"}),Object(b.jsx)(u,{contacts:t,title:r,setTitle:l,contact:h,setContact:m,date:v,setDate:f,time:S,setTime:A,handleSubmit:function(e){e.preventDefault(),n(r,h,v,S),l(""),m(""),f(""),A("")}})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Appointments"}),Object(b.jsx)(O,{tiles:a})]})]})},m=function(e){var t=e.name,n=e.setName,c=e.phone,a=e.setPhone,s=e.email,i=e.setEmail,j=e.handleSubmit;return Object(b.jsxs)("form",{onSubmit:j,children:[Object(b.jsx)("label",{children:Object(b.jsx)("input",{name:"name",value:t,type:"text",onChange:function(e){return n(e.target.value)},required:!0,placeholder:"Contact Name"})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{name:"email",value:s,type:"email",onChange:function(e){return i(e.target.value)},required:!0,placeholder:"Email address"})}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{name:"phone",value:c,pattern:"[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]",type:"tel",onChange:function(e){return a(e.target.value)},required:!0,placeholder:"Contact Number"})}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})},p=function(e){var t=e.contacts,n=e.addContact,a=Object(c.useState)(""),s=Object(j.a)(a,2),i=s[0],r=s[1],l=Object(c.useState)(""),o=Object(j.a)(l,2),u=o[0],d=o[1],h=Object(c.useState)(""),p=Object(j.a)(h,2),x=p[0],v=p[1],f=Object(c.useState)(!1),g=Object(j.a)(f,2),C=g[0],S=g[1];return Object(c.useEffect)((function(){void 0!==t.find((function(e){return e.name===i}))?S(!0):S(!1)}),[i,t,C]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("section",{children:[Object(b.jsxs)("h2",{children:["Add Contact",C?" - Name Already Exists":""]}),Object(b.jsx)(m,{name:i,setName:r,phone:u,setPhone:d,email:x,setEmail:v,handleSubmit:function(e){e.preventDefault(),C||(n(i,u,x),r(""),d(""),v(""))}})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(O,{tiles:t})]})]})};var x=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),o=Object(j.a)(s,2),u=o[0],d=o[1],O="/contacts",m="/appointsments";return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("nav",{children:[Object(b.jsx)(r.b,{to:O,activeClassName:"active",children:"Contacts"}),Object(b.jsx)(r.b,{to:m,activeClassName:"active",children:"Appointments"})]}),Object(b.jsx)("main",{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/",children:Object(b.jsx)(l.a,{to:O})}),Object(b.jsx)(l.b,{path:O,children:Object(b.jsx)(p,{contacts:u,addContact:function(e,t,n){d([].concat(Object(i.a)(u),[{name:e,phone:t,email:n}]))}})}),Object(b.jsx)(l.b,{path:m,children:Object(b.jsx)(h,{contacts:u,appointments:n,addAppointment:function(e,t,c,s){a([].concat(Object(i.a)(n),[{title:e,contact:t,date:c,time:s}]))}})})]})})]})};s.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.86db9b7f.chunk.js.map
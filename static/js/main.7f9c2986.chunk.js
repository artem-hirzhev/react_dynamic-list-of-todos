(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(12),c(4)),d=c.n(i),r=c(0),o=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":c&&c.id===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:c&&c.id===e.id?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]})},j=function(e){var t=e.query,c=e.filter,s=e.setFilter,a=e.setQuery;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return s(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(14);var u,h=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],d=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,b("/users/".concat(e))).then(d)})),Object(r.jsxs)("div",{"data-cy":"modal",className:"modal is-active",children:[Object(r.jsx)("div",{className:"modal-background"}),i?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:i.email,children:i.name})]})]})]}):Object(r.jsx)(h,{})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(u||(u={}));var O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),i=Object(n.a)(a,2),d=i[0],O=i[1],x=Object(l.useState)(null),f=Object(n.a)(x,2),p=f[0],N=f[1],v=Object(l.useState)("all"),y=Object(n.a)(v,2),g=y[0],k=y[1],S=Object(l.useState)(""),T=Object(n.a)(S,2),w=T[0],C=T[1],E=function(e,t,c){var s=e.filter((function(e){return e.title.toLowerCase().includes(c.trim().toLowerCase())})),a=s.filter((function(e){return e.completed})),n=s.filter((function(e){return!e.completed}));switch(t){case u.all:return s||e;case u.active:return n;case u.completed:return a;default:throw new Error("Wrong filter type")}}(c,g,w);return Object(l.useEffect)((function(){O(!0),b("/todos").then((function(e){s(e),O(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(j,{filter:g,query:w,setFilter:k,setQuery:C})}),Object(r.jsxs)("div",{className:"block",children:[d&&Object(r.jsx)(h,{}),Object(r.jsx)(o,{todos:E,selectedTodo:p,setSelectedTodo:N})]})]})})}),p&&Object(r.jsx)(m,{selectedTodo:p,setSelectedTodo:N})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7f9c2986.chunk.js.map
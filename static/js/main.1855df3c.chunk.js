(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[3],{11:function(t,e,n){t.exports={modal__backDrop:"Modal_modal__backDrop__35Wef",modal__content:"Modal_modal__content__e6_ry"}},17:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(9),r=n.n(a),i=n(5),l=(n(17),n(18),n(8)),s=n(3),d=n(2),u=n(21),j=n(1);function b(t){var e=t.onSubmit,n=t.toggleModal,c=t.takeTodo,a=Object(u.a)(),r=Object(u.a)(),i=Object(u.a)(),l=Object(o.useState)(""),d=Object(s.a)(l,2),b=d[0],O=d[1],m=Object(o.useState)(!0),f=Object(s.a)(m,2),h=f[0],p=f[1],x=Object(o.useState)(!1),v=Object(s.a)(x,2),g=v[0],w=v[1],_={importantTodo:{text:b,importance:"high",id:Object(u.a)()},notImportantTodo:{text:b,importance:"low",id:Object(u.a)()}},k=function(t){switch(t.target.name){case"important":w(!g),p(g);break;case"notImportant":p(!h),w(h);break;default:return"lol"}};return Object(j.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var o=_.importantTodo,a=_.notImportantTodo;switch(h){case!1:e(o),c(o),O(""),n();break;case!0:e(a),c(a),O(""),n();break;default:alert("in progress...")}},children:[Object(j.jsx)("label",{className:"form__label",htmlFor:a}),Object(j.jsx)("input",{id:a,className:"todo__input",type:"text",value:b,placeholder:"write a task",onChange:function(t){O(t.currentTarget.value.toLowerCase())}}),Object(j.jsx)("label",{htmlFor:r,className:"checkImpLabel",children:"Todo"}),Object(j.jsx)("input",{type:"checkbox",name:"notImportant",value:"important",id:r,checked:h,onChange:k}),Object(j.jsx)("label",{htmlFor:i,className:"checkImpLabel",children:"Important Todo!"}),Object(j.jsx)("input",{type:"checkbox",name:"important",value:"notImportatnt",id:i,checked:g,onChange:k}),Object(j.jsx)("button",{type:"submit",children:"Add todo"})]})}function O(t){var e=t.children,n=t.title;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:n}),e]})}function m(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{exact:"true",to:"/",className:"link",activeclassname:"active__link",children:"Important todos"}),Object(j.jsx)(i.b,{exact:"true",to:"/daily",className:"link",activeclassname:"active__link",children:"Daily todos"}),Object(j.jsx)(i.b,{exact:"true",to:"/completed",className:"link",activeclassname:"active__link",children:"Completed todos"})]})}function f(t){var e=t.inputFilter,n=t.onChange,o=Object(u.a)();return Object(j.jsxs)("div",{className:"filter",children:[Object(j.jsx)("h3",{className:"filter__title",children:"Filter todos by content"}),Object(j.jsx)("label",{className:"filter__label",htmlFor:o,children:Object(j.jsx)("input",{id:o,type:"text",value:e,autoComplete:"off",onChange:n})})]})}var h=n(11),p=n.n(h);function x(t){var e=t.children,n=t.toggleModal;Object(o.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(t){"Escape"===t.code&&n()},r=p.a.modal__backDrop,i=p.a.modal__content;return Object(a.createPortal)(Object(j.jsxs)("div",{className:r,onClick:function(t){t.currentTarget===t.target&&n()},children:[Object(j.jsx)("div",{className:i,children:e}),Object(j.jsx)("button",{type:"button",onClick:function(){n()},children:"close modal"})]}),document.getElementById("modalRoot"))}var v=Object(o.lazy)((function(){return n.e(1).then(n.bind(null,26))})),g=Object(o.lazy)((function(){return n.e(2).then(n.bind(null,27))})),w=Object(o.lazy)((function(){return n.e(0).then(n.bind(null,25))}));function _(){var t=function(t){var e=Object(o.useState)(t),n=Object(s.a)(e,2),c=n[0],a=n[1];return[c,function(){a((function(t){return!t}))}]}(!1),e=Object(s.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)(""),r=Object(s.a)(a,2),i=r[0],u=r[1],h=Object(o.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("iTodos")))&&void 0!==t?t:[]})),p=Object(s.a)(h,2),_=p[0],k=p[1],S=Object(o.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("todos")))&&void 0!==t?t:[]})),T=Object(s.a)(S,2),y=T[0],N=T[1],I=Object(o.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("cTodos")))&&void 0!==t?t:[]})),C=Object(s.a)(I,2),J=C[0],D=C[1],E=Object(o.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("defaultTodos")))&&void 0!==t?t:[]})),F=Object(s.a)(E,2),L=F[0],M=F[1],z=function(t){N(y.filter((function(e){return t!==e.id}))),k(_.filter((function(e){return t!==e.id}))),D(J.filter((function(e){return t!==e.id}))),M(L.filter((function(e){return t!==e.id})))},A=function(t){N(y.filter((function(e){return t!==e.id}))),k(_.filter((function(e){return t!==e.id}))),D((function(e){return[L.filter((function(e){return t===e.id}))[0]].concat(Object(l.a)(e))}))},B=function(t){var e=i.toLowerCase();return t.filter((function(t){return t.text.toLowerCase().includes(e)}))};return Object(o.useEffect)((function(){window.localStorage.setItem("todos",JSON.stringify(y)),window.localStorage.setItem("iTodos",JSON.stringify(_)),window.localStorage.setItem("cTodos",JSON.stringify(J)),window.localStorage.setItem("defaultTodos",JSON.stringify(L))}),[y,_,J,L]),Object(j.jsxs)(O,{title:"What you wanna to do? ;)",children:[n&&Object(j.jsx)(x,{toggleModal:c,children:Object(j.jsx)(b,{toggleModal:c,onSubmit:function(t){switch(t.importance){case"high":k((function(e){return[t].concat(Object(l.a)(e))}));break;case"low":N((function(e){return[t].concat(Object(l.a)(e))}));break;default:return"not bad"}},takeTodo:function(t){M((function(e){return[t].concat(Object(l.a)(e))}))}})}),Object(j.jsx)("button",{type:"button",onClick:c,children:"Add todo"}),Object(j.jsx)(m,{}),Object(j.jsx)("h3",{children:"TODOS"}),Object(j.jsx)(f,{onChange:function(t){u(t.currentTarget.value)},inputFilter:i}),Object(j.jsx)(o.Suspense,{fallback:"Do not be so fast :)",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{exact:!0,path:"/",element:Object(j.jsx)(v,{iTodos:B(_),deleteTodo:z,removeTodo:A})}),Object(j.jsx)(d.a,{path:"/daily",element:Object(j.jsx)(g,{todos:B(y),deleteTodo:z,removeTodo:A})}),Object(j.jsx)(d.a,{path:"/completed",element:Object(j.jsx)(w,{cTodos:B(J),deleteTodo:z,removeTodo:A})}),Object(j.jsx)(d.a,{element:Object(j.jsx)("p",{children:"sorry"})})]})})]})}r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(_,{})})}),document.getElementById("root"))}},[[20,4,5]]]);
//# sourceMappingURL=main.1855df3c.chunk.js.map
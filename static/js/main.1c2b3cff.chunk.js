(this["webpackJsonpto-do-app-readux"]=this["webpackJsonpto-do-app-readux"]||[]).push([[0],{11:function(t,e,o){t.exports={summaryTodos:"TodoStatus_summaryTodos__3bHFV"}},16:function(t,e,o){},17:function(t,e,o){},2:function(t,e,o){t.exports={upperContainer:"TodoForm_upperContainer__3RvP-",container:"TodoForm_container__1hTOp",form:"TodoForm_form__33QSx",input:"TodoForm_input__3IYKr",button:"TodoForm_button__3DaD3",alert:"TodoForm_alert__1doGx",alertBox:"TodoForm_alertBox__1ZdWF",buttonsContainer:"TodoForm_buttonsContainer__ysSmM",buttonDelete:"TodoForm_buttonDelete__1aSyn",buttonReturn:"TodoForm_buttonReturn__2B4nE"}},23:function(t,e,o){"use strict";o.r(e);var n=o(0),s=o.n(n),i=o(6),c=o.n(i),a=(o(16),o(17),o(5)),r=o(2),d=o.n(r),l=o(4),u=o.n(l),j=o(3),b=o(7),m=Object(b.b)({name:"todo",initialState:{todos:[]},reducers:{addTodo:function(t,e){var o={id:e.payload.id,text:e.payload.text,isCompleted:e.payload.isCompleted};t.todos.push(o),localStorage.setItem("todos",JSON.stringify(t.todos))},deleteTodo:function(t,e){console.log(e);var o=t.todos.filter((function(t){return t.id!==e.payload}));t.todos=o,localStorage.setItem("todos",JSON.stringify(t.todos))},toggleTodo:function(t,e){console.log(e);var o=t.todos.find((function(t){return t.id===e.payload.id}));o&&(o.isCompleted=!o.isCompleted,localStorage.setItem("todos",JSON.stringify(t.todos)))},showCompleted:function(t){t.completed=t.todos.filter((function(t){return!0===t.isCompleted}))}}}),p=m.actions,_=p.addTodo,x=p.deleteTodo,O=p.toggleTodo,f=m.reducer,h=o(1),C=function(t){Object(j.b)();var e=Object(n.useState)(""),o=Object(a.a)(e,2),s=o[0],i=o[1],c=Object(j.c)((function(t){return"Descending"===s?t.todo.todos.slice().sort((function(t,e){return e.text.toLowerCase()>t.text.toLowerCase()?1:t.text.toLowerCase()>e.text.toLowerCase()?-1:0})):"Ascending"===s?t.todo.todos.slice().sort((function(t,e){return t.text.toLowerCase()>e.text.toLowerCase()?1:e.text.toLowerCase()>t.text.toLowerCase()?-1:0})):"Completed"===s?t.todo.todos.slice().filter((function(t){return!0===t.isCompleted})):t.todo.todos}));return Object(h.jsxs)("div",{className:u.a.container,children:[Object(h.jsx)("div",{className:u.a.selectContainer,children:Object(h.jsxs)("select",{className:u.a.select,onChange:function(t){i(t.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Filter"}),Object(h.jsx)("option",{value:"Ascending",children:"Ascending"}),Object(h.jsx)("option",{value:"Descending",children:"Descending"}),Object(h.jsx)("option",{value:"Completed",children:"Completed"})]})}),Object(h.jsx)("ul",{className:u.a.listContainer,children:c.map((function(e){return Object(h.jsxs)("div",{id:e.id,onClick:t.onClick,className:e.isCompleted?[u.a.listItem,u.a.opacity].join(" , "):u.a.listItem,children:[Object(h.jsx)("li",{children:e.text}),Object(h.jsx)("div",{className:e.isCompleted?[u.a.completed].join(" , "):""}),Object(h.jsx)("button",{onClick:t.alert,className:u.a.button,children:"-"})]},e.id)}))})]})},g=o(25),T=o(11),v=o.n(T),L=function(){var t=Object(j.c)((function(t){return t.todo.todos})),e=t.filter((function(t){return!0===t.isCompleted})),o=t.filter((function(t){return!1===t.isCompleted}));return Object(h.jsxs)("div",{className:v.a.summaryTodos,children:[Object(h.jsxs)("p",{children:["Total: ",Object(h.jsx)("strong",{children:t.length})]}),Object(h.jsxs)("p",{children:["Pending: ",Object(h.jsx)("strong",{children:o.length})]}),Object(h.jsxs)("p",{children:["Completed: ",Object(h.jsx)("strong",{children:e.length})]})]})},N=function(t){var e=Object(j.c)((function(t){return t.todo.todos}));console.log(e);var o=Object(j.b)(),s=Object(n.useState)(""),i=Object(a.a)(s,2),c=i[0],r=i[1],l=Object(n.useState)(),u=Object(a.a)(l,2),b=u[0],m=u[1];console.log(b);var p=Object(n.useState)(!1),f=Object(a.a)(p,2),T=f[0],v=f[1];return Object(h.jsxs)("div",{className:d.a.upperContainer,children:[Object(h.jsxs)("div",{className:d.a.container,children:[Object(h.jsxs)("form",{className:d.a.form,onSubmit:function(t){t.preventDefault(),o(_({id:Object(g.a)(),text:c,isCompleted:!1})),r("")},action:"submit",children:[Object(h.jsx)("input",{value:c,onChange:function(t){r(t.target.value)},className:d.a.input,type:"text",placeholder:"todo..."}),Object(h.jsx)("button",{disabled:!c,className:d.a.button,children:"+"})]}),Object(h.jsx)(C,{onClick:function(t){o(O({id:t.currentTarget.id}))},alert:function(t){t.stopPropagation(),v(!0),m(t.currentTarget)},alertStatus:T})]}),Object(h.jsx)(L,{}),T&&Object(h.jsx)("div",{className:d.a.alert,children:Object(h.jsxs)("div",{className:d.a.alertBox,children:[Object(h.jsx)("p",{children:"The item will be deleted permanently. Do you with to continue?"}),Object(h.jsxs)("div",{className:d.a.buttonsContainer,children:[Object(h.jsx)("button",{className:d.a.buttonDelete,onClick:function(t){o(x(b.parentElement.id)),v(!1)},children:"DELETE"}),Object(h.jsx)("button",{className:d.a.buttonReturn,onClick:function(){m(null),v(!1)},children:"Return"})]})]})})]})};var S=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"title",children:"To do app with Redux"}),Object(h.jsx)(N,{})]})},y=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,26)).then((function(e){var o=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;o(t),n(t),s(t),i(t),c(t)}))},F=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],w=Object(b.a)({reducer:{todo:f},preloadedState:{todo:{todos:F}}});w.getState(),c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(j.a,{store:w,children:Object(h.jsx)(S,{})})}),document.getElementById("root")),y()},4:function(t,e,o){t.exports={container:"TodoList_container__1Wi6h",filterListContainer:"TodoList_filterListContainer__3EqPL",listContainer:"TodoList_listContainer__3fBxb",listItem:"TodoList_listItem__3GD4E",completed:"TodoList_completed__6tNTj",opacity:"TodoList_opacity__2kdil",selectContainer:"TodoList_selectContainer__32AiF",select:"TodoList_select__1AOOQ",summaryTodos:"TodoList_summaryTodos__3TGyH",button:"TodoList_button__25s9h",alert:"TodoList_alert__3OJCo"}}},[[23,1,2]]]);
//# sourceMappingURL=main.1c2b3cff.chunk.js.map
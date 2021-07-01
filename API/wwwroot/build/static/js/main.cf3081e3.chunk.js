(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{155:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(34),a=n.n(c),r=(n(154),n(155),n(194)),i=n(197),d=n(202),s=n(27),l=n.n(s),u=n(55),j=n(133),b=n(134),h=n(10),p=n(56),f=n.n(p);f.a.defaults.baseURL="/api",f.a.interceptors.response.use(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t);case 4:return e.prev=4,e.t0=e.catch(0),console.log(e.t0),e.next=9,Promise.reject(e.t0);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}());var O=function(e){return e.data},x=function(e){return f.a.get(e).then(O)},g=function(e,t){return f.a.post(e,t).then(O)},v=function(e,t){return f.a.put(e,t).then(O)},T=function(e){return f.a.delete(e).then(O)},m={Todos:{list:function(){return x("/todos")},details:function(e){return x("/todos/".concat(e))},create:function(e){return g("/todos",e)},update:function(e){return v("/todos/".concat(e.id),e)},delete:function(e){return T("/todos/".concat(e))}}},y=n(200),C={todoStore:new(function(){function e(){var t=this;Object(j.a)(this,e),this.todoRegistry=new Map,this.selectedTodo=void 0,this.editMode=!1,this.loading=!1,this.loadingInitial=!0,this.loadTodos=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Todos.list();case 3:e.sent.forEach((function(e){e.date=e.date.split("T")[0],t.todoRegistry.set(e.id,e)})),t.setLoadingInitial(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t.setLoadingInitial(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),this.setLoadingInitial=function(e){t.loadingInitial=e},this.selectTodo=function(e){t.selectedTodo=t.todoRegistry.get(e)},this.cancelSelectedTodo=function(){t.selectedTodo=void 0},this.openForm=function(e){e?t.selectTodo(e):t.cancelSelectedTodo(),t.editMode=!0},this.closeForm=function(){t.editMode=!1},this.createTodo=function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n.id=Object(y.a)(),e.prev=2,e.next=5,m.Todos.create(n);case 5:Object(h.g)((function(){t.todoRegistry.set(n.id,n),t.selectedTodo=n,t.editMode=!1,t.loading=!1})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0),Object(h.g)((function(){t.loading=!1}));case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),this.updateTodo=function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,m.Todos.update(n);case 4:Object(h.g)((function(){t.todoRegistry.set(n.id,n),t.selectedTodo=n,t.editMode=!1,t.loading=!1})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),Object(h.g)((function(){t.loading=!1}));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),this.deleteTodo=function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,m.Todos.delete(n);case 4:Object(h.g)((function(){var e;t.todoRegistry.delete(n),(null===(e=t.selectedTodo)||void 0===e?void 0:e.id)===n&&t.cancelSelectedTodo(),t.loading=!1})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),Object(h.g)((function(){t.loading=!1}));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),Object(h.d)(this)}return Object(b.a)(e,[{key:"todosByDate",get:function(){return Array.from(this.todoRegistry.values()).sort((function(e,t){return Date.parse(e.date)-Date.parse(t.date)}))}}]),e}())},k=Object(o.createContext)(C);function w(){return Object(o.useContext)(k)}var S=n(5);function I(){var e=w().todoStore;return Object(S.jsx)(i.a,{inverted:!0,fixed:"top",children:Object(S.jsxs)(r.a,{children:[Object(S.jsx)(i.a.Item,{header:!0}),Object(S.jsx)(i.a.Item,{name:"Todos"}),Object(S.jsx)(i.a.Item,{children:Object(S.jsx)(d.a,{onClick:function(){return e.openForm()},color:"grey",content:"Create Todo"})})]})})}var D=n(44),F=n(205),M=n(199),L=n(201),R=n(195);function E(e){var t=e.inverted,n=void 0===t||t,o=e.content,c=void 0===o?"Loading...":o;return Object(S.jsx)(L.a,{active:!0,inverted:n,children:Object(S.jsx)(R.a,{content:c})})}function B(){var e=w().todoStore,t=e.selectedTodo,n=e.openForm,o=e.cancelSelectedTodo;return t?Object(S.jsxs)(M.a,{fluid:!0,children:[Object(S.jsxs)(M.a.Content,{children:[Object(S.jsx)(M.a.Header,{children:t.title}),Object(S.jsx)(M.a.Meta,{children:Object(S.jsx)("span",{children:t.date})}),Object(S.jsx)(M.a.Description,{children:t.description})]}),Object(S.jsx)(M.a.Content,{extra:!0,children:Object(S.jsxs)(d.a.Group,{widths:"1",children:[Object(S.jsx)(d.a,{onClick:function(){return n(t.id)},basic:!0,color:"grey",content:"Edit"}),Object(S.jsx)(d.a,{onClick:o,basic:!0,color:"black",content:"Cancel"})]})})]}):Object(S.jsx)(E,{})}var P=n(101),A=n(116),G=n(103),H=n(204),J=n(196),U=Object(D.a)((function(){var e=w().todoStore,t=e.selectedTodo,n=e.closeForm,c=e.createTodo,a=e.updateTodo,r=e.loading,i=null!==t&&void 0!==t?t:{id:"",title:"",category:"",description:"",date:""},s=Object(o.useState)(i),l=Object(G.a)(s,2),u=l[0],j=l[1];function b(e){var t=e.target,n=t.name,o=t.value;j(Object(A.a)(Object(A.a)({},u),{},Object(P.a)({},n,o)))}return Object(S.jsx)(H.a,{clearing:!0,children:Object(S.jsxs)(J.a,{onSubmit:function(){u.id?a(u):c(u)},autoComplete:"off",children:[Object(S.jsx)(J.a.Input,{placeholder:"Title",value:u.title,name:"title",onChange:b}),Object(S.jsx)(J.a.TextArea,{placeholder:"Description",value:u.description,name:"description",onChange:b}),Object(S.jsx)(J.a.Input,{placeholder:"Category",value:u.category,name:"category",onChange:b}),Object(S.jsx)(J.a.Input,{type:"date",placeholder:"Date",value:u.date,name:"date",onChange:b}),Object(S.jsx)(d.a,{loading:r,floated:"right",color:"blue",type:"submit",content:"Submit"}),Object(S.jsx)(d.a,{onClick:n,floated:"right",type:"button",content:"Cancel"})]})})})),V=n(198),q=n(105),z=Object(D.a)((function(){var e=w().todoStore,t=e.deleteTodo,n=e.todosByDate,c=e.loading,a=Object(o.useState)(""),r=Object(G.a)(a,2),i=r[0],s=r[1];return Object(S.jsx)(H.a,{children:Object(S.jsx)(V.a.Group,{divided:!0,children:n.map((function(n){return Object(S.jsx)(V.a,{children:Object(S.jsxs)(V.a.Content,{children:[Object(S.jsx)(V.a.Header,{as:"a",children:n.title}),Object(S.jsx)(V.a.Meta,{children:n.date}),Object(S.jsx)(V.a.Description,{children:Object(S.jsx)("div",{children:n.description})}),Object(S.jsxs)(V.a.Extra,{children:[Object(S.jsx)(d.a,{onClick:function(){return e.selectTodo(n.id)},floated:"right",content:"View",color:"grey"}),Object(S.jsx)(d.a,{name:n.id,loading:c&&i===n.id,onClick:function(e){return function(e,n){s(e.currentTarget.name),t(n)}(e,n.id)},floated:"right",content:"Delete",color:"black"}),Object(S.jsx)(q.a,{basic:!0,content:n.category})]})]})},n.id)}))})})})),K=Object(D.a)((function(){var e=w().todoStore,t=e.selectedTodo,n=e.editMode;return Object(S.jsxs)(F.a,{children:[Object(S.jsx)(F.a.Column,{width:"10",children:Object(S.jsx)(z,{})}),Object(S.jsxs)(F.a.Column,{width:"6",children:[t&&!n&&Object(S.jsx)(B,{}),n&&Object(S.jsx)(U,{})]})]})}));var N=Object(D.a)((function(){var e=w().todoStore;return Object(o.useEffect)((function(){e.loadTodos()}),[e]),e.loadingInitial?Object(S.jsx)(E,{content:"Loading app"}):Object(S.jsxs)(o.Fragment,{children:[Object(S.jsx)(I,{}),Object(S.jsx)(r.a,{style:{marginTop:"7em"},children:Object(S.jsx)(K,{})})]})})),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};a.a.render(Object(S.jsx)(k.Provider,{value:C,children:Object(S.jsx)(N,{})}),document.getElementById("root")),Q()}},[[181,1,2]]]);
//# sourceMappingURL=main.cf3081e3.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),l=a(6),i=a(9),o=a(1),u=a(2),m=a(4),f=a(3),d=a(5);a(16);function p(e){return r.a.createElement("div",{className:"status-filter"},r.a.createElement("button",{onClick:function(){e.clickHandler("all")},className:"all"===e.filter?"btn btn-primary":"btn btn-outline-primary"},"All"),r.a.createElement("button",{onClick:function(){e.clickHandler("active")},className:"active"===e.filter?"btn btn-primary":"btn btn-outline-primary"},"Active"),r.a.createElement("button",{onClick:function(){e.clickHandler("done")},className:"done"===e.filter?"btn btn-primary":"btn btn-outline-primary"},"Done"))}a(17);var b=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-panel"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"search",onChange:function(t){e.props.searchHandler(t.target.value)},value:this.props.searchValue}),r.a.createElement(p,{clickHandler:this.props.filterHandler,filter:this.props.filter}))}}]),t}(n.Component),h=(a(18),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.delHandler,n=e.toggleDone,c=e.toggleImportant,s="desc "+(t.done?"done ":"")+(t.important?"important":"");return r.a.createElement("div",{className:"list-group-item"},r.a.createElement("span",{onClick:n,className:s},t.label),r.a.createElement("div",{className:"control"},r.a.createElement("button",{onClick:a,className:"btn btn-outline-danger btn-sm"},r.a.createElement("i",{className:"fas fa-trash-alt"})),r.a.createElement("button",{onClick:c,className:"btn btn-outline-success btn-sm"},r.a.createElement("i",{className:"fas fa-exclamation"}))))}}]),t}(n.Component));a(19);function k(e){var t=e.tasks,a=e.delHandler,n=e.toggleDone,c=e.toggleImportant,s=t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{task:e,delHandler:function(){return a(e.id)},toggleDone:function(){return n(e.id)},toggleImportant:function(){return c(e.id)}}))});return r.a.createElement("ul",{className:"list-group"},s)}a(20);var g=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"add-panel"},r.a.createElement("input",{className:"form-control add-task",type:"text",placeholder:"Description task here ..."}),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=document.querySelector(".add-task");e.props.addHandler(t.value),t.value=""}},"Add"))}}]),t}(n.Component),v=(a(21),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).counter=0,a.createTask=function(e){return{label:e,id:++a.counter,done:!1,important:!1}},a.state={tasks:[a.createTask("Drink coffee"),a.createTask("Make awesome react app")],filter:"all",search:""},a.filterTasks=function(){var e=a.state.tasks;return"active"===a.state.filter?e=e.filter(function(e){return!e.done}):"done"===a.state.filter&&(e=e.filter(function(e){return e.done})),e=e.filter(function(e){return!(-1===e.label.toLowerCase().indexOf(a.state.search.toLowerCase()))})},a.setSearch=function(e){a.setState({search:e})},a.setFilter=function(e){a.setState({filter:e})},a.addTask=function(e){var t=a.createTask(e);a.setState(function(e){var a=e.tasks;return{tasks:[].concat(Object(i.a)(a),[t])}})},a.delTask=function(e){a.setState(function(t){return{tasks:t.tasks.filter(function(t){return t.id!==e})}})},a.toggleDone=function(e){a.setState(function(t){return{tasks:t.tasks.map(function(t){return t.id===e?Object(l.a)({},t,{done:!t.done}):t})}})},a.toggleImportant=function(e){a.setState(function(t){return{tasks:t.tasks.map(function(t){return t.id===e?Object(l.a)({},t,{important:!t.important}):t})}})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log(this.state.search),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"app-header"},"TODO List"),r.a.createElement(b,{filter:this.state.filter,filterHandler:this.setFilter,searchValue:this.state.search,searchHandler:this.setSearch}),r.a.createElement(k,{tasks:this.filterTasks(),delHandler:this.delTask,toggleDone:this.toggleDone,toggleImportant:this.toggleImportant}),r.a.createElement(g,{addHandler:this.addTask}))}}]),t}(n.Component));s.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.e991c0a7.chunk.js.map
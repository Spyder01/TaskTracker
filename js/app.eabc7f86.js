(function(t){function e(e){for(var a,c,s=e[0],d=e[1],i=e[2],l=0,k=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&k.push(r[c][0]),r[c]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);u&&u(e);while(k.length)k.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var d=n[s];0!==r[d]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var u=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3e44":function(t,e,n){"use strict";n("a580")},"46a0":function(t,e,n){"use strict";n("b802")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"container"};function o(t,e,n,o,c,s){var d=Object(a["j"])("Header"),i=Object(a["j"])("AddTask"),u=Object(a["j"])("Tasks");return Object(a["f"])(),Object(a["c"])("div",r,[Object(a["e"])(d,{onToggleAddTask:s.showTask,showAddTask:c.showAddTask,title:"TaskTracker"},null,8,["onToggleAddTask","showAddTask"]),Object(a["o"])(Object(a["e"])("div",null,[Object(a["e"])(i,{onAddTask:s.AddTask},null,8,["onAddTask"])],512),[[a["n"],c.showAddTask]]),Object(a["e"])(u,{onDeleteTask:s.deleteTask,onMarkUnmark:s.markUnmark,tasks:c.tasks},null,8,["onDeleteTask","onMarkUnmark","tasks"])])}var c=n("2909"),s=n("5530"),d=(n("4de4"),n("d81d"),n("99af"),Object(a["p"])("data-v-a70611f4")),i=d((function(t,e,n,r,o,c){var s=Object(a["j"])("Button");return Object(a["f"])(),Object(a["c"])("header",null,[Object(a["e"])("h1",null,Object(a["k"])(n.title),1),Object(a["e"])(s,{onToggleAddTask:e[1]||(e[1]=function(e){return t.$emit("toggle-add-task")}),text:t.showAddTask?"Close":"Add Task",color:t.showAddTask?"red":"teal"},null,8,["text","color"])])})),u=Object(a["p"])("data-v-213d93ce"),l=u((function(t,e,n,r,o,c){return Object(a["f"])(),Object(a["c"])("button",{class:"btn",onClick:e[1]||(e[1]=function(){return c.onClick&&c.onClick.apply(c,arguments)}),type:"button",style:{background:n.color}},Object(a["k"])(n.text),5)})),k={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("toggle-add-task")}}};n("8a53");k.render=l,k.__scopeId="data-v-213d93ce";var f=k,b={name:"Header",props:{title:String},components:{Button:f},emits:["toggle-add-task"]};n("a4d9");b.render=i,b.__scopeId="data-v-a70611f4";var m=b;function p(t,e,n,r,o,c){var s=Object(a["j"])("Task");return Object(a["f"])(!0),Object(a["c"])(a["a"],null,Object(a["i"])(n.tasks,(function(e){return Object(a["f"])(),Object(a["c"])("div",{key:e.id},[Object(a["e"])(s,{onDeleteTask:function(n){return t.$emit("delete-task",e.id)},task:e,onMarkUnmark:function(n){return t.$emit("mark-unmark",e.id)}},null,8,["onDeleteTask","task","onMarkUnmark"])])})),128)}var j=Object(a["p"])("data-v-e2d48c9c"),O=j((function(t,e,n,r,o,c){return Object(a["f"])(),Object(a["c"])("div",{onDblclick:e[2]||(e[2]=function(t){return c.reminderMark(n.task.id)}),class:[n.task.remainder?"remainder":"","task"]},[Object(a["e"])("h3",null,[Object(a["d"])(Object(a["k"])(n.task.text)+" ",1),Object(a["e"])("i",{onClick:e[1]||(e[1]=function(t){return c.onDelete(n.task.id)}),class:"fa fa-trash"})]),Object(a["e"])("p",null,Object(a["k"])(n.task.day),1)],34)})),h={name:"Task",props:{task:Object},methods:{onDelete:function(t){this.$emit("delete-task",t)},reminderMark:function(t){this.$emit("mark-unmark",t)}}};n("3e44");h.render=O,h.__scopeId="data-v-e2d48c9c";var v=h,T={name:"Tasks",components:{Task:v},props:{tasks:Array},emits:["delete-task","mark-unmark"]};T.render=p;var y=T,g=Object(a["p"])("data-v-85c86df8");Object(a["h"])("data-v-85c86df8");var A={class:"form-control"},x=Object(a["e"])("label",null,"Task",-1),w={class:"form-control"},S=Object(a["e"])("label",null,"Day & Time",-1),M={class:"form-control form-control-check"},_=Object(a["e"])("label",null,"Set Reminder",-1),D=Object(a["e"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1);Object(a["g"])();var U=g((function(t,e,n,r,o,c){return Object(a["f"])(),Object(a["c"])("form",{onSubmit:e[4]||(e[4]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(a["e"])("div",A,[x,Object(a["o"])(Object(a["e"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.text=t}),name:"text",placeholder:"Add Task"},null,512),[[a["m"],o.text]])]),Object(a["e"])("div",w,[S,Object(a["o"])(Object(a["e"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.day=t}),name:"day",placeholder:"Add Day & Time"},null,512),[[a["m"],o.day]])]),Object(a["e"])("div",M,[_,Object(a["o"])(Object(a["e"])("input",{type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=function(t){return o.remainder=t}),name:"reminder"},null,512),[[a["l"],o.remainder]])]),D],32)})),P={name:"AddTask",data:function(){return{text:"",day:"",remainder:!1}},methods:{onSubmit:function(t){if(t.preventDefault(),this.text){var e={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,remainder:this.remainder};this.$emit("add-task",e)}else alert("Add a Task")}}};n("46a0");P.render=U,P.__scopeId="data-v-85c86df8";var $=P,C={name:"App",components:{Header:m,Tasks:y,AddTask:$},data:function(){return{tasks:[],showAddTask:!1}},methods:{deleteTask:function(t){confirm("Are You Sure?")&&(this.tasks=this.tasks.filter((function(e){return e.id!==t})))},markUnmark:function(t){this.tasks=this.tasks.map((function(e){return e.id===t?Object(s["a"])(Object(s["a"])({},e),{},{remainder:!e.remainder}):e}))},AddTask:function(t){this.tasks=[].concat(Object(c["a"])(this.tasks),[t])},showTask:function(){this.showAddTask=!this.showAddTask}},created:function(){this.tasks=[{id:1,text:"Doctor's Appointment",day:"March 1st at 2:30pm",remainder:!0},{id:2,text:"Meetin at School",day:"March 3rd at 1:30pm",remainder:!0},{id:3,text:"Food Shopping",day:"March 3rd at 11:00am",remainder:!1}]}};n("d70a");C.render=o;var I=C;Object(a["b"])(I).mount("#app")},"8a53":function(t,e,n){"use strict";n("c1a2")},"8c80":function(t,e,n){},a4d9:function(t,e,n){"use strict";n("c1b2")},a580:function(t,e,n){},b802:function(t,e,n){},c1a2:function(t,e,n){},c1b2:function(t,e,n){},d70a:function(t,e,n){"use strict";n("8c80")}});
//# sourceMappingURL=app.eabc7f86.js.map
(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(18),i=a.n(c),o=a(21),r=a(7),l=a(115),d=a(116),h=(a(67),a(2));var m=Object(r.f)((function(e){return Object(h.jsxs)(l.a,{className:"header bg-danger text-white",children:[Object(h.jsx)(l.a.Brand,{className:"navbar-brand",children:Object(h.jsx)(o.b,{className:"nav-item",to:"/",children:"Kyle Kleven"})}),Object(h.jsx)(l.a.Toggle,{"arai-controls":"basic-navbar-nav"}),Object(h.jsx)(d.a,{children:Object(h.jsx)(l.a.Collapse,{children:Object(h.jsxs)("ul",{className:"navbar-nav",children:[Object(h.jsx)("li",{className:"nav-item  ".concat("/"===e.location.pathname?"active":""),children:Object(h.jsx)(o.b,{className:"nav-link",to:"/",children:"About"})}),Object(h.jsx)("li",{className:"nav-item  ".concat("/portfolio"===e.location.pathname?"active":""),children:Object(h.jsx)(o.b,{className:"nav-link",to:"/portfolio",children:"Portfolio"})}),Object(h.jsx)("li",{className:"nav-item  ".concat("/contact"===e.location.pathname?"active":""),children:Object(h.jsx)(o.b,{className:"nav-link",to:"/contact",children:"Contact"})})]})})})]})}));a(76);var j=function(){return Object(h.jsxs)("footer",{className:"footer bg-danger text-light",children:["10GU \xa92021",Object(h.jsx)("span",{children:" || "}),Object(h.jsx)("a",{href:"mailto:kylekleven8@gmail.com",children:"kylekleven8@gmail.com"}),Object(h.jsx)("span",{children:" || "}),Object(h.jsx)("a",{href:"tel:612-670-7837",children:"612-670-7837"}),Object(h.jsx)("span",{children:" || "}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/kdkleven/",children:"LinkedIn"}),Object(h.jsx)("span",{children:" || "}),Object(h.jsx)("a",{href:"https://github.com/kdkleven",children:"GitHub"}),Object(h.jsx)("span",{children:" || "}),Object(h.jsx)("a",{href:"assets/files/kk_Resume.pdf",download:!0,children:"Resume"})]})},u=a(112);a(77);var b=function(){return Object(h.jsxs)("div",{className:"body",children:[Object(h.jsx)("h1",{className:"font-weight-light",children:"About"}),Object(h.jsx)(u.a,{id:"headshot",src:"assets/img/headshot.jpg",alt:"headshot",roundedCircle:!0}),Object(h.jsxs)("p",{id:"about-body",children:["I am a highly motivated engineer with over 15 years of experience testing of complex software applications across multiple industries. My project work ranges from highly configurable web-based platforms to massively popular video games, including multiple titles in the Call of Duty franchise.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"As a freelance Full-Stack Software Developer, I have experience in HTML, CSS, Javascript, NodeJS, Express, React, MongoDB, Bootstrap, Axios, Ajax, jMeter, Chartjs, first and third-party APIs, indexedDB, MySQL, Handlebars, Mongoose, Sequelize."]})]})},p=a(114),g=a(33),f=a(34),x=a(39),O=a(38),v=a(117),k=a(113),y=a(62),N=a(59),w=(a(48),function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={projects:N},e}return Object(f.a)(a,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:this.state.projects.map((function(e){return Object(h.jsxs)(v.a,{style:{width:"18rem"},bg:"light",text:"black",className:"mb-1",children:[Object(h.jsx)(v.a.Img,{className:"card-img-top",src:e.img,alt:e.name}),Object(h.jsxs)(v.a.Body,{className:"d-flex flex-column",children:[Object(h.jsx)(v.a.Title,{children:e.name}),Object(h.jsx)(v.a.Text,{className:"card-text",children:e.desc}),Object(h.jsxs)(k.a,{className:"mt-auto",id:"dropdown-basic-button",variant:"danger",title:"Check it out!",children:[Object(h.jsx)(y.a.Item,{className:"dropdown-text",href:e.app,children:"Live App"}),Object(h.jsx)(y.a.Item,{className:"dropdown-text",href:e.repo,children:"Repository"})]})]})]},e.id)}))})}}]),a}(s.Component));var S=function(){return Object(h.jsxs)("div",{className:"container body",children:[Object(h.jsx)("h1",{className:"font-weight-light",children:"Portfolio"}),Object(h.jsx)(p.a,{className:"card-deck",children:Object(h.jsx)(w,{})})]})},C=a(61),A=a.n(C),D=(a(97),a(98),function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(e){var s;return Object(g.a)(this,a),(s=t.call(this,e)).state={name:"",email:"",message:""},s}return Object(f.a)(a,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),A()({method:"POST",url:"http://localhost:3002/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"body",children:[Object(h.jsx)("h1",{className:"font-weight-light",children:"Contact"}),Object(h.jsxs)("form",{id:"contact-form",className:"mb-3",onSubmit:this.handleSubmit.bind(this),method:"POST",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{type:"text",className:"form-control"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(h.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"message",children:"Message"}),Object(h.jsx)("textarea",{className:"form-control",rows:"5"})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-danger",children:"Submit"})]})]})}}]),a}(n.a.Component));a(104);var F=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{path:"/",exact:!0,component:function(){return Object(h.jsx)(b,{})}}),Object(h.jsx)(r.a,{path:"/portfolio",exact:!0,component:function(){return Object(h.jsx)(S,{})}}),Object(h.jsx)(r.a,{path:"/contact",exact:!0,component:function(){return Object(h.jsx)(D,{})}})]}),Object(h.jsx)(j,{})]})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,118)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};a(105),a(106);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),M()},48:function(e,t,a){},59:function(e){e.exports=JSON.parse('[{"id":1,"name":"Daily Recreational","desc":"An applicaiton to inspire you to get out of the house and rekindle your love for outdoor activities.","img":"/assets/img/DailyRecreational.png","app":"https://kdkleven.github.io/dailyRecreational/","repo":"https://github.com/kdkleven/dailyRecreational"},{"id":2,"name":"Cup of Sugar","desc":"A platform for good neighbors to be good neighbors.","img":"/assets/img/cupofsugar.png","app":"https://cup-of-sugar-app.herokuapp.com/","repo":"https://github.com/kdkleven/Cup-of-Sugar"},{"id":3,"name":"Tech Blog","desc":"A blog for technically-minded individuals to share experience.","img":"/assets/img/techblog.PNG","app":"https://kk-tech-blog.herokuapp.com/","repo":"https://github.com/kdkleven/techBlog"},{"id":4,"name":"iWorkout","desc":"Workout tracker to help you track your daily workout routine.","img":"/assets/img/iworkout.jpg","app":"https://kk-workout.herokuapp.com/","repo":"https://github.com/kdkleven/iWorkout"},{"id":5,"name":"Snuze","desc":"A tranquil React app, and was designed to meet the needs of users who want some extra help to fall asleep comfortably.","img":"assets/img/snuze.png","app":"https://snueze.herokuapp.com/","repo":"https://github.com/kdkleven/Snueze"},{"id":6,"name":"empDirStat","desc":"An employee directory, with filter and sort functionality, built using React.","img":"/assets/img/empdirstat.JPG","app":"https://kdkleven.github.io/empDirStat/","repo":"https://github.com/kdkleven/empDirStat"}]')},67:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},97:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.da5013cc.chunk.js.map
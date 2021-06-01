(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(18),o=a.n(s),i=a(21),r=a(7),l=a(115),d=a(116),h=(a(67),a(2));var j=Object(r.f)((function(e){return Object(h.jsxs)(l.a,{className:"header bg-danger text-white",children:[Object(h.jsx)(l.a.Brand,{className:"navbar-brand",children:Object(h.jsx)(i.b,{className:"nav-item",to:"/",children:"Kyle Kleven"})}),Object(h.jsx)(l.a.Toggle,{"arai-controls":"basic-navbar-nav"}),Object(h.jsx)(d.a,{children:Object(h.jsx)(l.a.Collapse,{children:Object(h.jsxs)("ul",{className:"navbar-nav",children:[Object(h.jsx)("li",{className:"nav-item  ".concat("/"===e.location.pathname?"active":""),children:Object(h.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})}),Object(h.jsx)("li",{className:"nav-item  ".concat("/portfolio"===e.location.pathname?"active":""),children:Object(h.jsx)(i.b,{className:"nav-link",to:"/portfolio",children:"Portfolio"})}),Object(h.jsx)("li",{className:"nav-item  ".concat("/contact"===e.location.pathname?"active":""),children:Object(h.jsx)(i.b,{className:"nav-link",to:"/contact",children:"Contact"})})]})})})]})}));a(76);var m=function(){return Object(h.jsxs)("footer",{className:"footer bg-danger text-light",children:["10GU \xa92021",Object(h.jsx)("span",{children:" || "}),Object(h.jsx)("a",{href:"mailto:kylekleven8@gmail.com",children:"kylekleven8@gmail.com"}),Object(h.jsx)("span",{children:" || "}),Object(h.jsx)("a",{href:"tel:612-670-7837",children:"612-670-7837"}),Object(h.jsx)("span",{children:" || "}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/kdkleven/",children:"LinkedIn"}),Object(h.jsx)("span",{children:" || "}),Object(h.jsx)("a",{href:"https://github.com/kdkleven",children:"GitHub"}),Object(h.jsx)("span",{children:" || "}),Object(h.jsx)("a",{href:"assets/files/kk_Resume.pdf",download:!0,children:"Resume"})]})},u=a(112);var b=function(){return Object(h.jsxs)("div",{className:"body",children:[Object(h.jsx)("h1",{className:"font-weight-light",children:"Welcome to Kyle's Portfolio"}),Object(h.jsx)(u.a,{id:"welcome",src:"img/enso.jpg",alt:"welcome",roundedCircle:!0})]})};a(77);var p=function(){return Object(h.jsxs)("div",{className:"body",children:[Object(h.jsx)("h1",{className:"font-weight-light",children:"About"}),Object(h.jsx)(u.a,{id:"headshot",src:"img/headshot.jpg",alt:"headshot",roundedCircle:!0}),Object(h.jsxs)("p",{id:"about-body",children:["I am a highly motivated engineer with over 15 years of experience testing of complex software applications across multiple industries. My project work ranges from highly configurable web-based platforms to massively popular video games, including multiple titles in the Call of Duty franchise.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"As a freelance Full-Stack Software Developer, I have experience in HTML, CSS, Javascript, NodeJS, Express, React, MongoDB, Bootstrap, Axios, Ajax, jMeter, Chartjs, first and third-party APIs, indexedDB, MySQL, Handlebars, Mongoose, Sequelize."]})]})},g=a(114),x=a(34),f=a(35),O=a(40),v=a(39),k=a(117),y=a(113),N=a(62),w=a(59),S=(a(48),function(e){Object(O.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={Projects:w},e}return Object(f.a)(a,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:this.state.Projects.map((function(e){return Object(h.jsxs)(k.a,{style:{width:"18rem"},bg:"light",text:"black",className:"mb-1",children:[Object(h.jsx)(k.a.Img,{className:"card-img-top",src:e.image,alt:e.name}),Object(h.jsxs)(k.a.Body,{className:"d-flex flex-column",children:[Object(h.jsx)(k.a.Title,{children:e.name}),Object(h.jsx)(k.a.Text,{className:"card-text",children:e.desc}),Object(h.jsxs)(y.a,{className:"mt-auto",id:"dropdown-basic-button",variant:"danger",title:"Check it out!",children:[Object(h.jsx)(N.a.Item,{className:"dropdown-text",href:e.app,children:"Live App"}),Object(h.jsx)(N.a.Item,{className:"dropdown-text",href:e.repo,children:"Repository"})]})]})]},e.id)}))})}}]),a}(n.Component));var C=function(){return Object(h.jsxs)("div",{className:"container body",children:[Object(h.jsx)("h1",{className:"font-weight-light",children:"Portfolio"}),Object(h.jsx)(g.a,{className:"card-deck",children:Object(h.jsx)(S,{})})]})},A=a(61),P=a.n(A),D=(a(97),a(98),function(e){Object(O.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n}return Object(f.a)(a,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),P()({method:"POST",url:"http://localhost:3002/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"body",children:[Object(h.jsx)("h1",{className:"font-weight-light",children:"Contact"}),Object(h.jsxs)("form",{id:"contact-form",className:"mb-3",onSubmit:this.handleSubmit.bind(this),method:"POST",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{type:"text",className:"form-control"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(h.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"message",children:"Message"}),Object(h.jsx)("textarea",{className:"form-control",rows:"5"})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-danger",children:"Submit"})]})]})}}]),a}(c.a.Component));a(104);var F=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(j,{}),Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{path:"/",exact:!0,component:function(){return Object(h.jsx)(b,{})}}),Object(h.jsx)(r.a,{path:"/about",exact:!0,component:function(){return Object(h.jsx)(p,{})}}),Object(h.jsx)(r.a,{path:"/portfolio",exact:!0,component:function(){return Object(h.jsx)(C,{})}}),Object(h.jsx)(r.a,{path:"/contact",exact:!0,component:function(){return Object(h.jsx)(D,{})}})]}),Object(h.jsx)(m,{})]})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,118)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};a(105),a(106);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),M()},48:function(e,t,a){},59:function(e){e.exports=JSON.parse('[{"id":1,"name":"Daily Recreational","desc":"An applicaiton to inspire you to get out of the house and rekindle your love for outdoor activities.","image":"img/DailyRecreational.png","app":"https://kdkleven.github.io/dailyRecreational/","repo":"https://github.com/kdkleven/dailyRecreational"},{"id":2,"name":"Cup of Sugar","desc":"A platform for good neighbors to be good neighbors.","image":"img/cupofsugar.png","app":"https://cup-of-sugar-app.herokuapp.com/","repo":"https://github.com/kdkleven/Cup-of-Sugar"},{"id":3,"name":"Tech Blog","desc":"A blog for technically-minded individuals to share experience.","image":"img/techblog.PNG","app":"https://kk-tech-blog.herokuapp.com/","repo":"https://github.com/kdkleven/techBlog"},{"id":4,"name":"iWorkout","desc":"Workout tracker to help you track your daily workout routine.","image":"img/iworkout.jpg","app":"https://kk-workout.herokuapp.com/","repo":"https://github.com/kdkleven/iWorkout"},{"id":5,"name":"Snuze","desc":"A tranquil React app, and was designed to meet the needs of users who want some extra help to fall asleep comfortably.","image":"img/snuze.png","app":"https://snueze.herokuapp.com/","repo":"https://github.com/kdkleven/Snueze"},{"id":6,"name":"empDirStat","desc":"An employee directory, with filter and sort functionality, built using React.","image":"img/empdirstat.JPG","app":"https://kdkleven.github.io/empDirStat/","repo":"https://github.com/kdkleven/empDirStat"}]')},67:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},97:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.17313d9e.chunk.js.map
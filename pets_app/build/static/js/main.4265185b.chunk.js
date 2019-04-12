(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},39:function(e,t,a){e.exports=a(74)},48:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(22),i=a.n(s),r=a(11),c=a(18),o=a(21),m=a(24),p={petDetails:[]},u=Object(m.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"UPDATE_REDUX_INITIAL_LOAD":return Object(o.a)({},e,{petDetails:t.payload});case"ADD_NEW_PET_DATA":return Object(o.a)({},e,{petDetails:[].concat(Object(c.a)(e.petDetails),[t.payload])});case"DELETE_PET":return Object(o.a)({},e,{petDetails:[].concat(Object(c.a)(e.petDetails.slice(0,t.payload)),Object(c.a)(e.petDetails.slice(t.payload+1)))});case"EDIT_PET_DATA":return Object(o.a)({},e,{petDetails:[].concat(Object(c.a)(e.petDetails.slice(0,t.idx)),[e.petDetails[t.idx]=t.payload],Object(c.a)(e.petDetails.slice(t.idx+1)))});default:return e}},p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),d=(a(48),a(3)),h=a(4),E=a(6),b=a(5),f=a(7),g=a(15),k=a(14),v=a(13),y=a.n(v),C=(a(27),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).componentDidMount=function(){y.a.get("/pets/fetchpetsdata").then(function(e){200===e.status&&a.props.initialLoad(e.data)}).catch(function(e){console.log(e)})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pagecontainer"},l.a.createElement("h2",null," These pets are looking for a home!"),l.a.createElement(g.b,{to:"/pets/new"},"Add a pet to the shelter"),l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions")),this.props.petsdata.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement("button",{className:"btn-lg petbtn"},l.a.createElement(g.b,{to:"/pets/".concat(e.id)},"Details")),l.a.createElement("button",{className:"btn-lg petbtn"},l.a.createElement(g.b,{to:"/pets/".concat(e.id,"/edit")},"Edit"))))}))))}}]),t}(l.a.Component)),N=Object(r.b)(function(e){return{petsdata:e.petDetails}},function(e){return{initialLoad:function(t){e({type:"UPDATE_REDUX_INITIAL_LOAD",payload:t})}}})(C),O=a(16),D=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value)),"name"===e.target.name?e.target.value.length<3?a.setState({nameClass:"error"}):a.setState({nameClass:"hide",nameValid:1}):"type"===e.target.name?e.target.value.length<3?a.setState({typeClass:"error"}):a.setState({typeClass:"hide",typeValid:1}):"description"===e.target.name&&(e.target.value.length<3?a.setState({descriptionClass:"error"}):a.setState({descriptionClass:"hide",descriptionValid:1}))},a.addPetData=function(){var e;e=[a.state.skill1,a.state.skill2,a.state.skill3],console.log(e);var t={id:(a.props.petdata.length+1).toString(),name:a.state.name,type:a.state.type,description:a.state.description,skills:e,likes:0};y.a.post("/pets/postnewpetdata",t).then(function(e){200===e.status&&(a.props.addNewPetToRedux(t),a.props.history.push("/pets"))}).catch(function(e){console.log(e)})},a.state={name:"",type:"",description:"",skill1:"",skill2:"",skill3:"",nameClass:"hide",nameValid:0,typeClass:"hide",typeValid:0,descriptionClass:"hide",descriptionValid:0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"pagecontainer"},l.a.createElement("h2",null,"Know of a pet needing a home?"),l.a.createElement("h3",null,"The pet must have a name"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Pet name:"),l.a.createElement("input",{className:"form-control",name:"name",onChange:this.handleChange}),l.a.createElement("small",{className:this.state.nameClass},"Petname must be 3 characters long")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"type"},"Pet type:"),l.a.createElement("input",{className:"form-control",name:"type",onChange:this.handleChange}),l.a.createElement("small",{className:this.state.typeClass},"Pet type must be 3 characters long")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Pet description:"),l.a.createElement("input",{className:"form-control",name:"description",onChange:this.handleChange}),l.a.createElement("small",{className:this.state.descriptionClass},"description must be atleast 3 characters long")),l.a.createElement("label",null,"Skills:"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"skill1"},"Skill 1:"),l.a.createElement("input",{className:"form-control",name:"skill1",onChange:this.handleChange,value:this.state.skill1})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"skill2"},"Skill 2:"),l.a.createElement("input",{className:"form-control",name:"skill2",onChange:this.handleChange,value:this.state.skill2})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"skill3"},"Skill 3:"),l.a.createElement("input",{className:"form-control",name:"skill3",onChange:this.handleChange,value:this.state.skill3})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn-lg petbtn",onClick:this.addPetData,disabled:!(this.state.nameValid&&this.state.typeValid&&this.state.descriptionValid)},"Add Pet"),l.a.createElement("button",{className:"btn-lg petbtn",onClick:function(){e.props.history.push("/pets")}},"Cancel"))))}}]),t}(l.a.Component),j=Object(r.b)(function(e){return{petdata:e.petDetails}},function(e){return{addNewPetToRedux:function(t){e({type:"ADD_NEW_PET_DATA",payload:t})}}})(D),P=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).componentDidMount=function(){var e=a.props.petdata.find(function(e){return e.id===a.props.match.params.id}),t=a.props.petdata.findIndex(function(e){return e.id===a.props.match.params.id});a.setState({name:e.name,type:e.type,description:e.description,skill1:e.skills[0]?e.skills[0]:"",skill2:e.skills[1]?e.skills[1]:"",skill3:e.skills[2]?e.skills[2]:"",index:t})},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value)),"name"===e.target.name?e.target.value.length<3?a.setState({nameClass:"error"}):a.setState({nameClass:"hide",nameValid:1}):"type"===e.target.name?e.target.value.length<3?a.setState({typeClass:"error"}):a.setState({typeClass:"hide",typeValid:1}):"description"===e.target.name&&(e.target.value.length<3?a.setState({descriptionClass:"error"}):a.setState({descriptionClass:"hide",descriptionValid:1}))},a.editPetData=function(){var e;e=[a.state.skill1,a.state.skill2,a.state.skill3],console.log(e);var t={id:a.props.match.params.id,name:a.state.name,type:a.state.type,description:a.state.description,skills:e,likes:0};console.log(t),y.a.put("/pets/editpetdata/".concat(a.props.match.params.id),t).then(function(e){console.log(e),200===e.status&&(a.props.editPetInRedux(t,a.state.index),a.props.history.push("/pets"))}).catch(function(e){console.log(e)})},a.state={name:"",type:"",description:"",skill1:"",skill2:"",skill3:"",nameClass:"hide",nameValid:0,typeClass:"hide",typeValid:0,descriptionClass:"hide",descriptionValid:0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"pagecontainer"},l.a.createElement("h3",null,"Edit this pet details"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Pet name:"),l.a.createElement("input",{className:"form-control",name:"name",onChange:this.handleChange,value:this.state.name}),l.a.createElement("small",{className:this.state.nameClass},"Petname must be 3 characters long")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"type"},"Pet type:"),l.a.createElement("input",{className:"form-control",name:"type",onChange:this.handleChange,value:this.state.type}),l.a.createElement("small",{className:this.state.typeClass},"Pet type must be 3 characters long")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Pet description:"),l.a.createElement("input",{className:"form-control",name:"description",onChange:this.handleChange,value:this.state.description}),l.a.createElement("small",{className:this.state.descriptionClass},"description must be atleast 3 characters long")),l.a.createElement("label",null,"Skills:"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"skill1"},"Skill 1:"),l.a.createElement("input",{className:"form-control",name:"skill1",onChange:this.handleChange,value:this.state.skill1})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"skill2"},"Skill 2:"),l.a.createElement("input",{className:"form-control",name:"skill2",onChange:this.handleChange,value:this.state.skill2})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"skill3"},"Skill 3:"),l.a.createElement("input",{className:"form-control",name:"skill3",onChange:this.handleChange,value:this.state.skill3})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn-lg petbtn",onClick:this.editPetData},"Edit Pet"),l.a.createElement("button",{className:"btn-lg petbtn",onClick:function(){e.props.history.push("/pets")}},"Cancel"))))}}]),t}(l.a.Component),S=Object(r.b)(function(e){return{petdata:e.petDetails}},function(e){return{editPetInRedux:function(t,a){e({type:"EDIT_PET_DATA",payload:t,idx:a})}}})(P),_=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).componentDidMount=function(){var e=a.props.petDetails.find(function(e){return e.id===a.props.match.params.id}),t=a.props.petDetails.findIndex(function(e){return e.id===a.props.match.params.id});a.setState({pet:e,index:t})},a.deletePet=function(){y.a.delete("/pets/deletepet/".concat(a.props.match.params.id)).then(function(e){200===e.status&&(a.props.deletePetFromRedux(a.state.index),a.props.history.push("/pets"))}).catch(function(e){console.log(e)})},a.state={pet:"",index:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"pagecontainer"},l.a.createElement("h2",null,"Details about ",this.state.pet.name),l.a.createElement("h3",null,l.a.createElement("span",null,"Pet type:"),this.state.pet.type),l.a.createElement("h3",null,l.a.createElement("span",null,"description:"),this.state.pet.description),l.a.createElement("h3",null,l.a.createElement("span",null,"skills:")),l.a.createElement("ul",null,void 0!==this.state.pet.skills?this.state.pet.skills.map(function(e){return l.a.createElement("li",null,e)}):""),l.a.createElement("h3",null,l.a.createElement("span",null,"likes:"),this.state.pet.likes),l.a.createElement("button",{className:"btn-lg petbtn"},"Like this pet"),l.a.createElement("button",{className:"btn-lg petbtn",onClick:this.deletePet},"Adopt this pet"))}}]),t}(l.a.Component),T=Object(r.b)(function(e){return{petDetails:e.petDetails}},function(e){return{deletePetFromRedux:function(t){e({type:"DELETE_PET",payload:t})}}})(_),w=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(k.d,null,l.a.createElement(k.a,{exact:!0,from:"/",to:"/pets"}),l.a.createElement(k.b,{exact:!0,path:"/pets/:id/edit",component:S}),l.a.createElement(k.b,{exact:!0,path:"/pets/new",component:j}),l.a.createElement(k.b,{exact:!0,path:"/pets/:id",component:T}),l.a.createElement(k.b,{exact:!0,path:"/pets",component:N})))}}]),t}(l.a.Component),x=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g.a,null,l.a.createElement(w,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73);i.a.render(l.a.createElement(r.a,{store:u},l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.4265185b.chunk.js.map
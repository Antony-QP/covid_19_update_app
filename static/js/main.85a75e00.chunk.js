(this.webpackJsonpcovid_update_app=this.webpackJsonpcovid_update_app||[]).push([[0],{30:function(e,t){},31:function(e,t){},34:function(e,t,a){e.exports=a(64)},58:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),c=a.n(s),l=a(15),o=a.n(l),u=a(29),i=a(8),d=a(9),h=a(11),m=a(10),p=a(14),f=a(1),E=function(){return r.a.createElement("nav",{className:"red darken-2"},r.a.createElement("div",{class:"nav-wrapper"},r.a.createElement("a",{href:"#",class:"brand-logo center"},r.a.createElement("i",{className:"fas fa-globe"}),"COVID-19 UPDATER"),r.a.createElement("ul",{id:"nav-mobile",class:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.bbc.co.uk/news/coronavirus"},"Covid-19 News")),r.a.createElement("li",null,r.a.createElement("a",{href:"/https://111.nhs.uk/"},"Symptoms")))))},v=function(){return r.a.createElement("footer",{class:"page-footer red darken-2"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},"\xa9 2020 Covid-19 Updater")))},y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About this app"),r.a.createElement("h3",null,"An search app that has access to data provided by Johns Hopkins CSSE, CDC, WHO surround COVID-19"),r.a.createElement("h3",null,"Version 1.0.0"))}}]),a}(n.Component),b=a(30),w=a.n(b),C=a(31),S=a.n(C),g=function(e){return r.a.createElement("div",{className:"container country-item-div fade-in"},r.a.createElement("h2",null,e.data.country),r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"result-square confirmed"},r.a.createElement("h6",null,"Confirmed Cases"),r.a.createElement("p",null,e.data.confirmed)),r.a.createElement("div",{className:"result-square critical"},r.a.createElement("h6",null,"Critical"),e.data.critical),r.a.createElement("div",{className:"result-square recovered"},r.a.createElement("h6",null,"Recovered"),e.data.recovered),r.a.createElement("div",{className:"result-square deaths"},r.a.createElement("h6",null,"Deaths"),e.data.deaths)))},R=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.onSubmit=function(t){t.preventDefault(),""===e.state.text?console.log("Error"):(e.props.searchCountry(e.state.text),e.setState({text:""}),e.props.dataIsPresent())},e.onChange=function(t){e.setState({text:t.target.value})},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"row search-container"},r.a.createElement("form",{className:"search-bar",onSubmit:this.onSubmit},r.a.createElement("div",{class:"input-field col s12"},r.a.createElement("input",{id:"search",type:"text",class:"validate",placeholder:"Please enter country name",value:this.state.text,onChange:this.onChange})),r.a.createElement("button",{className:"btn waves-effect waves-light red darken-2",type:"submit",name:"action"},"Search"),this.props.showClear&&r.a.createElement("button",{class:"waves-effect waves-light btn grey lighten-1",onClick:this.props.clearSearch},"Clear")))}}]),a}(n.Component),O=a(32),P=a.n(O),A=(a(58),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:[],dataPresent:null},e.clearFormAndCountry=function(){e.hideResults(),e.clearSearch()},e.showFormAndResults=function(){e.searchCountry(),e.showResults()},e.showResults=function(){document.querySelector(".country-item-div").style.display="block"},e.hideResults=function(){document.querySelector(".country-item-div").style.display="none"},e.searchCountry=function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.get("https://covid19-api.com/country?name=".concat(a,"&format=json"));case 2:n=t.sent,e.setState({data:n.data[0]}),console.log(e.state.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.clearSearch=function(t){t.preventDefault(),e.setState({data:[]}),console.log("clearing"),e.dataIsNotPresent()},e.dataIsPresent=function(){e.setState({dataPresent:!0})},e.dataIsNotPresent=function(){e.setState({dataPresent:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("body",null,r.a.createElement(E,null),r.a.createElement(f.c,null,r.a.createElement("main",null,r.a.createElement(f.a,{exact:!0,path:"/"}),r.a.createElement(R,{searchCountry:this.searchCountry,showClear:!!this.state.dataPresent,dataIsPresent:this.dataIsPresent,dataIsNotPresent:this.dataIsNotPresent,dataPresent:this.state.dataPresent,clearSearch:this.clearSearch,hideResults:this.hideResults,showResults:this.showResults,clearFormAndCountry:this.clearFormAndCountry,showFormAndResults:this.showFormAndResults}),r.a.createElement(g,{data:this.state.data,clearSearch:this.clearSearch,hideResults:this.hideResults,showResults:this.showResults,clearFormAndCountry:this.clearFormAndCountry,showFormAndResults:this.showFormAndResults}),r.a.createElement(f.a,{exact:!0,path:"/about",component:w.a}),r.a.createElement(f.a,{exact:!0,path:"/symptoms",component:S.a}),r.a.createElement(f.a,{exact:!0,path:"/about",component:y}))),r.a.createElement(v,null))))}}]),a}(n.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.85a75e00.chunk.js.map
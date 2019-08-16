(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(39)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),o=n.n(i),c=(n(28),n(5)),s=n(6),l=n(8),u=n(7),h=n(9),m=(n(29),n(10)),f=(n(30),function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e.imageLink}))}),d=(n(31),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://api.tvmaze.com/shows/".concat(t)).then(function(e){return e.json()}).then(function(t){return e.setState({show:t})})}},{key:"render",value:function(){var e=this.state.show;return r.a.createElement("div",null,null!==e&&r.a.createElement("div",{className:"show-container"},r.a.createElement("h2",null," Show Name: ",e.name," "),r.a.createElement("div",{className:"show-image-description"},r.a.createElement(f,{imageLink:e.image?e.image.medium:""}),r.a.createElement("p",null," Summary: ",e.summary.replace(/<p>|<b>|<\/b>|<\/p>|<\/br>/g,"")," ")),r.a.createElement("div",{className:"show-details"},r.a.createElement("p",null," Premiered: ",e.premiered," "),e.officialSite&&r.a.createElement("h4",null,r.a.createElement("a",{href:e.officialSite},e.officialSite)))))}}]),t}(a.Component)),p=(n(32),n(11)),v=(n(33),function(e){var t=e.series;return r.a.createElement("li",{className:"series-list-item"},r.a.createElement(p.b,{to:"/series/".concat(t.show.id)}," ",t.show.name," "))}),w=function(e){function t(e){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"series-list"},this.props.list.map(function(e){return r.a.createElement("div",null,r.a.createElement(v,{series:e,key:e.show.id}),r.a.createElement(f,{series:e,imageLink:e.show.image?e.show.image.medium:""}))})))}}]),t}(r.a.Component),g=(n(38),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={series:[],isFetching:!1,seriesName:""},n.onSeriesInputChange=function(e){n.setState({seriesName:e.target.value,isFetching:!0}),fetch("https://api.tvmaze.com/search/shows?q=".concat(e.target.value)).then(function(e){return e.json()}).then(function(e){return n.setState({series:e,isFetching:!1})}).then(console.log(n.state.series))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Which show are you looking for?",r.a.createElement("input",{type:"text",placeholder:"Search TV Guide...",onChange:this.onSeriesInputChange})),r.a.createElement(w,{list:this.state.series}))}}]),t}(a.Component)),b=function(e){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:g}),r.a.createElement(m.a,{path:"/series/:id",component:d}))},E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Search for your favorite TV series!"),r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(b,null)))}}]),t}(r.a.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(p.a,{basename:"/tv-series-search"},r.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tv-series-search",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/tv-series-search","/service-worker.js");j?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):y(t,e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.e42ecb6e.chunk.js.map
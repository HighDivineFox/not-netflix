(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),i=a.n(r),o=(a(15),a(1)),c=a(2),l=a(5),m=a(3),u=a(6),h=a(4),d=(a(16),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.isLoggedIn?s.a.createElement("div",null,s.a.createElement("div",{className:"navbar right"},s.a.createElement("div",{className:"navbar-item"},"Search"),s.a.createElement("div",{className:"navbar-item"},"Notifications"),s.a.createElement("div",{className:"navbar-item"},s.a.createElement("img",{src:this.props.userData.picture.thumbnail,alt:"User Avatar"}))),s.a.createElement("div",{className:"navbar"},s.a.createElement("div",{className:"logo-small navbar-item"},"Fox-Flix"),s.a.createElement("div",{className:"navbar-item"},"Home"),s.a.createElement("div",{className:"navbar-item"},"TV Shows"),s.a.createElement("div",{className:"navbar-item"},"Movies"),s.a.createElement("div",{className:"navbar-item"},"Recently added"),s.a.createElement("div",{className:"navbar-item"},"My List"))):s.a.createElement("div",{className:"logo-large"},"Fox-Flix")}}]),t}(n.Component)),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).handleClick=function(){a.props.selectUser(a.props.data)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{onMouseDown:this.handleClick},s.a.createElement("img",{src:this.props.data.picture.large,className:"userAvatar",alt:"user avatar"}),s.a.createElement("br",null),this.getName(this.props.data))}},{key:"getName",value:function(e){return this.props.data.name.first.charAt(0).toUpperCase()+this.props.data.name.first.slice(1)+" "+(this.props.data.name.last.charAt(0).toUpperCase()+this.props.data.name.last.slice(1))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={users:[]},a.populateUsers=a.populateUsers.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"flexRow flexSpaced fitText linkStyles"},this.state.users.map(function(t,a){return s.a.createElement(p,{key:a,data:t,selectUser:e.props.selectUser})}))}},{key:"componentDidMount",value:function(){this.populateUsers()}},{key:"populateUsers",value:function(){var e=this,t="https://randomuser.me/api/?results="+Math.ceil(5*Math.random()),a=[];fetch(t).then(function(t){200!==t.status&&console.log("API problem"),t.json().then(function(t){for(var n=0;n<t.results.length;n++)a.push(t.results[n]);e.setState({users:a})})})}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.isLoggedIn?null:s.a.createElement("div",{className:"absCenter flexCol wrapped textCentered"},s.a.createElement("div",{className:"extraMarginBot contentWidth largeText"},"Who's Watching?"),s.a.createElement(v,{selectUser:this.props.selectUser}),s.a.createElement("div",{className:"horiCentered extraMarginTop border50 padded contentWidth mediumText pointer"},"MANAGE PROFILES"))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={imageLoaded:!1,url:a.getRandomImageUrl(),showF:Math.random(),title:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.imageLoaded?this.state.showF>=.5?s.a.createElement("div",{className:"rel media-item"},s.a.createElement("div",{className:"media-item-title"},this.state.title),s.a.createElement("img",{src:this.state.url,className:"media-item-img",onLoad:this.handleImageLoaded.bind(this),onError:this.addDefaultSrc,alt:"Media Thumbnail"})):s.a.createElement("div",{className:"rel media-item"},s.a.createElement("div",{className:"media-logo"},"F"),s.a.createElement("div",{className:"media-item-title"},this.state.title),s.a.createElement("img",{src:this.state.url,className:"media-item-img",onLoad:this.handleImageLoaded.bind(this),onError:this.addDefaultSrc,alt:"Media Thumbnail"})):s.a.createElement("div",{style:{display:"none"}},s.a.createElement("img",{src:this.state.url,className:"media-item-img",onLoad:this.handleImageLoaded.bind(this),onError:this.addDefaultSrc,alt:"Media Thumbnail"}))}},{key:"componentDidMount",value:function(){this.getTitle()}},{key:"addDefaultSrc",value:function(e){e.target.src="https://picsum.photos/350/200"}},{key:"handleImageLoaded",value:function(){this.setState({imageLoaded:!0})}},{key:"getRandomImageUrl",value:function(){return"https://picsum.photos/id/"+Math.ceil(1e3*Math.random())+"/350/200"}},{key:"getTitle",value:function(){var e=this;fetch("https://baconipsum.com/api/?type=meat-and-filler").then(function(t){200!==t&&console.log("API Error"),t.json().then(function(t){var a=t[0];a=a.split(" ").slice(0,2).join(" "),e.setState({title:a})})})}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={items:[0,1,2,3,4,5,6]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"content-row"},s.a.createElement("h1",null,this.props.title),s.a.createElement("div",{className:"flexRow non-wrapped"},this.state.items.map(function(e){return s.a.createElement(b,{key:e})})))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={showcaseImageUrl:a.getShowcaseImage(),showCaseTitle:"",showCaseSummary:" "},a.loadShowcaseItem(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"showcaseWrapper"},s.a.createElement("div",{id:"showcaseImage"},s.a.createElement("div",{className:"showcaseInformationWrapper"},s.a.createElement("div",{className:"showcaseTitle"},this.state.showCaseTitle),s.a.createElement("div",{className:"showcaseSummary",dangerouslySetInnerHTML:{__html:this.state.showCaseSummary}}),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("input",{className:"button",type:"button",value:"Play"}),s.a.createElement("input",{className:"button",type:"button",value:"My List"})))),s.a.createElement("img",{src:this.state.showcaseImageUrl,className:"showcase-img",alt:"Large media thumbnail",onLoad:this.handleImageLoaded.bind(this),onError:this.handleImageError.bind(this)})))}},{key:"componentDidMount",value:function(){document.getElementById("showcaseImage").style.display="none"}},{key:"handleImageLoaded",value:function(){document.getElementById("showcaseImage").style.display=""}},{key:"handleImageError",value:function(){console.log("Showcase Image didn't load"),this.setState({showcaseImageUrl:"https://picsum.photos/"+window.innerWidth+"/650"})}},{key:"getShowcaseImage",value:function(){return"https://picsum.photos/"+window.innerWidth+"/650"}},{key:"loadShowcaseItem",value:function(){var e=this,t=Math.ceil(1e4*Math.random());fetch("http://api.tvmaze.com/shows/"+t).then(function(t){200!==t.status&&console.log("API Error"),t.json().then(function(t){var a=t.summary;a=a.split(".",1)+".",e.setState({showCaseTitle:t.name,showCaseSummary:a})})}).catch(function(){console.log("API Error: Something went wrong")})}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={showcaseImageUrl:a.getShowcaseImage()},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.isLoggedIn?s.a.createElement("div",null,s.a.createElement(E,null),s.a.createElement(f,{title:"Popular"}),s.a.createElement(f,{title:"Action"}),s.a.createElement(f,{title:"Comedy"})):null}},{key:"getShowcaseImage",value:function(){return"https://picsum.photos/"+window.innerWidth+"/650"}}]),t}(n.Component),j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={isLoggedIn:!1,userObj:null},e.selectProfile=e.selectProfile.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App wrapper"},s.a.createElement(d,{isLoggedIn:this.state.isLoggedIn,userData:this.state.userObj}),s.a.createElement(g,{isLoggedIn:this.state.isLoggedIn,selectUser:this.selectProfile}),s.a.createElement(w,{isLoggedIn:this.state.isLoggedIn,userData:this.state.userObj}))}},{key:"selectProfile",value:function(e){this.setState({isLoggedIn:!0,userObj:e})}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b250a782.chunk.js.map
(function(t){function a(a){for(var s,r,i=a[0],c=a[1],l=a[2],f=0,p=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(p.length)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,i=1;i<e.length;i++){var c=e[i];0!==n[c]&&(s=!1)}s&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},n={app:0},o=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0cdf":function(t,a,e){},1084:function(t,a,e){},"31dd":function(t,a,e){t.exports=e.p+"img/stroy.81c28d20.png"},"349d":function(t,a,e){},"37cd":function(t,a,e){t.exports=e.p+"img/todo.b174fb1b.png"},"3db4":function(t,a,e){},"41ea":function(t,a,e){"use strict";var s=e("0cdf"),n=e.n(s);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],r=(e("5c0b"),e("2877")),i={},c=Object(r["a"])(i,n,o,!1,null,null,null),l=c.exports,u=e("8c4f"),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[t.loading?e("Preloader"):t._e(),e("Hello",{attrs:{startAnimation:!t.loading}}),e("main",[e("Nav"),e("AboutMe"),e("Skills"),e("Portfolio"),e("Contacts")],1)],1)},p=[],_=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"preloader-bg"},[s("img",{staticClass:"preloader",attrs:{src:e("6e70"),alt:"Loading"}})])}],d=(e("bc2b"),{}),m=Object(r["a"])(d,_,v,!1,null,null,null),b=m.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{ref:"header",staticClass:"header"},[e("div",{staticClass:"header__bg"}),e("div",{staticClass:"header__content"},[e("p",[t._v("Привет, меня зовут")]),e("p",{staticClass:"header__name"},[t._v("Ирина Габер")]),t.startAnimation?e("p",{staticClass:"header__prof"},[t._v("Frontend Developer"),t.windowWidth>460?e("span",[t._v("/HTML-coder")]):t._e()]):t._e()]),e("scroll")],1)},g=[],w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#AboutMe",expression:"'#AboutMe'"}],attrs:{href:"#"}},[e("span"),e("span"),e("span"),t._v("Scroll")])},C=[],k=(e("a2bb"),{}),x=Object(r["a"])(k,w,C,!1,null,"bcfa4bbc",null),y=x.exports,S={data:function(){return{windowWidth:window.innerWidth}},components:{scroll:y},mounted:function(){var t=this;window.onresize=function(a){t.windowWidth=window.innerWidth}},props:["startAnimation"]},j=S,O=(e("684d"),Object(r["a"])(j,h,g,!1,null,"60137cf8",null)),$=O.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navigation container"},[t._m(0),e("nav",{staticClass:"navigation__nav"},[e("ul",{staticClass:"navigation__list"},[e("li",{staticClass:"navigation__item"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#AboutMe",expression:"'#AboutMe'"}],staticClass:"navigation__link",attrs:{href:"#AboutMe"}},[t._v("Обо мне")])]),e("li",{staticClass:"navigation__item"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#Skills",expression:"'#Skills'"}],staticClass:"navigation__link",attrs:{href:"#Skills"}},[t._v("Навыки")])]),e("li",{staticClass:"navigation__item"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],staticClass:"navigation__link",attrs:{href:"#portfolio"}},[t._v("Портфолио")])]),e("li",{staticClass:"navigation__item"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#Contacts",expression:"'#Contacts'"}],staticClass:"navigation__link",attrs:{href:""}},[t._v("Контакты")])])])])])},A=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navigation__info"},[e("p",{staticClass:"navigation__name"},[t._v("Ирина Габер")]),e("a",{staticClass:"navigation__email",attrs:{href:"mailto:igaberi24@gmail.com"}},[t._v("igaberi24@gmail.com")])])}],M=(e("d198"),{}),W=Object(r["a"])(M,E,A,!1,null,"57a5863a",null),D=W.exports,P=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about-me container",attrs:{id:"AboutMe"}},[s("h1",[t._v("Обо мне")]),s("img",{staticClass:"about-me__photo",attrs:{src:e("b0df"),alt:""}}),s("p",{staticClass:"about-me__text"},[t._v('\n\t\tПривет, меня зовут Ирина Габер. И я Frontend Developer. У меня есть немного опыта, базовые знания и огромное желание развиваться в этой сфере. Заочно получаю образование по специальности "Компьютерная инженерия", также окончила летнюю школу по направлению "Frontend + Vue.js" от KeepSolid. Интересуют как разовые заказы так, и постоянная работа.')]),s("a",{staticClass:"about-me__cv",attrs:{href:"IrynaHaberCV.pdf",download:""}},[t._v("Скачать резюме")])])}],B={},J=B,I=(e("41ea"),Object(r["a"])(J,P,N,!1,null,"48ff8df4",null)),T=I.exports,H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"skills",attrs:{id:"Skills"}},[e("div",{staticClass:"container"},[e("h1",[t._v("Навыки")]),e("div",{staticClass:"skills__circles"},[e("Sircle",{attrs:{percent:"90",name:"html"}}),e("Sircle",{attrs:{percent:"80",name:"css"}}),e("Sircle",{attrs:{percent:"60",name:"Sass"}}),e("Sircle",{attrs:{percent:"60",name:"Bootstrap"}}),e("Sircle",{attrs:{percent:"50",name:"js"}}),e("Sircle",{attrs:{percent:"25",name:"vue"}}),e("Sircle",{attrs:{percent:"25",name:"jQuery"}})],1)])])},V=[],F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"circular-progress"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100","aria-labelledby":"title",role:"graphic"}},[e("circle",{attrs:{cx:"50",cy:"50",r:"40"}}),e("circle",{style:{strokeDashoffset:this.pctIndicator},attrs:{cx:"50",cy:"50",r:"40",id:"pct-ind"}})]),e("p",{staticClass:"pct"},[t._v(t._s(t.percent)+"%")]),e("p",{staticClass:"name"},[t._v(t._s(t.name))])])},Q=[],q={data:function(){return{pctIndicator:(1-this.percent/100)*(22/7*2*40)}},props:["percent","name"]},G=q,L=(e("7a5d"),Object(r["a"])(G,F,Q,!1,null,"304b024e",null)),z=L.exports,K={components:{Sircle:z}},R=K,U=(e("8a0a"),Object(r["a"])(R,H,V,!1,null,"1746bfc6",null)),X=U.exports,Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"portfolio",attrs:{id:"portfolio"}},[e("div",{staticClass:"container"},[e("h1",[t._v("Портфолио")]),e("div",{staticClass:"portfolio-line"}),e("p",{staticClass:"portfolio__text"},[t._v("Тут вы найдете несколько примеров моих работ")]),e("div",{staticClass:"portfolio__works"},[e("Work",{attrs:{info:t.worksData.smm}}),e("Work",{attrs:{info:t.worksData.todo}}),e("Work",{attrs:{info:t.worksData.blueasy}}),e("Work",{attrs:{info:t.worksData.stroy}}),e("Work",{attrs:{info:t.worksData.pokemon}}),e("Work",{attrs:{info:t.worksData.app}})],1)])])},Z=[],tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"work"},[e("img",{staticClass:"work__img",attrs:{src:t.info.img,alt:"one from works"}}),e("a",{staticClass:"work__info",attrs:{href:t.info.href}},[e("button",{staticClass:"work__btn"},[t._v("Перейти")]),e("p",{staticClass:"work__tehnologies"},[t._v(t._s(t.info.tehnologies))])])])},at=[],et={props:["info"]},st=et,nt=(e("c1a6"),Object(r["a"])(st,tt,at,!1,null,"76fa2fa3",null)),ot=nt.exports,rt={data:function(){return{worksData:{smm:{img:e("fcb0"),href:"https://igbr.000webhostapp.com/smmart/",tehnologies:"Bootstrap, JQuery, Sass"},blueasy:{img:e("a2ff"),href:"https://igbr.000webhostapp.com/blueasy/",tehnologies:"Bootstrap, Js"},todo:{img:e("37cd"),href:"https://todowithvue.000webhostapp.com/",tehnologies:"Vue, Axios, Sass"},stroy:{img:e("31dd"),href:"https://igbr.000webhostapp.com/front-stroy/",tehnologies:"Bootstrap, JQuery"},pokemon:{img:e("5f8b"),href:"https://igbr.000webhostapp.com/pokemon/",tehnologies:"Vue, Nuxt, Axios, Sass"},app:{img:e("ea62"),href:"https://todowithvue.000webhostapp.com/",tehnologies:"Bootstrap, Sass, Js"}}}},components:{Work:ot}},it=rt,ct=(e("5b7b"),Object(r["a"])(it,Y,Z,!1,null,"1476ea09",null)),lt=ct.exports,ut=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contacts",attrs:{id:"Contacts"}},[e("div",{staticClass:"container"},[e("h1",[t._v("Контакты")]),e("div",{staticClass:"contacts__main"},[e("a",{staticClass:"contacts__info",attrs:{href:"mailto:igaberi24@gmail.com"}},[e("i",{staticClass:"contacts__main-icon far fa-envelope"}),e("p",[t._v("igaberi24@gmail.com")])]),e("a",{staticClass:"contacts__info",attrs:{href:"tel:+380636476440"}},[e("i",{staticClass:"contacts__main-icon fas fa-phone"}),e("p",[t._v("+380636476440")])]),e("a",{staticClass:"contacts__info",attrs:{href:"https://www.google.com/maps/search/?api=1&query=odessa"}},[e("i",{staticClass:"contacts__main-icon fas fa-location-arrow"}),e("p",[t._v("Одесса, Украина")]),e("p",[t._v("(готова к переезду)")])])]),e("h2",[t._v("Социальные сети")]),e("div",{staticClass:"contacts__socials"},[e("a",{staticClass:"contacts__social",attrs:{href:"https://github.com/IraGaber"}},[e("i",{staticClass:"fab fa-github"})]),e("a",{staticClass:"contacts__social",attrs:{href:"https://teleg.run/Irina _Gaber"}},[e("i",{staticClass:"fab fa-telegram"})]),e("a",{staticClass:"contacts__social",attrs:{href:"https://www.facebook.com/profile.php?id=100014914772793"}},[e("i",{staticClass:"fab fa-facebook-square"})]),e("a",{staticClass:"contacts__social",attrs:{href:"https://www.instagram.com/ira_gaber/"}},[e("i",{staticClass:"fab fa-instagram"})])])])])}],pt=(e("8886"),{}),_t=Object(r["a"])(pt,ut,ft,!1,null,"73ec07e8",null),vt=_t.exports,dt={name:"home",components:{Hello:$,Nav:D,AboutMe:T,Skills:X,Portfolio:lt,Contacts:vt,Preloader:b},data:function(){return{loading:!0}},mounted:function(){var t=this;setTimeout((function(){t.loading=!1}),4e3)}},mt=dt,bt=Object(r["a"])(mt,f,p,!1,null,null,null),ht=bt.exports;s["a"].use(u["a"]);var gt=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ht}]}),wt=e("2f62");s["a"].use(wt["a"]);var Ct=new wt["a"].Store({state:{},mutations:{},actions:{}});e("15f5"),e("7051"),e("3db4");s["a"].config.productionTip=!1;var kt=e("f13c");s["a"].use(kt,{container:"body",duration:700,easing:"ease-in-out",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new s["a"]({router:gt,store:Ct,render:function(t){return t(l)}}).$mount("#app")},"5b7b":function(t,a,e){"use strict";var s=e("349d"),n=e.n(s);n.a},"5c0b":function(t,a,e){"use strict";var s=e("e332"),n=e.n(s);n.a},"5f8b":function(t,a,e){t.exports=e.p+"img/pokemon.5c5c8c6e.png"},"684d":function(t,a,e){"use strict";var s=e("1084"),n=e.n(s);n.a},"6b69":function(t,a,e){},"6e70":function(t,a,e){t.exports=e.p+"img/loader.5c540ac1.svg"},7760:function(t,a,e){},"7a5d":function(t,a,e){"use strict";var s=e("7760"),n=e.n(s);n.a},8453:function(t,a,e){},8886:function(t,a,e){"use strict";var s=e("caa0"),n=e.n(s);n.a},"8a0a":function(t,a,e){"use strict";var s=e("ba13"),n=e.n(s);n.a},"9eb5":function(t,a,e){},a2bb:function(t,a,e){"use strict";var s=e("6b69"),n=e.n(s);n.a},a2ff:function(t,a,e){t.exports=e.p+"img/blueasy.ebf8618f.jpg"},b0df:function(t,a,e){t.exports=e.p+"img/me.97d9dc0e.jpg"},b5d7:function(t,a,e){},ba13:function(t,a,e){},bc2b:function(t,a,e){"use strict";var s=e("9eb5"),n=e.n(s);n.a},c1a6:function(t,a,e){"use strict";var s=e("8453"),n=e.n(s);n.a},caa0:function(t,a,e){},d198:function(t,a,e){"use strict";var s=e("b5d7"),n=e.n(s);n.a},e332:function(t,a,e){},ea62:function(t,a,e){t.exports=e.p+"img/app.f2890293.png"},fcb0:function(t,a,e){t.exports=e.p+"img/smm.3a04347f.png"}});
//# sourceMappingURL=app.6338784a.js.map
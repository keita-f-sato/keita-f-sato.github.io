(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{217:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("c7394110",content,!0,{sourceMap:!1})},218:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("0bd45fbd",content,!0,{sourceMap:!1})},219:function(t,e,n){var content=n(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("4da8fe5d",content,!0,{sourceMap:!1})},223:function(t,e,n){"use strict";n(217)},224:function(t,e,n){(e=n(45)(!1)).push([t.i,".scroll,.scroll-sm{color:#929292!important;font-size:10pt!important;position:absolute;top:92%;left:18%}.loading span{display:inline-block;margin:0 -.075em;-webkit-animation:loading 1.2s infinite alternate;animation:loading 1.2s infinite alternate}.loading span:nth-child(2){-webkit-animation-delay:.1s;animation-delay:.1s}.loading span:nth-child(3){-webkit-animation-delay:.2s;animation-delay:.2s}.loading span:nth-child(4){-webkit-animation-delay:.3s;animation-delay:.3s}.loading span:nth-child(5){-webkit-animation-delay:.4s;animation-delay:.4s}.loading span:nth-child(6){-webkit-animation-delay:.5s;animation-delay:.5s}.loading span:nth-child(7){-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes loading{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(.8);transform:scale(.8)}}@keyframes loading{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(.8);transform:scale(.8)}}.menu{color:#929292!important}.menulist{position:absolute!important;top:33%}.v-navigation-drawer__border{background-color:#fff!important}",""]),t.exports=e},226:function(t,e,n){"use strict";n(218)},227:function(t,e,n){(e=n(45)(!1)).push([t.i,".particles-container{position:fixed;height:100%;width:100%;z-index:5;top:0}body{margin:0;background-color:#fff;height:100px}canvas{position:relative;z-index:2;display:block;vertical-align:bottom}#particles-js{position:absolute;width:100%;height:100%}",""]),t.exports=e},228:function(t,e,n){"use strict";n(219)},229:function(t,e,n){(e=n(45)(!1)).push([t.i,'.bartitle{border:solid;border-width:0 0 1px;-webkit-border-image:url(/gradient.png) 1 stretch;-o-border-image:url(/gradient.png) 1 stretch;border-image:url(/gradient.png) 1 stretch;border-image-slice:1}.bartitle,.bartitle-sm{opacity:0;-webkit-animation-name:sample02;animation-name:sample02;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bartitle-sm{border-bottom:1px solid;-webkit-border-image:url(/gradient.png) 1 stretch;-o-border-image:url(/gradient.png) 1 stretch;border-image:url(/gradient.png) 1 stretch;border-image-slice:1}@-webkit-keyframes sample02{0%{opacity:1;-webkit-transform:translateX(-1000px);transform:translateX(-1000px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes sample02{0%{opacity:1;-webkit-transform:translateX(-1000px);transform:translateX(-1000px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.detail-title{position:relative;background-color:#fff!important;height:100%}.title-text{z-index:3;position:absolute;color:#929292;font-family:"Tangerine",cursive!important;font-size:60pt!important;top:35%!important;width:100%;margin:0 auto}.bartitle{top:45%;position:absolute;width:62%}@media only screen and (max-width:599px){.title-text{position:relative;font-size:7vw!important;-webkit-border-image:url(/gradient.png) 1 stretch;-o-border-image:url(/gradient.png) 1 stretch;border-image:url(/gradient.png) 1 stretch;border-bottom:1px solid;margin:auto;width:40%}.bartitle{border-bottom:0!important}}@media only screen and (min-width:600px)and (max-width:959px){.title-text{position:relative;font-size:7vw!important;-webkit-border-image:url(/gradient.png) 1 stretch;-o-border-image:url(/gradient.png) 1 stretch;border-image:url(/gradient.png) 1 stretch;border-bottom:1px solid;margin:auto;width:33%}.bartitle{border-bottom:0!important}}@media only screen and (min-width:960px)and (max-width:1263px){.title-text{font-size:70pt}.bartitle{width:63%}}@media only screen and (min-width:1264px){.title-text{font-size:70pt!important}.bartitle{width:63%}}',""]),t.exports=e},230:function(t,e,n){"use strict";var r={data:function(){return{drawer:!0,menues:[{title:"Top",link:"/top",icon:"fas fa-home"},{title:"About",link:"/about",icon:"fas fa-user"},{title:"Work",link:"/work",icon:"fas fa-wrench"},{title:"Skill",link:"/skill",icon:"fas fa-code"},{title:"Contact",link:"/contact",icon:"fas fa-phone-square"}]}},watch:{group:function(){this.drawer=!0}}},l=(n(223),n(47)),o=n(70),c=n.n(o),d=n(251),m=n(253),f=n(249),h=n(216),v=n(247),k=n(328),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",right:"",permanent:"","overlay-opacity":"1","mini-variant":"",width:"192",color:"#fff"}},[n("v-list",{staticClass:"menulist",attrs:{rounded:""}},t._l(t.menues,(function(menu){return n("v-list-item",{key:menu.title,attrs:{href:menu.link,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(menu.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"menu"},[t._v(t._s(menu.title))])],1)],1)})),1),t._v(" "),n("div",{class:[!0===t.$vuetify.breakpoint.smAndDown?"scroll-sm loading":"scroll loading"]},[n("span",[t._v("S")]),t._v(" "),n("span",[t._v("C")]),t._v(" "),n("span",[t._v("R")]),t._v(" "),n("span",[t._v("O")]),t._v(" "),n("span",[t._v("L")]),t._v(" "),n("span",[t._v("L")])])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VIcon:d.a,VList:m.a,VListItem:f.a,VListItemContent:h.a,VListItemIcon:v.a,VListItemTitle:h.b,VNavigationDrawer:k.a})},231:function(t,e,n){"use strict";var r=n(241),l=n.n(r),o={name:"particles-min",mounted:function(){l()("#particles-min",'<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"><\/script>')},methods:{window:onload=function(){return particlesJS("particles-js",{particles:{number:{value:355,density:{enable:!0,value_area:1000.1476416322727}},color:{value:"#DE5A91"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.48927153781200905,random:!1,anim:{enable:!0,speed:.2,opacity_min:0,sync:!1}},size:{value:4,random:!0,anim:{enable:!0,speed:2,size_min:0,sync:!1}},line_linked:{enable:!1,distance:150,color:"#BD7CF9",opacity:.4,width:1},move:{enable:!0,speed:.4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:83,size:7,duration:3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},c=(n(226),n(47)),component=Object(c.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"particles-container"},[e("div",{attrs:{id:"particles-js"}}),this._v(" "),e("div",{attrs:{id:"particles-min"}})])}],!1,null,null,null);e.a=component.exports},232:function(t,e,n){"use strict";var r={props:["title"]},l=(n(228),n(47)),o=n(70),c=n.n(o),d=n(270),m=n(215),f=n(261),h=n(304),v=n(305),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:"","pa-0":"","fill-height":"","ma-0":""}},[e("v-layout",[e("v-flex",{attrs:{xs12:"",s12:"",md12:"",lg12:"","order-lg1":"","order-sm1":""}},[e("v-card",{staticClass:"detail-title",attrs:{tile:"",flat:""}},[e("v-card-title",{staticClass:"justify-center title-text"},[this._v("\n                    "+this._s(this.title)+"\n                 ")]),this._v(" "),e("div",{staticClass:"bartitle"})],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardTitle:m.b,VContainer:f.a,VFlex:h.a,VLayout:v.a})},265:function(t,e,n){var content=n(315);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("6ea9b156",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";n(265)},315:function(t,e,n){(e=n(45)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Tangerine&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Kosugi&display=swap);"]),e.push([t.i,".bartitle{border:solid;border-width:0 0 1px;-webkit-border-image:url(/gradient.png) 1 stretch;-o-border-image:url(/gradient.png) 1 stretch;border-image:url(/gradient.png) 1 stretch;border-image-slice:1}.bartitle,.bartitle-sm{opacity:0;-webkit-animation-name:sample02;animation-name:sample02;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bartitle-sm{border-bottom:1px solid;-webkit-border-image:url(/gradient.png) 1 stretch;-o-border-image:url(/gradient.png) 1 stretch;border-image:url(/gradient.png) 1 stretch;border-image-slice:1}@-webkit-keyframes sample02{0%{opacity:1;-webkit-transform:translateX(-1000px);transform:translateX(-1000px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes sample02{0%{opacity:1;-webkit-transform:translateX(-1000px);transform:translateX(-1000px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}.side-card{height:100%}.skill-title{color:#929292!important;float:left}.base,.skills{height:100%}.skills h4{color:#929292!important;font-weight:100;padding-top:10px}.skill-itmes{width:380px;min-height:30px}.v-list-item__content{padding:6px 0}.skill-box{width:350px;margin:auto}.skill-itmes p{color:#929292;float:left;margin:0}.pics{padding-top:200px}.logs{width:100px;margin:20px auto;display:block}.right{padding-left:0}.left{padding-right:0}@media only screen and (min-width:960px)and (max-width:1263px){.right{padding-left:50px}.left{padding-right:50px}}",""]),t.exports=e},316:function(t,e,n){var content=n(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("5939d713",content,!0,{sourceMap:!1})},317:function(t,e,n){(e=n(45)(!1)).push([t.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{-webkit-transform:scaleX(1);transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),t.exports=e},332:function(t,e,n){"use strict";n.r(e);var menu=n(230),r=n(232),l=n(231),o={data:function(){return{skills:[{name:"言語",item:[{skill:"python",rate:"5"},{skill:"Julia",rate:"4"},{skill:"HTML/CSS/Javascript",rate:"3.5"},{skill:"C++",rate:"3"},{skill:"Rust",rate:"2"},{skill:"GO",rate:"1"}]},{name:"ツール",item:[{skill:"Fusion360",rate:"4.5"},{skill:"Pytorch",rate:"4"},{skill:"PX4/Arudpilot",rate:"4"},{skill:"vue.js/nuxt.js",rate:"4"},{skill:"Docker",rate:"4"},{skill:"Keras/Tensorflow",rate:"4"},{skill:"DB(MySQL/Elasticsearch)",rate:"3.5"},{skill:"Wordpress",rate:"3"},{skill:"OpenFOAM",rate:"2.5"}]},{name:"専門分野",item:[{skill:"複合材料工学",rate:"4.5"},{skill:"機械設計",rate:"4.5"},{skill:"制御工学",rate:"4"},{skill:"タンパク質工学",rate:"3"}]},{name:"その他",item:[{skill:"バレーボール",rate:"3.5"},{skill:"AWS",rate:"3.5"},{skill:"Azure",rate:"2"}]}]}},components:{Menu:menu.a,Title:r.a,Star:l.a}},c=(n(314),n(47)),d=n(70),m=n.n(d),f=n(270),h=n(261),v=n(272),k=n(304),y=n(305),w=n(249),x=n(216),_=(n(243),n(136),n(316),n(225)),C=n(220),I=n(0),V=I.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var r=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},r)}}}),X=n(252),H=n(240),L=I.a.extend({name:"rippleable",directives:{ripple:H.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),S=n(99),z=n(11),$=n(98),j=Object($.a)(C.a,V,L,X.a,S.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,n=t.large,r=t.light,l=t.medium,small=t.small;return{dark:e,large:n,light:r,medium:l,size:t.size,small:small,xLarge:t.xLarge,xSmall:t.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(i){var t=this;return function(e){if(!t.readonly){var n=t.genHoverIndex(e,i);t.clearable&&t.internalValue===n?t.internalValue=0:t.internalValue=n}}},createProps:function(i){var t={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-i)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-i)%1>0),t},genHoverIndex:function(t,i){var e=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(e=!e),i+(e?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,n=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var rect=t.target&&t.target.getBoundingClientRect();if(rect&&t.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(t,i){var e=this;this.runDelay("open",(function(){e.hoverIndex=e.genHoverIndex(t,i)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(i){var t=this,e=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);var n={click:e.click};return this.hover&&(n.mouseenter=function(e){return t.onMouseEnter(e,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(e){return t.onMouseEnter(e,i)})),this.$createElement(_.a,this.setTextColor(this.getColor(e),{attrs:{tabindex:-1,"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(e)])}},render:function(t){var e=this,n=Object(z.g)(Number(this.length)).map((function(i){return e.genItem(i)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}}),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("Menu"),t._v(" "),n("Title",{attrs:{title:"SKILL"}}),t._v(" "),n("v-container",{attrs:{fluid:"","pa-0":"","fill-height":"","ma-0":""}},[n("v-layout",[t.$vuetify.breakpoint.mdAndUp?n("v-flex",{attrs:{xs12:"",s12:"",md2:"",lg4:"","order-lg1":"","order-sm1":""}},[n("v-card",{staticClass:"side-card",attrs:{elevation:"0"}},[n("div",{staticClass:"pics right"},[n("img",{staticClass:"logs",attrs:{src:"/python-logo-symbol-5.png",alt:"python"}}),t._v(" "),n("img",{staticClass:"logs",attrs:{src:"/docker-vector-logo-small.png",alt:"docker"}}),t._v(" "),n("img",{staticClass:"logs",attrs:{src:"/PX4-Logo-Black.png",alt:"PX4"}}),t._v(" "),n("img",{staticClass:"logs",attrs:{src:"/azure.png",alt:"azure"}})])])],1):t._e(),t._v(" "),n("v-flex",{attrs:{xs12:"",s12:"",md8:"",lg4:"","order-lg2":"","order-sm1":""}},[n("v-card",{staticClass:"skills",attrs:{tile:"",flat:""}},t._l(t.skills,(function(e){return n("div",{key:e.name,staticClass:"skill-box"},[n("h4",[t._v(t._s(e.name)+" ")]),t._v(" "),t._l(e.item,(function(e){return n("v-list-item",{key:e.skill,staticClass:"skill-itmes"},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"skill-title"},[t._v(t._s(e.skill)+" ")])],1),t._v(" "),n("p",[t._v(t._s(e.rate))]),t._v(" "),n("v-rating",{attrs:{value:e.rate,color:"amber",dense:"","half-increments":"",readonly:"",size:[!0===t.$vuetify.breakpoint.smAndDown?"10":"14"]}})],1)}))],2)})),0)],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("v-flex",{attrs:{xs12:"",s12:"",md2:"",lg4:"","order-lg3":"","order-sm1":""}},[n("v-card",{staticClass:"side-card",attrs:{elevation:"0"}},[n("div",{staticClass:"pics left"},[n("img",{staticClass:"logs",attrs:{src:"/pytorch-logo-dark.png",alt:"pytorch"}}),t._v(" "),n("img",{staticClass:"logs",attrs:{src:"/tensorflow.png",alt:"tensorflow"}}),t._v(" "),n("img",{staticClass:"logs",attrs:{src:"/julia.png",alt:"julia"}}),t._v(" "),n("img",{staticClass:"logs",attrs:{src:"/rust.png",alt:"julia"}}),t._v(" "),n("img",{staticClass:"logs",attrs:{src:"/openfoam-logo-large.png",alt:"openfoam"}}),t._v(" "),n("img",{staticClass:"logs",attrs:{src:"/nuxt2.png",alt:"nuxt"}})])])],1):t._e()],1)],1),t._v(" "),n("Star")],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:f.a,VContainer:h.a,VContent:v.a,VFlex:k.a,VLayout:y.a,VListItem:w.a,VListItemContent:x.a,VListItemTitle:x.b,VRating:j})}}]);
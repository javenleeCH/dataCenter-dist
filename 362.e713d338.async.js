(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[362],{64335:function(de,z,l){"use strict";var $=l(67294),_=(0,$.createContext)({});z.Z=_},85224:function(de,z,l){"use strict";var $=l(84305),_=l(69224),R=l(67294),F=l(94184),H=l.n(F),te=l(97435),T=l(56264),G=l.n(T),L=l(64335),o=["children","className","extra","style","renderContent"];function N(){return N=Object.assign||function(v){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var g in p)Object.prototype.hasOwnProperty.call(p,g)&&(v[g]=p[g])}return v},N.apply(this,arguments)}function Z(v,u){var p=Object.keys(v);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(v);u&&(g=g.filter(function(S){return Object.getOwnPropertyDescriptor(v,S).enumerable})),p.push.apply(p,g)}return p}function K(v){for(var u=1;u<arguments.length;u++){var p=arguments[u]!=null?arguments[u]:{};u%2?Z(Object(p),!0).forEach(function(g){X(v,g,p[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(p)):Z(Object(p)).forEach(function(g){Object.defineProperty(v,g,Object.getOwnPropertyDescriptor(p,g))})}return v}function X(v,u,p){return u in v?Object.defineProperty(v,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):v[u]=p,v}function A(v,u){if(v==null)return{};var p=J(v,u),g,S;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(v);for(S=0;S<j.length;S++)g=j[S],!(u.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(v,g)||(p[g]=v[g]))}return p}function J(v,u){if(v==null)return{};var p={},g=Object.keys(v),S,j;for(j=0;j<g.length;j++)S=g[j],!(u.indexOf(S)>=0)&&(p[S]=v[S]);return p}var W=function(u){var p=u.children,g=u.className,S=u.extra,j=u.style,le=u.renderContent,Q=A(u,o),Ce=(0,R.useContext)(_.ZP.ConfigContext),ve=Ce.getPrefixCls,me=u.prefixCls||ve("pro"),oe="".concat(me,"-footer-bar"),E=(0,R.useContext)(L.Z),Y=(0,R.useMemo)(function(){var ne=E.hasSiderMenu,Oe=E.isMobile,ce=E.siderWidth;if(!!ne)return ce?Oe?"100%":"calc(100% - ".concat(ce,"px)"):"100%"},[E.collapsed,E.hasSiderMenu,E.isMobile,E.siderWidth]),re=R.createElement(R.Fragment,null,R.createElement("div",{className:"".concat(oe,"-left")},S),R.createElement("div",{className:"".concat(oe,"-right")},p));return(0,R.useEffect)(function(){return!E||!(E==null?void 0:E.setHasFooterToolbar)?function(){}:(E==null||E.setHasFooterToolbar(!0),function(){var ne;E==null||(ne=E.setHasFooterToolbar)===null||ne===void 0||ne.call(E,!1)})},[]),R.createElement("div",N({className:H()(g,"".concat(oe)),style:K({width:Y},j)},(0,te.Z)(Q,["prefixCls"])),le?le(K(K(K({},u),E),{},{leftWidth:Y}),re):re)};z.Z=W},21349:function(de,z,l){"use strict";var $=l(84305),_=l(69224),R=l(53645),F=l.n(R),H=l(67294),te=l(94184),T=l.n(te),G=l(64335),L=function(N){var Z=(0,H.useContext)(G.Z),K=N.children,X=N.contentWidth,A=N.className,J=N.style,W=(0,H.useContext)(_.ZP.ConfigContext),v=W.getPrefixCls,u=N.prefixCls||v("pro"),p=X||Z.contentWidth,g="".concat(u,"-grid-content");return H.createElement("div",{className:T()(g,A,{wide:p==="Fixed"}),style:J},H.createElement("div",{className:"".concat(u,"-grid-content-children")},K))};z.Z=L},75362:function(de,z,l){"use strict";l.d(z,{ZP:function(){return zt}});var $=l(65056),_=l(70883),R=l(22122),F=l(96156),H=l(6610),te=l(5991),T=l(10379),G=l(60446),L=l(90484),o=l(67294),N=l(94184),Z=l.n(N),K=l(98423),X=l(4084),A=l(65632),J=l(85061),W=l(75164);function v(n){var e,t=function(i){return function(){e=null,n.apply(void 0,(0,J.Z)(i))}},r=function(){if(e==null){for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];e=(0,W.Z)(t(s))}};return r.cancel=function(){return W.Z.cancel(e)},r}function u(){return function(e,t,r){var a=r.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(t))return a;var c=v(a.bind(this));return i=!0,Object.defineProperty(this,t,{value:c,configurable:!0,writable:!0}),i=!1,c}}}}var p=l(64019);function g(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function S(n,e,t){if(t!==void 0&&e.top>n.top-t)return t+e.top}function j(n,e,t){if(t!==void 0&&e.bottom<n.bottom+t){var r=window.innerHeight-e.bottom;return t+r}}var le=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],Q=[];function Ce(){return Q}function ve(n,e){if(!!n){var t=Q.find(function(r){return r.target===n});t?t.affixList.push(e):(t={target:n,affixList:[e],eventHandlers:{}},Q.push(t),le.forEach(function(r){t.eventHandlers[r]=(0,p.Z)(n,r,function(){t.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function me(n){var e=Q.find(function(t){var r=t.affixList.some(function(a){return a===n});return r&&(t.affixList=t.affixList.filter(function(a){return a!==n})),r});e&&e.affixList.length===0&&(Q=Q.filter(function(t){return t!==e}),le.forEach(function(t){var r=e.eventHandlers[t];r&&r.remove&&r.remove()}))}var oe=function(n,e,t,r){var a=arguments.length,i=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if((typeof Reflect=="undefined"?"undefined":(0,L.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(i=(a<3?s(i):a>3?s(e,t,i):s(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};function E(){return typeof window!="undefined"?window:null}var Y;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(Y||(Y={}));var re=function(n){(0,T.Z)(t,n);var e=(0,G.Z)(t);function t(){var r;return(0,H.Z)(this,t),r=e.apply(this,arguments),r.state={status:Y.None,lastAffix:!1,prevTarget:null},r.getOffsetTop=function(){var a=r.props.offsetBottom,i=r.props.offsetTop;return a===void 0&&i===void 0&&(i=0),i},r.getOffsetBottom=function(){return r.props.offsetBottom},r.savePlaceholderNode=function(a){r.placeholderNode=a},r.saveFixedNode=function(a){r.fixedNode=a},r.measure=function(){var a=r.state,i=a.status,s=a.lastAffix,c=r.props.onChange,f=r.getTargetFunc();if(!(i!==Y.Prepare||!r.fixedNode||!r.placeholderNode||!f)){var y=r.getOffsetTop(),h=r.getOffsetBottom(),b=f();if(!!b){var d={status:Y.None},m=g(b),P=g(r.placeholderNode),B=S(P,m,y),C=j(P,m,h);B!==void 0?(d.affixStyle={position:"fixed",top:B,width:P.width,height:P.height},d.placeholderStyle={width:P.width,height:P.height}):C!==void 0&&(d.affixStyle={position:"fixed",bottom:C,width:P.width,height:P.height},d.placeholderStyle={width:P.width,height:P.height}),d.lastAffix=!!d.affixStyle,c&&s!==d.lastAffix&&c(d.lastAffix),r.setState(d)}}},r.prepareMeasure=function(){if(r.setState({status:Y.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},r.render=function(){var a=r.context.getPrefixCls,i=r.state,s=i.affixStyle,c=i.placeholderStyle,f=r.props,y=f.prefixCls,h=f.children,b=Z()((0,F.Z)({},a("affix",y),!!s)),d=(0,K.Z)(r.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return o.createElement(X.Z,{onResize:function(){r.updatePosition()}},o.createElement("div",(0,R.Z)({},d,{ref:r.savePlaceholderNode}),s&&o.createElement("div",{style:c,"aria-hidden":"true"}),o.createElement("div",{className:b,ref:r.saveFixedNode,style:s},o.createElement(X.Z,{onResize:function(){r.updatePosition()}},h))))},r}return(0,te.Z)(t,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:a||E}},{key:"componentDidMount",value:function(){var a=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){ve(i(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var i=this.state.prevTarget,s=this.getTargetFunc(),c=null;s&&(c=s()||null),i!==c&&(me(this),c&&(ve(c,this),this.updatePosition()),this.setState({prevTarget:c})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),me(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),i=this.state.affixStyle;if(a&&i){var s=this.getOffsetTop(),c=this.getOffsetBottom(),f=a();if(f&&this.placeholderNode){var y=g(f),h=g(this.placeholderNode),b=S(h,y,s),d=j(h,y,c);if(b!==void 0&&i.top===b||d!==void 0&&i.bottom===d)return}}this.prepareMeasure()}}]),t}(o.Component);re.contextType=A.E_,oe([u()],re.prototype,"updatePosition",null),oe([u()],re.prototype,"lazyUpdatePosition",null);var ne=re,Oe=l(84305),ce=l(69224),nr=l(59903),ar=l(81262),or=l(30887),ir=l(59250),lr=l(94233),Ge=l(28481),ge=l(28991),Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ye=Xe,Ee=l(27029),xe=function(e,t){return o.createElement(Ee.Z,(0,ge.Z)((0,ge.Z)({},e),{},{ref:t,icon:Ye}))};xe.displayName="ArrowLeftOutlined";var Ve=o.forwardRef(xe),ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Je=ke,Re=function(e,t){return o.createElement(Ee.Z,(0,ge.Z)((0,ge.Z)({},e),{},{ref:t,icon:Je}))};Re.displayName="ArrowRightOutlined";var Qe=o.forwardRef(Re),qe=l(50344),et=l(57254),tt=l(81555),rt=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},Ne=function(e){var t=e.prefixCls,r=e.separator,a=r===void 0?"/":r,i=e.children,s=e.overlay,c=e.dropdownProps,f=rt(e,["prefixCls","separator","children","overlay","dropdownProps"]),y=o.useContext(A.E_),h=y.getPrefixCls,b=h("breadcrumb",t),d=function(B){return s?o.createElement(tt.Z,(0,R.Z)({overlay:s,placement:"bottomCenter"},c),o.createElement("span",{className:"".concat(b,"-overlay-link")},B,o.createElement(et.Z,null))):B},m;return"href"in f?m=o.createElement("a",(0,R.Z)({className:"".concat(b,"-link")},f),i):m=o.createElement("span",(0,R.Z)({className:"".concat(b,"-link")},f),i),m=d(m),i?o.createElement("span",null,m,a&&o.createElement("span",{className:"".concat(b,"-separator")},a)):null};Ne.__ANT_BREADCRUMB_ITEM=!0;var Te=Ne,Be=function(e){var t=e.children,r=o.useContext(A.E_),a=r.getPrefixCls,i=a("breadcrumb");return o.createElement("span",{className:"".concat(i,"-separator")},t||"/")};Be.__ANT_BREADCRUMB_SEPARATOR=!0;var nt=Be,De=l(99210),at=l(21687),ot=l(96159),it=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function lt(n,e){if(!n.breadcrumbName)return null;var t=Object.keys(e).join("|"),r=n.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),function(a,i){return e[i]||a});return r}function ct(n,e,t,r){var a=t.indexOf(n)===t.length-1,i=lt(n,e);return a?o.createElement("span",null,i):o.createElement("a",{href:"#/".concat(r.join("/"))},i)}var Se=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach(function(r){e=e.replace(":".concat(r),t[r])}),e},st=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,a=(0,J.Z)(e),i=Se(t,r);return i&&a.push(i),a},pe=function(e){var t=e.prefixCls,r=e.separator,a=r===void 0?"/":r,i=e.style,s=e.className,c=e.routes,f=e.children,y=e.itemRender,h=y===void 0?ct:y,b=e.params,d=b===void 0?{}:b,m=it(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),P=o.useContext(A.E_),B=P.getPrefixCls,C=P.direction,O,U=B("breadcrumb",t);if(c&&c.length>0){var M=[];O=c.map(function(x){var w=Se(x.path,d);w&&M.push(w);var I;return x.children&&x.children.length&&(I=o.createElement(De.Z,null,x.children.map(function(k){return o.createElement(De.Z.Item,{key:k.path||k.breadcrumbName},h(k,d,c,st(M,k.path,d)))}))),o.createElement(Te,{overlay:I,separator:a,key:w||x.breadcrumbName},h(x,d,c,M))})}else f&&(O=(0,qe.Z)(f).map(function(x,w){return x&&((0,at.Z)(x.type&&(x.type.__ANT_BREADCRUMB_ITEM===!0||x.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,ot.Tm)(x,{separator:a,key:w}))}));var D=Z()(U,(0,F.Z)({},"".concat(U,"-rtl"),C==="rtl"),s);return o.createElement("div",(0,R.Z)({className:D,style:i},m),O)};pe.Item=Te,pe.Separator=nt;var ft=pe,ut=ft,dt=l(51890),vt=l(34952),mt=l(42051),gt=function(e,t,r){return!t||!r?null:o.createElement(mt.Z,{componentName:"PageHeader"},function(a){var i=a.back;return o.createElement("div",{className:"".concat(e,"-back")},o.createElement(vt.Z,{onClick:function(c){r==null||r(c)},className:"".concat(e,"-back-button"),"aria-label":i},t))})},ht=function(e){return o.createElement(ut,e)},yt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:t==="rtl"?o.createElement(Qe,null):o.createElement(Ve,null)},pt=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=t.title,i=t.avatar,s=t.subTitle,c=t.tags,f=t.extra,y=t.onBack,h="".concat(e,"-heading"),b=a||s||c||f;if(!b)return null;var d=yt(t,r),m=gt(e,d,y),P=m||i||b;return o.createElement("div",{className:h},P&&o.createElement("div",{className:"".concat(h,"-left")},m,i&&o.createElement(dt.C,i),a&&o.createElement("span",{className:"".concat(h,"-title"),title:typeof a=="string"?a:void 0},a),s&&o.createElement("span",{className:"".concat(h,"-sub-title"),title:typeof s=="string"?s:void 0},s),c&&o.createElement("span",{className:"".concat(h,"-tags")},c)),f&&o.createElement("span",{className:"".concat(h,"-extra")},f))},bt=function(e,t){return t?o.createElement("div",{className:"".concat(e,"-footer")},t):null},Pt=function(e,t){return o.createElement("div",{className:"".concat(e,"-content")},t)},Ct=function(e){var t=o.useState(!1),r=(0,Ge.Z)(t,2),a=r[0],i=r[1],s=function(f){var y=f.width;i(y<768)};return o.createElement(A.C,null,function(c){var f,y=c.getPrefixCls,h=c.pageHeader,b=c.direction,d=e.prefixCls,m=e.style,P=e.footer,B=e.children,C=e.breadcrumb,O=e.breadcrumbRender,U=e.className,M=!0;"ghost"in e?M=e.ghost:h&&"ghost"in h&&(M=h.ghost);var D=y("page-header",d),x=function(){var ie;return((ie=C)===null||ie===void 0?void 0:ie.routes)?ht(C):null},w=x(),I=C&&"props"in C,k=(O==null?void 0:O(e,w))||w,se=I?C:k,ye=Z()(D,U,(f={"has-breadcrumb":!!se,"has-footer":!!P},(0,F.Z)(f,"".concat(D,"-ghost"),M),(0,F.Z)(f,"".concat(D,"-rtl"),b==="rtl"),(0,F.Z)(f,"".concat(D,"-compact"),a),f));return o.createElement(X.Z,{onResize:s},o.createElement("div",{className:ye,style:m},se,pt(D,e,b),B&&Pt(D,B),bt(D,P)))})},Ot=Ct,cr=l(18106),Me=l(51752),Ae=l(64335),Et=l(21349),xt=l(85224),sr=l(12395),Rt=l(83832);function we(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Ze(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?we(Object(t),!0).forEach(function(r){Nt(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):we(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Nt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Tt(n,e){return Mt(n)||St(n,e)||Dt(n,e)||Bt()}function Bt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dt(n,e){if(!!n){if(typeof n=="string")return je(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return je(n,e)}}function je(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function St(n,e){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,s,c;try{for(t=t.call(n);!(a=(s=t.next()).done)&&(r.push(s.value),!(e&&r.length===e));a=!0);}catch(f){i=!0,c=f}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw c}}return r}}function Mt(n){if(Array.isArray(n))return n}var At=function(e){if(!e)return 1;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},wt=function(e){var t=e.children,r=e.style,a=e.className,i=e.markStyle,s=e.markClassName,c=e.zIndex,f=c===void 0?9:c,y=e.gapX,h=y===void 0?212:y,b=e.gapY,d=b===void 0?222:b,m=e.width,P=m===void 0?120:m,B=e.height,C=B===void 0?64:B,O=e.rotate,U=O===void 0?-22:O,M=e.image,D=e.content,x=e.offsetLeft,w=e.offsetTop,I=e.fontStyle,k=I===void 0?"normal":I,se=e.fontWeight,ye=se===void 0?"normal":se,Pe=e.fontColor,ie=Pe===void 0?"rgba(0,0,0,.15)":Pe,We=e.fontSize,Ue=We===void 0?16:We,Fe=e.fontFamily,He=Fe===void 0?"sans-serif":Fe,$t=e.prefixCls,_t=(0,o.useContext)(ce.ZP.ConfigContext),Gt=_t.getPrefixCls,Ke=Gt("pro-layout-watermark",$t),Xt=Z()("".concat(Ke,"-wrapper"),a),Yt=Z()(Ke,s),Vt=(0,o.useState)(""),ze=Tt(Vt,2),kt=ze[0],$e=ze[1];return(0,o.useEffect)(function(){var fe=document.createElement("canvas"),ee=fe.getContext("2d"),ae=At(ee),Jt="".concat((h+P)*ae,"px"),Qt="".concat((d+C)*ae,"px"),qt=x||h/2,er=w||d/2;if(fe.setAttribute("width",Jt),fe.setAttribute("height",Qt),ee){ee.translate(qt*ae,er*ae),ee.rotate(Math.PI/180*Number(U));var tr=P*ae,_e=C*ae;if(M){var ue=new Image;ue.crossOrigin="anonymous",ue.referrerPolicy="no-referrer",ue.src=M,ue.onload=function(){ee.drawImage(ue,0,0,tr,_e),$e(fe.toDataURL())}}else if(D){var rr=Number(Ue)*ae;ee.font="".concat(k," normal ").concat(ye," ").concat(rr,"px/").concat(_e,"px ").concat(He),ee.fillStyle=ie,ee.fillText(D,0,0),$e(fe.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[h,d,x,w,U,k,ye,P,C,He,ie,M,D,Ue]),o.createElement("div",{style:Ze({position:"relative"},r),className:Xt},t,o.createElement("div",{className:Yt,style:Ze({zIndex:f,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(h+P,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(kt,"')")},i)}))},Zt=wt,jt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],It=["children","loading","className","style","footer","affixProps","ghost","fixedHeader"];function Ie(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function V(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ie(Object(t),!0).forEach(function(r){be(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ie(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function be(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Le(n,e){if(n==null)return{};var t=Lt(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,r)||(t[r]=n[r]))}return t}function Lt(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function q(){return q=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},q.apply(this,arguments)}function he(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?he=function(t){return typeof t}:he=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(n)}function Wt(n){return he(n)==="object"?n:{spinning:n}}var Ut=function(e){var t=e.tabList,r=e.tabActiveKey,a=e.onTabChange,i=e.tabBarExtraContent,s=e.tabProps,c=e.prefixedClassName;return t&&t.length||i?o.createElement(Me.Z,q({className:"".concat(c,"-tabs"),activeKey:r,onChange:function(y){a&&a(y)},tabBarExtraContent:i},s),t==null?void 0:t.map(function(f,y){return o.createElement(Me.Z.TabPane,q({},f,{tab:f.tab,key:f.key||y}))})):null},Ft=function(e,t,r){return!e&&!t?null:o.createElement("div",{className:"".concat(r,"-detail")},o.createElement("div",{className:"".concat(r,"-main")},o.createElement("div",{className:"".concat(r,"-row")},e&&o.createElement("div",{className:"".concat(r,"-content")},e),t&&o.createElement("div",{className:"".concat(r,"-extraContent")},t))))},fr=function(e){var t=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,q({},t==null?void 0:t.breadcrumb,t==null?void 0:t.breadcrumbProps,e)))},Ht=function(e){var t,r=(0,o.useContext)(Ae.Z),a=e.title,i=e.content,s=e.pageHeaderRender,c=e.header,f=e.prefixedClassName,y=e.extraContent,h=e.style,b=e.prefixCls,d=e.breadcrumbRender,m=Le(e,jt),P=(0,o.useMemo)(function(){if(!!d)return d},[d]);if(s===!1)return null;if(s)return o.createElement(o.Fragment,null," ",s(V(V({},e),r)));var B=a;!a&&a!==!1&&(B=r.title);var C=V(V(V({},r),{},{title:B},m),{},{footer:Ut(V(V({},m),{},{breadcrumbRender:d,prefixedClassName:f}))},c),O=C.breadcrumb,U=(!O||!(O==null?void 0:O.itemRender)&&!(O==null||(t=O.routes)===null||t===void 0?void 0:t.length))&&!d;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(M){return!C[M]})&&U&&!i&&!y?null:o.createElement("div",{className:"".concat(f,"-warp")},o.createElement(Ot,q({},C,{breadcrumb:d===!1?void 0:V(V({},C.breadcrumb),r.breadcrumbProps),breadcrumbRender:P,prefixCls:b}),(c==null?void 0:c.children)||Ft(i,y,f)))},Kt=function(e){var t,r=e.children,a=e.loading,i=a===void 0?!1:a,s=e.className,c=e.style,f=e.footer,y=e.affixProps,h=e.ghost,b=e.fixedHeader,d=Le(e,It),m=(0,o.useContext)(Ae.Z),P=(0,o.useContext)(ce.ZP.ConfigContext),B=P.getPrefixCls,C=e.prefixCls||B("pro"),O="".concat(C,"-page-container"),U=Z()(O,s,(t={},be(t,"".concat(C,"-page-container-ghost"),h),be(t,"".concat(C,"-page-container-with-footer"),f),t)),M=(0,o.useMemo)(function(){return r?o.createElement(o.Fragment,null,o.createElement("div",{className:"".concat(O,"-children-content")},r),m.hasFooterToolbar&&o.createElement("div",{style:{height:48,marginTop:24}})):null},[r,O,m.hasFooterToolbar]),D=o.createElement(Ht,q({},d,{ghost:h,prefixCls:void 0,prefixedClassName:O})),x=(0,o.useMemo)(function(){if(o.isValidElement(i))return i;if(typeof i=="boolean"&&!i)return null;var I=Wt(i);return o.createElement(Rt.Z,I)},[i]),w=(0,o.useMemo)(function(){var I=x||M;return e.waterMarkProps||m.waterMarkProps?o.createElement(Zt,e.waterMarkProps||m.waterMarkProps,I):I},[e.waterMarkProps,m.waterMarkProps,x,M]);return o.createElement("div",{style:c,className:U},b&&D?o.createElement(ne,q({offsetTop:m.hasHeader&&m.fixedHeader?m.headerHeight:0},y),D):D,w&&o.createElement(Et.Z,null,w),f&&o.createElement(xt.Z,{prefixCls:C},f))},zt=Kt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},34952:function(de,z,l){"use strict";var $=l(22122),_=l(67294),R=l(15105),F=function(T,G){var L={};for(var o in T)Object.prototype.hasOwnProperty.call(T,o)&&G.indexOf(o)<0&&(L[o]=T[o]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,o=Object.getOwnPropertySymbols(T);N<o.length;N++)G.indexOf(o[N])<0&&Object.prototype.propertyIsEnumerable.call(T,o[N])&&(L[o[N]]=T[o[N]]);return L},H={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},te=_.forwardRef(function(T,G){var L=function(W){var v=W.keyCode;v===R.Z.ENTER&&W.preventDefault()},o=function(W){var v=W.keyCode,u=T.onClick;v===R.Z.ENTER&&u&&u()},N=T.style,Z=T.noStyle,K=T.disabled,X=F(T,["style","noStyle","disabled"]),A={};return Z||(A=(0,$.Z)({},H)),K&&(A.pointerEvents="none"),A=(0,$.Z)((0,$.Z)({},A),N),_.createElement("div",(0,$.Z)({role:"button",tabIndex:0,ref:G},X,{onKeyDown:L,onKeyUp:o,style:A}))});z.Z=te}}]);

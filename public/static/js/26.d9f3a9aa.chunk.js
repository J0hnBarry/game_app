(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[26],{1132:function(e,a,t){"use strict";t.r(a);var n=t(25),r=t(0),c=t.n(r),l=t(272),s=t(906),o=t(910),i=t(42),m=t(280),u=t(915),p=t(37),f=t(23),d=t(4),g=t(907),b=t(918),h=t(872),E=t(79),v=t(916),O=t.n(v),j=Object(l.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var y=function(e){var a=e.className,t=Object(p.a)(e,["className"]),n=j();return c.a.createElement(g.a,Object.assign({className:Object(d.a)(n.root,a),container:!0,justify:"space-between",spacing:3},t),c.a.createElement(g.a,{item:!0},c.a.createElement(b.a,{separator:c.a.createElement(O.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(h.a,{variant:"body1",color:"inherit",to:"/app",component:f.a},"Dashboard"),c.a.createElement(E.a,{variant:"body1",color:"textPrimary"},"Assessments"),c.a.createElement(E.a,{variant:"body1",color:"textPrimary"},"Written test scoring")),c.a.createElement(E.a,{variant:"h3",color:"textPrimary"},"These are Assessments that you created!")))},w=t(282),k=t.n(w),x=t(900),N=t(886),C=t(966),P=t(967),S=t(968),z=t(969),L=t(970),M=t(913),R=t(850),B=t(204),I=t(1145),W=t(977),A=t(919);var T=Object(l.a)((function(e){return{root:{},avatar:{height:42,width:42,marginRight:e.spacing(1)}}}));var _=function(e){var a=e.className,t=e.Myassessments,l=Object(p.a)(e,["className","Myassessments"]),s=T(),i=Object(r.useState)(0),m=Object(n.a)(i,2),u=m[0],g=m[1],b=Object(r.useState)(5),E=Object(n.a)(b,2),v=E[0],O=E[1],j=function(e,a,t){return e.slice(a*t,a*t+t)}(t,u,v);return c.a.createElement(x.a,Object.assign({className:Object(d.a)(s.root,a)},l),c.a.createElement(N.a,null),c.a.createElement(k.a,null,c.a.createElement(o.a,{minWidth:700},c.a.createElement(C.a,null,c.a.createElement(P.a,null,c.a.createElement(S.a,null,c.a.createElement(z.a,null,"Course Name"),c.a.createElement(z.a,null,"Assessment Name"),c.a.createElement(z.a,null,"Learners"),c.a.createElement(z.a,null,"Objective scores"),c.a.createElement(z.a,null,"Written scores"),c.a.createElement(z.a,null,"Written test number"),c.a.createElement(z.a,{align:"right"},"View & giving scores"))),c.a.createElement(L.a,null,j.map((function(e){return c.a.createElement(S.a,{hover:!0,key:e._id},c.a.createElement(z.a,null,c.a.createElement(o.a,{display:"flex",alignItems:"center"},c.a.createElement(M.a,{className:s.avatar,style:{backgroundColor:"darkgreen"}},Object(A.a)(e.coursename)),c.a.createElement(h.a,{color:"inherit",variant:"h6"},e.coursename))),c.a.createElement(z.a,null,c.a.createElement(o.a,{display:"flex",alignItems:"center"},c.a.createElement(M.a,{className:s.avatar,style:{backgroundColor:"darkgreen"}},Object(A.a)(e.name)),c.a.createElement(h.a,{color:"inherit",variant:"h6"},e.name))),c.a.createElement(z.a,null,e.learners.length," \xa0 (learners)"),c.a.createElement(z.a,null,e.object," \xa0 (scores)"),c.a.createElement(z.a,null,e.written," \xa0 (scores)"),c.a.createElement(z.a,null,e.wrianswer," \xa0 (test papers)"),c.a.createElement(z.a,{align:"right"},c.a.createElement(R.a,{component:f.a,to:"/app/assessments/assessments/writtenScoring/"+e._id},c.a.createElement(B.a,{fontSize:"small"},c.a.createElement(W.a,null)))))})))))),c.a.createElement(I.a,{component:"div",count:t.length,onChangePage:function(e,a){g(a)},onChangeRowsPerPage:function(e){O(e.target.value)},page:u,rowsPerPage:v,rowsPerPageOptions:[5,10]}))},H=t(46),J=t(17),V=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=V(),a=Object(u.a)(),t=Object(r.useState)(null),l=Object(n.a)(t,2),p=l[0],f=l[1],d=Object(J.c)((function(e){return e.account.user})),g=Object(r.useCallback)((function(){i.a.get(H.a+"assessments/assessments/edit/"+d.email).then((function(e){a.current&&f(e.data.assessments)}))}),[a,d.email]);return Object(r.useEffect)((function(){g()}),[g]),p?c.a.createElement(m.a,{className:e.root,title:"Own Course List"},c.a.createElement(s.a,{maxWidth:!1},c.a.createElement(y,null),p&&c.a.createElement(o.a,{mt:3},c.a.createElement(_,{Myassessments:p})))):null}},915:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},916:function(e,a,t){"use strict";var n=t(213);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(281)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=c},918:function(e,a,t){"use strict";var n=t(1),r=t(47),c=t(3),l=t(0),s=(t(86),t(2),t(4)),o=t(6),i=t(79),m=t(12),u=t(162),p=Object(u.a)(l.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=t(279);var d=Object(o.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(c.a)(e,["classes"]);return l.createElement(f.a,Object(n.a)({component:"li",className:a.root,focusRipple:!0},t),l.createElement(p,{className:a.icon}))}));var g=l.forwardRef((function(e,a){var t=e.children,o=e.classes,m=e.className,u=e.component,p=void 0===u?"nav":u,f=e.expandText,g=void 0===f?"Show path":f,b=e.itemsAfterCollapse,h=void 0===b?1:b,E=e.itemsBeforeCollapse,v=void 0===E?1:E,O=e.maxItems,j=void 0===O?8:O,y=e.separator,w=void 0===y?"/":y,k=Object(c.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),x=l.useState(!1),N=x[0],C=x[1],P=l.Children.toArray(t).filter((function(e){return l.isValidElement(e)})).map((function(e,a){return l.createElement("li",{className:o.li,key:"child-".concat(a)},e)}));return l.createElement(i.a,Object(n.a)({ref:a,component:p,color:"textSecondary",className:Object(s.a)(o.root,m)},k),l.createElement("ol",{className:o.ol},function(e,a,t){return e.reduce((function(n,r,c){return c<e.length-1?n=n.concat(r,l.createElement("li",{"aria-hidden":!0,key:"separator-".concat(c),className:a},t)):n.push(r),n}),[])}(N||j&&P.length<=j?P:function(e){return v+h>=e.length?e:[].concat(Object(r.a)(e.slice(0,v)),[l.createElement(d,{"aria-label":g,key:"ellipsis",onClick:function(){C(!0)}})],Object(r.a)(e.slice(e.length-h,e.length)))}(P),o.separator,w)))}));a.a=Object(o.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},919:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},977:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(2),l=t.n(c);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=function(e){var a=e.color,t=e.size,n=o(e,["color","size"]);return r.a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),r.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))};i.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},i.defaultProps={color:"currentColor",size:"24"},a.a=i}}]);
//# sourceMappingURL=26.d9f3a9aa.chunk.js.map
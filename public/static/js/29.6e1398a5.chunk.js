(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[29],{1119:function(e,a,t){"use strict";t.r(a);var n=t(25),r=t(0),s=t.n(r),l=t(272),o=t(906),c=t(910),i=t(907),u=t(900),m=t(42),d=t(280),p=t(915),f=t(37),g=t(23),b=t(4),h=t(918),v=t(872),E=t(79),y=t(916),O=t.n(y),j=Object(l.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var w=function(e){var a=e.className,t=Object(f.a)(e,["className"]),n=j();return s.a.createElement(i.a,Object.assign({className:Object(b.a)(n.root,a),container:!0,justify:"space-between",spacing:3},t),s.a.createElement(i.a,{item:!0},s.a.createElement(h.a,{separator:s.a.createElement(O.a,{fontSize:"small"}),"aria-label":"breadcrumb"},s.a.createElement(v.a,{variant:"body1",color:"inherit",to:"/app",component:g.a},"Dashboard"),s.a.createElement(E.a,{variant:"body1",color:"textPrimary"},"Assessments"),s.a.createElement(E.a,{variant:"body1",color:"textPrimary",to:"/app/assessments/assessments/edit",component:g.a},"Edit Assessments"),s.a.createElement(E.a,{variant:"body1",color:"textPrimary"},"Edit multi-choice questions")),s.a.createElement(E.a,{variant:"h3",color:"textPrimary"},"These are multi-choice questions that you created!")))},x=t(282),S=t.n(x),k=t(886),q=t(966),C=t(967),A=t(968),N=t(969),B=t(970),P=t(850),z=t(204),I=t(1145),T=t(935);var W=Object(l.a)((function(e){return{root:{},avatar:{height:42,width:42,marginRight:e.spacing(1)}}}));var M=function(e){var a=e.className,t=e.Myassessments,l=e.onDelete,o=Object(f.a)(e,["className","Myassessments","onDelete"]),i=W(),m=Object(r.useState)(0),d=Object(n.a)(m,2),p=d[0],g=d[1],h=Object(r.useState)(5),v=Object(n.a)(h,2),E=v[0],y=v[1],O=Object(r.useState)([]),j=Object(n.a)(O,2),w=j[0],x=j[1];Object(r.useEffect)((function(){x(t)}),[t]);var M=function(e,a,t){return e.slice(a*t,a*t+t)}(w,p,E);return s.a.createElement(u.a,Object.assign({className:Object(b.a)(i.root,a)},o),s.a.createElement(k.a,null),s.a.createElement(S.a,null,s.a.createElement(c.a,null,s.a.createElement(q.a,null,s.a.createElement(C.a,null,s.a.createElement(A.a,null,s.a.createElement(N.a,null,"Question"),s.a.createElement(N.a,null,"Answer 1"),s.a.createElement(N.a,null,"Answer 2"),s.a.createElement(N.a,null,"Answer 3"),s.a.createElement(N.a,null,"Answer 4"),s.a.createElement(N.a,null,"Correct Answer"),s.a.createElement(N.a,{align:"right"},"Delete Assessment"))),s.a.createElement(B.a,null,M.map((function(e){return s.a.createElement(A.a,{hover:!0,key:e._id},s.a.createElement(N.a,null,e.ques),s.a.createElement(N.a,null,e.ans1),s.a.createElement(N.a,null,e.ans2),s.a.createElement(N.a,null,e.ans3),s.a.createElement(N.a,null,e.ans4),s.a.createElement(N.a,null,e.crt),s.a.createElement(N.a,{align:"right"},s.a.createElement(P.a,{onClick:function(a){window.confirm("Are you really want to delete this course?")&&l(e._id)}},s.a.createElement(z.a,{fontSize:"small"},s.a.createElement(T.a,null)))))})))))),s.a.createElement(I.a,{component:"div",count:w.length,onChangePage:function(e,a){g(a)},onChangeRowsPerPage:function(e){y(e.target.value)},page:p,rowsPerPage:E,rowsPerPageOptions:[5,10]}))},R=t(46),L=t(30),Q=t.n(L),D=t(54),_=t(922),H=t(921),V=t(873),J=t(899),F=Object(l.a)((function(){return{root:{}}})),G=[{value:"answer1"},{value:"answer2"},{value:"answer3"},{value:"answer4"}];var K=function(e){var a=e.className,t=e.onSubmitSuccess,n=Object(f.a)(e,["className","onSubmitSuccess"]),r=F();return s.a.createElement(H.a,{initialValues:{question:"",ans1:"",ans2:"",ans3:"",ans4:"",answer:G[0].value},validationSchema:_.c().shape({question:_.e().max(255).required("Question is required"),ans1:_.e().max(255).required("Answer1 is required"),ans2:_.e().max(255).required("Answer2 is required"),ans3:_.e().max(255).required("Answer3 is required"),ans4:_.e().max(255).required("Answer4 is required")}),onSubmit:function(){var e=Object(D.a)(Q.a.mark((function e(a,n){var r,s,l;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,s=n.setStatus,l=n.setSubmitting;try{t(a)}catch(o){s({success:!1}),r({submit:o.message}),l(!1)}case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,l=e.handleBlur,o=e.handleChange,i=e.handleSubmit,u=e.isSubmitting,m=e.touched,d=e.values;return s.a.createElement("form",Object.assign({className:Object(b.a)(r.root,a),onSubmit:i},n),"      ",s.a.createElement(V.a,{color:"secondary",disabled:u,fullWidth:!0,size:"large",type:"submit",variant:"contained",component:g.a,to:"/app/assessments/assessments/edit"},"Back"),s.a.createElement(J.a,{error:Boolean(m.question&&t.question),fullWidth:!0,helperText:m.question&&t.question,label:"Question(ex.what is 1+1?)",margin:"normal",name:"question",onBlur:l,onChange:o,type:"String",value:d.question,variant:"outlined"}),s.a.createElement(J.a,{error:Boolean(m.ans1&&t.ans1),fullWidth:!0,helperText:m.ans1&&t.ans1,label:"Answer1(ex.3)",margin:"normal",name:"ans1",onBlur:l,onChange:o,type:"String",value:d.ans1,variant:"outlined"}),s.a.createElement(J.a,{error:Boolean(m.ans2&&t.ans2),fullWidth:!0,helperText:m.ans2&&t.ans2,label:"Answer2(ex.2)",margin:"normal",name:"ans2",onBlur:l,onChange:o,type:"String",value:d.ans2,variant:"outlined"}),s.a.createElement(J.a,{error:Boolean(m.ans3&&t.ans3),fullWidth:!0,helperText:m.ans3&&t.ans3,label:"Answer3(ex.4)",margin:"normal",name:"ans3",onBlur:l,onChange:o,type:"String",value:d.ans3,variant:"outlined"}),s.a.createElement(J.a,{error:Boolean(m.ans4&&t.ans4),fullWidth:!0,helperText:m.ans4&&t.ans4,label:"Answer4(ex.1)",margin:"normal",name:"ans4",onBlur:l,onChange:o,type:"String",value:d.ans4,variant:"outlined"}),s.a.createElement(J.a,{fullWidth:!0,label:"Select correct answer",name:"answer",margin:"normal",select:!0,onChange:o,SelectProps:{native:!0},value:d.answer,variant:"outlined"},G.map((function(e){return s.a.createElement("option",{value:e.value,key:e.value},e.value)}))),s.a.createElement(c.a,{mt:2},s.a.createElement(V.a,{color:"secondary",disabled:u,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Add Question")))}))},U=t(87),X=t(35),Y=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=Y(),a=Object(p.a)(),t=Object(X.i)(),l=Object(r.useState)(null),f=Object(n.a)(l,2),g=f[0],b=f[1],h=Object(U.useSnackbar)().enqueueSnackbar,v=Object(r.useCallback)((function(){m.a.get(R.a+"assessments/assessments/editQuestion/"+t.Id).then((function(e){a.current&&b(e.data.questions)}))}),[a,t.Id]);return Object(r.useEffect)((function(){v()}),[v]),g?s.a.createElement(d.a,{className:e.root,title:"Editing objective questions"},s.a.createElement(o.a,{maxWidth:!1},s.a.createElement(w,null),g&&s.a.createElement(c.a,{mt:5},s.a.createElement(i.a,{container:!0,spacing:3},s.a.createElement(i.a,{item:!0,lg:8,md:12,sm:12},s.a.createElement(M,{Myassessments:g,onDelete:function(e){m.a.post(R.a+"assessments/assessments/deleteQuestion",{assessmentId:t.Id,quesId:e}).then((function(e){h(e.data.message,{variant:"success"}),b(e.data.questions)}))}})),s.a.createElement(i.a,{item:!0,lg:4,md:12,sm:12},s.a.createElement(u.a,{style:{padding:"20px"}},s.a.createElement(K,{onSubmitSuccess:function(e){m.a.post(R.a+"assessments/assessments/saveQuestion",{values:e,assessmentId:t.Id}).then((function(e){e.data.success?(h(e.data.message,{variant:"success"}),b(e.data.questions)):h(e.data.message,{variant:"error"})}))}}))))))):null}},915:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},916:function(e,a,t){"use strict";var n=t(213);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),s=(0,n(t(281)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=s},918:function(e,a,t){"use strict";var n=t(1),r=t(47),s=t(3),l=t(0),o=(t(86),t(2),t(4)),c=t(6),i=t(79),u=t(12),m=t(162),d=Object(m.a)(l.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=t(279);var f=Object(c.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(s.a)(e,["classes"]);return l.createElement(p.a,Object(n.a)({component:"li",className:a.root,focusRipple:!0},t),l.createElement(d,{className:a.icon}))}));var g=l.forwardRef((function(e,a){var t=e.children,c=e.classes,u=e.className,m=e.component,d=void 0===m?"nav":m,p=e.expandText,g=void 0===p?"Show path":p,b=e.itemsAfterCollapse,h=void 0===b?1:b,v=e.itemsBeforeCollapse,E=void 0===v?1:v,y=e.maxItems,O=void 0===y?8:y,j=e.separator,w=void 0===j?"/":j,x=Object(s.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),S=l.useState(!1),k=S[0],q=S[1],C=l.Children.toArray(t).filter((function(e){return l.isValidElement(e)})).map((function(e,a){return l.createElement("li",{className:c.li,key:"child-".concat(a)},e)}));return l.createElement(i.a,Object(n.a)({ref:a,component:d,color:"textSecondary",className:Object(o.a)(c.root,u)},x),l.createElement("ol",{className:c.ol},function(e,a,t){return e.reduce((function(n,r,s){return s<e.length-1?n=n.concat(r,l.createElement("li",{"aria-hidden":!0,key:"separator-".concat(s),className:a},t)):n.push(r),n}),[])}(k||O&&C.length<=O?C:function(e){return E+h>=e.length?e:[].concat(Object(r.a)(e.slice(0,E)),[l.createElement(f,{"aria-label":g,key:"ellipsis",onClick:function(){q(!0)}})],Object(r.a)(e.slice(e.length-h,e.length)))}(C),c.separator,w)))}));a.a=Object(c.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},935:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(2),l=t.n(s);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=function(e){var a=e.color,t=e.size,n=c(e,["color","size"]);return r.a.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}),r.a.createElement("line",{x1:"18",y1:"9",x2:"12",y2:"15"}),r.a.createElement("line",{x1:"12",y1:"9",x2:"18",y2:"15"}))};i.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},i.defaultProps={color:"currentColor",size:"24"},a.a=i}}]);
//# sourceMappingURL=29.6e1398a5.chunk.js.map
(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[43],{1111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(272),s=t(907),o=t(161),l=t(910),i=t(886),m=t(873),d=t(280),u=t(25),p=t(37),b=t(4),g=t(282),E=t.n(g),f=t(900),h=t(901),v=t(263),x=t(24);var j=function(e){var a,t=e.data,n=e.labels,c=e.className,s=Object(p.a)(e,["data","labels","className"]),o=Object(x.a)(),l={position:"relative",width:(a=n.length,a<=5?"100%":20*a+"%")},i={datasets:[{label:"Learners",backgroundColor:o.palette.secondary.main,data:t,barThickness:30,maxBarThickness:30,barPercentage:.5,categoryPercentage:1}],labels:n},m={responsive:!0,maintainAspectRatio:!1,indexAxis:"x",animation:!1,cornerRadius:20,legend:{display:!1},layout:{padding:0},scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1},stacked:!0,ticks:{padding:20,fontColor:o.palette.text.primary}}],yAxes:[{gridLines:{borderDash:[2],borderDashOffset:[2],color:o.palette.divider,drawBorder:!1,zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2],zeroLineColor:o.palette.divider},ticks:{padding:20,fontColor:o.palette.text.secondary,beginAtZero:!0,stepSize:5,min:0,maxTicksLimit:100,callback:function(e){return e>0?"".concat(e," people"):e}}}]},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:10,yPadding:20,xPadding:20,borderWidth:1,borderColor:o.palette.divider,backgroundColor:o.palette.background.dark,titleFontColor:o.palette.text.primary,bodyFontColor:o.palette.text.secondary,footerFontColor:o.palette.text.secondary,callbacks:{title:function(){},label:function(e){var a="".concat(e.xLabel,": ").concat(e.yLabel);return e.yLabel>0&&(a+=" learners"),a}}}};return r.a.createElement("div",Object.assign({className:Object(b.a)(l,c)},s),r.a.createElement(v.a,{data:i,options:m}))},N=t(46),O=t(42),y=t(915),k=Object(c.a)((function(){return{root:{},chart:{height:500}}}));var C=function(e){var a=e.className,t=Object(p.a)(e,["className"]),c=k(),s=Object(y.a)(),o=Object(n.useState)(null),m=Object(u.a)(o,2),d=m[0],g=m[1],v=Object(n.useCallback)((function(){O.a.get(N.a+"dashboard/courses").then((function(e){s.current&&g(e.data.courses)}))}),[s]);if(Object(n.useEffect)((function(){v()}),[v]),!d)return null;for(var x=[],C=[],w=0;w<d.length;w++)C.push(d[w].name),x.push(d[w].learners.length);return r.a.createElement(f.a,Object.assign({className:Object(b.a)(c.root,a)},t),r.a.createElement(h.a,{title:"Number of learners by course"}),r.a.createElement(i.a,null),r.a.createElement(E.a,null,r.a.createElement(l.a,{minWidth:750,pt:4,pr:2,pl:2,pb:3},r.a.createElement(j,{className:c.chart,data:x,labels:C}))))},w=t(23),P=t(17),L=t(79),B=Object(c.a)((function(e){return{root:{padding:e.spacing(5)},item:{padding:e.spacing(4),textAlign:"center",backgroundColor:e.palette.background.default},label:{marginLeft:e.spacing(1)},overline:{marginTop:e.spacing(1)}}}));var S=function(e){var a=e.className,t=Object(p.a)(e,["className"]),c=B(),o=Object(y.a)(),l=Object(n.useState)(null),i=Object(u.a)(l,2),m=i[0],d=i[1],g=Object(n.useCallback)((function(){O.a.get(N.a+"dashboard/statistics").then((function(e){o.current&&d(e.data.statistics)}))}),[o]);return Object(n.useEffect)((function(){g()}),[g]),m?r.a.createElement(s.a,Object.assign({className:Object(b.a)(c.root,a)},t,{alignItems:"center",container:!0,justify:"space-between"}),r.a.createElement(s.a,{className:c.item,item:!0,md:3,sm:6,xs:12},r.a.createElement(L.a,{variant:"h2",color:"textPrimary"},m.users,r.a.createElement("div",{style:{width:"20px"}}),"Users"),r.a.createElement(L.a,{className:c.overline,variant:"overline",color:"textSecondary"},"total users")),r.a.createElement(s.a,{className:c.item,item:!0,md:3,sm:6,xs:12},r.a.createElement(L.a,{variant:"h2",color:"textPrimary"},m.lecturers,r.a.createElement("div",{style:{width:"20px"}}),"Lecturers"),r.a.createElement(L.a,{className:c.overline,variant:"overline",color:"textSecondary"},"total lecturers")),r.a.createElement(s.a,{className:c.item,item:!0,md:3,sm:6,xs:12},r.a.createElement(L.a,{variant:"h2",color:"textPrimary"},m.learners,r.a.createElement("div",{style:{width:"20px"}}),"learners"),r.a.createElement(L.a,{className:c.overline,variant:"overline",color:"textSecondary"},"Total learners")),r.a.createElement(s.a,{className:c.item,item:!0,md:3,sm:6,xs:12},r.a.createElement(L.a,{variant:"h2",color:"textPrimary"},m.courses,r.a.createElement("div",{style:{width:"20px"}}),"Courses"),r.a.createElement(L.a,{className:c.overline,variant:"overline",color:"textSecondary"},"Total courses"))):null},A=t(902),I=t(931),T=t.n(I),W=Object(c.a)((function(e){return{root:{fontSize:"20px",height:"610px"}}}));var z=function(e){e.announ;var a=e.className,t=Object(p.a)(e,["announ","className"]),c=W(),s=Object(y.a)(),o=Object(n.useState)(null),l=Object(u.a)(o,2),m=l[0],d=l[1],g=Object(n.useCallback)((function(){O.a.get(N.a+"dashboard/notice").then((function(e){s.current&&d(e.data.notice)}))}),[s]);return Object(n.useEffect)((function(){g()}),[g]),m?r.a.createElement(f.a,Object.assign({className:Object(b.a)(c.root,a)},t),r.a.createElement(h.a,{title:"A new notice"}),r.a.createElement(i.a,null),r.a.createElement(A.a,null,T()(m.content))):null},R=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,paddingTop:50,paddingBottom:50},container:{margin:0,padding:e.spacing(4)},product:{position:"relative",padding:"20px",textAlign:"center",cursor:"pointer",transition:e.transitions.create("transform",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),"&:hover":{transform:"scale(1.1)"}},productImage:{borderRadius:e.shape.borderRadius,height:"250px",width:"100%"},chooseButton:{backgroundColor:e.palette.common.white}}}));a.default=function(){var e=R(),a=Object(P.c)((function(e){return e.account}));return r.a.createElement(d.a,{className:e.root,title:"dashbord"},r.a.createElement(s.a,{className:e.container,container:!0,alignItems:"center",justify:"space-between"},r.a.createElement(s.a,{item:!0,md:2,xs:12},r.a.createElement(o.a,{className:e.product,elevation:1},r.a.createElement("img",{className:e.productImage,alt:"Product",src:a.user.avatar}),r.a.createElement(l.a,{my:2},r.a.createElement(i.a,null)),r.a.createElement(m.a,{variant:"contained",fullWidth:!0,className:e.chooseButton,component:w.a,to:"/app/account"},"Profile"))),r.a.createElement(s.a,{item:!0,md:2,xs:12},r.a.createElement(o.a,{className:e.product,elevation:1},r.a.createElement("img",{alt:"Product",className:e.productImage,src:"/static/images/dashboards/course.jpg"}),r.a.createElement(l.a,{my:2},r.a.createElement(i.a,null)),r.a.createElement(m.a,{variant:"contained",fullWidth:!0,className:e.chooseButton,component:w.a,to:"/app/courses"},"Courses"))),r.a.createElement(s.a,{item:!0,md:2,xs:12},r.a.createElement(o.a,{className:e.product,elevation:1},r.a.createElement("img",{alt:"Product",className:e.productImage,src:"/static/images/dashboards/assessment.jpg"}),r.a.createElement(l.a,{my:2},r.a.createElement(i.a,null)),r.a.createElement(m.a,{variant:"contained",fullWidth:!0,className:e.chooseButton,component:w.a,to:"/app/assessments/assessments"},"Assessments"))),r.a.createElement(s.a,{item:!0,md:2,xs:12},r.a.createElement(o.a,{className:e.product,elevation:1},r.a.createElement("img",{alt:"Product",className:e.productImage,src:"/static/images/dashboards/movers & shakers.jpg"}),r.a.createElement(l.a,{my:2},r.a.createElement(i.a,null)),r.a.createElement(m.a,{variant:"contained",fullWidth:!0,className:e.chooseButton,component:w.a,to:"/app/streakLeaders"},"Movers"))),r.a.createElement(s.a,{item:!0,md:2,xs:12},r.a.createElement(o.a,{className:e.product,elevation:1},r.a.createElement("img",{alt:"Product",className:e.productImage,src:"/static/images/dashboards/notifications.jpg"}),r.a.createElement(l.a,{my:2},r.a.createElement(i.a,null)),r.a.createElement(m.a,{variant:"contained",fullWidth:!0,className:e.chooseButton,component:w.a,to:"/app/notification"},"Notifications")))),r.a.createElement(S,null),r.a.createElement(s.a,{className:e.container,container:!0,spacing:2,alignItems:"center",justify:"space-between"},r.a.createElement(s.a,{item:!0,lg:7,md:7,xs:12},r.a.createElement(C,null)),r.a.createElement(s.a,{item:!0,lg:5,md:5,xs:12},r.a.createElement(z,null))))}},915:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},958:function(e,a){}}]);
//# sourceMappingURL=43.05ef091c.chunk.js.map
(this["webpackJsonpweb-experiments"]=this["webpackJsonpweb-experiments"]||[]).push([[0],{106:function(t,e,n){},112:function(t,e,n){},113:function(t,e,n){},117:function(t,e,n){},118:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),i=n(8),a=n.n(i),o=(n(106),n(53)),l=n(10),s=n(17),u=n(13),d=n(15),h=function(t){return Math.floor(t/9)},j=function(t){return t-9*h(t)},b=function(t,e){var n=h(e);return x(t,n)},f=function(t,e){var n=j(e);return O(t,n)},v=function(t,e){var n=function(t){var e=Math.floor(t/27),n=j(t);return 8===n||7===n||6===n?6+27*e:5===n||4===n||3===n?3+27*e:27*e}(e),r=n+9,c=r+9;return[t[n],t[n+1],t[n+2],t[r],t[r+1],t[r+2],t[c],t[c+1],t[c+2]].filter((function(t){return void 0!==t}))},x=function(t,e){for(var n=9*e,r=n+9,c=[],i=n;i<r;i++){var a=t[i];a&&c.push(a)}return c},O=function(t,e){for(var n=[],r=0;r<9;r++){var c=t[e+9*r];c&&n.push(c)}return n},p=function t(e){for(var n=0;n<e.length;n++){if(!e[n]){var r=function(){var r=[1,2,3,4,5,6,7,8,9],c=v(e,n);r=r.filter((function(t){return!c.includes(t)}));var i=b(e,n);r=r.filter((function(t){return!i.includes(t)}));var a=f(e,n);r=r.filter((function(t){return!a.includes(t)}));var o,l=Object(d.a)(r);try{for(l.s();!(o=l.n()).done;){var u=o.value,h=Object(s.a)(e);h[n]=u;var j=t(h);if(g(j))return{v:j}}}catch(x){l.e(x)}finally{l.f()}return{v:e}}();if("object"===typeof r)return r.v}}return e},g=function(t){if(!(0===t.filter((function(t){return void 0===t})).length))return!1;for(var e=function(e){var n=x(t,e);if([1,2,3,4,5,6,7,8,9].filter((function(t){return!n.includes(t)})).length>0)return{v:!1}},n=0;n<9;n++){var r=e(n);if("object"===typeof r)return r.v}for(var c=function(e){var n=O(t,e);if([1,2,3,4,5,6,7,8,9].filter((function(t){return!n.includes(t)})).length>0)return{v:!1}},i=0;i<9;i++){var a=c(i);if("object"===typeof a)return a.v}return!0},m=n(151),y=n(152),k=n(1),w=function(t){var e=t.value,n=t.onValueChanged,r=c.a.useState(!1),i=Object(u.a)(r,2),a=i[0],o=i[1];return Object(k.jsxs)(m.a,{labelId:"val",id:"value",open:a,onClose:function(){o(!1)},onOpen:function(){o(!0)},value:e,onChange:function(t){var e=t.target.value;n(e||void 0)},variant:"outlined",renderValue:function(t){return Object(k.jsx)("div",{style:{fontSize:"30px",textAlign:"center"},children:e})},children:[Object(k.jsx)(y.a,{value:"",children:Object(k.jsx)("em",{children:"None"})}),Object(k.jsx)(y.a,{value:1,children:"1"}),Object(k.jsx)(y.a,{value:2,children:"2"}),Object(k.jsx)(y.a,{value:3,children:"3"}),Object(k.jsx)(y.a,{value:4,children:"4"}),Object(k.jsx)(y.a,{value:5,children:"5"}),Object(k.jsx)(y.a,{value:6,children:"6"}),Object(k.jsx)(y.a,{value:7,children:"7"}),Object(k.jsx)(y.a,{value:8,children:"8"}),Object(k.jsx)(y.a,{value:9,children:"9"})]})},C={border:"1px solid black",height:"60px",width:"60px",textAlign:"center",fontSize:"30px"},S={border:"1px solid black"},A=function(t){var e=t.values,n=t.part,r=t.viewOnly,c=t.onValueChanged,i=function(t,e){var n=3*e-1,r=n+6,c=r+6;return[[t[n+1],t[n+2],t[n+3]],[t[r+4],t[r+5],t[r+6]],[t[c+7],t[c+8],t[c+9]]]}(e,n),a=3*n-1,o=a+6,l=o+6,s=new Map([[0,a+1],[1,a+2],[2,a+3],[3,o+4],[4,o+5],[5,o+6],[6,l+7],[7,l+8],[8,l+9]]);return Object(k.jsx)("table",{style:S,children:Object(k.jsx)("tbody",{children:i.map((function(t,e){return Object(k.jsx)("tr",{style:C,children:t.map((function(t,n){return Object(k.jsx)("td",{style:C,children:r?t:Object(k.jsx)(w,{value:t,onValueChanged:function(t){if(c){var r=3*e+n,i=s.get(r);c(i,t)}}})},n)}))},e)}))})})},M=function(t){var e=t.values,n=t.sudokuRow,r=t.onValueChanged,c=t.viewOnly,i=9*n,a=i+1,o=a+1;return Object(k.jsxs)("div",{style:{flexDirection:"row",display:"flex"},children:[Object(k.jsx)(A,{values:e,viewOnly:c,part:i,onValueChanged:r},i),Object(k.jsx)(A,{values:e,viewOnly:c,part:a,onValueChanged:r},a),Object(k.jsx)(A,{values:e,viewOnly:c,part:o,onValueChanged:r},o)]})},P=function(t){var e=t.input,n=t.onValueChanged,r=t.viewOnly;return Object(k.jsxs)("div",{children:[Object(k.jsx)(M,{values:e,sudokuRow:0,viewOnly:r,onValueChanged:n},0),Object(k.jsx)(M,{values:e,sudokuRow:1,viewOnly:r,onValueChanged:n},1),Object(k.jsx)(M,{values:e,sudokuRow:2,viewOnly:r,onValueChanged:n},2)]})},N=(n(112),function(){var t=Object(r.useState)(new Array(81)),e=Object(u.a)(t,2),n=e[0],c=e[1],i=Object(r.useState)(!1),a=Object(u.a)(i,2),o=a[0],l=a[1];return Object(k.jsxs)("div",{children:[Object(k.jsx)(P,{viewOnly:o,input:n,onValueChanged:function(t,e){c((function(n){var r=Object(s.a)(n);return r[t]=e,r}))}}),Object(k.jsx)("button",{className:"SudokuButton",onClick:function(){var t=p(n);c(t),l(!0)},children:"Solve"}),Object(k.jsx)("button",{className:"SudokuButton",onClick:function(){c(new Array(81)),l(!1)},children:"Clear"})]})}),R=(n(113),function(){var t=Object(l.f)();return Object(k.jsx)("table",{className:"table",children:Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{className:"th",onClick:function(){return t.push("/rubik")},children:"Rubik"}),Object(k.jsx)("th",{className:"th",onClick:function(){return t.push("/sudoku")},children:"Sudoku solver"}),Object(k.jsx)("th",{className:"th",onClick:function(){return t.push("/clock")},children:"Clock"}),Object(k.jsx)("th",{className:"th",onClick:function(){return t.push("/puzzle")},children:"Puzzle"}),Object(k.jsx)("th",{className:"th",onClick:function(){return t.push("/graph")},children:"Graph"})]})})})}),T=n(14),z=function(t){var e=Object(s.a)(t),n=e[45];e[45]=e[36],e[36]=e[18],e[18]=e[0],e[0]=n;var r=e[48];e[48]=e[39],e[39]=e[21],e[21]=e[3],e[3]=r;var c=e[51];e[51]=e[42],e[42]=e[24],e[24]=e[6],e[6]=c;var i=e[9];e[9]=e[15],e[15]=e[17],e[17]=e[11],e[11]=i;var a=e[10];return e[10]=e[12],e[12]=e[16],e[16]=e[14],e[14]=a,e},G=function(t){var e=Object(s.a)(t),n=e[2];e[2]=e[20],e[20]=e[38],e[38]=e[47],e[47]=n;var r=e[5];e[5]=e[23],e[23]=e[41],e[41]=e[50],e[50]=r;var c=e[8];e[8]=e[26],e[26]=e[44],e[44]=e[53],e[53]=c;var i=e[27];e[27]=e[33],e[33]=e[35],e[35]=e[29],e[29]=i;var a=e[28];return e[28]=e[30],e[30]=e[34],e[34]=e[32],e[32]=a,e},H=function(t){var e=Object(s.a)(t),n=e[0];e[0]=e[6],e[6]=e[8],e[8]=e[2],e[2]=n;var r=e[1];e[1]=e[3],e[3]=e[7],e[7]=e[5],e[5]=r;var c=e[9];e[9]=e[18],e[18]=e[27],e[27]=e[53],e[53]=c;var i=e[10];e[10]=e[19],e[19]=e[28],e[28]=e[52],e[52]=i;var a=e[11];return e[11]=e[20],e[20]=e[29],e[29]=e[51],e[51]=a,e},I=function(t){var e=Object(s.a)(t),n=e[36];e[36]=e[42],e[42]=e[44],e[44]=e[38],e[38]=n;var r=e[37];e[37]=e[39],e[39]=e[43],e[43]=e[41],e[41]=r;var c=e[35];e[35]=e[26],e[26]=e[15],e[15]=e[45],e[45]=c;var i=e[34];e[34]=e[25],e[25]=e[16],e[16]=e[46],e[46]=i;var a=e[33];return e[33]=e[24],e[24]=e[17],e[17]=e[47],e[47]=a,e},V=function(t){var e=Object(s.a)(t),n=e[45];e[45]=e[51],e[51]=e[53],e[53]=e[47],e[47]=n;var r=e[46];e[46]=e[48],e[48]=e[52],e[52]=e[50],e[50]=r;var c=e[44];e[44]=e[15],e[15]=e[0],e[0]=e[29],e[29]=c;var i=e[32];e[32]=e[43],e[43]=e[12],e[12]=e[1],e[1]=i;var a=e[35];return e[35]=e[42],e[42]=e[9],e[9]=e[2],e[2]=a,e},W=function(t){var e=Object(s.a)(t),n=e[18];e[18]=e[24],e[24]=e[26],e[26]=e[20],e[20]=n;var r=e[19];e[19]=e[21],e[21]=e[25],e[25]=e[23],e[23]=r;var c=e[8];e[8]=e[11],e[11]=e[36],e[36]=e[33],e[33]=c;var i=e[7];e[7]=e[14],e[14]=e[37],e[37]=e[30],e[30]=i;var a=e[6];return e[6]=e[17],e[17]=e[38],e[38]=e[27],e[27]=a,e},L={width:"50px",height:"50px",lineHeight:"50px",border:"3px solid black",background:"lightblue",textAlign:"center",borderRadius:"4px",userSelect:"none"},X=function(t){return t>=45?"salmon":t>=36?"yellow":t>=27?"lime":t>=18?"orange":t>=9?"DeepSkyBlue":"white"},Y=function(t){var e=t.value;return Object(k.jsx)("div",{style:Object(T.a)(Object(T.a)({},L),{},{background:X(e)}),children:e})},F={padding:"0.02rem"},D={},B={borderSpacing:"0.1rem"},E=function(t){var e=t.values;return Object(k.jsx)("table",{style:B,children:Object(k.jsxs)("tbody",{children:[Object(k.jsxs)("tr",{style:D,children:[Object(k.jsx)("td",{style:F,children:Object(k.jsx)(Y,{value:e[0]})}),Object(k.jsx)("td",{style:F,children:Object(k.jsx)(Y,{value:e[1]})}),Object(k.jsx)("td",{style:F,children:Object(k.jsx)(Y,{value:e[2]})})]}),Object(k.jsxs)("tr",{style:D,children:[Object(k.jsx)("td",{style:F,children:Object(k.jsx)(Y,{value:e[3]})}),Object(k.jsx)("td",{style:F,children:Object(k.jsx)(Y,{value:e[4]})}),Object(k.jsx)("td",{style:F,children:Object(k.jsx)(Y,{value:e[5]})})]}),Object(k.jsxs)("tr",{style:D,children:[Object(k.jsx)("td",{style:F,children:Object(k.jsx)(Y,{value:e[6]})}),Object(k.jsx)("td",{style:F,children:Object(k.jsx)(Y,{value:e[7]})}),Object(k.jsx)("td",{style:F,children:Object(k.jsx)(Y,{value:e[8]})})]})]})})},U={},J={},q={borderSpacing:"0.1rem"},K=function(t){var e=t.cube;return Object(k.jsxs)("table",{style:q,children:[Object(k.jsxs)("tr",{style:J,children:[Object(k.jsx)("td",{style:U}),Object(k.jsx)("td",{style:U,children:Object(k.jsx)(E,{values:e.slice(0,9)})}),Object(k.jsx)("td",{style:U})]}),Object(k.jsxs)("tr",{style:J,children:[Object(k.jsx)("td",{style:U,children:Object(k.jsx)(E,{values:e.slice(9,18)})}),Object(k.jsx)("td",{style:U,children:Object(k.jsx)(E,{values:e.slice(18,27)})}),Object(k.jsx)("td",{style:U,children:Object(k.jsx)(E,{values:e.slice(27,36)})})]}),Object(k.jsxs)("tr",{style:J,children:[Object(k.jsx)("td",{style:U}),Object(k.jsx)("td",{style:U,children:Object(k.jsx)(E,{values:e.slice(36,45)})}),Object(k.jsx)("td",{style:U})]}),Object(k.jsxs)("tr",{style:J,children:[Object(k.jsx)("td",{style:U}),Object(k.jsx)("td",{style:U,children:Object(k.jsx)(E,{values:e.slice(45,54)})}),Object(k.jsx)("td",{style:U})]})]})},Q={border:"3px solid black",borderRadius:"0.5rem",padding:"10px 25px",marginRight:"0.3rem",marginTop:"0.3rem",fontSize:"16px"},Z=X(4),$=X(13),_=X(22),tt=X(31),et=X(40),nt=X(49),rt=function(){var t=Object(r.useState)(Array.from(Array(54).keys())),e=Object(u.a)(t,2),n=e[0],c=e[1];return Object(k.jsxs)("div",{children:[Object(k.jsx)(K,{cube:n}),Object(k.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(k.jsx)("button",{onClick:function(){return c(H(n))},style:Object(T.a)(Object(T.a)({},Q),{},{background:Z}),children:"top"}),Object(k.jsx)("button",{onClick:function(){return c(z(n))},style:Object(T.a)(Object(T.a)({},Q),{},{background:$}),children:"left"}),Object(k.jsx)("button",{onClick:function(){return c(W(n))},style:Object(T.a)(Object(T.a)({},Q),{},{background:_}),children:"front"}),Object(k.jsx)("button",{onClick:function(){return c(G(n))},style:Object(T.a)(Object(T.a)({},Q),{},{background:tt}),children:"right"}),Object(k.jsx)("button",{onClick:function(){return c(I(n))},style:Object(T.a)(Object(T.a)({},Q),{},{background:et}),children:"bottom"}),Object(k.jsx)("button",{onClick:function(){return c(V(n))},style:Object(T.a)(Object(T.a)({},Q),{},{background:nt}),children:"back"})]})]})},ct=n(12),it=Object(ct.a)().domain([0,3600]).range([-180,180]),at=Array.from(Array(60).keys()),ot=function(t){return t%5},lt=Object(ct.a)().domain([0,60]).range([0,2*Math.PI]),st=function(t,e,n){var r=n.centerX,c=lt(t);return r+e*Math.sin(c)},ut=function(t,e,n){var r=n.centerY,c=lt(t);return r-e*Math.cos(c)},dt=Object(ct.a)().domain([0,12]).range([0,2*Math.PI]),ht=Object(ct.a)().domain([0,43200]).range([-180,180]),jt=Array.from(Array(12).keys()).map((function(t){return t+1})),bt=function(t,e){var n=Object(ct.b)(t.current),r=n.selectAll("#text").remove();n.selectAll("#text").data(jt).remove().enter().append("text").attr("id","text").attr("text-anchor","middle").attr("alignment-baseline","middle").attr("font-size","2.2em").attr("fill","black").attr("x",(function(t){return function(t,e){var n=e.centerX,r=e.hourRadius,c=dt(t);return n+r*Math.sin(c)}(t,e)})).attr("y",(function(t){return function(t,e){var n=e.centerY,r=e.hourRadius,c=dt(t);return n-r*Math.cos(c)}(t,e)})).text((function(t){return t})),r.exit().remove()},ft=Object(ct.a)().domain([0,60]).range([-180,180]),vt=function(t){var e=t.settings,n=t.time,c=Object(r.useRef)(null);Object(r.useEffect)((function(){!function(t,e){var n=e.clockRadius,r=n-10,c=r-10,i=function(t){return ot(t)?r:c},a=Object(ct.b)(t.current);a.selectAll("#minuteTick").remove(),a.selectAll("#minuteTick").data(at).enter().append("line").attr("id","minuteTick").attr("x1",(function(t){return st(t,i(t),e)})).attr("y1",(function(t){return ut(t,i(t),e)})).attr("x2",(function(t){return st(t,n,e)})).attr("y2",(function(t){return ut(t,n,e)})).attr("stroke","black").attr("stroke-width",(function(t){return ot(t)?2:4}))}(c,e),bt(c,e)}),[]),Object(r.useEffect)((function(){!function(t,e,n){var r=n.centerX,c=n.centerY,i=n.minuteArrowLength,a=Object(ct.b)(t.current);a.selectAll("#minute").remove(),a.append("g").attr("id","minute").attr("transform","translate(".concat(r,", ").concat(c,") rotate(").concat(it(e),")")).append("rect").attr("x",-2.5).attr("y",0).attr("width",5).attr("height",i)}(c,n,e),function(t,e,n){var r=n.centerX,c=n.centerY,i=n.hourArrowLength,a=Object(ct.b)(t.current);a.selectAll("#hour").remove(),a.append("g").attr("id","hour").attr("transform","translate(".concat(r,", ").concat(c,") rotate(").concat(ht(e),")")).append("rect").attr("x",-4).attr("y",0).attr("width",8).attr("height",i).style("stroke","black").style("stroke-width","1px").style("fill","steelblue")}(c,n,e),function(t,e,n){var r=n.centerX,c=n.centerY,i=n.sencondsArrowLength,a=Object(ct.b)(t.current);a.selectAll("#second").remove(),a.append("g").attr("id","second").attr("transform","translate(".concat(r,", ").concat(c,") rotate(").concat(ft(e),")")).append("rect").attr("x",-1.5).attr("y",0).attr("width",3).attr("height",i).style("fill","red")}(c,n,e),function(t,e){var n=e.centerX,r=e.centerY,c=Object(ct.b)(t.current);c.selectAll("#midleCircle").remove(),c.append("circle").attr("id","midleCircle").attr("cx",n).attr("cy",r).attr("r",15).attr("fill","white").attr("stroke-width",4).attr("stroke","black")}(c,e)}),[n]);var i=e.centerX,a=e.centerY,o=e.clockWidth,l=e.clockHeight,s=e.clockRadius,u=e.clockCircleThicknes;return Object(k.jsx)("svg",{ref:c,width:o,height:l,children:Object(k.jsx)("circle",{cx:i,cy:a,r:s,fill:"white",stroke:"black",strokeWidth:u})})},xt=function(){var t=new Date,e=t.getSeconds(),n=t.getMinutes();return 3600*t.getHours()+60*n+e},Ot=function(){var t={centerX:210,centerY:210,clockCircleThicknes:3,clockRadius:208.5,clockHeight:420,clockWidth:420,sencondsArrowLength:150,minuteArrowLength:155,hourRadius:163.5,hourArrowLength:120},e=Object(r.useState)(xt()),n=Object(u.a)(e,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){var t=setInterval((function(){var t=xt();i(t)}),1e3);return function(){clearInterval(t)}}),[]),Object(k.jsx)(vt,{settings:t,time:c})},pt=n(150),gt=function(t){var e=t.children,n=t.settings,r=n.partWidth,c=n.partHeight;return Object(k.jsx)(pt.a.div,{layout:!0,transition:{duration:.08,type:"tween"},style:{width:"".concat(r,"px"),height:"".concat(c,"px"),userSelect:"none"},children:e})},mt=(n(117),function(t){var e=t.onClick,n=t.index;return Object(k.jsx)("div",{className:"PartIndexIndicator",onClick:e,style:{fontSize:"13px"},children:n+1})}),yt=function(t){var e=t.index,n=t.imageUrl,r=t.onClick,c=t.showNumbers,i=t.settings,a=function(t,e){var n=e.columns,r=e.partHeight,c=e.partWidth,i=e.imageWidth,a=e.imageHeight,o=Math.floor(t/n),l=o*r,s=(t-n*o)*c;return{top:l,left:s,bottom:a-l-r,right:i-s-c}}(e,i),o=a.top,l=a.left,s=a.bottom,u=a.right;return Object(k.jsx)(gt,{settings:i,children:Object(k.jsxs)("div",{style:{position:"absolute"},children:[Object(k.jsx)("img",{src:n,style:{width:"".concat(i.imageWidth,"px"),height:"".concat(i.imageHeight,"px"),marginLeft:"-".concat(l,"px"),marginTop:"-".concat(o,"px"),clipPath:"inset(".concat(o,"px ").concat(u,"px ").concat(s,"px ").concat(l,"px)")},alt:"part",onDragStart:function(t){return t.preventDefault()},onClick:r}),c&&Object(k.jsx)(mt,{index:e,onClick:r})]})})},kt=function(t,e){var n=Math.floor(t/e);return{col:t-n*e,row:n}},wt=function(t){var e=t.imageUrl,n=t.onSolved,r=t.showNumbers,c=t.settings,i=t.state,a=t.setState,o=function(t,e){var r=e.columns,c=i.findIndex((function(e){return e===t})),o=kt(c,r),l=i.findIndex((function(t){return 0===t})),u=kt(l,r),d=o.row-u.row,h=o.col-u.col;(0===d&&1===Math.abs(h)||0===h&&1===Math.abs(d))&&function(t,e){var r=i.findIndex((function(e){return e===t})),c=Object(s.a)(i);c[r]=0,c[e]=t;var o=c.every((function(t,e){return t===e}));n(o),a(c)}(t,l)},l=c.gridTemplateColumns,u=c.offset,d=(c.columns-1)*c.offset;return Object(k.jsx)("div",{style:{height:"".concat(c.imageHeight+d,"px"),width:"".concat(c.imageWidth+d,"px"),display:"grid",gridTemplateColumns:l,gridRowGap:"".concat(u,"px"),border:"2px solid black"},children:i.map((function(t){return t?Object(k.jsx)(yt,{index:t,imageUrl:e,showNumbers:r,settings:c,onClick:function(){return o(t,c)}},t):Object(k.jsx)(gt,{settings:c},t)}))})};function Ct(t){for(var e=function(t){var e=t.columns,n=t.rows;return Array.from(Array(e*n).keys())}(t),n=0;n<500;n++)e=St(e,t);return e}function St(t,e){var n=t.findIndex((function(t){return 0===t}));return function(t,e,n){var r=Object(s.a)(n),c=r[t];return r[t]=0,r[e]=c,r}(function(t,e){var n=e.columns,r=e.rows,c=[];if(t>n-1){var i=t-n;c.push(i)}if(t<n*r-n){var a=t+n;c.push(a)}if(t%n!==0){var o=t-1;c.push(o)}if((t+1)%n!==0){var l=t+1;c.push(l)}return c[Math.floor(Math.random()*c.length)]}(n,e),n,t)}var At=function(t){var e=t.imageWidth,n=t.imageHeight,r=Math.floor(1028*Math.random())+1;return"https://picsum.photos/id/".concat(r,"/").concat(n,"/").concat(e)},Mt=function(){var t={columns:5,rows:5,partWidth:102.4,partHeight:76.8,imageHeight:384,imageWidth:512,gridTemplateColumns:"repeat(".concat(5,", ").concat(102.9,"px)"),offset:.5},e=Object(r.useState)(!1),n=Object(u.a)(e,2),c=n[0],i=n[1],a=Object(r.useState)(At(t)),o=Object(u.a)(a,2),l=o[0],s=o[1],d=Object(r.useState)(Ct(t)),h=Object(u.a)(d,2),j=h[0],b=h[1],f=function(t){i(t)};return Object(k.jsxs)("div",{children:[Object(k.jsx)("button",{onClick:function(){s(At(t)),b(Ct(t)),i(!1)},children:"Refresh"}),Object(k.jsx)("div",{children:c?Object(k.jsx)("img",{src:l,style:{height:"".concat(t.imageHeight,"px"),width:"".concat(t.imageWidth,"px")},alt:"Solved"}):Object(k.jsx)(wt,{imageUrl:l,onSolved:f,showNumbers:!0,settings:t,state:j,setState:b})})]})};function Pt(t,e){var n=[];return Nt(t,n,{startPoint:0},e,0),n}function Nt(t,e,n,r,c){if(void 0===t.nodes||0===t.nodes.length){var i={x:n.startPoint+r.width/2,y:c*(r.height+r.verticalGap)};return n.startPoint+=r.width+r.horizontalGap,i}var a,o=[],l=Object(d.a)(t.nodes);try{for(l.s();!(a=l.n()).done;){var s=Nt(a.value,e,n,r,c+1);o.push(s)}}catch(p){l.e(p)}finally{l.f()}for(var u=o.reduce((function(t,e){return Math.min(t,e.x)}),9999),h=o.reduce((function(t,e){return Math.max(t,e.x)}),0),j=h-u,b=0,f=o;b<f.length;b++){var v=f[b],x=u+(h-u)/2,O={child:v,parent:{x:Tt(x,v.x,r),y:Rt(x,v.x,r,c)}};e.push(O)}return{x:u+j/2,y:c*(r.height+r.verticalGap)}}function Rt(t,e,n,r){return t!==e?r*(n.height+n.verticalGap)+n.height/2:r*(n.height+n.verticalGap)+n.height}function Tt(t,e,n){return t>e?t-n.width/2:t<e?t+n.width/2:t}function zt(t,e){var n=[];return Gt(t,{startPosition:0,dataPoints:n},e,0),n}function Gt(t,e,n,r){if(void 0===t.nodes||0===t.nodes.length){var c={x:e.startPosition,y:r*(n.height+n.verticalGap),id:t.id,content:t.content};return e.dataPoints.push(c),e.startPosition+=n.width+n.horizontalGap,c}var i,a=[],o=Object(d.a)(t.nodes||[]);try{for(o.s();!(i=o.n()).done;){var l=Gt(i.value,e,n,r+1);a.push(l)}}catch(h){o.e(h)}finally{o.f()}var s=a.reduce((function(t,e){return Math.max(t,e.x)}),0),u={x:(a.reduce((function(t,e){return Math.min(t,e.x)}),9999)+s+n.width)/2-n.width/2,y:r*(n.height+n.verticalGap),id:t.id,content:t.content};return e.dataPoints.push(u),u}function Ht(t){var e=t.nodeParams,n=t.graph,r={height:e.height,width:e.width,horizontalGap:e.horizontalGap,verticalGap:e.verticalGap},c=zt(n,r),i=Pt(n,r),a=function(t,e){var n=t.reduce((function(t,e){return Math.max(t,e.x)}),0),r=t.reduce((function(t,e){return Math.max(t,e.y)}),0)+e.height+e.verticalGap,c=n+e.width;return{height:1.01*r,width:1.1*c}}(c,r);return{dataPoints:c,connections:i,height:a.height,width:a.width}}var It=0,Vt=function(t){var e=Object(r.useState)(0),n=Object(u.a)(e,2),c=n[0],i=n[1],a=Object(r.useState)(0),o=Object(u.a)(a,2),l=o[0],s=o[1],d=Object(r.useRef)(null),h=Object(r.useState)("g".concat(It++)),j=Object(u.a)(h,1)[0];return Object(r.useEffect)((function(){var e=Object(ct.b)("#".concat(j)),n=Ht(t);t.drawNode(e,n.dataPoints,t.nodeParams),function(t,e,n){var r=10;t.selectAll("#connections").data(e).enter().append("path").attr("id","connections").attr("d",(function(t){var e=t.parent.x,n=t.parent.y,c=t.child.x,i=t.child.y,a=c-e,o=c-function(t,e){if(0===t)return 0;if(t>0)return e;return-e}(a,r),l=n,s=a>0?1:0,u=c,d=n+r,h=0===a?"":"A ".concat(r," ").concat(r," 0 0 ").concat(s," ").concat(u," ").concat(d);return"M ".concat(e," ").concat(n," L ").concat(o," ").concat(l," ").concat(h," L ").concat(c," ").concat(i)})).style("fill","transparent").style("stroke","black").style("stroke-width",2)}(e,n.connections),i(n.width),s(n.height)}),[j,t]),Object(k.jsx)("div",{style:{height:"".concat(l,"px"),width:"".concat(c,"px")},children:Object(k.jsx)("svg",{id:"content",width:"100%",height:"100%",ref:d,children:Object(k.jsx)("g",{id:j,transform:"translate(5, 0)"})})})};var Wt={id:"1",content:{title:"Pick"},nodes:[{id:"11",content:{title:"Ni"},nodes:[{id:"111",content:{title:"Te"}},{id:"112",content:{title:"Fe"}}]},{id:"12",content:{title:"Te"},nodes:[{id:"121",content:{title:"Si"}},{id:"1211",content:{title:"Ni"}}]},{id:"13",content:{title:"Si"},nodes:[{id:"131",content:{title:"Te"}},{id:"1311",content:{title:"Fe"}}]},{id:"14",content:{title:"Fi"},nodes:[{id:"141",content:{title:"Ne"}},{id:"1411",content:{title:"Se"}}]}]},Lt={id:"1",content:{title:"1 "},nodes:[{id:"11",content:{title:"11"},nodes:[{id:"111",content:{title:"111"},nodes:[{id:"1111",content:{title:"1111"}},{id:"1112",content:{title:"1112"}},{id:"1113",content:{title:"1113"}}]},{id:"112",content:{title:"112"},nodes:[{id:"1121",content:{title:"1121"}}]},{id:"113",content:{title:"113"}},{id:"114",content:{title:"114"}},{id:"115",content:{title:"115"},nodes:[{id:"1151",content:{title:"1151"}},{id:"1152",content:{title:"1152"}}]},{id:"116",content:{title:"116"}}]},{id:"12",content:{title:"12"},nodes:[{id:"121",content:{title:"121"}},{id:"122",content:{title:"122"}}]}]},Xt=function(){var t={height:52,width:50,horizontalGap:25,verticalGap:25};return Object(k.jsxs)("div",{children:[Object(k.jsx)(Vt,{graph:Lt,nodeParams:t,drawNode:Yt}),Object(k.jsx)(Vt,{graph:Wt,nodeParams:t,drawNode:Yt})]})};function Yt(t,e,n){t.selectAll("#nodes").data(e).enter().append("circle").attr("id","nodes").attr("cx",(function(t){return t.x+n.width/2})).attr("cy",(function(t){return t.y+n.height/2})).attr("r",n.width/2).attr("stroke","black").attr("stroke-width",2).attr("fill","lightgreen").on("mouseenter",(function(){Object(ct.b)(this).attr("fill","salmon")})).on("mouseleave",(function(){Object(ct.b)(this).attr("fill","lightgreen")})),t.selectAll("#nodeText").data(e).enter().append("text").attr("id","nodeText").attr("x",(function(t){return t.x+n.width/2})).attr("y",(function(t){return t.y+n.height/2})).attr("fill","black").attr("font-size","".concat(.33*n.width)).attr("text-anchor","middle").attr("dominant-baseline","middle").style("user-select","none").style("pointer-events","none").text((function(t){return t.content.title}))}var Ft=function(){return Object(k.jsx)(o.a,{basename:"/",children:Object(k.jsxs)("div",{children:[Object(k.jsx)(R,{}),Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{exact:!0,path:"/",children:Object(k.jsx)(Xt,{})}),Object(k.jsx)(l.a,{path:"/sudoku",children:Object(k.jsx)(N,{})}),Object(k.jsx)(l.a,{path:"/rubik",children:Object(k.jsx)(rt,{})}),Object(k.jsx)(l.a,{path:"/clock",children:Object(k.jsx)(Ot,{})}),Object(k.jsx)(l.a,{path:"/puzzle",children:Object(k.jsx)(Mt,{})}),Object(k.jsx)(l.a,{exact:!0,path:"/graph",children:Object(k.jsx)(Xt,{})})]})]})})},Dt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),i(t),a(t)}))};a.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(Ft,{})}),document.getElementById("root")),Dt()}},[[118,1,2]]]);
//# sourceMappingURL=main.a9d42fc6.chunk.js.map
import{_ as w,j as x,a as i,o as p,c as y,d as e,w as o,F as z,h as r,r as g,v as f,b as n,n as h,t as N}from"./index.70091469.js";import{p as v}from"./preview.76909345.js";/* empty css                                                            */const B=r("hover\u6FC0\u6D3B"),V=r("click\u6FC0\u6D3B"),C=r("focus\u6FC0\u6D3B"),j=r("\u624B\u52A8\u6FC0\u6D3B"),S={setup(m){const t=x(!1);function a(){t.value=!t.value,console.log(t.value)}return(_,l)=>{const s=i("hbase-button"),c=i("hbase-popover");return p(),y(z,null,[e(c,{class:"space",trigger:"hover",placement:"top-start",content:"hover\u6FC0\u6D3B"},{reference:o(()=>[e(s,{size:"medium"},{default:o(()=>[B]),_:1})]),_:1}),e(c,{class:"space",trigger:"click",placement:"bottom",content:"click\u6FC0\u6D3B",title:"\u6807\u9898"},{reference:o(()=>[e(s,{size:"medium"},{default:o(()=>[V]),_:1})]),_:1}),e(c,{class:"space",trigger:"focus",placement:"right",content:"focus\u6FC0\u6D3B"},{reference:o(()=>[e(s,{size:"medium"},{default:o(()=>[C]),_:1})]),_:1}),e(c,{class:"space",trigger:"manual",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=d=>t.value=d),placement:"bottohbase-end",content:"\u624B\u52A8\u6FC0\u6D3B"},{reference:o(()=>[e(s,{size:"medium",onClick:a},{default:o(()=>[j]),_:1})]),_:1},8,["modelValue"])],64)}}};var E=w(S,[["__scopeId","data-v-4509bade"]]);const I={style:{width:"800px"}},A=r("\u7F16\u8F91"),P=r("\u5220\u9664"),D=r("click\u6FC0\u6D3B"),F={setup(m){const t=g({options:{fileds:[{field:"id",title:"ID",align:"center"},{field:"name",title:"\u59D3\u540D",align:"center"},{field:"job",title:"\u804C\u4E1A",align:"center"},{field:"address",title:"\u5730\u5740"},{field:"from",title:"\u7C4D\u8D2F"},{field:"action",title:"\u64CD\u4F5C",width:"200px",align:"center"}],datas:[{id:10,name:"\u738B\u5C0F\u4E8C",job:"\u653E\u7F8A\u5A03",address:"\u5728\u90A3\u9065\u8FDC\u7684\u5C0F\u5C71\u6751",from:"\u6C11\u95F4\u6D41\u4F20\u6545\u4E8B"},{id:13,name:"\u732A\u516B\u6212",job:"\u5F92\u5F1F",address:"\u9AD8\u8001\u5E84",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"},{id:2,name:"\u5218\u8001\u56DB",job:"\u519C\u6C11",address:"\u53EF\u80FD\u5728\u4E2D\u56FD",from:"\u60F3\u8C61\u51FA\u6765\u7684"},{id:11,name:"\u767D\u9AA8\u7CBE",job:"\u5996\u7CBE",address:"\u897F\u6E38\u8BB0",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"}]},dorpoptions1:[{label:"\u653E\u7F8A\u5A03",icon:"hbase-icon-file"},{label:"\u5F92\u5F1F",icon:"hbase-icon-keyboard-9"},{label:"\u519C\u6C11",icon:"hbase-icon-link"},{label:"\u5996\u7CBE",icon:"hbase-icon-file"}]}),a=(s,c)=>{console.log(s,c)},{dorpoptions1:_,options:l}=t;return(s,c)=>{const d=i("hbase-dropdown"),b=i("hbase-button"),$=i("hbase-table"),k=i("hbase-popover");return p(),f(k,{trigger:"click",placement:"right",width:"600",onAfterEnter:s.AfterEneter},{reference:o(()=>[e(b,{size:"medium"},{default:o(()=>[D]),_:1})]),default:o(()=>[n("div",I,[e($,{options:h(l),size:"default"},{"head-job":o(u=>[e(d,{title:u.scope.title,options:h(_),onChange:a,trigger:"hover",size:"mini"},null,8,["title","options"])]),id:o(u=>[n("div",null,N(u.scope.row.id),1)]),action:o(u=>[e(b,{type:"text",leftIcon:"hbase-icon-edit",size:"small",disabled:u.scope.rowIndex%2==0},{default:o(()=>[A]),_:2},1032,["disabled"]),e(b,{type:"text",leftIcon:"hbase-icon-ashbin",style:{color:"#ec3437"},size:"small"},{default:o(()=>[P]),_:1})]),_:1},8,["options"])])]),_:1},8,["onAfterEnter"])}}},U=n("p",null,"\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9\u786E\u5B9A\u5220\u9664\u5417\uFF1F",-1),T={style:{"text-align":"right",margin:"0"}},q=r("\u53D6\u6D88"),G=r("\u786E\u5B9A"),H=r("\u5220\u9664"),J={setup(m){const t=x(!1);function a(){t.value=!t.value,console.log(t.value)}return(_,l)=>{const s=i("hbase-button"),c=i("hbase-popover");return p(),f(c,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=d=>t.value=d),trigger:"manual",placement:"top-start"},{reference:o(()=>[e(s,{size:"medium",onClick:a},{default:o(()=>[H]),_:1})]),default:o(()=>[U,n("div",T,[e(s,{size:"mini",type:"text",onClick:l[0]||(l[0]=d=>t.value=!1)},{default:o(()=>[q]),_:1}),e(s,{type:"primary",size:"mini",onClick:l[1]||(l[1]=d=>t.value=!1)},{default:o(()=>[G]),_:1})])]),_:1},8,["modelValue"])}}},K={setup(m){const t=g({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"Boolean",red:"\u5F53\u89E6\u53D1\u65B9\u5F0F\u4E3A\u624B\u52A8\u7684\u65F6\u5019,\u53EF\u4EE5\u4F7F\u7528v-model\u8FDB\u884C\u63A7\u5236\u89E6\u53D1",sel:"true / false",def:"false"},{attr:"width",type:"String/Number",red:"\u5F39\u6846\u7684\u5BBD\u5EA6",sel:"\u2014\u2014",def:"\u6700\u5C0F\u5BBD\u5EA6 150px"},{attr:"placement",type:"String",red:"\u51FA\u73B0\u4F4D\u7F6E",sel:"top/top-start/top-end/bottom/bottohbase-start/bottohbase-end/left/left-start/left-end/right/right-start/right-end",def:"top"},{attr:"content",type:"Sttng",red:"\u8981\u5C55\u793A\u7684\u6587\u6848\u5185\u5BB9",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"popperClass",type:"String",red:"\u4E3A popper\u5F39\u51FA\u6846 \u6DFB\u52A0\u7C7B\u540D",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"title",type:"String",red:"\u6807\u9898",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"disabled",type:"Boolean",red:"	Popover \u662F\u5426\u53EF\u7528",sel:"true / false",def:"false"},{attr:"trigger",type:"String",red:"\u89E6\u53D1\u65B9\u5F0F",sel:"click/focus/hover/manual",def:"	click"}]}}),{options:a}=t;return(_,l)=>{const s=i("hbase-table");return p(),f(s,{options:h(a)},null,8,["options"])}}},L={setup(m){const t=g({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"after-enter",red:"\u663E\u793A\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1",attr:"\u2014\u2014",exm:"\u2014\u2014"},{name:"after-leave",red:"\u9690\u85CF\u52A8\u753B\u64AD\u653E\u5B8C\u6BD5\u540E\u89E6\u53D1",attr:"\u2014\u2014",exm:"\u2014\u2014"}]}}),{options:a}=t;return(_,l)=>{const s=i("hbase-table");return p(),f(s,{options:h(a),size:"small"},null,8,["options"])}}},M={class:"markdown-body"},O=n("h1",null,"Popover \u5F39\u51FA\u6846",-1),Q=n("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),R=n("h3",null,"\u5F39\u51FA\u6846 \u5728\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B\u51E0\u79CD\u4E0D\u540C\u65B9\u5411\u7684\u5C55\u793A\u65B9\u5F0F\u4EE5\u53CA\u89E6\u53D1\u65B9\u5F0F\uFF0C\u8BE6\u7EC6\u7684\u5C55\u793A\u65B9\u5F0F\u89C1\u4E0B\u65B9\u6587\u6863",-1),W={class:"componetnsBox"},X=n("h2",null,"\u5D4C\u5957\u4FE1\u606F",-1),Y=n("h3",null,"\u53EF\u4EE5\u5728 Popover \u4E2D\u5D4C\u5957\u591A\u79CD\u7C7B\u578B\u4FE1\u606F\uFF0C\u4EE5\u4E0B\u4E3A\u5D4C\u5957\u8868\u683C\u7684\u4F8B\u5B50\u3002",-1),Z=n("br",null,null,-1),ee={class:"componetnsBox"},te=n("h2",null,"\u5D4C\u5957\u64CD\u4F5C",-1),oe=n("h3",null,"\u53EF\u4EE5\u5728 Popover \u4E2D\u5D4C\u5957\u64CD\u4F5C",-1),ne=n("br",null,null,-1),se={class:"componetnsBox"},le=n("h2",null,"Attributes \u53C2\u6570",-1),ae=n("br",null,null,-1),ie=n("h2",null,"Events \u4E8B\u4EF6",-1),re=n("br",null,null,-1),pe={setup(m,{expose:t}){return t({frontmatter:{}}),(_,l)=>(p(),y("div",M,[O,Q,R,n("div",W,[e(E)]),e(v,{compName:"popover",demoName:"demo1"}),X,Y,Z,n("div",ee,[e(F)]),e(v,{compName:"popover",demoName:"demo2"}),te,oe,ne,n("div",se,[e(J)]),e(v,{compName:"popover",demoName:"demo3"}),le,e(K),ae,ie,e(L),re]))}};export{pe as default};

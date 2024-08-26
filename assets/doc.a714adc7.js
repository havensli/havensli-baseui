import{l as m,a as d,o as i,x as u,c as h,d as n,F as w,r as f,f as x,b as e,j as c}from"./index.8c139f55.js";import{p}from"./preview.7c961450.js";/* empty css                                                            */const v={setup(r){const t=m(!1),a=o=>{console.log(o)};return(o,l)=>{const s=d("m-switch");return i(),u(s,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=_=>t.value=_),onChange:a},null,8,["modelValue"])}}},g={setup(r){const t=m(!0);return(a,o)=>{const l=d("m-switch");return i(),u(l,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),disabled:""},null,8,["modelValue"])}}},V={setup(r){const t=m(!1);return(a,o)=>{const l=d("m-switch");return i(),u(l,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),showTipsText:!0},null,8,["modelValue"])}}},T={setup(r){const t=m(!0),a=m(!0);return(o,l)=>{const s=d("m-switch");return i(),h(w,null,[n(s,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=_=>t.value=_),closeText:"\u5173\u95ED",activeText:"\u5F00\u542F"},null,8,["modelValue"]),n(s,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=_=>a.value=_),closeText:"\u5173\u95ED",activeText:"\u5F00\u542F",textAlign:"right"},null,8,["modelValue"])],64)}}},b={setup(r){const t=m(!1);return(a,o)=>{const l=d("m-switch");return i(),u(l,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),showTipsText:!0,closeColor:"#ec3437",activeColor:"#09b63d"},null,8,["modelValue"])}}},B={setup(r){const t=f({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"v-model",type:"Boolean",red:"\u5F00\u5173\u72B6\u6001",sel:"true / false",def:"\u2014\u2014"},{attr:"width",type:"Number",red:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6\uFF08\u5355\u4F4D\uFF1Apx\uFF09",sel:"\u2014\u2014",def:"45"},{attr:"disabled",type:"Boolean",red:"\u662F\u5426\u7981\u7528",sel:"true / false",def:"false"},{attr:"closeColor",type:"String",red:"\u5173\u95ED\u72B6\u6001\u65F6\u7684\u80CC\u666F\u8272",sel:"\u2014\u2014",def:"#BFBFBF"},{attr:"activeColor",type:"String",red:"\u5F00\u542F\u72B6\u6001\u65F6\u7684\u80CC\u666F\u8272",sel:"\u2014\u2014",def:"#0e80eb"},{attr:"closeText",type:"String",red:"\u5173\u95ED\u72B6\u6001\u65F6\u8F85\u52A9\u6587\u5B57",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"activeText",type:"String",red:"\u5F00\u542F\u72B6\u6001\u65F6\u8F85\u52A9\u6587\u5B57",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"textAlign",type:"String",red:"\u8F85\u52A9\u6587\u5B57\u4F4D\u7F6E",sel:"left / right",def:"left"},{attr:"showTipsText",type:"Boolean",red:"\u662F\u5426\u663E\u793A\u63D0\u793A\u4FE1\u606F",sel:"true / false",def:"false"},{attr:"customClass",type:"String",red:"\u81EA\u5B9A\u4E49\u6574\u4F53\u7684Class\u7C7B\u540D",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:a}=t;return(o,l)=>{const s=d("m-table");return i(),u(s,{options:x(a),size:"small"},null,8,["options"])}}},N={setup(r){const t=f({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"change",red:"\u5F00\u5173\u4E8B\u4EF6",attr:"(value: e)",exm:"change = (e) =>{console.log(e)}"}]}}),{options:a}=t;return(o,l)=>{const s=d("m-table");return i(),u(s,{options:x(a),size:"small"},null,8,["options"])}}},y={class:"markdown-body"},C=e("h1",null,"Switch \u5F00\u5173",-1),S=e("h4",null,"\u7F51\u9875\u5E38\u7528\u7684\u5F00\u5173\u9009\u62E9\u7EC4\u4EF6\uFF0C\u9700\u8981\u8868\u793A\u5F00\u5173\u72B6\u6001/\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\u65F6\u3002",-1),$=e("br",null,null,-1),U=e("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),F=e("h4",null,"switch \u7EC4\u4EF6\u57FA\u672C\u4F7F\u7528\u793A\u4F8B\u3002",-1),k={class:"componetnsBox"},A=e("h2",null,"\u7981\u7528\u72B6\u6001",-1),z=e("h4",null,[c("\u53EF\u901A\u8FC7 "),e("em",null,"disabled"),c(" \u5C5E\u6027\u5F00\u542F\u3002")],-1),E={class:"componetnsBox"},j=e("h2",null,"\u5E26\u63D0\u793A\u4FE1\u606F",-1),q=e("h4",null,[c("\u53EF\u901A\u8FC7 "),e("em",null,"showTipsText"),c(" \u5C5E\u6027\u5F00\u542F\u3002")],-1),D={class:"componetnsBox"},G=e("h2",null,"\u5E26\u8F85\u52A9\u6587\u5B57",-1),H=e("h4",null,[c("\u53EF\u901A\u8FC7 "),e("em",null,"closeText"),c(" \u548C "),e("em",null,"activeText"),c(" \u5C5E\u6027\u51B3\u5B9A\u5F00\u542F\u548C\u5173\u95ED\u72B6\u6001\u65F6\u7684\u8F85\u52A9\u6587\u5B57\uFF0C\u901A\u8FC7 "),e("em",null,"textAlign"),c(" \u5C5E\u6027\u51B3\u5B9A\u8F85\u52A9\u6587\u5B57\u7684\u4F4D\u7F6E\u3002")],-1),I={class:"componetnsBox"},J=e("h2",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),K=e("h4",null,[c("\u53EF\u901A\u8FC7 "),e("em",null,"closeColor"),c(" \u548C "),e("em",null,"activeColor"),c(" \u5C5E\u6027\u81EA\u5B9A\u4E49\u5173\u95ED\u548C\u5F00\u542F\u65F6\u7684\u80CC\u666F\u989C\u8272\u3002")],-1),L={class:"componetnsBox"},M=e("h2",null,"Attributes \u53C2\u6570",-1),O=e("br",null,null,-1),P=e("h2",null,"Event \u4E8B\u4EF6",-1),Q=e("br",null,null,-1),Y={setup(r,{expose:t}){return t({frontmatter:{}}),(o,l)=>(i(),h("div",y,[C,S,$,U,F,e("div",k,[n(v)]),n(p,{compName:"switch",demoName:"demo1"}),A,z,e("div",E,[n(g)]),n(p,{compName:"switch",demoName:"demo2"}),j,q,e("div",D,[n(V)]),n(p,{compName:"switch",demoName:"demo3"}),G,H,e("div",I,[n(T)]),n(p,{compName:"switch",demoName:"demo4"}),J,K,e("div",L,[n(b)]),n(p,{compName:"switch",demoName:"demo5"}),M,n(B),O,P,n(N),Q]))}};export{Y as default};

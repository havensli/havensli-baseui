import{i as y,_ as w,u as M,j as x,r as S,k as B,a as I,l as N,o as s,c as a,b as i,F as b,m as f,n as D,q as E,d as L,t as U,s as V}from"./index.9856e35c.js";var T=[{"title-cn":"\u5FEB\u901F\u4E0A\u624B","title-en":"Quick start",list:[{"title-cn":"\u5B89\u88C5\u4F7F\u7528","title-en":"Install and use",path:"/hbaseUi/install"},{"title-cn":"\u66F4\u65B0\u65E5\u5FD7","title-en":"Participation and contribution",path:"/hbaseUi/updatelog"}]},{"title-cn":"\u5E38\u89C4","title-en":"Conventional",list:[{"title-cn":"layout \u5E03\u5C40","title-en":"layout",path:"/hbaseUi/layout"},{"title-cn":"Color \u989C\u8272","title-en":"Colors",path:"/hbaseUi/color"},{"title-cn":"Icon \u56FE\u6807","title-en":"Icons",path:"/hbaseUi/icon"}]},{"title-cn":"\u901A\u7528","title-en":"Universal",list:[{"title-cn":"Button \u6309\u94AE","title-en":"Buttons",path:"/hbaseUi/button"},{"title-cn":"Input \u8F93\u5165\u6846","title-en":"Inputs",path:"/hbaseUi/input"},{"title-cn":"Textarea \u6587\u672C\u57DF","title-en":"Textarea",path:"/hbaseUi/textarea"}]}];const F=y("main",{state:()=>({lang:"CN"}),actions:{setLang(l){this.lang=l}},getters:{getLang:l=>l.lang}});const R={class:"havensli-baseui-doc"},$={class:"list-box"},q={class:"titls"},z=["onClick"],P={class:"hbaseUirightView"},Q={setup(l){const o=F(),_=M(),d=x(sessionStorage.getItem("mIndex")||"0-0");let c=[];const g=S({MenuLangList:[],lang:o.getLang});x(sessionStorage.getItem("index")||0);const k=t=>{_.currentRoute.value.path!=t.path&&_.push(t.path),d.value=t.index+"-"+t.index1,sessionStorage.setItem("mIndex",t.index+"-"+t.index1)};B(()=>{T.forEach((t,m)=>{let r={title:o.lang=="CN"?t["title-cn"]:t["title-en"],list:[]};c.push(r),t.list.forEach((e,v)=>{let n={title:o.lang=="CN"?e["title-cn"]:e["title-en"],path:e.path};c[m].list.push(n),g.MenuLangList=c})})});const{MenuLangList:C}=g;return(t,m)=>{const r=I("router-view"),e=I("m-backtop"),v=N("highlight");return s(),a("div",R,[i("aside",null,[i("div",$,[(s(!0),a(b,null,f(D(C),(n,u)=>(s(),a("div",{class:"item-list",key:u},[i("p",q,[i("span",null,U(n.title),1)]),(s(!0),a(b,null,f(n.list,(h,p)=>(s(),a("li",{key:p,class:V({active:d.value==u+"-"+p}),onClick:A=>k({parentTitle:n.title,title:h.title,index:u,index1:p,path:h.path})},U(h.title),11,z))),128))]))),128))])]),i("main",P,[E(L(r,null,null,512),[[v]])]),L(e,{target:".hbaseUirightView"})])}}};var H=w(Q,[["__scopeId","data-v-2c2b9935"]]);export{H as default};

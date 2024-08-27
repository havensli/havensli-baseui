import{d as y,a9 as c,D as l,o as k,c as p,j as s,I as i,k as o,w as A,a,a3 as d}from"./chunks/framework.CrEAllV_.js";const B={w50rem:"",h25rem:"",flex:"~ col","justify-center":"","items-center":"","bg-dark":""},D=y({__name:"demo",setup(r){const h=()=>{n.data.push({name:"测试"+Math.floor(Math.random()*100),value:Math.floor(Math.random()*100)})},n=c({data:[{name:"南阳",value:167},{name:"周口",value:123},{name:"漯河",value:98},{name:"郑州",value:75},{name:"西峡",value:66}],colors:["#e062ae","#fb7293","#e690d1","#32c5e9","#96bfff"],unit:"万元",labelNum:8});return(e,t)=>{const g=l("dv-capsule-chart");return k(),p("div",B,[s("div",null,[i(g,{config:o(n),style:{width:"25rem",height:"15rem"}},null,8,["config"])]),s("div",{pt5:""},[s("button",{btn:"",onClick:h},"增加数据")])])}}}),_=s("h1",{id:"胶囊柱图",tabindex:"-1"},[a("胶囊柱图 "),s("a",{class:"header-anchor",href:"#胶囊柱图","aria-label":'Permalink to "胶囊柱图"'},"​")],-1),u=s("p",null,"胶囊柱图",-1),C=s("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),x=d(`<details><summary>查看代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> w50rem</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> h25rem</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> flex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~ col</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> justify-center</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> items-center</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> bg-dark</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">dv-capsule-chart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> :</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">config</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">25</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">rem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">15</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">rem</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> pt5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">button</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> btn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> @</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">click</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">addData</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">增加数据</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> setup</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ts</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">addData</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  config</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">测试</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Math</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">floor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Math</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">random</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">() </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Math</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">floor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Math</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">random</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">() </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> reactive</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">南阳</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">167</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">周口</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">123</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">漯河</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">98</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">郑州</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">75</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">西峡</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">66</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  colors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#e062ae</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#fb7293</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#e690d1</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#32c5e9</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#96bfff</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  unit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">万元</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  labelNum</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div></details><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2>`,2),m=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},"属性"),s("th",{style:{"text-align":"center"}},"说明"),s("th",{style:{"text-align":"center"}},"类型"),s("th",{style:{"text-align":"center"}},"可选值"),s("th",{style:{"text-align":"center"}},"默认值")])],-1),f=s("tr",null,[s("td",{style:{"text-align":"center"}},"data"),s("td",{style:{"text-align":"center"}},"柱数据"),s("td",{style:{"text-align":"center"}},[s("code",null,"Array<Object>")]),s("td",{style:{"text-align":"center"}},"data属性"),s("td",{style:{"text-align":"center"}},[s("code",null,"[]")])],-1),b=s("tr",null,[s("td",{style:{"text-align":"center"}},"unit"),s("td",{style:{"text-align":"center"}},"单位"),s("td",{style:{"text-align":"center"}},"String"),s("td",{style:{"text-align":"center"}},"---"),s("td",{style:{"text-align":"center"}},[s("code",null,"''")])],-1),v=s("tr",null,[s("td",{style:{"text-align":"center"}},"colors"),s("td",{style:{"text-align":"center"}},"环颜色"),s("td",{style:{"text-align":"center"}},[s("code",null,"Array<String>")]),s("td",{style:{"text-align":"center"}},[s("code",null,"[1]")]),s("td",{style:{"text-align":"center"}},[s("code",null,"[2]")])],-1),F=s("tr",null,[s("td",{style:{"text-align":"center"}},"showValue"),s("td",{style:{"text-align":"center"}},"显示数值"),s("td",{style:{"text-align":"center"}},"Boolean"),s("td",{style:{"text-align":"center"}},"---"),s("td",{style:{"text-align":"center"}},"false")],-1),E={style:{"text-align":"center"}},q=s("td",{style:{"text-align":"center"}},"文字颜色",-1),N=s("td",{style:{"text-align":"center"}},"String",-1),S=s("td",{style:{"text-align":"center"}},"---",-1),T=s("td",{style:{"text-align":"center"}},"'#fff'",-1),P={style:{"text-align":"center"}},V=s("td",{style:{"text-align":"center"}},"文字大小",-1),M=s("td",{style:{"text-align":"center"}},"Number",-1),O=s("td",{style:{"text-align":"center"}},"---",-1),w=s("td",{style:{"text-align":"center"}},"12",-1),j={style:{"text-align":"center"}},I=s("td",{style:{"text-align":"center"}},"标签显示数量",-1),R=s("td",{style:{"text-align":"center"}},"Number",-1),$=s("td",{style:{"text-align":"center"}},"---",-1),z=s("td",{style:{"text-align":"center"}},"6",-1),J=d('<h2 id="config注释" tabindex="-1">config注释 <a class="header-anchor" href="#config注释" aria-label="Permalink to &quot;config注释&quot;">​</a></h2><ul><li><p>[1] 颜色支持<code>hex | rgb | rgba</code>颜色关键字等四种类型。</p></li><li><p>[2] 默认配色为<code>[&#39;#37a2da&#39;, &#39;#32c5e9&#39;, &#39;#67e0e3&#39;, &#39;#9fe6b8&#39;, &#39;#ffdb5c&#39;, &#39;#ff9f7f&#39;, &#39;#fb7293&#39;]</code>。</p></li></ul><h2 id="data属性" tabindex="-1">data属性 <a class="header-anchor" href="#data属性" aria-label="Permalink to &quot;data属性&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选值</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;">柱名称</td><td style="text-align:center;">String</td><td style="text-align:center;">---</td><td style="text-align:center;">---</td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;">柱对应值</td><td style="text-align:center;">Number</td><td style="text-align:center;">---</td><td style="text-align:center;">---</td></tr></tbody></table>',4),K=JSON.parse('{"title":"胶囊柱图","description":"","frontmatter":{},"headers":[],"relativePath":"Other/CapsuleChart/CapsuleChart.md","filePath":"Other/CapsuleChart/CapsuleChart.md"}'),G={name:"Other/CapsuleChart/CapsuleChart.md"},L=Object.assign(G,{setup(r){return(h,n)=>{const e=l("ClientOnly"),t=l("Badge");return k(),p("div",null,[_,u,C,i(e,null,{default:A(()=>[i(D)]),_:1}),x,s("table",null,[m,s("tbody",null,[f,b,v,F,s("tr",null,[s("td",E,[a("textColor"),i(t,{type:"tip",text:"1.4.0"})]),q,N,S,T]),s("tr",null,[s("td",P,[a("fontSize"),i(t,{type:"tip",text:"1.4.0"})]),V,M,O,w]),s("tr",null,[s("td",j,[a("labelNum"),i(t,{type:"tip",text:"1.7.2"})]),I,R,$,z])])]),J])}}});export{K as __pageData,L as default};

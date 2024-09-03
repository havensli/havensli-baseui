import{a as n,o as a,c as l,b as e,d as u,w as p,f as r,h as t}from"./index.7eaeeb4f.js";const h={class:"markdown-body"},c=r(`<h1>\u5B89\u88C5\u4F7F\u7528</h1><h2>\u5B89\u88C5</h2><h4>\u63A8\u8350\u4F7F\u7528 <em>npm</em> \u7684\u65B9\u5F0F\u5B89\u88C5,\u4E5F\u53EF\u9009\u7528 <em>cpm</em> \u6216 <em>yarn</em> \u8FDB\u884C\u5B89\u88C5\u3002</h4><pre><code>npm install  havensli-baseui
cnpm install  havensli-baseui --save
yarn add havensli-baseui
</code></pre><br><h2>\u4F7F\u7528 havensli-baseui</h2><h4>\u9700\u8981\u6CE8\u610F\u7684\u662F css \u6837\u5F0F\u6587\u4EF6\u9700\u8981\u60A8\u5355\u72EC\u5F15\u5165\u3002</h4><pre><code class="language-javascript">/*js*/
import { createApp } from &quot;vue&quot;;
import App from &quot;@/App.vue&quot;;
import hbaseUi from &quot;havensli-baseui&quot;;
import &quot;../node_modules/havensli-baseui/dist/style.css&quot;;

const app = createApp(App);
app.use(hbaseUi);
app.mount(&quot;#app&quot;);
</code></pre><br><h2>\u6109\u5FEB\u5F00\u59CB</h2><h4>\u81F3\u6B64 havensli-baseui \u5C31\u5F15\u5165\u5B8C\u6210\u5E76\u4E14\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002</h4><pre><code class="language-html">&lt;!-- html --&gt;
&lt;hbase-button&gt;\u9ED8\u8BA4\u6309\u94AE&lt;/hbase-buttonn&gt;
&lt;hbase-button type=&quot;primary&quot;&gt;\u4E3B\u8981\u6309\u94AE&lt;/hbase-button&gt;
</code></pre><br><h2>\u6309\u9700\u5F15\u7528</h2>`,14),i=t("\u60A8\u53EF\u4EE5\u6839\u636E\u4E2A\u4EBA\u9700\u8981\u6309\u9700\u5F15\u7528\u7EC4\u4EF6\u6765\u4F7F\u7528\uFF0C\u6309\u9700\u5F15\u7528\u65F6\u4E0D\u9700\u8981\u4F7F\u7528 "),m=e("strong",null,"app.use()",-1),d=t(" \u65B9\u6CD5\u6CE8\u518C\u3002"),b=e("pre",null,[e("code",{class:"language-javascript"},`/*js*/
import { mButton, mInput } from "havensli-baseui";
`)],-1),_=e("br",null,null,-1),v=e("pre",null,[e("code",{class:"language-html"},`<hbase-button>\u70B9\u51FB</hbase-button>
<hbase-input v-model="value" placeholder="\u57FA\u672C\u4F7F\u7528"></hbase-input>
`)],-1),g=e("br",null,null,-1),x={setup(f,{expose:o}){return o({frontmatter:{}}),(y,A)=>{const s=n("font");return a(),l("div",h,[c,e("h4",null,[i,u(s,{color:"#0e80eb"},{default:p(()=>[m]),_:1}),d]),b,_,v,g])}}};export{x as default};

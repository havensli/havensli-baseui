import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.CrEAllV_.js";const c=JSON.parse('{"title":"DataV Vue3+TS+Vite版","description":"","frontmatter":{},"headers":[],"relativePath":"Guide/Guide.md","filePath":"Guide/Guide.md"}'),h={name:"Guide/Guide.md"},e=t(`<h1 id="datav-vue3-ts-vite版" tabindex="-1">DataV Vue3+TS+Vite版 <a class="header-anchor" href="#datav-vue3-ts-vite版" aria-label="Permalink to &quot;DataV Vue3+TS+Vite版&quot;">​</a></h1><p><a href="https://github.com/vaemusic" title="Author" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Author-kjgl77-red.svg" alt="Author" title="Author"></a></p><p><a href="https://github.com/vaemusic/datav-vue3/blob/master/LICENSE" title="LICENSE" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/license/vaemusic/datav-vue3" alt="LICENSE" title="LICENSE"></a></p><p><a href="https://www.npmjs.com/package/@kjgl77/datav-vue3" target="_blank" rel="noreferrer"><img src="https://nodei.co/npm/@kjgl77/datav-vue3.png?mini=true" alt="NPM"></a></p><p>由于之前大佬写的 <a href="http://datav.jiaminghi.com/" target="_blank" rel="noreferrer">DataV</a> 不支持Vue3 Vite2.x，现部分代码用Vue3+TS重构。</p><p>文档地址：<a href="https://datav-vue3.netlify.app" target="_blank" rel="noreferrer">https://datav-vue3.netlify.app</a></p><p>Gitee地址：<a href="https://gitee.com/kjgl77/datav-vue3" target="_blank" rel="noreferrer">https://gitee.com/kjgl77/datav-vue3</a></p><p>Github地址：<a href="https://github.com/vaemusic/datav-vue3" target="_blank" rel="noreferrer">https://github.com/vaemusic/datav-vue3</a></p><p>Demo预览地址：<a href="https://datav-vue3-demo.netlify.app/" target="_blank" rel="noreferrer">https://datav-vue3-demo.netlify.app/</a></p><p>Demo Gitee地址：<a href="https://gitee.com/kjgl77/electronic-file" target="_blank" rel="noreferrer">https://gitee.com/kjgl77/electronic-file</a></p><p>Demo Github地址：<a href="https://github.com/vaemusic/electronic-file" target="_blank" rel="noreferrer">https://github.com/vaemusic/electronic-file</a></p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><ul><li>安装，此处使用pnpm工具，也可以yarn,npm等</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @kjgl77/datav-vue3</span></span></code></pre></div><h2 id="全局引入" tabindex="-1">全局引入 <a class="header-anchor" href="#全局引入" aria-label="Permalink to &quot;全局引入&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// main.ts中全局引入</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> createApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vue</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> DataVVue3</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@kjgl77/datav-vue3</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> createApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">App</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">DataVVue3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mount</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">#app</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>引入后在.vue文件中可以直接使用</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">dv-decoration-1</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">[&#39;pink&#39;,&#39;yellow&#39;]</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">width:200px;height:50px;</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div><h2 id="局部引入" tabindex="-1">局部引入 <a class="header-anchor" href="#局部引入" aria-label="Permalink to &quot;局部引入&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 在.vue文件的script中import部分组件 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ts</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Decoration1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Decoration2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@kjgl77/datav-vue3</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  &lt;!-- 引入之后就可以在vue的template中直接使用 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">decoration-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> :</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pink</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">yellow</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">200</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">50</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">decoration-2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> :</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">reverse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">5</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">150</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p>新的组件库开发根据大佬的 <a href="https://github.com/jrainlau/MY-Kit" target="_blank" rel="noreferrer">MY-Kit</a> 开发。支持脚本生成基础文件，文档，可使用Markdown一边开发源码一边写文档。详情可见MY-Kit文档。</p><h2 id="文档样式说明" tabindex="-1">文档样式说明 <a class="header-anchor" href="#文档样式说明" aria-label="Permalink to &quot;文档样式说明&quot;">​</a></h2><ul><li>文档部分 demo 的 CSS 样式使用 <a href="https://github.com/unocss/unocss" target="_blank" rel="noreferrer">UnoCSS</a> 构建，文档里使用的一些 <strong>UnoCSS</strong> 的 <strong>shortcuts</strong>，例如：<strong><code>demo-bg</code></strong>、<strong><code>dv-bg</code></strong>、<strong><code>small-bg</code></strong>、 见 UnoCSS 配置文件：<strong><code>unocss.config.ts</code></strong>，路径：<strong><code>packages/docs/unocss.config.ts</code></strong></li></ul>`,23),n=[e];function l(k,p,r,d,g,o){return a(),i("div",null,n)}const u=s(h,[["render",l]]);export{c as __pageData,u as default};

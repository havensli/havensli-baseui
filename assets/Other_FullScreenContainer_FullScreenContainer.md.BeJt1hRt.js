import{_ as e,c as a,o as s,a3 as t}from"./chunks/framework.CrEAllV_.js";const u=JSON.parse('{"title":"全屏容器","description":"","frontmatter":{},"headers":[],"relativePath":"Other/FullScreenContainer/FullScreenContainer.md","filePath":"Other/FullScreenContainer/FullScreenContainer.md"}'),n={name:"Other/FullScreenContainer/FullScreenContainer.md"},i=t(`<h1 id="全屏容器" tabindex="-1">全屏容器 <a class="header-anchor" href="#全屏容器" aria-label="Permalink to &quot;全屏容器&quot;">​</a></h1><p>全屏容器</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>数据可视化页面一般在浏览器中进行全屏展示，全屏容器将根据屏幕比例及当前浏览器窗口大小，自动进行缩放处理。浏览器全屏后，全屏容器将充满屏幕。</p><p>建议在全屏容器内使用百分比搭配flex进行布局，以便于在不同的分辨率下得到较为一致的展示效果。</p><p>使用前请注意将<code>body</code>的<code>margin</code>设为0，否则会引起计算误差，全屏后不能完全充满屏幕。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">dv-full-screen-container</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">dv-full-screen-container</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div>`,7),l=[i];function r(o,c,h,p,d,k){return s(),a("div",null,l)}const m=e(n,[["render",r]]);export{u as __pageData,m as default};

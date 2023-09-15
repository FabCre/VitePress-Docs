import{_ as s,o as a,c as l,Q as e}from"./chunks/framework.31db9f4a.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"linux/index.md","filePath":"linux/index.md"}'),p={name:"linux/index.md"},o=e(`<h2 id="command" tabindex="-1">Command <a class="header-anchor" href="#command" aria-label="Permalink to &quot;Command&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Tips</p><p><a href="https://www.bitslovers.com/tag/command/" target="_blank" rel="noreferrer">https://www.bitslovers.com/tag/command/</a></p></div><details class="details custom-block"><summary>Reduce PDF Size with Ghostscript</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">gs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sDEVICE=pdfwrite</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dCompatibilityLevel=1.4</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dPDFSETTINGS=/prepress</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dNOPAUSE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dQUIET</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dBATCH</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sOutputFile=compressed_PDF_file.pdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">input_PDF_file.pdf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">gs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sDEVICE=pdfwrite</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dCompatibilityLevel=1.4</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dPDFSETTINGS=/prepress</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dNOPAUSE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dQUIET</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dBATCH</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sOutputFile=compressed_PDF_file.pdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">input_PDF_file.pdf</span></span></code></pre></div><p>The dPDFSETTINGS parameter is what defines the compression level and so the quality of your compressed PDF file.</p><p>The possibles values for dPDFSETTINGS are:</p><p>/prepress -&gt; Higher quality (300 dpi) but bigger size</p><p>/ebook -&gt; Medium quality (150 dpi) with moderate output file size</p><p>/screen -&gt; Lower quality (72 dpi) but smallest possible output file size</p><p>The /prepress is the default option if you don’t specify any options.</p></details><details class="details custom-block"><summary>Merge PDF with GhostScript</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">gs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-q</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sPAPERSIZE=letter</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dNOPAUSE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dBATCH</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sDEVICE=pdfwrite</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dPDFSETTINGS=/prepress</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sOutputFile=outputFile.pdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fileToMerge1.pdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fileToMerge2.pdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fileToMerge3.pdf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">gs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-q</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sPAPERSIZE=letter</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dNOPAUSE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dBATCH</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sDEVICE=pdfwrite</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dPDFSETTINGS=/prepress</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sOutputFile=outputFile.pdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fileToMerge1.pdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fileToMerge2.pdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fileToMerge3.pdf</span></span></code></pre></div><p>The dPDFSETTINGS parameter is what defines the compression level and so the quality of your compressed PDF file.</p><p>The possibles values for dPDFSETTINGS are:</p><p>/prepress -&gt; Higher quality (300 dpi) but bigger size</p><p>/ebook -&gt; Medium quality (150 dpi) with moderate output file size</p><p>/screen -&gt; Lower quality (72 dpi) but smallest possible output file size</p><p>The /prepress is the default option if you don’t specify any options.</p></details><details class="details custom-block"><summary>Convert JPG to PDF with ImageMagick</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">convert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-density</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fileToConvert.jpg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">outputFile.pdf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">convert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-density</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">300</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fileToConvert.jpg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">outputFile.pdf</span></span></code></pre></div><p>-density specify the dpi that the PDF is rendered. Placing this to 300/600 will give pretty good quality for your PDF file.</p></details><details class="details custom-block"><summary>Move a file</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fileToMove</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">destinationForTheFile</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fileToMove</span><span style="color:#24292E;"> </span><span style="color:#032F62;">destinationForTheFile</span></span></code></pre></div></details><details class="details custom-block"><summary>Rename a file</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fileToRename</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">newNameOfFile</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fileToRename</span><span style="color:#24292E;"> </span><span style="color:#032F62;">newNameOfFile</span></span></code></pre></div></details><details class="details custom-block"><summary>Execute a script .sh</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">zsh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-script.sh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./my-script.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">zsh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-script.sh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./my-script.sh</span></span></code></pre></div></details><details class="details custom-block"><summary>Copy a file</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sourceFile</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">destinationFile</span></span>
<span class="line"><span style="color:#B392F0;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">recursive</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sourceFile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">destinationFile</span></span>
<span class="line"><span style="color:#6F42C1;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">recursive</span></span></code></pre></div></details><details class="details custom-block"><summary>Remove a file or directory</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fileToRemove</span></span>
<span class="line"><span style="color:#B392F0;">-Rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">recursive</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">force</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fileToRemove</span></span>
<span class="line"><span style="color:#6F42C1;">-Rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">recursive</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with</span><span style="color:#24292E;"> </span><span style="color:#032F62;">force</span></span></code></pre></div></details><details class="details custom-block"><summary>Making a directory or file</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myDirectory</span></span>
<span class="line"><span style="color:#B392F0;">touch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myFile</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myDirectory</span></span>
<span class="line"><span style="color:#6F42C1;">touch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myFile</span></span></code></pre></div></details><details class="details custom-block"><summary>Display Manjaro version</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">lsb_release</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-drc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">lsb_release</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-drc</span></span></code></pre></div></details><details class="details custom-block"><summary>Grep search</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myFile</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;my research&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myFile</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;my research&quot;</span></span></code></pre></div></details><details class="details custom-block"><summary>Display where am i</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">pwd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">pwd</span></span></code></pre></div></details><details class="details custom-block"><summary>Display all service on system</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list-units</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list-units</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--all</span></span></code></pre></div></details>`,15),n=[o];function t(c,r,i,y,d,E){return a(),l("div",null,n)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
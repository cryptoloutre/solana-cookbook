import{_ as c,r as p,o as i,c as l,a as s,b as a,w as r,F as u,d as n,e}from"./app.55b1b60c.js";const k={},m=s("h1",{id:"sending-transactions-islem-gonderimi",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sending-transactions-islem-gonderimi","aria-hidden":"true"},"#"),n(" Sending Transactions(\u0130\u015Flem G\xF6nderimi)")],-1),d=s("h2",{id:"how-to-send-sol-sol-nas\u0131l-gonderilir",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#how-to-send-sol-sol-nas\u0131l-gonderilir","aria-hidden":"true"},"#"),n(" How to send SOL (SOL nas\u0131l g\xF6nderilir)")],-1),b=n("SOL g\xF6ndermek i\xE7in "),g={href:"https://docs.solana.com/developing/runtime-facilities/programs#system-program",target:"_blank",rel:"noopener noreferrer"},h=n("SystemProgram"),y=n(" ile etkile\u015Fime ge\xE7meniz gerekir."),f=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> transferTransaction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
  SystemProgram<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    fromPubkey<span class="token operator">:</span> fromKeypair<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
    toPubkey<span class="token operator">:</span> toKeypair<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
    lamports<span class="token operator">:</span> lamportsToSend<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> <span class="token function">sendAndConfirmTransaction</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> transferTransaction<span class="token punctuation">,</span> <span class="token punctuation">[</span>fromKeypair<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="how-to-send-spl-tokens-spl-token-lar-nas\u0131l-gonderilir" tabindex="-1"><a class="header-anchor" href="#how-to-send-spl-tokens-spl-token-lar-nas\u0131l-gonderilir" aria-hidden="true">#</a> How to send SPL-Tokens (SPL-Token\u2019lar nas\u0131l g\xF6nderilir)</h2>`,2),_=n("SPL Tokenlar\u0131n\u0131 aktarmak i\xE7in "),w={href:"https://docs.solana.com/developing/runtime-facilities/programs#system-program",target:"_blank",rel:"noopener noreferrer"},v=n("Token Program"),T=n("\u0131n\u0131 kullan\u0131n. Bir SPL token g\xF6ndermek i\xE7in, onun SPL token account adresini bilmeniz gerekir. A\u015Fa\u011F\u0131daki \xF6rnekle hem adresi alabilir hem de token g\xF6nderebilirsiniz."),P=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Add token transfer instructions to transaction</span>
<span class="token keyword">const</span> transaction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">web3</span><span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
  splToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">createTransferInstruction</span><span class="token punctuation">(</span>
    splToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span>
    fromTokenAccount<span class="token punctuation">.</span>address<span class="token punctuation">,</span>
    toTokenAccount<span class="token punctuation">.</span>address<span class="token punctuation">,</span>
    fromWallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">1</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Sign transaction, broadcast, and confirm</span>
<span class="token keyword">await</span> web3<span class="token punctuation">.</span><span class="token function">sendAndConfirmTransaction</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> transaction<span class="token punctuation">,</span> <span class="token punctuation">[</span>fromWallet<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="how-to-calculate-transaction-cost-islem-maliyeti-nas\u0131l-hesaplan\u0131r" tabindex="-1"><a class="header-anchor" href="#how-to-calculate-transaction-cost-islem-maliyeti-nas\u0131l-hesaplan\u0131r" aria-hidden="true">#</a> How to calculate transaction cost (\u0130\u015Flem maliyeti nas\u0131l hesaplan\u0131r)</h2>`,2),L=n("Bir i\u015Flemin gerektirdi\u011Fi imza say\u0131s\u0131, i\u015Flem maliyetini hesaplamak i\xE7in kullan\u0131l\u0131r. Hesap olu\u015Fturmad\u0131\u011F\u0131n\u0131z s\xFCrece, bu son i\u015Flem maliyeti olacakt\u0131r. Hesap olu\u015Fturma maliyetleri hakk\u0131nda daha fazla bilgi edinmek i\xE7in "),x=n("rent muafiyetinin hesaplanmas\u0131"),C=n("na bak\u0131n."),S=e(`<p>A\u015Fa\u011F\u0131daki iki \xF6rnek, tahmini i\u015Flem maliyetini hesaplamak i\xE7in \u015Fu anda mevcut olan iki yolu g\xF6stermektedir.</p><p>\u0130lk \xF6rnek, <code>Transaction</code> s\u0131n\u0131f\u0131nda yeni bir y\xF6ntem olan <code>getEstimatedFee</code>&#39;yi kullan\u0131rken, ikinci \xF6rnek, <code>Connection</code> s\u0131n\u0131f\u0131nda <code>getFeeCalculatorForBlockhash</code>&#39;in yerini alan <code>getFeeForMessage</code>&#39;\u0131 kullan\u0131r.</p><h3 id="getestimatedfee" tabindex="-1"><a class="header-anchor" href="#getestimatedfee" aria-hidden="true">#</a> getEstimatedFee</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> recentBlockhash <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getLatestBlockhash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> transaction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  recentBlockhash<span class="token operator">:</span> recentBlockhash<span class="token punctuation">.</span>blockhash<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
  SystemProgram<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    fromPubkey<span class="token operator">:</span> payer<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
    toPubkey<span class="token operator">:</span> payee<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
    lamports<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fees <span class="token operator">=</span> <span class="token keyword">await</span> transaction<span class="token punctuation">.</span><span class="token function">getEstimatedFee</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Estimated SOL transfer cost: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fees<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> lamports</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Estimated SOL transfer cost: 5000 lamports</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="getfeeformessage" tabindex="-1"><a class="header-anchor" href="#getfeeformessage" aria-hidden="true">#</a> getFeeForMessage</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span>messageParams<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fees <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getFeeForMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Estimated SOL transfer cost: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fees<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> lamports</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Estimated SOL transfer cost: 5000 lamports</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="how-to-add-a-memo-to-a-transaction-bir-isleme-mesaj-nas\u0131l-eklenir" tabindex="-1"><a class="header-anchor" href="#how-to-add-a-memo-to-a-transaction-bir-isleme-mesaj-nas\u0131l-eklenir" aria-hidden="true">#</a> How to add a memo to a transaction (Bir i\u015Fleme mesaj nas\u0131l eklenir)</h2>`,7),B=n("Herhangi bir i\u015Flem, "),K={href:"https://spl.solana.com/memo",target:"_blank",rel:"noopener noreferrer"},A=n("memo program"),F=n(".\u0131 kullanarak bir mesaj ekleyebilir. \u015Eu anda Memo Program\u0131ndan "),M=s("code",null,"programID",-1),U=n("'nin manuel olarak eklenmesi gerekiyor. "),q=s("code",null,"MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",-1),E=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> transferTransaction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
  SystemProgram<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    fromPubkey<span class="token operator">:</span> fromKeypair<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
    toPubkey<span class="token operator">:</span> toKeypair<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
    lamports<span class="token operator">:</span> lamportsToSend<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> transferTransaction<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">TransactionInstruction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    keys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> pubkey<span class="token operator">:</span> fromKeypair<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> isSigner<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> isWritable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Data to send in transaction&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    programId<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token string">&quot;MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> <span class="token function">sendAndConfirmTransaction</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> transferTransaction<span class="token punctuation">,</span> <span class="token punctuation">[</span>fromKeypair<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="how-to-change-compute-budget-fee-priority-for-a-transaction-bir-islem-icin-islem-butcesi-bedeli-ve-onceligi-nas\u0131l-degistirilir" tabindex="-1"><a class="header-anchor" href="#how-to-change-compute-budget-fee-priority-for-a-transaction-bir-islem-icin-islem-butcesi-bedeli-ve-onceligi-nas\u0131l-degistirilir" aria-hidden="true">#</a> How to change compute budget, fee, &amp; priority for a transaction (Bir i\u015Flem i\xE7in i\u015Flem b\xFCt\xE7esi, bedeli ve \xF6nceli\u011Fi nas\u0131l de\u011Fi\u015Ftirilir)</h2><p>\u0130\u015Flem (TX) \xF6nceli\u011Fi, Baz \xDCcrete ek olarak bir \xD6nceliklendirme \xDCcreti \xF6denerek elde edilir. Varsay\u0131lan olarak i\u015Flem b\xFCt\xE7esi, maksimum 1,4M CU ile 200.000 \u0130\u015Flem Biriminin (CU) * talimat say\u0131s\u0131n\u0131n \xFCr\xFCn\xFCd\xFCr. Temel \xDCcret 5.000 Lamport&#39;tur. Bir microLamport, 0,00001 Lamport&#39;tur.</p><p>Tek bir TX i\xE7in toplam i\u015Flem b\xFCt\xE7esi veya \xD6nceliklendirme \xDCcreti, ComputeBudgetProgram&#39;dan talimatlar eklenerek de\u011Fi\u015Ftirilebilir.</p><p><code>ComputeBudgetProgram.setComputeUnitPrice({ microLamports: number })</code>, Temel \xDCcretin (5.000 Lamport) \xFCzerine bir \xD6nceliklendirme \xDCcreti ekleyecektir. MicroLamports&#39;ta sa\u011Flanan de\u011Fer, Lamports&#39;ta \xD6nceliklendirme \xDCcretini belirlemek i\xE7in CU b\xFCt\xE7esiyle \xE7arp\u0131lacakt\u0131r. \xD6rne\u011Fin, CU b\xFCt\xE7eniz 1M CU ise ve 1 microLamport/CU eklerseniz, \xD6nceliklendirme \xDCcreti 1 Lamport (1M * 0,000001) olacakt\u0131r. Toplam \xFCcret daha sonra 5001 Lamport olacakt\u0131r.</p><p>Yeni i\u015Flem b\xFCt\xE7esini ayarlamak i\xE7in <code>ComputeBudgetProgram.setComputeUnitLimit({ units: number })</code> kullan\u0131n. Sa\u011Flanan de\u011Fer, varsay\u0131lan de\u011Ferin yerini alacakt\u0131r. \u0130\u015Flemler, verimi en \xFCst d\xFCzeye \xE7\u0131karmak veya \xFCcretleri en aza indirmek i\xE7in y\xFCr\xFCtme i\xE7in gereken minimum CU miktar\u0131n\u0131 talep etmelidir.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> modifyComputeUnits <span class="token operator">=</span> ComputeBudgetProgram<span class="token punctuation">.</span><span class="token function">setComputeUnitLimit</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
  units<span class="token operator">:</span> <span class="token number">1000000</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> addPriorityFee <span class="token operator">=</span> ComputeBudgetProgram<span class="token punctuation">.</span><span class="token function">setComputeUnitPrice</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
  microLamports<span class="token operator">:</span> <span class="token number">1</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> transaction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>modifyComputeUnits<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>addPriorityFee<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
    SystemProgram<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      fromPubkey<span class="token operator">:</span> payer<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
      toPubkey<span class="token operator">:</span> toAccount<span class="token punctuation">,</span>
      lamports<span class="token operator">:</span> <span class="token number">10000000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,7),z=n("Program Logs \xD6rne\u011Fi ("),H={href:"https://explorer.solana.com/tx/2mNPXeoy3kFxo12L8avsEoep65S4Ehvw2sheduDrAXbmmNJwTtXNmUrb5MM3s15eki2MWSQrwyKGAUQFZ9wAGo9K/",target:"_blank",rel:"noopener noreferrer"},N=n("Explorer"),O=n("):"),X=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[ 1] Program ComputeBudget111111111111111111111111111111 invoke [1]
[ 2] Program ComputeBudget111111111111111111111111111111 success
[ 3]
[ 4] Program ComputeBudget111111111111111111111111111111 invoke [1]
[ 5] Program ComputeBudget111111111111111111111111111111 success
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,1);function W(I,D){const t=p("ExternalLinkIcon"),o=p("RouterLink");return i(),l(u,null,[m,d,s("p",null,[b,s("a",g,[h,a(t)]),y]),f,s("p",null,[_,s("a",w,[v,a(t)]),T]),P,s("p",null,[L,a(o,{to:"/tr/references/accounts.html#calculating-rent-exemption"},{default:r(()=>[x]),_:1}),C]),S,s("p",null,[B,s("a",K,[A,a(t)]),F,M,U,q]),E,s("p",null,[z,s("a",H,[N,a(t)]),O]),X],64)}var V=c(k,[["render",W]]);export{V as default};

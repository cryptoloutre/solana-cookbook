import{_ as p,r as t,o as e,c as o,a as n,b as c,F as l,d as s,e as u}from"./app.55b1b60c.js";const r={},i=n("h1",{id:"how-to-save-game-state",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-save-game-state","aria-hidden":"true"},"#"),s(" How to save game state")],-1),k=s("You can use Solana block chain to save the state of your game in program accounts. These are accounts that are owned by your program and they are derived from the program Id and some seeds. These can be thought of as data base entries. We can for example create a PlayerData account and use the players public key as a seed. This means every player can have one player account per wallet. These accounts can be up to 10Kb by default. If you need a bigger account look into "),b={href:"https://github.com/solana-developers/anchor-zero-copy-example",target:"_blank",rel:"noopener noreferrer"},m=s("Manage big accounts"),d=s(" This can be done in a program like this:"),y=u(`<div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">init_player</span><span class="token punctuation">(</span>ctx<span class="token punctuation">:</span> <span class="token class-name">Context</span><span class="token operator">&lt;</span><span class="token class-name">InitPlayer</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span>player<span class="token punctuation">.</span>energy <span class="token operator">=</span> <span class="token constant">MAX_ENERGY</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span>player<span class="token punctuation">.</span>health <span class="token operator">=</span> <span class="token constant">MAX_HEALTH</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span>player<span class="token punctuation">.</span>last_login <span class="token operator">=</span> <span class="token class-name">Clock</span><span class="token punctuation">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">.</span>unix_timestamp<span class="token punctuation">;</span>
    <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[derive(Accounts)]</span>
<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">InitPlayer</span> <span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;info</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    #<span class="token punctuation">[</span><span class="token function">account</span><span class="token punctuation">(</span> 
        init<span class="token punctuation">,</span> 
        payer <span class="token operator">=</span> signer<span class="token punctuation">,</span>
        space <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        seeds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">b&quot;player&quot;</span><span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> signer<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        bump<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">pub</span> player<span class="token punctuation">:</span> <span class="token class-name">Account</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;info</span><span class="token punctuation">,</span> <span class="token class-name">PlayerData</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token attribute attr-name">#[account(mut)]</span>
    <span class="token keyword">pub</span> signer<span class="token punctuation">:</span> <span class="token class-name">Signer</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;info</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> system_program<span class="token punctuation">:</span> <span class="token class-name">Program</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;info</span><span class="token punctuation">,</span> <span class="token class-name">System</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[account]</span>
<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">PlayerData</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> level<span class="token punctuation">:</span> <span class="token keyword">u8</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> xp<span class="token punctuation">:</span> <span class="token keyword">u64</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> health<span class="token punctuation">:</span> <span class="token keyword">u64</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> log<span class="token punctuation">:</span> <span class="token keyword">u64</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> energy<span class="token punctuation">:</span> <span class="token keyword">u64</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> last_login<span class="token punctuation">:</span> <span class="token keyword">i64</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>You can then interact with this player data via transaction instructions. Lets say we want the player to get experience for killing a monster for example:</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code>    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">kill_enemy</span><span class="token punctuation">(</span><span class="token keyword">mut</span> ctx<span class="token punctuation">:</span> <span class="token class-name">Context</span><span class="token operator">&lt;</span><span class="token class-name">KillEnemy</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> enemyId<span class="token punctuation">:</span> <span class="token keyword">u8</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> account <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">;</span>

        <span class="token punctuation">...</span> handle energy

        <span class="token keyword">if</span> ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span>player<span class="token punctuation">.</span>energy <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token macro property">err!</span><span class="token punctuation">(</span><span class="token class-name">ErrorCode</span><span class="token punctuation">::</span><span class="token class-name">NotEnoughEnergy</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token punctuation">...</span> get enemy values by id and calculate battle

        ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span>player<span class="token punctuation">.</span>xp <span class="token operator">=</span> ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span>player<span class="token punctuation">.</span>xp <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span>player<span class="token punctuation">.</span>energy <span class="token operator">=</span> ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span>player<span class="token punctuation">.</span>energy <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token punctuation">...</span> handle level up
        
        <span class="token macro property">msg!</span><span class="token punctuation">(</span><span class="token string">&quot;You killed enemy and got 1 xp. You have {} xp and {} energy left.&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span>player<span class="token punctuation">.</span>xp<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span>player<span class="token punctuation">.</span>energy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>This is how this would look like from a js client:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> wallet <span class="token operator">=</span> <span class="token function">useAnchorWallet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> provider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnchorProvider</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> wallet<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setProvider</span><span class="token punctuation">(</span>provider<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> program <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Program</span><span class="token punctuation">(</span><span class="token constant">IDL</span><span class="token punctuation">,</span> <span class="token constant">PROGRAM_ID</span><span class="token punctuation">,</span> provider<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>pda<span class="token punctuation">]</span> <span class="token operator">=</span> PublicKey<span class="token punctuation">.</span><span class="token function">findProgramAddressSync</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;player&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  publicKey<span class="token punctuation">.</span><span class="token function">toBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token constant">PROGRAM_ID</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> transaction <span class="token operator">=</span> program<span class="token punctuation">.</span>methods
    <span class="token punctuation">.</span><span class="token function">initPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">accounts</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">player</span><span class="token operator">:</span> pda<span class="token punctuation">,</span>
      <span class="token literal-property property">signer</span><span class="token operator">:</span> publicKey<span class="token punctuation">,</span>
      <span class="token literal-property property">systemProgram</span><span class="token operator">:</span> SystemProgram<span class="token punctuation">.</span>programId<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> tx <span class="token operator">=</span> <span class="token keyword">await</span> transaction<span class="token punctuation">;</span>
  <span class="token keyword">const</span> txSig <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">sendTransaction</span><span class="token punctuation">(</span>tx<span class="token punctuation">,</span> connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">confirmTransaction</span><span class="token punctuation">(</span>txSig<span class="token punctuation">,</span> <span class="token string">&quot;confirmed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>How to actually build this energy system you can learn here: <a href="../gaming/energy-system">Building an Energy system</a></p>`,6);function g(f,w){const a=t("ExternalLinkIcon");return e(),o(l,null,[i,n("p",null,[k,n("a",b,[m,c(a)]),d]),y],64)}var x=p(r,[["render",g]]);export{x as default};

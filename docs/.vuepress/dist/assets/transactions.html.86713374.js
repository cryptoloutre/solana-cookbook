import{_ as l,r as n,o,c as s,a as e,b as r,w as c,F as d,d as a,e as m}from"./app.55b1b60c.js";const h={},k=e("h1",{id:"transactions-islemler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#transactions-islemler","aria-hidden":"true"},"#"),a(" Transactions (\u0130\u015Flemler)")],-1),u=a("Client\u2019lar, bir cluster\u2019a bir transaction (i\u015Flem) g\xF6ndererek "),b=a("programlar\u0131"),_=a(" \xE7a\u011F\u0131rabilir. Tek bir i\u015Flem, her biri kendi program\u0131n\u0131 hedefleyen birden fazla talimat i\xE7erebilir. Bir i\u015Flem g\xF6nderildi\u011Finde, Solana "),y={href:"https://docs.solana.com/developing/programming-model/runtime",target:"_blank",rel:"noopener noreferrer"},p=a("Runtime"),g=a(" talimatlar\u0131n\u0131 s\u0131rayla ve atomik olarak i\u015Fleyecektir. Bir talimat\u0131n herhangi bir k\u0131sm\u0131 ba\u015Far\u0131s\u0131z olursa, t\xFCm i\u015Flem ba\u015Far\u0131s\u0131z olur."),f=m('<h2 id="facts-ozet-bilgiler" tabindex="-1"><a class="header-anchor" href="#facts-ozet-bilgiler" aria-hidden="true">#</a> Facts (\xD6zet Bilgiler)</h2><p><strong>Bilgi Tablosu</strong></p><ul><li>Instruction\u2019lar(talimatlar) Solana&#39;daki en temel operasyonel birimdir.</li><li>Her instruction \u015Funlar\u0131 i\xE7erir: <ul><li>Ama\xE7lanan program\u0131n <code>program_id</code>&#39;si</li><li>Okumak veya yazmak istedi\u011Fi t\xFCm <code>account</code>\u2019lar\u0131n array\u2019i</li><li>Ama\xE7lanan programa \xF6zel bir <code>instruction_data</code> byte array\u2019i</li></ul></li><li>Birden fazla talimat tek bir transaction\u2019da(i\u015Flemde) toplanabilir.</li><li>Her i\u015Flem \u015Funlar\u0131 i\xE7erir: <ul><li>Okumak veya yazmak istedi\u011Fi t\xFCm <code>account</code>\u2019lar\u0131n array\u2019i</li><li>Bir veya daha fazla <code>instruction</code></li><li>Yak\u0131n zamanda bir <code>blockhash</code></li><li>Bir veya daha fazla <code>signature</code>(imza)</li></ul></li><li>Instruction\u2019lar s\u0131rayla ve atomik olarak i\u015Flenir.</li><li>Bir instruction\u2019\u0131n herhangi bir k\u0131sm\u0131 ba\u015Far\u0131s\u0131z olursa, transaction\u2019\u0131n tamam\u0131 ba\u015Far\u0131s\u0131z olur.</li><li>Transaction\u2019lar 1232 bayt ile s\u0131n\u0131rl\u0131d\u0131r.</li></ul><h2 id="deep-dive-derinlemesine-bak\u0131s" tabindex="-1"><a class="header-anchor" href="#deep-dive-derinlemesine-bak\u0131s" aria-hidden="true">#</a> Deep Dive (Derinlemesine Bak\u0131\u015F)</h2><p>Solana Runtime, okumak veya yazmak istedikleri t\xFCm account\u2019lar\u0131n bir listesini belirtmek i\xE7in hem instructions hem de transactions gerektirir. Bu account\u2019lar\u0131 \xF6nceden talep ederek, \xE7al\u0131\u015Fma zaman\u0131 t\xFCm transaction\u2019larda y\xFCr\xFCtmeyi paralel hale getirebilir.</p><p>Bir transaction bir k\xFCmeye g\xF6nderildi\u011Finde, \xE7al\u0131\u015Fma zaman\u0131 instruction\u2019lar\u0131n\u0131 s\u0131rayla ve atomik olarak i\u015Fleyecektir. Her talimat i\xE7in, al\u0131c\u0131 program kendi veri dizisini yorumlayacak ve belirtilen account\u2019lar\u0131 \xFCzerinde \xE7al\u0131\u015Facakt\u0131r. Program ya ba\u015Far\u0131l\u0131 bir \u015Fekilde ya da bir hata koduyla d\xF6necektir. Bir hata d\xF6nd\xFCr\xFCl\xFCrse, t\xFCm i\u015Flem hemen ba\u015Far\u0131s\u0131z olur.</p><p>Bir account\u2019\u0131 bor\xE7land\u0131rmay\u0131 veya verilerini de\u011Fi\u015Ftirmeyi ama\xE7layan herhangi bir transaction, account sahibinin imzas\u0131n\u0131 gerektirir. De\u011Fi\u015Ftirilecek herhangi bir account <code>writable</code>(yaz\u0131labilir) olarak i\u015Faretlenir. Transaction \xFCcretini \xF6deyen ki\u015Fi, gerekli rent ve transaction \xFCcretlerini kar\u015F\u0131lad\u0131\u011F\u0131 s\xFCrece, sahibinin izni olmadan bir account\u2019a kredi verilebilir.</p><p>G\xF6nderilmeden \xF6nce, t\xFCm transaction\u2019lar son bir blockhash\u2019e referans vermelidir. Blockhash, tekrarlar\u0131 \xF6nlemek ve eski transaction\u2019lar\u0131 ortadan kald\u0131rmak i\xE7in kullan\u0131l\u0131r. Bir i\u015Flemin blockhash\u2019inin maksimum ya\u015F\u0131 150 blok veya bu yaz\u0131n\u0131n yaz\u0131ld\u0131\u011F\u0131 zaman itibariyle yakla\u015F\u0131k ~1 dakika 19 saniyedir.</p><h3 id="fees-ucretler" tabindex="-1"><a class="header-anchor" href="#fees-ucretler" aria-hidden="true">#</a> Fees (\xDCcretler)</h3><p>Solana a\u011F\u0131 iki t\xFCr \xFCcret toplar:</p>',10),z=a("Yay\u0131lan i\u015Flemler i\xE7in "),v={href:"https://docs.solana.com/transaction_fees",target:"_blank",rel:"noopener noreferrer"},B=a("transaction \xFCcreti"),x=a(' ("gaz \xFCcretleri" olarak da bilinir)'),T=a("Zincir \xFCzerinde veri depolamak i\xE7in "),S={href:"https://docs.solana.com/developing/programming-model/accounts#rent",target:"_blank",rel:"noopener noreferrer"},D=a("rent \xFCcreti"),w=e("p",null,[a("Solana'da i\u015Flem \xFCcretleri belirlidir: Kullan\u0131c\u0131lar\u0131n bir sonraki blo\u011Fa dahil olma \u015Fanslar\u0131n\u0131 art\u0131rmak i\xE7in daha y\xFCksek \xFCcretler \xF6deyebilecekleri bir \xFCcret piyasas\u0131 kavram\u0131 yoktur. Bu yaz\u0131n\u0131n yaz\u0131ld\u0131\u011F\u0131 tarihte, i\u015Flem \xFCcretleri kullan\u0131lan kaynak miktar\u0131na g\xF6re de\u011Fil, yaln\u0131zca gereken imza say\u0131s\u0131na ("),e("code",null,"lamports_per_signature"),a(") g\xF6re belirlenir. Bunun nedeni, \u015Fu anda t\xFCm i\u015Flemlerde 1232 baytl\u0131k bir sabit s\u0131n\u0131r bulunmas\u0131d\u0131r.")],-1),F=e("p",null,"T\xFCm i\u015Flemler, i\u015Flemi imzalamak i\xE7in en az bir writable account(yaz\u0131labilir hesap) gerektirir. G\xF6nderildikten sonra, ilk olarak seri hale getirilen writable signer account \xFCcreti \xF6deyen ki\u015Fi olacakt\u0131r. Bu account, i\u015Flemin ba\u015Far\u0131l\u0131 veya ba\u015Far\u0131s\u0131z olmas\u0131na bak\u0131lmaks\u0131z\u0131n i\u015Flem maliyetini \xF6deyecektir. \xDCcret \xF6deyen ki\u015Finin i\u015Flem \xFCcretini \xF6demek i\xE7in yeterli bakiyesi yoksa i\u015Flem d\xFC\u015Fer.",-1),I=e("p",null,"Bu yaz\u0131n\u0131n yaz\u0131ld\u0131\u011F\u0131 s\u0131rada, t\xFCm i\u015Flem \xFCcretlerinin %50'si blo\u011Fu \xFCreten validator(do\u011Frulay\u0131c\u0131) taraf\u0131ndan al\u0131n\u0131rken, kalan %50'si yak\u0131l\u0131r(burn). Bu yap\u0131, validator\u2019leri leader program\u0131 s\u0131ras\u0131nda m\xFCmk\xFCn oldu\u011Funca \xE7ok i\u015Flemi i\u015Flemeye te\u015Fvik etmek i\xE7in \xE7al\u0131\u015F\u0131r.",-1),L=e("h2",{id:"other-resources-diger-kaynaklar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#other-resources-diger-kaynaklar","aria-hidden":"true"},"#"),a(" Other Resources (Di\u011Fer Kaynaklar)")],-1),R={href:"https://docs.solana.com/developing/programming-model/transactions",target:"_blank",rel:"noopener noreferrer"},A=a("Official Documentation"),H={href:"https://solana.wiki/docs/solidity-guide/transactions/#solana-transaction-structure",target:"_blank",rel:"noopener noreferrer"},N=a("Transaction Structure"),O={href:"https://jstarry.notion.site/Transaction-Fees-f09387e6a8d84287aa16a34ecb58e239",target:"_blank",rel:"noopener noreferrer"},V=a("Transaction Fees by Justin Starry"),C={href:"https://2501babe.github.io/posts/solana101.html",target:"_blank",rel:"noopener noreferrer"},E=a("An Introduction to Solana by Hana"),j={href:"https://jito-labs.medium.com/solana-validator-101-transaction-processing-90bcdc271143",target:"_blank",rel:"noopener noreferrer"},G=a("Transaction Processing by Jito Labs"),J={href:"https://medium.com/@asmiller1989/solana-transactions-in-depth-1f7f7fe06ac2",target:"_blank",rel:"noopener noreferrer"},K=a("Solana Transaction in Depth by Alex Miller");function P(Y,M){const t=n("RouterLink"),i=n("ExternalLinkIcon");return o(),s(d,null,[k,e("p",null,[u,r(t,{to:"/tr/core-concepts/programs.html"},{default:c(()=>[b]),_:1}),_,e("a",y,[p,r(i)]),g]),f,e("ul",null,[e("li",null,[z,e("a",v,[B,r(i)]),x]),e("li",null,[T,e("a",S,[D,r(i)])])]),w,F,I,L,e("ul",null,[e("li",null,[e("a",R,[A,r(i)])]),e("li",null,[e("a",H,[N,r(i)])]),e("li",null,[e("a",O,[V,r(i)])]),e("li",null,[e("a",C,[E,r(i)])]),e("li",null,[e("a",j,[G,r(i)])]),e("li",null,[e("a",J,[K,r(i)])])])],64)}var q=l(h,[["render",P]]);export{q as default};

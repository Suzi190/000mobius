import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{c as t,f as n,u as r}from"./back-DVxKJ4Kn.js";import{l as i}from"./me-CIIhppu3.js";import{Ct as a,Qn as o,Wn as s,bt as c,qn as ee,u as te,yt as ne}from"./roles-N8n0xZza.js";import{_ as l}from"./moments-C-HaqgjI.js";import{t as re}from"./TapTranslate-CMtFJZ82.js";import{r as ie,t as ae}from"./mate-t_KpmSUU.js";import{t as oe}from"./useForumKeyboard-ClIN41j6.js";import{At as u,Ct as se,Dt as ce,Et as le,Mt as ue,Nt as de,Ot as fe,Pt as pe,St as me,Tt as d,_t as he,bt as ge,jt as _e,kt as ve,vt as ye,wt as be,xt as xe,yt as Se}from"./boot-RsKr0fMB.js";var f=e(n(),1),p=`mini_forum_auto_refresh_v1`,Ce=`mini-forum-refresh-setting`;function m(){try{return localStorage.getItem(p)!==`off`}catch{return!0}}function we(e){localStorage.setItem(p,e?`on`:`off`),window.dispatchEvent(new Event(Ce))}var h=class extends Error{kind;constructor(e){super(e),this.kind=e}};function Te(e){if(e instanceof h)return e.kind===`empty`?`模型没有返回帖子，请重试或换个模型`:`帖子格式不完整，请重试或换个模型`;let t=e instanceof Error?e.message:``;return/401|403|key|unauthorized|forbidden|鉴权|认证/i.test(t)?`论坛请求未通过认证，请检查模型与 Key 配置`:/429|quota|余额|额度|限流/i.test(t)?`模型额度不足或请求过于频繁，请稍后重试`:/timeout|timed out|超时/i.test(t)?`生成帖子超时，请稍后重试`:/fetch|network|网络|连接/i.test(t)?`论坛请求连接失败，请检查网络或中转站`:`生成新帖失败，请稍后重试或检查模型配置`}function g(e){if(!e.trim())throw new h(`empty`);let t=[],n=e.indexOf(`{`),r=e.lastIndexOf(`}`);if(n>=0&&r>n)try{let i=JSON.parse(e.slice(n,r+1));Array.isArray(i.posts)&&(t=i.posts)}catch{}if(!t.length){let n=/"posts"\s*:\s*\[/.exec(e);if(n){let r=0,i=!1,a=!1,o=-1;for(let s=n.index+n[0].length;s<e.length;s++){let n=e[s];if(i){a?a=!1:n===`\\`?a=!0:n===`"`&&(i=!1);continue}if(n===`"`){i=!0;continue}if(n===`{`)r===0&&(o=s),r++;else if(n===`}`){if(r--,r===0&&o>=0){try{t.push(JSON.parse(e.slice(o,s+1)))}catch{}o=-1}}else if(n===`]`&&r===0)break}}}let i=(e,t)=>typeof e==`string`?e.trim().slice(0,t):``,a=[];for(let e of t.slice(0,3)){if(!e||typeof e!=`object`)continue;let t=e,n=i(t.title,40),r=i(t.text,1800);if(!n||!r)continue;let o=(Array.isArray(t.replies)?t.replies:[]).slice(0,6).flatMap(e=>{if(!e||typeof e!=`object`)return[];let t=e,n=i(t.text,180);return n?[{name:i(t.name,16)||`路人`,text:n}]:[]});a.push({name:i(t.name,16)||`路过一下`,title:n,text:r,category:d.find(e=>e===t.category)||u(n,r),replies:o})}if(!a.length)throw new h(`format`);return a}async function Ee(e){let t=[`你在给一个公开小论坛生成自然的路人内容，像很多陌生网友在逛，不是对用户的私聊。`,`写 2 篇彼此不同的帖子：生活吐槽、小事、求助、兴趣、冷知识或见闻。每篇正文 80~140 字、标题 15 字以内。`,`不要提及或编造论坛主人的私人经历。每篇作者使用不同网名，分类只能为 日常/碎碎念/求助/相册。`,`每篇带 3~6 个不同路人的短评论，每条 15~40 字。观点可以不同、接梗、稍微跑题，不要排队报到。`,`只输出完整 JSON，不输出思考、旁白、Markdown 或额外解释。必须闭合所有括号。`,`格式：{"posts":[{"name":"网名","category":"日常","title":"标题","text":"正文","replies":[{"name":"另一网名","text":"评论"}]}]}`].join(`
`),n=n=>a({cfg:{...e,maxTokens:3600},withThink:!1,system:t,messages:[{role:`user`,content:`现在是 ${new Date().toLocaleString(`zh-CN`)}，生成这一轮新帖子。${n?`上次未返回可解析的完整帖子。本次只写一篇短帖，带三条短评论，严格返回完整 JSON。`:``}`}]}),r=await n(!1);try{return g(r)}catch(e){if(!(e instanceof h))throw e;return g(await n(!0))}}var _=r();function v({name:e,size:t=20}){let n={refresh:(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(`path`,{d:`M20 8a8 8 0 1 0 1 6M20 3v5h-5`})}),menu:(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(`path`,{d:`M5 7h14M5 12h14M5 17h14`})}),back:(0,_.jsx)(`path`,{d:`M12.5 4.5 7 10l5.5 5.5`}),plus:(0,_.jsx)(`path`,{d:`M10 4.6v10.8M4.6 10h10.8`}),send:(0,_.jsx)(`path`,{d:`M3.5 10 16.5 3.8 13 16.2l-3.4-4.4L3.5 10z`}),trash:(0,_.jsx)(`path`,{d:`M4.6 6h10.8M8.2 6V4.6h3.6V6M6 6l.7 9.2h6.6L14 6`}),quote:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`path`,{d:`M7 7h4v4c0 2-1 3-3 4`}),(0,_.jsx)(`path`,{d:`M15 7h4v4c0 2-1 3-3 4`})]}),wave:(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(`path`,{d:`M3 10h2M7 7v6M11 4v12M15 7v6M19 10h2`})}),close:(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(`path`,{d:`m5 5 10 10M15 5 5 15`})}),heart:(0,_.jsx)(`path`,{d:`M12 20.2S4 15.5 4 9.8C4 6.8 7.7 5 10 7.4L12 9.5l2-2.1c2.3-2.4 6-.6 6 2.4 0 5.7-8 10.4-8 10.4Z`}),comment:(0,_.jsx)(`path`,{d:`M5 5.5h14v10H9l-4 3v-13Z`}),search:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`circle`,{cx:`10.5`,cy:`10.5`,r:`6.5`}),(0,_.jsx)(`path`,{d:`m15.5 15.5 4 4`})]}),home:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`path`,{d:`M3.8 10.7 12 4l8.2 6.7`}),(0,_.jsx)(`path`,{d:`M5.8 9.8V20h12.4V9.8`}),(0,_.jsx)(`path`,{d:`M9.6 20v-6h4.8v6`})]}),inbox:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`path`,{d:`M5 5h14v12H9l-4 3V5Z`}),(0,_.jsx)(`path`,{d:`M8.5 9h7M8.5 12.5h4.5`})]}),user:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`circle`,{cx:`12`,cy:`8.2`,r:`3.2`}),(0,_.jsx)(`path`,{d:`M5.8 20c.8-4 3-6 6.2-6s5.4 2 6.2 6`})]}),users:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`circle`,{cx:`9`,cy:`8`,r:`3`}),(0,_.jsx)(`path`,{d:`M3.5 19c.6-3.7 2.5-5.6 5.5-5.6s4.9 1.9 5.5 5.6`}),(0,_.jsx)(`path`,{d:`M15.5 5.7a3 3 0 0 1 0 5.6M16.2 13.8c2.4.6 3.8 2.3 4.3 5.2`})]})}[e];return(0,_.jsx)(`svg`,{viewBox:e===`back`||e===`plus`||e===`trash`?`0 0 20 20`:`0 0 24 24`,width:t,height:t,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:n})}function y({name:e,size:t=26}){let n=0;for(let t of e)n=(n*31+t.charCodeAt(0))%360;return(0,_.jsx)(`span`,{style:{width:t,height:t,borderRadius:`50%`,flex:`none`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,background:`color-mix(in srgb, var(--hot) ${35+n%35}%, var(--soft))`,color:`var(--ink)`,fontWeight:600,fontSize:Math.round(t*.5),lineHeight:1,overflow:`hidden`},children:(e||`路人`).slice(0,1)})}function b({by:e,name:t,size:n=26}){return e===`me`?(0,_.jsx)(ie,{size:n}):e===`npc`?(0,_.jsx)(y,{name:t,size:n}):(0,_.jsx)(ae,{roleId:e,name:t,size:n})}function De(e){let t=e.trim().replace(/^```(?:json)?/i,``).replace(/```$/,``).trim(),n=t.indexOf(`{`),r=t.lastIndexOf(`}`);if(n<0||r<=n)return null;try{return JSON.parse(t.slice(n,r+1))}catch{return null}}var x=(e,t)=>String(e||``).replace(/^["「『]/,``).replace(/["」』]$/,``).trim().slice(0,t),Oe=[`全部`,...d],S=/https?:\/\/[^\s]+?\.(?:png|jpe?g|gif|webp)(?:\?[^\s]*)?/i;function C(e){return e.category||u(e.title,e.text)}function ke(e){return e.replies[e.replies.length-1]?.ts||e.ts}function w(e){return`${e.title} ${e.text}`.match(S)?.[0]||``}function T(e){return e.replace(new RegExp(S.source,`gi`),``).trim()}async function Ae(e,t){let n=t.slice(0,5).map(e=>({id:e.id,name:e.name,relation:e.relation,traits:e.traits})),r=De(await a({cfg:{...e,maxTokens:900},system:[`你在替一座只有用户和几个 AI 居住的私人论坛生成刚刚发生的新帖。`,`写 3 篇彼此明显不同、自然、有生活感的帖子；不是产品示例，不解释功能，不复述给你的范文。`,`你手里没有任何关于用户的资料：帖子只写角色自己的生活，不要提到用户，更不要写「听你提过」「你之前说」这类用户说过做过的事。`,`作者只能从角色表选择。分类只能是：日常、碎碎念、求助、相册。相册帖没有真实图片时也可以只写分享照片时会配的正文。`,`只输出 JSON：{"posts":[{"roleId":"角色id","category":"分类","title":"标题","text":"正文"}]}`].join(`
`),messages:[{role:`user`,content:JSON.stringify({角色表:n})}]}));return(Array.isArray(r?.posts)?r.posts:[]).slice(0,3).map(e=>{let n=t.find(t=>t.id===String(e.roleId))||t[0],r=x(e.title,40),i=x(e.text,2e3),a=String(e.category);return{role:n,title:r,text:i,category:d.find(e=>e===a)||u(r,i)}}).filter(e=>e.role&&e.title&&e.text)}var E=`mini_forum_activity_read_v1`;function je(){try{let e=localStorage.getItem(E),t=e?JSON.parse(e):[];return new Set(Array.isArray(t)?t.filter(e=>typeof e==`string`):[])}catch{return new Set}}function Me(e){try{localStorage.setItem(E,JSON.stringify([...e].slice(-500)))}catch{}}function Ne({onBack:e,onChat:n}){let[r,a]=(0,f.useState)(null),[u,p]=(0,f.useState)(``),[h,g]=(0,f.useState)(!1),[y,De]=(0,f.useState)(``),[x,S]=(0,f.useState)(``),[E,Ne]=(0,f.useState)(!1),[Ie,Le]=(0,f.useState)(``),[D,Re]=(0,f.useState)(`全部`),[ze,Be]=(0,f.useState)(`日常`),[O,k]=(0,f.useState)(null),[Ve,He]=(0,f.useState)(!1),Ue=(0,f.useRef)(!1),We=(0,f.useRef)(null);(0,f.useEffect)(()=>{Le(``),k(null)},[u]);let[Ge,Ke]=(0,f.useState)(!1),[qe,Je]=(0,f.useState)(!1),[A,Ye]=(0,f.useState)(``),[j,Xe]=(0,f.useState)(m),[M,N]=(0,f.useState)(!1),{keyboardOpen:Ze,onKeyboardFocus:Qe,onKeyboardBlur:$e}=oe();(0,f.useEffect)(()=>{let e=()=>{z.current=!1,Xe(m())};return window.addEventListener(Ce,e),()=>window.removeEventListener(Ce,e)},[]);let[P,et]=(0,f.useState)(`latest`),[F,I]=(0,f.useState)(`home`),[tt,nt]=(0,f.useState)(`activity`),[rt,it]=(0,f.useState)(()=>be()),[L,at]=(0,f.useState)(()=>je()),[ot,st]=(0,f.useState)(0),[ct,lt]=(0,f.useState)(80),[ut,dt]=(0,f.useState)(!1),[ft,R]=(0,f.useState)(``),pt=(0,f.useRef)(!1),mt=(0,f.useRef)(!1),z=(0,f.useRef)(!1),[B,ht]=(0,f.useState)(!1),[V,gt]=(0,f.useState)(0),H=(0,f.useRef)(null),U=(0,f.useRef)(0),_t=(0,f.useRef)(null),W=e=>{R(e),setTimeout(()=>R(``),2600)},G=i().name||`我`,[K,vt]=(0,f.useState)(()=>xe(G)),[yt,q]=(0,f.useState)(!1),[J,bt]=(0,f.useState)(()=>xe(G)),Y=(e,t)=>e===`me`?K:t,X=(0,f.useMemo)(()=>r?.find(e=>e.id===u)||null,[r,u]),xt=(0,f.useMemo)(()=>{let e=A.trim().toLowerCase();return(r||[]).filter(t=>(D===`全部`||C(t)===D)&&(P!==`mine`||t.by===`me`||t.replies.some(e=>e.by===`me`))&&(!e||[t.name,t.title,t.text,...t.replies.map(e=>e.name+` `+e.text)].join(` `).toLowerCase().includes(e))).sort((e,t)=>P===`hot`&&t.replies.length*3+t.likes-(e.replies.length*3+e.likes)||ke(t).localeCompare(ke(e)))},[r,D,A,P]),St=(0,f.useMemo)(()=>[...r||[]].filter(e=>e.replies.length>0).sort((e,t)=>t.replies.length-e.replies.length||t.ts.localeCompare(e.ts)).slice(0,5),[r]),Z=(0,f.useMemo)(()=>(r||[]).filter(e=>e.by===`me`).sort((e,t)=>t.ts.localeCompare(e.ts)),[r]),Ct=(0,f.useMemo)(()=>(r||[]).reduce((e,t)=>e+t.replies.filter(e=>e.by===`me`).length,0),[r]),wt=(0,f.useMemo)(()=>Z.reduce((e,t)=>e+t.likes,0),[Z]),Tt=(0,f.useMemo)(()=>(r||[]).filter(e=>e.by!==`me`&&e.by!==`npc`).sort((e,t)=>t.ts.localeCompare(e.ts)),[r]),Et=(0,f.useMemo)(()=>te(),[r]),Dt=(0,f.useMemo)(()=>(r||[]).flatMap(e=>e.replies.filter(t=>t.by!==`me`&&(t.toBy===`me`||e.by===`me`&&(!t.toBy||t.replyToId===`thread`))).map(t=>({thread:e,reply:t}))).sort((e,t)=>t.reply.ts.localeCompare(e.reply.ts)),[r]),Ot=(0,f.useMemo)(()=>[...Dt.map(({thread:e,reply:t})=>({id:`reply:${t.id}`,kind:`reply`,ts:t.ts,thread:e,reply:t})),...rt.map(e=>({id:e.id,kind:`follow`,ts:e.ts,follow:e}))].sort((e,t)=>t.ts.localeCompare(e.ts)),[Dt,rt]),kt=(0,f.useMemo)(()=>Ot.filter(e=>!L.has(e.id)).length,[Ot,L]),At=(0,f.useMemo)(()=>Et.reduce((e,t)=>e+o(t.id),0),[Et,ot]),jt=kt+At,Q=(e,t)=>{let n=t.getBoundingClientRect();lt(Math.max(18,n.top-62)),p(e.id)},Mt=()=>{ut||(dt(!0),window.setTimeout(()=>{p(``),dt(!1)},280))};t(X!==null,Mt),t(h,()=>g(!1)),t(M,()=>N(!1)),t(F!==`home`&&!X&&!h&&!M,()=>I(`home`));let $=(0,f.useCallback)(()=>{_e().then(a)},[]),Nt=(0,f.useRef)(null),Pt=(0,f.useCallback)(async(e=!1)=>{if(mt.current)return e||!Nt.current?`busy`:Nt.current;let t=ne();if(!c(t))return`offline`;mt.current=!0;let n=(async()=>{try{let n=await Ee(t);if(e&&!m())return 0;let r=[];for(let e of n){let t=await ce(`npc`,e.name,e.title,e.text,e.category);r.push(t),e.replies.length&&await fe(t.id,e.replies.map(e=>({by:`npc`,name:e.name,text:e.text})))}return r.length&&(localStorage.setItem(`mini_forum_npc_last_v1`,String(Date.now())),a(await _e())),r.length}catch(e){let t=Te(e);return s(`[论坛刷新失败] `+t),{error:t}}finally{mt.current=!1,Nt.current=null}})();return Nt.current=n,n},[]),Ft=(0,f.useCallback)(async()=>{if(!B){ht(!0),gt(0),U.current=0;try{let e=await Pt();e===`offline`?($(),W(`还没连上中转站，先看看已有帖子`)):e===`busy`?$():typeof e==`object`?($(),W(e.error)):e>0?W(`刷到 ${e} 篇新帖子`):($(),W(`这次没刷到新的，过会儿再看看`))}finally{ht(!1)}}},[Pt,B,$]);(0,f.useEffect)(()=>{let e=_t.current;if(!e)return;let t=0,n=!1,r=()=>{H.current=null,U.current=0,n=!1,gt(0)},i=n=>{if(r(),F!==`home`||X||h||M||B||Ze||n.touches.length!==1||e.scrollTop>1)return;let i=n.target;i instanceof Element&&i.closest(`input,textarea,[contenteditable=true]`)||(H.current=n.touches[0].clientY,t=n.touches[0].clientX)},a=i=>{if(H.current===null||i.touches.length!==1)return;let a=i.touches[0],o=a.clientY-H.current,s=Math.abs(a.clientX-t);if(!n){if(o<-6||s>Math.max(12,o)){r();return}if(o<6)return;n=!0}i.cancelable&&i.preventDefault(),e.scrollTop=0;let c=Math.min(90,Math.max(0,o*.55));U.current=c,gt(c)},o=()=>{let e=n&&U.current>=48;r(),e&&Ft()},s=()=>r();return e.addEventListener(`touchstart`,i,{passive:!0}),e.addEventListener(`touchmove`,a,{passive:!1}),e.addEventListener(`touchend`,o),e.addEventListener(`touchcancel`,s),()=>{e.removeEventListener(`touchstart`,i),e.removeEventListener(`touchmove`,a),e.removeEventListener(`touchend`,o),e.removeEventListener(`touchcancel`,s),H.current=null,U.current=0}},[F,X,h,M,B,Ze,Ft]),(0,f.useEffect)($,[$]),(0,f.useEffect)(()=>(window.addEventListener(`mini-forum-updated`,$),()=>window.removeEventListener(`mini-forum-updated`,$)),[$]),(0,f.useEffect)(()=>{let e=e=>{R(`没人来回帖：`+String(e.detail||``).slice(0,80)),setTimeout(()=>R(``),6e3)};return window.addEventListener(he,e),()=>window.removeEventListener(he,e)},[]),(0,f.useEffect)(()=>{let e=()=>it(be()),t=()=>{let e=xe(G);vt(e),bt(e)},n=()=>st(e=>e+1);return window.addEventListener(se,e),window.addEventListener(ee,n),window.addEventListener(ge,t),()=>{window.removeEventListener(se,e),window.removeEventListener(ee,n),window.removeEventListener(ge,t)}},[]);let It=e=>{L.has(e)||at(t=>{let n=new Set(t);return n.add(e),Me(n),n})};(0,f.useEffect)(()=>{if(!j||r===null||pt.current||localStorage.getItem(`mini_forum_seed_v2`)||r.some(e=>e.by!==`me`)||r.length>=3)return;let e=ne(),t=te();!c(e)||!t.length||(pt.current=!0,Ke(!0),(async()=>{try{let n=await Ae(e,t);if(!m()){pt.current=!1;return}for(let e of n)await ce(e.role.id,e.role.name||`TA`,e.title,e.text,e.category);n.length&&(localStorage.setItem(`mini_forum_seed_v2`,`1`),await _e().then(a))}catch{}finally{Ke(!1)}})())},[r,j]);let Lt=async()=>{let e=y.trim(),t=x.trim();if(!(E||!e||!t)){Ne(!0);try{let n=await ce(`me`,K,e,t,ze);De(``),S(``),g(!1),await $(),p(n.id),W(`发出去了`),zt(n.id)}catch{W(`帖子没能保存，请再试一次`)}finally{Ne(!1)}}},Rt=async e=>{let t=await pe(e);t&&a(n=>n?.map(n=>n.id===e?t:n)||n)},zt=e=>Se(e),Bt=async()=>{let e=Ie.trim(),t=X;if(!e||!t||Ue.current)return;if(O&&!t.replies.some(e=>e.id===O.id)){k(null),W(`这条评论已被删除，请重新选择回复对象`);return}let n=O||t;Ue.current=!0,He(!0);try{let r=await le(t.id,{by:`me`,name:K,text:e,to:n.name,toBy:n.by,replyToId:O?.id||`thread`});if(!r){W(`这个帖子已被删除`);return}Le(``),k(null),$(),Se(t.id,r.replies[r.replies.length-1].id)}catch{W(`回复没能保存，文字还在，可以重试`)}finally{Ue.current=!1,He(!1)}};(0,f.useEffect)(()=>{if(r===null||localStorage.getItem(`mini_forum_likes_v1`))return;let e=r.filter(e=>e.by!==`me`);if(!e.length||!e.every(e=>e.likes===0)){localStorage.setItem(`mini_forum_likes_v1`,`1`);return}localStorage.setItem(`mini_forum_likes_v1`,`1`),Promise.all(e.map(e=>de(e.id,2+Math.floor(Math.random()*74)))).then(()=>$())},[r,$]),(0,f.useEffect)(()=>{if(!j||r===null||z.current)return;z.current=!0;let e=Number(localStorage.getItem(`mini_forum_npc_last_v1`)||`0`),t=r.filter(e=>e.by===`npc`).length,n=Date.now()-e;if(!(t<3||n>72e5||n>27e5&&Math.random()<.28))return;let i=!1,a=window.setTimeout(()=>{i=!0,m()&&Pt(!0)},900+Math.random()*1800);return()=>{i||(window.clearTimeout(a),z.current=!1)}},[r,Pt,j]);let Vt=async(e,t)=>{let n=t.by===`me`?``:t.by===`npc`?`这是路人发的，`:`TA 发的这层删了，TA 也就看不到了。`;window.confirm(`${n}删掉「${Y(t.by,t.name)}」这一层？`)&&(await ue(e.id,t.id),$())},Ht=async e=>{let t=e.by===`me`?``:e.by===`npc`?`这是路人发的帖，`:`TA 发的帖删了，TA 也就看不到了。`;window.confirm(`${t}把「${e.title}」整栋楼删掉？`)&&(await ve(e.id),p(``),$())};return(0,_.jsxs)(`div`,{className:`app-screen fm${X?` fm-reading`:` fm-browsing`} fm-section-${F}`,onFocusCapture:Qe,onBlurCapture:$e,children:[(0,_.jsx)(`header`,{className:`topbar`,children:X?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`button`,{className:`topbar-back`,onClick:Mt,"aria-label":`回版面`,children:(0,_.jsx)(v,{name:`back`,size:20})}),(0,_.jsx)(`div`,{className:`topbar-title`,children:(0,_.jsx)(`span`,{className:`fm-top-title`,children:`帖子`})}),(0,_.jsx)(`div`,{className:`topbar-right`,children:(0,_.jsx)(`button`,{className:`topbar-act`,onClick:()=>void Ht(X),"aria-label":`删帖`,children:(0,_.jsx)(v,{name:`trash`,size:16})})})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`button`,{className:`topbar-back`,onClick:e,"aria-label":`返回`,children:(0,_.jsx)(v,{name:`back`,size:20})}),(0,_.jsx)(`div`,{className:`topbar-title fm-brand`,children:(0,_.jsx)(`span`,{className:`fm-top-title`,children:F===`home`?`论坛`:F===`friends`?`好友`:F===`messages`?`消息`:`我`})}),(0,_.jsxs)(`div`,{className:`topbar-right`,children:[F===`me`&&(0,_.jsx)(`button`,{className:`topbar-act`,onClick:()=>N(!0),"aria-label":`论坛设置`,children:(0,_.jsx)(v,{name:`menu`,size:20})}),F===`home`&&(0,_.jsx)(`button`,{className:`topbar-act`,disabled:B,onClick:()=>void Ft(),"aria-label":`刷新帖子`,children:(0,_.jsx)(v,{name:`refresh`,size:18})}),F===`home`&&(0,_.jsx)(`button`,{className:`topbar-act fm-search-act`,onClick:()=>Je(e=>!e),"aria-label":`搜索帖子`,children:(0,_.jsx)(v,{name:`search`,size:18})})]})]})}),M&&(0,_.jsx)(`div`,{className:`fm-settings-mask`,onClick:()=>N(!1),children:(0,_.jsxs)(`aside`,{className:`fm-settings-panel`,role:`dialog`,"aria-modal":`true`,"aria-label":`论坛设置`,onClick:e=>e.stopPropagation(),children:[(0,_.jsxs)(`header`,{children:[(0,_.jsx)(`h2`,{children:`论坛设置`}),(0,_.jsx)(`button`,{onClick:()=>N(!1),"aria-label":`关闭设置`,children:(0,_.jsx)(v,{name:`close`,size:20})})]}),(0,_.jsxs)(`div`,{className:`fm-setting-row`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`b`,{children:`自动刷新帖子`}),(0,_.jsx)(`span`,{children:j?`自动与手动刷新都可用`:`仅手动刷新新帖子`})]}),(0,_.jsx)(`button`,{className:`fm-refresh-switch${j?` on`:``}`,role:`switch`,"aria-checked":j,"aria-label":`自动刷新帖子`,onClick:()=>we(!j),children:(0,_.jsx)(`i`,{})})]}),(0,_.jsx)(`p`,{children:`开启后，每次进入论坛检查一次：路人帖子不足 3 篇时补充；距上次更新超过 45 分钟，有 28% 概率补充；超过 2 小时则补充一批。`}),(0,_.jsx)(`p`,{children:`关闭后不自动补充新帖子。在首页下拉仍可手动刷新，不受上述间隔限制。`}),(0,_.jsx)(`small`,{children:`发帖和回复后的评论互动照常进行。`})]})}),(0,_.jsxs)(`div`,{ref:_t,className:`app-body fm-body${X?` is-veiled`:``}`,inert:!!X,children:[!X&&F===`home`&&(0,_.jsx)(`div`,{className:`fm-pull-refresh${B?` is-refreshing`:``}${V>=48?` is-ready`:``}`,style:{height:B?42:V},"aria-live":`polite`,children:(0,_.jsx)(`span`,{children:B?`正在看看有什么新鲜事…`:V>=48?`松开刷新新帖子`:V>8?`下拉刷新`:``})}),(0,_.jsxs)(`div`,{className:`fm-home-view`,children:[qe&&(0,_.jsxs)(`div`,{className:`fm-search`,children:[(0,_.jsx)(v,{name:`search`,size:16}),(0,_.jsx)(`input`,{value:A,onChange:e=>Ye(e.target.value),placeholder:`搜索帖子、回复或名字`,autoFocus:!0}),(0,_.jsx)(`button`,{onClick:()=>{Ye(``),Je(!1)},children:`取消`})]}),!A&&St.length>0&&(0,_.jsxs)(`section`,{className:`fm-conversations`,"aria-label":`正在聊`,children:[(0,_.jsxs)(`div`,{className:`fm-section-label`,children:[(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`i`,{}),`正在聊`]}),(0,_.jsx)(`small`,{children:`滑动看看`})]}),(0,_.jsx)(`div`,{className:`fm-highlights`,children:St.map((e,t)=>(0,_.jsxs)(`button`,{className:`fm-highlight`,onClick:t=>Q(e,t.currentTarget),children:[(0,_.jsxs)(`span`,{className:`fm-highlight-index`,children:[`0`,t+1,(0,_.jsx)(`small`,{children:C(e)})]}),(0,_.jsx)(`strong`,{children:e.title}),(0,_.jsxs)(`span`,{className:`fm-highlight-foot`,children:[(0,_.jsx)(`span`,{className:`fm-faces`,children:[...new Map(e.replies.map(e=>[e.by+e.name,e])).values()].slice(-3).map(e=>(0,_.jsx)(b,{by:e.by,name:e.name,size:22},e.id))}),(0,_.jsxs)(`span`,{children:[e.replies.length,` 条回响 `,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})]})]},e.id))})]}),(0,_.jsxs)(`div`,{className:`fm-feed-controls`,children:[(0,_.jsxs)(`nav`,{className:`fm-feed-tabs`,"aria-label":`浏览范围`,children:[[[`latest`,`最新`],[`hot`,`热议`],[`mine`,`我参与的`]].map(([e,t])=>(0,_.jsx)(`button`,{"aria-pressed":P===e,className:P===e?`selected`:``,onClick:()=>et(e),children:t},e)),(0,_.jsxs)(`span`,{children:[xt.length,` 篇`]})]}),(0,_.jsx)(`nav`,{className:`fm-category-pills`,"aria-label":`帖子分类`,children:Oe.map(e=>(0,_.jsx)(`button`,{"aria-pressed":D===e,className:D===e?`selected`:``,onClick:()=>Re(e),children:e},e))})]}),r===null?(0,_.jsx)(`div`,{className:`fm-loading`,"aria-label":`正在加载`,children:[1,2,3].map(e=>(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`i`,{}),(0,_.jsx)(`span`,{}),(0,_.jsx)(`span`,{})]},e))}):(0,_.jsxs)(`div`,{className:`fm-feed`,children:[xt.map(e=>{let t=w(e),n=e.replies[e.replies.length-1];return(0,_.jsxs)(`article`,{className:`fm-entry`,children:[(0,_.jsxs)(`div`,{className:`fm-entry-author`,children:[(0,_.jsx)(b,{by:e.by,name:e.name,size:33}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`b`,{children:Y(e.by,e.name)}),(0,_.jsx)(`span`,{children:l(e.ts)})]}),(0,_.jsx)(`small`,{children:C(e)})]}),(0,_.jsxs)(`button`,{className:`fm-entry-content${t?` with-image`:``}`,onClick:t=>Q(e,t.currentTarget),children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h2`,{children:e.title}),(0,_.jsx)(`p`,{children:T(e.text)})]}),t&&(0,_.jsx)(`img`,{src:t,alt:`帖子配图`,loading:`lazy`})]}),n&&(0,_.jsxs)(`button`,{className:`fm-recent-reply`,onClick:t=>Q(e,t.currentTarget),children:[(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`↳`}),(0,_.jsx)(`b`,{children:Y(n.by,n.name)}),(0,_.jsx)(`span`,{children:n.text})]}),(0,_.jsxs)(`div`,{className:`fm-entry-actions`,children:[(0,_.jsxs)(`button`,{className:e.likedByMe?`liked`:``,"aria-label":e.likedByMe?`取消点赞`:`点赞`,"aria-pressed":e.likedByMe,onClick:()=>void Rt(e.id),children:[(0,_.jsx)(v,{name:`heart`,size:18}),e.likes||`喜欢`]}),(0,_.jsxs)(`button`,{onClick:t=>Q(e,t.currentTarget),"aria-label":`查看 ${e.replies.length} 条回复`,children:[(0,_.jsx)(v,{name:`comment`,size:18}),e.replies.length||`聊聊`]}),(0,_.jsxs)(`button`,{className:`fm-read-post`,onClick:t=>Q(e,t.currentTarget),children:[`读一读 `,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})]})]},e.id)}),xt.length===0&&(0,_.jsxs)(`div`,{className:`fm-zero`,children:[(0,_.jsx)(v,{name:`comment`,size:32}),(0,_.jsx)(`h2`,{children:Ge?`新鲜事正在路上`:A?`没找到这段话`:P===`mine`?`你的足迹，从这里开始`:`这里还很安静`}),(0,_.jsx)(`p`,{children:Ge?`第一批帖子写好后会出现在这里。`:A?`换个关键词，或看看其他分类。`:P===`mine`?`发过的帖子、回复过的话题都会留在这里。`:`分享一件小事，让话题慢慢开始。`}),A||D!==`全部`||P!==`latest`?(0,_.jsx)(`button`,{onClick:()=>{Ye(``),Re(`全部`),et(`latest`)},children:`看看全部帖子`}):(0,_.jsx)(`button`,{onClick:()=>g(!0),children:`写第一篇帖子`})]}),xt.length>0&&(0,_.jsx)(`p`,{className:`fm-feed-end`,children:`就逛到这里，等下一件新鲜事。`})]})]}),F===`friends`&&(0,_.jsxs)(`section`,{className:`fm-tab-page fm-friends-page`,children:[(0,_.jsxs)(`div`,{className:`fm-list-head`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{children:`FRIENDS FEED`}),(0,_.jsx)(`h1`,{children:`好友动态`})]}),(0,_.jsxs)(`small`,{children:[Tt.length,` 篇`]})]}),(0,_.jsx)(`div`,{className:`fm-friend-feed`,children:Tt.length?Tt.map(e=>{let t=w(e),n=e.replies[e.replies.length-1];return(0,_.jsxs)(`article`,{className:`fm-entry fm-friend-entry`,children:[(0,_.jsxs)(`div`,{className:`fm-entry-author`,children:[(0,_.jsx)(b,{by:e.by,name:e.name,size:36}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`b`,{children:Y(e.by,e.name)}),(0,_.jsx)(`span`,{children:l(e.ts)})]}),(0,_.jsx)(`small`,{children:C(e)})]}),(0,_.jsxs)(`button`,{className:`fm-entry-content${t?` with-image`:``}`,onClick:t=>Q(e,t.currentTarget),children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h2`,{children:e.title}),(0,_.jsx)(`p`,{children:T(e.text)})]}),t&&(0,_.jsx)(`img`,{src:t,alt:`帖子配图`,loading:`lazy`})]}),n&&(0,_.jsxs)(`button`,{className:`fm-recent-reply`,onClick:t=>Q(e,t.currentTarget),children:[(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`↳`}),(0,_.jsx)(`b`,{children:Y(n.by,n.name)}),(0,_.jsx)(`span`,{children:n.text})]}),(0,_.jsxs)(`div`,{className:`fm-entry-actions`,children:[(0,_.jsxs)(`button`,{className:e.likedByMe?`liked`:``,onClick:()=>void Rt(e.id),children:[(0,_.jsx)(v,{name:`heart`,size:18}),e.likes||`喜欢`]}),(0,_.jsxs)(`button`,{onClick:t=>Q(e,t.currentTarget),children:[(0,_.jsx)(v,{name:`comment`,size:18}),e.replies.length||`聊聊`]}),(0,_.jsxs)(`button`,{className:`fm-read-post`,onClick:t=>Q(e,t.currentTarget),children:[`读一读 `,(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})]})]},e.id)}):(0,_.jsxs)(`div`,{className:`fm-tab-empty`,children:[(0,_.jsx)(v,{name:`users`,size:30}),(0,_.jsx)(`b`,{children:`好友还没发过帖子`}),(0,_.jsx)(`span`,{children:`这里只收角色发的论坛内容，路人不会混进来。`})]})})]}),F===`messages`&&(0,_.jsxs)(`section`,{className:`fm-tab-page fm-messages-page`,children:[(0,_.jsxs)(`div`,{className:`fm-list-head fm-message-head`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{children:`INBOX`}),(0,_.jsx)(`h1`,{children:`消息`})]}),(0,_.jsx)(`small`,{children:jt?`${jt} 条未读`:`都看完了`})]}),(0,_.jsxs)(`div`,{className:`fm-message-tabs`,children:[(0,_.jsxs)(`button`,{className:tt===`activity`?`on`:``,onClick:()=>nt(`activity`),children:[`互动`,kt>0&&(0,_.jsx)(`i`,{children:kt})]}),(0,_.jsxs)(`button`,{className:tt===`dm`?`on`:``,onClick:()=>nt(`dm`),children:[`私信`,At>0&&(0,_.jsx)(`i`,{children:At})]})]}),tt===`activity`?(0,_.jsx)(`div`,{className:`fm-inbox-list`,children:Ot.length?Ot.map(e=>{let t=!L.has(e.id);return e.kind===`follow`?(0,_.jsxs)(`button`,{className:`fm-inbox-item${t?` unread`:``}`,onClick:()=>It(e.id),children:[(0,_.jsx)(b,{by:e.follow.by,name:e.follow.name,size:40}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`b`,{children:e.follow.name}),(0,_.jsxs)(`span`,{children:[`关注了你 · `,l(e.follow.ts)]}),(0,_.jsx)(`p`,{children:`开始关注你的论坛动态`})]}),t&&(0,_.jsx)(`i`,{className:`fm-unread-dot`})]},e.id):(0,_.jsxs)(`button`,{className:`fm-inbox-item${t?` unread`:``}`,onClick:t=>{It(e.id),Q(e.thread,t.currentTarget)},children:[(0,_.jsx)(b,{by:e.reply.by,name:e.reply.name,size:40}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`b`,{children:e.reply.name}),(0,_.jsxs)(`span`,{children:[e.reply.toBy===`me`?`回复了你`:`评论了你的帖子`,` · `,l(e.reply.ts)]}),(0,_.jsx)(`p`,{children:e.reply.text}),(0,_.jsxs)(`small`,{children:[`《`,e.thread.title,`》`]})]}),t?(0,_.jsx)(`i`,{className:`fm-unread-dot`}):(0,_.jsx)(`i`,{className:`fm-chevron`,children:`›`})]},e.id)}):(0,_.jsxs)(`div`,{className:`fm-tab-empty`,children:[(0,_.jsx)(v,{name:`inbox`,size:30}),(0,_.jsx)(`b`,{children:`还没有互动消息`}),(0,_.jsx)(`span`,{children:`关注、评论和回复都会收在这里。`})]})}):(0,_.jsx)(`div`,{className:`fm-dm-list`,children:Et.length?Et.map(e=>{let t=o(e.id);return(0,_.jsxs)(`button`,{className:`fm-dm-item${t?` unread`:``}`,onClick:()=>n?.(e.id),children:[(0,_.jsx)(ae,{roleId:e.id,name:e.name,size:44}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`b`,{children:e.name||`TA`}),(0,_.jsx)(`span`,{children:t?`${t} 条新消息`:`发一条私信`})]}),t>0?(0,_.jsx)(`i`,{children:Math.min(t,99)}):(0,_.jsx)(`em`,{children:`›`})]},e.id)}):(0,_.jsxs)(`div`,{className:`fm-tab-empty`,children:[(0,_.jsx)(v,{name:`inbox`,size:30}),(0,_.jsx)(`b`,{children:`还没有可以私信的人`}),(0,_.jsx)(`span`,{children:`添加角色后，就能从这里直接去聊天。`})]})})]}),F===`me`&&(0,_.jsxs)(`section`,{className:`fm-tab-page fm-me-page`,children:[(0,_.jsxs)(`div`,{className:`fm-profile-editorial`,children:[(0,_.jsx)(`div`,{className:`fm-profile-kicker`,children:`PROFILE / FORUM ID`}),(0,_.jsxs)(`div`,{className:`fm-profile-identity`,children:[(0,_.jsxs)(`div`,{className:`fm-profile-namebox`,children:[(0,_.jsxs)(`div`,{className:`fm-profile-name-row`,children:[(0,_.jsx)(`h1`,{children:K}),(0,_.jsx)(`button`,{className:`fm-alias-edit`,onClick:()=>{bt(K),q(!0)},children:`编辑网名`})]}),(0,_.jsxs)(`p`,{children:[`论坛身份 · 角色卡仍是「`,G,`」`]})]}),(0,_.jsx)(ie,{size:68})]}),yt&&(0,_.jsxs)(`div`,{className:`fm-alias-panel`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{children:`FORUM NAME`}),(0,_.jsx)(`small`,{children:`只改变论坛显示名，不会改你的角色卡姓名。`})]}),(0,_.jsx)(`input`,{value:J,maxLength:20,autoFocus:!0,onChange:e=>bt(e.target.value),onKeyDown:e=>{if(e.key===`Enter`&&!e.nativeEvent.isComposing){let e=me(J,G);vt(e),q(!1),W(`论坛网名改好了`)}}}),(0,_.jsxs)(`div`,{className:`fm-alias-actions`,children:[(0,_.jsx)(`button`,{onClick:()=>q(!1),children:`取消`}),(0,_.jsx)(`button`,{className:`save`,disabled:!J.trim(),onClick:()=>{let e=me(J,G);vt(e),q(!1),W(`论坛网名改好了`)},children:`保存`})]})]}),(0,_.jsx)(`div`,{className:`fm-profile-rule`}),(0,_.jsxs)(`div`,{className:`fm-profile-stats-line`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`b`,{children:Z.length}),(0,_.jsx)(`span`,{children:`POSTS`}),(0,_.jsx)(`small`,{children:`帖子`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`b`,{children:Ct}),(0,_.jsx)(`span`,{children:`REPLIES`}),(0,_.jsx)(`small`,{children:`回复`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`b`,{children:wt}),(0,_.jsx)(`span`,{children:`LIKES`}),(0,_.jsx)(`small`,{children:`获赞`})]})]})]}),(0,_.jsxs)(`div`,{className:`fm-archive-head`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{children:`POST ARCHIVE`}),(0,_.jsx)(`h2`,{children:`帖子存档`})]}),(0,_.jsx)(`small`,{children:Z.length.toString().padStart(2,`0`)})]}),(0,_.jsx)(`div`,{className:`fm-profile-posts editorial`,children:Z.length?Z.map((e,t)=>(0,_.jsxs)(`button`,{onClick:t=>Q(e,t.currentTarget),children:[(0,_.jsx)(`span`,{className:`fm-post-index`,children:String(t+1).padStart(2,`0`)}),(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`small`,{children:[C(e),` · `,l(e.ts)]}),(0,_.jsx)(`b`,{children:e.title}),(0,_.jsx)(`p`,{children:T(e.text)})]}),(0,_.jsxs)(`span`,{className:`fm-post-replies`,children:[e.replies.length,` ↗`]})]},e.id)):(0,_.jsxs)(`div`,{className:`fm-tab-empty`,children:[(0,_.jsx)(v,{name:`user`,size:30}),(0,_.jsx)(`b`,{children:`还没发过帖子`}),(0,_.jsx)(`span`,{children:`中间的加号就是你的第一篇。`})]})})]})]}),!X&&!h&&!Ze&&!M&&(0,_.jsxs)(`nav`,{className:`fm-bottom-nav`,"aria-label":`论坛导航`,children:[(0,_.jsxs)(`button`,{className:F===`home`?`active`:``,onClick:()=>I(`home`),"aria-label":`首页`,children:[(0,_.jsx)(v,{name:`home`,size:21}),(0,_.jsx)(`span`,{children:`首页`})]}),(0,_.jsxs)(`button`,{className:F===`friends`?`active`:``,onClick:()=>I(`friends`),"aria-label":`好友`,children:[(0,_.jsx)(v,{name:`users`,size:21}),(0,_.jsx)(`span`,{children:`好友`})]}),(0,_.jsx)(`button`,{className:`fm-nav-compose`,onClick:()=>g(!0),"aria-label":`发布帖子`,children:(0,_.jsx)(v,{name:`plus`,size:24})}),(0,_.jsxs)(`button`,{className:F===`messages`?`active`:``,onClick:()=>I(`messages`),"aria-label":`消息`,children:[(0,_.jsxs)(`span`,{className:`fm-nav-icon`,children:[(0,_.jsx)(v,{name:`inbox`,size:21}),jt>0&&(0,_.jsx)(`i`,{children:Math.min(jt,99)})]}),(0,_.jsx)(`span`,{children:`消息`})]}),(0,_.jsxs)(`button`,{className:F===`me`?`active`:``,onClick:()=>I(`me`),"aria-label":`我`,children:[(0,_.jsx)(v,{name:`user`,size:21}),(0,_.jsx)(`span`,{children:`我`})]})]}),X&&(0,_.jsx)(`section`,{className:`fm-detail${ut?` closing`:``}`,style:{"--fm-card-y":`${ct}px`},onClick:Mt,children:(0,_.jsxs)(`div`,{className:`fm-thread`,onClick:e=>e.stopPropagation(),children:[(0,_.jsxs)(`div`,{className:`fm-main`,children:[(0,_.jsxs)(`div`,{className:`fm-floor-head`,children:[(0,_.jsx)(b,{by:X.by,name:X.name,size:34}),(0,_.jsxs)(`div`,{className:`fm-floor-who`,children:[(0,_.jsx)(`b`,{children:Y(X.by,X.name)}),(0,_.jsxs)(`span`,{children:[C(X),` · `,l(X.ts)]})]})]}),(0,_.jsx)(`h2`,{className:`fm-title`,children:(0,_.jsx)(re,{text:X.title})}),(0,_.jsx)(`div`,{className:`fm-text`,children:(0,_.jsx)(re,{text:T(X.text)})}),w(X)&&(0,_.jsx)(`img`,{className:`fm-main-image`,src:w(X),alt:`帖子图片`}),(0,_.jsxs)(`div`,{className:`fm-main-actions`,children:[(0,_.jsxs)(`button`,{className:X.likedByMe?`fm-like on`:`fm-like`,onClick:()=>void Rt(X.id),"aria-label":X.likedByMe?`取消点赞`:`点赞`,children:[(0,_.jsx)(v,{name:`heart`,size:17}),X.likes]}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(v,{name:`comment`,size:17}),X.replies.length]})]})]}),(0,_.jsxs)(`div`,{className:`fm-sect`,children:[`全部回复 · `,X.replies.length]}),X.replies.length===0&&(0,_.jsx)(`div`,{className:`fm-noresp`,children:`还没有人说话——你来坐一楼`}),X.replies.map((e,t)=>(0,_.jsxs)(`div`,{className:`fm-floor`,style:{animationDelay:`${Math.min(t,8)*45+110}ms`},children:[(0,_.jsxs)(`div`,{className:`fm-floor-head`,children:[(0,_.jsx)(b,{by:e.by,name:e.name,size:26}),(0,_.jsxs)(`div`,{className:`fm-floor-who`,children:[(0,_.jsxs)(`b`,{children:[Y(e.by,e.name),ye(e,X)&&(0,_.jsx)(`i`,{className:`fm-badge`,children:`楼主`})]}),(0,_.jsx)(`span`,{children:l(e.ts)})]}),(0,_.jsx)(`button`,{className:`fm-floor-reply`,onClick:()=>{k(e),We.current?.focus()},"aria-label":`回复 ${Y(e.by,e.name)} 的第 ${t+2} 楼`,children:`回复`}),(0,_.jsxs)(`span`,{className:`fm-floor-n`,children:[t+2,`楼`]}),(0,_.jsx)(`button`,{className:`fm-floor-del`,onClick:()=>void Vt(X,e),"aria-label":`删掉这层`,children:(0,_.jsx)(v,{name:`trash`,size:13})})]}),(0,_.jsxs)(`div`,{className:`fm-floor-text`,children:[e.to&&(0,_.jsxs)(`span`,{className:`fm-floor-to`,children:[`回复 @`,e.toBy===`me`?K:e.to,`：`]}),(0,_.jsx)(re,{text:e.text})]})]},e.id)),(0,_.jsx)(`div`,{style:{height:66}})]})}),X&&(0,_.jsxs)(`div`,{className:`fm-comp fm-comp-targeted`,children:[O&&(0,_.jsxs)(`div`,{className:`fm-reply-target`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`b`,{children:[`回复 @`,Y(O.by,O.name)]}),(0,_.jsx)(`span`,{children:O.text})]}),(0,_.jsx)(`button`,{"aria-label":`取消定向回复`,onClick:()=>k(null),children:(0,_.jsx)(v,{name:`close`,size:16})})]}),(0,_.jsx)(`input`,{ref:We,className:`fm-comp-in`,value:Ie,disabled:Ve,placeholder:O?`回复 @${Y(O.by,O.name)}`:`回复楼主 @${Y(X.by,X.name)}`,autoComplete:`off`,spellCheck:!1,onChange:e=>Le(e.target.value),onKeyDown:e=>{e.key===`Enter`&&!e.nativeEvent.isComposing&&Bt()}}),(0,_.jsx)(`button`,{className:`fm-comp-go`,disabled:!Ie.trim()||Ve,onClick:()=>void Bt(),"aria-label":`发送`,children:(0,_.jsx)(v,{name:`send`,size:17})})]}),h&&(0,_.jsxs)(`div`,{className:`fm-write`,children:[(0,_.jsxs)(`header`,{className:`fm-write-head`,children:[(0,_.jsx)(`button`,{onClick:()=>g(!1),"aria-label":`取消发帖`,children:(0,_.jsx)(v,{name:`close`,size:20})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{children:`写给这里的人`}),(0,_.jsx)(`b`,{children:`发布帖子`})]}),(0,_.jsx)(`button`,{className:`fm-write-publish`,disabled:!y.trim()||!x.trim()||E,onClick:()=>void Lt(),children:E?`发送中`:`发布`})]}),(0,_.jsxs)(`main`,{className:`fm-write-paper`,children:[(0,_.jsxs)(`div`,{className:`fm-write-stamp`,children:[(0,_.jsx)(v,{name:`wave`,size:18}),(0,_.jsx)(`span`,{children:`大家都能看见`})]}),(0,_.jsx)(`div`,{className:`fm-write-cats`,"aria-label":`选择分类`,children:d.map(e=>(0,_.jsx)(`button`,{className:ze===e?`on`:``,onClick:()=>Be(e),children:e},e))}),(0,_.jsx)(`input`,{className:`fm-write-title`,value:y,maxLength:40,placeholder:`这一帖，想说什么？`,autoFocus:!0,onChange:e=>De(e.target.value)}),(0,_.jsx)(`div`,{className:`fm-write-rule`,children:(0,_.jsx)(`span`,{})}),(0,_.jsx)(`textarea`,{className:`fm-write-body`,maxLength:2e3,value:x,placeholder:`写下正文。这里的人会看见，也可能留下回声。`,onChange:e=>S(e.target.value)}),(0,_.jsxs)(`footer`,{className:`fm-write-foot`,children:[(0,_.jsx)(`span`,{children:K}),(0,_.jsxs)(`span`,{children:[x.length,` / 2000`]})]})]})]}),ft&&(0,_.jsx)(`div`,{className:`toast`,children:ft}),(0,_.jsx)(Pe,{}),(0,_.jsx)(`style`,{children:Fe}),(0,_.jsx)(`style`,{children:`
        /* Android: opening a thread used to animate several full-screen blur layers at once.
           Keep the card motion, but make the transition compositor-only. */
        .fm.fm-reading::before { display:none !important; }
        .fm.fm-reading>.topbar {
          background:rgba(250,251,253,.97) !important;
          -webkit-backdrop-filter:none !important; backdrop-filter:none !important;
        }
        .fm .fm-body { overflow-anchor:none; overscroll-behavior-y:contain; transition:opacity .2s ease, transform .24s cubic-bezier(.2,.8,.2,1) !important; }
        .fm-pull-refresh { height:0; display:flex; align-items:center; justify-content:center; overflow:hidden; color:#aaa1ac; font-size:10px; letter-spacing:.04em; transition:height .16s ease,color .16s ease; }
        .fm-pull-refresh>span { transform:translateY(-1px); }
        .fm-pull-refresh.is-ready { color:#8d7286; }
        .fm-pull-refresh.is-refreshing>span { animation:fm-pull-breathe 1.05s ease-in-out infinite; }
        @keyframes fm-pull-breathe { 50% { opacity:.42; } }
        .fm .fm-body.is-veiled { filter:none !important; opacity:.14 !important; transform:scale(.992) !important; }
        .fm.fm-reading .fm-detail {
          background:rgba(247,248,252,.965) !important;
          -webkit-backdrop-filter:none !important; backdrop-filter:none !important;
          animation:fm-detail-lite-in .2s ease-out both !important;
          will-change:opacity;
        }
        /* 2026-10-17 她：安卓包点进帖子，楼主头像被顶栏压住。帖子层是 fixed、按屏幕顶量 58，
           安卓包顶栏整体往下让了电量栏那段，这里跟着让。 */
        html.apk-edge .fm .fm-detail { top:calc(58px + var(--apk-sat, 0px)) !important; }
        @keyframes fm-detail-lite-in { from { opacity:0; } to { opacity:1; } }
        .fm.fm-reading .fm-detail.closing { animation:fm-detail-lite-out .18s ease-in both !important; }
        @keyframes fm-detail-lite-out { to { opacity:0; } }
        .fm.fm-reading .fm-main {
          -webkit-backdrop-filter:none !important; backdrop-filter:none !important;
          background:rgba(255,255,255,.985) !important;
          animation:fm-card-open-lite .24s cubic-bezier(.2,.82,.25,1) both !important;
          will-change:transform,opacity;
          transform:translateZ(0);
        }
        @keyframes fm-card-open-lite {
          from { transform:translate3d(0,var(--fm-card-y),0) scale(.97); opacity:.72; }
          to { transform:translate3d(0,0,0) scale(1); opacity:1; }
        }
        .fm.fm-reading .fm-detail.closing .fm-main { animation:fm-card-close-lite .18s ease-in both !important; }
        @keyframes fm-card-close-lite {
          to { transform:translate3d(0,var(--fm-card-y),0) scale(.98); opacity:.3; }
        }
        .fm.fm-reading .fm-floor {
          -webkit-backdrop-filter:none !important; backdrop-filter:none !important;
          opacity:1 !important; animation:none !important;
          background:rgba(255,255,255,.78) !important;
        }
        .fm.fm-reading .fm-comp {
          -webkit-backdrop-filter:none !important; backdrop-filter:none !important;
          background:rgba(255,255,255,.97) !important;
        }
        .fm.fm-reading .fm-comp-in { -webkit-backdrop-filter:none !important; backdrop-filter:none !important; }
      `}),(0,_.jsx)(`style`,{children:`
        .fm-floor-reply { border:0; background:transparent; padding:7px; color:var(--fm-accent,var(--hot)); font:inherit; font-size:11px; }
        .fm-comp-targeted { flex-wrap:wrap; }
        .fm-reply-target { flex:0 0 100%; display:flex; align-items:center; gap:10px; padding:3px 4px 7px; color:var(--ink); min-width:0; }
        .fm-reply-target>div { flex:1; min-width:0; display:flex; flex-direction:column; gap:4px; }
        .fm-reply-target b { font-size:11px; font-weight:500; }
        .fm-reply-target span { font-size:11px; opacity:.55; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .fm-reply-target button { flex:none; border:0; background:none; padding:7px; color:inherit; }
        .fm-thread { padding-bottom:125px; }
      `}),(0,_.jsx)(`style`,{children:`
        .fm.fm-browsing .fm-body { padding-bottom:112px !important; }
        .fm-section-friends .fm-home-view,.fm-section-messages .fm-home-view,.fm-section-me .fm-home-view { display:none; }
        .fm-section-home .fm-home-view { padding-top:10px; }
        .fm-settings-mask { position:fixed; inset:0; z-index:90; background:rgba(35,32,41,.22); backdrop-filter:blur(3px); display:flex; justify-content:flex-end; }
        .fm-settings-panel { width:min(340px,88vw); height:100%; box-sizing:border-box; padding:calc(24px + env(safe-area-inset-top,0px)) 24px 30px; background:#faf9fc; box-shadow:-12px 0 40px rgba(35,32,41,.09); color:#39363e; overflow:auto; }
        .fm-settings-panel header { display:flex; align-items:center; justify-content:space-between; margin-bottom:30px; }
        .fm-settings-panel h2 { margin:0; font-size:19px; font-weight:600; }
        .fm-settings-panel header button { border:0; background:transparent; color:inherit; padding:8px; }
        .fm-setting-row { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:18px 0; border-bottom:1px solid #eae7ee; }
        .fm-setting-row b,.fm-setting-row span { display:block; }
        .fm-setting-row b { font-size:14px; font-weight:600; }
        .fm-setting-row span { margin-top:7px; font-size:11px; color:#98919e; }
        .fm-refresh-switch { flex:none; width:44px; height:26px; border:0; padding:3px; border-radius:20px; background:#ddd9e1; transition:background .2s; }
        .fm-refresh-switch i { display:block; width:20px; height:20px; border-radius:50%; background:white; box-shadow:0 2px 5px #0001; transition:transform .2s; }
        .fm-refresh-switch.on { background:#947583; }
        .fm-refresh-switch.on i { transform:translateX(18px); }
        .fm-settings-panel p { margin:18px 0; font-size:12px; line-height:1.9; color:#77717e; }
        .fm-settings-panel small { font-size:11px; color:#a19aa7; }
        .fm-bottom-nav { position:fixed; z-index:24; left:14px; right:14px; bottom:calc(10px + var(--sab)); height:68px; display:grid; grid-template-columns:1fr 1fr 68px 1fr 1fr; align-items:center; padding:0 10px; border:1px solid rgba(76,69,81,.07); border-radius:23px; background:rgba(255,255,255,.97); box-shadow:0 13px 34px rgba(63,55,70,.10); color:#97909a; }
        .fm-bottom-nav button { border:0; background:none; color:inherit; font-family:inherit; -webkit-tap-highlight-color:transparent; }
        .fm-bottom-nav button:not(.fm-nav-compose) { min-width:0; height:56px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; font-size:8.5px; }
        .fm-bottom-nav button.active { color:#39363e; }
        .fm-nav-compose { position:relative; align-self:start; justify-self:center; top:-19px; width:58px; height:58px; display:grid; place-items:center; border-radius:50% !important; background:#37343d !important; color:#fff !important; box-shadow:0 9px 22px rgba(45,40,50,.22),0 0 0 7px #faf9fc; }
        .fm-nav-compose:active { transform:scale(.94); }
        .fm-nav-icon { position:relative; display:grid; place-items:center; }
        .fm-nav-icon>i { position:absolute; right:-10px; top:-7px; min-width:15px; height:15px; padding:0 3px; display:grid; place-items:center; border-radius:8px; background:#b48398; color:white; border:2px solid white; font:700 8px/1 sans-serif; font-style:normal; }
        .fm-tab-page { color:#3e3944; animation:fm-tab-page-in .16s ease-out both; }
        @keyframes fm-tab-page-in { from { opacity:0; transform:translateY(4px); } }
        .fm-list-head { display:flex; align-items:flex-end; justify-content:space-between; gap:18px; padding:26px 3px 18px; }
        .fm-list-head>div>span,.fm-profile-kicker,.fm-archive-head span { display:block; font-size:8.5px; letter-spacing:.2em; color:#a59eaa; font-weight:650; }
        .fm-list-head h1 { margin:7px 0 0; font:600 28px/1.15 Georgia,'Songti SC',serif; letter-spacing:-.5px; color:#36323a; }
        .fm-list-head>small { color:#aaa3ad; font-size:9px; padding-bottom:3px; }
        .fm-friend-feed { overflow:hidden; border:1px solid #f0ecf2; border-radius:22px; background:#fff; padding:0 17px; }
        .fm-friend-entry+.fm-friend-entry { border-top:1px solid #f2eef3; }
        .fm-message-tabs { display:grid; grid-template-columns:1fr 1fr; gap:6px; margin:0 0 13px; padding:4px; border-radius:14px; background:#f1eef3; }
        .fm-message-tabs button { position:relative; height:35px; border:0; border-radius:11px; background:transparent; color:#958d98; font:500 11px/1 inherit; }
        .fm-message-tabs button.on { background:#fff; color:#4a434e; box-shadow:0 2px 8px rgba(57,48,61,.05); }
        .fm-message-tabs button i { display:inline-grid; place-items:center; min-width:15px; height:15px; margin-left:5px; padding:0 3px; border-radius:8px; background:#b9859c; color:#fff; font:700 8px/1 sans-serif; font-style:normal; }
        .fm-inbox-list,.fm-dm-list { overflow:hidden; border:1px solid #efebf0; border-radius:20px; background:white; }
        .fm-inbox-item { width:100%; position:relative; display:flex; align-items:center; gap:11px; padding:15px 14px; text-align:left; color:inherit; border:0; background:white; }
        .fm-inbox-item+.fm-inbox-item,.fm-dm-item+.fm-dm-item { border-top:1px solid #f3eff4; }
        .fm-inbox-item.unread,.fm-dm-item.unread { background:#fdfafd; }
        .fm-inbox-item>div,.fm-dm-item>div { flex:1; min-width:0; }
        .fm-inbox-item b,.fm-dm-item b { display:inline-block; font-size:12px; margin-right:5px; color:#4e4652; }
        .fm-inbox-item div>span,.fm-dm-item span { color:#aaa2ad; font-size:9px; }
        .fm-inbox-item p { margin:5px 0 3px; font-size:11.5px; line-height:1.55; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:#6f6673; }
        .fm-inbox-item small { font-size:9px; color:#b39eaa; }
        .fm-unread-dot { width:7px; height:7px; border-radius:50%; background:#b98399; flex:none; }
        .fm-chevron { color:#c1bac4; font-size:20px; font-style:normal; }
        .fm-dm-item { width:100%; display:flex; align-items:center; gap:12px; padding:14px; border:0; background:#fff; text-align:left; color:inherit; }
        .fm-dm-item>div { display:flex; flex-direction:column; gap:4px; }
        .fm-dm-item>i { min-width:18px; height:18px; padding:0 4px; display:grid; place-items:center; border-radius:9px; background:#b98399; color:white; font:700 8px/1 sans-serif; font-style:normal; }
        .fm-dm-item>em { color:#c1bac4; font-style:normal; font-size:20px; }
        .fm-tab-empty { min-height:210px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:9px; color:#aca4af; text-align:center; padding:30px; }
        .fm-tab-empty b { color:#756c79; font-size:13px; font-weight:600; }
        .fm-tab-empty span { font-size:10px; line-height:1.6; }
        .fm-profile-editorial { padding:28px 2px 8px; }
        .fm-profile-identity { display:flex; align-items:flex-end; justify-content:space-between; gap:20px; padding:17px 0 16px; }
        .fm-profile-identity>div { min-width:0; }
        .fm-profile-identity h1 { margin:0; font:600 34px/1.1 Georgia,'Songti SC',serif; letter-spacing:-1px; color:#302d34; }
        .fm-profile-identity p { margin:8px 0 0; font-size:10.5px; color:#9d95a0; }
        .fm-profile-rule { height:2px; background:#38343b; margin-top:3px; }
        .fm-profile-stats-line { display:grid; grid-template-columns:repeat(3,1fr); border-bottom:1px solid #ddd8df; }
        .fm-profile-stats-line>div { display:grid; grid-template-columns:auto 1fr; grid-template-areas:'n en' 'n cn'; align-items:center; column-gap:9px; padding:14px 2px 13px; }
        .fm-profile-stats-line>div+div { padding-left:14px; border-left:1px solid #e7e2e8; }
        .fm-profile-stats-line b { grid-area:n; font:italic 23px/1 Georgia,serif; color:#aa8798; }
        .fm-profile-stats-line span { grid-area:en; font-size:8px; letter-spacing:.08em; color:#6f6872; font-weight:650; }
        .fm-profile-stats-line small { grid-area:cn; font-size:8px; color:#aaa2ac; }
        .fm-archive-head { display:flex; justify-content:space-between; align-items:flex-end; padding:26px 2px 10px; }
        .fm-archive-head h2 { margin:6px 0 0; font:600 21px/1.2 Georgia,'Songti SC',serif; }
        .fm-archive-head>small { font:italic 18px/1 Georgia,serif; color:#b596a5; }
        .fm-profile-posts.editorial { overflow:hidden; border-top:2px solid #3b373e; border-bottom:1px solid #ddd8df; background:transparent; }
        .fm-profile-posts.editorial>button { width:100%; display:grid; grid-template-columns:34px 1fr auto; align-items:start; gap:10px; padding:14px 2px; text-align:left; border:0; background:transparent; color:inherit; }
        .fm-profile-posts.editorial>button+button { border-top:1px solid #ddd8df; }
        .fm-post-index { font:italic 16px/1.3 Georgia,serif; color:#b596a5; }
        .fm-profile-posts.editorial button>div { min-width:0; }
        .fm-profile-posts.editorial small { color:#a39ba5; font-size:8.5px; }
        .fm-profile-posts.editorial b { display:block; margin-top:5px; font-size:12.5px; line-height:1.45; color:#403a43; }
        .fm-profile-posts.editorial p { margin:5px 0 0; color:#908793; font-size:10px; line-height:1.5; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
        .fm-post-replies { align-self:center; color:#ae9aa5; font-size:9px; }
        .fm-profile-namebox { flex:1; min-width:0; }
        .fm-profile-name-row { display:flex; align-items:center; gap:10px; min-width:0; }
        .fm-profile-name-row h1 { min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .fm-alias-edit { flex:none; border:1px solid #e5dfe7; background:#fff; color:#8f7584; border-radius:999px; padding:6px 9px; font:500 9px/1 inherit; }
        .fm-alias-panel { margin:0 0 18px; padding:14px 14px 13px; border:1px solid #e8e2e9; border-radius:16px; background:#fff; box-shadow:0 8px 24px rgba(72,62,76,.05); }
        .fm-alias-panel>div:first-child { display:flex; align-items:baseline; justify-content:space-between; gap:10px; }
        .fm-alias-panel>div:first-child span { font-size:8px; letter-spacing:.18em; color:#9b8290; font-weight:700; }
        .fm-alias-panel>div:first-child small { font-size:8.5px; color:#aaa1ac; text-align:right; }
        .fm-alias-panel input { width:100%; margin-top:12px; padding:10px 11px; border:1px solid #e8e2e9; border-radius:11px; outline:0; background:#faf9fb; color:#3d3841; font:500 14px/1.2 inherit; box-sizing:border-box; }
        .fm-alias-panel input:focus { border-color:#cdb6c1; box-shadow:0 0 0 3px rgba(180,132,153,.08); }
        .fm-alias-actions { display:flex; justify-content:flex-end; gap:8px; margin-top:10px; }
        .fm-alias-actions button { border:0; border-radius:9px; padding:7px 11px; background:#f5f2f6; color:#8d838f; font:500 10px/1 inherit; }
        .fm-alias-actions button.save { background:#3a363e; color:#fff; }
        .fm-alias-actions button:disabled { opacity:.35; }
        @media(max-width:360px) { .fm-bottom-nav { left:10px; right:10px; grid-template-columns:1fr 1fr 62px 1fr 1fr; } }
      `})]})}var Pe=()=>(0,_.jsx)(`style`,{children:`
.fm-top-title { font-variant-numeric: tabular-nums; }
  .fm-body { min-height: 0; padding: 0 15px 28px; background: var(--paper); }
  .fm-empty { display: flex; flex-direction: column; align-items: center; gap: 10px; color: var(--ink); opacity: .5; padding-top: 90px; font-size: 14px; text-align: center; }
  .fm-empty-sub { font-size: 12px; opacity: .75; }
  .fm-mast { position: relative; overflow: hidden; margin: 12px 0 10px; padding: 22px 18px 17px; min-height: 164px; border: 1px solid var(--edge); border-radius: 24px 24px 9px 24px; background: color-mix(in srgb, var(--card) 86%, var(--hot)); box-shadow: 0 14px 34px color-mix(in srgb, var(--ink) 7%, transparent); }
  .fm-mast-orbit { position: absolute; right: -29px; top: -22px; width: 152px; height: 152px; border: 1px solid color-mix(in srgb, var(--hot) 25%, transparent); border-radius: 50%; opacity: .8; }
  .fm-mast-orbit::before,.fm-mast-orbit::after { content:''; position:absolute; border:1px solid color-mix(in srgb, var(--hot) 22%, transparent); border-radius:50%; inset:23px; }
  .fm-mast-orbit::after { inset:49px; }
  .fm-mast-orbit span,.fm-mast-orbit i,.fm-mast-orbit b { position:absolute; border-radius:50%; background:var(--hot); }
  .fm-mast-orbit span { width:7px; height:7px; left:17px; top:73px; box-shadow:0 0 0 6px color-mix(in srgb,var(--hot) 12%,transparent); }
  .fm-mast-orbit i { width:4px; height:4px; left:65px; top:23px; opacity:.55; }
  .fm-mast-orbit b { width:3px; height:3px; left:83px; top:69px; opacity:.35; }
  .fm-mast-kicker { position:relative; display:flex; align-items:center; gap:7px; color:var(--hot); font-size:9px; font-weight:700; letter-spacing:.18em; }
  .fm-mast-title { position:relative; margin-top:15px; color:var(--ink); font-size:22px; font-weight:650; line-height:1.28; letter-spacing:-.035em; }
  .fm-mast-foot { position:relative; display:flex; justify-content:space-between; gap:12px; margin-top:18px; color:var(--ink); opacity:.52; font-size:10px; }
  .fm-mast-foot span:first-child { display:flex; align-items:center; gap:5px; }
  .fm-mast-foot i { width:5px; height:5px; border-radius:50%; background:var(--hot); box-shadow:0 0 0 3px color-mix(in srgb,var(--hot) 10%,transparent); }
  .fm-list { display:flex; flex-direction:column; gap:8px; padding-top:2px; }
  .fm-card { position:relative; display:flex; flex-direction:column; gap:9px; text-align:left; border:1px solid transparent; background:transparent; border-radius:18px; padding:13px 12px; cursor:pointer; font-family:inherit; color:var(--ink); transition:transform .15s,background .15s,border-color .15s; }
  .fm-card + .fm-card::before { content:''; position:absolute; top:-5px; left:50px; right:12px; border-top:1px solid var(--edge); }
  .fm-card:active { transform:scale(.985); background:color-mix(in srgb,var(--card) 68%,transparent); border-color:var(--edge); }
  .fm-card-signal { display:flex; align-items:center; gap:5px; margin-left:40px; color:var(--hot); font-size:8px; font-weight:700; letter-spacing:.13em; opacity:.72; }
  .fm-card-signal i { width:4px; height:4px; border-radius:50%; background:currentColor; }
  .fm-card-row { display: flex; gap: 10px; align-items: flex-start; }
  .fm-card-main { flex: 1; min-width: 0; }
  .fm-card-title { font-size: 16px; font-weight: 650; line-height: 1.4; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; letter-spacing: -.02em; }
  .fm-card-snippet { font-size: 12.5px; line-height: 1.65; opacity: .55; margin-top: 4px;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .fm-card-meta { display:flex; align-items:center; gap:6px; padding-left:40px; font-size:10px; color:var(--ink); opacity:.48; }
  .fm-card-name { font-weight: 500; }
  .fm-card-time { margin-left: auto; }
  .fm-reply-count { color:var(--hot); opacity:1; padding:2px 6px; border-radius:999px; background:color-mix(in srgb,var(--hot) 9%,transparent); }

  .fm-thread { position:relative; display:flex; flex-direction:column; padding-top:14px; }
  .fm-thread::before { content:''; position:absolute; left:14px; top:69px; bottom:78px; width:1px; background:linear-gradient(var(--hot),var(--edge) 18%,var(--edge) 85%,transparent); }
.fm-main { position:relative; background:color-mix(in srgb,var(--card) 92%,var(--hot)); border:1px solid var(--edge); border-radius:24px 24px 9px 24px; padding:18px 17px 21px; box-shadow:0 14px 34px color-mix(in srgb,var(--ink) 7%,transparent); }
  .fm-main::after { content:'ORIGINAL SIGNAL'; position:absolute; right:16px; top:18px; color:var(--hot); font-size:7px; font-weight:700; letter-spacing:.13em; opacity:.62; }
  .fm-floor-head { display: flex; align-items: center; gap: 9px; }
  .fm-floor-who { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
  .fm-floor-who b { font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px; }
  .fm-floor-who span { font-size: 10.5px; opacity: .45; }
  .fm-badge { font-style: normal; font-size: 9.5px; font-weight: 500; color: var(--hot);
    border: 1px solid color-mix(in srgb, var(--hot) 45%, transparent); border-radius: 4px; padding: 0 4px; line-height: 15px; }
  .fm-title { margin: 16px 0 8px; font-size: 20px; font-weight: 650; line-height: 1.42; color: var(--ink); letter-spacing: -.025em; }
  .fm-text { font-size: 14.5px; line-height: 1.85; color: var(--ink); white-space: pre-wrap; word-break: break-word; }
  .fm-sect { position: relative; margin: 20px 0 6px; padding-left: 30px; font-size: 10px; color: var(--ink); opacity: .5; letter-spacing: .12em; }
  .fm-sect::before { content: ''; position: absolute; left: 9px; top: 50%; width: 9px; height: 9px; margin-top: -5px; border-radius: 50%; background: var(--paper); border: 2px solid var(--hot); }
  .fm-noresp { text-align: center; font-size: 12.5px; opacity: .45; color: var(--ink); padding: 18px 0; }
  .fm-floor { position:relative; background:color-mix(in srgb,var(--card) 82%,transparent); border:1px solid var(--edge); border-radius:8px 17px 17px 17px; padding:12px 13px; margin:9px 0 0 30px; }
  .fm-floor::before { content: ''; position: absolute; left: -17px; top: 18px; width: 16px; border-top: 1px solid var(--edge); }
  .fm-floor-n { font-size: 10px; opacity: .4; font-variant-numeric: tabular-nums; }
  .fm-floor-del { border: none; background: none; color: var(--ink); opacity: .35; cursor: pointer; padding: 3px; display: flex; }
  .fm-floor-text { font-size: 13.5px; line-height: 1.75; color: var(--ink); margin-top: 7px; word-break: break-word; }
  .fm-floor-to { color: var(--hot); opacity: .8; }
  .fm-comp { flex-shrink:0; display:flex; gap:8px; align-items:center;
    padding: 9px 12px calc(9px + max(var(--sab, 0px), var(--kb, 0px))); border-top: 1px solid var(--edge); background: color-mix(in srgb, var(--card) 88%, transparent); backdrop-filter: blur(14px); }
  .fm-comp-in { flex: 1; min-width: 0; border: 1px solid var(--edge); background: var(--soft); color: var(--ink);
    border-radius: 999px; padding: 9px 14px; font-size: 14px; outline: none; font-family: inherit; }
  .fm-comp-go { flex: none; width: 36px; height: 36px; border-radius: 50%; border: none;
    background: var(--hot); color: var(--card); display: flex; align-items: center; justify-content: center; cursor: pointer; }
  .fm-comp-go:disabled { opacity: .4; }
  .fm-write { position:fixed; inset:0; z-index:70; display:flex; flex-direction:column; background:var(--paper); color:var(--ink); animation:fm-write-in .24s cubic-bezier(.2,.8,.2,1); }
  @keyframes fm-write-in { from { transform:translateY(18px); opacity:0; } }
  .fm-write-head { flex:none; display:grid; grid-template-columns:42px 1fr 58px; align-items:center; min-height:58px; padding:var(--sat) 13px 0; border-bottom:1px solid var(--edge); background:color-mix(in srgb,var(--card) 85%,transparent); backdrop-filter:blur(18px); }
  .fm-write-head button { border:0; background:transparent; color:var(--ink); padding:10px; font-family:inherit; }
  .fm-write-head>div { display:flex; flex-direction:column; align-items:center; gap:1px; }
  .fm-write-head span { color:var(--hot); font-size:7px; font-weight:700; letter-spacing:.2em; }
  .fm-write-head b { font-size:14px; font-weight:650; }
  .fm-write-head .fm-write-publish { justify-self:end; padding:7px 11px; border-radius:999px; background:var(--hot); color:var(--card); font-size:12px; font-weight:650; }
  .fm-write-head .fm-write-publish:disabled { opacity:.35; }
.fm-write-paper { flex:1; min-height:0; display:flex; flex-direction:column; margin:17px 15px calc(17px + var(--sab)); padding:21px 19px 16px; border:1px solid var(--edge); border-radius:9px 25px 25px 25px; background:color-mix(in srgb,var(--card) 94%,var(--hot)); box-shadow:0 18px 45px color-mix(in srgb,var(--ink) 8%,transparent); }
  .fm-write-stamp { display:flex; align-items:center; gap:7px; color:var(--hot); font-size:9px; font-weight:700; letter-spacing:.13em; }
  .fm-write-title { width:100%; margin-top:24px; border:0; outline:0; padding:0; background:transparent; color:var(--ink); font:650 23px/1.35 inherit; letter-spacing:-.035em; }
  .fm-write-title::placeholder,.fm-write-body::placeholder { color:var(--ink); opacity:.28; }
  .fm-write-rule { display:flex; align-items:center; gap:8px; margin:17px 0 15px; }
  .fm-write-rule::before { content:''; width:6px; height:6px; border-radius:50%; border:1.5px solid var(--hot); }
  .fm-write-rule span { flex:1; border-top:1px solid var(--edge); }
  .fm-write-body { flex:1; min-height:160px; width:100%; border:0; outline:0; resize:none; padding:0; background:transparent; color:var(--ink); font:400 15px/1.85 inherit; }
  .fm-write-foot { display:flex; justify-content:space-between; padding-top:12px; border-top:1px solid var(--edge); color:var(--ink); opacity:.4; font-size:9px; letter-spacing:.05em; }

  /* ── 私人杂志版论坛：首页 / 展开详情 ── */
  .fm { background:color-mix(in srgb,var(--paper) 94%,var(--hot)); }
  .fm>.topbar { min-height:52px; height:52px; background:color-mix(in srgb,var(--paper) 82%,transparent); backdrop-filter:blur(18px); border-bottom:1px solid color-mix(in srgb,var(--edge) 72%,transparent); }
  .fm-body { padding:0 14px 28px; background:transparent; transition:filter .28s,opacity .28s,transform .35s; }
  .fm-body.is-veiled { filter:blur(8px); opacity:.28; transform:scale(.975); pointer-events:none; }
  .fm-mast { min-height:122px; margin:10px 0 9px; padding:17px 17px 14px; border:1px solid color-mix(in srgb,var(--edge) 72%,transparent); border-radius:21px; background:linear-gradient(135deg,color-mix(in srgb,var(--card) 96%,var(--hot)),color-mix(in srgb,var(--hot) 12%,var(--card))); box-shadow:0 8px 24px color-mix(in srgb,var(--ink) 5%,transparent); }
  .fm-mast-orbit { right:-15px; top:-37px; width:132px; height:132px; opacity:.28; }
  .fm-mast-orbit::before,.fm-mast-orbit::after { border-color:color-mix(in srgb,var(--hot) 38%,transparent); }
  .fm-mast-kicker { color:var(--ink); opacity:.58; font:500 11px/1.2 serif; letter-spacing:.16em; }
  .fm-mast-title { margin-top:9px; font:600 19px/1.45 serif; letter-spacing:.02em; }
  .fm-mast-foot { margin-top:12px; justify-content:flex-start; gap:9px; font-size:9.5px; }
  .fm-mast-foot span+span::before { content:'·'; margin-right:9px; }
  .fm-tabs { display:flex; align-items:center; justify-content:space-between; gap:2px; margin:0 -2px 9px; padding:3px 0; overflow:visible; }
  .fm-tabs button { flex:none; border:0; border-radius:999px; padding:7px 11px; background:transparent; color:var(--ink); opacity:.58; font:500 12px/1 inherit; transition:.18s; }
  .fm-tabs button.on { background:color-mix(in srgb,var(--hot) 10%,var(--card)); color:var(--hot); opacity:1; box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--hot) 8%,transparent); }
  .fm-list { gap:12px; padding:0 0 4px; }
  .fm-card { width:100%; gap:10px; padding:14px; border:1px solid color-mix(in srgb,var(--edge) 76%,transparent); border-radius:20px; background:color-mix(in srgb,var(--card) 91%,transparent); box-shadow:0 5px 18px color-mix(in srgb,var(--ink) 4%,transparent); backdrop-filter:blur(12px); }
  .fm-card+.fm-card::before { display:none; }
  .fm-card.short { border-radius:20px 20px 8px 20px; background:color-mix(in srgb,var(--hot) 7%,var(--card)); }
  .fm-card.image { padding-bottom:11px; }
  .fm-card-head { display:flex; align-items:center; gap:9px; }
  .fm-card-who { flex:1; min-width:0; display:flex; flex-direction:column; gap:2px; }
  .fm-card-who b { font-size:12px; font-weight:650; }
  .fm-card-who span { color:var(--ink); opacity:.42; font-size:9.5px; }
  .fm-card-kind { padding:4px 7px; border-radius:999px; background:color-mix(in srgb,var(--hot) 8%,transparent); color:var(--hot); font-size:8.5px; }
.fm-card-title { font-size:16px; line-height:1.42; white-space:normal; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
  .fm-card-snippet { margin-top:-4px; font-size:12.5px; line-height:1.7; opacity:.59; }
  .fm-card-image { display:block; width:100%; max-height:176px; object-fit:cover; border-radius:13px; background:var(--soft); }
  .fm-card-meta { padding:1px 0 0; gap:15px; opacity:.54; }
  .fm-card-meta span { display:flex; align-items:center; gap:5px; }
  .fm-like { display:flex; align-items:center; gap:5px; margin:0; padding:2px 0; border:0; background:transparent; color:inherit; font:inherit; }
  .fm-like.on { color:var(--hot); opacity:1; }
  .fm-like.on svg { fill:color-mix(in srgb,var(--hot) 28%,transparent); }
  .fm-card-meta>i { flex:1; }
  .fm-filter-empty { padding:52px 0; text-align:center; color:var(--ink); opacity:.34; font-size:12px; }
  .fm-detail { position:fixed; inset:52px 0 0; z-index:25; padding:10px 14px 0; overflow-y:auto; background:color-mix(in srgb,var(--paper) 58%,transparent); backdrop-filter:blur(5px); animation:fm-detail-in .3s ease both; }
  @keyframes fm-detail-in { from { opacity:0; } }
  .fm-detail.closing { animation:fm-detail-out .28s ease both; pointer-events:none; }
  @keyframes fm-detail-out { to { opacity:0; } }
  .fm-thread { min-height:100%; padding:0 0 76px; }
  .fm-thread::before { display:none; }
  .fm-main { border-radius:22px; padding:16px 16px 14px; background:color-mix(in srgb,var(--card) 95%,var(--hot)); border:1px solid color-mix(in srgb,var(--edge) 75%,transparent); box-shadow:0 16px 40px color-mix(in srgb,var(--ink) 9%,transparent); transform-origin:50% 0; animation:fm-card-open .38s cubic-bezier(.2,.8,.2,1) both; }
  @keyframes fm-card-open { from { transform:translateY(var(--fm-card-y)) scale(.91); border-radius:20px; } }
  .fm-detail.closing .fm-main { animation:fm-card-close .28s cubic-bezier(.4,0,.6,1) both; }
  @keyframes fm-card-close { to { transform:translateY(var(--fm-card-y)) scale(.91); opacity:.2; } }
  .fm-main::after { display:none; }
  .fm-main-image { display:block; width:100%; max-height:260px; margin-top:13px; object-fit:cover; border-radius:14px; }
  .fm-main-actions { display:flex; gap:18px; margin-top:15px; padding-top:12px; border-top:1px solid var(--edge); color:var(--ink); opacity:.56; }
  .fm-main-actions span { display:flex; align-items:center; gap:6px; font-size:11px; }
  .fm-main-actions .fm-like { font-size:11px; }
  .fm-title { margin:15px 0 8px; font-size:20px; }
  .fm-text { font-size:14px; line-height:1.78; }
  .fm-sect { margin:18px 0 8px; padding-left:4px; letter-spacing:.06em; }
  .fm-sect::before { display:none; }
  .fm-floor { margin:8px 0 0; border:0; border-radius:15px; padding:12px 13px; background:color-mix(in srgb,var(--card) 76%,transparent); opacity:0; animation:fm-floor-in .3s ease forwards; }
  .fm-floor::before { display:none; }
  @keyframes fm-floor-in { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
  .fm-typing { display:flex; align-items:center; gap:7px; margin:10px 4px; color:var(--ink); opacity:.52; font-size:11px; }
  .fm-typing i { width:4px; height:4px; margin-left:-3px; border-radius:50%; background:var(--hot); animation:fm-dot 1.15s ease-in-out infinite; }
  .fm-typing i:nth-last-child(2) { animation-delay:.14s; }.fm-typing i:last-child { animation-delay:.28s; }
@keyframes fm-dot { 50% { opacity:.25; transform:translateY(-2px); } }
  .fm-comp { position:fixed; z-index:30; left:0; right:0; bottom:0; border-top:1px solid color-mix(in srgb,var(--edge) 70%,transparent); background:color-mix(in srgb,var(--card) 78%,transparent); backdrop-filter:blur(18px); }
  .fm-write-cats { display:flex; gap:6px; margin-top:18px; }
  .fm-write-cats button { border:0; border-radius:999px; padding:6px 10px; background:transparent; color:var(--ink); opacity:.48; font:500 11px/1 inherit; }
  .fm-write-cats button.on { background:color-mix(in srgb,var(--hot) 11%,var(--card)); color:var(--hot); opacity:1; }
  .fm-write-cats+.fm-write-title { margin-top:18px; }

  /* ── 参考图定稿：私人杂志而不是灰色论坛骨架 ── */
  .fm {
    /* 论坛是一册独立的小刊物，不继承整机主题色。 */
    --paper:#F3EFE7;
    --card:#FFFCF7;
    --ink:#302C28;
    --soft:#A69D91;
    --edge:#DED6CA;
    --faint:#C9C0B5;
    --block:#E8E0D5;
    --sheet:#FFFCF7;
    --sheet-edge:#E8E1D8;
    --sheet-on:#F3EFE7;
    --block-edge:#CFC5B9;
    --block-on:#CFC0AD;
    --hot:#806A52;
    --hot-tint:#F3EFE7;
    --shade:#302C28;
    isolation:isolate;
  }
  .fm::before { content:''; position:absolute; inset:52px 0 0; z-index:0; pointer-events:none; background:url('/forum-night-v2.png') center/cover; opacity:.045; filter:blur(18px) saturate(.7); transform:scale(1.12); }
  .fm>.topbar { position:relative; z-index:32; height:58px; min-height:58px; padding:0 12px 0 8px; border-bottom:0; }
  .fm>.topbar::after { content:''; position:absolute; left:14px; right:14px; bottom:0; height:1px; background:color-mix(in srgb,var(--edge) 54%,transparent); }
  .fm>.topbar .topbar-back { width:32px; }
  .fm>.topbar .topbar-title.fm-brand { display:flex; align-items:baseline; gap:8px; text-align:left; padding-left:5px; }
  .fm-brand .fm-top-title { font:700 20px/1.1 serif; letter-spacing:.04em; }
  .fm-brand i { color:var(--hot); opacity:.24; font:italic 17px/1 cursive; font-weight:400; transform:rotate(-4deg); }
  .fm>.topbar .topbar-right { width:auto; gap:5px; }
.fm-search-act { opacity:.76; }
  .fm-post-act { width:34px!important; height:34px!important; margin-left:2px; border-radius:50%; background:color-mix(in srgb,var(--hot) 12%,var(--card)); color:var(--hot)!important; box-shadow:0 4px 12px color-mix(in srgb,var(--hot) 12%,transparent); }
  .fm-body { position:relative; z-index:1; padding:0 12px 30px; }
  .fm-search { display:flex; align-items:center; gap:8px; margin:8px 2px 4px; padding:8px 10px 8px 12px; border:1px solid color-mix(in srgb,var(--edge) 66%,transparent); border-radius:15px; background:color-mix(in srgb,var(--card) 85%,transparent); color:var(--ink); animation:fm-search-in .18s ease; }
  @keyframes fm-search-in { from { opacity:0; transform:translateY(-5px); } }
  .fm-search input { flex:1; min-width:0; border:0; outline:0; background:transparent; color:var(--ink); font:13px/1.4 inherit; }
  .fm-search input::placeholder { color:var(--ink); opacity:.32; }
  .fm-search button { color:var(--hot); font-size:11px; padding:3px; }
  .fm-mast { min-height:132px; margin:10px 2px 10px; padding:18px 18px 15px; border-radius:18px; border:1px solid color-mix(in srgb,var(--card) 62%,var(--edge)); background:linear-gradient(90deg,color-mix(in srgb,var(--card) 90%,transparent) 0%,color-mix(in srgb,var(--card) 72%,transparent) 54%,color-mix(in srgb,var(--hot) 7%,transparent)),url('/forum-night-v2.png') center 58%/cover; box-shadow:0 8px 22px color-mix(in srgb,var(--ink) 7%,transparent); }
  .fm-mast::after { content:''; position:absolute; inset:0; border-radius:inherit; pointer-events:none; box-shadow:inset 0 0 30px color-mix(in srgb,var(--card) 32%,transparent); }
  .fm-mast-kicker { opacity:.78; font:500 11px/1.2 serif; }
  .fm-mast-title { width:68%; margin-top:9px; font:600 19px/1.48 serif; text-shadow:0 1px 8px var(--card); }
  .fm-mast-foot { margin-top:11px; opacity:.58; text-shadow:0 1px 5px var(--card); }
  .fm-tabs { justify-content:flex-start; gap:5px; margin:0 0 9px; padding:3px 2px; }
  .fm-tabs button { position:relative; flex:1; padding:8px 3px; border-radius:12px; font-size:12px; }
  .fm-tabs button.on { background:color-mix(in srgb,var(--hot) 9%,var(--card)); box-shadow:0 4px 12px color-mix(in srgb,var(--hot) 7%,transparent); }
  .fm-tabs button.on::after { content:''; position:absolute; left:50%; bottom:2px; width:13px; height:1.5px; border-radius:2px; background:var(--hot); transform:translateX(-50%); opacity:.48; }
  .fm-list { gap:10px; }
  .fm-card { gap:9px; padding:13px 13px 11px; border-radius:17px; background:color-mix(in srgb,var(--card) 94%,var(--hot)); border-color:color-mix(in srgb,var(--edge) 62%,transparent); box-shadow:0 5px 15px color-mix(in srgb,var(--ink) 5%,transparent); }
  .fm-card.short { border-radius:17px; background:linear-gradient(145deg,color-mix(in srgb,var(--card) 92%,var(--hot)),color-mix(in srgb,var(--hot) 8%,var(--card))); }
  .fm-card-head { align-items:flex-start; }
  .fm-card-who { padding-top:1px; flex-direction:row; flex-wrap:wrap; align-items:center; gap:3px 6px; }
  .fm-card-who b { font-size:13px; }
  .fm-card-who span { width:auto; font-size:10px; }
  .fm-card-kind { margin-left:auto; padding:4px 8px; }
  .fm-card-title { font:650 15.5px/1.45 serif; letter-spacing:.005em; }
  .fm-card-snippet { font-size:12.5px; line-height:1.58; opacity:.58; }
  .fm-card-meta { padding-top:2px; border-top:1px solid color-mix(in srgb,var(--edge) 43%,transparent); gap:17px; }
  .fm-card-image { max-height:190px; border-radius:11px; }
  .fm-detail { inset:58px 0 0; }
  @media (prefers-reduced-motion:reduce) { .fm-card,.fm-write,.fm-detail,.fm-main,.fm-floor { transition:none; animation:none; opacity:1; } }

  /* cool ins forum palette */
  .fm { --paper:#F7F8FC; --card:#FFFFFF; --hot:#8C92D6; --ink:#262A36; --edge:#E5E8F0; --soft:#9AA0B0; --faint:#B4B9C6; background:linear-gradient(180deg,#FAFBFD,#F5F7FB); }
  .fm .topbar { background:rgba(250,251,253,.88); border-bottom-color:rgba(75,82,105,.07); -webkit-backdrop-filter:blur(18px); backdrop-filter:blur(18px); }
.fm-body { background:transparent; }
  .fm-mast { background:linear-gradient(145deg,#FFFFFF,#F5F6FB 64%,#EEF0FA); border-color:#E3E6EE; box-shadow:0 16px 36px rgba(62,69,94,.07); }
  .fm-mast-orbit,.fm-mast-orbit::before,.fm-mast-orbit::after { border-color:rgba(140,146,214,.18); }
  .fm-mast-orbit span,.fm-mast-orbit i,.fm-mast-orbit b,.fm-mast-foot i { background:#9DA3DA; }
  .fm-card:active { background:#F2F4F9; border-color:#E4E7EF; }
  .fm-reply-count { color:#7178BA; background:#EEF0FF; }
  .fm-main { background:#FFFFFF; border-color:#E3E6EE; box-shadow:0 14px 34px rgba(61,68,93,.07); }
  .fm-floor { background:#FAFBFD; border-color:#E6E8EF; }
  .fm-comp,.fm-write-paper { background:rgba(255,255,255,.9); border-color:#E4E7EF; }
  .fm-write-cats button.on,.fm-write-publish,.fm-comp-go { background:#353A48!important; color:#fff!important; border-color:#353A48!important; }
  .fm-search,.fm-write-title,.fm-write-body { background:#FFFFFF!important; border-color:#E3E6EE!important; }


  /* 2026-09-09 · forum frosted/jelly refinement */
  .fm{
    --fm-bg:color-mix(in srgb,var(--c-light) 14%,#fbfcff 86%);
    --fm-accent:color-mix(in srgb,var(--c-hot) 52%,#7f88b8 48%);
    --fm-glass:rgba(255,255,255,.54);
    --fm-glass-strong:rgba(255,255,255,.66);
    --fm-edge:rgba(255,255,255,.72);
    background:
      radial-gradient(42% 28% at 10% 6%,color-mix(in srgb,var(--c-pink) 13%,transparent),transparent 74%),
      radial-gradient(45% 34% at 90% 18%,color-mix(in srgb,var(--c-light) 32%,transparent),transparent 72%),
      var(--fm-bg) !important;
  }
  .fm .topbar{background:rgba(255,255,255,.48)!important;border-bottom:1px solid rgba(108,117,141,.08)!important;box-shadow:inset 0 1px rgba(255,255,255,.8);backdrop-filter:blur(26px) saturate(155%);-webkit-backdrop-filter:blur(26px) saturate(155%)}
  .fm .fm-body{background:transparent!important}
  .fm .fm-mast{background:linear-gradient(145deg,rgba(255,255,255,.7),rgba(255,255,255,.44))!important;border:1px solid var(--fm-edge)!important;box-shadow:0 18px 42px rgba(75,84,107,.08),inset 0 1px rgba(255,255,255,.92)!important;backdrop-filter:blur(26px) saturate(150%);-webkit-backdrop-filter:blur(26px) saturate(150%)}
  .fm .fm-mast-kicker,.fm .fm-card-signal,.fm .fm-reply-count,.fm .fm-floor-to,.fm .fm-badge{color:var(--fm-accent)!important}
  .fm .fm-mast-orbit,.fm .fm-mast-orbit::before,.fm .fm-mast-orbit::after{border-color:color-mix(in srgb,var(--fm-accent) 20%,transparent)!important}
  .fm .fm-mast-orbit span,.fm .fm-mast-orbit i,.fm .fm-mast-orbit b,.fm .fm-mast-foot i{background:var(--fm-accent)!important}
  .fm .fm-card{border:1px solid transparent!important;background:transparent!important}
  .fm .fm-card:active{background:rgba(255,255,255,.46)!important;border-color:rgba(255,255,255,.68)!important;box-shadow:0 9px 22px rgba(76,84,106,.06),inset 0 1px rgba(255,255,255,.85)}
  .fm .fm-card + .fm-card::before{border-top-color:rgba(108,117,140,.10)!important}
  .fm .fm-reply-count{background:color-mix(in srgb,var(--fm-accent) 9%,rgba(255,255,255,.55))!important;border:1px solid rgba(255,255,255,.58)}
.fm .fm-main,.fm .fm-floor,.fm .fm-write-paper,.fm .fm-detail-panel{
    background:linear-gradient(145deg,rgba(255,255,255,.68),rgba(255,255,255,.45))!important;
    border:1px solid rgba(255,255,255,.72)!important;
    box-shadow:0 16px 38px rgba(75,84,108,.08),inset 0 1px rgba(255,255,255,.92)!important;
    backdrop-filter:blur(24px) saturate(150%);-webkit-backdrop-filter:blur(24px) saturate(150%);
  }
  .fm .fm-main::after{color:var(--fm-accent)!important}
  .fm .fm-thread::before{background:linear-gradient(var(--fm-accent),rgba(111,120,143,.11) 20%,rgba(111,120,143,.10) 85%,transparent)!important}
  .fm .fm-sect::before{background:rgba(255,255,255,.88)!important;border-color:var(--fm-accent)!important}
  .fm .fm-floor::before{border-top-color:rgba(109,118,141,.12)!important}
  .fm .fm-badge{border-color:color-mix(in srgb,var(--fm-accent) 34%,transparent)!important;background:rgba(255,255,255,.38)}
  .fm .fm-comp{background:rgba(255,255,255,.48)!important;border-top:1px solid rgba(255,255,255,.70)!important;box-shadow:0 -10px 28px rgba(72,81,103,.06);backdrop-filter:blur(28px) saturate(150%);-webkit-backdrop-filter:blur(28px) saturate(150%)}
  .fm .fm-comp-in,.fm .fm-search,.fm .fm-write-title,.fm .fm-write-body{background:rgba(255,255,255,.52)!important;border:1px solid rgba(255,255,255,.68)!important;box-shadow:inset 0 1px rgba(255,255,255,.88)!important;backdrop-filter:blur(18px)}
  .fm .fm-comp-go,.fm .fm-write-publish,.fm .topbar-act.fm-post-act{background:linear-gradient(145deg,color-mix(in srgb,var(--fm-accent) 17%,rgba(255,255,255,.88)),rgba(255,255,255,.64))!important;color:var(--ink)!important;border:1px solid rgba(255,255,255,.78)!important;box-shadow:0 9px 22px color-mix(in srgb,var(--fm-accent) 10%,transparent),inset 0 1px rgba(255,255,255,.96)!important}
  .fm .fm-tabs button.on,.fm .fm-write-cats button.on{background:linear-gradient(145deg,color-mix(in srgb,var(--fm-accent) 15%,rgba(255,255,255,.9)),rgba(255,255,255,.62))!important;color:var(--ink)!important;border-color:rgba(255,255,255,.78)!important;box-shadow:0 8px 20px color-mix(in srgb,var(--fm-accent) 9%,transparent),inset 0 1px rgba(255,255,255,.94)!important}
`}),Fe=`
/* Forum entrance, rebuilt September 2026. Detail layout stays independent. */
.fm.fm-browsing { background:#faf9fc!important; --ink:#373641; --hot:#947583; --paper:#faf9fc; --edge:#eae7ee; }
.fm.fm-browsing::before { display:none; }
.fm.fm-browsing>.topbar { background:#faf9fc!important; box-shadow:none; border:0!important; backdrop-filter:none; }
.fm.fm-browsing>.topbar::after { display:none; }
.fm-browsing .fm-brand .fm-top-title { font:600 15px/1.2 inherit; letter-spacing:.08em; }
.fm .fm-body { padding:0 22px 30px; overflow-x:hidden; overscroll-behavior:contain; }
.fm .fm-body.is-veiled { pointer-events:none; }
.fm-welcome { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:17px 0 25px; }
.fm-eyebrow { font-size:9px; letter-spacing:.2em; color:#99949f; }
.fm-welcome h1 { margin:12px 0 0; font-size:29px; font-weight:550; line-height:1.42; letter-spacing:-1px; color:#383640; }
.fm-welcome h1>span { color:#b78e9e; }
.fm-compose-orb { flex:none; width:75px; height:75px; display:flex; flex-direction:column; gap:3px; align-items:center; justify-content:center; border-radius:26px; transform:rotate(-7deg); border:1px solid #fff; background:linear-gradient(140deg,#fff 3%,#f5e8ee 70%,#e7e7f4); color:#78616e; box-shadow:inset 0 2px 3px #fff,0 10px 25px #79637c12; transition:transform .2s; }
.fm-compose-orb>span { font-size:10px; }
.fm-compose-orb:active { transform:rotate(0) scale(.95); }
.fm-section-label { display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; }
.fm-section-label>span { display:flex; align-items:center; gap:7px; font-size:11px; font-weight:600; color:#77717f; }
.fm-section-label i { width:5px; height:5px; border-radius:50%; background:#aa8c9e; }
.fm-section-label small { color:#aaa4ae; font-size:9px; }
.fm-highlights { display:flex; gap:10px; overflow-x:auto; scroll-snap-type:x mandatory; scrollbar-width:none; margin:0 -22px; padding:0 22px 17px; }
.fm-highlights::-webkit-scrollbar { display:none; }
.fm-highlight { flex:0 0 76%; min-width:0; max-width:310px; display:flex; flex-direction:column; text-align:left; padding:15px 16px; scroll-snap-align:center; border:1px solid #fff; border-radius:20px; background:linear-gradient(125deg,#f2eaf0,#f3f1f8 80%); box-shadow:0 4px 12px #65537105; color:#423d49; }
.fm-highlight:nth-child(even) { background:linear-gradient(125deg,#eaeef6,#f2f3f8); }
.fm-highlight-index { display:flex; justify-content:space-between; align-items:center; color:#a58b9a; font:italic 20px/1.2 Georgia,serif; }
.fm-highlight-index small { font:10px/1.4 sans-serif; color:#938a9a; }
.fm-highlight strong { margin:11px 0 17px; font-size:15px; line-height:1.5; font-weight:600; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; min-height:45px; }
.fm-highlight-foot { display:flex; align-items:center; justify-content:space-between; color:#8a8191; font-size:10px; }
.fm-highlight-foot>span:last-child { display:flex; gap:10px; align-items:center; }
.fm-faces { display:flex; padding-left:5px; }
.fm-faces>* { margin-left:-5px; border:2px solid #f5f1f7; box-sizing:content-box; border-radius:50%; }
.fm-feed-controls { position:sticky; top:0; z-index:3; background:#faf9fcf5; backdrop-filter:blur(16px); padding:5px 0 14px; }
.fm-feed-tabs { display:flex; align-items:center; gap:24px; min-height:45px; }
.fm-feed-tabs button { position:relative; padding:9px 0; border:0; background:none; color:#9a949f; font:500 14px/1.4 inherit; }
.fm-feed-tabs button.selected { color:#3e3845; font-weight:700; }
.fm-feed-tabs button.selected::after { content:''; position:absolute; bottom:1px; width:13px; height:3px; border-radius:3px; background:#ba95a7; left:calc(50% - 6px); }
.fm-feed-tabs>span { margin-left:auto; font-size:10px; color:#a49faa; }
.fm-category-pills { display:flex; gap:7px; overflow-x:auto; scrollbar-width:none; padding-top:9px; }
.fm-category-pills button { flex:1; white-space:nowrap; border:1px solid transparent; border-radius:10px; padding:7px 9px; font-size:11px; background:transparent; color:#928b98; }
.fm-category-pills button.selected { background:#fff; border-color:#eee9f0; color:#806575; box-shadow:0 2px 5px #48385404; }
.fm-feed { border-radius:22px; background:#fff; padding:0 17px; }
.fm-entry { padding:20px 0 16px; }
.fm-entry+.fm-entry { border-top:1px solid #f1edf3; }
.fm-entry-author { display:flex; align-items:center; gap:9px; }
.fm-entry-author>div { display:flex; flex-direction:column; gap:3px; min-width:0; }
.fm-entry-author b { color:#5d5464; font-size:11px; font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px; }
.fm-entry-author div>span { color:#aaa3ae; font-size:9px; }
.fm-entry-author>small { margin-left:auto; font-size:9px; color:#a390a2; white-space:nowrap; }
.fm-entry-content { display:block; width:100%; margin:13px 0 0; padding:0; border:0; background:none; text-align:left; color:inherit; }
.fm-entry-content>div { min-width:0; flex:1; }
.fm-entry-content h2 { margin:0; color:#3d3543; font-size:16px; font-weight:600; line-height:1.55; overflow-wrap:anywhere; }
.fm-entry-content p { margin:7px 0 0; font-size:12px; line-height:1.8; color:#8a818f; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; overflow-wrap:anywhere; }
.fm-entry-content.with-image { display:flex; gap:12px; align-items:flex-start; }
.fm-entry-content img { width:83px; height:91px; flex:none; object-fit:cover; border-radius:13px; background:#f4f1f6; }
.fm-recent-reply { display:flex; align-items:center; gap:6px; max-width:100%; width:100%; margin-top:12px; padding:9px 10px; border:0; border-radius:9px; background:#f8f6f9; text-align:left; font-size:10px; line-height:1.5; color:#978797; }
.fm-recent-reply b { flex:none; font-weight:500; max-width:70px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.fm-recent-reply>span:last-child { min-width:0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; color:#938995; }
.fm-entry-actions { display:flex; align-items:center; gap:19px; margin-top:12px; }
.fm-entry-actions button { display:flex; align-items:center; gap:5px; padding:5px 0; border:0; background:none; color:#a297a6; font-size:10px; }
.fm-entry-actions button.liked { color:#b37e96; }
.fm-entry-actions .liked svg { fill:#edd4df; }
.fm-entry-actions .fm-read-post { margin-left:auto; gap:8px; font-size:10px; }
.fm-feed-end { margin:0; padding:21px 0 26px; border-top:1px solid #f5f1f6; text-align:center; font-size:10px; color:#bbb2be; }
.fm-zero { padding:40px 5px; text-align:center; color:#a592a4; }
.fm-zero h2 { font-size:16px; font-weight:500; color:#6d5f73; margin:15px 0 8px; }
.fm-zero p { font-size:12px; line-height:1.8; color:#9c91a2; }
.fm-zero button { border:1px solid #eae1ec; background:#faf7fb; border-radius:12px; padding:10px 15px; font-size:12px; color:#8d7286; margin-top:8px; }
.fm-loading>div { height:125px; border-radius:18px; padding:18px; background:#fff; margin-bottom:10px; }
.fm-loading i,.fm-loading span { display:block; height:12px; background:#f3f0f5; border-radius:6px; margin-bottom:13px; animation:fm-dot 1.5s infinite; }
.fm-loading i { width:70px; }.fm-loading span:last-child { width:65%; }
.fm-browsing button:focus-visible { outline:2px solid #ad8aa6; outline-offset:4px; }
.fm-browsing button { cursor:pointer; -webkit-tap-highlight-color:transparent; font-family:inherit; }
@media(max-width:350px) { .fm .fm-body { padding-left:16px; padding-right:16px; }.fm-highlights { margin-left:-16px; margin-right:-16px; padding-left:16px; padding-right:16px; }.fm-feed { padding:0 13px; }.fm-feed-tabs { gap:18px; }.fm-welcome h1 { font-size:25px; }.fm-category-pills { gap:3px; }.fm-category-pills button { padding:7px; } }
@media(prefers-reduced-motion:reduce) { .fm *, .fm *::before { animation-duration:.01ms!important; transition-duration:.01ms!important; } }
`;export{Ne as default};
import{c as ft,g as ba,r as gn,a as At,b as so,o as po,d as dn,e as co,w as ya,f as ge,h as Pe,i as Ae,j as De,F as pn,k as cn,l as Ee,m as Fe,u as We,n as Je,p as Ce,t as _e,v as uo,E as Ne,q as Aa,s as fa,x as yo,y as Ao,z as ta,A as fo,B as mo,C as ho,D as bo,G as go,H as vo,I as xo,J as Eo}from"./index-CCpuGYCc.js";import{_ as wo}from"./_plugin-vue_export-helper-DlAUqK2U.js";let Pt;const Co=new Uint8Array(16);function ko(){if(!Pt&&(Pt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Pt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Pt(Co)}const Re=[];for(let w=0;w<256;++w)Re.push((w+256).toString(16).slice(1));function Bo(w,B=0){return Re[w[B+0]]+Re[w[B+1]]+Re[w[B+2]]+Re[w[B+3]]+"-"+Re[w[B+4]]+Re[w[B+5]]+"-"+Re[w[B+6]]+Re[w[B+7]]+"-"+Re[w[B+8]]+Re[w[B+9]]+"-"+Re[w[B+10]]+Re[w[B+11]]+Re[w[B+12]]+Re[w[B+13]]+Re[w[B+14]]+Re[w[B+15]]}const So=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ma={randomUUID:So};function Io(w,B,Q){if(ma.randomUUID&&!B&&!w)return ma.randomUUID();w=w||{};const ce=w.random||(w.rng||ko)();if(ce[6]=ce[6]&15|64,ce[8]=ce[8]&63|128,B){Q=Q||0;for(let x=0;x<16;++x)B[Q+x]=ce[x];return B}return Bo(ce)}const mt=w=>w.kind==="file"&&w.name.indexOf("._")===-1&&/\.ts|mp4|mkv|mov|m4v|avi|wmv|mpg|flv$/gi.test(w.name),Mt=w=>w.kind==="file"&&w.name.indexOf("._")===-1&&/\.jpg|png|gif|jpeg|jfif|avif|webp$/gi.test(w.name),_o=w=>w.findIndex(B=>B==="新"||B==="新1"||B==="新2"||B==="新3"||B==="新4"||B==="新5"||B==="新6"||B==="新7"||B==="新8"||B==="新9"||B==="新10"||B==="xin"||B==="xin1"||B==="xin2"||B==="xin3"||B==="xin4"||B==="xin5"||B==="xin6"||B==="xin7"||B==="xin8"||B==="xin9"||B==="xin10")!==-1,Lo=w=>w.findIndex(B=>B==="国")!==-1,zo=w=>w.findIndex(B=>B==="欧")!==-1,To=w=>w.findIndex(B=>B==="删")!==-1,Do=w=>w.findIndex(B=>B==="合")!==-1,Oo=w=>w.findIndex(B=>B==="无")===-1,Ro=w=>{const Q={code:w.split(".")[0],author:"",title:""};return/(\&(.+)\&)(.+)?/gi.test(Q.code)&&(Q.author=RegExp.$2,Q.code=RegExp.$3),/(.+)?(#(.+)#)/gi.test(Q.code)&&(Q.code=RegExp.$1,Q.title=RegExp.$3),Q},qo=w=>{let B=w==null?void 0:w.parent,Q=!1;for(;B&&!Q;)B.isauthordirectory?Q=!0:B=B==null?void 0:B.parent;return Q?{authorcover:B.authorcover,author:B.name}:null},jo=async w=>{let B="";const Q=w==null?void 0:w.children;if(Q&&Q.length)for(let ce=0,x=Q.length;ce<x;ce++){const ye=Q[ce];if(Mt(ye)&&ye.name.indexOf("a")!==0){const C=await aa(ye.handle);B=C?C.url:"";break}}return B},ga=(w,B=[])=>{if(mt(w)){const Q=Ro(w.name),ce={parentid:w.parentid,id:w.id,filename:w.name,code:Q.code,author:Q.author,authorcover:"",title:Q.title,country:Lo(w.path)?"China":zo(w.path)?"West":"Janpen",publishtime:"",createtime:"",size:"",long:"",ishd:"",ischinesesubtitle:!1,isdel:To(w.path),isnew:_o(w.path),ishorse:Oo(w.path),iscollect:Do(w.path),path:w.path,cover:"",handle:w.handle};w!=null&&w.parent&&(w!=null&&w.parent.ismoviedirectory)&&(w!=null&&w.parent.cover)&&(ce.cover=w.parent.cover);const x=qo(w);x&&(ce.author=x.author,ce.authorcover=x.authorcover),w.name,B.push(ce)}return w.children&&w.children.length&&w.children.forEach(Q=>{ga(Q,B)}),B},va=async(w,B)=>{const Q={name:w.name,kind:w.kind,handle:w,parent:B||null,parentid:B?B.id:null,path:B?[...B.path,w.name]:[w.name],isauthordirectory:!1,authorcover:"",ismoviedirectory:!1,cover:""};if(Q.id=Io(),B&&(B.name==="名"||B.name==="名1"||B.name==="名2"||B.name==="名3"||B.name==="名4")&&(Q.isauthordirectory=!0),w.kind==="directory"){Q.children=[];const ce=w.entries();for await(const x of ce){const ye=x[1],C=await va(ye,Q);if(Mt(C)&&C.name.indexOf("a.")===0){Q.isauthordirectory=!0;const k=await aa(C.handle);Q.authorcover=k?k.url:""}mt(C)&&(Q.ismoviedirectory=!0),Q.children.push(C)}Q.ismoviedirectory&&(Q.cover=await jo(Q))}return Q},xa=(w,B={})=>(B[w.id]=w,w.children&&w.children.length&&w.children.forEach(Q=>{xa(Q,B)}),B),aa=async w=>{if(w&&w.getFile)try{const B=await w.getFile(),Q=URL.createObjectURL(B);return{file:B,url:Q}}catch(B){return console.error(B),""}else return""},ha=async w=>{if(w)try{return await w.parent.handle.removeEntry(w.name,{recursive:!0}),""}catch(B){return console.error(B),B.message}else return"File does not exist."};var Ea={exports:{}};(function(w,B){(function(Q,ce){w.exports=ce()})(self,()=>(()=>{var Q={916:(C,k,_)=>{var R=_(471);C.exports=function(U){var h,c="",O=(U=U||{}).video,M=U.options,L=R.$escape,Y=U.tran,G=U.icons,N=U.index,re=R.$each;return U.$value,U.$index,c+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,h=_(568)(O),c+=h,c+=`
    `,M.logo&&(c+=`
    <div class="dplayer-logo">
        <img src="`,c+=L(M.logo),c+=`">
    </div>
    `),c+=`
    <div class="dplayer-danmaku"`,M.danmaku&&M.danmaku.bottom&&(c+=' style="margin-bottom:',c+=L(M.danmaku.bottom),c+='"'),c+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,M.danmaku&&(c+=`
        <span class="dplayer-danloading">`,c+=L(Y("danmaku-loading")),c+=`</span>
        `),c+=`
        <span class="diplayer-loading-icon">`,c+=G.loading,c+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,c+=L(Y("setting")),c+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,c+=G.pallette,c+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,c+=L(Y("set-danmaku-color")),c+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=L(N),c+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=L(N),c+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=L(N),c+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=L(N),c+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=L(N),c+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=L(N),c+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,c+=L(Y("set-danmaku-type")),c+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,c+=L(N),c+=`" value="1">
                    <span>`,c+=L(Y("top")),c+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,c+=L(N),c+=`" value="0" checked>
                    <span>`,c+=L(Y("rolling")),c+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,c+=L(N),c+=`" value="2">
                    <span>`,c+=L(Y("bottom")),c+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,c+=L(Y("input-danmaku-enter")),c+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,c+=L(Y("send")),c+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,c+=G.send,c+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,c+=G.play,c+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,c+=G.volumeDown,c+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,c+=L(M.theme),c+=`;">
                        <span class="dplayer-thumb" style="background: `,c+=L(M.theme),c+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,M.live&&(c+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,c+=L(M.theme),c+=';"></span>',c+=L(Y("live")),c+=`</span>
        `),c+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,M.video.quality&&(c+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,c+=L(M.video.quality[M.video.defaultQuality].name),c+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,re(M.video.quality,function(Z,j){c+=`
                    <div class="dplayer-quality-item" data-index="`,c+=L(j),c+='">',c+=L(Z.name),c+=`</div>
                `}),c+=`
                </div>
            </div>
        </div>
        `),c+=`
        `,M.screenshot&&(c+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,c+=L(Y("screenshot")),c+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,c+=G.camera,c+=`</span>
        </div>
        `),c+=`
        `,M.airplay&&(c+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,c+=L(Y("airplay")),c+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,c+=G.airplay,c+=`</span>
        </div>
        `),c+=`
        `,M.chromecast&&(c+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,c+=L(Y("chromecast")),c+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,c+=G.chromecast,c+=`</span>
        </div>
        `),c+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,c+=L(Y("send-danmaku")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=G.comment,c+=`</span>
            </button>
        </div>
        `,M.subtitle&&(c+=`
        `,typeof M.subtitle.url=="string"?(c+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,c+=L(Y("hide-subs")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=G.subtitle,c+=`</span>
            </button>
        </div>
        `):(c+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,c+=L(Y("subtitle")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=G.subtitle,c+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,re(M.subtitle.url,function(Z,j){c+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,c+=L(Z.url),c+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,c+=L(Z.lang?Z.name?Z.name+" ("+Y(Z.lang)+")":Y(Z.lang):Z.name),c+=`</span>
                        </div>
                    `}),c+=`
                </div>
            </div>
        </div>
        `),c+=`
        `),c+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,c+=L(Y("setting")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=G.setting,c+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,c+=L(Y("speed")),c+=`</span>
                        <div class="dplayer-toggle">`,c+=G.right,c+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,c+=L(Y("loop")),c+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,c+=L(Y("show-danmaku")),c+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,c+=L(Y("unlimited-danmaku")),c+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,c+=L(Y("opacity-danmaku")),c+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,re(M.playbackSpeed,function(Z,j){c+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,c+=L(Z),c+=`">
                            <span class="dplayer-label">`,c+=L(Z===1?Y("normal"):Z),c+=`</span>
                        </div>
                    `}),c+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,c+=L(Y("web-fullscreen")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=G.fullWeb,c+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,c+=L(Y("fullscreen")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=G.full,c+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,c+=L(M.theme),c+=`">
                <span class="dplayer-thumb" style="background: `,c+=L(M.theme),c+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,M.danmaku&&(c+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),c+=`
</div>
<div class="dplayer-menu">
    `,re(M.contextmenu,function(Z,j){c+=`
        <div class="dplayer-menu-item">
            <a`,Z.link&&(c+=' target="_blank"'),c+=' href="',c+=L(Z.link||"javascript:void(0);"),c+='">',Z.key&&(c+=" ",c+=L(Y(Z.key))),Z.text&&(c+=" ",c+=L(Z.text)),c+=`</a>
        </div>
    `}),c+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,c+=G.play,c+=`
</button>`}},568:(C,k,_)=>{var R=_(471);C.exports=function(U){var h="",c=(U=U||{}).enableSubtitle,O=U.subtitle,M=U.current,L=U.airplay,Y=U.pic,G=R.$escape,N=U.screenshot,re=U.preload,Z=U.url;return c=O&&O.type==="webvtt",h+=`
<video
    class="dplayer-video `,M&&(h+="dplayer-video-current"),h+=`"
    webkit-playsinline
    `,L&&(h+=' x-webkit-airplay="allow" '),h+=`
    playsinline
    `,Y&&(h+='poster="',h+=G(Y),h+='"'),h+=`
    `,(N||c)&&(h+='crossorigin="anonymous"'),h+=`
    `,re&&(h+='preload="',h+=G(re),h+='"'),h+=`
    `,L?h+=`
    nosrc
    `:Z&&(h+=`
    src="`,h+=G(Z),h+=`"
    `),h+=`
    >
    `,L&&(h+=`
    <source src="`,h+=G(Z),h+=`">
    `),h+=`
    `,c&&(h+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,h+=G(typeof O.url=="string"?O.url:O.url[O.index].url),h+=`"></track>
    `),h+`
</video>`}},49:(C,k,_)=>{_.d(k,{Z:()=>O});var R=_(415),U=_.n(R),h=_(352),c=_.n(h)()(U());c.push([C.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const O=c},685:(C,k,_)=>{_.d(k,{Z:()=>re});var R=_(415),U=_.n(R),h=_(352),c=_.n(h),O=_(49),M=_(80),L=_.n(M),Y=new URL(_(831),_.b),G=c()(U());G.i(O.Z);var N=L()(Y);G.push([C.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+N+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const re=G},856:C=>{var k=[];function _(h){for(var c=-1,O=0;O<k.length;O++)if(k[O].identifier===h){c=O;break}return c}function R(h,c){for(var O={},M=[],L=0;L<h.length;L++){var Y=h[L],G=c.base?Y[0]+c.base:Y[0],N=O[G]||0,re="".concat(G," ").concat(N);O[G]=N+1;var Z=_(re),j={css:Y[1],media:Y[2],sourceMap:Y[3],supports:Y[4],layer:Y[5]};if(Z!==-1)k[Z].references++,k[Z].updater(j);else{var oe=U(j,c);c.byIndex=L,k.splice(L,0,{identifier:re,updater:oe,references:1})}M.push(re)}return M}function U(h,c){var O=c.domAPI(c);return O.update(h),function(M){if(M){if(M.css===h.css&&M.media===h.media&&M.sourceMap===h.sourceMap&&M.supports===h.supports&&M.layer===h.layer)return;O.update(h=M)}else O.remove()}}C.exports=function(h,c){var O=R(h=h||[],c=c||{});return function(M){M=M||[];for(var L=0;L<O.length;L++){var Y=_(O[L]);k[Y].references--}for(var G=R(M,c),N=0;N<O.length;N++){var re=_(O[N]);k[re].references===0&&(k[re].updater(),k.splice(re,1))}O=G}}},370:C=>{var k={};C.exports=function(_,R){var U=function(h){if(k[h]===void 0){var c=document.querySelector(h);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch{c=null}k[h]=c}return k[h]}(_);if(!U)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");U.appendChild(R)}},278:C=>{C.exports=function(k){var _=document.createElement("style");return k.setAttributes(_,k.attributes),k.insert(_,k.options),_}},458:(C,k,_)=>{C.exports=function(R){var U=_.nc;U&&R.setAttribute("nonce",U)}},470:C=>{C.exports=function(k){var _=k.insertStyleElement(k);return{update:function(R){(function(U,h,c){var O="";c.supports&&(O+="@supports (".concat(c.supports,") {")),c.media&&(O+="@media ".concat(c.media," {"));var M=c.layer!==void 0;M&&(O+="@layer".concat(c.layer.length>0?" ".concat(c.layer):""," {")),O+=c.css,M&&(O+="}"),c.media&&(O+="}"),c.supports&&(O+="}");var L=c.sourceMap;L&&typeof btoa<"u"&&(O+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(L))))," */")),h.styleTagTransform(O,U,h.options)})(_,k,R)},remove:function(){(function(R){if(R.parentNode===null)return!1;R.parentNode.removeChild(R)})(_)}}}},488:C=>{C.exports=function(k,_){if(_.styleSheet)_.styleSheet.cssText=k;else{for(;_.firstChild;)_.removeChild(_.firstChild);_.appendChild(document.createTextNode(k))}}},251:C=>{C.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:C=>{C.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:C=>{C.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:C=>{C.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(C,k,_)=>{var R=typeof self<"u"?self:typeof window<"u"?window:_.g!==void 0?_.g:{},U=Object.create(R),h=/["&'<>]/;function c(O){return typeof O!="string"&&(O=O==null?"":typeof O=="function"?c(O.call(O)):JSON.stringify(O)),O}U.$escape=function(O){return function(M){var L=""+M,Y=h.exec(L);if(!Y)return M;var G="",N=void 0,re=void 0,Z=void 0;for(N=Y.index,re=0;N<L.length;N++){switch(L.charCodeAt(N)){case 34:Z="&#34;";break;case 38:Z="&#38;";break;case 39:Z="&#39;";break;case 60:Z="&#60;";break;case 62:Z="&#62;";break;default:continue}re!==N&&(G+=L.substring(re,N)),re=N+1,G+=Z}return re!==N?G+L.substring(re,N):G}(c(O))},U.$each=function(O,M){if(Array.isArray(O))for(var L=0,Y=O.length;L<Y;L++)M(O[L],L);else for(var G in O)M(O[G],G)},C.exports=U},471:(C,k,_)=>{C.exports=_(897)},352:C=>{C.exports=function(k){var _=[];return _.toString=function(){return this.map(function(R){var U="",h=R[5]!==void 0;return R[4]&&(U+="@supports (".concat(R[4],") {")),R[2]&&(U+="@media ".concat(R[2]," {")),h&&(U+="@layer".concat(R[5].length>0?" ".concat(R[5]):""," {")),U+=k(R),h&&(U+="}"),R[2]&&(U+="}"),R[4]&&(U+="}"),U}).join("")},_.i=function(R,U,h,c,O){typeof R=="string"&&(R=[[null,R,void 0]]);var M={};if(h)for(var L=0;L<this.length;L++){var Y=this[L][0];Y!=null&&(M[Y]=!0)}for(var G=0;G<R.length;G++){var N=[].concat(R[G]);h&&M[N[0]]||(O!==void 0&&(N[5]===void 0||(N[1]="@layer".concat(N[5].length>0?" ".concat(N[5]):""," {").concat(N[1],"}")),N[5]=O),U&&(N[2]&&(N[1]="@media ".concat(N[2]," {").concat(N[1],"}")),N[2]=U),c&&(N[4]?(N[1]="@supports (".concat(N[4],") {").concat(N[1],"}"),N[4]=c):N[4]="".concat(c)),_.push(N))}},_}},80:C=>{C.exports=function(k,_){return _||(_={}),k&&(k=String(k.__esModule?k.default:k),/^['"].*['"]$/.test(k)&&(k=k.slice(1,-1)),_.hash&&(k+=_.hash),/["'() \t\n]|(%20)/.test(k)||_.needQuotes?'"'.concat(k.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):k)}},415:C=>{C.exports=function(k){var _=k[1],R=k[3];if(!R)return _;if(typeof btoa=="function"){var U=btoa(unescape(encodeURIComponent(JSON.stringify(R)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(U),c="/*# ".concat(h," */");return[_].concat([c]).join(`
`)}return[_].join(`
`)}},937:C=>{function k(_){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},k(_)}C.exports=(typeof self>"u"?"undefined":k(self))=="object"?self.FormData:window.FormData},831:C=>{C.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},ce={};function x(C){var k=ce[C];if(k!==void 0)return k.exports;var _=ce[C]={id:C,exports:{}};return Q[C](_,_.exports,x),_.exports}x.m=Q,x.n=C=>{var k=C&&C.__esModule?()=>C.default:()=>C;return x.d(k,{a:k}),k},x.d=(C,k)=>{for(var _ in k)x.o(k,_)&&!x.o(C,_)&&Object.defineProperty(C,_,{enumerable:!0,get:k[_]})},x.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),x.o=(C,k)=>Object.prototype.hasOwnProperty.call(C,k),x.b=document.baseURI||self.location.href,x.nc=void 0;var ye={};return(()=>{x.d(ye,{default:()=>lo});var C=x(856),k=x.n(C),_=x(470),R=x.n(_),U=x(370),h=x.n(U),c=x(458),O=x.n(c),M=x(278),L=x.n(M),Y=x(488),G=x.n(Y),N=x(685),re={};re.styleTagTransform=G(),re.setAttributes=O(),re.insert=h().bind(null,"head"),re.domAPI=R(),re.insertStyleElement=L(),k()(N.Z,re),N.Z&&N.Z.locals&&N.Z.locals;function Z(n){return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(n)}function j(n,t){this.name="AggregateError",this.errors=n,this.message=t||""}j.prototype=Error.prototype;function oe(n){return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oe(n)}var se=setTimeout;function K(n){return!!(n&&n.length!==void 0)}function ie(){}function le(n){if(!(this instanceof le))throw new TypeError("Promises must be constructed via new");if(typeof n!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],an(n,this)}function Ie(n,t){for(;n._state===3;)n=n._value;n._state!==0?(n._handled=!0,le._immediateFn(function(){var o=n._state===1?t.onFulfilled:t.onRejected;if(o!==null){var e;try{e=o(n._value)}catch(a){return void Oe(t.promise,a)}Le(t.promise,e)}else(n._state===1?Le:Oe)(t.promise,n._value)})):n._deferreds.push(t)}function Le(n,t){try{if(t===n)throw new TypeError("A promise cannot be resolved with itself.");if(t&&(oe(t)==="object"||typeof t=="function")){var o=t.then;if(t instanceof le)return n._state=3,n._value=t,void He(n);if(typeof o=="function")return void an((e=o,a=t,function(){e.apply(a,arguments)}),n)}n._state=1,n._value=t,He(n)}catch(r){Oe(n,r)}var e,a}function Oe(n,t){n._state=2,n._value=t,He(n)}function He(n){n._state===2&&n._deferreds.length===0&&le._immediateFn(function(){n._handled||le._unhandledRejectionFn(n._value)});for(var t=0,o=n._deferreds.length;t<o;t++)Ie(n,n._deferreds[t]);n._deferreds=null}function tn(n,t,o){this.onFulfilled=typeof n=="function"?n:null,this.onRejected=typeof t=="function"?t:null,this.promise=o}function an(n,t){var o=!1;try{n(function(e){o||(o=!0,Le(t,e))},function(e){o||(o=!0,Oe(t,e))})}catch(e){if(o)return;o=!0,Oe(t,e)}}le.prototype.catch=function(n){return this.then(null,n)},le.prototype.then=function(n,t){var o=new this.constructor(ie);return Ie(this,new tn(n,t,o)),o},le.prototype.finally=function(n){var t=this.constructor;return this.then(function(o){return t.resolve(n()).then(function(){return o})},function(o){return t.resolve(n()).then(function(){return t.reject(o)})})},le.all=function(n){return new le(function(t,o){if(!K(n))return o(new TypeError("Promise.all accepts an array"));var e=Array.prototype.slice.call(n);if(e.length===0)return t([]);var a=e.length;function r(s,d){try{if(d&&(oe(d)==="object"||typeof d=="function")){var m=d.then;if(typeof m=="function")return void m.call(d,function(g){r(s,g)},o)}e[s]=d,--a==0&&t(e)}catch(g){o(g)}}for(var i=0;i<e.length;i++)r(i,e[i])})},le.any=function(n){var t=this;return new t(function(o,e){if(!n||n.length===void 0)return e(new TypeError("Promise.any accepts an array"));var a=Array.prototype.slice.call(n);if(a.length===0)return e();for(var r=[],i=0;i<a.length;i++)try{t.resolve(a[i]).then(o).catch(function(s){r.push(s),r.length===a.length&&e(new j(r,"All promises were rejected"))})}catch(s){e(s)}})},le.allSettled=function(n){return new this(function(t,o){if(!n||n.length===void 0)return o(new TypeError(Z(n)+" "+n+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var e=Array.prototype.slice.call(n);if(e.length===0)return t([]);var a=e.length;function r(s,d){if(d&&(Z(d)==="object"||typeof d=="function")){var m=d.then;if(typeof m=="function")return void m.call(d,function(g){r(s,g)},function(g){e[s]={status:"rejected",reason:g},--a==0&&t(e)})}e[s]={status:"fulfilled",value:d},--a==0&&t(e)}for(var i=0;i<e.length;i++)r(i,e[i])})},le.resolve=function(n){return n&&oe(n)==="object"&&n.constructor===le?n:new le(function(t){t(n)})},le.reject=function(n){return new le(function(t,o){o(n)})},le.race=function(n){return new le(function(t,o){if(!K(n))return o(new TypeError("Promise.race accepts an array"));for(var e=0,a=n.length;e<a;e++)le.resolve(n[e]).then(t,o)})},le._immediateFn=typeof setImmediate=="function"&&function(n){setImmediate(n)}||function(n){se(n,0)},le._unhandledRejectionFn=function(n){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",n)};const he=le;var Ge=/mobile/i.test(window.navigator.userAgent);const ee={secondToTime:function(n){if((n=n||0)===0||n===1/0||n.toString()==="NaN")return"00:00";var t=Math.floor(n/3600),o=Math.floor((n-3600*t)/60),e=Math.floor(n-3600*t-60*o);return(t>0?[t,o,e]:[o,e]).map(function(a){return a<10?"0"+a:""+a}).join(":")},getElementViewLeft:function(n){var t=n.offsetLeft,o=n.offsetParent,e=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;o!==null&&o!==n;)t+=o.offsetLeft,o=o.offsetParent;else for(;o!==null;)t+=o.offsetLeft,o=o.offsetParent;return t-e},getBoundingClientRectViewLeft:function(n){var t=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(n.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var o=document.createElement("div");o.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(o),this.getBoundingClientRectViewLeft.offset=-o.getBoundingClientRect().top-t,document.body.removeChild(o),o=null}var e=n.getBoundingClientRect(),a=this.getBoundingClientRectViewLeft.offset;return e.left+a}return this.getElementViewLeft(n)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(n){var t=n.left,o=t===void 0?0:t,e=n.top,a=e===void 0?0:e;this.isFirefox?(document.documentElement.scrollLeft=o,document.documentElement.scrollTop=a):window.scrollTo(o,a)},isMobile:Ge,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(n,t){localStorage.setItem(n,t)},get:function(n){return localStorage.getItem(n)}},nameMap:{dragStart:Ge?"touchstart":"mousedown",dragMove:Ge?"touchmove":"mousemove",dragEnd:Ge?"touchend":"mouseup"},color2Number:function(n){return n[0]==="#"&&(n=n.substr(1)),n.length===3&&(n="".concat(n[0]).concat(n[0]).concat(n[1]).concat(n[1]).concat(n[2]).concat(n[2])),parseInt(n,16)+0&16777215},number2Color:function(n){return"#"+("00000"+n.toString(16)).slice(-6)},number2Type:function(n){switch(n){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function xn(n,t){return function(){return n.apply(t,arguments)}}function b(n){return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(n)}var S,X=Object.prototype.toString,$=Object.getPrototypeOf,fe=(S=Object.create(null),function(n){var t=X.call(n);return S[t]||(S[t]=t.slice(8,-1).toLowerCase())}),ae=function(n){return n=n.toLowerCase(),function(t){return fe(t)===n}},ze=function(n){return function(t){return b(t)===n}},we=Array.isArray,Me=ze("undefined"),qe=ae("ArrayBuffer"),un=ze("string"),ne=ze("function"),ke=ze("number"),Qe=function(n){return n!==null&&b(n)==="object"},Ye=function(n){if(fe(n)!=="object")return!1;var t=$(n);return!(t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.toStringTag in n||Symbol.iterator in n)},Yt=ae("Date"),ht=ae("File"),En=ae("Blob"),On=ae("FileList"),Rn=ae("URLSearchParams");function en(n,t){var o,e,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.allOwnKeys,i=r!==void 0&&r;if(n!=null)if(b(n)!=="object"&&(n=[n]),we(n))for(o=0,e=n.length;o<e;o++)t.call(null,n[o],o,n);else{var s,d=i?Object.getOwnPropertyNames(n):Object.keys(n),m=d.length;for(o=0;o<m;o++)s=d[o],t.call(null,n[s],s,n)}}function qn(n,t){t=t.toLowerCase();for(var o,e=Object.keys(n),a=e.length;a-- >0;)if(t===(o=e[a]).toLowerCase())return o;return null}var wn,jn,Pn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:ft,Nn=function(n){return!Me(n)&&n!==Pn},bt=(wn=typeof Uint8Array<"u"&&$(Uint8Array),function(n){return wn&&n instanceof wn}),gt=ae("HTMLFormElement"),Mn=(jn=Object.prototype.hasOwnProperty,function(n,t){return jn.call(n,t)}),vt=ae("RegExp"),Yn=function(n,t){var o=Object.getOwnPropertyDescriptors(n),e={};en(o,function(a,r){t(a,r,n)!==!1&&(e[r]=a)}),Object.defineProperties(n,e)};const E={isArray:we,isArrayBuffer:qe,isBuffer:function(n){return n!==null&&!Me(n)&&n.constructor!==null&&!Me(n.constructor)&&ne(n.constructor.isBuffer)&&n.constructor.isBuffer(n)},isFormData:function(n){var t="[object FormData]";return n&&(typeof FormData=="function"&&n instanceof FormData||X.call(n)===t||ne(n.toString)&&n.toString()===t)},isArrayBufferView:function(n){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&qe(n.buffer)},isString:un,isNumber:ke,isBoolean:function(n){return n===!0||n===!1},isObject:Qe,isPlainObject:Ye,isUndefined:Me,isDate:Yt,isFile:ht,isBlob:En,isRegExp:vt,isFunction:ne,isStream:function(n){return Qe(n)&&ne(n.pipe)},isURLSearchParams:Rn,isTypedArray:bt,isFileList:On,forEach:en,merge:function n(){for(var t=Nn(this)&&this||{},o=t.caseless,e={},a=function(s,d){var m=o&&qn(e,d)||d;Ye(e[m])&&Ye(s)?e[m]=n(e[m],s):Ye(s)?e[m]=n({},s):we(s)?e[m]=s.slice():e[m]=s},r=0,i=arguments.length;r<i;r++)arguments[r]&&en(arguments[r],a);return e},extend:function(n,t,o){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=e.allOwnKeys;return en(t,function(r,i){o&&ne(r)?n[i]=xn(r,o):n[i]=r},{allOwnKeys:a}),n},trim:function(n){return n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(n){return n.charCodeAt(0)===65279&&(n=n.slice(1)),n},inherits:function(n,t,o,e){n.prototype=Object.create(t.prototype,e),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:t.prototype}),o&&Object.assign(n.prototype,o)},toFlatObject:function(n,t,o,e){var a,r,i,s={};if(t=t||{},n==null)return t;do{for(r=(a=Object.getOwnPropertyNames(n)).length;r-- >0;)i=a[r],e&&!e(i,n,t)||s[i]||(t[i]=n[i],s[i]=!0);n=o!==!1&&$(n)}while(n&&(!o||o(n,t))&&n!==Object.prototype);return t},kindOf:fe,kindOfTest:ae,endsWith:function(n,t,o){n=String(n),(o===void 0||o>n.length)&&(o=n.length),o-=t.length;var e=n.indexOf(t,o);return e!==-1&&e===o},toArray:function(n){if(!n)return null;if(we(n))return n;var t=n.length;if(!ke(t))return null;for(var o=new Array(t);t-- >0;)o[t]=n[t];return o},forEachEntry:function(n,t){for(var o,e=(n&&n[Symbol.iterator]).call(n);(o=e.next())&&!o.done;){var a=o.value;t.call(n,a[0],a[1])}},matchAll:function(n,t){for(var o,e=[];(o=n.exec(t))!==null;)e.push(o);return e},isHTMLForm:gt,hasOwnProperty:Mn,hasOwnProp:Mn,reduceDescriptors:Yn,freezeMethods:function(n){Yn(n,function(t,o){if(ne(n)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;var e=n[o];ne(e)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+o+"'")}))})},toObjectSet:function(n,t){var o={},e=function(a){a.forEach(function(r){o[r]=!0})};return we(n)?e(n):e(String(n).split(t)),o},toCamelCase:function(n){return n.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(t,o,e){return o.toUpperCase()+e})},noop:function(){},toFiniteNumber:function(n,t){return n=+n,Number.isFinite(n)?n:t},findKey:qn,global:Pn,isContextDefined:Nn,toJSONObject:function(n){var t=new Array(10);return function o(e,a){if(Qe(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[a]=e;var r=we(e)?[]:{};return en(e,function(i,s){var d=o(i,a+1);!Me(d)&&(r[s]=d)}),t[a]=void 0,r}}return e}(n,0)}};function nn(n,t,o,e,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",t&&(this.code=t),o&&(this.config=o),e&&(this.request=e),a&&(this.response=a)}E.inherits(nn,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Cn=nn.prototype,xt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(n){xt[n]={value:n}}),Object.defineProperties(nn,xt),Object.defineProperty(Cn,"isAxiosError",{value:!0}),nn.from=function(n,t,o,e,a,r){var i=Object.create(Cn);return E.toFlatObject(n,i,function(s){return s!==Error.prototype},function(s){return s!=="isAxiosError"}),nn.call(i,n.message,t,o,e,a),i.cause=n,i.name=n.name,r&&Object.assign(i,r),i};const me=nn,Fn=x(937);function kn(n){return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kn(n)}function Un(n){return E.isPlainObject(n)||E.isArray(n)}function Ke(n){return E.endsWith(n,"[]")?n.slice(0,-2):n}function Et(n,t,o){return n?n.concat(t).map(function(e,a){return e=Ke(e),!o&&a?"["+e+"]":e}).join(o?".":""):t}var Ft=E.toFlatObject(E,{},null,function(n){return/^is[A-Z]/.test(n)});const yn=function(n,t,o){if(!E.isObject(n))throw new TypeError("target must be an object");t=t||new(Fn||FormData);var e,a=(o=E.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(H,W){return!E.isUndefined(W[H])})).metaTokens,r=o.visitor||g,i=o.dots,s=o.indexes,d=(o.Blob||typeof Blob<"u"&&Blob)&&(e=t)&&E.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator];if(!E.isFunction(r))throw new TypeError("visitor must be a function");function m(H){if(H===null)return"";if(E.isDate(H))return H.toISOString();if(!d&&E.isBlob(H))throw new me("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(H)||E.isTypedArray(H)?d&&typeof Blob=="function"?new Blob([H]):Buffer.from(H):H}function g(H,W,P){var J=H;if(H&&!P&&kn(H)==="object"){if(E.endsWith(W,"{}"))W=a?W:W.slice(0,-2),H=JSON.stringify(H);else if(E.isArray(H)&&function(te){return E.isArray(te)&&!te.some(Un)}(H)||E.isFileList(H)||E.endsWith(W,"[]")&&(J=E.toArray(H)))return W=Ke(W),J.forEach(function(te,Te){!E.isUndefined(te)&&te!==null&&t.append(s===!0?Et([W],Te,i):s===null?W:W+"[]",m(te))}),!1}return!!Un(H)||(t.append(Et(P,W,i),m(H)),!1)}var q=[],F=Object.assign(Ft,{defaultVisitor:g,convertValue:m,isVisitable:Un});if(!E.isObject(n))throw new TypeError("data must be an object");return function H(W,P){if(!E.isUndefined(W)){if(q.indexOf(W)!==-1)throw Error("Circular reference detected in "+P.join("."));q.push(W),E.forEach(W,function(J,te){(!(E.isUndefined(J)||J===null)&&r.call(t,J,E.isString(te)?te.trim():te,P,F))===!0&&H(J,P?P.concat(te):[te])}),q.pop()}}(n),t};function wt(n){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function Ct(n,t){this._pairs=[],n&&yn(n,this,t)}var kt=Ct.prototype;kt.append=function(n,t){this._pairs.push([n,t])},kt.toString=function(n){var t=n?function(o){return n.call(this,o,wt)}:wt;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};const Bt=Ct;function Ut(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function St(n,t,o){if(!t)return n;var e,a=o&&o.encode||Ut,r=o&&o.serialize;if(e=r?r(t,o):E.isURLSearchParams(t)?t.toString():new Bt(t,o).toString(a)){var i=n.indexOf("#");i!==-1&&(n=n.slice(0,i)),n+=(n.indexOf("?")===-1?"?":"&")+e}return n}function An(n){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(n)}function Wt(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(An(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(An(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),An(a)==="symbol"?a:String(a)),e)}var a}var Ht=function(){function n(){(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,n),this.handlers=[]}var t,o;return t=n,o=[{key:"use",value:function(e,a,r){return this.handlers.push({fulfilled:e,rejected:a,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){E.forEach(this.handlers,function(a){a!==null&&e(a)})}}],o&&Wt(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const It=Ht,Wn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Qt=typeof URLSearchParams<"u"?URLSearchParams:Bt,Kt=FormData;var Hn,Vt=(typeof navigator>"u"||(Hn=navigator.product)!=="ReactNative"&&Hn!=="NativeScript"&&Hn!=="NS")&&typeof window<"u"&&typeof document<"u",Zt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const Ue={isBrowser:!0,classes:{URLSearchParams:Qt,FormData:Kt,Blob},isStandardBrowserEnv:Vt,isStandardBrowserWebWorkerEnv:Zt,protocols:["http","https","file","blob","url","data"]},_t=function(n){function t(e,a,r,i){var s=e[i++],d=Number.isFinite(+s),m=i>=e.length;return s=!s&&E.isArray(r)?r.length:s,m?(E.hasOwnProp(r,s)?r[s]=[r[s],a]:r[s]=a,!d):(r[s]&&E.isObject(r[s])||(r[s]=[]),t(e,a,r[s],i)&&E.isArray(r[s])&&(r[s]=function(g){var q,F,H={},W=Object.keys(g),P=W.length;for(q=0;q<P;q++)H[F=W[q]]=g[F];return H}(r[s])),!d)}if(E.isFormData(n)&&E.isFunction(n.entries)){var o={};return E.forEachEntry(n,function(e,a){t(function(r){return E.matchAll(/\w+|\[(\w*)]/g,r).map(function(i){return i[0]==="[]"?"":i[1]||i[0]})}(e),a,o,0)}),o}return null};var Xt={"Content-Type":void 0},Bn={transitional:Wn,adapter:["xhr","http"],transformRequest:[function(n,t){var o,e=t.getContentType()||"",a=e.indexOf("application/json")>-1,r=E.isObject(n);if(r&&E.isHTMLForm(n)&&(n=new FormData(n)),E.isFormData(n))return a&&a?JSON.stringify(_t(n)):n;if(E.isArrayBuffer(n)||E.isBuffer(n)||E.isStream(n)||E.isFile(n)||E.isBlob(n))return n;if(E.isArrayBufferView(n))return n.buffer;if(E.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();if(r){if(e.indexOf("application/x-www-form-urlencoded")>-1)return function(s,d){return yn(s,new Ue.classes.URLSearchParams,Object.assign({visitor:function(m,g,q,F){return Ue.isNode&&E.isBuffer(m)?(this.append(g,m.toString("base64")),!1):F.defaultVisitor.apply(this,arguments)}},d))}(n,this.formSerializer).toString();if((o=E.isFileList(n))||e.indexOf("multipart/form-data")>-1){var i=this.env&&this.env.FormData;return yn(o?{"files[]":n}:n,i&&new i,this.formSerializer)}}return r||a?(t.setContentType("application/json",!1),function(s,d,m){if(E.isString(s))try{return(0,JSON.parse)(s),E.trim(s)}catch(g){if(g.name!=="SyntaxError")throw g}return(0,JSON.stringify)(s)}(n)):n}],transformResponse:[function(n){var t=this.transitional||Bn.transitional,o=t&&t.forcedJSONParsing,e=this.responseType==="json";if(n&&E.isString(n)&&(o&&!this.responseType||e)){var a=!(t&&t.silentJSONParsing)&&e;try{return JSON.parse(n)}catch(r){if(a)throw r.name==="SyntaxError"?me.from(r,me.ERR_BAD_RESPONSE,this,null,this.response):r}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ue.classes.FormData,Blob:Ue.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(n){Bn.headers[n]={}}),E.forEach(["post","put","patch"],function(n){Bn.headers[n]=E.merge(Xt)});const Qn=Bn;var Jt=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function fn(n){return fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fn(n)}function Lt(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,e=new Array(t);o<t;o++)e[o]=n[o];return e}function zt(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(fn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(fn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),fn(a)==="symbol"?a:String(a)),e)}var a}var Tt=Symbol("internals");function rn(n){return n&&String(n).trim().toLowerCase()}function $e(n){return n===!1||n==null?n:E.isArray(n)?n.map($e):String(n)}function Kn(n,t,o,e){return E.isFunction(e)?e.call(this,t,o):E.isString(t)?E.isString(e)?t.indexOf(e)!==-1:E.isRegExp(e)?e.test(t):void 0:void 0}var Ve=function(n,t){function o(i){(function(s,d){if(!(s instanceof d))throw new TypeError("Cannot call a class as a function")})(this,o),i&&this.set(i)}var e,a,r;return e=o,a=[{key:"set",value:function(i,s,d){var m=this;function g(te,Te,Se){var be=rn(Te);if(!be)throw new Error("header name must be a non-empty string");var sn=E.findKey(m,be);(!sn||m[sn]===void 0||Se===!0||Se===void 0&&m[sn]!==!1)&&(m[sn||Te]=$e(te))}var q,F,H,W,P,J=function(te,Te){return E.forEach(te,function(Se,be){return g(Se,be,Te)})};return E.isPlainObject(i)||i instanceof this.constructor?J(i,s):E.isString(i)&&(i=i.trim())&&!/^[-_a-zA-Z]+$/.test(i.trim())?J((P={},(q=i)&&q.split(`
`).forEach(function(te){W=te.indexOf(":"),F=te.substring(0,W).trim().toLowerCase(),H=te.substring(W+1).trim(),!F||P[F]&&Jt[F]||(F==="set-cookie"?P[F]?P[F].push(H):P[F]=[H]:P[F]=P[F]?P[F]+", "+H:H)}),P),s):i!=null&&g(s,i,d),this}},{key:"get",value:function(i,s){if(i=rn(i)){var d=E.findKey(this,i);if(d){var m=this[d];if(!s)return m;if(s===!0)return function(g){for(var q,F=Object.create(null),H=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;q=H.exec(g);)F[q[1]]=q[2];return F}(m);if(E.isFunction(s))return s.call(this,m,d);if(E.isRegExp(s))return s.exec(m);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(i,s){if(i=rn(i)){var d=E.findKey(this,i);return!(!d||s&&!Kn(0,this[d],d,s))}return!1}},{key:"delete",value:function(i,s){var d=this,m=!1;function g(q){if(q=rn(q)){var F=E.findKey(d,q);!F||s&&!Kn(0,d[F],F,s)||(delete d[F],m=!0)}}return E.isArray(i)?i.forEach(g):g(i),m}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(i){var s=this,d={};return E.forEach(this,function(m,g){var q=E.findKey(d,g);if(q)return s[q]=$e(m),void delete s[g];var F=i?function(H){return H.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(W,P,J){return P.toUpperCase()+J})}(g):String(g).trim();F!==g&&delete s[g],s[F]=$e(m),d[F]=!0}),this}},{key:"concat",value:function(){for(var i,s=arguments.length,d=new Array(s),m=0;m<s;m++)d[m]=arguments[m];return(i=this.constructor).concat.apply(i,[this].concat(d))}},{key:"toJSON",value:function(i){var s=Object.create(null);return E.forEach(this,function(d,m){d!=null&&d!==!1&&(s[m]=i&&E.isArray(d)?d.join(", "):d)}),s}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(i){var s,d,m=(d=2,function(g){if(Array.isArray(g))return g}(s=i)||function(g,q){var F=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(F!=null){var H,W,P,J,te=[],Te=!0,Se=!1;try{if(P=(F=F.call(g)).next,q===0){if(Object(F)!==F)return;Te=!1}else for(;!(Te=(H=P.call(F)).done)&&(te.push(H.value),te.length!==q);Te=!0);}catch(be){Se=!0,W=be}finally{try{if(!Te&&F.return!=null&&(J=F.return(),Object(J)!==J))return}finally{if(Se)throw W}}return te}}(s,d)||function(g,q){if(g){if(typeof g=="string")return Lt(g,q);var F=Object.prototype.toString.call(g).slice(8,-1);return F==="Object"&&g.constructor&&(F=g.constructor.name),F==="Map"||F==="Set"?Array.from(g):F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?Lt(g,q):void 0}}(s,d)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return m[0]+": "+m[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],r=[{key:"from",value:function(i){return i instanceof this?i:new this(i)}},{key:"concat",value:function(i){for(var s=new this(i),d=arguments.length,m=new Array(d>1?d-1:0),g=1;g<d;g++)m[g-1]=arguments[g];return m.forEach(function(q){return s.set(q)}),s}},{key:"accessor",value:function(i){var s=(this[Tt]=this[Tt]={accessors:{}}).accessors,d=this.prototype;function m(g){var q=rn(g);s[q]||(function(F,H){var W=E.toCamelCase(" "+H);["get","set","has"].forEach(function(P){Object.defineProperty(F,P+W,{value:function(J,te,Te){return this[P].call(this,H,J,te,Te)},configurable:!0})})}(d,g),s[q]=!0)}return E.isArray(i)?i.forEach(m):m(i),this}}],a&&zt(e.prototype,a),r&&zt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),o}();Ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),E.freezeMethods(Ve.prototype),E.freezeMethods(Ve);const Ze=Ve;function on(n,t){var o=this||Qn,e=t||o,a=Ze.from(e.headers),r=e.data;return E.forEach(n,function(i){r=i.call(o,r,a.normalize(),t?t.status:void 0)}),a.normalize(),r}function Sn(n){return!(!n||!n.__CANCEL__)}function Dt(n,t,o){me.call(this,n??"canceled",me.ERR_CANCELED,t,o),this.name="CanceledError"}E.inherits(Dt,me,{__CANCEL__:!0});const In=Dt,Vn=Ue.isStandardBrowserEnv?{write:function(n,t,o,e,a,r){var i=[];i.push(n+"="+encodeURIComponent(t)),E.isNumber(o)&&i.push("expires="+new Date(o).toGMTString()),E.isString(e)&&i.push("path="+e),E.isString(a)&&i.push("domain="+a),r===!0&&i.push("secure"),document.cookie=i.join("; ")},read:function(n){var t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ot(n,t){return n&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(o,e){return e?o.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):o}(n,t):t}const $t=Ue.isStandardBrowserEnv?function(){var n,t=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function e(a){var r=a;return t&&(o.setAttribute("href",r),r=o.href),o.setAttribute("href",r),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:o.pathname.charAt(0)==="/"?o.pathname:"/"+o.pathname}}return n=e(window.location.href),function(a){var r=E.isString(a)?e(a):a;return r.protocol===n.protocol&&r.host===n.host}}():function(){return!0};function l(n,t){var o=0,e=function(a,r){a=a||10;var i,s=new Array(a),d=new Array(a),m=0,g=0;return r=r!==void 0?r:1e3,function(q){var F=Date.now(),H=d[g];i||(i=F),s[m]=q,d[m]=F;for(var W=g,P=0;W!==m;)P+=s[W++],W%=a;if((m=(m+1)%a)===g&&(g=(g+1)%a),!(F-i<r)){var J=H&&F-H;return J?Math.round(1e3*P/J):void 0}}}(50,250);return function(a){var r=a.loaded,i=a.lengthComputable?a.total:void 0,s=r-o,d=e(s);o=r;var m={loaded:r,total:i,progress:i?r/i:void 0,bytes:s,rate:d||void 0,estimated:d&&i&&r<=i?(i-r)/d:void 0,event:a};m[t?"download":"upload"]=!0,n(m)}}var p={http:null,xhr:typeof XMLHttpRequest<"u"&&function(n){return new Promise(function(t,o){var e,a=n.data,r=Ze.from(n.headers).normalize(),i=n.responseType;function s(){n.cancelToken&&n.cancelToken.unsubscribe(e),n.signal&&n.signal.removeEventListener("abort",e)}E.isFormData(a)&&(Ue.isStandardBrowserEnv||Ue.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);var d=new XMLHttpRequest;if(n.auth){var m=n.auth.username||"",g=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";r.set("Authorization","Basic "+btoa(m+":"+g))}var q=Ot(n.baseURL,n.url);function F(){if(d){var J=Ze.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders());(function(te,Te,Se){var be=Se.config.validateStatus;Se.status&&be&&!be(Se.status)?Te(new me("Request failed with status code "+Se.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(Se.status/100)-4],Se.config,Se.request,Se)):te(Se)})(function(te){t(te),s()},function(te){o(te),s()},{data:i&&i!=="text"&&i!=="json"?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:J,config:n,request:d}),d=null}}if(d.open(n.method.toUpperCase(),St(q,n.params,n.paramsSerializer),!0),d.timeout=n.timeout,"onloadend"in d?d.onloadend=F:d.onreadystatechange=function(){d&&d.readyState===4&&(d.status!==0||d.responseURL&&d.responseURL.indexOf("file:")===0)&&setTimeout(F)},d.onabort=function(){d&&(o(new me("Request aborted",me.ECONNABORTED,n,d)),d=null)},d.onerror=function(){o(new me("Network Error",me.ERR_NETWORK,n,d)),d=null},d.ontimeout=function(){var J=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded",te=n.transitional||Wn;n.timeoutErrorMessage&&(J=n.timeoutErrorMessage),o(new me(J,te.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,n,d)),d=null},Ue.isStandardBrowserEnv){var H=(n.withCredentials||$t(q))&&n.xsrfCookieName&&Vn.read(n.xsrfCookieName);H&&r.set(n.xsrfHeaderName,H)}a===void 0&&r.setContentType(null),"setRequestHeader"in d&&E.forEach(r.toJSON(),function(J,te){d.setRequestHeader(te,J)}),E.isUndefined(n.withCredentials)||(d.withCredentials=!!n.withCredentials),i&&i!=="json"&&(d.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&d.addEventListener("progress",l(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",l(n.onUploadProgress)),(n.cancelToken||n.signal)&&(e=function(J){d&&(o(!J||J.type?new In(null,n,d):J),d.abort(),d=null)},n.cancelToken&&n.cancelToken.subscribe(e),n.signal&&(n.signal.aborted?e():n.signal.addEventListener("abort",e)));var W,P=(W=/^([-+\w]{1,25})(:?\/\/|:)/.exec(q))&&W[1]||"";P&&Ue.protocols.indexOf(P)===-1?o(new me("Unsupported protocol "+P+":",me.ERR_BAD_REQUEST,n)):d.send(a||null)})}};E.forEach(p,function(n,t){if(n){try{Object.defineProperty(n,"name",{value:t})}catch{}Object.defineProperty(n,"adapterName",{value:t})}});function A(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new In(null,n)}function f(n){return A(n),n.headers=Ze.from(n.headers),n.data=on.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),function(t){for(var o,e,a=(t=E.isArray(t)?t:[t]).length,r=0;r<a&&(o=t[r],!(e=E.isString(o)?p[o.toLowerCase()]:o));r++);if(!e)throw e===!1?new me("Adapter ".concat(o," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(E.hasOwnProp(p,o)?"Adapter '".concat(o,"' is not available in the build"):"Unknown adapter '".concat(o,"'"));if(!E.isFunction(e))throw new TypeError("adapter is not a function");return e}(n.adapter||Qn.adapter)(n).then(function(t){return A(n),t.data=on.call(n,n.transformResponse,t),t.headers=Ze.from(t.headers),t},function(t){return Sn(t)||(A(n),t&&t.response&&(t.response.data=on.call(n,n.transformResponse,t.response),t.response.headers=Ze.from(t.response.headers))),Promise.reject(t)})}var y=function(n){return n instanceof Ze?n.toJSON():n};function v(n,t){t=t||{};var o={};function e(m,g,q){return E.isPlainObject(m)&&E.isPlainObject(g)?E.merge.call({caseless:q},m,g):E.isPlainObject(g)?E.merge({},g):E.isArray(g)?g.slice():g}function a(m,g,q){return E.isUndefined(g)?E.isUndefined(m)?void 0:e(void 0,m,q):e(m,g,q)}function r(m,g){if(!E.isUndefined(g))return e(void 0,g)}function i(m,g){return E.isUndefined(g)?E.isUndefined(m)?void 0:e(void 0,m):e(void 0,g)}function s(m,g,q){return q in t?e(m,g):q in n?e(void 0,m):void 0}var d={url:r,method:r,data:r,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:s,headers:function(m,g){return a(y(m),y(g),!0)}};return E.forEach(Object.keys(n).concat(Object.keys(t)),function(m){var g=d[m]||a,q=g(n[m],t[m],m);E.isUndefined(q)&&g!==s||(o[m]=q)}),o}function I(n){return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(n)}var z={};["object","boolean","number","function","string","symbol"].forEach(function(n,t){z[n]=function(o){return I(o)===n||"a"+(t<1?"n ":" ")+n}});var T={};z.transitional=function(n,t,o){function e(a,r){return"[Axios v1.2.3] Transitional option '"+a+"'"+r+(o?". "+o:"")}return function(a,r,i){if(n===!1)throw new me(e(r," has been removed"+(t?" in "+t:"")),me.ERR_DEPRECATED);return t&&!T[r]&&(T[r]=!0,console.warn(e(r," has been deprecated since v"+t+" and will be removed in the near future"))),!n||n(a,r,i)}};const D={assertOptions:function(n,t,o){if(I(n)!=="object")throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);for(var e=Object.keys(n),a=e.length;a-- >0;){var r=e[a],i=t[r];if(i){var s=n[r],d=s===void 0||i(s,r,n);if(d!==!0)throw new me("option "+r+" must be "+d,me.ERR_BAD_OPTION_VALUE)}else if(o!==!0)throw new me("Unknown option "+r,me.ERR_BAD_OPTION)}},validators:z};function V(n){return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(n)}function de(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(V(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(V(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),V(a)==="symbol"?a:String(a)),e)}var a}var pe=D.validators,ue=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.defaults=e,this.interceptors={request:new It,response:new It}}var t,o;return t=n,(o=[{key:"request",value:function(e,a){typeof e=="string"?(a=a||{}).url=e:a=e||{};var r,i=a=v(this.defaults,a),s=i.transitional,d=i.paramsSerializer,m=i.headers;s!==void 0&&D.assertOptions(s,{silentJSONParsing:pe.transitional(pe.boolean),forcedJSONParsing:pe.transitional(pe.boolean),clarifyTimeoutError:pe.transitional(pe.boolean)},!1),d!==void 0&&D.assertOptions(d,{encode:pe.function,serialize:pe.function},!0),a.method=(a.method||this.defaults.method||"get").toLowerCase(),(r=m&&E.merge(m.common,m[a.method]))&&E.forEach(["delete","get","head","post","put","patch","common"],function(be){delete m[be]}),a.headers=Ze.concat(r,m);var g=[],q=!0;this.interceptors.request.forEach(function(be){typeof be.runWhen=="function"&&be.runWhen(a)===!1||(q=q&&be.synchronous,g.unshift(be.fulfilled,be.rejected))});var F,H=[];this.interceptors.response.forEach(function(be){H.push(be.fulfilled,be.rejected)});var W,P=0;if(!q){var J=[f.bind(this),void 0];for(J.unshift.apply(J,g),J.push.apply(J,H),W=J.length,F=Promise.resolve(a);P<W;)F=F.then(J[P++],J[P++]);return F}W=g.length;var te=a;for(P=0;P<W;){var Te=g[P++],Se=g[P++];try{te=Te(te)}catch(be){Se.call(this,be);break}}try{F=f.call(this,te)}catch(be){return Promise.reject(be)}for(P=0,W=H.length;P<W;)F=F.then(H[P++],H[P++]);return F}},{key:"getUri",value:function(e){return St(Ot((e=v(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}])&&de(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();E.forEach(["delete","get","head","options"],function(n){ue.prototype[n]=function(t,o){return this.request(v(o||{},{method:n,url:t,data:(o||{}).data}))}}),E.forEach(["post","put","patch"],function(n){function t(o){return function(e,a,r){return this.request(v(r||{},{method:n,headers:o?{"Content-Type":"multipart/form-data"}:{},url:e,data:a}))}}ue.prototype[n]=t(),ue.prototype[n+"Form"]=t(!0)});const xe=ue;function ve(n){return ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ve(n)}function je(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(ve(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(ve(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),ve(a)==="symbol"?a:String(a)),e)}var a}var mn=function(){function n(a){if(function(s,d){if(!(s instanceof d))throw new TypeError("Cannot call a class as a function")}(this,n),typeof a!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(s){r=s});var i=this;this.promise.then(function(s){if(i._listeners){for(var d=i._listeners.length;d-- >0;)i._listeners[d](s);i._listeners=null}}),this.promise.then=function(s){var d,m=new Promise(function(g){i.subscribe(g),d=g}).then(s);return m.cancel=function(){i.unsubscribe(d)},m},a(function(s,d,m){i.reason||(i.reason=new In(s,d,m),r(i.reason))})}var t,o,e;return t=n,o=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(a){this.reason?a(this.reason):this._listeners?this._listeners.push(a):this._listeners=[a]}},{key:"unsubscribe",value:function(a){if(this._listeners){var r=this._listeners.indexOf(a);r!==-1&&this._listeners.splice(r,1)}}}],e=[{key:"source",value:function(){var a;return{token:new n(function(r){a=r}),cancel:a}}}],o&&je(t.prototype,o),e&&je(t,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Zn=mn;function Rt(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,e=new Array(t);o<t;o++)e[o]=n[o];return e}var hn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(hn).forEach(function(n){var t,o,e=(o=2,function(i){if(Array.isArray(i))return i}(t=n)||function(i,s){var d=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(d!=null){var m,g,q,F,H=[],W=!0,P=!1;try{if(q=(d=d.call(i)).next,s===0){if(Object(d)!==d)return;W=!1}else for(;!(W=(m=q.call(d)).done)&&(H.push(m.value),H.length!==s);W=!0);}catch(J){P=!0,g=J}finally{try{if(!W&&d.return!=null&&(F=d.return(),Object(F)!==F))return}finally{if(P)throw g}}return H}}(t,o)||function(i,s){if(i){if(typeof i=="string")return Rt(i,s);var d=Object.prototype.toString.call(i).slice(8,-1);return d==="Object"&&i.constructor&&(d=i.constructor.name),d==="Map"||d==="Set"?Array.from(i):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?Rt(i,s):void 0}}(t,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),a=e[0],r=e[1];hn[r]=a});const ra=hn;var Be=function n(t){var o=new xe(t),e=xn(xe.prototype.request,o);return E.extend(e,xe.prototype,o,{allOwnKeys:!0}),E.extend(e,o,null,{allOwnKeys:!0}),e.create=function(a){return n(v(t,a))},e}(Qn);Be.Axios=xe,Be.CanceledError=In,Be.CancelToken=Zn,Be.isCancel=Sn,Be.VERSION="1.2.3",Be.toFormData=yn,Be.AxiosError=me,Be.Cancel=Be.CanceledError,Be.all=function(n){return Promise.all(n)},Be.spread=function(n){return function(t){return n.apply(null,t)}},Be.isAxiosError=function(n){return E.isObject(n)&&n.isAxiosError===!0},Be.mergeConfig=v,Be.AxiosHeaders=Ze,Be.formToJSON=function(n){return _t(E.isHTMLForm(n)?new FormData(n):n)},Be.HttpStatusCode=ra,Be.default=Be;const qt=Be,jt={send:function(n){qt.post(n.url,n.data).then(function(t){var o=t.data;o&&o.code===0?n.success&&n.success(o):n.error&&n.error(o&&o.msg)}).catch(function(t){console.error(t),n.error&&n.error()})},read:function(n){qt.get(n.url).then(function(t){var o=t.data;o&&o.code===0?n.success&&n.success(o.data.map(function(e){return{time:e[0],type:e[1],color:e[2],author:e[3],text:e[4]}})):n.error&&n.error(o&&o.msg)}).catch(function(t){console.error(t),n.error&&n.error()})}};function Gt(n){return Gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gt(n)}function Ca(n){var t=this;this.lang=n,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(o){return o=o.toLowerCase(),_n[t.lang]&&_n[t.lang][o]?_n[t.lang][o]:_n[t.fallbackLang]&&_n[t.fallbackLang][o]?_n[t.fallbackLang][o]:ea[o]?ea[o]:o}}var ea={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},_n={en:ea,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},ka=x(730),Ba=x.n(ka),Sa=x(74),Ia=x.n(Sa),_a=x(437),La=x.n(_a),za=x(644),Ta=x.n(za),Da=x(324),Oa=x.n(Da),Ra=x(574),qa=x.n(Ra),ja=x(300),Pa=x.n(ja),Na=x(934),Ma=x.n(Na),Ya=x(428),Fa=x.n(Ya),Ua=x(807),Wa=x.n(Ua),Ha=x(338),Qa=x.n(Ha),Ka=x(254),Va=x.n(Ka),Za=x(965),Xa=x.n(Za),Ja=x(113),$a=x.n(Ja),Ga=x(251),er=x.n(Ga),nr=x(410),tr=x.n(nr),ar=x(182),rr=x.n(ar),or=x(193),ir=x.n(or);const Xe={play:Ba(),pause:Ia(),volumeUp:La(),volumeDown:Ta(),volumeOff:Oa(),full:qa(),fullWeb:Pa(),setting:Ma(),right:Fa(),comment:Wa(),commentOff:Qa(),send:Va(),pallette:Xa(),camera:$a(),subtitle:tr(),loading:rr(),airplay:er(),chromecast:ir()};var lr=x(916),sr=x.n(lr);function Xn(n){return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(n)}function oa(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Xn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Xn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Xn(a)==="symbol"?a:String(a)),e)}var a}var dr=function(){function n(a){(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=a.container,this.options=a.options,this.index=a.index,this.tran=a.tran,this.init()}var t,o,e;return t=n,e=[{key:"NewNotice",value:function(a,r,i){var s=document.createElement("div");return s.classList.add("dplayer-notice"),s.style.opacity=r,s.innerText=a,i&&(s.id="dplayer-notice-".concat(i)),s}}],(o=[{key:"init",value:function(){this.container.innerHTML=sr()({options:this.options,index:this.index,tran:this.tran,icons:Xe,mobile:ee.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!ee.isSafari||ee.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&oa(t.prototype,o),e&&oa(t,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();const ia=dr;function Ln(n){return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ln(n)}function pr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Ln(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Ln(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Ln(a)==="symbol"?a:String(a)),e)}var a}var cr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.options=e,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var t,o;return t=n,o=[{key:"load",value:function(){var e,a=this;e=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var r=(this.options.api.addition||[]).slice(0);r.push(e),this.events&&this.events.trigger("danmaku_load_start",r),this._readAllEndpoints(r,function(i){a.dan=[].concat.apply([],i).sort(function(s,d){return s.time-d.time}),window.requestAnimationFrame(function(){a.frame()}),a.options.callback(),a.events&&a.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(e){this.options.api=e,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(e,a){for(var r=this,i=[],s=0,d=function(g){r.options.apiBackend.read({url:e[g],success:function(q){i[g]=q,++s===e.length&&a(i)},error:function(q){r.options.error(q||r.options.tran("danmaku-failed")),i[g]=[],++s===e.length&&a(i)}})},m=0;m<e.length;++m)d(m)}},{key:"send",value:function(e,a){var r=this,i={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:e.text,color:e.color,type:e.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:i,success:a,error:function(d){r.options.error(d||r.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,i),this.danIndex++;var s={text:this.htmlEncode(i.text),color:i.color,type:i.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(s),this.events&&this.events.trigger("danmaku_send",i)}},{key:"frame",value:function(){var e=this;if(this.dan.length&&!this.paused&&this.showing){for(var a=this.dan[this.danIndex],r=[];a&&this.options.time()>parseFloat(a.time);)r.push(a),a=this.dan[++this.danIndex];this.draw(r)}window.requestAnimationFrame(function(){e.frame()})}},{key:"opacity",value:function(e){if(e!==void 0){for(var a=this.container.getElementsByClassName("dplayer-danmaku-item"),r=0;r<a.length;r++)a[r].style.opacity=e;this._opacity=e,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(e){var a=this;if(this.showing){var r=this.options.height,i=this.container.offsetWidth,s=this.container.offsetHeight,d=parseInt(s/r),m=function(P){var J=P.offsetWidth||parseInt(P.style.width),te=P.getBoundingClientRect().right||a.container.getBoundingClientRect().right+J;return a.container.getBoundingClientRect().right-te},g=function(P){return(i+P)/5},q=function(P,J,te){for(var Te=i/g(te),Se=function(bn){var Tn=a.danTunnel[J][bn+""];if(!Tn||!Tn.length)return a.danTunnel[J][bn+""]=[P],P.addEventListener("animationend",function(){a.danTunnel[J][bn+""].splice(0,1)}),{v:bn%d};if(J!=="right")return"continue";for(var yt=0;yt<Tn.length;yt++){var ua=m(Tn[yt])-10;if(ua<=i-Te*g(parseInt(Tn[yt].style.width))||ua<=0)break;if(yt===Tn.length-1)return a.danTunnel[J][bn+""].push(P),P.addEventListener("animationend",function(){a.danTunnel[J][bn+""].splice(0,1)}),{v:bn%d}}},be=0;a.unlimited||be<d;be++){var sn=Se(be);if(sn!=="continue"&&Ln(sn)==="object")return sn.v}return-1};Object.prototype.toString.call(e)!=="[object Array]"&&(e=[e]);for(var F=document.createDocumentFragment(),H=function(){e[W].type=ee.number2Type(e[W].type),e[W].color||(e[W].color=16777215);var P=document.createElement("div");P.classList.add("dplayer-danmaku-item"),P.classList.add("dplayer-danmaku-".concat(e[W].type)),e[W].border?P.innerHTML='<span style="border:'.concat(e[W].border,'">').concat(e[W].text,"</span>"):P.innerHTML=e[W].text,P.style.opacity=a._opacity,P.style.color=ee.number2Color(e[W].color),P.addEventListener("animationend",function(){a.container.removeChild(P)});var J,te=a._measure(e[W].text);switch(e[W].type){case"right":(J=q(P,e[W].type,te))>=0&&(P.style.width=te+1+"px",P.style.top=r*J+"px",P.style.transform="translateX(-".concat(i,"px)"));break;case"top":(J=q(P,e[W].type))>=0&&(P.style.top=r*J+"px");break;case"bottom":(J=q(P,e[W].type))>=0&&(P.style.bottom=r*J+"px");break;default:console.error("Can't handled danmaku type: ".concat(e[W].type))}J>=0&&(P.classList.add("dplayer-danmaku-move"),P.style.animationDuration=a._danAnimation(e[W].type),F.appendChild(P))},W=0;W<e.length;W++)H();return this.container.appendChild(F),F}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(e){if(!this.context){var a=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=a.getPropertyValue("font")}return this.context.measureText(e).width}},{key:"seek",value:function(){this.clear();for(var e=0;e<this.dan.length;e++){if(this.dan[e].time>=this.options.time()){this.danIndex=e;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var e=this.container.offsetWidth,a=this.container.getElementsByClassName("dplayer-danmaku-item"),r=0;r<a.length;r++)a[r].style.transform="translateX(-".concat(e,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(e){this.unlimited=e}},{key:"speed",value:function(e){this.options.api.speedRate=e}},{key:"_danAnimation",value:function(e){var a=this.options.api.speedRate||1,r=!!this.player.fullScreen.isFullScreen();return{top:"".concat((r?6:4)/a,"s"),right:"".concat((r?8:5)/a,"s"),bottom:"".concat((r?6:4)/a,"s")}[e]}}],o&&pr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const ur=cr;function Jn(n){return Jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jn(n)}function yr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Jn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Jn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Jn(a)==="symbol"?a:String(a)),e)}var a}const Ar=function(){function n(){(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,n),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var t,o;return t=n,(o=[{key:"on",value:function(e,a){this.type(e)&&typeof a=="function"&&(this.events[e]||(this.events[e]=[]),this.events[e].push(a))}},{key:"trigger",value:function(e,a){if(this.events[e]&&this.events[e].length)for(var r=0;r<this.events[e].length;r++)this.events[e][r](a)}},{key:"type",value:function(e){return this.playerEvents.indexOf(e)!==-1?"player":this.videoEvents.indexOf(e)!==-1?"video":(console.error("Unknown event name: ".concat(e)),null)}}])&&yr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();function $n(n){return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(n)}function fr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if($n(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if($n(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),$n(a)==="symbol"?a:String(a)),e)}var a}var mr=function(){function n(e){var a=this;(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){a.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){a.player.resize(),ee.setScrollPosition(a.lastScrollPosition)}),this.fullscreenchange=function(){a.player.resize(),a.isFullScreen("browser")?a.player.events.trigger("fullscreen"):(ee.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var r=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;r&&r!==a.player.container||(a.player.resize(),r?a.player.events.trigger("fullscreen"):(ee.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var t,o;return t=n,o=[{key:"isFullScreen",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(e){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",a=e==="browser"?"web":"browser",r=this.isFullScreen(a);switch(r||(this.lastScrollPosition=ee.getScrollPosition()),e){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}r&&this.cancel(a)}},{key:"cancel",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(e){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(e)?this.cancel(e):this.request(e)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],o&&fr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const hr=mr;function Gn(n){return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gn(n)}function br(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Gn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Gn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Gn(a)==="symbol"?a:String(a)),e)}var a}var gr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:e.options.hasOwnProperty("volume")?e.options.volume:.7,unlimited:(e.options.danmaku&&e.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var t,o;return t=n,(o=[{key:"init",value:function(){for(var e in this.storageName){var a=this.storageName[e];this.data[e]=parseFloat(ee.storage.get(a)||this.default[e])}}},{key:"get",value:function(e){return this.data[e]}},{key:"set",value:function(e,a){this.data[e]=a,ee.storage.set(this.storageName[e],a)}}])&&br(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const vr=gr;function et(n){return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(n)}function xr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(et(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(et(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),et(a)==="symbol"?a:String(a)),e)}var a}var Er=function(){function n(e,a,r,i){(function(s,d){if(!(s instanceof d))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e,this.video=a,this.options=r,this.events=i,this.init()}var t,o;return t=n,o=[{key:"init",value:function(){var e=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var a=this.video.textTracks[0];a.oncuechange=function(){var r=a.activeCues[a.activeCues.length-1];if(e.container.innerHTML="",r){var i=document.createElement("div");i.appendChild(r.getCueAsHTML());var s=i.innerHTML.split(/\r?\n/).map(function(d){return"<p>".concat(d,"</p>")}).join("");e.container.innerHTML=s}e.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],o&&xr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const wr=Er;function nt(n){return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(n)}function Cr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(nt(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(nt(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),nt(a)==="symbol"?a:String(a)),e)}var a}var kr=function(){function n(e){var a=this;(function(d,m){if(!(d instanceof m))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){a.adaptiveHeight(),a.show()});for(var r=this.player.template.subtitlesItem.length-1,i=function(d){a.player.template.subtitlesItem[d].addEventListener("click",function(){a.hide(),a.player.options.subtitle.index!==d&&(a.player.template.subtitle.innerHTML="<p></p>",a.player.template.subtrack.src=a.player.template.subtitlesItem[d].dataset.subtitle,a.player.options.subtitle.index=d,a.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&a.subContainerShow())})},s=0;s<r;s++)i(s);this.player.template.subtitlesItem[r].addEventListener("click",function(){a.hide(),a.player.options.subtitle.index!==r&&(a.player.template.subtitle.innerHTML="<p></p>",a.player.template.subtrack.src="",a.player.options.subtitle.index=r,a.subContainerHide())})}var t,o;return t=n,(o=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var e=30*this.player.template.subtitlesItem.length+14,a=.8*this.player.template.videoWrap.offsetHeight;e>=a-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=a-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=a-50+"px")}}])&&Cr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Br=kr;function tt(n){return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(n)}function Sr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(tt(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(tt(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),tt(a)==="symbol"?a:String(a)),e)}var a}var Ir=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.elements={},this.elements.volume=e.volumeBar,this.elements.played=e.playedBar,this.elements.loaded=e.loadedBar,this.elements.danmaku=e.danmakuOpacityBar}var t,o;return t=n,(o=[{key:"set",value:function(e,a,r){a=Math.max(a,0),a=Math.min(a,1),this.elements[e].style[r]=100*a+"%"}},{key:"get",value:function(e){return parseFloat(this.elements[e].style.width)/100}}])&&Sr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const _r=Ir;function at(n){return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(n)}function Lr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(at(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(at(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),at(a)==="symbol"?a:String(a)),e)}var a}var zr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)},this.types=["loading","info","fps"],this.init()}var t,o;return t=n,(o=[{key:"init",value:function(){var e=this;this.types.map(function(a){return a!=="fps"&&e["init".concat(a,"Checker")](),a})}},{key:"initloadingChecker",value:function(){var e=this,a=0,r=0,i=!1;this.loadingChecker=setInterval(function(){e.enableloadingChecker&&(r=e.player.video.currentTime,i||r!==a||e.player.video.paused||(e.player.container.classList.add("dplayer-loading"),i=!0),i&&r>a&&!e.player.video.paused&&(e.player.container.classList.remove("dplayer-loading"),i=!1),a=r)},100)}},{key:"initfpsChecker",value:function(){var e=this;window.requestAnimationFrame(function(){if(e.enablefpsChecker)if(e.initfpsChecker(),e.fpsStart){e.fpsIndex++;var a=new Date;a-e.fpsStart>1e3&&(e.player.infoPanel.fps(e.fpsIndex/(a-e.fpsStart)*1e3),e.fpsStart=new Date,e.fpsIndex=0)}else e.fpsStart=new Date,e.fpsIndex=0;else e.fpsStart=0,e.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var e=this;this.infoChecker=setInterval(function(){e.enableinfoChecker&&e.player.infoPanel.update()},1e3)}},{key:"enable",value:function(e){this["enable".concat(e,"Checker")]=!0,e==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(e){this["enable".concat(e,"Checker")]=!1}},{key:"destroy",value:function(){var e=this;this.types.map(function(a){return e["enable".concat(a,"Checker")]=!1,e["".concat(a,"Checker")]&&clearInterval(e["".concat(a,"Checker")]),a})}}])&&Lr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Tr=zr;function rt(n){return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(n)}function Dr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(rt(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(rt(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),rt(a)==="symbol"?a:String(a)),e)}var a}const Or=function(){function n(e){var a=this;(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e,this.container.addEventListener("animationend",function(){a.container.classList.remove("dplayer-bezel-transition")})}var t,o;return t=n,(o=[{key:"switch",value:function(e){this.container.innerHTML=e,this.container.classList.add("dplayer-bezel-transition")}}])&&Dr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();function ot(n){return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(n)}function Rr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(ot(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(ot(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),ot(a)==="symbol"?a:String(a)),e)}var a}var qr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e.container,this.barWidth=e.barWidth,this.container.style.backgroundImage="url('".concat(e.url,"')"),this.events=e.events}var t,o;return t=n,(o=[{key:"resize",value:function(e,a,r){this.container.style.width="".concat(e,"px"),this.container.style.height="".concat(a,"px"),this.container.style.top="".concat(2-a,"px"),this.barWidth=r}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(e){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(e/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(e-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&Rr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const jr=qr;function it(n){return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(n)}function Pr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(it(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(it(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),it(a)==="symbol"?a:String(a)),e)}var a}var ln,la=!0,na=!1,Nr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.autoHideTimer=0,ee.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),ee.isMobile||this.initVolumeButton()}var t,o;return t=n,(o=[{key:"initPlayButton",value:function(){var e=this;this.player.template.playButton.addEventListener("click",function(){e.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){e.player.toggle()}),ee.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){e.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){e.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){e.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){e.player.toggle()}))}},{key:"initHighlights",value:function(){var e=this;this.player.on("durationchange",function(){if(e.player.video.duration!==1&&e.player.video.duration!==1/0&&e.player.options.highlight){var a=e.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(a,0).forEach(function(s){e.player.template.playedBarWrap.removeChild(s)});for(var r=0;r<e.player.options.highlight.length;r++)if(e.player.options.highlight[r].text&&e.player.options.highlight[r].time){var i=document.createElement("div");i.classList.add("dplayer-highlight"),i.style.left=e.player.options.highlight[r].time/e.player.video.duration*100+"%",i.innerHTML='<span class="dplayer-highlight-text">'+e.player.options.highlight[r].text+"</span>",e.player.template.playedBarWrap.insertBefore(i,e.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var e=this;this.player.options.video.thumbnails&&(this.thumbnails=new jr({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){e.thumbnails.resize(160,e.player.video.videoHeight/e.player.video.videoWidth*160,e.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var e=this,a=function(i){var s=((i.clientX||i.changedTouches[0].clientX)-ee.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;s=Math.max(s,0),s=Math.min(s,1),e.player.bar.set("played",s,"width"),e.player.template.ptime.innerHTML=ee.secondToTime(s*e.player.video.duration)},r=function i(s){document.removeEventListener(ee.nameMap.dragEnd,i),document.removeEventListener(ee.nameMap.dragMove,a);var d=((s.clientX||s.changedTouches[0].clientX)-ee.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;d=Math.max(d,0),d=Math.min(d,1),e.player.bar.set("played",d,"width"),e.player.seek(e.player.bar.get("played")*e.player.video.duration),e.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(ee.nameMap.dragStart,function(){e.player.timer.disable("progress"),document.addEventListener(ee.nameMap.dragMove,a),document.addEventListener(ee.nameMap.dragEnd,r)}),this.player.template.playedBarWrap.addEventListener(ee.nameMap.dragMove,function(i){if(e.player.video.duration){var s=e.player.template.playedBarWrap.getBoundingClientRect().left,d=(i.clientX||i.changedTouches[0].clientX)-s;if(d<0||d>e.player.template.playedBarWrap.offsetWidth)return;var m=e.player.video.duration*(d/e.player.template.playedBarWrap.offsetWidth);ee.isMobile&&e.thumbnails&&e.thumbnails.show(),e.thumbnails&&e.thumbnails.move(d),e.player.template.playedBarTime.style.left="".concat(d-(m>=3600?25:20),"px"),e.player.template.playedBarTime.innerText=ee.secondToTime(m),e.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(ee.nameMap.dragEnd,function(){ee.isMobile&&e.thumbnails&&e.thumbnails.hide()}),ee.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.show(),e.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.hide(),e.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var e=this;this.player.template.browserFullButton.addEventListener("click",function(){e.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){e.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var e=this,a=function(i){var s=i||window.event,d=((s.clientX||s.changedTouches[0].clientX)-ee.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(d)},r=function i(){document.removeEventListener(ee.nameMap.dragEnd,i),document.removeEventListener(ee.nameMap.dragMove,a),e.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(i){var s=i||window.event,d=((s.clientX||s.changedTouches[0].clientX)-ee.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(d)}),this.player.template.volumeBarWrapWrap.addEventListener(ee.nameMap.dragStart,function(){document.addEventListener(ee.nameMap.dragMove,a),document.addEventListener(ee.nameMap.dragEnd,r),e.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){e.player.video.muted?(e.player.video.muted=!1,e.player.switchVolumeIcon(),e.player.bar.set("volume",e.player.volume(),"width")):(e.player.video.muted=!0,e.player.template.volumeIcon.innerHTML=Xe.volumeOff,e.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var e=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(a){a.target.classList.contains("dplayer-quality-item")&&e.player.switchQuality(a.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var e=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var a,r=document.createElement("canvas");r.width=e.player.video.videoWidth,r.height=e.player.video.videoHeight,r.getContext("2d").drawImage(e.player.video,0,0,r.width,r.height),r.toBlob(function(i){a=URL.createObjectURL(i);var s=document.createElement("a");s.href=a,s.download="DPlayer.png",s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(a),e.player.events.trigger("screenshot",a)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(e){e.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var e=window.document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(e),window.__onGCastApiAvailable=function(a){if(a){var r=new(ln=window.chrome.cast).SessionRequest(ln.media.DEFAULT_MEDIA_RECEIVER_APP_ID),i=new ln.ApiConfig(r,function(){},function(s){s===ln.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",s)});ln.initialize(i,function(){})}}}},{key:"initChromecastButton",value:function(){var e=this;if(this.player.options.chromecast){la&&(la=!1,this.initChromecast());var a=function(i,s){e.currentMedia=s},r=function(i){console.error("Error launching media",i)};this.player.template.chromecastButton.addEventListener("click",function(){na?(na=!1,e.currentMedia.stop(),e.session.stop(),e.initChromecast()):(na=!0,ln.requestSession(function(i){var s,d,m;e.session=i,s=e.player.options.video.url,d=new ln.media.MediaInfo(s),m=new ln.media.LoadRequest(d),e.session?e.session.loadMedia(m,a.bind(e,"loadMedia"),r).play():window.open(s)},function(i){i.code==="cancel"?e.session=void 0:console.error("Error selecting a cast device",i)}))})}}},{key:"initSubtitleButton",value:function(){var e=this;this.player.events.on("subtitle_show",function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("hide-subs"),e.player.template.subtitleButtonInner.style.opacity="",e.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("show-subs"),e.player.template.subtitleButtonInner.style.opacity="0.4",e.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){e.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var e=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!e.player.video.played.length||e.player.paused||e.disableAutoHide||e.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){ee.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Pr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Mr=Nr;function lt(n){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lt(n)}function Yr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(lt(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(lt(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),lt(a)==="symbol"?a:String(a)),e)}var a}var Fr=function(){function n(e){var a=this;(function(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.settingButton.addEventListener("click",function(){a.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){a.player.template.loopToggle.checked=!a.player.template.loopToggle.checked,a.player.template.loopToggle.checked?a.loop=!0:a.loop=!1,a.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){a.player.template.showDanmakuToggle.checked=!a.player.template.showDanmakuToggle.checked,a.player.template.showDanmakuToggle.checked?(a.showDanmaku=!0,a.player.danmaku.show()):(a.showDanmaku=!1,a.player.danmaku.hide()),a.player.user.set("danmaku",a.showDanmaku?1:0),a.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){a.player.template.unlimitDanmakuToggle.checked=!a.player.template.unlimitDanmakuToggle.checked,a.player.template.unlimitDanmakuToggle.checked?(a.unlimitDanmaku=!0,a.player.danmaku.unlimit(!0)):(a.unlimitDanmaku=!1,a.player.danmaku.unlimit(!1)),a.player.user.set("unlimited",a.unlimitDanmaku?1:0),a.hide()}),this.player.template.speed.addEventListener("click",function(){a.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),a.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var r=function(m){a.player.template.speedItem[m].addEventListener("click",function(){a.player.speed(a.player.template.speedItem[m].dataset.speed),a.hide()})},i=0;i<this.player.template.speedItem.length;i++)r(i);if(this.player.danmaku){this.player.on("danmaku_opacity",function(m){a.player.bar.set("danmaku",m,"width"),a.player.user.set("opacity",m)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var s=function(m){var g=m||window.event,q=((g.clientX||g.changedTouches[0].clientX)-ee.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap))/130;q=Math.max(q,0),q=Math.min(q,1),a.player.danmaku.opacity(q)},d=function m(){document.removeEventListener(ee.nameMap.dragEnd,m),document.removeEventListener(ee.nameMap.dragMove,s),a.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(m){var g=m||window.event,q=((g.clientX||g.changedTouches[0].clientX)-ee.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap))/130;q=Math.max(q,0),q=Math.min(q,1),a.player.danmaku.opacity(q)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(ee.nameMap.dragStart,function(){document.addEventListener(ee.nameMap.dragMove,s),document.addEventListener(ee.nameMap.dragEnd,d),a.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var t,o;return t=n,(o=[{key:"hide",value:function(){var e=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){e.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),e.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Yr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Ur=Fr;function st(n){return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},st(n)}function Wr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(st(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(st(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),st(a)==="symbol"?a:String(a)),e)}var a}var Hr=function(){function n(e){var a=this;(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.commentButton.addEventListener("click",function(){a.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){a.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(a.player.template.commentColorSettingBox.querySelector("input:checked+span")){var r=a.player.template.commentColorSettingBox.querySelector("input:checked").value;a.player.template.commentSettingFill.style.fill=r,a.player.template.commentInput.style.color=r,a.player.template.commentSendFill.style.fill=r}}),this.player.template.commentInput.addEventListener("click",function(){a.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(r){(r||window.event).keyCode===13&&a.send()}),this.player.template.commentSendButton.addEventListener("click",function(){a.send()})}var t,o;return t=n,(o=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var e=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:ee.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){e.player.template.commentInput.value="",e.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Wr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Qr=Hr;function dt(n){return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dt(n)}function Kr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(dt(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(dt(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),dt(a)==="symbol"?a:String(a)),e)}var a}var Vr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var t,o;return t=n,(o=[{key:"doHotKey",value:function(e){if(this.player.focus){var a=document.activeElement.tagName.toUpperCase(),r=document.activeElement.getAttribute("contenteditable");if(a!=="INPUT"&&a!=="TEXTAREA"&&r!==""&&r!=="true"){var i,s=e||window.event;switch(s.keyCode){case 32:s.preventDefault(),this.player.toggle();break;case 37:if(s.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(s.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:s.preventDefault(),i=this.player.volume()+.1,this.player.volume(i);break;case 40:s.preventDefault(),i=this.player.volume()-.1,this.player.volume(i)}}}}},{key:"cancelFullScreen",value:function(e){(e||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Kr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Zr=Vr;function pt(n){return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(n)}function Xr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(pt(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(pt(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),pt(a)==="symbol"?a:String(a)),e)}var a}var Jr=function(){function n(e){var a=this;(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(r,i){a.player.options.contextmenu[i].click&&r.addEventListener("click",function(){a.player.options.contextmenu[i].click(a.player),a.hide()})}),this.contextmenuHandler=function(r){if(a.shown)a.hide();else{var i=r||window.event;i.preventDefault();var s=a.player.container.getBoundingClientRect();a.show(i.clientX-s.left,i.clientY-s.top),a.player.template.mask.addEventListener("click",function(){a.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var t,o;return t=n,(o=[{key:"show",value:function(e,a){this.player.template.menu.classList.add("dplayer-menu-show");var r=this.player.container.getBoundingClientRect();e+this.player.template.menu.offsetWidth>=r.width?(this.player.template.menu.style.right=r.width-e+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=e+"px",this.player.template.menu.style.right="initial"),a+this.player.template.menu.offsetHeight>=r.height?(this.player.template.menu.style.bottom=r.height-a+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=a+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&Xr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const $r=Jr;function ct(n){return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ct(n)}function Gr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(ct(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(ct(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),ct(a)==="symbol"?a:String(a)),e)}var a}var eo=function(){function n(e){var a=this;(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e.template.infoPanel,this.template=e.template,this.video=e.video,this.player=e,this.template.infoPanelClose.addEventListener("click",function(){a.hide()})}var t,o;return t=n,(o=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(e){this.template.infoFPS.innerHTML="".concat(e.toFixed(1))}}])&&Gr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const no=eo;var to=x(568),ao=x.n(to);function ut(n){return ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ut(n)}function sa(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),o.push.apply(o,e)}return o}function ro(n,t,o){return(t=pa(t))in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}function da(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,pa(e.key),e)}}function pa(n){var t=function(o,e){if(ut(o)!=="object"||o===null)return o;var a=o[Symbol.toPrimitive];if(a!==void 0){var r=a.call(o,"string");if(ut(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return ut(t)==="symbol"?t:String(t)}var ca=0,zn=[],oo=function(){function n(a){var r=this;(function(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")})(this,n),this.options=function(i){var s={container:i.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:jt,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var d in s)s.hasOwnProperty(d)&&!i.hasOwnProperty(d)&&(i[d]=s[d]);return i.video&&!i.video.type&&(i.video.type="auto"),Gt(i.danmaku)==="object"&&i.danmaku&&!i.danmaku.user&&(i.danmaku.user="DIYgod"),i.subtitle&&(!i.subtitle.type&&(i.subtitle.type="webvtt"),!i.subtitle.fontSize&&(i.subtitle.fontSize="20px"),!i.subtitle.bottom&&(i.subtitle.bottom="40px"),!i.subtitle.color&&(i.subtitle.color="#fff")),i.video.quality&&(i.video.url=i.video.quality[i.video.defaultQuality].url),i.lang&&(i.lang=i.lang.toLowerCase()),i.contextmenu=i.contextmenu.concat([{key:"video-info",click:function(m){m.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),i}(function(i){for(var s=1;s<arguments.length;s++){var d=arguments[s]!=null?arguments[s]:{};s%2?sa(Object(d),!0).forEach(function(m){ro(i,m,d[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(d)):sa(Object(d)).forEach(function(m){Object.defineProperty(i,m,Object.getOwnPropertyDescriptor(d,m))})}return i}({preload:a.video.type==="webtorrent"?"none":"metadata"},a)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Ca(this.options.lang).tran,this.events=new Ar,this.user=new vr(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),ee.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(i){return i.lang===r.options.subtitle.defaultSubtitle||i.name===r.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(i){return i.lang===r.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new ia({container:this.container,options:this.options,index:ca,tran:this.tran}),this.video=this.template.video,this.bar=new _r(this.template),this.bezel=new Or(this.template.bezel),this.fullScreen=new hr(this),this.controller=new Mr(this),this.options.danmaku&&(this.danmaku=new ur({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){r.template.danmakuLoading.style.display="none",r.options.autoplay&&r.play()},0)},error:function(i){r.notice(i)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return r.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(i){return r.tran(i)}}),this.comment=new Qr(this)),this.setting=new Ur(this),this.plugins={},this.docClickFun=function(){r.focus=!1},this.containerClickFun=function(){r.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Tr(this),this.hotkey=new Zr(this),this.contextmenu=new $r(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new no(this),!this.danmaku&&this.options.autoplay&&this.play(),ca++,zn.push(this)}var t,o,e;return t=n,o=[{key:"seek",value:function(a){a=Math.max(a,0),this.video.duration&&(a=Math.min(a,this.video.duration)),this.video.currentTime<a?this.notice("".concat(this.tran("ff").replace("%s",(a-this.video.currentTime).toFixed(0)))):this.video.currentTime>a&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-a).toFixed(0)))),this.video.currentTime=a,this.danmaku&&this.danmaku.seek(),this.bar.set("played",a/this.video.duration,"width"),this.template.ptime.innerHTML=ee.secondToTime(a)}},{key:"play",value:function(a){var r=this;if(this.paused=!1,this.video.paused&&!ee.isMobile&&this.bezel.switch(Xe.play),this.template.playButton.innerHTML=Xe.pause,this.template.mobilePlayButton.innerHTML=Xe.pause,a||he.resolve(this.video.play()).catch(function(){r.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var i=0;i<zn.length;i++)this!==zn[i]&&zn[i].pause()}},{key:"pause",value:function(a){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||ee.isMobile||this.bezel.switch(Xe.pause),this.template.playButton.innerHTML=Xe.play,this.template.mobilePlayButton.innerHTML=Xe.play,a||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Xe.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Xe.volumeDown:this.template.volumeIcon.innerHTML=Xe.volumeOff}},{key:"volume",value:function(a,r,i){if(a=parseFloat(a),!isNaN(a)){a=Math.max(a,0),a=Math.min(a,1),this.bar.set("volume",a,"width");var s="".concat((100*a).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=s,r||this.user.set("volume",a),i||this.notice("".concat(this.tran("volume")," ").concat((100*a).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=a,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(a,r){this.events.on(a,r)}},{key:"switchVideo",value:function(a,r){this.pause(),this.video.poster=a.pic?a.pic:"",this.video.src=a.url,this.initMSE(this.video,a.type||"auto"),r&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:r.id,address:r.api,token:r.token,maximum:r.maximum,addition:r.addition,user:r.user}))}},{key:"initMSE",value:function(a,r){var i=this;if(this.type=r,this.options.video.customType&&this.options.video.customType[r])Object.prototype.toString.call(this.options.video.customType[r])==="[object Function]"?this.options.video.customType[r](this.video,this):console.error("Illegal customType: ".concat(r));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(a.src)?this.type="hls":/.flv(#|\?|$)/i.exec(a.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(a.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(a.canPlayType("application/x-mpegURL")||a.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var s=this.options.pluginOptions.hls,d=new window.Hls(s);this.plugins.hls=d,d.loadSource(a.src),d.attachMedia(a),this.events.on("destroy",function(){d.destroy(),delete i.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var m=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:a.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=m,m.attachMediaElement(a),m.load(),this.events.on("destroy",function(){m.unload(),m.detachMediaElement(),m.destroy(),delete i.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var g=window.dashjs.MediaPlayer().create().initialize(a,a.src,!1),q=this.options.pluginOptions.dash;g.updateSettings(q),this.plugins.dash=g,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete i.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var F=this.options.pluginOptions.webtorrent,H=new window.WebTorrent(F);this.plugins.webtorrent=H;var W=a.src;a.src="",a.preload="metadata",a.addEventListener("durationchange",function(){return i.container.classList.remove("dplayer-loading")},{once:!0}),H.add(W,function(P){P.files.find(function(J){return J.name.endsWith(".mp4")}).renderTo(i.video,{autoplay:i.options.autoplay,controls:!1})}),this.events.on("destroy",function(){H.remove(W),H.destroy(),delete i.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(a,r){var i=this;this.initMSE(a,r),this.on("durationchange",function(){a.duration!==1&&a.duration!==1/0&&(i.template.dtime.innerHTML=ee.secondToTime(a.duration))}),this.on("progress",function(){var m=a.buffered.length?a.buffered.end(a.buffered.length-1)/a.duration:0;i.bar.set("loaded",m,"width")}),this.on("error",function(){i.video.error&&i.tran&&i.notice&&i.type!=="webtorrent"&&i.notice(i.tran("video-failed"))}),this.on("ended",function(){i.bar.set("played",1,"width"),i.setting.loop?(i.seek(0),i.play()):i.pause(),i.danmaku&&(i.danmaku.danIndex=0)}),this.on("play",function(){i.paused&&i.play(!0)}),this.on("pause",function(){i.paused||i.pause(!0)}),this.on("timeupdate",function(){i.bar.set("played",i.video.currentTime/i.video.duration,"width");var m=ee.secondToTime(i.video.currentTime);i.template.ptime.innerHTML!==m&&(i.template.ptime.innerHTML=m)});for(var s=function(m){a.addEventListener(i.events.videoEvents[m],function(g){i.events.trigger(i.events.videoEvents[m],g)})},d=0;d<this.events.videoEvents.length;d++)s(d);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new wr(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Br(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(a){var r=this;if(a=typeof a=="string"?parseInt(a):a,this.qualityIndex!==a&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=a,this.switchingQuality=!0,this.quality=this.options.video.quality[a],this.template.qualityButton.innerHTML=this.quality.name;var i=this.video.paused;this.video.pause();var s=ao()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),d=new DOMParser().parseFromString(s,"text/html").body.firstChild;this.template.videoWrap.insertBefore(d,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=d,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(r.prevVideo){if(r.video.currentTime!==r.prevVideo.currentTime)return void r.seek(r.prevVideo.currentTime);r.template.videoWrap.removeChild(r.prevVideo),r.video.classList.add("dplayer-video-current"),i||r.video.play(),r.prevVideo=null,r.notice("".concat(r.tran("switched-quality").replace("%q",r.quality.name)),void 0,void 0,"switch-quality"),r.switchingQuality=!1,r.events.trigger("quality_end")}}),this.on("error",function(){r.video.error&&r.prevVideo&&(r.template.videoWrap.removeChild(r.video),r.video=r.prevVideo,i||r.video.play(),r.qualityIndex=r.prevIndex,r.quality=r.options.video.quality[r.qualityIndex],r.noticeTime=setTimeout(function(){r.template.notice.style.opacity=0,r.events.trigger("notice_hide")},3e3),r.prevVideo=null,r.switchingQuality=!1)})}}},{key:"notice",value:function(a){var r,i,s,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,g=arguments.length>3?arguments[3]:void 0;if(g&&((r=document.getElementById("dplayer-notice-".concat(g)))&&(r.innerHTML=a),this.noticeList[g]&&(clearTimeout(this.noticeList[g]),this.noticeList[g]=null)),!r){var q=ia.NewNotice(a,m,g);this.template.noticeList.appendChild(q),r=q}this.events.trigger("notice_show",r),d>0&&(this.noticeList[g]=setTimeout((i=r,s=this,function(){i.addEventListener("animationend",function(){s.template.noticeList.removeChild(i)}),i.classList.add("remove-notice"),s.events.trigger("notice_hide"),s.noticeList[g]=null}),d))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(a){this.video.playbackRate=a}},{key:"destroy",value:function(){zn.splice(zn.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],e=[{key:"version",get:function(){return"1.27.1"}}],o&&da(t.prototype,o),e&&da(t,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();const io=oo;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const lo=io})(),ye.default})())})(Ea);var Po=Ea.exports;const No=ba(Po);function Nt(w){throw new Error('Could not dynamically require "'+w+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var wa={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(w,B){(function(Q){w.exports=Q()})(function(){return function Q(ce,x,ye){function C(R,U){if(!x[R]){if(!ce[R]){var h=typeof Nt=="function"&&Nt;if(!U&&h)return h(R,!0);if(k)return k(R,!0);var c=new Error("Cannot find module '"+R+"'");throw c.code="MODULE_NOT_FOUND",c}var O=x[R]={exports:{}};ce[R][0].call(O.exports,function(M){var L=ce[R][1][M];return C(L||M)},O,O.exports,Q,ce,x,ye)}return x[R].exports}for(var k=typeof Nt=="function"&&Nt,_=0;_<ye.length;_++)C(ye[_]);return C}({1:[function(Q,ce,x){(function(ye){var C=ye.MutationObserver||ye.WebKitMutationObserver,k;if(C){var _=0,R=new C(M),U=ye.document.createTextNode("");R.observe(U,{characterData:!0}),k=function(){U.data=_=++_%2}}else if(!ye.setImmediate&&typeof ye.MessageChannel<"u"){var h=new ye.MessageChannel;h.port1.onmessage=M,k=function(){h.port2.postMessage(0)}}else"document"in ye&&"onreadystatechange"in ye.document.createElement("script")?k=function(){var Y=ye.document.createElement("script");Y.onreadystatechange=function(){M(),Y.onreadystatechange=null,Y.parentNode.removeChild(Y),Y=null},ye.document.documentElement.appendChild(Y)}:k=function(){setTimeout(M,0)};var c,O=[];function M(){c=!0;for(var Y,G,N=O.length;N;){for(G=O,O=[],Y=-1;++Y<N;)G[Y]();N=O.length}c=!1}ce.exports=L;function L(Y){O.push(Y)===1&&!c&&k()}}).call(this,typeof ft<"u"?ft:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(Q,ce,x){var ye=Q(1);function C(){}var k={},_=["REJECTED"],R=["FULFILLED"],U=["PENDING"];ce.exports=h;function h(j){if(typeof j!="function")throw new TypeError("resolver must be a function");this.state=U,this.queue=[],this.outcome=void 0,j!==C&&L(this,j)}h.prototype.catch=function(j){return this.then(null,j)},h.prototype.then=function(j,oe){if(typeof j!="function"&&this.state===R||typeof oe!="function"&&this.state===_)return this;var se=new this.constructor(C);if(this.state!==U){var K=this.state===R?j:oe;O(se,K,this.outcome)}else this.queue.push(new c(se,j,oe));return se};function c(j,oe,se){this.promise=j,typeof oe=="function"&&(this.onFulfilled=oe,this.callFulfilled=this.otherCallFulfilled),typeof se=="function"&&(this.onRejected=se,this.callRejected=this.otherCallRejected)}c.prototype.callFulfilled=function(j){k.resolve(this.promise,j)},c.prototype.otherCallFulfilled=function(j){O(this.promise,this.onFulfilled,j)},c.prototype.callRejected=function(j){k.reject(this.promise,j)},c.prototype.otherCallRejected=function(j){O(this.promise,this.onRejected,j)};function O(j,oe,se){ye(function(){var K;try{K=oe(se)}catch(ie){return k.reject(j,ie)}K===j?k.reject(j,new TypeError("Cannot resolve promise with itself")):k.resolve(j,K)})}k.resolve=function(j,oe){var se=Y(M,oe);if(se.status==="error")return k.reject(j,se.value);var K=se.value;if(K)L(j,K);else{j.state=R,j.outcome=oe;for(var ie=-1,le=j.queue.length;++ie<le;)j.queue[ie].callFulfilled(oe)}return j},k.reject=function(j,oe){j.state=_,j.outcome=oe;for(var se=-1,K=j.queue.length;++se<K;)j.queue[se].callRejected(oe);return j};function M(j){var oe=j&&j.then;if(j&&(typeof j=="object"||typeof j=="function")&&typeof oe=="function")return function(){oe.apply(j,arguments)}}function L(j,oe){var se=!1;function K(Le){se||(se=!0,k.reject(j,Le))}function ie(Le){se||(se=!0,k.resolve(j,Le))}function le(){oe(ie,K)}var Ie=Y(le);Ie.status==="error"&&K(Ie.value)}function Y(j,oe){var se={};try{se.value=j(oe),se.status="success"}catch(K){se.status="error",se.value=K}return se}h.resolve=G;function G(j){return j instanceof this?j:k.resolve(new this(C),j)}h.reject=N;function N(j){var oe=new this(C);return k.reject(oe,j)}h.all=re;function re(j){var oe=this;if(Object.prototype.toString.call(j)!=="[object Array]")return this.reject(new TypeError("must be an array"));var se=j.length,K=!1;if(!se)return this.resolve([]);for(var ie=new Array(se),le=0,Ie=-1,Le=new this(C);++Ie<se;)Oe(j[Ie],Ie);return Le;function Oe(He,tn){oe.resolve(He).then(an,function(he){K||(K=!0,k.reject(Le,he))});function an(he){ie[tn]=he,++le===se&&!K&&(K=!0,k.resolve(Le,ie))}}}h.race=Z;function Z(j){var oe=this;if(Object.prototype.toString.call(j)!=="[object Array]")return this.reject(new TypeError("must be an array"));var se=j.length,K=!1;if(!se)return this.resolve([]);for(var ie=-1,le=new this(C);++ie<se;)Ie(j[ie]);return le;function Ie(Le){oe.resolve(Le).then(function(Oe){K||(K=!0,k.resolve(le,Oe))},function(Oe){K||(K=!0,k.reject(le,Oe))})}}},{1:1}],3:[function(Q,ce,x){(function(ye){typeof ye.Promise!="function"&&(ye.Promise=Q(2))}).call(this,typeof ft<"u"?ft:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(Q,ce,x){var ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};function C(l,u){if(!(l instanceof u))throw new TypeError("Cannot call a class as a function")}function k(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var _=k();function R(){try{if(!_||!_.open)return!1;var l=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),u=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!l||u)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function U(l,u){l=l||[],u=u||{};try{return new Blob(l,u)}catch(y){if(y.name!=="TypeError")throw y;for(var p=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,A=new p,f=0;f<l.length;f+=1)A.append(l[f]);return A.getBlob(u.type)}}typeof Promise>"u"&&Q(3);var h=Promise;function c(l,u){u&&l.then(function(p){u(null,p)},function(p){u(p)})}function O(l,u,p){typeof u=="function"&&l.then(u),typeof p=="function"&&l.catch(p)}function M(l){return typeof l!="string"&&(console.warn(l+" used as a key, but it is not a string."),l=String(l)),l}function L(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var Y="local-forage-detect-blob-support",G=void 0,N={},re=Object.prototype.toString,Z="readonly",j="readwrite";function oe(l){for(var u=l.length,p=new ArrayBuffer(u),A=new Uint8Array(p),f=0;f<u;f++)A[f]=l.charCodeAt(f);return p}function se(l){return new h(function(u){var p=l.transaction(Y,j),A=U([""]);p.objectStore(Y).put(A,"key"),p.onabort=function(f){f.preventDefault(),f.stopPropagation(),u(!1)},p.oncomplete=function(){var f=navigator.userAgent.match(/Chrome\/(\d+)/),y=navigator.userAgent.match(/Edge\//);u(y||!f||parseInt(f[1],10)>=43)}}).catch(function(){return!1})}function K(l){return typeof G=="boolean"?h.resolve(G):se(l).then(function(u){return G=u,G})}function ie(l){var u=N[l.name],p={};p.promise=new h(function(A,f){p.resolve=A,p.reject=f}),u.deferredOperations.push(p),u.dbReady?u.dbReady=u.dbReady.then(function(){return p.promise}):u.dbReady=p.promise}function le(l){var u=N[l.name],p=u.deferredOperations.pop();if(p)return p.resolve(),p.promise}function Ie(l,u){var p=N[l.name],A=p.deferredOperations.pop();if(A)return A.reject(u),A.promise}function Le(l,u){return new h(function(p,A){if(N[l.name]=N[l.name]||S(),l.db)if(u)ie(l),l.db.close();else return p(l.db);var f=[l.name];u&&f.push(l.version);var y=_.open.apply(_,f);u&&(y.onupgradeneeded=function(v){var I=y.result;try{I.createObjectStore(l.storeName),v.oldVersion<=1&&I.createObjectStore(Y)}catch(z){if(z.name==="ConstraintError")console.warn('The database "'+l.name+'" has been upgraded from version '+v.oldVersion+" to version "+v.newVersion+', but the storage "'+l.storeName+'" already exists.');else throw z}}),y.onerror=function(v){v.preventDefault(),A(y.error)},y.onsuccess=function(){var v=y.result;v.onversionchange=function(I){I.target.close()},p(v),le(l)}})}function Oe(l){return Le(l,!1)}function He(l){return Le(l,!0)}function tn(l,u){if(!l.db)return!0;var p=!l.db.objectStoreNames.contains(l.storeName),A=l.version<l.db.version,f=l.version>l.db.version;if(A&&(l.version!==u&&console.warn('The database "'+l.name+`" can't be downgraded from version `+l.db.version+" to version "+l.version+"."),l.version=l.db.version),f||p){if(p){var y=l.db.version+1;y>l.version&&(l.version=y)}return!0}return!1}function an(l){return new h(function(u,p){var A=new FileReader;A.onerror=p,A.onloadend=function(f){var y=btoa(f.target.result||"");u({__local_forage_encoded_blob:!0,data:y,type:l.type})},A.readAsBinaryString(l)})}function he(l){var u=oe(atob(l.data));return U([u],{type:l.type})}function Ge(l){return l&&l.__local_forage_encoded_blob}function ee(l){var u=this,p=u._initReady().then(function(){var A=N[u._dbInfo.name];if(A&&A.dbReady)return A.dbReady});return O(p,l,l),p}function xn(l){ie(l);for(var u=N[l.name],p=u.forages,A=0;A<p.length;A++){var f=p[A];f._dbInfo.db&&(f._dbInfo.db.close(),f._dbInfo.db=null)}return l.db=null,Oe(l).then(function(y){return l.db=y,tn(l)?He(l):y}).then(function(y){l.db=u.db=y;for(var v=0;v<p.length;v++)p[v]._dbInfo.db=y}).catch(function(y){throw Ie(l,y),y})}function b(l,u,p,A){A===void 0&&(A=1);try{var f=l.db.transaction(l.storeName,u);p(null,f)}catch(y){if(A>0&&(!l.db||y.name==="InvalidStateError"||y.name==="NotFoundError"))return h.resolve().then(function(){if(!l.db||y.name==="NotFoundError"&&!l.db.objectStoreNames.contains(l.storeName)&&l.version<=l.db.version)return l.db&&(l.version=l.db.version+1),He(l)}).then(function(){return xn(l).then(function(){b(l,u,p,A-1)})}).catch(p);p(y)}}function S(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function X(l){var u=this,p={db:null};if(l)for(var A in l)p[A]=l[A];var f=N[p.name];f||(f=S(),N[p.name]=f),f.forages.push(u),u._initReady||(u._initReady=u.ready,u.ready=ee);var y=[];function v(){return h.resolve()}for(var I=0;I<f.forages.length;I++){var z=f.forages[I];z!==u&&y.push(z._initReady().catch(v))}var T=f.forages.slice(0);return h.all(y).then(function(){return p.db=f.db,Oe(p)}).then(function(D){return p.db=D,tn(p,u._defaultConfig.version)?He(p):D}).then(function(D){p.db=f.db=D,u._dbInfo=p;for(var V=0;V<T.length;V++){var de=T[V];de!==u&&(de._dbInfo.db=p.db,de._dbInfo.version=p.version)}})}function $(l,u){var p=this;l=M(l);var A=new h(function(f,y){p.ready().then(function(){b(p._dbInfo,Z,function(v,I){if(v)return y(v);try{var z=I.objectStore(p._dbInfo.storeName),T=z.get(l);T.onsuccess=function(){var D=T.result;D===void 0&&(D=null),Ge(D)&&(D=he(D)),f(D)},T.onerror=function(){y(T.error)}}catch(D){y(D)}})}).catch(y)});return c(A,u),A}function fe(l,u){var p=this,A=new h(function(f,y){p.ready().then(function(){b(p._dbInfo,Z,function(v,I){if(v)return y(v);try{var z=I.objectStore(p._dbInfo.storeName),T=z.openCursor(),D=1;T.onsuccess=function(){var V=T.result;if(V){var de=V.value;Ge(de)&&(de=he(de));var pe=l(de,V.key,D++);pe!==void 0?f(pe):V.continue()}else f()},T.onerror=function(){y(T.error)}}catch(V){y(V)}})}).catch(y)});return c(A,u),A}function ae(l,u,p){var A=this;l=M(l);var f=new h(function(y,v){var I;A.ready().then(function(){return I=A._dbInfo,re.call(u)==="[object Blob]"?K(I.db).then(function(z){return z?u:an(u)}):u}).then(function(z){b(A._dbInfo,j,function(T,D){if(T)return v(T);try{var V=D.objectStore(A._dbInfo.storeName);z===null&&(z=void 0);var de=V.put(z,l);D.oncomplete=function(){z===void 0&&(z=null),y(z)},D.onabort=D.onerror=function(){var pe=de.error?de.error:de.transaction.error;v(pe)}}catch(pe){v(pe)}})}).catch(v)});return c(f,p),f}function ze(l,u){var p=this;l=M(l);var A=new h(function(f,y){p.ready().then(function(){b(p._dbInfo,j,function(v,I){if(v)return y(v);try{var z=I.objectStore(p._dbInfo.storeName),T=z.delete(l);I.oncomplete=function(){f()},I.onerror=function(){y(T.error)},I.onabort=function(){var D=T.error?T.error:T.transaction.error;y(D)}}catch(D){y(D)}})}).catch(y)});return c(A,u),A}function we(l){var u=this,p=new h(function(A,f){u.ready().then(function(){b(u._dbInfo,j,function(y,v){if(y)return f(y);try{var I=v.objectStore(u._dbInfo.storeName),z=I.clear();v.oncomplete=function(){A()},v.onabort=v.onerror=function(){var T=z.error?z.error:z.transaction.error;f(T)}}catch(T){f(T)}})}).catch(f)});return c(p,l),p}function Me(l){var u=this,p=new h(function(A,f){u.ready().then(function(){b(u._dbInfo,Z,function(y,v){if(y)return f(y);try{var I=v.objectStore(u._dbInfo.storeName),z=I.count();z.onsuccess=function(){A(z.result)},z.onerror=function(){f(z.error)}}catch(T){f(T)}})}).catch(f)});return c(p,l),p}function qe(l,u){var p=this,A=new h(function(f,y){if(l<0){f(null);return}p.ready().then(function(){b(p._dbInfo,Z,function(v,I){if(v)return y(v);try{var z=I.objectStore(p._dbInfo.storeName),T=!1,D=z.openKeyCursor();D.onsuccess=function(){var V=D.result;if(!V){f(null);return}l===0||T?f(V.key):(T=!0,V.advance(l))},D.onerror=function(){y(D.error)}}catch(V){y(V)}})}).catch(y)});return c(A,u),A}function un(l){var u=this,p=new h(function(A,f){u.ready().then(function(){b(u._dbInfo,Z,function(y,v){if(y)return f(y);try{var I=v.objectStore(u._dbInfo.storeName),z=I.openKeyCursor(),T=[];z.onsuccess=function(){var D=z.result;if(!D){A(T);return}T.push(D.key),D.continue()},z.onerror=function(){f(z.error)}}catch(D){f(D)}})}).catch(f)});return c(p,l),p}function ne(l,u){u=L.apply(this,arguments);var p=this.config();l=typeof l!="function"&&l||{},l.name||(l.name=l.name||p.name,l.storeName=l.storeName||p.storeName);var A=this,f;if(!l.name)f=h.reject("Invalid arguments");else{var y=l.name===p.name&&A._dbInfo.db,v=y?h.resolve(A._dbInfo.db):Oe(l).then(function(I){var z=N[l.name],T=z.forages;z.db=I;for(var D=0;D<T.length;D++)T[D]._dbInfo.db=I;return I});l.storeName?f=v.then(function(I){if(I.objectStoreNames.contains(l.storeName)){var z=I.version+1;ie(l);var T=N[l.name],D=T.forages;I.close();for(var V=0;V<D.length;V++){var de=D[V];de._dbInfo.db=null,de._dbInfo.version=z}var pe=new h(function(ue,xe){var ve=_.open(l.name,z);ve.onerror=function(je){var mn=ve.result;mn.close(),xe(je)},ve.onupgradeneeded=function(){var je=ve.result;je.deleteObjectStore(l.storeName)},ve.onsuccess=function(){var je=ve.result;je.close(),ue(je)}});return pe.then(function(ue){T.db=ue;for(var xe=0;xe<D.length;xe++){var ve=D[xe];ve._dbInfo.db=ue,le(ve._dbInfo)}}).catch(function(ue){throw(Ie(l,ue)||h.resolve()).catch(function(){}),ue})}}):f=v.then(function(I){ie(l);var z=N[l.name],T=z.forages;I.close();for(var D=0;D<T.length;D++){var V=T[D];V._dbInfo.db=null}var de=new h(function(pe,ue){var xe=_.deleteDatabase(l.name);xe.onerror=function(){var ve=xe.result;ve&&ve.close(),ue(xe.error)},xe.onblocked=function(){console.warn('dropInstance blocked for database "'+l.name+'" until all open connections are closed')},xe.onsuccess=function(){var ve=xe.result;ve&&ve.close(),pe(ve)}});return de.then(function(pe){z.db=pe;for(var ue=0;ue<T.length;ue++){var xe=T[ue];le(xe._dbInfo)}}).catch(function(pe){throw(Ie(l,pe)||h.resolve()).catch(function(){}),pe})})}return c(f,u),f}var ke={_driver:"asyncStorage",_initStorage:X,_support:R(),iterate:fe,getItem:$,setItem:ae,removeItem:ze,clear:we,length:Me,key:qe,keys:un,dropInstance:ne};function Qe(){return typeof openDatabase=="function"}var Ye="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Yt="~~local_forage_type~",ht=/^~~local_forage_type~([^~]+)~/,En="__lfsc__:",On=En.length,Rn="arbf",en="blob",qn="si08",wn="ui08",jn="uic8",Pn="si16",Nn="si32",bt="ur16",gt="ui32",Mn="fl32",vt="fl64",Yn=On+Rn.length,E=Object.prototype.toString;function nn(l){var u=l.length*.75,p=l.length,A,f=0,y,v,I,z;l[l.length-1]==="="&&(u--,l[l.length-2]==="="&&u--);var T=new ArrayBuffer(u),D=new Uint8Array(T);for(A=0;A<p;A+=4)y=Ye.indexOf(l[A]),v=Ye.indexOf(l[A+1]),I=Ye.indexOf(l[A+2]),z=Ye.indexOf(l[A+3]),D[f++]=y<<2|v>>4,D[f++]=(v&15)<<4|I>>2,D[f++]=(I&3)<<6|z&63;return T}function Cn(l){var u=new Uint8Array(l),p="",A;for(A=0;A<u.length;A+=3)p+=Ye[u[A]>>2],p+=Ye[(u[A]&3)<<4|u[A+1]>>4],p+=Ye[(u[A+1]&15)<<2|u[A+2]>>6],p+=Ye[u[A+2]&63];return u.length%3===2?p=p.substring(0,p.length-1)+"=":u.length%3===1&&(p=p.substring(0,p.length-2)+"=="),p}function xt(l,u){var p="";if(l&&(p=E.call(l)),l&&(p==="[object ArrayBuffer]"||l.buffer&&E.call(l.buffer)==="[object ArrayBuffer]")){var A,f=En;l instanceof ArrayBuffer?(A=l,f+=Rn):(A=l.buffer,p==="[object Int8Array]"?f+=qn:p==="[object Uint8Array]"?f+=wn:p==="[object Uint8ClampedArray]"?f+=jn:p==="[object Int16Array]"?f+=Pn:p==="[object Uint16Array]"?f+=bt:p==="[object Int32Array]"?f+=Nn:p==="[object Uint32Array]"?f+=gt:p==="[object Float32Array]"?f+=Mn:p==="[object Float64Array]"?f+=vt:u(new Error("Failed to get type for BinaryArray"))),u(f+Cn(A))}else if(p==="[object Blob]"){var y=new FileReader;y.onload=function(){var v=Yt+l.type+"~"+Cn(this.result);u(En+en+v)},y.readAsArrayBuffer(l)}else try{u(JSON.stringify(l))}catch(v){console.error("Couldn't convert value into a JSON string: ",l),u(null,v)}}function me(l){if(l.substring(0,On)!==En)return JSON.parse(l);var u=l.substring(Yn),p=l.substring(On,Yn),A;if(p===en&&ht.test(u)){var f=u.match(ht);A=f[1],u=u.substring(f[0].length)}var y=nn(u);switch(p){case Rn:return y;case en:return U([y],{type:A});case qn:return new Int8Array(y);case wn:return new Uint8Array(y);case jn:return new Uint8ClampedArray(y);case Pn:return new Int16Array(y);case bt:return new Uint16Array(y);case Nn:return new Int32Array(y);case gt:return new Uint32Array(y);case Mn:return new Float32Array(y);case vt:return new Float64Array(y);default:throw new Error("Unkown type: "+p)}}var Fn={serialize:xt,deserialize:me,stringToBuffer:nn,bufferToString:Cn};function kn(l,u,p,A){l.executeSql("CREATE TABLE IF NOT EXISTS "+u.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],p,A)}function Un(l){var u=this,p={db:null};if(l)for(var A in l)p[A]=typeof l[A]!="string"?l[A].toString():l[A];var f=new h(function(y,v){try{p.db=openDatabase(p.name,String(p.version),p.description,p.size)}catch(I){return v(I)}p.db.transaction(function(I){kn(I,p,function(){u._dbInfo=p,y()},function(z,T){v(T)})},v)});return p.serializer=Fn,f}function Ke(l,u,p,A,f,y){l.executeSql(p,A,f,function(v,I){I.code===I.SYNTAX_ERR?v.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[u.storeName],function(z,T){T.rows.length?y(z,I):kn(z,u,function(){z.executeSql(p,A,f,y)},y)},y):y(v,I)},y)}function Et(l,u){var p=this;l=M(l);var A=new h(function(f,y){p.ready().then(function(){var v=p._dbInfo;v.db.transaction(function(I){Ke(I,v,"SELECT * FROM "+v.storeName+" WHERE key = ? LIMIT 1",[l],function(z,T){var D=T.rows.length?T.rows.item(0).value:null;D&&(D=v.serializer.deserialize(D)),f(D)},function(z,T){y(T)})})}).catch(y)});return c(A,u),A}function Ft(l,u){var p=this,A=new h(function(f,y){p.ready().then(function(){var v=p._dbInfo;v.db.transaction(function(I){Ke(I,v,"SELECT * FROM "+v.storeName,[],function(z,T){for(var D=T.rows,V=D.length,de=0;de<V;de++){var pe=D.item(de),ue=pe.value;if(ue&&(ue=v.serializer.deserialize(ue)),ue=l(ue,pe.key,de+1),ue!==void 0){f(ue);return}}f()},function(z,T){y(T)})})}).catch(y)});return c(A,u),A}function yn(l,u,p,A){var f=this;l=M(l);var y=new h(function(v,I){f.ready().then(function(){u===void 0&&(u=null);var z=u,T=f._dbInfo;T.serializer.serialize(u,function(D,V){V?I(V):T.db.transaction(function(de){Ke(de,T,"INSERT OR REPLACE INTO "+T.storeName+" (key, value) VALUES (?, ?)",[l,D],function(){v(z)},function(pe,ue){I(ue)})},function(de){if(de.code===de.QUOTA_ERR){if(A>0){v(yn.apply(f,[l,z,p,A-1]));return}I(de)}})})}).catch(I)});return c(y,p),y}function wt(l,u,p){return yn.apply(this,[l,u,p,1])}function Ct(l,u){var p=this;l=M(l);var A=new h(function(f,y){p.ready().then(function(){var v=p._dbInfo;v.db.transaction(function(I){Ke(I,v,"DELETE FROM "+v.storeName+" WHERE key = ?",[l],function(){f()},function(z,T){y(T)})})}).catch(y)});return c(A,u),A}function kt(l){var u=this,p=new h(function(A,f){u.ready().then(function(){var y=u._dbInfo;y.db.transaction(function(v){Ke(v,y,"DELETE FROM "+y.storeName,[],function(){A()},function(I,z){f(z)})})}).catch(f)});return c(p,l),p}function Bt(l){var u=this,p=new h(function(A,f){u.ready().then(function(){var y=u._dbInfo;y.db.transaction(function(v){Ke(v,y,"SELECT COUNT(key) as c FROM "+y.storeName,[],function(I,z){var T=z.rows.item(0).c;A(T)},function(I,z){f(z)})})}).catch(f)});return c(p,l),p}function Ut(l,u){var p=this,A=new h(function(f,y){p.ready().then(function(){var v=p._dbInfo;v.db.transaction(function(I){Ke(I,v,"SELECT key FROM "+v.storeName+" WHERE id = ? LIMIT 1",[l+1],function(z,T){var D=T.rows.length?T.rows.item(0).key:null;f(D)},function(z,T){y(T)})})}).catch(y)});return c(A,u),A}function St(l){var u=this,p=new h(function(A,f){u.ready().then(function(){var y=u._dbInfo;y.db.transaction(function(v){Ke(v,y,"SELECT key FROM "+y.storeName,[],function(I,z){for(var T=[],D=0;D<z.rows.length;D++)T.push(z.rows.item(D).key);A(T)},function(I,z){f(z)})})}).catch(f)});return c(p,l),p}function An(l){return new h(function(u,p){l.transaction(function(A){A.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(f,y){for(var v=[],I=0;I<y.rows.length;I++)v.push(y.rows.item(I).name);u({db:l,storeNames:v})},function(f,y){p(y)})},function(A){p(A)})})}function Wt(l,u){u=L.apply(this,arguments);var p=this.config();l=typeof l!="function"&&l||{},l.name||(l.name=l.name||p.name,l.storeName=l.storeName||p.storeName);var A=this,f;return l.name?f=new h(function(y){var v;l.name===p.name?v=A._dbInfo.db:v=openDatabase(l.name,"","",0),l.storeName?y({db:v,storeNames:[l.storeName]}):y(An(v))}).then(function(y){return new h(function(v,I){y.db.transaction(function(z){function T(pe){return new h(function(ue,xe){z.executeSql("DROP TABLE IF EXISTS "+pe,[],function(){ue()},function(ve,je){xe(je)})})}for(var D=[],V=0,de=y.storeNames.length;V<de;V++)D.push(T(y.storeNames[V]));h.all(D).then(function(){v()}).catch(function(pe){I(pe)})},function(z){I(z)})})}):f=h.reject("Invalid arguments"),c(f,u),f}var Ht={_driver:"webSQLStorage",_initStorage:Un,_support:Qe(),iterate:Ft,getItem:Et,setItem:wt,removeItem:Ct,clear:kt,length:Bt,key:Ut,keys:St,dropInstance:Wt};function It(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Wn(l,u){var p=l.name+"/";return l.storeName!==u.storeName&&(p+=l.storeName+"/"),p}function Qt(){var l="_localforage_support_test";try{return localStorage.setItem(l,!0),localStorage.removeItem(l),!1}catch{return!0}}function Kt(){return!Qt()||localStorage.length>0}function Hn(l){var u=this,p={};if(l)for(var A in l)p[A]=l[A];return p.keyPrefix=Wn(l,u._defaultConfig),Kt()?(u._dbInfo=p,p.serializer=Fn,h.resolve()):h.reject()}function Vt(l){var u=this,p=u.ready().then(function(){for(var A=u._dbInfo.keyPrefix,f=localStorage.length-1;f>=0;f--){var y=localStorage.key(f);y.indexOf(A)===0&&localStorage.removeItem(y)}});return c(p,l),p}function Zt(l,u){var p=this;l=M(l);var A=p.ready().then(function(){var f=p._dbInfo,y=localStorage.getItem(f.keyPrefix+l);return y&&(y=f.serializer.deserialize(y)),y});return c(A,u),A}function Ue(l,u){var p=this,A=p.ready().then(function(){for(var f=p._dbInfo,y=f.keyPrefix,v=y.length,I=localStorage.length,z=1,T=0;T<I;T++){var D=localStorage.key(T);if(D.indexOf(y)===0){var V=localStorage.getItem(D);if(V&&(V=f.serializer.deserialize(V)),V=l(V,D.substring(v),z++),V!==void 0)return V}}});return c(A,u),A}function _t(l,u){var p=this,A=p.ready().then(function(){var f=p._dbInfo,y;try{y=localStorage.key(l)}catch{y=null}return y&&(y=y.substring(f.keyPrefix.length)),y});return c(A,u),A}function Xt(l){var u=this,p=u.ready().then(function(){for(var A=u._dbInfo,f=localStorage.length,y=[],v=0;v<f;v++){var I=localStorage.key(v);I.indexOf(A.keyPrefix)===0&&y.push(I.substring(A.keyPrefix.length))}return y});return c(p,l),p}function Bn(l){var u=this,p=u.keys().then(function(A){return A.length});return c(p,l),p}function Qn(l,u){var p=this;l=M(l);var A=p.ready().then(function(){var f=p._dbInfo;localStorage.removeItem(f.keyPrefix+l)});return c(A,u),A}function Jt(l,u,p){var A=this;l=M(l);var f=A.ready().then(function(){u===void 0&&(u=null);var y=u;return new h(function(v,I){var z=A._dbInfo;z.serializer.serialize(u,function(T,D){if(D)I(D);else try{localStorage.setItem(z.keyPrefix+l,T),v(y)}catch(V){(V.name==="QuotaExceededError"||V.name==="NS_ERROR_DOM_QUOTA_REACHED")&&I(V),I(V)}})})});return c(f,p),f}function fn(l,u){if(u=L.apply(this,arguments),l=typeof l!="function"&&l||{},!l.name){var p=this.config();l.name=l.name||p.name,l.storeName=l.storeName||p.storeName}var A=this,f;return l.name?f=new h(function(y){l.storeName?y(Wn(l,A._defaultConfig)):y(l.name+"/")}).then(function(y){for(var v=localStorage.length-1;v>=0;v--){var I=localStorage.key(v);I.indexOf(y)===0&&localStorage.removeItem(I)}}):f=h.reject("Invalid arguments"),c(f,u),f}var Lt={_driver:"localStorageWrapper",_initStorage:Hn,_support:It(),iterate:Ue,getItem:Zt,setItem:Jt,removeItem:Qn,clear:Vt,length:Bn,key:_t,keys:Xt,dropInstance:fn},zt=function(u,p){return u===p||typeof u=="number"&&typeof p=="number"&&isNaN(u)&&isNaN(p)},Tt=function(u,p){for(var A=u.length,f=0;f<A;){if(zt(u[f],p))return!0;f++}return!1},rn=Array.isArray||function(l){return Object.prototype.toString.call(l)==="[object Array]"},$e={},Kn={},Ve={INDEXEDDB:ke,WEBSQL:Ht,LOCALSTORAGE:Lt},Ze=[Ve.INDEXEDDB._driver,Ve.WEBSQL._driver,Ve.LOCALSTORAGE._driver],on=["dropInstance"],Sn=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(on),Dt={description:"",driver:Ze.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function In(l,u){l[u]=function(){var p=arguments;return l.ready().then(function(){return l[u].apply(l,p)})}}function Vn(){for(var l=1;l<arguments.length;l++){var u=arguments[l];if(u)for(var p in u)u.hasOwnProperty(p)&&(rn(u[p])?arguments[0][p]=u[p].slice():arguments[0][p]=u[p])}return arguments[0]}var Ot=function(){function l(u){C(this,l);for(var p in Ve)if(Ve.hasOwnProperty(p)){var A=Ve[p],f=A._driver;this[p]=f,$e[f]||this.defineDriver(A)}this._defaultConfig=Vn({},Dt),this._config=Vn({},this._defaultConfig,u),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return l.prototype.config=function(p){if((typeof p>"u"?"undefined":ye(p))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var A in p){if(A==="storeName"&&(p[A]=p[A].replace(/\W/g,"_")),A==="version"&&typeof p[A]!="number")return new Error("Database version must be a number.");this._config[A]=p[A]}return"driver"in p&&p.driver?this.setDriver(this._config.driver):!0}else return typeof p=="string"?this._config[p]:this._config},l.prototype.defineDriver=function(p,A,f){var y=new h(function(v,I){try{var z=p._driver,T=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!p._driver){I(T);return}for(var D=Sn.concat("_initStorage"),V=0,de=D.length;V<de;V++){var pe=D[V],ue=!Tt(on,pe);if((ue||p[pe])&&typeof p[pe]!="function"){I(T);return}}var xe=function(){for(var mn=function(Be){return function(){var qt=new Error("Method "+Be+" is not implemented by the current driver"),jt=h.reject(qt);return c(jt,arguments[arguments.length-1]),jt}},Zn=0,Rt=on.length;Zn<Rt;Zn++){var hn=on[Zn];p[hn]||(p[hn]=mn(hn))}};xe();var ve=function(mn){$e[z]&&console.info("Redefining LocalForage driver: "+z),$e[z]=p,Kn[z]=mn,v()};"_support"in p?p._support&&typeof p._support=="function"?p._support().then(ve,I):ve(!!p._support):ve(!0)}catch(je){I(je)}});return O(y,A,f),y},l.prototype.driver=function(){return this._driver||null},l.prototype.getDriver=function(p,A,f){var y=$e[p]?h.resolve($e[p]):h.reject(new Error("Driver not found."));return O(y,A,f),y},l.prototype.getSerializer=function(p){var A=h.resolve(Fn);return O(A,p),A},l.prototype.ready=function(p){var A=this,f=A._driverSet.then(function(){return A._ready===null&&(A._ready=A._initDriver()),A._ready});return O(f,p,p),f},l.prototype.setDriver=function(p,A,f){var y=this;rn(p)||(p=[p]);var v=this._getSupportedDrivers(p);function I(){y._config.driver=y.driver()}function z(V){return y._extend(V),I(),y._ready=y._initStorage(y._config),y._ready}function T(V){return function(){var de=0;function pe(){for(;de<V.length;){var ue=V[de];return de++,y._dbInfo=null,y._ready=null,y.getDriver(ue).then(z).catch(pe)}I();var xe=new Error("No available storage method found.");return y._driverSet=h.reject(xe),y._driverSet}return pe()}}var D=this._driverSet!==null?this._driverSet.catch(function(){return h.resolve()}):h.resolve();return this._driverSet=D.then(function(){var V=v[0];return y._dbInfo=null,y._ready=null,y.getDriver(V).then(function(de){y._driver=de._driver,I(),y._wrapLibraryMethodsWithReady(),y._initDriver=T(v)})}).catch(function(){I();var V=new Error("No available storage method found.");return y._driverSet=h.reject(V),y._driverSet}),O(this._driverSet,A,f),this._driverSet},l.prototype.supports=function(p){return!!Kn[p]},l.prototype._extend=function(p){Vn(this,p)},l.prototype._getSupportedDrivers=function(p){for(var A=[],f=0,y=p.length;f<y;f++){var v=p[f];this.supports(v)&&A.push(v)}return A},l.prototype._wrapLibraryMethodsWithReady=function(){for(var p=0,A=Sn.length;p<A;p++)In(this,Sn[p])},l.prototype.createInstance=function(p){return new l(p)},l}(),$t=new Ot;ce.exports=$t},{3:3}]},{},[4])(4)})})(wa);var Mo=wa.exports;const vn=ba(Mo),Dn=w=>(vo("data-v-be52b7f7"),w=w(),xo(),w),Yo={class:"main"},Fo={class:"l"},Uo={class:"index"},Wo={class:"filter"},Ho={class:"filter-item"},Qo=Dn(()=>Ae("div",{class:"filter-item-th"},"Search：",-1)),Ko={class:"filter-item-tb"},Vo={class:"filter-item",style:{padding:"8px 0"}},Zo=Dn(()=>Ae("div",{class:"filter-item-th"},"Author：",-1)),Xo={class:"filter-item-tb"},Jo={key:0,class:""},$o={class:"filter-item",style:{padding:"8px 0"}},Go=Dn(()=>Ae("div",{class:"filter-item-th"},"Search：",-1)),ei={class:"filter-item-tb"},ni={class:"filter-item",style:{padding:"8px 0"}},ti=Dn(()=>Ae("div",{class:"filter-item-th"},"Info：",-1)),ai={class:"filter-item-tb"},ri={class:"list"},oi=["onClick"],ii={class:"list-item-img"},li={class:"list-item-tf"},si={class:"list-item-tit"},di={class:"list-item-des"},pi={class:"r"},ci={class:"btnwrap"},ui={class:""},yi={key:0,class:""},Ai={class:""},fi={key:0,style:{width:"100%",margin:"12px 0"}},mi={class:"table-filter"},hi={class:""},bi={class:"filter-item",style:{padding:"8px 0"}},gi=Dn(()=>Ae("div",{class:"filter-item-th"},"Speed：",-1)),vi={class:"filter-item-tb"},xi={key:0,class:"btnwrap"},Ei={class:""},wi={key:1,class:"movie"},Ci={class:"movie-title"},ki={class:"movie-des"},Bi=Dn(()=>Ae("div",{class:"dplayer",id:"dplayer"},null,-1)),Si={__name:"list",setup(w){const B=gn(!1),Q=At({authorData:[{text:"",img:"",count:null,select:!0}],otherData:[{text:"",select:!0},{text:"new",select:!1},{text:"yes",select:!1},{text:"no",select:!1},{text:"subtitle",select:!1},{text:"god",select:!1},{text:"collect",select:!1},{text:"havecover",select:!1},{text:"nocover",select:!1},{text:"noauthor",select:!1},{text:"Jan",select:!1},{text:"China",select:!1},{text:"Other",select:!1},{text:"del",select:!1}]}),ce=gn(!1),x=At({keyword:"",author:"",other:""}),ye=async b=>{if(x.author===b)return!1;x.author=b,Q.authorData.forEach(S=>{S.text===x.author?S.select=!0:S.select=!1}),k()},C=async b=>{if(x.other===b)return!1;x.other=b,Q.otherData.forEach(S=>{S.text===x.other?S.select=!0:S.select=!1}),k()},k=async()=>{R.value=[],setTimeout(()=>{R.value=U.value.filter(b=>{let S=!1;x.other?x.other==="China"||x.other==="Other"||x.other==="Jan"?S=b.country===x.other:x.other==="new"?S=b.isnew:x.other==="collect"?S=b.iscollect:x.other==="yes"?S=b.ishorse:x.other==="no"?S=!b.ishorse:x.other==="god"?S=b.filename.toLowerCase().indexOf("oae")!==-1||b.filename.toLowerCase().indexOf("rebdb")!==-1:x.other==="subtitle"?S=b.filename.toLowerCase().indexOf("-c")!==-1||b.filename.toLowerCase().indexOf("ch")!==-1:x.other==="del"?S=b.isdel:x.other==="havecover"?S=!!b.cover:x.other==="nocover"?S=!b.cover:x.other==="author"?S=!!b.author:x.other==="noauthor"?S=!b.author:S=!1:S=!0;let X=!1;x.author?X=b.author===x.author:X=!0;let $=!1;return x.keyword?$=b.filename.toLowerCase().indexOf(x.keyword.toLowerCase())!==-1||b.author&&b.author.toLowerCase().indexOf(x.keyword.toLowerCase())!==-1:$=!0,S&&X&&$})},200)},_=gn({}),R=gn([]),U=gn([]),h=()=>{U.value=[],R.value=[],Q.authorData=[{text:"",img:"",count:null,select:!0}],le(),x.keyword="",ye(""),C("")},c=gn([]),O=async()=>{const b=await vn.getItem("fileDirectoryHandles");b&&(c.value=b)},M=async()=>{const b=await window.showDirectoryPicker({id:"1",startIn:"desktop",mode:"readwrite"});if(b.name!=="A")return Ne.error("Non-destination file directory."),!1;let S=!1;if(c.value&&c.value.length){for(let X=0,$=c.value.length;X<$;X++)if(await c.value[X].isSameEntry(b)){S=!0;break}}S?Ne.error("You had add this file directory."):(c.value.push(b),await vn.setItem("fileDirectoryHandles",[...c.value]))},L=async b=>{const S={mode:"readwrite"};if(await b.queryPermission(S)!=="granted"&&await b.requestPermission(S)!=="granted")return!1;try{const $=await va(b),fe=xa($),ae=ga($);return{fileMap:fe,movieData:ae}}catch($){return console.error($),console.log(b),Ne.error(`The directory /${b.name} could not be found.`),null}},Y=async b=>{if(b&&b.length){const S=[];for(let ae=0,ze=b.length;ae<ze;ae++){const we=await L(b[ae]);we&&S.push(we)}if(S.length<b.length)return!1;h(),B.value=!0;const X={},$=[],fe=[];for(let ae=0,ze=S.length;ae<ze;ae++){Object.assign(X,S[ae].fileMap);for(let we=0,Me=S[ae].movieData.length;we<Me;we++)$.push(S[ae].movieData[we])}for(let ae=0,ze=$.length;ae<ze;ae++){const we=$[ae].author,Me=$[ae].authorcover;if(we){const qe=fe.find(un=>un.text===we);qe?qe.count++:fe.push({count:1,text:we,img:Me,select:!1})}}console.log(X),console.log($),console.log(fe),fe.sort((ae,ze)=>ze.count-ae.count),_.value=X,U.value=$,Q.authorData=[...Q.authorData,...fe],k(),B.value=!1}else Ne.error("Please add a file directory.")},G=async b=>{Aa.confirm(`Will delete the file directory: / ${c.value[b].name}. Continue?`,"Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(async()=>{c.value.splice(b,1),h(),await vn.setItem("fileDirectoryHandles",[...c.value])}).catch(()=>{})},N=At({current:1,data:[{text:"0.5",select:!1},{text:"1",select:!0},{text:"1.5",select:!1},{text:"1.75",select:!1},{text:"2",select:!1},{text:"3",select:!1},{text:"4",select:!1},{text:"5",select:!1},{text:"6",select:!1},{text:"7",select:!1},{text:"8",select:!1},{text:"9",select:!1},{text:"10",select:!1},{text:"12",select:!1},{text:"14",select:!1},{text:"16",select:!1}]}),re=At({current:5,data:[{text:5,select:!0},{text:10,select:!1},{text:15,select:!1},{text:20,select:!1},{text:25,select:!1},{text:30,select:!1}]}),Z=async b=>{b=Number(b),N.data.forEach(S=>{Number(S.text)===b?S.select=!0:S.select=!1}),N.current=b,ie&&ie.speed(b),await vn.setItem("speed",b)},j=async()=>{const b=await vn.getItem("speed");Z(b||N.current)},oe=async b=>{re.data.forEach(S=>{Number(S.text)===b?S.select=!0:S.select=!1}),re.current=b,await vn.setItem("jumpspeed",b)},se=async()=>{const b=await vn.getItem("jumpspeed");oe(b||re.current)},K=gn({data:null,file:null,lasttime:"",duration:"",size:"",sizename:"",resolution:""});let ie=null;const le=()=>{ie&&ie.destroy(),ie=null,K.value.data=null,K.value.file=null,K.value.lasttime="",K.value.duration="",K.value.size="",K.value.sizename="",K.value.resolution=""},Ie=async b=>{if(b&&b.handle){B.value=!0;const S=await aa(b.handle);if(S&&S.url)le(),K.value.data=b,K.value.file=S.file,K.value.size=S.file.size,K.value.sizename=tn(K.value.size),K.value.lasttime=Eo(S.file.lastModified).format("YYYY-MM-DD HH:mm:ss"),ie=new No({container:document.getElementById("dplayer"),hotkey:!1,preventClickToggle:!0,screenshot:!0,playbackSpeed:[.5,.75,1,1.25,1.5,2,3,4,6,8],video:{url:S.url}}),ie.speed(N.current),ie.play(),setTimeout(()=>{K.value.duration=He(ie.video.duration||0),ie.video.videoWidth&&ie.video.videoHeight&&(K.value.resolution=`${ie.video.videoWidth}*${ie.video.videoHeight}`)},2e3);else{console.log(b),Ne.error(`${b.filename} could not be found.`);const X=U.value.findIndex($=>$.filename===b.filename);X!==-1&&(U.value.splice(X,1),k())}B.value=!1}else console.log(b),Ne.error(`${b.filename} could not be found.`)},Le=async()=>{if(K.value.data){const b=R.value.findIndex(S=>S.filename===K.value.data.filename);b!==-1&&R.value[b-1]?Ie(R.value[b-1]):Ne.error("Prev one do not exist.")}else Ne.error("Prev one do not exist.")},Oe=async()=>{if(K.value.data){const b=R.value.findIndex(S=>S.filename===K.value.data.filename);b!==-1&&R.value[b+1]?Ie(R.value[b+1]):Ne.error("Next one do not exist.")}else Ne.error("Next one do not exist.")},He=b=>{b=Math.floor(b);let S=0,X=0,$=0;b>3600&&(S=Math.floor(b/3600));const fe=b-S*3600;return fe>60&&(X=Math.floor(fe/60)),$=fe-X*60,`${S<10?"0"+S:S}:${X<10?"0"+X:X}:${$<10?"0"+$:$}`},tn=b=>{b=Math.floor(b);let S=0,X=0,$=1024*1024*1024,fe=1024*1024;b>$&&(S=Math.floor(b/$));const ae=b-S*$;return ae>fe&&(X=Math.ceil(ae/fe)),`${S>0?S+"G":""}${X>0?X+"M":""}`},an=async()=>{try{await Aa.confirm(`Will delete the Movie: / ${K.value.data.filename}. Continue?`,"Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"});const b=K.value.data,S=b.id,X=R.value.findIndex(fe=>fe.filename===b.filename),$=_.value[S];if(S&&$){B.value=!0,le();const fe=await ha($);if(fe)Ne.error(fe);else{Ne.success("File del success.");const ae=U.value.findIndex(ze=>ze.id===S);ae!==-1&&U.value.splice(ae,1),delete _.value[S],k(),setTimeout(()=>{R.value[ae]&&Ie(R.value[ae])},1e3)}B.value=!1}else Ne.error("File does not exist.")}catch{}},he=At({type:"all",typeoptions:[{type:"all"},{type:"movie"},{type:"image"},{type:"otherfile"},{type:"directory"},{type:"directory-space"},{type:"directory-movieless"}],flag:!1,list:[]}),Ge=so(()=>he.list.filter(b=>he.type==="all"?!0:b.typename===he.type)),ee=async()=>{var b;if(he.list=[],he.flag=!he.flag,!he.flag)return!1;for(const S in _.value){const X=_.value[S];if(X.parent){if(X.kind==="file")!mt(X)&&!Mt(X)?he.list.push({iscandel:!0,file:X,pathname:X.path.join("/"),typename:"otherfile"}):mt(X)?he.list.push({iscandel:!0,file:X,pathname:X.path.join("/"),typename:"movie"}):Mt(X)&&he.list.push({iscandel:!0,file:X,pathname:X.path.join("/"),typename:"image"});else if(X.kind==="directory")if(console.log(X.path),((b=X==null?void 0:X.children)==null?void 0:b.length)===0)he.list.push({iscandel:X.path.length!==2,file:X,pathname:X.path.join("/"),typename:"directory-space"});else{const $=X.children.every(ae=>!mt(ae)),fe=X.children.every(ae=>ae.kind!=="directory");$&&fe&&he.list.push({iscandel:X.path.length!==2,file:X,pathname:X.path.join("/"),typename:"directory-movieless"})}}}console.log(he.list)},xn=async b=>{B.value=!0;const S=await ha(b.file);if(S)Ne.error(S);else{const X=he.list.findIndex($=>$.pathname===b.pathname);he.list.splice(X,1),delete _.value[b.file.id]}B.value=!1};return po(async()=>{O(),j(),se(),window.addEventListener("keydown",b=>{if(console.log(b.keyCode),ce.value)return!1;if(ie)if(b.keyCode===32)ie.toggle();else if(b.keyCode===39){const S=ie.video.currentTime+re.current;ie.seek(S>ie.video.duration?ie.video.duration:S)}else if(b.keyCode===37){const S=ie.video.currentTime-re.current;ie.seek(S<0?0:S)}else b.keyCode===38?Le():b.keyCode===40?Oe():b.keyCode===70?ie.fullScreen.toggle():b.keyCode===97?Z(1):b.keyCode===98?Z(2):b.keyCode===99?Z(3):b.keyCode===100?Z(4):b.keyCode===101?Z(5):b.keyCode===102?Z(6):b.keyCode===103?Z(7):b.keyCode===104?Z(8):b.keyCode===105&&Z(9);b.keyCode===82&&h()},!1)}),(b,S)=>{const X=dn("el-input"),$=dn("el-button"),fe=dn("el-image"),ae=dn("el-radio"),ze=dn("el-radio-group"),we=dn("el-table-column"),Me=dn("el-table"),qe=dn("el-tag"),un=co("loading");return ya((ge(),Pe("div",Yo,[Ae("div",Fo,[Ae("div",Uo,[Ae("div",Wo,[Ae("div",Ho,[Qo,Ae("div",Ko,[De(X,{modelValue:x.keyword,"onUpdate:modelValue":S[0]||(S[0]=ne=>x.keyword=ne),style:{width:"150px"},placeholder:"search keyword",onChange:S[1]||(S[1]=ne=>k()),onBlur:S[2]||(S[2]=ne=>ce.value=!1),onFocus:S[3]||(S[3]=ne=>ce.value=!0)},null,8,["modelValue"])])]),Ae("div",Vo,[Zo,Ae("div",Xo,[(ge(!0),Pe(pn,null,cn(Q.authorData,(ne,ke)=>(ge(),Fe($,{type:"danger",size:"small",plain:!ne.select,round:"",key:ke,onClick:Qe=>ye(ne.text)},{default:Ee(()=>[Ce(_e(ne.text||"all")+" ",1),ne.count?(ge(),Pe("span",Jo,"("+_e(ne.count)+")",1)):Je("",!0)]),_:2},1032,["plain","onClick"]))),128))])]),Ae("div",$o,[Go,Ae("div",ei,[(ge(!0),Pe(pn,null,cn(Q.otherData,(ne,ke)=>(ge(),Fe($,{type:"danger",size:"small",plain:!ne.select,round:"",key:ke,onClick:Qe=>C(ne.text)},{default:Ee(()=>[Ce(_e(ne.text||"all"),1)]),_:2},1032,["plain","onClick"]))),128))])]),Ae("div",ni,[ti,Ae("div",ai,[De($,{type:"danger",size:"small",round:""},{default:Ee(()=>[Ce(_e(R.value.length),1)]),_:1})])])]),Ae("div",ri,[(ge(!0),Pe(pn,null,cn(R.value,(ne,ke)=>(ge(),Pe("div",{class:"list-item",key:ke,onClick:Qe=>Ie(ne)},[Ae("div",ii,[De(fe,{style:{width:"350px",height:"235px"},src:ne.cover||ne.authorcover,fit:"cover"},null,8,["src"])]),Ae("div",li,[Ae("div",si,_e(ne.filename),1),Ae("div",di,"["+_e(ne.author||"unknown")+"] ["+_e(ne.code||"unknown")+"]",1)])],8,oi))),128))])])]),Ae("div",pi,[Ae("div",ci,[Ae("div",ui,[c.value.length?(ge(),Fe($,{key:0,icon:We(fa),type:"danger",round:"",onClick:S[4]||(S[4]=ne=>Y(c.value))},{default:Ee(()=>[Ce(" / All ")]),_:1},8,["icon"])):Je("",!0),(ge(!0),Pe(pn,null,cn(c.value,ne=>(ge(),Fe($,{type:"danger",size:"small",plain:"",round:"",icon:We(fa),onClick:ke=>Y([ne])},{default:Ee(()=>[Ce(" / "+_e(ne.name),1)]),_:2},1032,["icon","onClick"]))),256))]),U.value.length?(ge(),Pe("div",yi,[De($,{icon:We(yo),size:"small",type:"danger",round:"",onClick:h},{default:Ee(()=>[Ce(" R ")]),_:1},8,["icon"]),De($,{icon:We(Ao),size:"small",type:"danger",round:"",onClick:ee},{default:Ee(()=>[Ce(" FM ")]),_:1},8,["icon"])])):Je("",!0),Ae("div",Ai,[(ge(!0),Pe(pn,null,cn(c.value,(ne,ke)=>(ge(),Fe($,{type:"danger",size:"small",plain:"",round:"",icon:We(ta),key:ke,onClick:Qe=>G(ke)},{default:Ee(()=>[Ce(" / "+_e(ne.name),1)]),_:2},1032,["icon","onClick"]))),128)),De($,{type:"danger",icon:We(fo),round:"",onClick:M},{default:Ee(()=>[Ce("Add")]),_:1},8,["icon"])])]),he.flag?(ge(),Pe("div",fi,[Ae("div",mi,[De(ze,{modelValue:he.type,"onUpdate:modelValue":S[5]||(S[5]=ne=>he.type=ne)},{default:Ee(()=>[(ge(!0),Pe(pn,null,cn(he.typeoptions,(ne,ke)=>(ge(),Fe(ae,{key:ke,label:ne.type},{default:Ee(()=>[Ce(_e(ne.type),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),De(Me,{data:Ge.value,"max-height":"90vh",stripe:"",size:"small"},{default:Ee(()=>[De(we,{prop:"pathname",label:"pathname","min-width":"200"}),De(we,{prop:"typename",label:"typename",width:"150"}),De(we,{fixed:"right",label:"operation",width:"80",align:"center"},{default:Ee(ne=>[ne.row.iscandel?(ge(),Fe($,{key:0,type:"danger",plain:"",round:"",icon:We(ta),size:"small",onClick:ke=>xn(ne.row)},null,8,["icon","onClick"])):Je("",!0)]),_:1})]),_:1},8,["data"])])):Je("",!0),ya(Ae("div",hi,[Ae("div",bi,[gi,Ae("div",vi,[(ge(!0),Pe(pn,null,cn(N.data,(ne,ke)=>(ge(),Fe($,{type:"danger",size:"small",plain:!ne.select,round:"",key:ke,onClick:Qe=>Z(ne.text)},{default:Ee(()=>[Ce(_e(ne.text),1)]),_:2},1032,["plain","onClick"]))),128)),Ce(" | "),(ge(!0),Pe(pn,null,cn(re.data,(ne,ke)=>(ge(),Fe($,{type:"danger",size:"small",plain:!ne.select,round:"",key:ke,onClick:Qe=>oe(ne.text)},{default:Ee(()=>[Ce(_e(ne.text),1)]),_:2},1032,["plain","onClick"]))),128))])]),K.value.data?(ge(),Pe("div",xi,[De($,{type:"danger",size:"small",icon:We(mo),round:"",onClick:Le},null,8,["icon"]),Ae("div",Ei,[De($,{type:"danger",size:"small",icon:We(ho),round:"",onClick:S[6]||(S[6]=()=>{})},{default:Ee(()=>[Ce("UC")]),_:1},8,["icon"]),De($,{type:"danger",size:"",icon:We(bo),round:"",onClick:le},{default:Ee(()=>[Ce("Stop")]),_:1},8,["icon"]),De($,{type:"danger",size:"small",icon:We(ta),round:"",onClick:an},{default:Ee(()=>[Ce("DM")]),_:1},8,["icon"])]),De($,{type:"danger",size:"small",icon:We(go),round:"",onClick:Oe},null,8,["icon"])])):Je("",!0),K.value.data?(ge(),Pe("div",wi,[Ae("div",Ci,_e(K.value.data.path.join("/")),1),Ae("div",ki,[De(qe,{type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Ce(_e(K.value.data.author||"unknown"),1)]),_:1}),De(qe,{type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Ce(_e(K.value.data.code||"unknown"),1)]),_:1}),K.value.duration?(ge(),Fe(qe,{key:0,type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Ce(_e(K.value.duration),1)]),_:1})):Je("",!0),K.value.sizename?(ge(),Fe(qe,{key:1,type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Ce(_e(K.value.sizename),1)]),_:1})):Je("",!0),K.value.resolution?(ge(),Fe(qe,{key:2,type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Ce(_e(K.value.resolution),1)]),_:1})):Je("",!0),K.value.lasttime?(ge(),Fe(qe,{key:3,type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Ce("lastModified: "+_e(K.value.lasttime),1)]),_:1})):Je("",!0),De(qe,{type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Ce(_e(K.value.data.cover?"havecover":"nocover"),1)]),_:1})])])):Je("",!0),Bi],512),[[uo,!he.flag]])])])),[[un,B.value]])}}},Li=wo(Si,[["__scopeId","data-v-be52b7f7"]]);export{Li as default};

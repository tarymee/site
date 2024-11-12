import{c as ct,g as ba,r as An,a as Rt,o as po,b as kn,d as co,w as Aa,e as ve,f as Ne,h as Ae,i as Te,F as Bn,j as Sn,k as Ee,l as Ye,u as Fe,m as Ve,t as _e,v as uo,E as qe,n as ya,p as Be,q as fa,s as Ao,x as yo,y as na,z as fo,A as mo,B as ho,C as bo,D as go,G as vo,H as xo,I as Eo}from"./index-BWHhVUKi.js";import{_ as wo}from"./_plugin-vue_export-helper-DlAUqK2U.js";let qt;const Co=new Uint8Array(16);function ko(){if(!qt&&(qt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!qt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return qt(Co)}const De=[];for(let v=0;v<256;++v)De.push((v+256).toString(16).slice(1));function Bo(v,I=0){return De[v[I+0]]+De[v[I+1]]+De[v[I+2]]+De[v[I+3]]+"-"+De[v[I+4]]+De[v[I+5]]+"-"+De[v[I+6]]+De[v[I+7]]+"-"+De[v[I+8]]+De[v[I+9]]+"-"+De[v[I+10]]+De[v[I+11]]+De[v[I+12]]+De[v[I+13]]+De[v[I+14]]+De[v[I+15]]}const So=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ma={randomUUID:So};function Io(v,I,K){if(ma.randomUUID&&!I&&!v)return ma.randomUUID();v=v||{};const de=v.random||(v.rng||ko)();if(de[6]=de[6]&15|64,de[8]=de[8]&63|128,I){K=K||0;for(let w=0;w<16;++w)I[K+w]=de[w];return I}return Bo(de)}const ga=v=>v.kind==="file"&&v.name.indexOf("._")===-1&&/\.ts|mp4|mkv|mov|m4v$/gi.test(v.name),ta=v=>v.kind==="file"&&v.name.indexOf("._")===-1&&/\.ts|mp4|mkv|mov|m4v|avi|wmv|flv$/gi.test(v.name),jt=v=>v.kind==="file"&&v.name.indexOf("._")===-1&&/\.jpg|png|gif|jpeg|jfif|avif|webp$/gi.test(v.name),_o=v=>v.findIndex(I=>I==="新"||I==="新1"||I==="新2"||I==="新3"||I==="新4"||I==="新5"||I==="新6"||I==="新7"||I==="新8"||I==="新9"||I==="新10"||I==="xin"||I==="xin1"||I==="xin2"||I==="xin3"||I==="xin4"||I==="xin5"||I==="xin6"||I==="xin7"||I==="xin8"||I==="xin9"||I==="xin10")!==-1,Lo=v=>v.findIndex(I=>I==="国")!==-1,zo=v=>v.findIndex(I=>I==="欧")!==-1,To=v=>v.findIndex(I=>I==="删")!==-1,Do=v=>v.findIndex(I=>I==="合")!==-1,Oo=v=>v.findIndex(I=>I==="无")===-1,Ro=v=>{const K={code:v.split(".")[0],author:"",title:""};return/(\&(.+)\&)(.+)?/gi.test(K.code)&&(K.author=RegExp.$2,K.code=RegExp.$3),/(.+)?(#(.+)#)/gi.test(K.code)&&(K.code=RegExp.$1,K.title=RegExp.$3),K},qo=v=>{let I=v==null?void 0:v.parent,K=!1;for(;I&&!K;)I.isauthordirectory?K=!0:I=I==null?void 0:I.parent;return K?{authorcover:I.authorcover,author:I.name}:null},Po=async v=>{let I="";const K=v==null?void 0:v.children;if(K&&K.length)for(let de=0,w=K.length;de<w;de++){const ue=K[de];if(jt(ue)&&ue.name.indexOf("a")!==0){const k=await aa(ue.handle);I=k?k.url:"";break}}return I},va=(v,I=[])=>{if(ga(v)){const K=Ro(v.name),de={parentid:v.parentid,id:v.id,filename:v.name,code:K.code,author:K.author,authorcover:"",title:K.title,country:Lo(v.path)?"China":zo(v.path)?"West":"Janpen",publishtime:"",createtime:"",size:"",long:"",ishd:"",ischinesesubtitle:!1,isdel:To(v.path),isnew:_o(v.path),ishorse:Oo(v.path),iscollect:Do(v.path),path:v.path,cover:"",handle:v.handle};v!=null&&v.parent&&(v!=null&&v.parent.ismoviedirectory)&&(v!=null&&v.parent.cover)&&(de.cover=v.parent.cover);const w=qo(v);w&&(de.author=w.author,de.authorcover=w.authorcover),v.name,I.push(de)}return v.children&&v.children.length&&v.children.forEach(K=>{va(K,I)}),I},xa=async(v,I)=>{const K={name:v.name,kind:v.kind,handle:v,parent:I||null,parentid:I?I.id:null,path:I?[...I.path,v.name]:[v.name],isauthordirectory:!1,authorcover:"",ismoviedirectory:!1,cover:""};if(K.id=Io(),I&&(I.name==="名"||I.name==="名1"||I.name==="名2"||I.name==="名3"||I.name==="名4")&&(K.isauthordirectory=!0),v.kind==="directory"){K.children=[];const de=v.entries();for await(const w of de){const ue=w[1],k=await xa(ue,K);if(jt(k)&&k.name.indexOf("a.")===0){K.isauthordirectory=!0;const B=await aa(k.handle);K.authorcover=B?B.url:""}ga(k)&&(K.ismoviedirectory=!0),K.children.push(k)}K.ismoviedirectory&&(K.cover=await Po(K))}return K},Ea=(v,I={})=>(I[v.id]=v,v.children&&v.children.length&&v.children.forEach(K=>{Ea(K,I)}),I),aa=async v=>{if(v&&v.getFile)try{const I=await v.getFile(),K=URL.createObjectURL(I);return{file:I,url:K}}catch(I){return console.error(I),""}else return""},ha=async v=>{if(v)try{return await v.parent.handle.removeEntry(v.name,{recursive:!0}),""}catch(I){return console.error(I),I.message}else return"File does not exist."};var wa={exports:{}};(function(v,I){(function(K,de){v.exports=de()})(self,()=>(()=>{var K={916:(k,B,L)=>{var P=L(471);k.exports=function(W){var h,c="",q=(W=W||{}).video,Y=W.options,z=P.$escape,F=W.tran,J=W.icons,N=W.index,ne=P.$each;return W.$value,W.$index,c+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,h=L(568)(q),c+=h,c+=`
    `,Y.logo&&(c+=`
    <div class="dplayer-logo">
        <img src="`,c+=z(Y.logo),c+=`">
    </div>
    `),c+=`
    <div class="dplayer-danmaku"`,Y.danmaku&&Y.danmaku.bottom&&(c+=' style="margin-bottom:',c+=z(Y.danmaku.bottom),c+='"'),c+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,Y.danmaku&&(c+=`
        <span class="dplayer-danloading">`,c+=z(F("danmaku-loading")),c+=`</span>
        `),c+=`
        <span class="diplayer-loading-icon">`,c+=J.loading,c+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,c+=z(F("setting")),c+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,c+=J.pallette,c+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,c+=z(F("set-danmaku-color")),c+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=z(N),c+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=z(N),c+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=z(N),c+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=z(N),c+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=z(N),c+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,c+=z(N),c+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,c+=z(F("set-danmaku-type")),c+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,c+=z(N),c+=`" value="1">
                    <span>`,c+=z(F("top")),c+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,c+=z(N),c+=`" value="0" checked>
                    <span>`,c+=z(F("rolling")),c+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,c+=z(N),c+=`" value="2">
                    <span>`,c+=z(F("bottom")),c+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,c+=z(F("input-danmaku-enter")),c+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,c+=z(F("send")),c+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,c+=J.send,c+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,c+=J.play,c+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,c+=J.volumeDown,c+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,c+=z(Y.theme),c+=`;">
                        <span class="dplayer-thumb" style="background: `,c+=z(Y.theme),c+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,Y.live&&(c+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,c+=z(Y.theme),c+=';"></span>',c+=z(F("live")),c+=`</span>
        `),c+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,Y.video.quality&&(c+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,c+=z(Y.video.quality[Y.video.defaultQuality].name),c+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,ne(Y.video.quality,function(G,C){c+=`
                    <div class="dplayer-quality-item" data-index="`,c+=z(C),c+='">',c+=z(G.name),c+=`</div>
                `}),c+=`
                </div>
            </div>
        </div>
        `),c+=`
        `,Y.screenshot&&(c+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,c+=z(F("screenshot")),c+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,c+=J.camera,c+=`</span>
        </div>
        `),c+=`
        `,Y.airplay&&(c+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,c+=z(F("airplay")),c+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,c+=J.airplay,c+=`</span>
        </div>
        `),c+=`
        `,Y.chromecast&&(c+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,c+=z(F("chromecast")),c+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,c+=J.chromecast,c+=`</span>
        </div>
        `),c+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,c+=z(F("send-danmaku")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=J.comment,c+=`</span>
            </button>
        </div>
        `,Y.subtitle&&(c+=`
        `,typeof Y.subtitle.url=="string"?(c+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,c+=z(F("hide-subs")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=J.subtitle,c+=`</span>
            </button>
        </div>
        `):(c+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,c+=z(F("subtitle")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=J.subtitle,c+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,ne(Y.subtitle.url,function(G,C){c+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,c+=z(G.url),c+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,c+=z(G.lang?G.name?G.name+" ("+F(G.lang)+")":F(G.lang):G.name),c+=`</span>
                        </div>
                    `}),c+=`
                </div>
            </div>
        </div>
        `),c+=`
        `),c+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,c+=z(F("setting")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=J.setting,c+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,c+=z(F("speed")),c+=`</span>
                        <div class="dplayer-toggle">`,c+=J.right,c+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,c+=z(F("loop")),c+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,c+=z(F("show-danmaku")),c+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,c+=z(F("unlimited-danmaku")),c+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,c+=z(F("opacity-danmaku")),c+=`</span>
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
                    `,ne(Y.playbackSpeed,function(G,C){c+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,c+=z(G),c+=`">
                            <span class="dplayer-label">`,c+=z(G===1?F("normal"):G),c+=`</span>
                        </div>
                    `}),c+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,c+=z(F("web-fullscreen")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=J.fullWeb,c+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,c+=z(F("fullscreen")),c+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,c+=J.full,c+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,c+=z(Y.theme),c+=`">
                <span class="dplayer-thumb" style="background: `,c+=z(Y.theme),c+=`"></span>
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
    `,Y.danmaku&&(c+=`
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
    `,ne(Y.contextmenu,function(G,C){c+=`
        <div class="dplayer-menu-item">
            <a`,G.link&&(c+=' target="_blank"'),c+=' href="',c+=z(G.link||"javascript:void(0);"),c+='">',G.key&&(c+=" ",c+=z(F(G.key))),G.text&&(c+=" ",c+=z(G.text)),c+=`</a>
        </div>
    `}),c+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,c+=J.play,c+=`
</button>`}},568:(k,B,L)=>{var P=L(471);k.exports=function(W){var h="",c=(W=W||{}).enableSubtitle,q=W.subtitle,Y=W.current,z=W.airplay,F=W.pic,J=P.$escape,N=W.screenshot,ne=W.preload,G=W.url;return c=q&&q.type==="webvtt",h+=`
<video
    class="dplayer-video `,Y&&(h+="dplayer-video-current"),h+=`"
    webkit-playsinline
    `,z&&(h+=' x-webkit-airplay="allow" '),h+=`
    playsinline
    `,F&&(h+='poster="',h+=J(F),h+='"'),h+=`
    `,(N||c)&&(h+='crossorigin="anonymous"'),h+=`
    `,ne&&(h+='preload="',h+=J(ne),h+='"'),h+=`
    `,z?h+=`
    nosrc
    `:G&&(h+=`
    src="`,h+=J(G),h+=`"
    `),h+=`
    >
    `,z&&(h+=`
    <source src="`,h+=J(G),h+=`">
    `),h+=`
    `,c&&(h+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,h+=J(typeof q.url=="string"?q.url:q.url[q.index].url),h+=`"></track>
    `),h+`
</video>`}},49:(k,B,L)=>{L.d(B,{Z:()=>q});var P=L(415),W=L.n(P),h=L(352),c=L.n(h)()(W());c.push([k.id,`:root {
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
`],sourceRoot:""}]);const q=c},685:(k,B,L)=>{L.d(B,{Z:()=>ne});var P=L(415),W=L.n(P),h=L(352),c=L.n(h),q=L(49),Y=L(80),z=L.n(Y),F=new URL(L(831),L.b),J=c()(W());J.i(q.Z);var N=z()(F);J.push([k.id,`@keyframes my-face {
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
}`],sourceRoot:""}]);const ne=J},856:k=>{var B=[];function L(h){for(var c=-1,q=0;q<B.length;q++)if(B[q].identifier===h){c=q;break}return c}function P(h,c){for(var q={},Y=[],z=0;z<h.length;z++){var F=h[z],J=c.base?F[0]+c.base:F[0],N=q[J]||0,ne="".concat(J," ").concat(N);q[J]=N+1;var G=L(ne),C={css:F[1],media:F[2],sourceMap:F[3],supports:F[4],layer:F[5]};if(G!==-1)B[G].references++,B[G].updater(C);else{var Z=W(C,c);c.byIndex=z,B.splice(z,0,{identifier:ne,updater:Z,references:1})}Y.push(ne)}return Y}function W(h,c){var q=c.domAPI(c);return q.update(h),function(Y){if(Y){if(Y.css===h.css&&Y.media===h.media&&Y.sourceMap===h.sourceMap&&Y.supports===h.supports&&Y.layer===h.layer)return;q.update(h=Y)}else q.remove()}}k.exports=function(h,c){var q=P(h=h||[],c=c||{});return function(Y){Y=Y||[];for(var z=0;z<q.length;z++){var F=L(q[z]);B[F].references--}for(var J=P(Y,c),N=0;N<q.length;N++){var ne=L(q[N]);B[ne].references===0&&(B[ne].updater(),B.splice(ne,1))}q=J}}},370:k=>{var B={};k.exports=function(L,P){var W=function(h){if(B[h]===void 0){var c=document.querySelector(h);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch{c=null}B[h]=c}return B[h]}(L);if(!W)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");W.appendChild(P)}},278:k=>{k.exports=function(B){var L=document.createElement("style");return B.setAttributes(L,B.attributes),B.insert(L,B.options),L}},458:(k,B,L)=>{k.exports=function(P){var W=L.nc;W&&P.setAttribute("nonce",W)}},470:k=>{k.exports=function(B){var L=B.insertStyleElement(B);return{update:function(P){(function(W,h,c){var q="";c.supports&&(q+="@supports (".concat(c.supports,") {")),c.media&&(q+="@media ".concat(c.media," {"));var Y=c.layer!==void 0;Y&&(q+="@layer".concat(c.layer.length>0?" ".concat(c.layer):""," {")),q+=c.css,Y&&(q+="}"),c.media&&(q+="}"),c.supports&&(q+="}");var z=c.sourceMap;z&&typeof btoa<"u"&&(q+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(z))))," */")),h.styleTagTransform(q,W,h.options)})(L,B,P)},remove:function(){(function(P){if(P.parentNode===null)return!1;P.parentNode.removeChild(P)})(L)}}}},488:k=>{k.exports=function(B,L){if(L.styleSheet)L.styleSheet.cssText=B;else{for(;L.firstChild;)L.removeChild(L.firstChild);L.appendChild(document.createTextNode(B))}}},251:k=>{k.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:k=>{k.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:k=>{k.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:k=>{k.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(k,B,L)=>{var P=typeof self<"u"?self:typeof window<"u"?window:L.g!==void 0?L.g:{},W=Object.create(P),h=/["&'<>]/;function c(q){return typeof q!="string"&&(q=q==null?"":typeof q=="function"?c(q.call(q)):JSON.stringify(q)),q}W.$escape=function(q){return function(Y){var z=""+Y,F=h.exec(z);if(!F)return Y;var J="",N=void 0,ne=void 0,G=void 0;for(N=F.index,ne=0;N<z.length;N++){switch(z.charCodeAt(N)){case 34:G="&#34;";break;case 38:G="&#38;";break;case 39:G="&#39;";break;case 60:G="&#60;";break;case 62:G="&#62;";break;default:continue}ne!==N&&(J+=z.substring(ne,N)),ne=N+1,J+=G}return ne!==N?J+z.substring(ne,N):J}(c(q))},W.$each=function(q,Y){if(Array.isArray(q))for(var z=0,F=q.length;z<F;z++)Y(q[z],z);else for(var J in q)Y(q[J],J)},k.exports=W},471:(k,B,L)=>{k.exports=L(897)},352:k=>{k.exports=function(B){var L=[];return L.toString=function(){return this.map(function(P){var W="",h=P[5]!==void 0;return P[4]&&(W+="@supports (".concat(P[4],") {")),P[2]&&(W+="@media ".concat(P[2]," {")),h&&(W+="@layer".concat(P[5].length>0?" ".concat(P[5]):""," {")),W+=B(P),h&&(W+="}"),P[2]&&(W+="}"),P[4]&&(W+="}"),W}).join("")},L.i=function(P,W,h,c,q){typeof P=="string"&&(P=[[null,P,void 0]]);var Y={};if(h)for(var z=0;z<this.length;z++){var F=this[z][0];F!=null&&(Y[F]=!0)}for(var J=0;J<P.length;J++){var N=[].concat(P[J]);h&&Y[N[0]]||(q!==void 0&&(N[5]===void 0||(N[1]="@layer".concat(N[5].length>0?" ".concat(N[5]):""," {").concat(N[1],"}")),N[5]=q),W&&(N[2]&&(N[1]="@media ".concat(N[2]," {").concat(N[1],"}")),N[2]=W),c&&(N[4]?(N[1]="@supports (".concat(N[4],") {").concat(N[1],"}"),N[4]=c):N[4]="".concat(c)),L.push(N))}},L}},80:k=>{k.exports=function(B,L){return L||(L={}),B&&(B=String(B.__esModule?B.default:B),/^['"].*['"]$/.test(B)&&(B=B.slice(1,-1)),L.hash&&(B+=L.hash),/["'() \t\n]|(%20)/.test(B)||L.needQuotes?'"'.concat(B.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):B)}},415:k=>{k.exports=function(B){var L=B[1],P=B[3];if(!P)return L;if(typeof btoa=="function"){var W=btoa(unescape(encodeURIComponent(JSON.stringify(P)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(W),c="/*# ".concat(h," */");return[L].concat([c]).join(`
`)}return[L].join(`
`)}},937:k=>{function B(L){return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},B(L)}k.exports=(typeof self>"u"?"undefined":B(self))=="object"?self.FormData:window.FormData},831:k=>{k.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},de={};function w(k){var B=de[k];if(B!==void 0)return B.exports;var L=de[k]={id:k,exports:{}};return K[k](L,L.exports,w),L.exports}w.m=K,w.n=k=>{var B=k&&k.__esModule?()=>k.default:()=>k;return w.d(B,{a:B}),B},w.d=(k,B)=>{for(var L in B)w.o(B,L)&&!w.o(k,L)&&Object.defineProperty(k,L,{enumerable:!0,get:B[L]})},w.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),w.o=(k,B)=>Object.prototype.hasOwnProperty.call(k,B),w.b=document.baseURI||self.location.href,w.nc=void 0;var ue={};return(()=>{w.d(ue,{default:()=>so});var k=w(856),B=w.n(k),L=w(470),P=w.n(L),W=w(370),h=w.n(W),c=w(458),q=w.n(c),Y=w(278),z=w.n(Y),F=w(488),J=w.n(F),N=w(685),ne={};ne.styleTagTransform=J(),ne.setAttributes=q(),ne.insert=h().bind(null,"head"),ne.domAPI=P(),ne.insertStyleElement=z(),B()(N.Z,ne),N.Z&&N.Z.locals&&N.Z.locals;function G(n){return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(n)}function C(n,t){this.name="AggregateError",this.errors=n,this.message=t||""}C.prototype=Error.prototype;function Z(n){return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(n)}var ae=setTimeout;function pe(n){return!!(n&&n.length!==void 0)}function xe(){}function re(n){if(!(this instanceof re))throw new TypeError("Promises must be constructed via new");if(typeof n!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],en(n,this)}function Le(n,t){for(;n._state===3;)n=n._value;n._state!==0?(n._handled=!0,re._immediateFn(function(){var o=n._state===1?t.onFulfilled:t.onRejected;if(o!==null){var e;try{e=o(n._value)}catch(a){return void ze(t.promise,a)}Ie(t.promise,e)}else(n._state===1?Ie:ze)(t.promise,n._value)})):n._deferreds.push(t)}function Ie(n,t){try{if(t===n)throw new TypeError("A promise cannot be resolved with itself.");if(t&&(Z(t)==="object"||typeof t=="function")){var o=t.then;if(t instanceof re)return n._state=3,n._value=t,void be(n);if(typeof o=="function")return void en((e=o,a=t,function(){e.apply(a,arguments)}),n)}n._state=1,n._value=t,be(n)}catch(r){ze(n,r)}var e,a}function ze(n,t){n._state=2,n._value=t,be(n)}function be(n){n._state===2&&n._deferreds.length===0&&re._immediateFn(function(){n._handled||re._unhandledRejectionFn(n._value)});for(var t=0,o=n._deferreds.length;t<o;t++)Le(n,n._deferreds[t]);n._deferreds=null}function Ge(n,t,o){this.onFulfilled=typeof n=="function"?n:null,this.onRejected=typeof t=="function"?t:null,this.promise=o}function en(n,t){var o=!1;try{n(function(e){o||(o=!0,Ie(t,e))},function(e){o||(o=!0,ze(t,e))})}catch(e){if(o)return;o=!0,ze(t,e)}}re.prototype.catch=function(n){return this.then(null,n)},re.prototype.then=function(n,t){var o=new this.constructor(xe);return Le(this,new Ge(n,t,o)),o},re.prototype.finally=function(n){var t=this.constructor;return this.then(function(o){return t.resolve(n()).then(function(){return o})},function(o){return t.resolve(n()).then(function(){return t.reject(o)})})},re.all=function(n){return new re(function(t,o){if(!pe(n))return o(new TypeError("Promise.all accepts an array"));var e=Array.prototype.slice.call(n);if(e.length===0)return t([]);var a=e.length;function r(s,d){try{if(d&&(Z(d)==="object"||typeof d=="function")){var m=d.then;if(typeof m=="function")return void m.call(d,function(b){r(s,b)},o)}e[s]=d,--a==0&&t(e)}catch(b){o(b)}}for(var i=0;i<e.length;i++)r(i,e[i])})},re.any=function(n){var t=this;return new t(function(o,e){if(!n||n.length===void 0)return e(new TypeError("Promise.any accepts an array"));var a=Array.prototype.slice.call(n);if(a.length===0)return e();for(var r=[],i=0;i<a.length;i++)try{t.resolve(a[i]).then(o).catch(function(s){r.push(s),r.length===a.length&&e(new C(r,"All promises were rejected"))})}catch(s){e(s)}})},re.allSettled=function(n){return new this(function(t,o){if(!n||n.length===void 0)return o(new TypeError(G(n)+" "+n+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var e=Array.prototype.slice.call(n);if(e.length===0)return t([]);var a=e.length;function r(s,d){if(d&&(G(d)==="object"||typeof d=="function")){var m=d.then;if(typeof m=="function")return void m.call(d,function(b){r(s,b)},function(b){e[s]={status:"rejected",reason:b},--a==0&&t(e)})}e[s]={status:"fulfilled",value:d},--a==0&&t(e)}for(var i=0;i<e.length;i++)r(i,e[i])})},re.resolve=function(n){return n&&Z(n)==="object"&&n.constructor===re?n:new re(function(t){t(n)})},re.reject=function(n){return new re(function(t,o){o(n)})},re.race=function(n){return new re(function(t,o){if(!pe(n))return o(new TypeError("Promise.race accepts an array"));for(var e=0,a=n.length;e<a;e++)re.resolve(n[e]).then(t,o)})},re._immediateFn=typeof setImmediate=="function"&&function(n){setImmediate(n)}||function(n){ae(n,0)},re._unhandledRejectionFn=function(n){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",n)};const x=re;var T=/mobile/i.test(window.navigator.userAgent);const S={secondToTime:function(n){if((n=n||0)===0||n===1/0||n.toString()==="NaN")return"00:00";var t=Math.floor(n/3600),o=Math.floor((n-3600*t)/60),e=Math.floor(n-3600*t-60*o);return(t>0?[t,o,e]:[o,e]).map(function(a){return a<10?"0"+a:""+a}).join(":")},getElementViewLeft:function(n){var t=n.offsetLeft,o=n.offsetParent,e=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;o!==null&&o!==n;)t+=o.offsetLeft,o=o.offsetParent;else for(;o!==null;)t+=o.offsetLeft,o=o.offsetParent;return t-e},getBoundingClientRectViewLeft:function(n){var t=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(n.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var o=document.createElement("div");o.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(o),this.getBoundingClientRectViewLeft.offset=-o.getBoundingClientRect().top-t,document.body.removeChild(o),o=null}var e=n.getBoundingClientRect(),a=this.getBoundingClientRectViewLeft.offset;return e.left+a}return this.getElementViewLeft(n)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(n){var t=n.left,o=t===void 0?0:t,e=n.top,a=e===void 0?0:e;this.isFirefox?(document.documentElement.scrollLeft=o,document.documentElement.scrollTop=a):window.scrollTo(o,a)},isMobile:T,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(n,t){localStorage.setItem(n,t)},get:function(n){return localStorage.getItem(n)}},nameMap:{dragStart:T?"touchstart":"mousedown",dragMove:T?"touchmove":"mousemove",dragEnd:T?"touchend":"mouseup"},color2Number:function(n){return n[0]==="#"&&(n=n.substr(1)),n.length===3&&(n="".concat(n[0]).concat(n[0]).concat(n[1]).concat(n[1]).concat(n[2]).concat(n[2])),parseInt(n,16)+0&16777215},number2Color:function(n){return"#"+("00000"+n.toString(16)).slice(-6)},number2Type:function(n){switch(n){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function $(n,t){return function(){return n.apply(t,arguments)}}function ie(n){return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ie(n)}var le,Oe=Object.prototype.toString,ge=Object.getPrototypeOf,Ue=(le=Object.create(null),function(n){var t=Oe.call(n);return le[t]||(le[t]=t.slice(8,-1).toLowerCase())}),ee=function(n){return n=n.toLowerCase(),function(t){return Ue(t)===n}},we=function(n){return function(t){return ie(t)===n}},Pe=Array.isArray,on=we("undefined"),ut=ee("ArrayBuffer"),Mt=we("string"),Xe=we("function"),At=we("number"),_n=function(n){return n!==null&&ie(n)==="object"},je=function(n){if(Ue(n)!=="object")return!1;var t=ge(n);return!(t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.toStringTag in n||Symbol.iterator in n)},Nt=ee("Date"),yt=ee("File"),yn=ee("Blob"),Ln=ee("FileList"),zn=ee("URLSearchParams");function Je(n,t){var o,e,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.allOwnKeys,i=r!==void 0&&r;if(n!=null)if(ie(n)!=="object"&&(n=[n]),Pe(n))for(o=0,e=n.length;o<e;o++)t.call(null,n[o],o,n);else{var s,d=i?Object.getOwnPropertyNames(n):Object.keys(n),m=d.length;for(o=0;o<m;o++)s=d[o],t.call(null,n[s],s,n)}}function Tn(n,t){t=t.toLowerCase();for(var o,e=Object.keys(n),a=e.length;a-- >0;)if(t===(o=e[a]).toLowerCase())return o;return null}var fn,Dn,On=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:ct,Rn=function(n){return!on(n)&&n!==On},ft=(fn=typeof Uint8Array<"u"&&ge(Uint8Array),function(n){return fn&&n instanceof fn}),mt=ee("HTMLFormElement"),qn=(Dn=Object.prototype.hasOwnProperty,function(n,t){return Dn.call(n,t)}),ht=ee("RegExp"),Pn=function(n,t){var o=Object.getOwnPropertyDescriptors(n),e={};Je(o,function(a,r){t(a,r,n)!==!1&&(e[r]=a)}),Object.defineProperties(n,e)};const E={isArray:Pe,isArrayBuffer:ut,isBuffer:function(n){return n!==null&&!on(n)&&n.constructor!==null&&!on(n.constructor)&&Xe(n.constructor.isBuffer)&&n.constructor.isBuffer(n)},isFormData:function(n){var t="[object FormData]";return n&&(typeof FormData=="function"&&n instanceof FormData||Oe.call(n)===t||Xe(n.toString)&&n.toString()===t)},isArrayBufferView:function(n){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&ut(n.buffer)},isString:Mt,isNumber:At,isBoolean:function(n){return n===!0||n===!1},isObject:_n,isPlainObject:je,isUndefined:on,isDate:Nt,isFile:yt,isBlob:yn,isRegExp:ht,isFunction:Xe,isStream:function(n){return _n(n)&&Xe(n.pipe)},isURLSearchParams:zn,isTypedArray:ft,isFileList:Ln,forEach:Je,merge:function n(){for(var t=Rn(this)&&this||{},o=t.caseless,e={},a=function(s,d){var m=o&&Tn(e,d)||d;je(e[m])&&je(s)?e[m]=n(e[m],s):je(s)?e[m]=n({},s):Pe(s)?e[m]=s.slice():e[m]=s},r=0,i=arguments.length;r<i;r++)arguments[r]&&Je(arguments[r],a);return e},extend:function(n,t,o){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=e.allOwnKeys;return Je(t,function(r,i){o&&Xe(r)?n[i]=$(r,o):n[i]=r},{allOwnKeys:a}),n},trim:function(n){return n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(n){return n.charCodeAt(0)===65279&&(n=n.slice(1)),n},inherits:function(n,t,o,e){n.prototype=Object.create(t.prototype,e),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:t.prototype}),o&&Object.assign(n.prototype,o)},toFlatObject:function(n,t,o,e){var a,r,i,s={};if(t=t||{},n==null)return t;do{for(r=(a=Object.getOwnPropertyNames(n)).length;r-- >0;)i=a[r],e&&!e(i,n,t)||s[i]||(t[i]=n[i],s[i]=!0);n=o!==!1&&ge(n)}while(n&&(!o||o(n,t))&&n!==Object.prototype);return t},kindOf:Ue,kindOfTest:ee,endsWith:function(n,t,o){n=String(n),(o===void 0||o>n.length)&&(o=n.length),o-=t.length;var e=n.indexOf(t,o);return e!==-1&&e===o},toArray:function(n){if(!n)return null;if(Pe(n))return n;var t=n.length;if(!At(t))return null;for(var o=new Array(t);t-- >0;)o[t]=n[t];return o},forEachEntry:function(n,t){for(var o,e=(n&&n[Symbol.iterator]).call(n);(o=e.next())&&!o.done;){var a=o.value;t.call(n,a[0],a[1])}},matchAll:function(n,t){for(var o,e=[];(o=n.exec(t))!==null;)e.push(o);return e},isHTMLForm:mt,hasOwnProperty:qn,hasOwnProp:qn,reduceDescriptors:Pn,freezeMethods:function(n){Pn(n,function(t,o){if(Xe(n)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;var e=n[o];Xe(e)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+o+"'")}))})},toObjectSet:function(n,t){var o={},e=function(a){a.forEach(function(r){o[r]=!0})};return Pe(n)?e(n):e(String(n).split(t)),o},toCamelCase:function(n){return n.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(t,o,e){return o.toUpperCase()+e})},noop:function(){},toFiniteNumber:function(n,t){return n=+n,Number.isFinite(n)?n:t},findKey:Tn,global:On,isContextDefined:Rn,toJSONObject:function(n){var t=new Array(10);return function o(e,a){if(_n(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[a]=e;var r=Pe(e)?[]:{};return Je(e,function(i,s){var d=o(i,a+1);!on(d)&&(r[s]=d)}),t[a]=void 0,r}}return e}(n,0)}};function $e(n,t,o,e,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",t&&(this.code=t),o&&(this.config=o),e&&(this.request=e),a&&(this.response=a)}E.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var mn=$e.prototype,bt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(n){bt[n]={value:n}}),Object.defineProperties($e,bt),Object.defineProperty(mn,"isAxiosError",{value:!0}),$e.from=function(n,t,o,e,a,r){var i=Object.create(mn);return E.toFlatObject(n,i,function(s){return s!==Error.prototype},function(s){return s!=="isAxiosError"}),$e.call(i,n.message,t,o,e,a),i.cause=n,i.name=n.name,r&&Object.assign(i,r),i};const ye=$e,jn=w(937);function hn(n){return hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hn(n)}function Mn(n){return E.isPlainObject(n)||E.isArray(n)}function We(n){return E.endsWith(n,"[]")?n.slice(0,-2):n}function gt(n,t,o){return n?n.concat(t).map(function(e,a){return e=We(e),!o&&a?"["+e+"]":e}).join(o?".":""):t}var Yt=E.toFlatObject(E,{},null,function(n){return/^is[A-Z]/.test(n)});const ln=function(n,t,o){if(!E.isObject(n))throw new TypeError("target must be an object");t=t||new(jn||FormData);var e,a=(o=E.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(Q,H){return!E.isUndefined(H[Q])})).metaTokens,r=o.visitor||b,i=o.dots,s=o.indexes,d=(o.Blob||typeof Blob<"u"&&Blob)&&(e=t)&&E.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator];if(!E.isFunction(r))throw new TypeError("visitor must be a function");function m(Q){if(Q===null)return"";if(E.isDate(Q))return Q.toISOString();if(!d&&E.isBlob(Q))throw new ye("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(Q)||E.isTypedArray(Q)?d&&typeof Blob=="function"?new Blob([Q]):Buffer.from(Q):Q}function b(Q,H,M){var X=Q;if(Q&&!M&&hn(Q)==="object"){if(E.endsWith(H,"{}"))H=a?H:H.slice(0,-2),Q=JSON.stringify(Q);else if(E.isArray(Q)&&function(te){return E.isArray(te)&&!te.some(Mn)}(Q)||E.isFileList(Q)||E.endsWith(H,"[]")&&(X=E.toArray(Q)))return H=We(H),X.forEach(function(te,Se){!E.isUndefined(te)&&te!==null&&t.append(s===!0?gt([H],Se,i):s===null?H:H+"[]",m(te))}),!1}return!!Mn(Q)||(t.append(gt(M,H,i),m(Q)),!1)}var j=[],U=Object.assign(Yt,{defaultVisitor:b,convertValue:m,isVisitable:Mn});if(!E.isObject(n))throw new TypeError("data must be an object");return function Q(H,M){if(!E.isUndefined(H)){if(j.indexOf(H)!==-1)throw Error("Circular reference detected in "+M.join("."));j.push(H),E.forEach(H,function(X,te){(!(E.isUndefined(X)||X===null)&&r.call(t,X,E.isString(te)?te.trim():te,M,U))===!0&&Q(X,M?M.concat(te):[te])}),j.pop()}}(n),t};function vt(n){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function xt(n,t){this._pairs=[],n&&ln(n,this,t)}var Et=xt.prototype;Et.append=function(n,t){this._pairs.push([n,t])},Et.toString=function(n){var t=n?function(o){return n.call(this,o,vt)}:vt;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};const wt=xt;function Ft(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ct(n,t,o){if(!t)return n;var e,a=o&&o.encode||Ft,r=o&&o.serialize;if(e=r?r(t,o):E.isURLSearchParams(t)?t.toString():new wt(t,o).toString(a)){var i=n.indexOf("#");i!==-1&&(n=n.slice(0,i)),n+=(n.indexOf("?")===-1?"?":"&")+e}return n}function sn(n){return sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sn(n)}function Ut(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(sn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(sn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),sn(a)==="symbol"?a:String(a)),e)}var a}var Wt=function(){function n(){(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,n),this.handlers=[]}var t,o;return t=n,o=[{key:"use",value:function(e,a,r){return this.handlers.push({fulfilled:e,rejected:a,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){E.forEach(this.handlers,function(a){a!==null&&e(a)})}}],o&&Ut(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const kt=Wt,Nn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ht=typeof URLSearchParams<"u"?URLSearchParams:wt,Qt=FormData;var Yn,Kt=(typeof navigator>"u"||(Yn=navigator.product)!=="ReactNative"&&Yn!=="NativeScript"&&Yn!=="NS")&&typeof window<"u"&&typeof document<"u",Vt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const Me={isBrowser:!0,classes:{URLSearchParams:Ht,FormData:Qt,Blob},isStandardBrowserEnv:Kt,isStandardBrowserWebWorkerEnv:Vt,protocols:["http","https","file","blob","url","data"]},Bt=function(n){function t(e,a,r,i){var s=e[i++],d=Number.isFinite(+s),m=i>=e.length;return s=!s&&E.isArray(r)?r.length:s,m?(E.hasOwnProp(r,s)?r[s]=[r[s],a]:r[s]=a,!d):(r[s]&&E.isObject(r[s])||(r[s]=[]),t(e,a,r[s],i)&&E.isArray(r[s])&&(r[s]=function(b){var j,U,Q={},H=Object.keys(b),M=H.length;for(j=0;j<M;j++)Q[U=H[j]]=b[U];return Q}(r[s])),!d)}if(E.isFormData(n)&&E.isFunction(n.entries)){var o={};return E.forEachEntry(n,function(e,a){t(function(r){return E.matchAll(/\w+|\[(\w*)]/g,r).map(function(i){return i[0]==="[]"?"":i[1]||i[0]})}(e),a,o,0)}),o}return null};var Zt={"Content-Type":void 0},bn={transitional:Nn,adapter:["xhr","http"],transformRequest:[function(n,t){var o,e=t.getContentType()||"",a=e.indexOf("application/json")>-1,r=E.isObject(n);if(r&&E.isHTMLForm(n)&&(n=new FormData(n)),E.isFormData(n))return a&&a?JSON.stringify(Bt(n)):n;if(E.isArrayBuffer(n)||E.isBuffer(n)||E.isStream(n)||E.isFile(n)||E.isBlob(n))return n;if(E.isArrayBufferView(n))return n.buffer;if(E.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();if(r){if(e.indexOf("application/x-www-form-urlencoded")>-1)return function(s,d){return ln(s,new Me.classes.URLSearchParams,Object.assign({visitor:function(m,b,j,U){return Me.isNode&&E.isBuffer(m)?(this.append(b,m.toString("base64")),!1):U.defaultVisitor.apply(this,arguments)}},d))}(n,this.formSerializer).toString();if((o=E.isFileList(n))||e.indexOf("multipart/form-data")>-1){var i=this.env&&this.env.FormData;return ln(o?{"files[]":n}:n,i&&new i,this.formSerializer)}}return r||a?(t.setContentType("application/json",!1),function(s,d,m){if(E.isString(s))try{return(0,JSON.parse)(s),E.trim(s)}catch(b){if(b.name!=="SyntaxError")throw b}return(0,JSON.stringify)(s)}(n)):n}],transformResponse:[function(n){var t=this.transitional||bn.transitional,o=t&&t.forcedJSONParsing,e=this.responseType==="json";if(n&&E.isString(n)&&(o&&!this.responseType||e)){var a=!(t&&t.silentJSONParsing)&&e;try{return JSON.parse(n)}catch(r){if(a)throw r.name==="SyntaxError"?ye.from(r,ye.ERR_BAD_RESPONSE,this,null,this.response):r}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Me.classes.FormData,Blob:Me.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(n){bn.headers[n]={}}),E.forEach(["post","put","patch"],function(n){bn.headers[n]=E.merge(Zt)});const Fn=bn;var Xt=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function dn(n){return dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dn(n)}function St(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,e=new Array(t);o<t;o++)e[o]=n[o];return e}function It(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(dn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(dn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),dn(a)==="symbol"?a:String(a)),e)}var a}var _t=Symbol("internals");function nn(n){return n&&String(n).trim().toLowerCase()}function Ze(n){return n===!1||n==null?n:E.isArray(n)?n.map(Ze):String(n)}function Un(n,t,o,e){return E.isFunction(e)?e.call(this,t,o):E.isString(t)?E.isString(e)?t.indexOf(e)!==-1:E.isRegExp(e)?e.test(t):void 0:void 0}var He=function(n,t){function o(i){(function(s,d){if(!(s instanceof d))throw new TypeError("Cannot call a class as a function")})(this,o),i&&this.set(i)}var e,a,r;return e=o,a=[{key:"set",value:function(i,s,d){var m=this;function b(te,Se,ke){var fe=nn(Se);if(!fe)throw new Error("header name must be a non-empty string");var rn=E.findKey(m,fe);(!rn||m[rn]===void 0||ke===!0||ke===void 0&&m[rn]!==!1)&&(m[rn||Se]=Ze(te))}var j,U,Q,H,M,X=function(te,Se){return E.forEach(te,function(ke,fe){return b(ke,fe,Se)})};return E.isPlainObject(i)||i instanceof this.constructor?X(i,s):E.isString(i)&&(i=i.trim())&&!/^[-_a-zA-Z]+$/.test(i.trim())?X((M={},(j=i)&&j.split(`
`).forEach(function(te){H=te.indexOf(":"),U=te.substring(0,H).trim().toLowerCase(),Q=te.substring(H+1).trim(),!U||M[U]&&Xt[U]||(U==="set-cookie"?M[U]?M[U].push(Q):M[U]=[Q]:M[U]=M[U]?M[U]+", "+Q:Q)}),M),s):i!=null&&b(s,i,d),this}},{key:"get",value:function(i,s){if(i=nn(i)){var d=E.findKey(this,i);if(d){var m=this[d];if(!s)return m;if(s===!0)return function(b){for(var j,U=Object.create(null),Q=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;j=Q.exec(b);)U[j[1]]=j[2];return U}(m);if(E.isFunction(s))return s.call(this,m,d);if(E.isRegExp(s))return s.exec(m);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(i,s){if(i=nn(i)){var d=E.findKey(this,i);return!(!d||s&&!Un(0,this[d],d,s))}return!1}},{key:"delete",value:function(i,s){var d=this,m=!1;function b(j){if(j=nn(j)){var U=E.findKey(d,j);!U||s&&!Un(0,d[U],U,s)||(delete d[U],m=!0)}}return E.isArray(i)?i.forEach(b):b(i),m}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(i){var s=this,d={};return E.forEach(this,function(m,b){var j=E.findKey(d,b);if(j)return s[j]=Ze(m),void delete s[b];var U=i?function(Q){return Q.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(H,M,X){return M.toUpperCase()+X})}(b):String(b).trim();U!==b&&delete s[b],s[U]=Ze(m),d[U]=!0}),this}},{key:"concat",value:function(){for(var i,s=arguments.length,d=new Array(s),m=0;m<s;m++)d[m]=arguments[m];return(i=this.constructor).concat.apply(i,[this].concat(d))}},{key:"toJSON",value:function(i){var s=Object.create(null);return E.forEach(this,function(d,m){d!=null&&d!==!1&&(s[m]=i&&E.isArray(d)?d.join(", "):d)}),s}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(i){var s,d,m=(d=2,function(b){if(Array.isArray(b))return b}(s=i)||function(b,j){var U=b==null?null:typeof Symbol<"u"&&b[Symbol.iterator]||b["@@iterator"];if(U!=null){var Q,H,M,X,te=[],Se=!0,ke=!1;try{if(M=(U=U.call(b)).next,j===0){if(Object(U)!==U)return;Se=!1}else for(;!(Se=(Q=M.call(U)).done)&&(te.push(Q.value),te.length!==j);Se=!0);}catch(fe){ke=!0,H=fe}finally{try{if(!Se&&U.return!=null&&(X=U.return(),Object(X)!==X))return}finally{if(ke)throw H}}return te}}(s,d)||function(b,j){if(b){if(typeof b=="string")return St(b,j);var U=Object.prototype.toString.call(b).slice(8,-1);return U==="Object"&&b.constructor&&(U=b.constructor.name),U==="Map"||U==="Set"?Array.from(b):U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U)?St(b,j):void 0}}(s,d)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return m[0]+": "+m[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],r=[{key:"from",value:function(i){return i instanceof this?i:new this(i)}},{key:"concat",value:function(i){for(var s=new this(i),d=arguments.length,m=new Array(d>1?d-1:0),b=1;b<d;b++)m[b-1]=arguments[b];return m.forEach(function(j){return s.set(j)}),s}},{key:"accessor",value:function(i){var s=(this[_t]=this[_t]={accessors:{}}).accessors,d=this.prototype;function m(b){var j=nn(b);s[j]||(function(U,Q){var H=E.toCamelCase(" "+Q);["get","set","has"].forEach(function(M){Object.defineProperty(U,M+H,{value:function(X,te,Se){return this[M].call(this,Q,X,te,Se)},configurable:!0})})}(d,b),s[j]=!0)}return E.isArray(i)?i.forEach(m):m(i),this}}],a&&It(e.prototype,a),r&&It(e,r),Object.defineProperty(e,"prototype",{writable:!1}),o}();He.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),E.freezeMethods(He.prototype),E.freezeMethods(He);const Qe=He;function tn(n,t){var o=this||Fn,e=t||o,a=Qe.from(e.headers),r=e.data;return E.forEach(n,function(i){r=i.call(o,r,a.normalize(),t?t.status:void 0)}),a.normalize(),r}function gn(n){return!(!n||!n.__CANCEL__)}function Lt(n,t,o){ye.call(this,n??"canceled",ye.ERR_CANCELED,t,o),this.name="CanceledError"}E.inherits(Lt,ye,{__CANCEL__:!0});const vn=Lt,Wn=Me.isStandardBrowserEnv?{write:function(n,t,o,e,a,r){var i=[];i.push(n+"="+encodeURIComponent(t)),E.isNumber(o)&&i.push("expires="+new Date(o).toGMTString()),E.isString(e)&&i.push("path="+e),E.isString(a)&&i.push("domain="+a),r===!0&&i.push("secure"),document.cookie=i.join("; ")},read:function(n){var t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function zt(n,t){return n&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(o,e){return e?o.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):o}(n,t):t}const Jt=Me.isStandardBrowserEnv?function(){var n,t=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function e(a){var r=a;return t&&(o.setAttribute("href",r),r=o.href),o.setAttribute("href",r),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:o.pathname.charAt(0)==="/"?o.pathname:"/"+o.pathname}}return n=e(window.location.href),function(a){var r=E.isString(a)?e(a):a;return r.protocol===n.protocol&&r.host===n.host}}():function(){return!0};function l(n,t){var o=0,e=function(a,r){a=a||10;var i,s=new Array(a),d=new Array(a),m=0,b=0;return r=r!==void 0?r:1e3,function(j){var U=Date.now(),Q=d[b];i||(i=U),s[m]=j,d[m]=U;for(var H=b,M=0;H!==m;)M+=s[H++],H%=a;if((m=(m+1)%a)===b&&(b=(b+1)%a),!(U-i<r)){var X=Q&&U-Q;return X?Math.round(1e3*M/X):void 0}}}(50,250);return function(a){var r=a.loaded,i=a.lengthComputable?a.total:void 0,s=r-o,d=e(s);o=r;var m={loaded:r,total:i,progress:i?r/i:void 0,bytes:s,rate:d||void 0,estimated:d&&i&&r<=i?(i-r)/d:void 0,event:a};m[t?"download":"upload"]=!0,n(m)}}var p={http:null,xhr:typeof XMLHttpRequest<"u"&&function(n){return new Promise(function(t,o){var e,a=n.data,r=Qe.from(n.headers).normalize(),i=n.responseType;function s(){n.cancelToken&&n.cancelToken.unsubscribe(e),n.signal&&n.signal.removeEventListener("abort",e)}E.isFormData(a)&&(Me.isStandardBrowserEnv||Me.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);var d=new XMLHttpRequest;if(n.auth){var m=n.auth.username||"",b=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";r.set("Authorization","Basic "+btoa(m+":"+b))}var j=zt(n.baseURL,n.url);function U(){if(d){var X=Qe.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders());(function(te,Se,ke){var fe=ke.config.validateStatus;ke.status&&fe&&!fe(ke.status)?Se(new ye("Request failed with status code "+ke.status,[ye.ERR_BAD_REQUEST,ye.ERR_BAD_RESPONSE][Math.floor(ke.status/100)-4],ke.config,ke.request,ke)):te(ke)})(function(te){t(te),s()},function(te){o(te),s()},{data:i&&i!=="text"&&i!=="json"?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:X,config:n,request:d}),d=null}}if(d.open(n.method.toUpperCase(),Ct(j,n.params,n.paramsSerializer),!0),d.timeout=n.timeout,"onloadend"in d?d.onloadend=U:d.onreadystatechange=function(){d&&d.readyState===4&&(d.status!==0||d.responseURL&&d.responseURL.indexOf("file:")===0)&&setTimeout(U)},d.onabort=function(){d&&(o(new ye("Request aborted",ye.ECONNABORTED,n,d)),d=null)},d.onerror=function(){o(new ye("Network Error",ye.ERR_NETWORK,n,d)),d=null},d.ontimeout=function(){var X=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded",te=n.transitional||Nn;n.timeoutErrorMessage&&(X=n.timeoutErrorMessage),o(new ye(X,te.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,n,d)),d=null},Me.isStandardBrowserEnv){var Q=(n.withCredentials||Jt(j))&&n.xsrfCookieName&&Wn.read(n.xsrfCookieName);Q&&r.set(n.xsrfHeaderName,Q)}a===void 0&&r.setContentType(null),"setRequestHeader"in d&&E.forEach(r.toJSON(),function(X,te){d.setRequestHeader(te,X)}),E.isUndefined(n.withCredentials)||(d.withCredentials=!!n.withCredentials),i&&i!=="json"&&(d.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&d.addEventListener("progress",l(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",l(n.onUploadProgress)),(n.cancelToken||n.signal)&&(e=function(X){d&&(o(!X||X.type?new vn(null,n,d):X),d.abort(),d=null)},n.cancelToken&&n.cancelToken.subscribe(e),n.signal&&(n.signal.aborted?e():n.signal.addEventListener("abort",e)));var H,M=(H=/^([-+\w]{1,25})(:?\/\/|:)/.exec(j))&&H[1]||"";M&&Me.protocols.indexOf(M)===-1?o(new ye("Unsupported protocol "+M+":",ye.ERR_BAD_REQUEST,n)):d.send(a||null)})}};E.forEach(p,function(n,t){if(n){try{Object.defineProperty(n,"name",{value:t})}catch{}Object.defineProperty(n,"adapterName",{value:t})}});function y(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new vn(null,n)}function f(n){return y(n),n.headers=Qe.from(n.headers),n.data=tn.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),function(t){for(var o,e,a=(t=E.isArray(t)?t:[t]).length,r=0;r<a&&(o=t[r],!(e=E.isString(o)?p[o.toLowerCase()]:o));r++);if(!e)throw e===!1?new ye("Adapter ".concat(o," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(E.hasOwnProp(p,o)?"Adapter '".concat(o,"' is not available in the build"):"Unknown adapter '".concat(o,"'"));if(!E.isFunction(e))throw new TypeError("adapter is not a function");return e}(n.adapter||Fn.adapter)(n).then(function(t){return y(n),t.data=tn.call(n,n.transformResponse,t),t.headers=Qe.from(t.headers),t},function(t){return gn(t)||(y(n),t&&t.response&&(t.response.data=tn.call(n,n.transformResponse,t.response),t.response.headers=Qe.from(t.response.headers))),Promise.reject(t)})}var A=function(n){return n instanceof Qe?n.toJSON():n};function g(n,t){t=t||{};var o={};function e(m,b,j){return E.isPlainObject(m)&&E.isPlainObject(b)?E.merge.call({caseless:j},m,b):E.isPlainObject(b)?E.merge({},b):E.isArray(b)?b.slice():b}function a(m,b,j){return E.isUndefined(b)?E.isUndefined(m)?void 0:e(void 0,m,j):e(m,b,j)}function r(m,b){if(!E.isUndefined(b))return e(void 0,b)}function i(m,b){return E.isUndefined(b)?E.isUndefined(m)?void 0:e(void 0,m):e(void 0,b)}function s(m,b,j){return j in t?e(m,b):j in n?e(void 0,m):void 0}var d={url:r,method:r,data:r,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:s,headers:function(m,b){return a(A(m),A(b),!0)}};return E.forEach(Object.keys(n).concat(Object.keys(t)),function(m){var b=d[m]||a,j=b(n[m],t[m],m);E.isUndefined(j)&&b!==s||(o[m]=j)}),o}function _(n){return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(n)}var D={};["object","boolean","number","function","string","symbol"].forEach(function(n,t){D[n]=function(o){return _(o)===n||"a"+(t<1?"n ":" ")+n}});var O={};D.transitional=function(n,t,o){function e(a,r){return"[Axios v1.2.3] Transitional option '"+a+"'"+r+(o?". "+o:"")}return function(a,r,i){if(n===!1)throw new ye(e(r," has been removed"+(t?" in "+t:"")),ye.ERR_DEPRECATED);return t&&!O[r]&&(O[r]=!0,console.warn(e(r," has been deprecated since v"+t+" and will be removed in the near future"))),!n||n(a,r,i)}};const R={assertOptions:function(n,t,o){if(_(n)!=="object")throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);for(var e=Object.keys(n),a=e.length;a-- >0;){var r=e[a],i=t[r];if(i){var s=n[r],d=s===void 0||i(s,r,n);if(d!==!0)throw new ye("option "+r+" must be "+d,ye.ERR_BAD_OPTION_VALUE)}else if(o!==!0)throw new ye("Unknown option "+r,ye.ERR_BAD_OPTION)}},validators:D};function V(n){return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(n)}function oe(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(V(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(V(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),V(a)==="symbol"?a:String(a)),e)}var a}var se=R.validators,ce=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.defaults=e,this.interceptors={request:new kt,response:new kt}}var t,o;return t=n,(o=[{key:"request",value:function(e,a){typeof e=="string"?(a=a||{}).url=e:a=e||{};var r,i=a=g(this.defaults,a),s=i.transitional,d=i.paramsSerializer,m=i.headers;s!==void 0&&R.assertOptions(s,{silentJSONParsing:se.transitional(se.boolean),forcedJSONParsing:se.transitional(se.boolean),clarifyTimeoutError:se.transitional(se.boolean)},!1),d!==void 0&&R.assertOptions(d,{encode:se.function,serialize:se.function},!0),a.method=(a.method||this.defaults.method||"get").toLowerCase(),(r=m&&E.merge(m.common,m[a.method]))&&E.forEach(["delete","get","head","post","put","patch","common"],function(fe){delete m[fe]}),a.headers=Qe.concat(r,m);var b=[],j=!0;this.interceptors.request.forEach(function(fe){typeof fe.runWhen=="function"&&fe.runWhen(a)===!1||(j=j&&fe.synchronous,b.unshift(fe.fulfilled,fe.rejected))});var U,Q=[];this.interceptors.response.forEach(function(fe){Q.push(fe.fulfilled,fe.rejected)});var H,M=0;if(!j){var X=[f.bind(this),void 0];for(X.unshift.apply(X,b),X.push.apply(X,Q),H=X.length,U=Promise.resolve(a);M<H;)U=U.then(X[M++],X[M++]);return U}H=b.length;var te=a;for(M=0;M<H;){var Se=b[M++],ke=b[M++];try{te=Se(te)}catch(fe){ke.call(this,fe);break}}try{U=f.call(this,te)}catch(fe){return Promise.reject(fe)}for(M=0,H=Q.length;M<H;)U=U.then(Q[M++],Q[M++]);return U}},{key:"getUri",value:function(e){return Ct(zt((e=g(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}])&&oe(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();E.forEach(["delete","get","head","options"],function(n){ce.prototype[n]=function(t,o){return this.request(g(o||{},{method:n,url:t,data:(o||{}).data}))}}),E.forEach(["post","put","patch"],function(n){function t(o){return function(e,a,r){return this.request(g(r||{},{method:n,headers:o?{"Content-Type":"multipart/form-data"}:{},url:e,data:a}))}}ce.prototype[n]=t(),ce.prototype[n+"Form"]=t(!0)});const he=ce;function me(n){return me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},me(n)}function Re(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(me(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(me(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),me(a)==="symbol"?a:String(a)),e)}var a}var pn=function(){function n(a){if(function(s,d){if(!(s instanceof d))throw new TypeError("Cannot call a class as a function")}(this,n),typeof a!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(s){r=s});var i=this;this.promise.then(function(s){if(i._listeners){for(var d=i._listeners.length;d-- >0;)i._listeners[d](s);i._listeners=null}}),this.promise.then=function(s){var d,m=new Promise(function(b){i.subscribe(b),d=b}).then(s);return m.cancel=function(){i.unsubscribe(d)},m},a(function(s,d,m){i.reason||(i.reason=new vn(s,d,m),r(i.reason))})}var t,o,e;return t=n,o=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(a){this.reason?a(this.reason):this._listeners?this._listeners.push(a):this._listeners=[a]}},{key:"unsubscribe",value:function(a){if(this._listeners){var r=this._listeners.indexOf(a);r!==-1&&this._listeners.splice(r,1)}}}],e=[{key:"source",value:function(){var a;return{token:new n(function(r){a=r}),cancel:a}}}],o&&Re(t.prototype,o),e&&Re(t,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Hn=pn;function Tt(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,e=new Array(t);o<t;o++)e[o]=n[o];return e}var cn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(cn).forEach(function(n){var t,o,e=(o=2,function(i){if(Array.isArray(i))return i}(t=n)||function(i,s){var d=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(d!=null){var m,b,j,U,Q=[],H=!0,M=!1;try{if(j=(d=d.call(i)).next,s===0){if(Object(d)!==d)return;H=!1}else for(;!(H=(m=j.call(d)).done)&&(Q.push(m.value),Q.length!==s);H=!0);}catch(X){M=!0,b=X}finally{try{if(!H&&d.return!=null&&(U=d.return(),Object(U)!==U))return}finally{if(M)throw b}}return Q}}(t,o)||function(i,s){if(i){if(typeof i=="string")return Tt(i,s);var d=Object.prototype.toString.call(i).slice(8,-1);return d==="Object"&&i.constructor&&(d=i.constructor.name),d==="Map"||d==="Set"?Array.from(i):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?Tt(i,s):void 0}}(t,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),a=e[0],r=e[1];cn[r]=a});const ra=cn;var Ce=function n(t){var o=new he(t),e=$(he.prototype.request,o);return E.extend(e,he.prototype,o,{allOwnKeys:!0}),E.extend(e,o,null,{allOwnKeys:!0}),e.create=function(a){return n(g(t,a))},e}(Fn);Ce.Axios=he,Ce.CanceledError=vn,Ce.CancelToken=Hn,Ce.isCancel=gn,Ce.VERSION="1.2.3",Ce.toFormData=ln,Ce.AxiosError=ye,Ce.Cancel=Ce.CanceledError,Ce.all=function(n){return Promise.all(n)},Ce.spread=function(n){return function(t){return n.apply(null,t)}},Ce.isAxiosError=function(n){return E.isObject(n)&&n.isAxiosError===!0},Ce.mergeConfig=g,Ce.AxiosHeaders=Qe,Ce.formToJSON=function(n){return Bt(E.isHTMLForm(n)?new FormData(n):n)},Ce.HttpStatusCode=ra,Ce.default=Ce;const Dt=Ce,Ot={send:function(n){Dt.post(n.url,n.data).then(function(t){var o=t.data;o&&o.code===0?n.success&&n.success(o):n.error&&n.error(o&&o.msg)}).catch(function(t){console.error(t),n.error&&n.error()})},read:function(n){Dt.get(n.url).then(function(t){var o=t.data;o&&o.code===0?n.success&&n.success(o.data.map(function(e){return{time:e[0],type:e[1],color:e[2],author:e[3],text:e[4]}})):n.error&&n.error(o&&o.msg)}).catch(function(t){console.error(t),n.error&&n.error()})}};function $t(n){return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(n)}function ka(n){var t=this;this.lang=n,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(o){return o=o.toLowerCase(),xn[t.lang]&&xn[t.lang][o]?xn[t.lang][o]:xn[t.fallbackLang]&&xn[t.fallbackLang][o]?xn[t.fallbackLang][o]:Gt[o]?Gt[o]:o}}var Gt={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},xn={en:Gt,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Ba=w(730),Sa=w.n(Ba),Ia=w(74),_a=w.n(Ia),La=w(437),za=w.n(La),Ta=w(644),Da=w.n(Ta),Oa=w(324),Ra=w.n(Oa),qa=w(574),Pa=w.n(qa),ja=w(300),Ma=w.n(ja),Na=w(934),Ya=w.n(Na),Fa=w(428),Ua=w.n(Fa),Wa=w(807),Ha=w.n(Wa),Qa=w(338),Ka=w.n(Qa),Va=w(254),Za=w.n(Va),Xa=w(965),Ja=w.n(Xa),$a=w(113),Ga=w.n($a),er=w(251),nr=w.n(er),tr=w(410),ar=w.n(tr),rr=w(182),or=w.n(rr),ir=w(193),lr=w.n(ir);const Ke={play:Sa(),pause:_a(),volumeUp:za(),volumeDown:Da(),volumeOff:Ra(),full:Pa(),fullWeb:Ma(),setting:Ya(),right:Ua(),comment:Ha(),commentOff:Ka(),send:Za(),pallette:Ja(),camera:Ga(),subtitle:ar(),loading:or(),airplay:nr(),chromecast:lr()};var sr=w(916),dr=w.n(sr);function Qn(n){return Qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qn(n)}function oa(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Qn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Qn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Qn(a)==="symbol"?a:String(a)),e)}var a}var pr=function(){function n(a){(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=a.container,this.options=a.options,this.index=a.index,this.tran=a.tran,this.init()}var t,o,e;return t=n,e=[{key:"NewNotice",value:function(a,r,i){var s=document.createElement("div");return s.classList.add("dplayer-notice"),s.style.opacity=r,s.innerText=a,i&&(s.id="dplayer-notice-".concat(i)),s}}],(o=[{key:"init",value:function(){this.container.innerHTML=dr()({options:this.options,index:this.index,tran:this.tran,icons:Ke,mobile:S.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!S.isSafari||S.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&oa(t.prototype,o),e&&oa(t,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();const ia=pr;function En(n){return En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},En(n)}function cr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(En(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(En(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),En(a)==="symbol"?a:String(a)),e)}var a}var ur=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.options=e,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var t,o;return t=n,o=[{key:"load",value:function(){var e,a=this;e=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var r=(this.options.api.addition||[]).slice(0);r.push(e),this.events&&this.events.trigger("danmaku_load_start",r),this._readAllEndpoints(r,function(i){a.dan=[].concat.apply([],i).sort(function(s,d){return s.time-d.time}),window.requestAnimationFrame(function(){a.frame()}),a.options.callback(),a.events&&a.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(e){this.options.api=e,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(e,a){for(var r=this,i=[],s=0,d=function(b){r.options.apiBackend.read({url:e[b],success:function(j){i[b]=j,++s===e.length&&a(i)},error:function(j){r.options.error(j||r.options.tran("danmaku-failed")),i[b]=[],++s===e.length&&a(i)}})},m=0;m<e.length;++m)d(m)}},{key:"send",value:function(e,a){var r=this,i={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:e.text,color:e.color,type:e.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:i,success:a,error:function(d){r.options.error(d||r.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,i),this.danIndex++;var s={text:this.htmlEncode(i.text),color:i.color,type:i.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(s),this.events&&this.events.trigger("danmaku_send",i)}},{key:"frame",value:function(){var e=this;if(this.dan.length&&!this.paused&&this.showing){for(var a=this.dan[this.danIndex],r=[];a&&this.options.time()>parseFloat(a.time);)r.push(a),a=this.dan[++this.danIndex];this.draw(r)}window.requestAnimationFrame(function(){e.frame()})}},{key:"opacity",value:function(e){if(e!==void 0){for(var a=this.container.getElementsByClassName("dplayer-danmaku-item"),r=0;r<a.length;r++)a[r].style.opacity=e;this._opacity=e,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(e){var a=this;if(this.showing){var r=this.options.height,i=this.container.offsetWidth,s=this.container.offsetHeight,d=parseInt(s/r),m=function(M){var X=M.offsetWidth||parseInt(M.style.width),te=M.getBoundingClientRect().right||a.container.getBoundingClientRect().right+X;return a.container.getBoundingClientRect().right-te},b=function(M){return(i+M)/5},j=function(M,X,te){for(var Se=i/b(te),ke=function(un){var Cn=a.danTunnel[X][un+""];if(!Cn||!Cn.length)return a.danTunnel[X][un+""]=[M],M.addEventListener("animationend",function(){a.danTunnel[X][un+""].splice(0,1)}),{v:un%d};if(X!=="right")return"continue";for(var dt=0;dt<Cn.length;dt++){var ua=m(Cn[dt])-10;if(ua<=i-Se*b(parseInt(Cn[dt].style.width))||ua<=0)break;if(dt===Cn.length-1)return a.danTunnel[X][un+""].push(M),M.addEventListener("animationend",function(){a.danTunnel[X][un+""].splice(0,1)}),{v:un%d}}},fe=0;a.unlimited||fe<d;fe++){var rn=ke(fe);if(rn!=="continue"&&En(rn)==="object")return rn.v}return-1};Object.prototype.toString.call(e)!=="[object Array]"&&(e=[e]);for(var U=document.createDocumentFragment(),Q=function(){e[H].type=S.number2Type(e[H].type),e[H].color||(e[H].color=16777215);var M=document.createElement("div");M.classList.add("dplayer-danmaku-item"),M.classList.add("dplayer-danmaku-".concat(e[H].type)),e[H].border?M.innerHTML='<span style="border:'.concat(e[H].border,'">').concat(e[H].text,"</span>"):M.innerHTML=e[H].text,M.style.opacity=a._opacity,M.style.color=S.number2Color(e[H].color),M.addEventListener("animationend",function(){a.container.removeChild(M)});var X,te=a._measure(e[H].text);switch(e[H].type){case"right":(X=j(M,e[H].type,te))>=0&&(M.style.width=te+1+"px",M.style.top=r*X+"px",M.style.transform="translateX(-".concat(i,"px)"));break;case"top":(X=j(M,e[H].type))>=0&&(M.style.top=r*X+"px");break;case"bottom":(X=j(M,e[H].type))>=0&&(M.style.bottom=r*X+"px");break;default:console.error("Can't handled danmaku type: ".concat(e[H].type))}X>=0&&(M.classList.add("dplayer-danmaku-move"),M.style.animationDuration=a._danAnimation(e[H].type),U.appendChild(M))},H=0;H<e.length;H++)Q();return this.container.appendChild(U),U}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(e){if(!this.context){var a=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=a.getPropertyValue("font")}return this.context.measureText(e).width}},{key:"seek",value:function(){this.clear();for(var e=0;e<this.dan.length;e++){if(this.dan[e].time>=this.options.time()){this.danIndex=e;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var e=this.container.offsetWidth,a=this.container.getElementsByClassName("dplayer-danmaku-item"),r=0;r<a.length;r++)a[r].style.transform="translateX(-".concat(e,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(e){this.unlimited=e}},{key:"speed",value:function(e){this.options.api.speedRate=e}},{key:"_danAnimation",value:function(e){var a=this.options.api.speedRate||1,r=!!this.player.fullScreen.isFullScreen();return{top:"".concat((r?6:4)/a,"s"),right:"".concat((r?8:5)/a,"s"),bottom:"".concat((r?6:4)/a,"s")}[e]}}],o&&cr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Ar=ur;function Kn(n){return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kn(n)}function yr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Kn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Kn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Kn(a)==="symbol"?a:String(a)),e)}var a}const fr=function(){function n(){(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,n),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var t,o;return t=n,(o=[{key:"on",value:function(e,a){this.type(e)&&typeof a=="function"&&(this.events[e]||(this.events[e]=[]),this.events[e].push(a))}},{key:"trigger",value:function(e,a){if(this.events[e]&&this.events[e].length)for(var r=0;r<this.events[e].length;r++)this.events[e][r](a)}},{key:"type",value:function(e){return this.playerEvents.indexOf(e)!==-1?"player":this.videoEvents.indexOf(e)!==-1?"video":(console.error("Unknown event name: ".concat(e)),null)}}])&&yr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();function Vn(n){return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(n)}function mr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Vn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Vn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Vn(a)==="symbol"?a:String(a)),e)}var a}var hr=function(){function n(e){var a=this;(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){a.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){a.player.resize(),S.setScrollPosition(a.lastScrollPosition)}),this.fullscreenchange=function(){a.player.resize(),a.isFullScreen("browser")?a.player.events.trigger("fullscreen"):(S.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var r=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;r&&r!==a.player.container||(a.player.resize(),r?a.player.events.trigger("fullscreen"):(S.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var t,o;return t=n,o=[{key:"isFullScreen",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(e){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",a=e==="browser"?"web":"browser",r=this.isFullScreen(a);switch(r||(this.lastScrollPosition=S.getScrollPosition()),e){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}r&&this.cancel(a)}},{key:"cancel",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(e){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(e)?this.cancel(e):this.request(e)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],o&&mr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const br=hr;function Zn(n){return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(n)}function gr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Zn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Zn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Zn(a)==="symbol"?a:String(a)),e)}var a}var vr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:e.options.hasOwnProperty("volume")?e.options.volume:.7,unlimited:(e.options.danmaku&&e.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var t,o;return t=n,(o=[{key:"init",value:function(){for(var e in this.storageName){var a=this.storageName[e];this.data[e]=parseFloat(S.storage.get(a)||this.default[e])}}},{key:"get",value:function(e){return this.data[e]}},{key:"set",value:function(e,a){this.data[e]=a,S.storage.set(this.storageName[e],a)}}])&&gr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const xr=vr;function Xn(n){return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(n)}function Er(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Xn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Xn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Xn(a)==="symbol"?a:String(a)),e)}var a}var wr=function(){function n(e,a,r,i){(function(s,d){if(!(s instanceof d))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e,this.video=a,this.options=r,this.events=i,this.init()}var t,o;return t=n,o=[{key:"init",value:function(){var e=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var a=this.video.textTracks[0];a.oncuechange=function(){var r=a.activeCues[a.activeCues.length-1];if(e.container.innerHTML="",r){var i=document.createElement("div");i.appendChild(r.getCueAsHTML());var s=i.innerHTML.split(/\r?\n/).map(function(d){return"<p>".concat(d,"</p>")}).join("");e.container.innerHTML=s}e.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],o&&Er(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Cr=wr;function Jn(n){return Jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jn(n)}function kr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Jn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Jn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Jn(a)==="symbol"?a:String(a)),e)}var a}var Br=function(){function n(e){var a=this;(function(d,m){if(!(d instanceof m))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){a.adaptiveHeight(),a.show()});for(var r=this.player.template.subtitlesItem.length-1,i=function(d){a.player.template.subtitlesItem[d].addEventListener("click",function(){a.hide(),a.player.options.subtitle.index!==d&&(a.player.template.subtitle.innerHTML="<p></p>",a.player.template.subtrack.src=a.player.template.subtitlesItem[d].dataset.subtitle,a.player.options.subtitle.index=d,a.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&a.subContainerShow())})},s=0;s<r;s++)i(s);this.player.template.subtitlesItem[r].addEventListener("click",function(){a.hide(),a.player.options.subtitle.index!==r&&(a.player.template.subtitle.innerHTML="<p></p>",a.player.template.subtrack.src="",a.player.options.subtitle.index=r,a.subContainerHide())})}var t,o;return t=n,(o=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var e=30*this.player.template.subtitlesItem.length+14,a=.8*this.player.template.videoWrap.offsetHeight;e>=a-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=a-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=a-50+"px")}}])&&kr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Sr=Br;function $n(n){return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(n)}function Ir(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if($n(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if($n(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),$n(a)==="symbol"?a:String(a)),e)}var a}var _r=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.elements={},this.elements.volume=e.volumeBar,this.elements.played=e.playedBar,this.elements.loaded=e.loadedBar,this.elements.danmaku=e.danmakuOpacityBar}var t,o;return t=n,(o=[{key:"set",value:function(e,a,r){a=Math.max(a,0),a=Math.min(a,1),this.elements[e].style[r]=100*a+"%"}},{key:"get",value:function(e){return parseFloat(this.elements[e].style.width)/100}}])&&Ir(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Lr=_r;function Gn(n){return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gn(n)}function zr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(Gn(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(Gn(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),Gn(a)==="symbol"?a:String(a)),e)}var a}var Tr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)},this.types=["loading","info","fps"],this.init()}var t,o;return t=n,(o=[{key:"init",value:function(){var e=this;this.types.map(function(a){return a!=="fps"&&e["init".concat(a,"Checker")](),a})}},{key:"initloadingChecker",value:function(){var e=this,a=0,r=0,i=!1;this.loadingChecker=setInterval(function(){e.enableloadingChecker&&(r=e.player.video.currentTime,i||r!==a||e.player.video.paused||(e.player.container.classList.add("dplayer-loading"),i=!0),i&&r>a&&!e.player.video.paused&&(e.player.container.classList.remove("dplayer-loading"),i=!1),a=r)},100)}},{key:"initfpsChecker",value:function(){var e=this;window.requestAnimationFrame(function(){if(e.enablefpsChecker)if(e.initfpsChecker(),e.fpsStart){e.fpsIndex++;var a=new Date;a-e.fpsStart>1e3&&(e.player.infoPanel.fps(e.fpsIndex/(a-e.fpsStart)*1e3),e.fpsStart=new Date,e.fpsIndex=0)}else e.fpsStart=new Date,e.fpsIndex=0;else e.fpsStart=0,e.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var e=this;this.infoChecker=setInterval(function(){e.enableinfoChecker&&e.player.infoPanel.update()},1e3)}},{key:"enable",value:function(e){this["enable".concat(e,"Checker")]=!0,e==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(e){this["enable".concat(e,"Checker")]=!1}},{key:"destroy",value:function(){var e=this;this.types.map(function(a){return e["enable".concat(a,"Checker")]=!1,e["".concat(a,"Checker")]&&clearInterval(e["".concat(a,"Checker")]),a})}}])&&zr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Dr=Tr;function et(n){return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(n)}function Or(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(et(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(et(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),et(a)==="symbol"?a:String(a)),e)}var a}const Rr=function(){function n(e){var a=this;(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e,this.container.addEventListener("animationend",function(){a.container.classList.remove("dplayer-bezel-transition")})}var t,o;return t=n,(o=[{key:"switch",value:function(e){this.container.innerHTML=e,this.container.classList.add("dplayer-bezel-transition")}}])&&Or(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();function nt(n){return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(n)}function qr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(nt(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(nt(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),nt(a)==="symbol"?a:String(a)),e)}var a}var Pr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e.container,this.barWidth=e.barWidth,this.container.style.backgroundImage="url('".concat(e.url,"')"),this.events=e.events}var t,o;return t=n,(o=[{key:"resize",value:function(e,a,r){this.container.style.width="".concat(e,"px"),this.container.style.height="".concat(a,"px"),this.container.style.top="".concat(2-a,"px"),this.barWidth=r}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(e){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(e/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(e-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&qr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const jr=Pr;function tt(n){return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(n)}function Mr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(tt(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(tt(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),tt(a)==="symbol"?a:String(a)),e)}var a}var an,la=!0,ea=!1,Nr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.autoHideTimer=0,S.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),S.isMobile||this.initVolumeButton()}var t,o;return t=n,(o=[{key:"initPlayButton",value:function(){var e=this;this.player.template.playButton.addEventListener("click",function(){e.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){e.player.toggle()}),S.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){e.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){e.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){e.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){e.player.toggle()}))}},{key:"initHighlights",value:function(){var e=this;this.player.on("durationchange",function(){if(e.player.video.duration!==1&&e.player.video.duration!==1/0&&e.player.options.highlight){var a=e.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(a,0).forEach(function(s){e.player.template.playedBarWrap.removeChild(s)});for(var r=0;r<e.player.options.highlight.length;r++)if(e.player.options.highlight[r].text&&e.player.options.highlight[r].time){var i=document.createElement("div");i.classList.add("dplayer-highlight"),i.style.left=e.player.options.highlight[r].time/e.player.video.duration*100+"%",i.innerHTML='<span class="dplayer-highlight-text">'+e.player.options.highlight[r].text+"</span>",e.player.template.playedBarWrap.insertBefore(i,e.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var e=this;this.player.options.video.thumbnails&&(this.thumbnails=new jr({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){e.thumbnails.resize(160,e.player.video.videoHeight/e.player.video.videoWidth*160,e.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var e=this,a=function(i){var s=((i.clientX||i.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;s=Math.max(s,0),s=Math.min(s,1),e.player.bar.set("played",s,"width"),e.player.template.ptime.innerHTML=S.secondToTime(s*e.player.video.duration)},r=function i(s){document.removeEventListener(S.nameMap.dragEnd,i),document.removeEventListener(S.nameMap.dragMove,a);var d=((s.clientX||s.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;d=Math.max(d,0),d=Math.min(d,1),e.player.bar.set("played",d,"width"),e.player.seek(e.player.bar.get("played")*e.player.video.duration),e.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(S.nameMap.dragStart,function(){e.player.timer.disable("progress"),document.addEventListener(S.nameMap.dragMove,a),document.addEventListener(S.nameMap.dragEnd,r)}),this.player.template.playedBarWrap.addEventListener(S.nameMap.dragMove,function(i){if(e.player.video.duration){var s=e.player.template.playedBarWrap.getBoundingClientRect().left,d=(i.clientX||i.changedTouches[0].clientX)-s;if(d<0||d>e.player.template.playedBarWrap.offsetWidth)return;var m=e.player.video.duration*(d/e.player.template.playedBarWrap.offsetWidth);S.isMobile&&e.thumbnails&&e.thumbnails.show(),e.thumbnails&&e.thumbnails.move(d),e.player.template.playedBarTime.style.left="".concat(d-(m>=3600?25:20),"px"),e.player.template.playedBarTime.innerText=S.secondToTime(m),e.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(S.nameMap.dragEnd,function(){S.isMobile&&e.thumbnails&&e.thumbnails.hide()}),S.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.show(),e.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.hide(),e.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var e=this;this.player.template.browserFullButton.addEventListener("click",function(){e.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){e.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var e=this,a=function(i){var s=i||window.event,d=((s.clientX||s.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(d)},r=function i(){document.removeEventListener(S.nameMap.dragEnd,i),document.removeEventListener(S.nameMap.dragMove,a),e.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(i){var s=i||window.event,d=((s.clientX||s.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(d)}),this.player.template.volumeBarWrapWrap.addEventListener(S.nameMap.dragStart,function(){document.addEventListener(S.nameMap.dragMove,a),document.addEventListener(S.nameMap.dragEnd,r),e.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){e.player.video.muted?(e.player.video.muted=!1,e.player.switchVolumeIcon(),e.player.bar.set("volume",e.player.volume(),"width")):(e.player.video.muted=!0,e.player.template.volumeIcon.innerHTML=Ke.volumeOff,e.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var e=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(a){a.target.classList.contains("dplayer-quality-item")&&e.player.switchQuality(a.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var e=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var a,r=document.createElement("canvas");r.width=e.player.video.videoWidth,r.height=e.player.video.videoHeight,r.getContext("2d").drawImage(e.player.video,0,0,r.width,r.height),r.toBlob(function(i){a=URL.createObjectURL(i);var s=document.createElement("a");s.href=a,s.download="DPlayer.png",s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(a),e.player.events.trigger("screenshot",a)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(e){e.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var e=window.document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(e),window.__onGCastApiAvailable=function(a){if(a){var r=new(an=window.chrome.cast).SessionRequest(an.media.DEFAULT_MEDIA_RECEIVER_APP_ID),i=new an.ApiConfig(r,function(){},function(s){s===an.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",s)});an.initialize(i,function(){})}}}},{key:"initChromecastButton",value:function(){var e=this;if(this.player.options.chromecast){la&&(la=!1,this.initChromecast());var a=function(i,s){e.currentMedia=s},r=function(i){console.error("Error launching media",i)};this.player.template.chromecastButton.addEventListener("click",function(){ea?(ea=!1,e.currentMedia.stop(),e.session.stop(),e.initChromecast()):(ea=!0,an.requestSession(function(i){var s,d,m;e.session=i,s=e.player.options.video.url,d=new an.media.MediaInfo(s),m=new an.media.LoadRequest(d),e.session?e.session.loadMedia(m,a.bind(e,"loadMedia"),r).play():window.open(s)},function(i){i.code==="cancel"?e.session=void 0:console.error("Error selecting a cast device",i)}))})}}},{key:"initSubtitleButton",value:function(){var e=this;this.player.events.on("subtitle_show",function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("hide-subs"),e.player.template.subtitleButtonInner.style.opacity="",e.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("show-subs"),e.player.template.subtitleButtonInner.style.opacity="0.4",e.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){e.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var e=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!e.player.video.played.length||e.player.paused||e.disableAutoHide||e.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){S.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Mr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Yr=Nr;function at(n){return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(n)}function Fr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(at(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(at(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),at(a)==="symbol"?a:String(a)),e)}var a}var Ur=function(){function n(e){var a=this;(function(m,b){if(!(m instanceof b))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.settingButton.addEventListener("click",function(){a.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){a.player.template.loopToggle.checked=!a.player.template.loopToggle.checked,a.player.template.loopToggle.checked?a.loop=!0:a.loop=!1,a.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){a.player.template.showDanmakuToggle.checked=!a.player.template.showDanmakuToggle.checked,a.player.template.showDanmakuToggle.checked?(a.showDanmaku=!0,a.player.danmaku.show()):(a.showDanmaku=!1,a.player.danmaku.hide()),a.player.user.set("danmaku",a.showDanmaku?1:0),a.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){a.player.template.unlimitDanmakuToggle.checked=!a.player.template.unlimitDanmakuToggle.checked,a.player.template.unlimitDanmakuToggle.checked?(a.unlimitDanmaku=!0,a.player.danmaku.unlimit(!0)):(a.unlimitDanmaku=!1,a.player.danmaku.unlimit(!1)),a.player.user.set("unlimited",a.unlimitDanmaku?1:0),a.hide()}),this.player.template.speed.addEventListener("click",function(){a.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),a.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var r=function(m){a.player.template.speedItem[m].addEventListener("click",function(){a.player.speed(a.player.template.speedItem[m].dataset.speed),a.hide()})},i=0;i<this.player.template.speedItem.length;i++)r(i);if(this.player.danmaku){this.player.on("danmaku_opacity",function(m){a.player.bar.set("danmaku",m,"width"),a.player.user.set("opacity",m)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var s=function(m){var b=m||window.event,j=((b.clientX||b.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap))/130;j=Math.max(j,0),j=Math.min(j,1),a.player.danmaku.opacity(j)},d=function m(){document.removeEventListener(S.nameMap.dragEnd,m),document.removeEventListener(S.nameMap.dragMove,s),a.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(m){var b=m||window.event,j=((b.clientX||b.changedTouches[0].clientX)-S.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap))/130;j=Math.max(j,0),j=Math.min(j,1),a.player.danmaku.opacity(j)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(S.nameMap.dragStart,function(){document.addEventListener(S.nameMap.dragMove,s),document.addEventListener(S.nameMap.dragEnd,d),a.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var t,o;return t=n,(o=[{key:"hide",value:function(){var e=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){e.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),e.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Fr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Wr=Ur;function rt(n){return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(n)}function Hr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(rt(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(rt(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),rt(a)==="symbol"?a:String(a)),e)}var a}var Qr=function(){function n(e){var a=this;(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.commentButton.addEventListener("click",function(){a.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){a.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(a.player.template.commentColorSettingBox.querySelector("input:checked+span")){var r=a.player.template.commentColorSettingBox.querySelector("input:checked").value;a.player.template.commentSettingFill.style.fill=r,a.player.template.commentInput.style.color=r,a.player.template.commentSendFill.style.fill=r}}),this.player.template.commentInput.addEventListener("click",function(){a.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(r){(r||window.event).keyCode===13&&a.send()}),this.player.template.commentSendButton.addEventListener("click",function(){a.send()})}var t,o;return t=n,(o=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var e=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:S.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){e.player.template.commentInput.value="",e.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Hr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Kr=Qr;function ot(n){return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(n)}function Vr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(ot(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(ot(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),ot(a)==="symbol"?a:String(a)),e)}var a}var Zr=function(){function n(e){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var t,o;return t=n,(o=[{key:"doHotKey",value:function(e){if(this.player.focus){var a=document.activeElement.tagName.toUpperCase(),r=document.activeElement.getAttribute("contenteditable");if(a!=="INPUT"&&a!=="TEXTAREA"&&r!==""&&r!=="true"){var i,s=e||window.event;switch(s.keyCode){case 32:s.preventDefault(),this.player.toggle();break;case 37:if(s.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(s.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:s.preventDefault(),i=this.player.volume()+.1,this.player.volume(i);break;case 40:s.preventDefault(),i=this.player.volume()-.1,this.player.volume(i)}}}}},{key:"cancelFullScreen",value:function(e){(e||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Vr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Xr=Zr;function it(n){return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(n)}function Jr(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(it(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(it(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),it(a)==="symbol"?a:String(a)),e)}var a}var $r=function(){function n(e){var a=this;(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.player=e,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(r,i){a.player.options.contextmenu[i].click&&r.addEventListener("click",function(){a.player.options.contextmenu[i].click(a.player),a.hide()})}),this.contextmenuHandler=function(r){if(a.shown)a.hide();else{var i=r||window.event;i.preventDefault();var s=a.player.container.getBoundingClientRect();a.show(i.clientX-s.left,i.clientY-s.top),a.player.template.mask.addEventListener("click",function(){a.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var t,o;return t=n,(o=[{key:"show",value:function(e,a){this.player.template.menu.classList.add("dplayer-menu-show");var r=this.player.container.getBoundingClientRect();e+this.player.template.menu.offsetWidth>=r.width?(this.player.template.menu.style.right=r.width-e+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=e+"px",this.player.template.menu.style.right="initial"),a+this.player.template.menu.offsetHeight>=r.height?(this.player.template.menu.style.bottom=r.height-a+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=a+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&Jr(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const Gr=$r;function lt(n){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lt(n)}function eo(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,(a=function(r,i){if(lt(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var d=s.call(r,"string");if(lt(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(e.key),lt(a)==="symbol"?a:String(a)),e)}var a}var no=function(){function n(e){var a=this;(function(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")})(this,n),this.container=e.template.infoPanel,this.template=e.template,this.video=e.video,this.player=e,this.template.infoPanelClose.addEventListener("click",function(){a.hide()})}var t,o;return t=n,(o=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(e){this.template.infoFPS.innerHTML="".concat(e.toFixed(1))}}])&&eo(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();const to=no;var ao=w(568),ro=w.n(ao);function st(n){return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},st(n)}function sa(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),o.push.apply(o,e)}return o}function oo(n,t,o){return(t=pa(t))in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}function da(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,pa(e.key),e)}}function pa(n){var t=function(o,e){if(st(o)!=="object"||o===null)return o;var a=o[Symbol.toPrimitive];if(a!==void 0){var r=a.call(o,"string");if(st(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return st(t)==="symbol"?t:String(t)}var ca=0,wn=[],io=function(){function n(a){var r=this;(function(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")})(this,n),this.options=function(i){var s={container:i.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Ot,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var d in s)s.hasOwnProperty(d)&&!i.hasOwnProperty(d)&&(i[d]=s[d]);return i.video&&!i.video.type&&(i.video.type="auto"),$t(i.danmaku)==="object"&&i.danmaku&&!i.danmaku.user&&(i.danmaku.user="DIYgod"),i.subtitle&&(!i.subtitle.type&&(i.subtitle.type="webvtt"),!i.subtitle.fontSize&&(i.subtitle.fontSize="20px"),!i.subtitle.bottom&&(i.subtitle.bottom="40px"),!i.subtitle.color&&(i.subtitle.color="#fff")),i.video.quality&&(i.video.url=i.video.quality[i.video.defaultQuality].url),i.lang&&(i.lang=i.lang.toLowerCase()),i.contextmenu=i.contextmenu.concat([{key:"video-info",click:function(m){m.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),i}(function(i){for(var s=1;s<arguments.length;s++){var d=arguments[s]!=null?arguments[s]:{};s%2?sa(Object(d),!0).forEach(function(m){oo(i,m,d[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(d)):sa(Object(d)).forEach(function(m){Object.defineProperty(i,m,Object.getOwnPropertyDescriptor(d,m))})}return i}({preload:a.video.type==="webtorrent"?"none":"metadata"},a)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new ka(this.options.lang).tran,this.events=new fr,this.user=new xr(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),S.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(i){return i.lang===r.options.subtitle.defaultSubtitle||i.name===r.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(i){return i.lang===r.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new ia({container:this.container,options:this.options,index:ca,tran:this.tran}),this.video=this.template.video,this.bar=new Lr(this.template),this.bezel=new Rr(this.template.bezel),this.fullScreen=new br(this),this.controller=new Yr(this),this.options.danmaku&&(this.danmaku=new Ar({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){r.template.danmakuLoading.style.display="none",r.options.autoplay&&r.play()},0)},error:function(i){r.notice(i)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return r.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(i){return r.tran(i)}}),this.comment=new Kr(this)),this.setting=new Wr(this),this.plugins={},this.docClickFun=function(){r.focus=!1},this.containerClickFun=function(){r.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Dr(this),this.hotkey=new Xr(this),this.contextmenu=new Gr(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new to(this),!this.danmaku&&this.options.autoplay&&this.play(),ca++,wn.push(this)}var t,o,e;return t=n,o=[{key:"seek",value:function(a){a=Math.max(a,0),this.video.duration&&(a=Math.min(a,this.video.duration)),this.video.currentTime<a?this.notice("".concat(this.tran("ff").replace("%s",(a-this.video.currentTime).toFixed(0)))):this.video.currentTime>a&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-a).toFixed(0)))),this.video.currentTime=a,this.danmaku&&this.danmaku.seek(),this.bar.set("played",a/this.video.duration,"width"),this.template.ptime.innerHTML=S.secondToTime(a)}},{key:"play",value:function(a){var r=this;if(this.paused=!1,this.video.paused&&!S.isMobile&&this.bezel.switch(Ke.play),this.template.playButton.innerHTML=Ke.pause,this.template.mobilePlayButton.innerHTML=Ke.pause,a||x.resolve(this.video.play()).catch(function(){r.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var i=0;i<wn.length;i++)this!==wn[i]&&wn[i].pause()}},{key:"pause",value:function(a){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||S.isMobile||this.bezel.switch(Ke.pause),this.template.playButton.innerHTML=Ke.play,this.template.mobilePlayButton.innerHTML=Ke.play,a||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Ke.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Ke.volumeDown:this.template.volumeIcon.innerHTML=Ke.volumeOff}},{key:"volume",value:function(a,r,i){if(a=parseFloat(a),!isNaN(a)){a=Math.max(a,0),a=Math.min(a,1),this.bar.set("volume",a,"width");var s="".concat((100*a).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=s,r||this.user.set("volume",a),i||this.notice("".concat(this.tran("volume")," ").concat((100*a).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=a,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(a,r){this.events.on(a,r)}},{key:"switchVideo",value:function(a,r){this.pause(),this.video.poster=a.pic?a.pic:"",this.video.src=a.url,this.initMSE(this.video,a.type||"auto"),r&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:r.id,address:r.api,token:r.token,maximum:r.maximum,addition:r.addition,user:r.user}))}},{key:"initMSE",value:function(a,r){var i=this;if(this.type=r,this.options.video.customType&&this.options.video.customType[r])Object.prototype.toString.call(this.options.video.customType[r])==="[object Function]"?this.options.video.customType[r](this.video,this):console.error("Illegal customType: ".concat(r));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(a.src)?this.type="hls":/.flv(#|\?|$)/i.exec(a.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(a.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(a.canPlayType("application/x-mpegURL")||a.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var s=this.options.pluginOptions.hls,d=new window.Hls(s);this.plugins.hls=d,d.loadSource(a.src),d.attachMedia(a),this.events.on("destroy",function(){d.destroy(),delete i.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var m=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:a.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=m,m.attachMediaElement(a),m.load(),this.events.on("destroy",function(){m.unload(),m.detachMediaElement(),m.destroy(),delete i.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var b=window.dashjs.MediaPlayer().create().initialize(a,a.src,!1),j=this.options.pluginOptions.dash;b.updateSettings(j),this.plugins.dash=b,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete i.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var U=this.options.pluginOptions.webtorrent,Q=new window.WebTorrent(U);this.plugins.webtorrent=Q;var H=a.src;a.src="",a.preload="metadata",a.addEventListener("durationchange",function(){return i.container.classList.remove("dplayer-loading")},{once:!0}),Q.add(H,function(M){M.files.find(function(X){return X.name.endsWith(".mp4")}).renderTo(i.video,{autoplay:i.options.autoplay,controls:!1})}),this.events.on("destroy",function(){Q.remove(H),Q.destroy(),delete i.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(a,r){var i=this;this.initMSE(a,r),this.on("durationchange",function(){a.duration!==1&&a.duration!==1/0&&(i.template.dtime.innerHTML=S.secondToTime(a.duration))}),this.on("progress",function(){var m=a.buffered.length?a.buffered.end(a.buffered.length-1)/a.duration:0;i.bar.set("loaded",m,"width")}),this.on("error",function(){i.video.error&&i.tran&&i.notice&&i.type!=="webtorrent"&&i.notice(i.tran("video-failed"))}),this.on("ended",function(){i.bar.set("played",1,"width"),i.setting.loop?(i.seek(0),i.play()):i.pause(),i.danmaku&&(i.danmaku.danIndex=0)}),this.on("play",function(){i.paused&&i.play(!0)}),this.on("pause",function(){i.paused||i.pause(!0)}),this.on("timeupdate",function(){i.bar.set("played",i.video.currentTime/i.video.duration,"width");var m=S.secondToTime(i.video.currentTime);i.template.ptime.innerHTML!==m&&(i.template.ptime.innerHTML=m)});for(var s=function(m){a.addEventListener(i.events.videoEvents[m],function(b){i.events.trigger(i.events.videoEvents[m],b)})},d=0;d<this.events.videoEvents.length;d++)s(d);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new Cr(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Sr(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(a){var r=this;if(a=typeof a=="string"?parseInt(a):a,this.qualityIndex!==a&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=a,this.switchingQuality=!0,this.quality=this.options.video.quality[a],this.template.qualityButton.innerHTML=this.quality.name;var i=this.video.paused;this.video.pause();var s=ro()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),d=new DOMParser().parseFromString(s,"text/html").body.firstChild;this.template.videoWrap.insertBefore(d,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=d,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(r.prevVideo){if(r.video.currentTime!==r.prevVideo.currentTime)return void r.seek(r.prevVideo.currentTime);r.template.videoWrap.removeChild(r.prevVideo),r.video.classList.add("dplayer-video-current"),i||r.video.play(),r.prevVideo=null,r.notice("".concat(r.tran("switched-quality").replace("%q",r.quality.name)),void 0,void 0,"switch-quality"),r.switchingQuality=!1,r.events.trigger("quality_end")}}),this.on("error",function(){r.video.error&&r.prevVideo&&(r.template.videoWrap.removeChild(r.video),r.video=r.prevVideo,i||r.video.play(),r.qualityIndex=r.prevIndex,r.quality=r.options.video.quality[r.qualityIndex],r.noticeTime=setTimeout(function(){r.template.notice.style.opacity=0,r.events.trigger("notice_hide")},3e3),r.prevVideo=null,r.switchingQuality=!1)})}}},{key:"notice",value:function(a){var r,i,s,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,b=arguments.length>3?arguments[3]:void 0;if(b&&((r=document.getElementById("dplayer-notice-".concat(b)))&&(r.innerHTML=a),this.noticeList[b]&&(clearTimeout(this.noticeList[b]),this.noticeList[b]=null)),!r){var j=ia.NewNotice(a,m,b);this.template.noticeList.appendChild(j),r=j}this.events.trigger("notice_show",r),d>0&&(this.noticeList[b]=setTimeout((i=r,s=this,function(){i.addEventListener("animationend",function(){s.template.noticeList.removeChild(i)}),i.classList.add("remove-notice"),s.events.trigger("notice_hide"),s.noticeList[b]=null}),d))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(a){this.video.playbackRate=a}},{key:"destroy",value:function(){wn.splice(wn.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],e=[{key:"version",get:function(){return"1.27.1"}}],o&&da(t.prototype,o),e&&da(t,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();const lo=io;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const so=lo})(),ue.default})())})(wa);var jo=wa.exports;const Mo=ba(jo);function Pt(v){throw new Error('Could not dynamically require "'+v+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ca={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(v,I){(function(K){v.exports=K()})(function(){return function K(de,w,ue){function k(P,W){if(!w[P]){if(!de[P]){var h=typeof Pt=="function"&&Pt;if(!W&&h)return h(P,!0);if(B)return B(P,!0);var c=new Error("Cannot find module '"+P+"'");throw c.code="MODULE_NOT_FOUND",c}var q=w[P]={exports:{}};de[P][0].call(q.exports,function(Y){var z=de[P][1][Y];return k(z||Y)},q,q.exports,K,de,w,ue)}return w[P].exports}for(var B=typeof Pt=="function"&&Pt,L=0;L<ue.length;L++)k(ue[L]);return k}({1:[function(K,de,w){(function(ue){var k=ue.MutationObserver||ue.WebKitMutationObserver,B;if(k){var L=0,P=new k(Y),W=ue.document.createTextNode("");P.observe(W,{characterData:!0}),B=function(){W.data=L=++L%2}}else if(!ue.setImmediate&&typeof ue.MessageChannel<"u"){var h=new ue.MessageChannel;h.port1.onmessage=Y,B=function(){h.port2.postMessage(0)}}else"document"in ue&&"onreadystatechange"in ue.document.createElement("script")?B=function(){var F=ue.document.createElement("script");F.onreadystatechange=function(){Y(),F.onreadystatechange=null,F.parentNode.removeChild(F),F=null},ue.document.documentElement.appendChild(F)}:B=function(){setTimeout(Y,0)};var c,q=[];function Y(){c=!0;for(var F,J,N=q.length;N;){for(J=q,q=[],F=-1;++F<N;)J[F]();N=q.length}c=!1}de.exports=z;function z(F){q.push(F)===1&&!c&&B()}}).call(this,typeof ct<"u"?ct:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(K,de,w){var ue=K(1);function k(){}var B={},L=["REJECTED"],P=["FULFILLED"],W=["PENDING"];de.exports=h;function h(C){if(typeof C!="function")throw new TypeError("resolver must be a function");this.state=W,this.queue=[],this.outcome=void 0,C!==k&&z(this,C)}h.prototype.catch=function(C){return this.then(null,C)},h.prototype.then=function(C,Z){if(typeof C!="function"&&this.state===P||typeof Z!="function"&&this.state===L)return this;var ae=new this.constructor(k);if(this.state!==W){var pe=this.state===P?C:Z;q(ae,pe,this.outcome)}else this.queue.push(new c(ae,C,Z));return ae};function c(C,Z,ae){this.promise=C,typeof Z=="function"&&(this.onFulfilled=Z,this.callFulfilled=this.otherCallFulfilled),typeof ae=="function"&&(this.onRejected=ae,this.callRejected=this.otherCallRejected)}c.prototype.callFulfilled=function(C){B.resolve(this.promise,C)},c.prototype.otherCallFulfilled=function(C){q(this.promise,this.onFulfilled,C)},c.prototype.callRejected=function(C){B.reject(this.promise,C)},c.prototype.otherCallRejected=function(C){q(this.promise,this.onRejected,C)};function q(C,Z,ae){ue(function(){var pe;try{pe=Z(ae)}catch(xe){return B.reject(C,xe)}pe===C?B.reject(C,new TypeError("Cannot resolve promise with itself")):B.resolve(C,pe)})}B.resolve=function(C,Z){var ae=F(Y,Z);if(ae.status==="error")return B.reject(C,ae.value);var pe=ae.value;if(pe)z(C,pe);else{C.state=P,C.outcome=Z;for(var xe=-1,re=C.queue.length;++xe<re;)C.queue[xe].callFulfilled(Z)}return C},B.reject=function(C,Z){C.state=L,C.outcome=Z;for(var ae=-1,pe=C.queue.length;++ae<pe;)C.queue[ae].callRejected(Z);return C};function Y(C){var Z=C&&C.then;if(C&&(typeof C=="object"||typeof C=="function")&&typeof Z=="function")return function(){Z.apply(C,arguments)}}function z(C,Z){var ae=!1;function pe(Ie){ae||(ae=!0,B.reject(C,Ie))}function xe(Ie){ae||(ae=!0,B.resolve(C,Ie))}function re(){Z(xe,pe)}var Le=F(re);Le.status==="error"&&pe(Le.value)}function F(C,Z){var ae={};try{ae.value=C(Z),ae.status="success"}catch(pe){ae.status="error",ae.value=pe}return ae}h.resolve=J;function J(C){return C instanceof this?C:B.resolve(new this(k),C)}h.reject=N;function N(C){var Z=new this(k);return B.reject(Z,C)}h.all=ne;function ne(C){var Z=this;if(Object.prototype.toString.call(C)!=="[object Array]")return this.reject(new TypeError("must be an array"));var ae=C.length,pe=!1;if(!ae)return this.resolve([]);for(var xe=new Array(ae),re=0,Le=-1,Ie=new this(k);++Le<ae;)ze(C[Le],Le);return Ie;function ze(be,Ge){Z.resolve(be).then(en,function(x){pe||(pe=!0,B.reject(Ie,x))});function en(x){xe[Ge]=x,++re===ae&&!pe&&(pe=!0,B.resolve(Ie,xe))}}}h.race=G;function G(C){var Z=this;if(Object.prototype.toString.call(C)!=="[object Array]")return this.reject(new TypeError("must be an array"));var ae=C.length,pe=!1;if(!ae)return this.resolve([]);for(var xe=-1,re=new this(k);++xe<ae;)Le(C[xe]);return re;function Le(Ie){Z.resolve(Ie).then(function(ze){pe||(pe=!0,B.resolve(re,ze))},function(ze){pe||(pe=!0,B.reject(re,ze))})}}},{1:1}],3:[function(K,de,w){(function(ue){typeof ue.Promise!="function"&&(ue.Promise=K(2))}).call(this,typeof ct<"u"?ct:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(K,de,w){var ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};function k(l,u){if(!(l instanceof u))throw new TypeError("Cannot call a class as a function")}function B(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var L=B();function P(){try{if(!L||!L.open)return!1;var l=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),u=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!l||u)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function W(l,u){l=l||[],u=u||{};try{return new Blob(l,u)}catch(A){if(A.name!=="TypeError")throw A;for(var p=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,y=new p,f=0;f<l.length;f+=1)y.append(l[f]);return y.getBlob(u.type)}}typeof Promise>"u"&&K(3);var h=Promise;function c(l,u){u&&l.then(function(p){u(null,p)},function(p){u(p)})}function q(l,u,p){typeof u=="function"&&l.then(u),typeof p=="function"&&l.catch(p)}function Y(l){return typeof l!="string"&&(console.warn(l+" used as a key, but it is not a string."),l=String(l)),l}function z(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var F="local-forage-detect-blob-support",J=void 0,N={},ne=Object.prototype.toString,G="readonly",C="readwrite";function Z(l){for(var u=l.length,p=new ArrayBuffer(u),y=new Uint8Array(p),f=0;f<u;f++)y[f]=l.charCodeAt(f);return p}function ae(l){return new h(function(u){var p=l.transaction(F,C),y=W([""]);p.objectStore(F).put(y,"key"),p.onabort=function(f){f.preventDefault(),f.stopPropagation(),u(!1)},p.oncomplete=function(){var f=navigator.userAgent.match(/Chrome\/(\d+)/),A=navigator.userAgent.match(/Edge\//);u(A||!f||parseInt(f[1],10)>=43)}}).catch(function(){return!1})}function pe(l){return typeof J=="boolean"?h.resolve(J):ae(l).then(function(u){return J=u,J})}function xe(l){var u=N[l.name],p={};p.promise=new h(function(y,f){p.resolve=y,p.reject=f}),u.deferredOperations.push(p),u.dbReady?u.dbReady=u.dbReady.then(function(){return p.promise}):u.dbReady=p.promise}function re(l){var u=N[l.name],p=u.deferredOperations.pop();if(p)return p.resolve(),p.promise}function Le(l,u){var p=N[l.name],y=p.deferredOperations.pop();if(y)return y.reject(u),y.promise}function Ie(l,u){return new h(function(p,y){if(N[l.name]=N[l.name]||le(),l.db)if(u)xe(l),l.db.close();else return p(l.db);var f=[l.name];u&&f.push(l.version);var A=L.open.apply(L,f);u&&(A.onupgradeneeded=function(g){var _=A.result;try{_.createObjectStore(l.storeName),g.oldVersion<=1&&_.createObjectStore(F)}catch(D){if(D.name==="ConstraintError")console.warn('The database "'+l.name+'" has been upgraded from version '+g.oldVersion+" to version "+g.newVersion+', but the storage "'+l.storeName+'" already exists.');else throw D}}),A.onerror=function(g){g.preventDefault(),y(A.error)},A.onsuccess=function(){var g=A.result;g.onversionchange=function(_){_.target.close()},p(g),re(l)}})}function ze(l){return Ie(l,!1)}function be(l){return Ie(l,!0)}function Ge(l,u){if(!l.db)return!0;var p=!l.db.objectStoreNames.contains(l.storeName),y=l.version<l.db.version,f=l.version>l.db.version;if(y&&(l.version!==u&&console.warn('The database "'+l.name+`" can't be downgraded from version `+l.db.version+" to version "+l.version+"."),l.version=l.db.version),f||p){if(p){var A=l.db.version+1;A>l.version&&(l.version=A)}return!0}return!1}function en(l){return new h(function(u,p){var y=new FileReader;y.onerror=p,y.onloadend=function(f){var A=btoa(f.target.result||"");u({__local_forage_encoded_blob:!0,data:A,type:l.type})},y.readAsBinaryString(l)})}function x(l){var u=Z(atob(l.data));return W([u],{type:l.type})}function T(l){return l&&l.__local_forage_encoded_blob}function S(l){var u=this,p=u._initReady().then(function(){var y=N[u._dbInfo.name];if(y&&y.dbReady)return y.dbReady});return q(p,l,l),p}function $(l){xe(l);for(var u=N[l.name],p=u.forages,y=0;y<p.length;y++){var f=p[y];f._dbInfo.db&&(f._dbInfo.db.close(),f._dbInfo.db=null)}return l.db=null,ze(l).then(function(A){return l.db=A,Ge(l)?be(l):A}).then(function(A){l.db=u.db=A;for(var g=0;g<p.length;g++)p[g]._dbInfo.db=A}).catch(function(A){throw Le(l,A),A})}function ie(l,u,p,y){y===void 0&&(y=1);try{var f=l.db.transaction(l.storeName,u);p(null,f)}catch(A){if(y>0&&(!l.db||A.name==="InvalidStateError"||A.name==="NotFoundError"))return h.resolve().then(function(){if(!l.db||A.name==="NotFoundError"&&!l.db.objectStoreNames.contains(l.storeName)&&l.version<=l.db.version)return l.db&&(l.version=l.db.version+1),be(l)}).then(function(){return $(l).then(function(){ie(l,u,p,y-1)})}).catch(p);p(A)}}function le(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Oe(l){var u=this,p={db:null};if(l)for(var y in l)p[y]=l[y];var f=N[p.name];f||(f=le(),N[p.name]=f),f.forages.push(u),u._initReady||(u._initReady=u.ready,u.ready=S);var A=[];function g(){return h.resolve()}for(var _=0;_<f.forages.length;_++){var D=f.forages[_];D!==u&&A.push(D._initReady().catch(g))}var O=f.forages.slice(0);return h.all(A).then(function(){return p.db=f.db,ze(p)}).then(function(R){return p.db=R,Ge(p,u._defaultConfig.version)?be(p):R}).then(function(R){p.db=f.db=R,u._dbInfo=p;for(var V=0;V<O.length;V++){var oe=O[V];oe!==u&&(oe._dbInfo.db=p.db,oe._dbInfo.version=p.version)}})}function ge(l,u){var p=this;l=Y(l);var y=new h(function(f,A){p.ready().then(function(){ie(p._dbInfo,G,function(g,_){if(g)return A(g);try{var D=_.objectStore(p._dbInfo.storeName),O=D.get(l);O.onsuccess=function(){var R=O.result;R===void 0&&(R=null),T(R)&&(R=x(R)),f(R)},O.onerror=function(){A(O.error)}}catch(R){A(R)}})}).catch(A)});return c(y,u),y}function Ue(l,u){var p=this,y=new h(function(f,A){p.ready().then(function(){ie(p._dbInfo,G,function(g,_){if(g)return A(g);try{var D=_.objectStore(p._dbInfo.storeName),O=D.openCursor(),R=1;O.onsuccess=function(){var V=O.result;if(V){var oe=V.value;T(oe)&&(oe=x(oe));var se=l(oe,V.key,R++);se!==void 0?f(se):V.continue()}else f()},O.onerror=function(){A(O.error)}}catch(V){A(V)}})}).catch(A)});return c(y,u),y}function ee(l,u,p){var y=this;l=Y(l);var f=new h(function(A,g){var _;y.ready().then(function(){return _=y._dbInfo,ne.call(u)==="[object Blob]"?pe(_.db).then(function(D){return D?u:en(u)}):u}).then(function(D){ie(y._dbInfo,C,function(O,R){if(O)return g(O);try{var V=R.objectStore(y._dbInfo.storeName);D===null&&(D=void 0);var oe=V.put(D,l);R.oncomplete=function(){D===void 0&&(D=null),A(D)},R.onabort=R.onerror=function(){var se=oe.error?oe.error:oe.transaction.error;g(se)}}catch(se){g(se)}})}).catch(g)});return c(f,p),f}function we(l,u){var p=this;l=Y(l);var y=new h(function(f,A){p.ready().then(function(){ie(p._dbInfo,C,function(g,_){if(g)return A(g);try{var D=_.objectStore(p._dbInfo.storeName),O=D.delete(l);_.oncomplete=function(){f()},_.onerror=function(){A(O.error)},_.onabort=function(){var R=O.error?O.error:O.transaction.error;A(R)}}catch(R){A(R)}})}).catch(A)});return c(y,u),y}function Pe(l){var u=this,p=new h(function(y,f){u.ready().then(function(){ie(u._dbInfo,C,function(A,g){if(A)return f(A);try{var _=g.objectStore(u._dbInfo.storeName),D=_.clear();g.oncomplete=function(){y()},g.onabort=g.onerror=function(){var O=D.error?D.error:D.transaction.error;f(O)}}catch(O){f(O)}})}).catch(f)});return c(p,l),p}function on(l){var u=this,p=new h(function(y,f){u.ready().then(function(){ie(u._dbInfo,G,function(A,g){if(A)return f(A);try{var _=g.objectStore(u._dbInfo.storeName),D=_.count();D.onsuccess=function(){y(D.result)},D.onerror=function(){f(D.error)}}catch(O){f(O)}})}).catch(f)});return c(p,l),p}function ut(l,u){var p=this,y=new h(function(f,A){if(l<0){f(null);return}p.ready().then(function(){ie(p._dbInfo,G,function(g,_){if(g)return A(g);try{var D=_.objectStore(p._dbInfo.storeName),O=!1,R=D.openKeyCursor();R.onsuccess=function(){var V=R.result;if(!V){f(null);return}l===0||O?f(V.key):(O=!0,V.advance(l))},R.onerror=function(){A(R.error)}}catch(V){A(V)}})}).catch(A)});return c(y,u),y}function Mt(l){var u=this,p=new h(function(y,f){u.ready().then(function(){ie(u._dbInfo,G,function(A,g){if(A)return f(A);try{var _=g.objectStore(u._dbInfo.storeName),D=_.openKeyCursor(),O=[];D.onsuccess=function(){var R=D.result;if(!R){y(O);return}O.push(R.key),R.continue()},D.onerror=function(){f(D.error)}}catch(R){f(R)}})}).catch(f)});return c(p,l),p}function Xe(l,u){u=z.apply(this,arguments);var p=this.config();l=typeof l!="function"&&l||{},l.name||(l.name=l.name||p.name,l.storeName=l.storeName||p.storeName);var y=this,f;if(!l.name)f=h.reject("Invalid arguments");else{var A=l.name===p.name&&y._dbInfo.db,g=A?h.resolve(y._dbInfo.db):ze(l).then(function(_){var D=N[l.name],O=D.forages;D.db=_;for(var R=0;R<O.length;R++)O[R]._dbInfo.db=_;return _});l.storeName?f=g.then(function(_){if(_.objectStoreNames.contains(l.storeName)){var D=_.version+1;xe(l);var O=N[l.name],R=O.forages;_.close();for(var V=0;V<R.length;V++){var oe=R[V];oe._dbInfo.db=null,oe._dbInfo.version=D}var se=new h(function(ce,he){var me=L.open(l.name,D);me.onerror=function(Re){var pn=me.result;pn.close(),he(Re)},me.onupgradeneeded=function(){var Re=me.result;Re.deleteObjectStore(l.storeName)},me.onsuccess=function(){var Re=me.result;Re.close(),ce(Re)}});return se.then(function(ce){O.db=ce;for(var he=0;he<R.length;he++){var me=R[he];me._dbInfo.db=ce,re(me._dbInfo)}}).catch(function(ce){throw(Le(l,ce)||h.resolve()).catch(function(){}),ce})}}):f=g.then(function(_){xe(l);var D=N[l.name],O=D.forages;_.close();for(var R=0;R<O.length;R++){var V=O[R];V._dbInfo.db=null}var oe=new h(function(se,ce){var he=L.deleteDatabase(l.name);he.onerror=function(){var me=he.result;me&&me.close(),ce(he.error)},he.onblocked=function(){console.warn('dropInstance blocked for database "'+l.name+'" until all open connections are closed')},he.onsuccess=function(){var me=he.result;me&&me.close(),se(me)}});return oe.then(function(se){D.db=se;for(var ce=0;ce<O.length;ce++){var he=O[ce];re(he._dbInfo)}}).catch(function(se){throw(Le(l,se)||h.resolve()).catch(function(){}),se})})}return c(f,u),f}var At={_driver:"asyncStorage",_initStorage:Oe,_support:P(),iterate:Ue,getItem:ge,setItem:ee,removeItem:we,clear:Pe,length:on,key:ut,keys:Mt,dropInstance:Xe};function _n(){return typeof openDatabase=="function"}var je="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Nt="~~local_forage_type~",yt=/^~~local_forage_type~([^~]+)~/,yn="__lfsc__:",Ln=yn.length,zn="arbf",Je="blob",Tn="si08",fn="ui08",Dn="uic8",On="si16",Rn="si32",ft="ur16",mt="ui32",qn="fl32",ht="fl64",Pn=Ln+zn.length,E=Object.prototype.toString;function $e(l){var u=l.length*.75,p=l.length,y,f=0,A,g,_,D;l[l.length-1]==="="&&(u--,l[l.length-2]==="="&&u--);var O=new ArrayBuffer(u),R=new Uint8Array(O);for(y=0;y<p;y+=4)A=je.indexOf(l[y]),g=je.indexOf(l[y+1]),_=je.indexOf(l[y+2]),D=je.indexOf(l[y+3]),R[f++]=A<<2|g>>4,R[f++]=(g&15)<<4|_>>2,R[f++]=(_&3)<<6|D&63;return O}function mn(l){var u=new Uint8Array(l),p="",y;for(y=0;y<u.length;y+=3)p+=je[u[y]>>2],p+=je[(u[y]&3)<<4|u[y+1]>>4],p+=je[(u[y+1]&15)<<2|u[y+2]>>6],p+=je[u[y+2]&63];return u.length%3===2?p=p.substring(0,p.length-1)+"=":u.length%3===1&&(p=p.substring(0,p.length-2)+"=="),p}function bt(l,u){var p="";if(l&&(p=E.call(l)),l&&(p==="[object ArrayBuffer]"||l.buffer&&E.call(l.buffer)==="[object ArrayBuffer]")){var y,f=yn;l instanceof ArrayBuffer?(y=l,f+=zn):(y=l.buffer,p==="[object Int8Array]"?f+=Tn:p==="[object Uint8Array]"?f+=fn:p==="[object Uint8ClampedArray]"?f+=Dn:p==="[object Int16Array]"?f+=On:p==="[object Uint16Array]"?f+=ft:p==="[object Int32Array]"?f+=Rn:p==="[object Uint32Array]"?f+=mt:p==="[object Float32Array]"?f+=qn:p==="[object Float64Array]"?f+=ht:u(new Error("Failed to get type for BinaryArray"))),u(f+mn(y))}else if(p==="[object Blob]"){var A=new FileReader;A.onload=function(){var g=Nt+l.type+"~"+mn(this.result);u(yn+Je+g)},A.readAsArrayBuffer(l)}else try{u(JSON.stringify(l))}catch(g){console.error("Couldn't convert value into a JSON string: ",l),u(null,g)}}function ye(l){if(l.substring(0,Ln)!==yn)return JSON.parse(l);var u=l.substring(Pn),p=l.substring(Ln,Pn),y;if(p===Je&&yt.test(u)){var f=u.match(yt);y=f[1],u=u.substring(f[0].length)}var A=$e(u);switch(p){case zn:return A;case Je:return W([A],{type:y});case Tn:return new Int8Array(A);case fn:return new Uint8Array(A);case Dn:return new Uint8ClampedArray(A);case On:return new Int16Array(A);case ft:return new Uint16Array(A);case Rn:return new Int32Array(A);case mt:return new Uint32Array(A);case qn:return new Float32Array(A);case ht:return new Float64Array(A);default:throw new Error("Unkown type: "+p)}}var jn={serialize:bt,deserialize:ye,stringToBuffer:$e,bufferToString:mn};function hn(l,u,p,y){l.executeSql("CREATE TABLE IF NOT EXISTS "+u.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],p,y)}function Mn(l){var u=this,p={db:null};if(l)for(var y in l)p[y]=typeof l[y]!="string"?l[y].toString():l[y];var f=new h(function(A,g){try{p.db=openDatabase(p.name,String(p.version),p.description,p.size)}catch(_){return g(_)}p.db.transaction(function(_){hn(_,p,function(){u._dbInfo=p,A()},function(D,O){g(O)})},g)});return p.serializer=jn,f}function We(l,u,p,y,f,A){l.executeSql(p,y,f,function(g,_){_.code===_.SYNTAX_ERR?g.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[u.storeName],function(D,O){O.rows.length?A(D,_):hn(D,u,function(){D.executeSql(p,y,f,A)},A)},A):A(g,_)},A)}function gt(l,u){var p=this;l=Y(l);var y=new h(function(f,A){p.ready().then(function(){var g=p._dbInfo;g.db.transaction(function(_){We(_,g,"SELECT * FROM "+g.storeName+" WHERE key = ? LIMIT 1",[l],function(D,O){var R=O.rows.length?O.rows.item(0).value:null;R&&(R=g.serializer.deserialize(R)),f(R)},function(D,O){A(O)})})}).catch(A)});return c(y,u),y}function Yt(l,u){var p=this,y=new h(function(f,A){p.ready().then(function(){var g=p._dbInfo;g.db.transaction(function(_){We(_,g,"SELECT * FROM "+g.storeName,[],function(D,O){for(var R=O.rows,V=R.length,oe=0;oe<V;oe++){var se=R.item(oe),ce=se.value;if(ce&&(ce=g.serializer.deserialize(ce)),ce=l(ce,se.key,oe+1),ce!==void 0){f(ce);return}}f()},function(D,O){A(O)})})}).catch(A)});return c(y,u),y}function ln(l,u,p,y){var f=this;l=Y(l);var A=new h(function(g,_){f.ready().then(function(){u===void 0&&(u=null);var D=u,O=f._dbInfo;O.serializer.serialize(u,function(R,V){V?_(V):O.db.transaction(function(oe){We(oe,O,"INSERT OR REPLACE INTO "+O.storeName+" (key, value) VALUES (?, ?)",[l,R],function(){g(D)},function(se,ce){_(ce)})},function(oe){if(oe.code===oe.QUOTA_ERR){if(y>0){g(ln.apply(f,[l,D,p,y-1]));return}_(oe)}})})}).catch(_)});return c(A,p),A}function vt(l,u,p){return ln.apply(this,[l,u,p,1])}function xt(l,u){var p=this;l=Y(l);var y=new h(function(f,A){p.ready().then(function(){var g=p._dbInfo;g.db.transaction(function(_){We(_,g,"DELETE FROM "+g.storeName+" WHERE key = ?",[l],function(){f()},function(D,O){A(O)})})}).catch(A)});return c(y,u),y}function Et(l){var u=this,p=new h(function(y,f){u.ready().then(function(){var A=u._dbInfo;A.db.transaction(function(g){We(g,A,"DELETE FROM "+A.storeName,[],function(){y()},function(_,D){f(D)})})}).catch(f)});return c(p,l),p}function wt(l){var u=this,p=new h(function(y,f){u.ready().then(function(){var A=u._dbInfo;A.db.transaction(function(g){We(g,A,"SELECT COUNT(key) as c FROM "+A.storeName,[],function(_,D){var O=D.rows.item(0).c;y(O)},function(_,D){f(D)})})}).catch(f)});return c(p,l),p}function Ft(l,u){var p=this,y=new h(function(f,A){p.ready().then(function(){var g=p._dbInfo;g.db.transaction(function(_){We(_,g,"SELECT key FROM "+g.storeName+" WHERE id = ? LIMIT 1",[l+1],function(D,O){var R=O.rows.length?O.rows.item(0).key:null;f(R)},function(D,O){A(O)})})}).catch(A)});return c(y,u),y}function Ct(l){var u=this,p=new h(function(y,f){u.ready().then(function(){var A=u._dbInfo;A.db.transaction(function(g){We(g,A,"SELECT key FROM "+A.storeName,[],function(_,D){for(var O=[],R=0;R<D.rows.length;R++)O.push(D.rows.item(R).key);y(O)},function(_,D){f(D)})})}).catch(f)});return c(p,l),p}function sn(l){return new h(function(u,p){l.transaction(function(y){y.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(f,A){for(var g=[],_=0;_<A.rows.length;_++)g.push(A.rows.item(_).name);u({db:l,storeNames:g})},function(f,A){p(A)})},function(y){p(y)})})}function Ut(l,u){u=z.apply(this,arguments);var p=this.config();l=typeof l!="function"&&l||{},l.name||(l.name=l.name||p.name,l.storeName=l.storeName||p.storeName);var y=this,f;return l.name?f=new h(function(A){var g;l.name===p.name?g=y._dbInfo.db:g=openDatabase(l.name,"","",0),l.storeName?A({db:g,storeNames:[l.storeName]}):A(sn(g))}).then(function(A){return new h(function(g,_){A.db.transaction(function(D){function O(se){return new h(function(ce,he){D.executeSql("DROP TABLE IF EXISTS "+se,[],function(){ce()},function(me,Re){he(Re)})})}for(var R=[],V=0,oe=A.storeNames.length;V<oe;V++)R.push(O(A.storeNames[V]));h.all(R).then(function(){g()}).catch(function(se){_(se)})},function(D){_(D)})})}):f=h.reject("Invalid arguments"),c(f,u),f}var Wt={_driver:"webSQLStorage",_initStorage:Mn,_support:_n(),iterate:Yt,getItem:gt,setItem:vt,removeItem:xt,clear:Et,length:wt,key:Ft,keys:Ct,dropInstance:Ut};function kt(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Nn(l,u){var p=l.name+"/";return l.storeName!==u.storeName&&(p+=l.storeName+"/"),p}function Ht(){var l="_localforage_support_test";try{return localStorage.setItem(l,!0),localStorage.removeItem(l),!1}catch{return!0}}function Qt(){return!Ht()||localStorage.length>0}function Yn(l){var u=this,p={};if(l)for(var y in l)p[y]=l[y];return p.keyPrefix=Nn(l,u._defaultConfig),Qt()?(u._dbInfo=p,p.serializer=jn,h.resolve()):h.reject()}function Kt(l){var u=this,p=u.ready().then(function(){for(var y=u._dbInfo.keyPrefix,f=localStorage.length-1;f>=0;f--){var A=localStorage.key(f);A.indexOf(y)===0&&localStorage.removeItem(A)}});return c(p,l),p}function Vt(l,u){var p=this;l=Y(l);var y=p.ready().then(function(){var f=p._dbInfo,A=localStorage.getItem(f.keyPrefix+l);return A&&(A=f.serializer.deserialize(A)),A});return c(y,u),y}function Me(l,u){var p=this,y=p.ready().then(function(){for(var f=p._dbInfo,A=f.keyPrefix,g=A.length,_=localStorage.length,D=1,O=0;O<_;O++){var R=localStorage.key(O);if(R.indexOf(A)===0){var V=localStorage.getItem(R);if(V&&(V=f.serializer.deserialize(V)),V=l(V,R.substring(g),D++),V!==void 0)return V}}});return c(y,u),y}function Bt(l,u){var p=this,y=p.ready().then(function(){var f=p._dbInfo,A;try{A=localStorage.key(l)}catch{A=null}return A&&(A=A.substring(f.keyPrefix.length)),A});return c(y,u),y}function Zt(l){var u=this,p=u.ready().then(function(){for(var y=u._dbInfo,f=localStorage.length,A=[],g=0;g<f;g++){var _=localStorage.key(g);_.indexOf(y.keyPrefix)===0&&A.push(_.substring(y.keyPrefix.length))}return A});return c(p,l),p}function bn(l){var u=this,p=u.keys().then(function(y){return y.length});return c(p,l),p}function Fn(l,u){var p=this;l=Y(l);var y=p.ready().then(function(){var f=p._dbInfo;localStorage.removeItem(f.keyPrefix+l)});return c(y,u),y}function Xt(l,u,p){var y=this;l=Y(l);var f=y.ready().then(function(){u===void 0&&(u=null);var A=u;return new h(function(g,_){var D=y._dbInfo;D.serializer.serialize(u,function(O,R){if(R)_(R);else try{localStorage.setItem(D.keyPrefix+l,O),g(A)}catch(V){(V.name==="QuotaExceededError"||V.name==="NS_ERROR_DOM_QUOTA_REACHED")&&_(V),_(V)}})})});return c(f,p),f}function dn(l,u){if(u=z.apply(this,arguments),l=typeof l!="function"&&l||{},!l.name){var p=this.config();l.name=l.name||p.name,l.storeName=l.storeName||p.storeName}var y=this,f;return l.name?f=new h(function(A){l.storeName?A(Nn(l,y._defaultConfig)):A(l.name+"/")}).then(function(A){for(var g=localStorage.length-1;g>=0;g--){var _=localStorage.key(g);_.indexOf(A)===0&&localStorage.removeItem(_)}}):f=h.reject("Invalid arguments"),c(f,u),f}var St={_driver:"localStorageWrapper",_initStorage:Yn,_support:kt(),iterate:Me,getItem:Vt,setItem:Xt,removeItem:Fn,clear:Kt,length:bn,key:Bt,keys:Zt,dropInstance:dn},It=function(u,p){return u===p||typeof u=="number"&&typeof p=="number"&&isNaN(u)&&isNaN(p)},_t=function(u,p){for(var y=u.length,f=0;f<y;){if(It(u[f],p))return!0;f++}return!1},nn=Array.isArray||function(l){return Object.prototype.toString.call(l)==="[object Array]"},Ze={},Un={},He={INDEXEDDB:At,WEBSQL:Wt,LOCALSTORAGE:St},Qe=[He.INDEXEDDB._driver,He.WEBSQL._driver,He.LOCALSTORAGE._driver],tn=["dropInstance"],gn=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(tn),Lt={description:"",driver:Qe.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function vn(l,u){l[u]=function(){var p=arguments;return l.ready().then(function(){return l[u].apply(l,p)})}}function Wn(){for(var l=1;l<arguments.length;l++){var u=arguments[l];if(u)for(var p in u)u.hasOwnProperty(p)&&(nn(u[p])?arguments[0][p]=u[p].slice():arguments[0][p]=u[p])}return arguments[0]}var zt=function(){function l(u){k(this,l);for(var p in He)if(He.hasOwnProperty(p)){var y=He[p],f=y._driver;this[p]=f,Ze[f]||this.defineDriver(y)}this._defaultConfig=Wn({},Lt),this._config=Wn({},this._defaultConfig,u),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return l.prototype.config=function(p){if((typeof p>"u"?"undefined":ue(p))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var y in p){if(y==="storeName"&&(p[y]=p[y].replace(/\W/g,"_")),y==="version"&&typeof p[y]!="number")return new Error("Database version must be a number.");this._config[y]=p[y]}return"driver"in p&&p.driver?this.setDriver(this._config.driver):!0}else return typeof p=="string"?this._config[p]:this._config},l.prototype.defineDriver=function(p,y,f){var A=new h(function(g,_){try{var D=p._driver,O=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!p._driver){_(O);return}for(var R=gn.concat("_initStorage"),V=0,oe=R.length;V<oe;V++){var se=R[V],ce=!_t(tn,se);if((ce||p[se])&&typeof p[se]!="function"){_(O);return}}var he=function(){for(var pn=function(Ce){return function(){var Dt=new Error("Method "+Ce+" is not implemented by the current driver"),Ot=h.reject(Dt);return c(Ot,arguments[arguments.length-1]),Ot}},Hn=0,Tt=tn.length;Hn<Tt;Hn++){var cn=tn[Hn];p[cn]||(p[cn]=pn(cn))}};he();var me=function(pn){Ze[D]&&console.info("Redefining LocalForage driver: "+D),Ze[D]=p,Un[D]=pn,g()};"_support"in p?p._support&&typeof p._support=="function"?p._support().then(me,_):me(!!p._support):me(!0)}catch(Re){_(Re)}});return q(A,y,f),A},l.prototype.driver=function(){return this._driver||null},l.prototype.getDriver=function(p,y,f){var A=Ze[p]?h.resolve(Ze[p]):h.reject(new Error("Driver not found."));return q(A,y,f),A},l.prototype.getSerializer=function(p){var y=h.resolve(jn);return q(y,p),y},l.prototype.ready=function(p){var y=this,f=y._driverSet.then(function(){return y._ready===null&&(y._ready=y._initDriver()),y._ready});return q(f,p,p),f},l.prototype.setDriver=function(p,y,f){var A=this;nn(p)||(p=[p]);var g=this._getSupportedDrivers(p);function _(){A._config.driver=A.driver()}function D(V){return A._extend(V),_(),A._ready=A._initStorage(A._config),A._ready}function O(V){return function(){var oe=0;function se(){for(;oe<V.length;){var ce=V[oe];return oe++,A._dbInfo=null,A._ready=null,A.getDriver(ce).then(D).catch(se)}_();var he=new Error("No available storage method found.");return A._driverSet=h.reject(he),A._driverSet}return se()}}var R=this._driverSet!==null?this._driverSet.catch(function(){return h.resolve()}):h.resolve();return this._driverSet=R.then(function(){var V=g[0];return A._dbInfo=null,A._ready=null,A.getDriver(V).then(function(oe){A._driver=oe._driver,_(),A._wrapLibraryMethodsWithReady(),A._initDriver=O(g)})}).catch(function(){_();var V=new Error("No available storage method found.");return A._driverSet=h.reject(V),A._driverSet}),q(this._driverSet,y,f),this._driverSet},l.prototype.supports=function(p){return!!Un[p]},l.prototype._extend=function(p){Wn(this,p)},l.prototype._getSupportedDrivers=function(p){for(var y=[],f=0,A=p.length;f<A;f++){var g=p[f];this.supports(g)&&y.push(g)}return y},l.prototype._wrapLibraryMethodsWithReady=function(){for(var p=0,y=gn.length;p<y;p++)vn(this,gn[p])},l.prototype.createInstance=function(p){return new l(p)},l}(),Jt=new zt;de.exports=Jt},{3:3}]},{},[4])(4)})})(Ca);var No=Ca.exports;const pt=ba(No),In=v=>(vo("data-v-a6c94670"),v=v(),xo(),v),Yo={class:"main"},Fo={class:"l"},Uo={class:"index"},Wo={class:"filter"},Ho={class:"filter-item"},Qo=In(()=>Ae("div",{class:"filter-item-th"},"Search：",-1)),Ko={class:"filter-item-tb"},Vo={class:"filter-item",style:{padding:"8px 0"}},Zo=In(()=>Ae("div",{class:"filter-item-th"},"Author：",-1)),Xo={class:"filter-item-tb"},Jo={key:0,class:""},$o={class:"filter-item",style:{padding:"8px 0"}},Go=In(()=>Ae("div",{class:"filter-item-th"},"Search：",-1)),ei={class:"filter-item-tb"},ni={class:"filter-item",style:{padding:"8px 0"}},ti=In(()=>Ae("div",{class:"filter-item-th"},"Info：",-1)),ai={class:"filter-item-tb"},ri={class:"list"},oi=["onClick"],ii={class:"list-item-img"},li={class:"list-item-tf"},si={class:"list-item-tit"},di={class:"list-item-des"},pi={class:"r"},ci={class:"btnwrap"},ui={class:""},Ai={key:0,class:""},yi={class:""},fi={class:""},mi={class:"filter-item",style:{padding:"8px 0"}},hi=In(()=>Ae("div",{class:"filter-item-th"},"Speed：",-1)),bi={class:"filter-item-tb"},gi={key:0,class:"btnwrap"},vi={class:""},xi={key:1,class:"movie"},Ei={class:"movie-title"},wi={class:"movie-des"},Ci=In(()=>Ae("div",{class:"dplayer",id:"dplayer"},null,-1)),ki={__name:"list",setup(v){const I=An(!1),K=Rt({authorData:[{text:"",img:"",select:!0}],otherData:[{text:"",select:!0},{text:"new",select:!1},{text:"yes",select:!1},{text:"no",select:!1},{text:"Jan",select:!1},{text:"China",select:!1},{text:"Other",select:!1},{text:"collect",select:!1},{text:"god",select:!1},{text:"del",select:!1},{text:"havecover",select:!1},{text:"nocover",select:!1},{text:"author",select:!1},{text:"noauthor",select:!1}]}),de=An(!1),w=Rt({keyword:"",author:"",other:""}),ue=async x=>{if(w.author===x)return!1;w.author=x,K.authorData.forEach(T=>{T.text===w.author?T.select=!0:T.select=!1}),B()},k=async x=>{if(w.other===x)return!1;w.other=x,K.otherData.forEach(T=>{T.text===w.other?T.select=!0:T.select=!1}),B()},B=async()=>{P.value=[],setTimeout(()=>{P.value=W.value.filter(x=>{let T=!1;w.other?w.other==="China"||w.other==="Other"||w.other==="Jan"?T=x.country===w.other:w.other==="new"?T=x.isnew:w.other==="collect"?T=x.iscollect:w.other==="yes"?T=x.ishorse:w.other==="no"?T=!x.ishorse:w.other==="god"?T=x.filename.toLowerCase().indexOf("oae")!==-1||x.filename.toLowerCase().indexOf("rebdb")!==-1:w.other==="del"?T=x.isdel:w.other==="havecover"?T=!!x.cover:w.other==="nocover"?T=!x.cover:w.other==="author"?T=!!x.author:w.other==="noauthor"?T=!x.author:T=!1:T=!0;let S=!1;w.author?S=x.author===w.author:S=!0;let $=!1;return w.keyword?$=x.filename.toLowerCase().indexOf(w.keyword.toLowerCase())!==-1||x.author&&x.author.toLowerCase().indexOf(w.keyword.toLowerCase())!==-1:$=!0,T&&S&&$})},200)},L=An({}),P=An([]),W=An([]),h=()=>{W.value=[],P.value=[],K.authorData=[{text:"",img:"",select:!0}],ae(),w.keyword="",ue(""),k("")},c=An([]),q=async()=>{const x=await pt.getItem("fileDirectoryHandles");x&&(c.value=x)},Y=async()=>{const x=await window.showDirectoryPicker({id:"1",startIn:"desktop",mode:"readwrite"});if(x.name!=="A")return qe.error("Non-destination file directory."),!1;let T=!1;if(c.value&&c.value.length){for(let S=0,$=c.value.length;S<$;S++)if(await c.value[S].isSameEntry(x)){T=!0;break}}T?qe.error("You had add this file directory."):(c.value.push(x),await pt.setItem("fileDirectoryHandles",[...c.value]))},z=async x=>{const T={mode:"readwrite"};if(await x.queryPermission(T)!=="granted"&&await x.requestPermission(T)!=="granted")return!1;try{const $=await xa(x),ie=Ea($),le=va($);return{fileMap:ie,movieData:le}}catch($){return console.error($),console.log(x),qe.error(`The directory /${x.name} could not be found.`),null}},F=async x=>{if(x&&x.length){const T=[];for(let le=0,Oe=x.length;le<Oe;le++){const ge=await z(x[le]);ge&&T.push(ge)}if(T.length<x.length)return!1;h(),I.value=!0;const S={},$=[],ie=[];for(let le=0,Oe=T.length;le<Oe;le++){Object.assign(S,T[le].fileMap);for(let ge=0,Ue=T[le].movieData.length;ge<Ue;ge++)$.push(T[le].movieData[ge])}for(let le=0,Oe=$.length;le<Oe;le++){const ge=$[le].author,Ue=$[le].authorcover;if(ge){const ee=ie.find(we=>we.text===ge);ee?ee.count++:ie.push({count:1,text:ge,img:Ue,select:!1})}}console.log(S),console.log($),console.log(ie),L.value=S,W.value=$,K.authorData=[...K.authorData,...ie],B(),I.value=!1}else qe.error("Please add a file directory.")},J=async x=>{ya.confirm(`Will delete the file directory: / ${c.value[x].name}. Continue?`,"Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(async()=>{c.value.splice(x,1),h(),await pt.setItem("fileDirectoryHandles",[...c.value])}).catch(()=>{})},N=Rt({current:1,data:[{text:"0.5",select:!1},{text:"1",select:!0},{text:"1.5",select:!1},{text:"1.75",select:!1},{text:"2",select:!1},{text:"3",select:!1},{text:"4",select:!1},{text:"6",select:!1},{text:"8",select:!1},{text:"10",select:!1},{text:"12",select:!1},{text:"14",select:!1},{text:"16",select:!1}]}),ne=async x=>{x=Number(x),N.data.forEach(T=>{Number(T.text)===x?T.select=!0:T.select=!1}),N.current=x,Z&&Z.speed(x),await pt.setItem("speed",x)},G=async()=>{const x=await pt.getItem("speed");ne(x||N.current)},C=An({data:null,file:null,lasttime:"",duration:"",size:"",sizename:"",resolution:""});let Z=null;const ae=()=>{Z&&Z.destroy(),Z=null,C.value.data=null,C.value.file=null,C.value.lasttime="",C.value.duration="",C.value.size="",C.value.sizename="",C.value.resolution=""},pe=async x=>{if(x&&x.handle){I.value=!0;const T=await aa(x.handle);if(T&&T.url)ae(),C.value.data=x,C.value.file=T.file,C.value.size=T.file.size,C.value.sizename=Ie(C.value.size),C.value.lasttime=Eo(T.file.lastModified).format("YYYY-MM-DD HH:mm:ss"),Z=new Mo({container:document.getElementById("dplayer"),hotkey:!1,preventClickToggle:!0,screenshot:!0,playbackSpeed:[.5,.75,1,1.25,1.5,2,3,4,6,8],video:{url:T.url}}),Z.speed(N.current),Z.play(),setTimeout(()=>{C.value.duration=Le(Z.video.duration||0),Z.video.videoWidth&&Z.video.videoHeight&&(C.value.resolution=`${Z.video.videoWidth}*${Z.video.videoHeight}`)},2e3);else{console.log(x),qe.error(`${x.filename} could not be found.`);const S=W.value.findIndex($=>$.filename===x.filename);S!==-1&&(W.value.splice(S,1),B())}I.value=!1}else console.log(x),qe.error(`${x.filename} could not be found.`)},xe=async()=>{if(C.value.data){const x=P.value.findIndex(T=>T.filename===C.value.data.filename);x!==-1&&P.value[x-1]?pe(P.value[x-1]):qe.error("Prev one do not exist.")}else qe.error("Prev one do not exist.")},re=async()=>{if(C.value.data){const x=P.value.findIndex(T=>T.filename===C.value.data.filename);x!==-1&&P.value[x+1]?pe(P.value[x+1]):qe.error("Next one do not exist.")}else qe.error("Next one do not exist.")},Le=x=>{x=Math.floor(x);let T=0,S=0,$=0;x>3600&&(T=Math.floor(x/3600));const ie=x-T*3600;return ie>60&&(S=Math.floor(ie/60)),$=ie-S*60,`${T<10?"0"+T:T}:${S<10?"0"+S:S}:${$<10?"0"+$:$}`},Ie=x=>{x=Math.floor(x);let T=0,S=0,$=1024*1024*1024,ie=1024*1024;x>$&&(T=Math.floor(x/$));const le=x-T*$;return le>ie&&(S=Math.ceil(le/ie)),`${T>0?T+"G":""}${S>0?S+"M":""}`},ze=async()=>{try{await ya.confirm(`Will delete the Movie: / ${C.value.data.filename}. Continue?`,"Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"});const x=C.value.data,T=x.id,S=P.value.findIndex(ie=>ie.filename===x.filename),$=L.value[T];if(T&&$){I.value=!0,ae();const ie=await ha($);if(ie)qe.error(ie);else{qe.success("File del success.");const le=W.value.findIndex(Oe=>Oe.id===T);le!==-1&&W.value.splice(le,1),delete L.value[T],B(),setTimeout(()=>{P.value[le]&&pe(P.value[le])},1e3)}I.value=!1}else qe.error("File does not exist.")}catch{}},be=Rt({flag:!1,list:[]}),Ge=async()=>{var x;if(be.list=[],be.flag=!be.flag,!be.flag)return!1;for(const T in L.value){const S=L.value[T];if(S.parent){if(S.kind==="file")!ta(S)&&!jt(S)?be.list.push({iscandel:!0,file:S,pathname:S.path.join("/"),typename:"file other"}):ta(S)?be.list.push({iscandel:!0,file:S,pathname:S.path.join("/"),typename:"file movie"}):jt(S)&&be.list.push({iscandel:!0,file:S,pathname:S.path.join("/"),typename:"file image"});else if(S.kind==="directory")if(console.log(S.path),((x=S==null?void 0:S.children)==null?void 0:x.length)===0)be.list.push({iscandel:S.path.length!==2,file:S,pathname:S.path.join("/"),typename:"directory space"});else{const $=S.children.every(le=>!ta(le)),ie=S.children.every(le=>le.kind!=="directory");$&&ie&&be.list.push({iscandel:S.path.length!==2,file:S,pathname:S.path.join("/"),typename:"directory movieless"})}}}console.log(be.list)},en=async(x,T)=>{I.value=!0;const S=await ha(T.file);S?qe.error(S):(be.list.splice(x,1),delete L.value[T.file.id]),I.value=!1};return po(async()=>{q(),G(),window.addEventListener("keydown",x=>{if(console.log(x.keyCode),de.value)return!1;if(Z)if(x.keyCode===32)Z.toggle();else if(x.keyCode===39){const T=Z.video.currentTime+5;Z.seek(T>Z.video.duration?Z.video.duration:T)}else if(x.keyCode===37){const T=Z.video.currentTime-5;Z.seek(T<0?0:T)}else x.keyCode===38?xe():x.keyCode===40?re():x.keyCode===70?Z.fullScreen.toggle():x.keyCode===97?ne(1):x.keyCode===98?ne(2):x.keyCode===99?ne(3):x.keyCode===100?ne(4):x.keyCode===101?ne(5):x.keyCode===102?ne(6):x.keyCode===103?ne(7):x.keyCode===104?ne(8):x.keyCode===105&&ne(9);x.keyCode===82&&h()},!1)}),(x,T)=>{const S=kn("el-input"),$=kn("el-button"),ie=kn("el-image"),le=kn("el-table-column"),Oe=kn("el-table"),ge=kn("el-tag"),Ue=co("loading");return Aa((ve(),Ne("div",Yo,[Ae("div",Fo,[Ae("div",Uo,[Ae("div",Wo,[Ae("div",Ho,[Qo,Ae("div",Ko,[Te(S,{modelValue:w.keyword,"onUpdate:modelValue":T[0]||(T[0]=ee=>w.keyword=ee),style:{width:"150px"},placeholder:"search keyword",onChange:T[1]||(T[1]=ee=>B()),onBlur:T[2]||(T[2]=ee=>de.value=!1),onFocus:T[3]||(T[3]=ee=>de.value=!0)},null,8,["modelValue"])])]),Ae("div",Vo,[Zo,Ae("div",Xo,[(ve(!0),Ne(Bn,null,Sn(K.authorData,(ee,we)=>(ve(),Ye($,{type:"danger",size:"small",plain:!ee.select,round:"",key:we,onClick:Pe=>ue(ee.text)},{default:Ee(()=>[Be(_e(ee.text||"all")+" ",1),ee.count?(ve(),Ne("span",Jo,"("+_e(ee.count)+")",1)):Ve("",!0)]),_:2},1032,["plain","onClick"]))),128))])]),Ae("div",$o,[Go,Ae("div",ei,[(ve(!0),Ne(Bn,null,Sn(K.otherData,(ee,we)=>(ve(),Ye($,{type:"danger",size:"small",plain:!ee.select,round:"",key:we,onClick:Pe=>k(ee.text)},{default:Ee(()=>[Be(_e(ee.text||"all"),1)]),_:2},1032,["plain","onClick"]))),128))])]),Ae("div",ni,[ti,Ae("div",ai,[Te($,{type:"danger",size:"small",round:""},{default:Ee(()=>[Be(_e(P.value.length),1)]),_:1})])])]),Ae("div",ri,[(ve(!0),Ne(Bn,null,Sn(P.value,(ee,we)=>(ve(),Ne("div",{class:"list-item",key:we,onClick:Pe=>pe(ee)},[Ae("div",ii,[Te(ie,{style:{width:"350px",height:"235px"},src:ee.cover||ee.authorcover,fit:"cover"},null,8,["src"])]),Ae("div",li,[Ae("div",si,_e(ee.filename),1),Ae("div",di,"["+_e(ee.author||"unknown")+"] ["+_e(ee.code||"unknown")+"]",1)])],8,oi))),128))])])]),Ae("div",pi,[Ae("div",ci,[Ae("div",ui,[c.value.length?(ve(),Ye($,{key:0,icon:Fe(fa),type:"danger",round:"",onClick:T[4]||(T[4]=ee=>F(c.value))},{default:Ee(()=>[Be(" / All ")]),_:1},8,["icon"])):Ve("",!0),(ve(!0),Ne(Bn,null,Sn(c.value,ee=>(ve(),Ye($,{type:"danger",size:"small",plain:"",round:"",icon:Fe(fa),onClick:we=>F([ee])},{default:Ee(()=>[Be(" / "+_e(ee.name),1)]),_:2},1032,["icon","onClick"]))),256))]),W.value.length?(ve(),Ne("div",Ai,[Te($,{icon:Fe(Ao),size:"small",type:"danger",round:"",onClick:h},{default:Ee(()=>[Be(" R ")]),_:1},8,["icon"]),Te($,{icon:Fe(yo),size:"small",type:"danger",round:"",onClick:Ge},{default:Ee(()=>[Be(" FM ")]),_:1},8,["icon"])])):Ve("",!0),Ae("div",yi,[(ve(!0),Ne(Bn,null,Sn(c.value,(ee,we)=>(ve(),Ye($,{type:"danger",size:"small",plain:"",round:"",icon:Fe(na),key:we,onClick:Pe=>J(we)},{default:Ee(()=>[Be(" / "+_e(ee.name),1)]),_:2},1032,["icon","onClick"]))),128)),Te($,{type:"danger",icon:Fe(fo),round:"",onClick:Y},{default:Ee(()=>[Be("Add")]),_:1},8,["icon"])])]),be.flag?(ve(),Ye(Oe,{key:0,data:be.list,"max-height":"90vh",stripe:"",size:"small",style:{width:"100%",margin:"12px 0"}},{default:Ee(()=>[Te(le,{prop:"pathname",label:"pathname","min-width":"200"}),Te(le,{prop:"typename",label:"typename",width:"150"}),Te(le,{fixed:"right",label:"operation",width:"80",align:"center"},{default:Ee(ee=>[ee.row.iscandel?(ve(),Ye($,{key:0,type:"danger",plain:"",round:"",icon:Fe(na),size:"small",onClick:we=>en(ee.$index,ee.row)},null,8,["icon","onClick"])):Ve("",!0)]),_:1})]),_:1},8,["data"])):Ve("",!0),Aa(Ae("div",fi,[Ae("div",mi,[hi,Ae("div",bi,[(ve(!0),Ne(Bn,null,Sn(N.data,(ee,we)=>(ve(),Ye($,{type:"danger",size:"small",plain:!ee.select,round:"",key:we,onClick:Pe=>ne(ee.text)},{default:Ee(()=>[Be(_e(ee.text),1)]),_:2},1032,["plain","onClick"]))),128))])]),C.value.data?(ve(),Ne("div",gi,[Te($,{type:"danger",size:"small",icon:Fe(mo),round:"",onClick:xe},null,8,["icon"]),Ae("div",vi,[Te($,{type:"danger",size:"small",icon:Fe(ho),round:"",onClick:T[5]||(T[5]=()=>{})},{default:Ee(()=>[Be("UC")]),_:1},8,["icon"]),Te($,{type:"danger",size:"",icon:Fe(bo),round:"",onClick:ae},{default:Ee(()=>[Be("Stop")]),_:1},8,["icon"]),Te($,{type:"danger",size:"small",icon:Fe(na),round:"",onClick:ze},{default:Ee(()=>[Be("DM")]),_:1},8,["icon"])]),Te($,{type:"danger",size:"small",icon:Fe(go),round:"",onClick:re},null,8,["icon"])])):Ve("",!0),C.value.data?(ve(),Ne("div",xi,[Ae("div",Ei,_e(C.value.data.path.join("/")),1),Ae("div",wi,[Te(ge,{type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Be(_e(C.value.data.author||"unknown"),1)]),_:1}),Te(ge,{type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Be(_e(C.value.data.code||"unknown"),1)]),_:1}),C.value.duration?(ve(),Ye(ge,{key:0,type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Be(_e(C.value.duration),1)]),_:1})):Ve("",!0),C.value.sizename?(ve(),Ye(ge,{key:1,type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Be(_e(C.value.sizename),1)]),_:1})):Ve("",!0),C.value.resolution?(ve(),Ye(ge,{key:2,type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Be(_e(C.value.resolution),1)]),_:1})):Ve("",!0),C.value.lasttime?(ve(),Ye(ge,{key:3,type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Be("lastModified: "+_e(C.value.lasttime),1)]),_:1})):Ve("",!0),Te(ge,{type:"danger",effect:"plain",size:"small",round:""},{default:Ee(()=>[Be(_e(C.value.data.cover?"havecover":"nocover"),1)]),_:1})])])):Ve("",!0),Ci],512),[[uo,!be.flag]])])])),[[Ue,I.value]])}}},Ii=wo(ki,[["__scopeId","data-v-a6c94670"]]);export{Ii as default};

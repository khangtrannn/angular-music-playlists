import{A as n,B as o,C as d,F as E,G as D,H as M,I as k,K as w,N as H,O as A,b as T,d as b,e as v,f as m,g,h as y,j as _,k as f,n as z,q as C,r as S,t as P,u as V}from"./chunk-FVCMUESX.js";import{d as l,e as h,f as u}from"./chunk-ECLQBL7H.js";var L=[{id:"1",title:"Saxophone House",description:"Most popular R&B playlist on Spotify since 2013 | Updated weekly | Good vibes only | Photo by Atikh Bana",user:{avatar:"/khangtrann.jpeg",name:"Khang Tran",date:"March 2023"},stats:{count:"9,838",time:"5h 22m"},backgroundColor:"black",textColor:"white",secondaryTextColor:"rgb(195, 195, 195)",media:{type:"image",url:"/sax-player.webp",width:"275",height:"360"}},{id:"2",title:"Feel-Good Indie Rock",description:"The best indie rock vibes \u2014 classic and current. Headphones on | Video by Anna Shvets on pexels.com",user:{avatar:"/user-avatar-2.webp",name:"Jessica Houston",date:"February 2023"},stats:{count:"12,502",time:"4h 18m"},backgroundColor:"#ebd9ea",backgroundImage:"/pink-card-bg.png",textColor:"#8b689c",secondaryTextColor:"#ab91b8",media:{type:"video",url:"/dancing-woman-2.mp4",width:"600",height:"427"}},{id:"3",title:"Peaceful Guitar",description:"Unwind to these calm classical guitar pieces. Photo by Te NGuyen on Unsplash",user:{avatar:"/user-avatar-3.webp",name:"David Hickman",date:"December 2022"},stats:{count:"8,908",time:"6h 40m"},backgroundAnimation:"none",backgroundColor:"#6d75ff",textColor:"white",secondaryTextColor:"rgb(225, 225, 225)",media:{type:"image",url:"/guitar-player.webp",width:"414",height:"360"}}];var B=(()=>{var e,r,a;let t=class t{constructor(){h(this,e,void 0);h(this,r,void 0);h(this,a,void 0);u(this,e,C(void 0)),u(this,r,C(void 0)),u(this,a,C(new Map)),this.prevPageScroll=l(this,e).asReadonly(),this.activePlaylist=l(this,r).asReadonly(),this.persistElement=l(this,a).asReadonly()}setActivePlaylist(s){l(this,r).set(s)}setPrevPageScroll(s){l(this,e).set(s)}setPersistElement(s,c){l(this,a).update(p=>(p.set(s,c),p))}};e=new WeakMap,r=new WeakMap,a=new WeakMap,t.\u0275fac=function(c){return new(c||t)},t.\u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var N=(()=>{let e=class e{constructor(){this.stats=y.required()}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=v({type:e,selectors:[["app-card-stats"]],inputs:{stats:[1,"stats"]},standalone:!0,features:[w],decls:13,vars:2,consts:[[1,"card-stats","playlist-stats"],[1,"stat"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"w-6","h-6"],["d","M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"],["fill-rule","evenodd","d","M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z","clip-rule","evenodd"]],template:function(t,x){t&1&&(n(0,"div",0)(1,"div",1),m(),n(2,"svg",2),d(3,"path",3),o(),g(),n(4,"span"),M(5),o()(),n(6,"span"),M(7,"-"),o(),n(8,"div",1),m(),n(9,"svg",2),d(10,"path",4),o(),g(),n(11,"span"),M(12),o()()()),t&2&&(f(5),k(x.stats().count),f(7),k(x.stats().time))},styles:[".card-stats[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:8px;font-size:13px;color:var(--secondaryTextColor);margin:10px 0;position:relative}.card-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]{display:flex;gap:4px}.card-stats[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}"],changeDetection:0});let i=e;return i})();var $=(()=>{let e=class e{constructor(){this.showExtraButtons=y(!1)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=v({type:e,selectors:[["app-player-controls"]],inputs:{showExtraButtons:[1,"showExtraButtons"]},standalone:!0,features:[w],decls:17,vars:2,consts:[[1,"player-controls-container"],[1,"player-controls","playlist-controls"],[1,"control","small-control","extra-control"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"w-6","h-6"],["fill-rule","evenodd","d","M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z","clip-rule","evenodd"],[1,"control","small-control"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"],[1,"control","big-control"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor"],["fill-rule","evenodd","d","M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z","clip-rule","evenodd"],["d","M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"],["fill-rule","evenodd","d","M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z","clip-rule","evenodd"]],template:function(t,x){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),m(),n(3,"svg",3),d(4,"path",4),o()(),g(),n(5,"div",5),m(),n(6,"svg",6),d(7,"path",7),o()(),g(),n(8,"div",8),m(),n(9,"svg",9),d(10,"path",10),o()(),g(),n(11,"div",5),m(),n(12,"svg",3),d(13,"path",11),o()(),g(),n(14,"div",2),m(),n(15,"svg",3),d(16,"path",12),o()()()()),t&2&&V("--visibility",x.showExtraButtons()?"visible":"hidden")},styles:["[_nghost-%COMP%]{display:block}.player-controls-container[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;z-index:2;display:flex;justify-content:center;align-items:center}.player-controls-container[_ngcontent-%COMP%]   .player-controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:28px 0;gap:20px}.player-controls-container[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{border-radius:50%;display:flex;justify-content:center;align-items:center}.player-controls-container[_ngcontent-%COMP%]   .big-control[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:50%;background:#fff}.player-controls-container[_ngcontent-%COMP%]   .big-control[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:28px;height:28px;color:#000}.player-controls-container[_ngcontent-%COMP%]   .small-control[_ngcontent-%COMP%]{width:46px;height:46px;background:#000c}.player-controls-container[_ngcontent-%COMP%]   .small-control[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px;color:#fff}.player-controls-container[_ngcontent-%COMP%]   .extra-control[_ngcontent-%COMP%]{visibility:var(--visibility)}"],changeDetection:0});let i=e;return i})();var G=["container"],j=["video"],oe=(()=>{var e,r,a;let t=class t{constructor(){h(this,e,void 0);h(this,r,void 0);h(this,a,void 0);this.media=y.required(),this.container=S("container"),this.video=S("video"),u(this,e,b(B)),u(this,r,b(z)),u(this,a,A(()=>{let s=H(l(this,e).persistElement).get(this.media().url);s?(l(this,r).removeChild(this.container()?.nativeElement,this.video()?.nativeElement),l(this,r).appendChild(this.container()?.nativeElement,s)):l(this,e).setPersistElement(this.media().url,this.video().nativeElement)},{allowSignalWrites:!0}))}};e=new WeakMap,r=new WeakMap,a=new WeakMap,t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=v({type:t,selectors:[["app-background-video"]],viewQuery:function(c,p){c&1&&(E(p.container,G,5),E(p.video,j,5)),c&2&&D(2)},inputs:{media:[1,"media"]},standalone:!0,features:[w],decls:5,vars:3,consts:[["container",""],["video",""],["data-persist-container","true"],["loop","","muted","","autoplay","","playsinline","","data-persist","true",1,"playlist-image",3,"width","height"],["type","video/mp4",3,"src"]],template:function(c,p){c&1&&(n(0,"div",2,0)(2,"video",3,1),d(4,"source",4),o()()),c&2&&(f(2),P("width",p.media().width)("height",p.media().height),f(2),P("src",p.media().url,_))},styles:["video.playlist-image[_ngcontent-%COMP%]{display:block;max-width:100%;border-radius:0 0 2rem 2rem;min-height:418px;object-fit:cover;clip-path:inset(1px 1px);margin-bottom:-1px}"],changeDetection:0});let i=t;return i})();export{L as a,B as b,$ as c,oe as d,N as e};

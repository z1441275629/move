/* Built with Hydra */(function(){function f(){return function(){}}var g,i=this;Math.floor(Math.random()*2147483648).toString(36);function k(a,b){var c=b||i;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}}function l(a,b){function c(){}c.prototype=b.prototype;a.P=b.prototype;a.prototype=new c};var m,aa,n;var o=Math.random;function p(a,b,c,d){return b+(c-b)*(a/d)}function da(a,b,c,d){a/=d;return(c-b)*a*a+b};function ea(a,b){var c=a.indexOf(b);if(c>=0){a.splice(c,1);return true}else return false}function q(a,b){a[a.length]=b};function r(a){var b=document.createElement("div");b.className=a;return b}function s(a){var b=document.createElement("div");b.innerHTML=a;if(b.childElementCount==1)b=b.firstElementChild;return b};var fa,ga,ha,u,ia,v,w;function x(a){ja.call(this);this.element=a||document.createElement("div");this.y=this.x=0;this.B=this.L=1;this.rotation=0}l(x,ja);x.prototype.detach=function(){if(this.parent){if(ea(this.parent.o,this)){this.parent=null;this.detach()}}else this.element.parentNode&&this.element.parentNode.removeChild(this.element)};x.prototype.j=function(){x.P.j.call(this);this.detach();this.element=null};function ka(a,b){a.x=b;y(a)}function z(a,b){a.y=b;y(a)}
function A(a,b,c){a.x=b;a.y=c;y(a)}function la(a,b){a.L=b;a.B=b;y(a)}function y(a){a.element.style.setProperty("-moz-transform","translate("+a.x+"px,"+a.y+"px)rotate("+a.rotation+"deg)scale("+a.L+","+a.B+")","")}function B(a){x.call(this,a);this.o=[]}l(B,x);B.prototype.r=function(a){B.P.r.call(this,a);for(var b=0;b<this.o.length;++b)C(a,this.o[b],null)};B.prototype.j=function(){B.P.j.call(this);for(var a=0;a<this.o.length;++a){var b=this.o[a];b.parent=null;b.j()}};
function D(a,b){if(a.g!=null&&b.g==null)C(a.g,b,a);else{if(b.parent!=null)if(ea(b.parent.o,b)){b.parent=null;b.detach()}q(a.o,b);b.parent=a;a.element.appendChild(b.element)}}function E(a,b,c){this.duration=1E3*a;this.ia=b;this.xa=c;this.l=0}g=E.prototype;g.z=f();g.t=f();function F(a,b,c){return a.ia(a.l,b,c,a.duration)}g.update=function(a,b){b=this.xa||b;this.l||this.t(b);this.l+=a;if(this.l>this.duration)this.l=this.duration;this.z(b);if(this.l>=this.duration){this.l=0;return true}else return false};
g.stop=f();g.start=f();function G(a,b,c,d,e){E.call(this,c,d,e);this.T=a;this.value=parseFloat(b)}l(G,E);G.prototype.t=function(a){a=window.getComputedStyle(a.element,null);this.ga=parseFloat(a.getPropertyValue(this.T))};G.prototype.z=function(a){a.element.style.setProperty(this.T,F(this,this.ga,this.value),"")};function H(a,b,c,d,e){E.call(this,c,d,e);this.x=a;this.y=b}l(H,E);H.prototype.t=function(a){this.v=a.x;this.w=a.y};H.prototype.z=function(a){A(a,F(this,this.v,this.x),F(this,this.w,this.y))};
function ma(a,b,c,d,e){E.call(this,c,d,e);this.x=a;this.y=b}l(ma,E);ma.prototype.t=function(a){this.v=a.x;this.w=a.y};ma.prototype.z=function(a){A(a,F(this,this.v,this.v+this.x),F(this,this.w,this.w+this.y))};function na(a,b,c,d){E.call(this,b,c,d);this.rotation=a}l(na,E);na.prototype.t=function(a){this.V=a.rotation};na.prototype.z=function(a){var b=F(this,this.V,this.V+this.rotation);a.rotation=b;y(a)};function oa(a,b,c,d,e){E.call(this,c,d,e);this.x=a;this.y=b}l(oa,E);
oa.prototype.t=function(a){this.v=a.L;this.w=a.B};oa.prototype.z=function(a){var b=F(this,this.v,this.x),c=F(this,this.w,this.y);a.L=b;a.B=c;y(a)};w=function(a,b,c,d){return new G(a,b,c,p,d)};v=function(a,b,c,d){return new H(a,b,c,p,d)};ia=function(a,b,c,d){return new H(a,b,c,da,d)};u=function(a,b,c,d){return new H(a,b,c,p,d)};ha=function(a,b,c,d){return new ma(a,b,c,p,d)};ga=function(a,b,c){return new na(a,b,p,c)};fa=function(a,b,c,d){return new oa(a,b,c,da,d)};function pa(){this.A={}}pa.prototype.addEventListener=function(a,b){var c=this.A[a];if(c==null)this.A[a]=[b];else q(c,b)};pa.prototype.removeEventListener=function(a,b){var c=this.A[a];c!=null&&ea(c,b)};pa.prototype.dispatchEvent=function(a){var b=this.A[a];if(b!=null){var c=Array.prototype.slice.apply(arguments);c.shift();for(var d=0;d<b.length;++d)b[d].apply(undefined,c)}};function qa(){this.H=[]}qa.prototype.e=function(a,b,c){q(this.H,new ra(a,b,c));a.addEventListener(b,c,false)};
qa.prototype.C=function(){for(var a=0;a<this.H.length;++a){var b=this.H[a];b.da.removeEventListener(b.ea,b.ha,false)}this.H=[]};function ra(a,b,c){this.da=a;this.ea=b;this.ha=c};var I=[],sa=document.getElementById("hydra-stage");function ta(a){if(a!=m){m&&m.u();for(var b=I.length-1;b>=0;--b){var c=I[b];if(a!=c){--I.length;ua(c)}else{m=c;a.p();return}}I=[a];m=a;a.load();a.p()}}function J(){if(I.length>1){var a=I.pop();a.u();ua(a);m=I[I.length-1];m.p()}}function K(a){m&&m.u();q(I,a);m=a;a.load();a.p()}function va(a){m.update(a-aa);aa=a;window.mozRequestAnimationFrame(va)}function ja(){this.a=[];this.g=null}g=ja.prototype;
g.e=function(a,b,c){if(!this.G)this.G=new qa;this.G.e(a,b,c)};g.C=function(){this.G&&this.G.C()};g.c=function(a){this.a.length==0&&this.g!=null&&q(this.g.q,this);q(this.a,a);a.start(this)};g.K=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];if(b){b.stop(this);this.a[a]=null}}};g.r=function(a){this.g=a;this.a.length>0&&q(this.g.q,this)};g.update=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];if(!c||c.update(a,this))this.a.splice(b--,1)}return b==0};
g.j=function(){this.K();this.C();if(this.g!=null){ea(this.g.entities,this);this.g=null}};g.p=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];b&&b.start(this)}};g.u=function(){for(var a=0;a<this.a.length;++a){var b=this.a[a];b&&b.stop(this)}};function L(a){this.entities=[];this.q=[];this.name=a;this.d=new B(r("scene scene-"+a));C(this,this.d,sa)}g=L.prototype;g.update=function(a){for(var b=0;b<this.q.length;++b){var c=this.q[b];if(!c||c.update(a))this.q.splice(b--,1)}};
function C(a,b,c){if(!b.g){q(a.entities,b);b.r(a);if(b instanceof x)if(c instanceof HTMLElement)c.appendChild(b.element);else if(c!==null){c=c||a.d;D(c,b)}}}g.load=f();function ua(a){for(var b=0;b<a.entities.length;++b){var c=a.entities[b];if(c.g!=null){c.g=null;c.j()}}a.entities=[];a.q=[]}g.p=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].p()};g.u=function(){for(var a=0;a<this.entities.length;++a)this.entities[a].u()};g.e=function(a,b,c){this.d.e(a,b,c)};g.C=function(){this.d.C()};
g.c=function(a){this.d.c(a)};g.K=function(){this.d.K()};function P(a){this.fa=a}P.prototype.start=f();P.prototype.stop=f();P.prototype.update=function(a,b){this.fa(a,b);return true};function Q(a){this.U=1E3*a;this.l=0}Q.prototype.start=f();Q.prototype.stop=f();Q.prototype.update=function(a){this.l+=a;if(this.l>=this.U){this.l=0;return true}else return false};function R(a){this.a=a;this.D=[]}R.prototype.stop=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];c&&c.stop(a)}};
R.prototype.start=function(a){for(var b=0;b<this.a.length;++b){var c=this.a[b];c&&c.start(a)}};R.prototype.update=function(a,b){for(var c=0;c<this.a.length;++c){var d=this.a[c];if(d&&d.update(a,b)){this.a[c]=null;q(this.D,d)}}if(this.D.length==this.a.length){this.a=this.D;this.D=[];return true}else return false};function S(a){this.Q=a}S.prototype.stop=function(a){this.Q.stop(a)};S.prototype.start=function(a){this.Q.start(a)};S.prototype.update=function(a,b){this.Q.update(a,b);return false};
function T(){}T.prototype.start=f();T.prototype.stop=f();T.prototype.update=function(a,b){b.j();return true};function U(a){this.a=a;this.n=0}U.prototype.stop=function(a){this.n<this.a.length&&this.a[this.n].stop(a)};U.prototype.start=function(a){this.n<this.a.length&&this.a[this.n].start(a)};U.prototype.update=function(a,b){if(this.a[this.n].update(a,b))if(++this.n<this.a.length){this.a[this.n].start(b);return false}else{this.n=0;return true}else return false};function wa(a){if(a&&window._admob){a.textContent="";_admob.fetchAd(a)}}function xa(a,b){if(navigator.onLine!==false){window.admob_vars={pubid:a,bgcolor:"000000",text:"FFFFFF",ama:false,test:false,manual_mode:true,new_window:true};var c=document.createElement("script");c.src="http://mmv.admob.com/static/iphone/iadmob.js";c.onload=function(){wa(b)};document.body.appendChild(c)}};function V(a){x.call(this,a);this.za=false;a=this.element;if(a.className)a.classList.add("button");else a.className="button";this.e(this.element,"touchstart",this);this.e(this.element,"touchend",this);this.e(this.element,"touchcancel",this)}l(V,x);V.prototype.m=f();
V.prototype.handleEvent=function(a){if(m==this.g)switch(a.type){case "touchstart":var b=this.element;if(b.className)b.classList.add("button-down");else b.className="button-down";break;case "touchend":case "touchcancel":if(!a.targetTouches.length){this.element.classList.remove("button-down");this.m()}}a.stopPropagation()};function ya(){L.call(this,"orientation")}l(ya,L);ya.prototype.load=function(){this.d.element.appendChild(s("Rotate your device to play!"));this.e(window,"orientationchange",function(){document.body.offsetWidth>320&&document.body.offsetHeight<416||J()})};function za(a,b){if(b)return a.replace(Aa,"&amp;").replace(Ba,"&lt;").replace(Ca,"&gt;").replace(Da,"&quot;");else{if(!Ea.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(Aa,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(Ba,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(Ca,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(Da,"&quot;");return a}}var Aa=/&/g,Ba=/</g,Ca=/>/g,Da=/\"/g,Ea=/[&<>\"]/;
function Fa(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),j=Math.max(d.length,e.length),h=0;c==0&&h<j;h++){var t=d[h]||"",M=e[h]||"",N=RegExp("(\\d*)(\\D*)","g"),ba=RegExp("(\\d*)(\\D*)","g");do{var O=N.exec(t)||["","",""],ca=ba.exec(M)||["","",""];if(O[0].length==0&&ca[0].length==0)break;c=Ga(O[1].length==0?0:parseInt(O[1],10),ca[1].length==0?0:parseInt(ca[1],10))||Ga(O[2].length==0,ca[2].length==0)||Ga(O[2],
ca[2])}while(c==0)}return c}function Ga(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var W,Ha,Ia,Ja;"ScriptEngine"in i&&i.ScriptEngine()=="JScript"&&(i.ScriptEngineMajorVersion(),i.ScriptEngineMinorVersion(),i.ScriptEngineBuildVersion());function Ka(){return i.navigator?i.navigator.userAgent:null}Ja=Ia=Ha=W=false;var La;if(La=Ka()){var Ma=i.navigator;W=La.indexOf("Opera")==0;Ha=!W&&La.indexOf("MSIE")!=-1;Ia=!W&&La.indexOf("WebKit")!=-1;Ja=!W&&!Ia&&Ma.product=="Gecko"}var Na=Ha,Oa=Ja,Pa=Ia,Qa;
a:{var Ra="",Sa;if(W&&i.opera){var Ta=i.opera.version;Ra=typeof Ta=="function"?Ta():Ta}else{if(Oa)Sa=/rv\:([^\);]+)(\)|;)/;else if(Na)Sa=/MSIE\s+([^\);]+)(\)|;)/;else if(Pa)Sa=/WebKit\/(\S+)/;if(Sa){var Ua=Sa.exec(Ka());Ra=Ua?Ua[1]:""}}if(Na){var Va,Wa=i.document;Va=Wa?Wa.documentMode:undefined;if(Va>parseFloat(Ra)){Qa=String(Va);break a}}Qa=Ra}var Xa={};!Na||Xa["9"]||(Xa["9"]=Fa(Qa,"9")>=0);Na&&(Xa["9"]||(Xa["9"]=Fa(Qa,"9")>=0));function Ya(a){return'<div class="label-gameover"><div>Score: <span class="stat">'+za(String(a.f))+'</span></div><div>Level: <span class="stat">'+za(String(a.h))+"</span></div><div>Judges say... "+(a.f<10?'<span class="rating0">Awful</span>':a.f<1E3?'<span class="rating1">Weak</span>':a.f<5E3?'<span class="rating2">OK</span>':a.f<12E3?'<span class="rating3">Good</span>':a.f<2E4?'<span class="rating4">Super</span>':a.f<3E4?'<span class="rating5">Marvellous</span>':'<span class="rating6">Blockstar</span>')+
"</div>"+(a.ja?'<div class="label-highscore">It\'s a new high score!</div>':"")+'</div><div class="button-replay button-big">Replay</div><div class="button-quit button-big">Main Menu</div>'}
function Za(a){var b='<div class="scoremenu">';a=a.wa;var c=a.length;if(c>0)for(var d=0;d<c;d++){var e=a[d];b+='<div class="'+(d==0?"label-highscore":"")+'">'+za(String(e.f))+" pts, "+za(String(e.ca))+"</div>"}else b+=" <div>No scores recorded yet!</div>";b+='<div class="button-back button-big">Back</div></div>';return b};function X(a,b){this.color=a;this.coords=b}var Y=[new X(1,[[-1,-1],[-1,0],[0,0],[0,-1]]),new X(6,[[-2,0],[-1,0],[0,0],[1,0]]),new X(2,[[0,-1],[1,-1],[0,0],[-1,0]]),new X(0,[[0,-1],[-1,-1],[0,0],[1,0]]),new X(4,[[-1,-1],[-1,0],[0,0],[1,0]]),new X(3,[[1,-1],[-1,0],[0,0],[1,0]]),new X(5,[[0,-1],[-1,0],[0,0],[1,0]])];
X.prototype.rotate=function(){if(this==Y[0])return null;else{for(var a=[],b=0;b<this.coords.length;++b){var c=this.coords[b];q(a,[-c[1],c[0]])}a=new X(this.color,a);a.x=this.x;a.y=this.y;return a}};function $a(){this.A={}}l($a,pa);function ab(a){a.k=[];a.Y=true;var b=o()*Y.length;a.N=Y[b|0];a.Z=0;a.f=0;a.h=1;a.dispatchEvent(7);a.dispatchEvent(6);bb(a)}
function cb(a){if(a.Y&&!db(a,0,1)){for(var b=0;b<a.b.coords.length;++b){var c=a.b.coords[b];a.k[(a.b.y+c[1])*10+(a.b.x+c[0])]=true}a.dispatchEvent(2,a.b);b=[];c=0;a:for(;c<a.b.coords.length;++c){var d=a.b.y+a.b.coords[c][1];if(!(b.indexOf(d)>=0)){for(var e=0;e<10;++e)if(!a.k[d*10+e])continue a;q(b,d)}}if(b.length){b.sort();for(c=0;c<b.length;++c)for(d=b[c];d>0;){for(e=0;e<10;++e)a.k[d*10+e]=a.k[(d-1)*10+e];--d}b.reverse();c=b.length;a.f+=a.h*[40,100,300,1200][c-1];a.Z+=c;c=1+(a.Z/4|0);if(c!=a.h){a.h=
c;a.dispatchEvent(7)}a.dispatchEvent(5,b);a.dispatchEvent(6)}bb(a)}}$a.prototype.rotate=function(){var a=this.b.rotate();if(a&&eb(this,a)){this.b=a;this.dispatchEvent(3,this.b)}};function fb(a){for(;eb(a,a.b);)a.b.y+=1;a.b.y-=1;a.dispatchEvent(1,a.b);cb(a)}function db(a,b,c){for(var d=a.b.x+b,e=a.b.y+c,j=0;j<a.b.coords.length;++j){var h=a.b.coords[j];if(d+h[0]<0||d+h[0]>=10||e+h[1]<0||e+h[1]>=20||a.k[(e+h[1])*10+(d+h[0])])return false}a.b.x=d;a.b.y=e;a.dispatchEvent(0,a.b,b,c);return true}
function eb(a,b){for(var c=0;c<b.coords.length;++c){var d=b.coords[c];if(b.x+d[0]<0||b.x+d[0]>=10||b.y+d[1]<0||b.y+d[1]>=20||a.k[(b.y+d[1])*10+(b.x+d[0])])return false}return true}function bb(a){a.b=a.N;a.b.x=5;a.b.y=2;var b=o()*Y.length;a.N=Y[b|0];if(eb(a,a.b))a.dispatchEvent(4,a.b,a.N);else{a.Y=false;a.dispatchEvent(8)}};function gb(a){var b=r("block");b.style.backgroundPosition=-Z*a+"px 0";return b};var $;function hb(){B.call(this);this.k=[];this.s=new B;D(this,this.s);this.e($,0,k(this.oa,this));this.e($,1,k(this.na,this));this.e($,4,k(this.J,this));this.e($,5,k(this.ra,this));this.e($,3,k(this.qa,this));this.e($,2,k(this.pa,this))}l(hb,B);var Z=20;g=hb.prototype;g.oa=function(a){A(this.s,Z*a.x,Z*a.y)};
g.na=function(){D(this,this.i);this.element.insertBefore(this.i.element,this.element.childNodes[0]);A(this.i,this.s.x,this.s.y);var a=this.i;a.B=10;y(a);this.i.element.style.opacity="0.2";this.i.c(ha(0,500,0.5));this.i.c(new U([w("opacity","0",0.5),new T]));this.i=null};g.qa=function(a){this.J(a);a=this.i;a.rotation=-90;y(a);this.i.c(ga(90,0.1))};g.pa=function(a){for(var b=0;b<a.coords.length;++b){var c=a.coords[b],d=new x(gb(a.color)),e=a.x+c[0];c=a.y+c[1];this.k[c*10+e]=d;A(d,e*Z,c*Z);D(this,d)}};
g.J=function(a){this.i&&this.i.j();this.i=new ib(a);A(this.s,a.x*Z,a.y*Z);D(this.s,this.i)};
g.ra=function(a){var b=[],c=new B;a.push(0);for(var d=[],e=0,j=a.length-1;e<j;++e){var h=a[e],t=new x(r("explosion"));A(t,0,h*Z);D(c,t);for(var M=0;M<10;++M)(t=this.k[h*10+M])&&q(b,t);h=h-1;if(h>a[e+1]){M=Math.sqrt(e+1)/4;do{for(var N=0;N<10;++N){this.k[10*(h+e+1)+N]=this.k[10*h+N];(t=this.k[10*h+N])&&q(d,ia(t.x,(h+e+1)*Z,M,t))}--h}while(h>a[e+1])}}c.element.style.opacity="0";D(this,c);this.c(new U([w("opacity","0.8",0.5,c),new P(function(){for(var ba=0,O=b.length;ba<O;++ba)b[ba].j();c.j()}),new R(d)]))};function jb(a,b){b=b||Date.now();var c=b-a;if(c<6E4)return"just now";if(c<12E4)return"one minute ago";if(c<36E5)return Math.round(c/6E4)+" minutes ago";if(c<54E5)return"one hour ago";if(c<864E5)return Math.round(c/36E5)+" hours ago";if(c<1728E5)return"yesterday";if(c<2592E6)return Math.round(c/864E5)+" days ago";if(c<3888E6)return"one month ago";if(c<31104E6)return Math.round(c/2592E6)+" months ago";if(c<62208E6)return"one year ago";return Math.round(c/31104E6)+" years ago"};function kb(a){L.call(this,"transition");this.X=a}l(kb,L);kb.prototype.load=function(){var a=this.X,b=0;if(b<0){b+=I.length;if(b<0)b=0}else if(b>I.length)b=I.length;if(m&&I[b]==m){m.u();m=a}I.splice(b,0,a);a.load();m==a&&a.p()};kb.prototype.complete=function(){ta(this.X)};function lb(a){L.call(this,"mainmenu");this.ba=a}l(lb,L);
lb.prototype.load=function(){var a=s('<div class="credits">by b_garcia <img src="static/twitter.png"></div><div class="ui-attract"></div>');this.d.element.appendChild(a);var b=new V(a.querySelector(".credits"));b.m=function(){window.top.location="http://twitter.com/b_garcia"};C(this,b,null);var c=new B;C(this,c,a.querySelector(".ui-attract"));c.c(new S(new U([new P(function(){var d;d=o()*Y.length;d=Y[d|0];if(d!=Y[0]){var e=0,j;for(j=o()*4+0|0;e<j;++e)d=d.rotate()}d=new ib(d);e=o()*320+0;A(d,e|0,450);
e=o()*4+1;la(d,2/e);d.c(new U([ha(0,-480,e),new T]));D(c,d)}),new Q(0.1)])));mb(this,false)};
function mb(a,b){var c=new B(s('<div class="mainmenu"><div class="button-play button-big">Play</div><div class="button-scores button-big">Scores</div></div>'));C(a,c);var d=c.element.offsetHeight;if(b||a.ba){z(c,-d);c.c(u(0,0,0.5))}var e=new V(c.element.querySelector(".button-play"));e.m=function(){var j=m,h=new nb;z(h.d,416);var t=new kb(h);q(t.q,j);t.c(new U([new R([v(0,-416,1,j.d),w("opacity","0.2",0.5,j.d),v(0,0,1,h.d)]),new P(function(){t.complete()})]));K(t)};e.r(a);e=new V(c.element.querySelector(".button-scores"));
e.m=function(){c.c(new U([u(0,-d,0.5),new P(function(){var j=c.g;c.j();ob(j)})]))};e.r(a)}function ob(a){var b;if("scores"in n){var c=Date.now();b=n.scores.map(function(j){return{f:j.score,ca:jb(j.date,c)}})}else b=[];var d=new B(s(Za({wa:b})));C(a,d);var e=d.element.offsetHeight;b=new V(d.element.querySelector(".button-back"));b.m=function(){d.c(new U([u(0,-e,0.5),new P(function(){var j=d.g;d.j();mb(j,true)})]))};b.r(a);z(d,-e);d.c(u(0,0,0.5))}
function pb(){var a=m,b=new lb(true);z(b.d,-416);var c=new kb(b);c.c(new U([new R([v(0,416,1,a.d),w("opacity","0.2",0.5,a.d),v(0,0,1,b.d)]),new P(function(){c.complete()})]));return c};function qb(){L.call(this,"pause")}l(qb,L);
qb.prototype.load=function(){var a=s('<div class="label-pause">PAUSED</div><div class="button-resume button-big">Continue</div><div class="button-quit button-big">Main Menu</div>');this.d.element.appendChild(a);A(this.d,-320,100);this.d.element.style.setProperty("opacity","0","");this.c(v(0,100,0.2));this.c(w("opacity","1",0.2));var b=this,c=new V(a.querySelector(".button-resume"));c.m=function(){b.c(new U([w("opacity","0",0.2),new P(J)]))};C(this,c,null);a=new V(a.querySelector(".button-quit"));
a.m=function(){J();K(pb())};C(this,a,null)};function rb(){B.call(this,r("marquee"));this.label=new x(r("marquee-text"));D(this,this.label);this.element.style.setProperty("opacity","0","")}l(rb,B);function sb(a,b){a.K();ka(a.label,200);a.label.element.innerHTML=b;setTimeout(function(){var c=a.label.element.offsetWidth;a.c(new U([w("opacity","1",0.5),v(-c,0,(c+200)/100,a.label),w("opacity","0",0.5)]))},0)};function tb(){L.call(this,"gameover")}l(tb,L);
tb.prototype.load=function(){n.lastGame=Date.now();wa(ub);var a=n.scores;a||(n.scores=a=[]);for(var b=0;b<a.length;++b)if(a[b].score<$.f)break;a.splice(b,0,{date:Date.now(),score:$.f});if(a.length>10)a.length=10;try{localStorage["hydra:tetris"]=JSON.stringify(n)||null}catch(c){}a=s(Ya({f:$.f,h:$.h,ja:b==0}));this.d.element.appendChild(a);A(this.d,320,100);this.d.element.style.setProperty("opacity","0","");this.c(v(0,100,0.2));this.c(w("opacity","1",0.2));b=new V(a.querySelector(".button-replay"));
b.m=function(){ta(new nb)};C(this,b,null);a=new V(a.querySelector(".button-quit"));a.m=function(){J();K(pb())};C(this,a,null)};function ib(a){x.call(this);for(var b=0;b<a.coords.length;++b){var c=a.coords[b],d=gb(a.color);d.style.left=c[0]*Z+"px";d.style.top=c[1]*Z+"px";this.element.appendChild(d)}}l(ib,x);function nb(){L.call(this,"playing")}l(nb,L);g=nb.prototype;
g.load=function(){var a=s('<div class="ui-board"></div><div class="ui-preview"></div><div class="ui-score"></div><div class="ui-level"></div><div class="button-pause"></div>');this.f=new x(a.querySelector(".ui-score"));C(this,this.f,null);this.ya=a.querySelector(".ui-preview");this.h=new x(a.querySelector(".ui-level"));C(this,this.h,null);this.d.element.appendChild(a);var b=new V(a.querySelector(".button-pause"));b.m=function(){K(new qb)};C(this,b,null);$=new $a;a=a.querySelector(".ui-board");this.I=
new rb;z(this.I,40);"lastGame"in n||sb(this.I,vb?"&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Welcome to Block Dream! &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; DRAG your finger to move. &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; TAP to rotate. &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; FLICK down to drop!":"&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Welcome to Block Dream! &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Use the arrow keys to move. &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; UP key to rotate. &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; DOWN key to drop!");
C(this,this.I,a);C(this,new hb,a);this.e($,8,k(this.ka,this));this.e($,4,k(this.J,this));this.e($,6,k(this.sa,this));this.e($,7,k(this.ma,this));this.e(window,"keydown",k(this.la,this));this.F=0;this.e(window,"touchstart",k(this.va,this));this.e(window,"touchmove",k(this.ua,this));this.e(window,"touchend",k(this.ta,this));this.$=new Q(1);this.c(new S(new U([this.$,new P(function(){cb($)})])));ab($)};g.ka=function(){K(new tb)};g.J=function(a,b){this.O&&this.O.j();this.O=new ib(b);C(this,this.O,this.ya)};
g.sa=function(){this.f.element.textContent=String($.f);if($.f>0){la(this.f,2);this.f.c(fa(1,1,1))}};g.ma=function(){this.$.U=1E3/$.h;this.h.element.textContent="LVL "+$.h;if($.h>1){sb(this.I,"Level "+za(String($.h)));la(this.h,2);this.h.c(fa(1,1,1))}};g.la=function(a){if(m==this){switch(a.keyCode){case 27:K(new qb);break;case 37:db($,-1,0);break;case 39:db($,1,0);break;case 38:$.rotate();break;case 40:fb($);break;default:return}a.preventDefault()}};
g.va=function(a){if(m==this){var b=a.touches[0];this.W=b.clientX;this.F=1;this.R=b.clientY;this.M=a.timeStamp;this.S=this.aa=null}};g.ua=function(a){if(m==this){var b=a.touches[0];this.aa=this.R;this.S=this.M;this.R=b.clientY;this.M=a.timeStamp;a=b.clientX-this.W;if(a>Z)db($,1,0);else if(a<-Z)db($,-1,0);else return;this.W=b.clientX;this.F=2}};g.ta=function(){if(m==this){if(this.S&&(this.R-this.aa)/(this.M-this.S)>0.25)fb($);else this.F==1&&$.rotate();this.M=this.F=0}};var vb=true;try{document.createEvent("TouchEvent")}catch(wb){vb=false}var xb=null,yb=0;
function zb(a){a.preventDefault();var b="";switch(a.type){case "mousedown":b="touchstart";xb=a.target;break;case "mousemove":if(!xb)return;b="touchmove";break;case "mouseup":b="touchend";yb++}a={clientX:a.clientX,clientY:a.clientY,identifier:yb,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY,target:xb};var c=document.createEvent("UIEvent");c.initEvent(b,true,false);c.touches=b=="touchend"?[]:[a];c.targetTouches=b=="touchend"?[]:[a];c.changedTouches=[a];xb.dispatchEvent(c);if(b=="touchend")xb=
null};if(!vb){document.addEventListener("mousemove",zb,true);document.addEventListener("mouseup",zb,true);document.addEventListener("mousedown",zb,true)}var Ab;try{Ab=JSON.parse(localStorage["hydra:tetris"]||null)}catch(Bb){Ab=null}n=Ab||{};var Cb=new lb(false);K(Cb);aa=Date.now();window.mozRequestAnimationFrame(va);var Db=new L("intro"),Eb=new x(r("darkness"));Eb.c(new U([new G("opacity","0",1,da,void 0),new P(J)]));C(Db,Eb);K(Db);
if(window.innerHeight>=460){var ub=r("ad-banner");document.body.insertBefore(ub,sa);xa("a14d293a6f70b18",ub)}function Fb(){(document.body.offsetWidth>320&&document.body.offsetHeight<416)&!(m instanceof ya)&&K(new ya)}window.addEventListener("orientationchange",Fb,false);Fb();window.addEventListener("resize",function(){window.setTimeout(window.scrollTo,0,1,0)},false);document.addEventListener("touchstart",function(a){a.preventDefault();window.scrollTo(0,1)},true);window.scrollTo(0,1);
window.top!=window&&window.addEventListener("click",function(){window.focus()},true);if("applicationCache"in window){applicationCache.addEventListener("updateready",applicationCache.swapCache,false);applicationCache.status==2&&applicationCache.update()};})()

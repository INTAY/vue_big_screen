/**/_jsload2&&_jsload2('opmb', 'var nh=t,oh=q; D.Ye(function(a){function b(){f&&(f=t,g=q,i||a.dispatchEvent(m))}function c(c){f=p;m=ma(new Q("ontouch"),c);g=new R(c.changedTouches[0].clientX,c.changedTouches[0].clientY);var i=e("onclickex",c);setTimeout(function(){b();a.dispatchEvent(i)},a.R.SV);nh||a.dispatchEvent(e("onclick",c))}function e(b,c){for(var e=new Q(b),f=c.target,g=q,i=q;f&&f!==a.Ya;){if(f.ea){var k=z.lang.Oc(f.ea);k instanceof ib&&"canvas"!==f.nodeName.toLowerCase()&&(g=k);k instanceof tc&&(i=k)}f=f.offsetParent}for(var f=c.changedTouches[0].pageX, k=c.changedTouches[0].pageY,m=a.Ya;m&&m!=document.body;)f-=m.offsetLeft,k-=m.offsetTop,m=m.offsetParent;e.offsetX=f;e.offsetY=k;e.pixel=e.ob=new R(e.offsetX,e.offsetY);e.point=e.point=a.Ib(e.ob);e.overlay=e.tb=g;e.infoWindow=i;return e}a.R.SV=500;var f=t,g,i=t,k=t,m;z.V(a.Ra(),"touchmove",function(b){a.R.Xb&&b.preventDefault()});z.V(a.platform,"touchstart",function(b){nh=t;oh=setTimeout(function(){nh=p;a.dispatchEvent(ma(e("onlongpress",b),b))},1E3);a.R.Xb&&oa(b);k=t;a.dispatchEvent(ma(e("ontouchstart", b),b));a.R.Xb&&Eb(b)});z.V(a.platform,"touchmove",function(b){a.R.Xb&&oa(b);k=p;a.dispatchEvent(ma(e("ontouchmove",b),b))});z.V(a.platform,"touchend",function(m){clearTimeout(oh);a.R.Xb&&Eb(m);k||(f?(i=p,nh||a.dispatchEvent(e("onclick",m)),20>Gb(g,new R(m.changedTouches[0].clientX,m.changedTouches[0].clientY))?(a.dispatchEvent(e("ondblclick",m)),a.dispatchEvent(ma(new Q("ondbltouch"),m))):a.dispatchEvent(ma(e("ontouchend",m),m)),b(),i=t):c(m));a.dispatchEvent(ma(e("ontouchend",m),m))});z.V(a.platform, "gesturestart",function(b){b.preventDefault();a.dispatchEvent(ma(new Q("ongesturestart"),b))});z.V(a.platform,"gesturechange",function(b){b.preventDefault();a.dispatchEvent(ma(new Q("ongesturechange"),b))});z.V(a.platform,"gestureend",function(b){b.preventDefault();a.dispatchEvent(ma(new Q("ongestureend"),b))})}); D.Ye(function(a){function b(a){a&&(E.WebkitTransform="");m=k=0;n=1;o[0].x=o[0].y=o[1].x=o[1].y=0;A=t}function c(){if(z.platform.lj)if(/Nexus/.test(navigator.userAgent))a.R.Xb&&(E.left=a.offsetX+k+"px",E.top=a.offsetY+m+"px");else{if(a.R.Xb&&(E.left=a.offsetX+k*n+"px",E.top=a.offsetY+m*n+"px"),1!=n)E.WebkitTransform=a.R.ds?"scale("+n+") ":""}else E.WebkitTransform=(a.R.Xb?"translate("+k*n+"px, "+m*n+"px) ":"")+(a.R.ds?"scale("+n+") ":"")}function e(){var b=0,c=0;ph&&(c=b=0);E.WebkitTransformOrigin= a.R.Xb?(o[0].x+o[1].x)/2-a.offsetX-b+"px "+((o[0].y+o[1].y)/2-a.offsetY-c)+"px":Math.round(a.width/2)+"px "+Math.round(a.height/2)+"px"}function f(b,c){var e=new Q(b),f=g(c.changedTouches[0].pageX,c.changedTouches[0].pageY);e.offsetX=f.x;e.offsetY=f.y;e.ob=new R(e.offsetX,e.offsetY);e.point=a.Ib(e.ob);return e}function g(b,c){for(var e=a.Ya;e&&e!=document.body;)b-=e.offsetLeft,c-=e.offsetTop,e=e.offsetParent;return new R(b,c)}function i(a){for(var b=[],c,e=0,f=a.touches.length;e<f;e++)c=a.touches[e], b.push({x:c.pageX,y:c.pageY});return b}var k=0,m=0,n=1,o=[{x:0,y:0},{x:0,y:0}],s=0,v=0,w=t,y=t,A=t,B=q,C,F,E=a.platform.style;a.addEventListener("touchstart",function(b){if(!(b.tb instanceof W)){C=i(b);var c=b.targetTouches.length;s+=c;2<s&&(s=2);var e=a.aa;2==c&&(e.DH=p);e.rb&&e.rb.stop();1==s?(this.aa.PT=k,this.aa.QT=m,b=g(b.targetTouches[0].pageX,b.targetTouches[0].pageY),o[0].x=b.x,o[0].y=b.y):2==s&&(b=g(b.touches[c-1].pageX,b.touches[c-1].pageY),o[1].x=b.x,o[1].y=b.y)}});a.addEventListener("touchmove", function(b){if(4<=z.xB&&2<=b.changedTouches.length){F=i(b);var E=2==C.length&&2==F.length?Gb(F[0],F[1])/Gb(C[0],C[1]):1;0<Math.abs(1-E)&&(n=E,y=p,clearTimeout(oh),e())}if(y&&!(2>b.changedTouches.length)){for(E=b.target;E&&E!=a.Ya;)E.ax&&z.lang.Oc(E.ax),E=E.offsetParent;for(var E=[],L=0;2>L;L++){for(var M=b.changedTouches[L].pageX,T=b.changedTouches[L].pageY,ea=a.Ya;ea&&ea!=document.body;)M-=ea.offsetLeft,T-=ea.offsetTop,ea=ea.offsetParent;E[L]={x:M,y:T}}B=new R((E[0].x+E[1].x)/2,(E[0].y+E[1].y)/2)}E= b.targetTouches.length;M=g(b.touches[0].pageX,b.touches[0].pageY);1==s&&2!=v&&(k+=M.x-o[0].x,m+=M.y-o[0].y,o[0].x=M.x,o[0].y=M.y,c(),A=p);if(2==s){var T=o[0].x,ea=o[0].y,ca=o[1].x,va=o[1].y;if(A){for(M=0;M<E;M++)L=g(b.touches[M].pageX,b.touches[M].pageY),Gb(L,new R(o[0].x,o[0].y))<Gb(L,new R(o[1].x,o[1].y))?(o[0].x=L.x,o[0].y=L.y):(o[1].x=L.x,o[1].y=L.y);k+=(o[0].x-T+o[1].x-ca)/2;m+=(o[0].y-ea+o[1].y-va)/2;c()}else if(L=new R(o[0].x,o[0].y),1==E&&(30>Gb(L,M)?(o[0].x=M.x,o[0].y=M.y):(A=p,o[1].x=M.x, o[1].y=M.y)),2==E)T=g(b.touches[1].pageX,b.touches[1].pageY),30>Gb(M,T)?(o[0].x=T.x,o[0].y=T.y):(Gb(L,M)<Gb(L,T)?(o[0].x=M.x,o[0].y=M.y,o[1].x=T.x,o[1].y=T.y):(o[1].x=M.x,o[1].y=M.y,o[0].x=T.x,o[0].y=T.y),A=p)}if(1==s&&2==v){for(M=0;M<E;M++)L=g(b.touches[M].pageX,b.touches[M].pageY),Gb(L,new R(o[0].x,o[0].y))<Gb(L,new R(o[1].x,o[1].y))?(k+=L.x-o[0].x,m+=L.y-o[0].y,o[0].x=L.x,o[0].y=L.y):(k+=L.x-o[1].x,m+=L.y-o[1].y,o[1].x=L.x,o[1].y=L.y);c()}1==s&&this.R.Xb&&(E=this.aa,E.Qj||(E.Qj=p,b=f("ondragstart", b),a.dispatchEvent(b),a.dispatchEvent(new Q("onmovestart")),E.lC=b.ob,E.mC=eb(),w=p),E.Ss=eb(),a.dispatchEvent(new Q("ondragging")))});a.addEventListener("touchend",function(c){e();v=s;this.aa.DH?(s=c.targetTouches.length,delete this.aa.DH):s--; -1==s&&(s=0);z.platform.lj&&(s=0);if(0==s){if(y){var g=0,i=a.ja();a.Bc=a.Va;this.R.ds&&(g=Math.round(Math.log(n)/Math.log(2)),i=Math.max(Math.min(a.ja()+g,a.R.pc),a.R.jc));var A=a.va().$b(i),C=B;C||(C=new R((o[0].x+o[1].x)/2,(o[0].y+o[1].y)/2));var E;E=C; var F=a.ac,va=a.va().$b(a.Bc);E=new J(F.lng+va*(E.x-a.width/2),F.lat-va*(E.y-a.height/2));A=new J(E.lng+(a.width/2-C.x)*A,E.lat-(a.height/2-C.y)*A);A=S.hc(A);A=a.Tb(A);g=new R(A.x-k*n/Math.pow(2,g),A.y-m*n/Math.pow(2,g));A=a.R.Xb?a.Ib(g):a.Db();if(g=a.dh())if(g=g.ka())g=a.Tb(g,a.Bc),a.$j(a.width/2-g.x,a.height/2-g.y,a.Ib(g,a.Bc),p);a.Fd(A,i)}if(k!=this.aa.PT||m!=this.aa.QT)w&&!y&&(c=f("ondragend",c),qh(a,c,c.ob,{x:k,y:m}),w=t),y?b(p):b(t);y=a.aa.Qj=t;v=0}});a.addEventListener("gesturechange",function(a){n= a.scale;y=p;clearTimeout(oh);e()})}); function qh(a,b,c,e){var f=a.platform.style;if(a.R.Cw){var g=a.aa,i=eb();if(140<i-g.Ss)setTimeout(function(){f.WebkitTransform=""},0),setTimeout(function(){a.Le(a.offsetX+e.x,a.offsetY+e.y)},0),window.setTimeout(function(){a.dispatchEvent(new Q("onmoveend"));g.Qj=t},0),window.setTimeout(function(){a.dispatchEvent(b)},0);else{var k=g.lC,m=[0<c.x-k.x?1:-1,0<c.y-k.y?1:-1],i=Gb(k,c)/((i-g.mC)/1E3)/2,n=i/1.6,o=0.5*n*i/1E3,s=Math.abs(k.x-c.x),v=0,w=0;0==Math.abs(k.y-c.y)?v=s:(c=Math.abs(k.x-c.x)/Math.abs(k.y- c.y),w=Math.round(Math.sqrt(o*o/(1+c*c))),v=Math.round(c*w));-1==m[0]&&(v=-v);-1==m[1]&&(w=-w);g.rb&&g.rb.stop();var y=i/1E3,A=a.offsetX,B=a.offsetY;g.rb=new vb({duration:n,Ic:25,dc:function(a){a=a*y/1.6;return y*a-0.8*a*a},za:function(b){b=b*3.2/(y*y);if(z.platform.lj){f.left=a.offsetX+e.x+Math.round(b*v)+"px";f.top=a.offsetY+e.y+Math.round(b*w)+"px"}else f.WebkitTransform="translate("+(e.x+Math.round(b*v))+"px ,"+(e.y+Math.round(b*w))+"px)"},finish:function(){g.rb=q;setTimeout(function(){f.WebkitTransform= ""},0);setTimeout(function(){a.Le(A+e.x+Math.round(v),B+e.y+Math.round(w))},0);setTimeout(function(){a.dispatchEvent(new Q("onmoveend"))},0);window.setTimeout(function(){a.dispatchEvent(b)},0)},ct:function(b){g.rb=q;b=b*3.2/(y*y);setTimeout(function(){f.WebkitTransform=""},0);setTimeout(function(){a.Le(A+e.x+Math.round(b*v),B+e.y+Math.round(b*w))},0);setTimeout(function(){a.dispatchEvent(new Q("onmoveend"))},0)}})}}else window.setTimeout(function(){f.WebkitTransform=""},0),window.setTimeout(function(){a.Le(a.offsetX+ e.x,a.offsetY+e.y)},0),window.setTimeout(function(){a.dispatchEvent(new Q("onmoveend"))},0)}var ph=-1<navigator.userAgent.indexOf("iPhone OS 5_")?p:t; ');
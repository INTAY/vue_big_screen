/**/_jsload2&&_jsload2('hotspot', 'D.Ye(function(a){function b(){}function c(){}function e(a){var b=this.aa;b.se=[];if(this.Bh)for(var c in this.Bh)if(!(0==c.indexOf("vector_")&&!this.Pd()||0==c.indexOf("tile_")&&this.Pd())){var e=this.Bh[c],f;for(f in e){var g=e[f];if(!(g.Dh>this.ja()||g.Ef<this.ja())){var i=this.Tb(g.ka());i.x<this.width&&i.y<this.height&&a.offsetX<i.x+g.ev[1]&&(a.offsetX>i.x-g.ev[3]&&a.offsetY>i.y-g.ev[0]&&a.offsetY<i.y+g.ev[2])&&b.se.push(g)}}}}function f(b){if(b.point){var c=a.ja(),e=a.va().tk().vg(b.point),f= new R(Math.floor(e.x*Math.pow(2,c-18)),Math.floor(e.y*Math.pow(2,c-18))),i=a.Dd.Jd(c),e=a.fL(b.point,c),w=a.ea.replace(/^TANGRAM_/,""),y=e.Fm,A=e.Fr,e=f.x-y*i,f=i-(f.y-A*i),w=a.Ai[w+"_"+y+"_"+A+"_"+a.Dd.ns(c)+"_"+c],c=[];if(w){for(var B in w.polygon)g([e,f],w.polygon[B].WE)&&c.push(w.polygon[B]);for(B in w.polyline){for(var C=[e,f],y=w.polyline[B].WE,i=5+w.polyline[B].style[0].wK,A=C[0],C=C[1],F=t,E=0,G=y.length-3;E<G;E+=2){var N;var L=y[E];N=y[E+1];var M=y[E+2],T=y[E+3],ea=L-M,ca=N-T,ea=ea*ea+ca* ca;ea>k?(ca=((N-C)*(N-T)-(L-A)*(M-L))/ea,1<ca||0>ca?(L=A-L,M=A-M,N=C-N,T=C-T,N=L*L+N*N,T=M*M+T*T,N=N<T?Math.sqrt(N):Math.sqrt(T)):N=Math.abs(((N-C)*-(L-M)-(L-A)*(T-N))/Math.sqrt(ea))):(T=A-L,N=C-N,N=Math.sqrt(T*T+N*N));if(i>N){F=p;break}}F&&c.push(w.polyline[B])}}e=a.Ai.vZ;b=a.Tb(b.point);if(e)for(B in e.polygon)g([b.x,b.y],e.polygon[B].WE)&&c.push(e.Q4[B]);return c}}function g(a,b){for(var c=a[0],e=a[1],f=t,g=0,i=b.length-2;g<b.length;g+=2){var k=b[g],B=b[g+1],C=b[i],i=b[i+1];B>e!==i>e&&c<(C-k)* (e-B)/(i-B)+k&&(f=!f);i=g}return f}function i(){a.aa.dK&&0<a.aa.se.length?(a.platform.style.cursor="pointer",a.aa.dK=t):(a.aa.se=[],a.platform.style.cursor=a.R.yc)}a.aa.It=new uc("",{Da:new P(15,-3),zp:{border:"1px solid #aaa",background:"#fffec2",whiteSpace:"nowrap",font:"12px "+H.fontFamily,mozBoxShadow:"1px 2px 6px #666",webkitBoxShadow:"1px 2px 6px #666",boxShadow:"1px 2px 6px #666",padding:"2px 4px"}});if(!a.R||!a.R.Ns){var k=0.01;a.addEventListener("movestart",b);a.addEventListener("moveend", c);a.addEventListener("zoomstart",b);a.addEventListener("zoomend",function(){setTimeout(c,30)});a.addEventListener("mousemove",function(b){if(!(b.tb&&!(b.tb instanceof oc)||b.Fb)){var c=this.aa,f=c.se.slice(0);e.call(this,b);for(var g=c.se.slice(0),i=0;i<f.length;i++)for(var k=0;k<g.length;k++)f[i]===g[k]&&(f.splice(i,1),i--,g.splice(k,1),k--);if(0<f.length){var y=new Q("onhotspotout");y.spots=f.slice(0);this.dispatchEvent(y)}if(0==c.se.length&&!c.e4)this.platform.style.cursor!=this.R.yc&&(this.platform.style.cursor= this.R.yc),c.xp&&(clearTimeout(c.xp),c.xp=q),c.YE=setTimeout(function(){c.It.$()},400);else if(0<g.length&&(this.platform.style.cursor="pointer",y=new Q("onhotspotover"),y.spots=g.slice(0),this.dispatchEvent(y),c.xp&&(clearTimeout(c.xp),c.xp=q),c.YE&&(clearTimeout(c.YE),c.YE=q),y.spots[0].sD()))c.xp=setTimeout(function(){c.It.cd(y.spots[0].sD());c.It.ua(b.point);c.It.show();a.Pa(c.It)},400)}});a.addEventListener("clickex",function(a){var b=this.aa;a.overlay||(0==b.se.length&&e.call(this,a),0<b.se.length&& (a=new Q("onhotspotclick"),a.spots=b.se.slice(0),a.spots.sort(function(a,b){return a.ka().lat-b.ka().lat}),this.dispatchEvent(a),b.se.length=0))});a.addEventListener("rightclickex",function(a){if(this.R.jk||this.R.so){var b=this.aa;if(!a.overlay&&a.point){var c=[];if(0<b.se.length){var e=b.se.slice(0);e.sort(function(a,b){return a.ka().lat-b.ka().lat});for(var g in e)c.push(e[g].hB);b.se.length=0}b=f(a);c=c.concat(b);b=[];for(g in c)0>b.indexOf(c[g].Wb)&&b.push(c[g].Wb);g=new Q("onhotspotrightclick"); g.styles=c;g.styleIds=b;g.point=a.point;this.dispatchEvent(g)}}});a.addEventListener("load",i);a.addEventListener("moveend",i);a.addEventListener("zoomend",i);a.addEventListener("dragend",function(){this.aa.dK=p})}}); ');
/**/_jsload2&&_jsload2('canvablepath', 'function Gg(a){a=a.replace(/,/gm," ");a=a.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");a=a.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");a=a.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\\s])/gm,"$1 $2");a=a.replace(/([^\\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");a=a.replace(/([0-9])([+\\-])/gm,"$1 $2");a=a.replace(/(\\.[0-9]*)(\\.)/gm,"$1 $2");a=a.replace(/([Aa](\\s+[0-9]+){3})\\s+([01])\\s*([01])/gm,"$1 $3 $4 ");a=Gg.jV(a);a=Gg.trim(a);this.dP=new function(a){this.jF= a.split(" ");this.reset=function(){this.eh=-1;this.jt=this.mw="";this.start=new Gg.Yf(0,0);this.nw=new Gg.Yf(0,0);this.nb=new Gg.Yf(0,0);this.la=[];this.io=[]};this.EL=function(){return this.eh>=this.jF.length-1};this.mj=function(){return this.EL()?p:this.jF[this.eh+1].match(/^[A-Za-z]$/)!=q};this.QD=function(){switch(this.mw){case "m":case "l":case "h":case "v":case "c":case "s":case "q":case "t":case "a":case "z":return p}return t};this.hL=function(){this.eh++;return this.jF[this.eh]};this.hj=function(){return parseFloat(this.hL())}; this.aZ=function(){this.jt=this.mw;this.mw=this.hL()};this.hm=function(){return this.JY(new Gg.Yf(this.hj(),this.hj()))};this.WC=function(){var a=this.hm();return this.nw=a};this.mk=function(){var a=this.hm();return this.nb=a};this.YK=function(){return"c"!=this.jt.toLowerCase()&&"s"!=this.jt.toLowerCase()&&"q"!=this.jt.toLowerCase()&&"t"!=this.jt.toLowerCase()?this.nb:new Gg.Yf(2*this.nb.x-this.nw.x,2*this.nb.y-this.nw.y)};this.JY=function(a){this.QD()&&(a.x+=this.nb.x,a.y+=this.nb.y);return a};this.Ti= function(a,b,f){f!=q&&(0<this.io.length&&this.io[this.io.length-1]==q)&&(this.io[this.io.length-1]=Math.atan2(f.y-this.la[this.la.length-1].y,f.x-this.la[this.la.length-1].x));this.qB(a,b==q?q:Math.atan2(a.y-b.y,a.x-b.x))};this.qB=function(a,b){this.la.push(a);this.io.push(b)}}(a);this.gb=function(){return this.Uh(q)};this.Uh=function(a){var c=this.dP;c.reset();var e=new Gg.JO;for(a!=q&&a.beginPath();!c.EL();)switch(c.aZ(),c.mw){case "M":case "m":var f=c.mk();c.Ti(f);e.mg(f.x,f.y);a!=q&&a.moveTo(f.x, f.y);for(c.start=c.nb;!c.mj();)f=c.mk(),c.Ti(f,c.start),e.mg(f.x,f.y),a!=q&&a.lineTo(f.x,f.y);break;case "L":case "l":for(;!c.mj();){var g=c.nb,f=c.mk();c.Ti(f,g);e.mg(f.x,f.y);a!=q&&a.lineTo(f.x,f.y)}break;case "H":case "h":for(;!c.mj();)f=new Gg.Yf((c.QD()?c.nb.x:0)+c.hj(),c.nb.y),c.Ti(f,c.nb),c.nb=f,e.mg(c.nb.x,c.nb.y),a!=q&&a.lineTo(c.nb.x,c.nb.y);break;case "V":case "v":for(;!c.mj();)f=new Gg.Yf(c.nb.x,(c.QD()?c.nb.y:0)+c.hj()),c.Ti(f,c.nb),c.nb=f,e.mg(c.nb.x,c.nb.y),a!=q&&a.lineTo(c.nb.x,c.nb.y); break;case "C":case "c":for(;!c.mj();){var i=c.nb,g=c.hm(),k=c.WC(),f=c.mk();c.Ti(f,k,g);e.oB(i.x,i.y,g.x,g.y,k.x,k.y,f.x,f.y);a!=q&&a.bezierCurveTo(g.x,g.y,k.x,k.y,f.x,f.y)}break;case "S":case "s":for(;!c.mj();)i=c.nb,g=c.YK(),k=c.WC(),f=c.mk(),c.Ti(f,k,g),e.oB(i.x,i.y,g.x,g.y,k.x,k.y,f.x,f.y),a!=q&&a.bezierCurveTo(g.x,g.y,k.x,k.y,f.x,f.y);break;case "Q":case "q":for(;!c.mj();)i=c.nb,k=c.WC(),f=c.mk(),c.Ti(f,k,k),e.gJ(i.x,i.y,k.x,k.y,f.x,f.y),a!=q&&a.quadraticCurveTo(k.x,k.y,f.x,f.y);break;case "T":case "t":for(;!c.mj();)i= c.nb,k=c.YK(),c.nw=k,f=c.mk(),c.Ti(f,k,k),e.gJ(i.x,i.y,k.x,k.y,f.x,f.y),a!=q&&a.quadraticCurveTo(k.x,k.y,f.x,f.y);break;case "A":case "a":for(;!c.mj();){var i=c.nb,m=c.hj(),n=c.hj(),g=c.hj()*(Math.PI/180),o=c.hj(),k=c.hj(),f=c.mk(),s=new Gg.Yf(Math.cos(g)*(i.x-f.x)/2+Math.sin(g)*(i.y-f.y)/2,-Math.sin(g)*(i.x-f.x)/2+Math.cos(g)*(i.y-f.y)/2),v=Math.pow(s.x,2)/Math.pow(m,2)+Math.pow(s.y,2)/Math.pow(n,2);1<v&&(m*=Math.sqrt(v),n*=Math.sqrt(v));o=(o==k?-1:1)*Math.sqrt((Math.pow(m,2)*Math.pow(n,2)-Math.pow(m, 2)*Math.pow(s.y,2)-Math.pow(n,2)*Math.pow(s.x,2))/(Math.pow(m,2)*Math.pow(s.y,2)+Math.pow(n,2)*Math.pow(s.x,2)));isNaN(o)&&(o=0);var w=new Gg.Yf(o*m*s.y/n,o*-n*s.x/m),i=new Gg.Yf((i.x+f.x)/2+Math.cos(g)*w.x-Math.sin(g)*w.y,(i.y+f.y)/2+Math.sin(g)*w.x+Math.cos(g)*w.y),y=function(a,b){return(a[0]*b[0]+a[1]*b[1])/(Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2))*Math.sqrt(Math.pow(b[0],2)+Math.pow(b[1],2)))},A=function(a,b){return(a[0]*b[1]<a[1]*b[0]?-1:1)*Math.acos(y(a,b))},o=A([1,0],[(s.x-w.x)/m,(s.y- w.y)/n]),v=[(s.x-w.x)/m,(s.y-w.y)/n],w=[(-s.x-w.x)/m,(-s.y-w.y)/n],s=A(v,w);-1>=y(v,w)&&(s=Math.PI);1<=y(v,w)&&(s=0);v=1-k?1:-1;w=o+v*(s/2);c.qB(new Gg.Yf(i.x+m*Math.cos(w),i.y+n*Math.sin(w)),w-v*Math.PI/2);c.qB(f,w-v*Math.PI);e.mg(f.x,f.y);a!=q&&(y=m>n?m:n,f=m>n?1:m/n,m=m>n?n/m:1,a.translate(i.x,i.y),a.rotate(g),a.scale(f,m),a.arc(0,0,y,o,o+s,1-k),a.scale(1/f,1/m),a.rotate(-g),a.translate(-i.x,-i.y))}break;case "Z":case "z":a!=q&&a.closePath(),c.nb=c.start}return e}} Gg.trim=function(a){return a.replace(/^\\s+|\\s+$/g,"")};Gg.jV=function(a){return a.replace(/[\\s\\r\\t\\n]+/gm," ")};Gg.Yf=function(a,b){this.x=a;this.y=b}; Gg.JO=function(){this.Xm=this.Wm=this.vj=this.uj=Number.NaN;this.x=x("uj");this.y=x("vj");this.width=function(){return this.Wm-this.uj};this.height=function(){return this.Xm-this.vj};this.mg=function(a,b){if(a!=q){if(isNaN(this.uj)||isNaN(this.Wm))this.Wm=this.uj=a;a<this.uj&&(this.uj=a);a>this.Wm&&(this.Wm=a)}if(b!=q){if(isNaN(this.vj)||isNaN(this.Xm))this.Xm=this.vj=b;b<this.vj&&(this.vj=b);b>this.Xm&&(this.Xm=b)}};this.uB=function(a){this.mg(a,q)};this.vB=function(a){this.mg(q,a)};this.gJ=function(a, b,c,e,f,g){c=a+2/3*(c-a);e=b+2/3*(e-b);this.oB(a,b,c,c+1/3*(f-a),e,e+1/3*(g-b),f,g)};this.oB=function(a,b,c,e,f,g,i,k){var m=[a,b],n=[c,e],o=[f,g],s=[i,k];this.mg(m[0],m[1]);this.mg(s[0],s[1]);for(Hg=0;1>=Hg;Hg++)if(a=function(a){return Math.pow(1-a,3)*m[Hg]+3*Math.pow(1-a,2)*a*n[Hg]+3*(1-a)*Math.pow(a,2)*o[Hg]+Math.pow(a,3)*s[Hg]},b=6*m[Hg]-12*n[Hg]+6*o[Hg],c=-3*m[Hg]+9*n[Hg]-9*o[Hg]+3*s[Hg],e=3*n[Hg]-3*m[Hg],0==c)0!=b&&(b=-e/b,0<b&&1>b&&(0==Hg&&this.uB(a(b)),1==Hg&&this.vB(a(b))));else if(e=Math.pow(b, 2)-4*e*c,!(0>e)&&(f=(-b+Math.sqrt(e))/(2*c),0<f&&1>f&&(0==Hg&&this.uB(a(f)),1==Hg&&this.vB(a(f))),b=(-b-Math.sqrt(e))/(2*c),0<b&&1>b))0==Hg&&this.uB(a(b)),1==Hg&&this.vB(a(b))};this.mg(l,l);this.mg(l,l)};D.KO=Gg; ');
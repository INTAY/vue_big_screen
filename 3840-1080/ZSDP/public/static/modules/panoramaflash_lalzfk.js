/**/_jsload2&&_jsload2('panoramaflash', 'z.extend(Ra.prototype,{Ii:function(){for(var a=0;a<D.Qq.length;a++)D.Qq[a](this);this.Kf!=q&&this.dispatchEvent(new Q("onvisible_poi_type_changed"),{visiblePOIType:this.Kf});this.$k=this.ah();this.fr=this.hd=t;this.cq={};this.gd=new rk(this);this.VR();this.JP();this.LP();if(this.bb||this.Mb)this.bb?this.Cc(this.bb,this.Ke):this.ua(this.Mb)},LP:function(){var a=this;setInterval(function(){if(a.Zb()){var b=a.ah();b.Yb(a.$k)||(a.gd.set("size",{width:b.width,height:b.height}),a.$k=b,a.dispatchEvent(new Q("size_changed")))}}, 80)},VR:function(){var a=this.gd,b=this;a.addEventListener("clicked_position",function(a){b.dispatchEvent(new Q("onclicked_position"),a)});a.addEventListener("thumbnail_complete",function(){b.dispatchEvent(new Q("onthumbnail_complete"))});a.addEventListener("indoor_enter",function(a){a.data.M4===q?b.sj({haveBreakId:t}):b.sj({haveBreakId:p});b.dispatchEvent(new Q("onhaveBreakId_changed"))});a.addEventListener("first_thumb_complete",function(){var a,e;if(b.hd!==p){b.hd=p;a=this;b.bb=a.get("id");"street"!= b.Ke&&(b.Ke="street",b.$x("inter"));b.En=a.get("links");e=a.get("position");b.Mb=e;e=a.get("pov");!b.Ia.heading&&!b.Ia.pitch?b.Ia=e:(e.heading!=b.Ia.heading||e.pitch!=b.Ia.pitch)&&a.set("pov",b.Ia);e=a.get("zoom");1==!b.Mc&&1!=e?b.Mc==e:b.Mc!=e&&a.set("zoom",b.Mc);e=q;for(var f in b.Je)e=b.Je[f],delete b.Je[f],b.Pa(e);b.m.navigationControl===t&&a.set("navigationControlVisible",t);var g=function(b){a.Vr("toggleUI",{topo:b.linksControl,wellLid:b.clickOnRoad,innerExit:t,innerFloor:b.indoorFloorControl})}; g(b.m);b.addEventListener("clickonroad_changed",function(){g(b.m)});b.addEventListener("links_visible_changed",function(){g(b.m)});b.addEventListener("onindoorfloor_options_changed",function(){g(b.m)});b.addEventListener("navigation_visible_changed",function(){a.set("navigationControlVisible",b.m.navigationControl)});if(0<b.Pg.length){f=0;for(e=b.Pg.length;f<e;f++)b.Pg[f].register(b.P,b,b.gd);var i="",k=[];f=0;for(e=b.Sq.length;f<e;f++)i=b.Sq[f].qM,k=b.Sq[f].pM,b[i].apply(b,k)}b.m.visible?b.show(): b.$()}});a.addEventListener("pano_error",function(){b.dispatchEvent(new Q("error"))});a.addEventListener("id_changed",function(a){if(b.hd||b.bb==q||"inter"==b.Ke)b.bb=a.data;b.dispatchEvent(new Q("onid_changed"))});a.addEventListener("position_changed",function(a){b.hd?b.Mb=b.gd.get("position"):b.Mb==q&&(b.Mb=a.data);b.dispatchEvent(new Q("onposition_changed"))});a.addEventListener("pov_changed",function(a){if(b.hd||b.Ia.heading==q)b.Ia=a.data;b.dispatchEvent(new Q("onpov_changed"))});a.addEventListener("links_changed", function(a){if(b.hd||0==b.En.length)b.En=a.data;b.dispatchEvent(new Q("onlinks_changed"))});a.addEventListener("zoom_changed",function(a){if(b.hd||b.Mc==q)b.Mc=a.data;b.dispatchEvent(new Q("onzoom_changed"))});a.addEventListener("sdata_loaded",function(a){b.$x(a.data.panoType);b.dispatchEvent(new Q("oncopyright_changed"),{copyright:a.data.copyright});if(b.fr){for(var e in b.cq)b[e](b.cq[e]);b.fr=t;b.cq={}}});a.addEventListener("overlay_mouseclick",function(a){a=b.Je[a.data.markerId];a.dispatchEvent(new Q("onclick"), {type:"click",target:a})});a.addEventListener("overlay_mouseover",function(a){a=b.Je[a.data.markerId];a.dispatchEvent(new Q("onmouseover"),{type:"mouseover",target:a})});a.addEventListener("overlay_mouseout",function(a){a=b.Je[a.data.markerId];a.dispatchEvent(new Q("onmouseout"),{type:"mouseout",target:a})})},JP:function(){var a=this;z.V(this.P,ja.fa.Se?"DOMMouseScroll":"onmousewheel",function(b){if(a.m.enableScrollWheelZoom&&a.m.visible){var c=-b.detail/3||b.wheelDelta/120,c=a.ja()+c;a.Rc(c);Eb(b)}})}, Cc:function(a,b,c){"object"===typeof b&&(c=b,b=l);if(!this.hd||a&&a!=this.bb)this.hd||(this.bb=a,this.Ke=b||"street",this.Mb=q),this.gd.set("id",{id:a,type:b||"street"}),this.fr=p,c&&c.pov&&this.rd(c.pov)},ua:function(a){if(!this.hd||a&&!this.Mb.Yb(a))this.hd||(this.Mb=a,this.bb=q),this.gd.set("position",a),this.fr=p},rd:function(a){a&&(90<a.pitch&&(a.pitch=90),-90>a.pitch&&(a.pitch=-90),this.hd?this.fr?this.cq.setPov=a:this.gd.set("pov",a):this.Ia=a)},Rc:function(a){a!=this.Mc&&(a>ze&&(a=ze),a<Ae&& (a=Ae),this.hd?this.gd.set("zoom",a):this.Mc=a,this.cq.setZoom=a)},show:function(){this.m.visible=p;this.yf&&(this.M&&this.M.Ra()===this.P)&&z.U.show(this.yf);this.gd&&this.gd.Pq&&(this.gd.Pq.style.left="0");this.hd&&(this.ml===this.Zb()&&this.gd.set("id",{id:this.ml,type:this.jS||"street"}),this.dispatchEvent(new Q("onvisible_changed")))},$:function(){this.m.visible=t;this.hd&&(this.ml=this.bb,this.jS=this.Ke,this.gd.Vr("closePano"));this.bb=q;this.gd&&this.gd.Pq&&(this.gd.Pq.style.left="-9999px"); this.dispatchEvent(new Q("onvisible_changed"))},rB:function(a){function b(a,b){return function(){a.Sq.push({qM:b,pM:arguments})}}if(this.hd)a.register(this.P,this,this.gd);else for(var c=a.getPanoMethodList(),e="",f=0,g=c.length;f<g;f++)e=c[f],this[e]=b(this,e);this.Pg.push(a)},yE:function(a){this.hd&&a.dispose();for(var b=this.Pg.length;b--;)this.Pg[b]===a&&this.Pg.splice(b,1)},yt:function(a){this.Kf=a||"none";this.dispatchEvent(new Q("onvisible_poi_type_changed"),{visiblePOIType:this.Kf})},Pa:function(a){this.Je[a.kd]= a;this.hd&&this.dispatchEvent(new Q("onadd_overlay"),{overlay:a})},Ub:function(a){var b=a.kd;this.hd&&this.dispatchEvent(new Q("onremove_overlay"),{overlay:a});delete this.Je[b]},Bo:function(){var a=this.gd.get("indoorData");a&&a.pid&&this.Cc(a.pid)},ME:function(a){this.gd.set("interactiveState",a)}});zj=Ra.prototype; V(zj,{setId:zj.Cc,setPosition:zj.ua,setPov:zj.rd,setZoom:zj.Rc,show:zj.show,hide:zj.$,addPlugin:zj.rB,removePlugin:zj.yE,addOverlay:zj.Pa,removeOverlay:zj.Ub,setPanoramaPOIType:zj.yt,exitInter:zj.Bo,setInteractiveState:zj.ME});function sk(){this.GS=(this.Nz=window.ActiveXObject&&!(window.opera&&!window.opera.nodeType))?\' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"\':\' type="application/x-shockwave-flash"\';this.QH=["id","width","height","align","data"];this.RH="wmode movie flashvars scale quality play loop menu salign bgcolor base allowscriptaccess allownetworking allowfullscreen seamlesstabbing devicefont swliveconnect".split(" ")} z.extend(sk.prototype,{create:function(a,b){var c=this.cR(a);b&&"string"===typeof b&&(b=document.getElementById(b));b?b.innerHTML=c:document.write(c)},remove:function(a){if((a=this.dL(a))&&this.Nz){a.style.display="none";for(var b in a)"function"===typeof a[b]&&(a[b]=q);window.MO&&setTimeout(window.MO,0)}a.parentNode.removeChild(a)},WW:function(){function a(){var c=function(){var a=navigator;if(a.plugins&&a.mimeTypes.length){if((a=a.plugins["Shockwave Flash"])&&a.description)return a.description.replace(/([a-zA-Z]|\\s)+/, "").replace(/(\\s)+r/,".")+".0"}else if(b.Nz)try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(c)return c.GetVariable("$version").replace(/WIN/g,"").replace(/,/g,".")}catch(g){}}();a=function(){return c};return c}var b=this;return a()},dL:function(a){return document.getElementById(a)},EG:function(a,b){for(var a=a.split("."),b=b.split("."),c=Math.max(a.length,b.length),e=0;e<c;e++){var f=a[e],g=b[e];if(!f||!g)return!f&&!g?0:f?1:-1;f=Number(f);g=Number(g);if(f<g)return-1;if(f>g)return 1}return 0}, cR:function(a){a=a||{};a.movie=a.url||"";a.altHtml=a.errorMessage||"";if(a.vars){var b=a.vars,c=[],e=q,f=q;for(e in b)f=b[e],c.push(e+"="+encodeURIComponent(f));a.flashvars=c.join("&")}a.minVer=a.ver;b=a.minVer;c=a.maxVer;if(b||c)if(e=this.WW(),!e||b&&0>this.EG(e,b)||c&&0<this.EG(e,c))return a.altHtml||"";e=["<object",this.GS];a.data=a.movie;for(b=0;b<this.QH.length;b++)c=this.QH[b],a.hasOwnProperty(c)&&e.push(" ",c,\'="\',a[c],\'"\');e.push(">");for(b=0;b<this.RH.length;b++)c=this.RH[b],a.hasOwnProperty(c)&& e.push(\'<param name="\',c,\'" value="\',a[c],\'"/>\');e.push("</object>");return e.join("")}});function tk(a,b){this.W=a;this.ZQ=b;this.Eh={};this.Qy()}z.extend(tk.prototype,{Qy:function(){var a=this,b=a.W;b.addEventListener("add_overlay",function(b){b=b.overlay;b.xa(a.W,a.ZQ);a.Eh[b.kd]=b});b.addEventListener("remove_overlay",function(b){b=b.overlay;b.remove();delete a.Eh[b.kd]})}});z.extend(Ee.prototype,{xa:function(a,b){this.W=a;this.ka()||this.ua(this.W.ka());this.Ea=b;this.lb()},lb:function(){var a=this.ka(),a=ec.Wd.vg(a),a={markerId:this.kd,catalog:"FD01",name:this.ok(),rank:this.Fo(),x:a.x,y:a.y,color:this.km(),hoverColor:this.tL,backgroundHoverColor:this.tJ,borderColor:this.borderColor,borderHoverColor:this.xJ,backgroundColor:this.backgroundColor,padding:this.padding,fontSize:this.fontSize,borderWidth:this.borderWidth};if(this.DD||this.getImageData())a.imageUrl=this.DD, a.imageData=this.getImageData(),a.size=this.Eb(),a.image=this.Nw(),a.catalog="FD02",this.Eb()&&(a.width=this.Eb()[0],a.height=this.Eb()[1]);this.Ea.jN(a)},hide:function(){this.Ta=t;this.Ea&&this.Ea.qo(this.kd,"visible",t)},show:function(){this.Ta=p;this.Ea&&this.Ea.qo(this.kd,"visible",p)},isVisible:x("Ta"),Jf:function(a,b){this.Ea&&("position"==a&&(b=ec.Wd.vg(b),b={lng:b.x,lat:b.y}),this.Ea.qo(this.kd,a,b))},remove:function(){this.dispatchEvent(new Q("onremove"),{type:"remove",target:this});this.Ea.ZJ([this.kd])}});var uk={none:"",transit:"FE0A",hotel:"FE02",catering:"FE01",movie:"FE06",indoor_scene:"FEFE"},vk={none:["-1",""],transit:["0","m_transit.png"],hotel:["1","m_hotel.png"],catering:["2","m_catering.png"],movie:["3","m_movie.png"],transit:["4","m_transit.png"],indoor_scene:["5","m_indoor_scene.png"]}; z.extend(He.prototype,{xa:function(a,b){this.W=a;this.Ea=b;this.lb()},lb:function(){var a=this.ka(),a=ec.Wd.vg(a),b=this.wR(),c=this.nD();this.Ea.jN({markerId:this.kd,catalog:b,name:this.Mo(),rank:this.Fo(),x:a.x,y:a.y,heading:c.heading,pitch:c.pitch,pid:c.panoId,panoIId:c.panoIId})},wR:function(){var a=this.Ho().match(/.*\\/(.*)/)[1],b;for(b in vk)if(vk[b][1]==a)return uk[b]},hide:function(){this.Ta=t;this.Ea.qo(this.kd,"visible",t)},show:function(){this.Ta=p;this.Ea.qo(this.kd,"visible",p)},isVisible:x("Ta"), Jf:function(a,b){"position"==a&&(b=ec.Wd.vg(b),b={lng:b.x,lat:b.y});this.Ea.qo(this.kd,a,b)},remove:function(){this.dispatchEvent(new Q("onremove"),{type:"remove",target:this});this.Ea.ZJ([this.kd])}});rk.Kn=new ec(q,{lf:"api"});function rk(a){z.lang.Ga.call(this);a&&(this.W=a,this.Ig=q,this.RG=a.P.clientWidth,this.QG=a.P.clientHeight,new tk(a,this))}rk.mP=D.$h("pano");z.lang.wa(rk,z.lang.Ga,"PanoramaFlashWraper"); z.extend(rk.prototype,{jN:function(a){this.Vr("addMarkers",[a])},ZJ:function(a){this.Vr("removeMarkers",[a])},qo:function(a,b,c){var e={};e.markerId=a;e[b]=c;this.set("markerProperty",e)},get:function(a){var b=q;"position"==a?(b=this.Ig.get("mercatorPosition"),b=ec.Wd.rj(new R(b.mercatorX,b.mercatorY))):b=this.Ig.get(a);return b},set:function(a,b){var c=this;"position"==a?rk.Kn.fj(b,function(a){a&&a.id?c.W.Cc(a.id):c.dispatchEvent(new Q("pano_error"))}):"id"==a?c.Ig==q?c.bS(c.W):c.Ig.set&&c.Ig.set("panoOptions", {id:b.id,panoType:b.type,width:c.RG,height:c.QG}):c.Ig&&c.Ig.set&&c.Ig.set(a,b)},Vr:function(a,b){return this.Ig.doAction(a,b)},j3:x("Pq"),bS:function(a){var b=this,c=a.m.swfSrc.match(/.*\\//)[0]+"BDStreetScape.swf";b.Ig=p;rk.Kn.Vw(function(e){var f="",g="";"inter"===a.Ke?g=a.bb:f=a.bb;f={pid:f,iid:g,panoType:a.Ke,heading:a.Ia.heading,pitch:a.Ia.pitch,width:b.RG,height:b.QG,panoUrl:c,panoTileUrl:rk.mP.join("|"),domain:ec.ju,jsInterfaceNamespace:"BMap.PanoramaFlashInterface",swfIndex:b.ea};g=a.m.swfSrc; e&&(e.panoUdt&&e.panoUdt.version&&f)&&(f.udtVersion=e.panoUdt.version);e&&(e.panoSwfAPI&&e.panoSwfAPI.version&&f)&&(f.panoUrl=f.panoUrl+"?version="+e.panoSwfAPI.version,g=g+"?version="+e.panoSwfAPI.version);b.Ig=b.wQ(a.P,f,g)})},wQ:function(a,b,c){var e=new sk,f="PanoramaFlash"+this.ea,g=q,g=O("div");g.style.position="absolute";g.id="PanoramaFlashWraper"+this.ea;g.style.top="0";g.style.left="0";g.style.height="100%";g.style.width="100%";g.style.zIndex=1200;this.Pq=g;a.appendChild(g);e.create({id:f, width:"100%",height:"100%",allowscriptaccess:"always",scale:"showall",wmode:"opaque",quality:"best",url:c,ver:"10.2",errorMessage:"\\u60a8\\u672a\\u5b89\\u88c5Flash Player\\u64ad\\u653e\\u5668\\u6216\\u8005\\u7248\\u672c\\u8fc7\\u4f4e",vars:b},g);return e.dL(f)}});var wk=rk.prototype;V(wk,{get:wk.get,set:wk.set,doAction:wk.Vr}); ');
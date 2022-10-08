/**/_jsload2&&_jsload2('pservice', 'ec.ju=D.$h("pano")[0];ec.Xk=ec.ju+"?";ec.FF=D.$h("baidumap");ec.cP=D.$h("main_domain_nocdn");ec.Wd=new S;ec.zA=[]; z.extend(ec.prototype,{ZP:function(){var a=this,b;for(b in this.yd)if(0!==this.yd[b].length)switch(b){case "getPanoramaById":z.Ob(this.yd[b],function(b){a.Ko.apply(a,b)});break;case "getPanoramaByLocation":z.Ob(this.yd[b],function(b){a.fj.apply(a,b)});break;case "getVisiblePOIs":z.Ob(this.yd[b],function(b){a.yD.apply(a,b)});break;case "getRecommendPanosById":z.Ob(this.yd[b],function(b){a.Ww.apply(a,b)});break;case "getPanoramaVersions":z.Ob(this.yd[b],function(b){a.Vw.apply(a,b)});break;case "checkPanoSupportByCityCode":z.Ob(this.yd[b], function(b){a.EB.apply(a,b)});break;case "getPanoramaByPOIId":z.Ob(this.yd[b],function(b){a.Uw.apply(a,b)});break;case "getCopyrightProviders":z.Ob(this.yd[b],function(b){a.c3.apply(a,b)})}},Ko:function(a,b,c){this.bH(ec.Xk+"qt=sdata&l=17&sid="+a+"&fn=",b,c)},fj:function(a,b,c){"function"==typeof b&&(c=b,b=50);a=ec.Wd.vg(a);this.bH(ec.Xk+"qt=qsdata&x="+a.x+"&y="+a.y+"&r="+b+"&action=1&fn=",c)},yD:function(a,b,c,e){a=ec.Wd.vg(a);this.Qg(ec.Xk+"qt=search&x="+a.x+"&y="+a.y+"&radius="+b+"&tag="+c+"&fn=", function(a){for(var a=a.content,b=[],c=q,k=a.length-1;0<=k;k--)c=a[k],b.push({iconType:c.Type,title:c.name,altitude:c.Height,panoInfo:{panoId:c.PID,panoIId:c.IID,heading:c.Dir,pitch:c.Pitch},position:ec.Wd.rj(new R(c.X,c.Y))});e(b)})},Ww:function(a,b){this.Qg(ec.Xk+"qt=guide&sid="+a+"&fn=",function(a){if(a.content){for(var a=a.content,e=[],f=q,g=0,i=a.length;g<i;g++)f=a[g],e.push({panoId:f.PID,heading:f.Dir,name:f.Info,recoType:f.Type,pitch:f.Pitch,catlog:f.Catalog,floor:f.Floor});b(e)}})},KK:function(a){this.Qg(ec.FF+ "?qt=panoCMS&file=pano_copyright&callback=",function(b){a(b)})},Vw:function(a){this.Qg(ec.FF+"?qt=pver&callback=",function(b){b?a&&a(b):a&&a(q)})},EB:function(a,b){function c(a){for(var b=ec.zA,c=0,i=b.length;c<i;c++)if(b[c]==a)return p;return t}0===ec.zA.length?this.Qg(ec.cP+"?qt=panoCityList&t="+(new Date).getTime()+"&callback=",function(e){e?(ec.zA=e,b(c(a))):b(t)}):b(c(a))},Uw:function(a,b){var c=this;this.Vw(function(e){e&&e.panoUdt&&c.Qg(ec.Xk+"qt=poi&udt="+e.panoUdt.version+"&uid="+a+"&fn=", function(a){if(a&&a.content&&a.content[0]&&a.content[0].poiinfo){var a=a.content[0].poiinfo,e={id:a.IID||a.PID,pid:a.PID,type:1==a.hasinter?"inter":"street",description:a.name,links:q,position:ec.Wd.rj(new R(a.X,a.Y)),tiles:q,pov:1==a.hasinter?q:{heading:a.Dir,pitch:a.Pitch}};"inter"===e.type?c.ER(a.IID,function(a){if(a){for(var c=a.Defaultfloor,f=q,n=0,o=a.Floors.length;n<o;n++)if(a.Floors[n].Floor===c){f=a.Floors[n];break}f&&(e.interID=f.StartID)}b(e)}):b(e)}else b(q)})})},bH:function(a,b,c){var e= this;this.Qg(a,function(a){a&&a.result&&0==a.result.error?b&&b(e.sS(a,c)):b&&b(q)})},Qg:function(a,b){var c=(1E5*Math.random()).toFixed(0);D._rd=D._rd||{};D._rd["_cbk"+c]=function(a){b&&b(a);delete D._rd["_cbk"+c]};pa(a+("BMap._rd._cbk"+c))},sS:function(a,b){var c={},e=a.content[0];c.description=e.Rname||e.Info||"";c.id=e.ID;c.jh=e.X/100;c.kh=e.Y/100;c.position=ec.Wd.rj(new R(c.jh,c.kh));var f=this.tS(e,c.id,c.jh,c.kh,e.NorthDir);c.links=f[0];c.roads=f[1];c.links.sort(function(a,b){return a.vE-b.vE}); c.mode=e.Mode;c.relevants=[];if(e.SwitchID)for(f=0;f<e.SwitchID.length;f++)c.relevants[f]={id:e.SwitchID[f].ID,mode:e.SwitchID[f].Time.toLowerCase()};c.tiles=new Di({dirNorth:e.NorthDir,centerHeading:(180+e.NorthDir)%360,pitch:e.Pitch});if(e.Enters&&0<e.Enters.length){c.indoorPois=[];for(var f=0,g=e.Enters.length;f<g;f++)c.indoorPois.push({panoIId:e.Enters[f].IID,panoId:e.Enters[f].BreakID,title:e.Enters[f].Name,pointX:e.Enters[f].X/100,pointY:e.Enters[f].Y/100})}var g=[],i=e.VPoint;if(i)for(var k= i.length,f=0;f<k;f++){var m={};m.PID=i[f].PID;var n=ec.Wd.rj(new R(i[f].X/100,i[f].Y/100));m.X=6378137*-(n.lat-c.position.lat)/180*Math.PI;m.Z=6378137*(n.lng-c.position.lng)/180*Math.PI;g.push(m)}c.VPoint=g;e.Inters&&0<e.Inters.length&&(c.Rl=e.Inters[0].BreakID,c.LU=e.Inters[0].IID,c.heading=e.MoveDir,c.pitch=e.Pitch);b&&(c.Rl=b.Rl);c.copyright={};c.copyright.admission=e.Admission;c.copyright.dataProviderIndex=e.Provider;c.copyright.photoDate=e.Date;c.copyright.roadName=e.Rname;c.copyright.username= e.Username||"";return c},tS:function(a,b,c,e,f){var g=[],i={};if(a.Links)for(var k=0;k<a.Links.length;k++)g.push({id:a.Links[k].PID,dir:a.Links[k].DIR,x:a.Links[k].X/100,y:a.Links[k].Y/100,heading:a.Links[k].DIR,refinedDir:this.Hz(a.Links[k].DIR,f)});if(!a.Roads)return[g,i];for(k=0;k<a.Roads.length;k++)if(a.Roads[k].Panos)for(var m=0;m<a.Roads[k].Panos.length;m++){var n=a.Roads[k].Width||0;if(a.Roads[k].Panos[m].PID==b){var o=a.Roads[k].Name;""==o&&(o=a.Rname||"\\u672a\\u77e5");for(var s=q,v=q,w,y, A=m-1;0<=A;A--){a.Roads[k].Panos[A]&&s===q&&(s=a.Roads[k].Panos[A],w=(s.DIR+180)%360,i[w]=[]);var B=a.Roads[k].Panos[A];i[w]&&i[w].push({id:B.PID,x:B.X/100,y:B.Y/100,distanceToCurrent:this.zn(B.X/100,B.Y/100,c,e)})}s&&g.push({id:s.PID,dir:w,heading:w,description:o,roadWidth:n,x:s.X/100,y:s.Y/100,refinedDir:this.Hz(w,f)});for(A=m+1;A<a.Roads[k].Panos.length;A++)a.Roads[k].Panos[A]&&v===q&&(v=a.Roads[k].Panos[A],y=v.DIR,0==y&&(y=a.Roads[k].Panos[m].DIR),i[y]=[]),B=a.Roads[k].Panos[A],i[y]&&i[y].push({id:B.PID, x:B.X/100,y:B.Y/100,distanceToCurrent:this.zn(B.X/100,B.Y/100,c,e)});v!=q&&g.push({id:v.PID,dir:y,heading:y,description:o,roadWidth:n,x:v.X/100,y:v.Y/100,refinedDir:this.Hz(y,f)})}for(A=0;A<g.length;A++)a.Roads[k].Panos[m].PID==g[A].id&&(g[A].description=a.Roads[k].Name,""==g[A].description&&(g[A].description=a.Rname||"\\u672a\\u77e5"))}for(k=0;k<g.length;k++){var a=g[k].dir,b=t,C;for(C in i)if(C==a){b=p;break}if(b)break;i[a]=[{id:g[k].id,x:g[k].x,y:g[k].y,distanceToCurrent:this.zn(g[k].x,g[k].y,c, e)}]}return[g,i]},Hz:function(a,b){var c=a+b;360<c&&(c%=360);return c=Math.round(100*c)/100},zn:function(a,b,c,e){return Math.round(Math.sqrt(Math.pow(a-c,2)+Math.pow(b-e,2)))},ER:function(a,b){this.Qg(ec.Xk+"qt=idata&l=17&iid="+a+"&fn=",function(a){a&&a.result&&0===a.result.error?b(a.content[0].interinfo):b(q)})}});Me=ec.prototype;V(Me,{getPanoramaById:Me.Ko,getPanoramaByLocation:Me.fj,getPanoramaByPOIId:Me.Uw});function Di(a){this.tileSize=new P(512,512);this.worldSize=new P(512*this.No(Be),512*this.Xw(Be));this.centerHeading=180;var a=a||{},b;for(b in a)this[b]=a[b]}var Ei=D.$h("pano","scape/");z.extend(Di.prototype,{getTilesUrl:function(a,b,c){return Ei[(b.x+b.y)%Ei.length]+"?qt=pdata&sid={sid}&pos={y}_{x}&z={zoom}".replace("{sid}",a).replace("{x}",b.x).replace("{y}",b.y).replace("{zoom}",c)},Xw:function(a){return Math.pow(2,a-2)},No:function(a){return 2*this.Xw(a)}}); ');
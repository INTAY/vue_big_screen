/**
 * 离线API初始化, 请在加载map3.0.js之前引入
 */

/**
 * 这是必须要确认的配置
 * 瓦片图必须是png图像
 */
var bmapcfg = {
  'imgext': '.png', //瓦片图的后缀  根据需要修改，一般是 .png .jpg
  'tiles_dir': '../../../public/static/tiles', //普通瓦片图的地址，为空默认在tiles/ 目录

};
var scripts = document.getElementsByTagName("script");
var JS__FILE__ = scripts[scripts.length - 1].getAttribute("src"); //获得当前js文件路径
bmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/") + 1); //地图API主目录

(function () {
  window.BMap_loadScriptTime = (new Date).getTime();
  //在html页面写入js路径的函数
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"' +
            ' type="text/javascript"><' + '/script>')
  }
  getScript(bmapcfg.home +'mapAPI3.0.js')
})();


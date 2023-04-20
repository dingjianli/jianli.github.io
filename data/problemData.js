export default {
  /* 问题汇集 */
  problem: [
    {
      name: "旧问题，webpack初始化项目后，配置打包环境build路径设置为",
      type: "webpack、vue",
      time: "2022-07-05",
      project: "数智化运维平台",
      level: 1,
      solveText: `
            (1).原因：静态资源环境没有配置妥当，打包后出现404和不显示问题；
            (2).解决办法：config文件夹-index.js文件：build对象
            assetsRoot: path.resolve(__dirname, '../dist'),
            assetsSubDirectory: 'static',
            assetsPublicPath: './',
            打包后出现样式，图片丢失问题，还需在utils.js文件中设置
            return ExtractTextPlugin.extract({
                use: loaders,
                publicPath: '../../',
                fallback: 'vue-style-loader'
            })
            `
    },
    {
      name:
        "项目包含 node-sass npm install报错：https://github.com/sass/node-sass/releases/download/v4.14.1/win32-x64-72_binding.node",
      type: "webpack、vue",
      time: "2022-06-30",
      project: "数智化运维平台",
      level: 0.5,
      solveText: `
            (1).原因：node-sass 被墙掉了，导致下载不了；
            (2).解决办法：npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
            (3).参照：https://blog.csdn.net/weixin_42614080/article/details/107052787
            `
    },
    {
      name: "velementui Dropdown下拉菜单信息的位置",
      type: "webpack、vue",
      time: "2022-06-28",
      project: "数智化运维平台",
      level: 0.5,
      solveText: `
            (1).思路：把fixed修改维absolute根据父元素相对定位，设置append-to-body、class类名；
            (2).实现：<el-dropdown-menu slot="dropdown" placement="bottom-end" :append-to-body="false" class="popper-dropdown"></el-dropdown-menu>；
            (3).样式设定:min-width: 150px;position: absolute !important;top: 25px !important;left: -140px !important;
            `
    },
    {
      name: "vue项目中px自动转化vh",
      type: "webpack、vue",
      time: "2022-06-23",
      project: "数智化运维平台",
      level: 0.5,
      solveText: `
            (1).使用：安装npm i postcss-px-to-viewport --save-dev；
              再在.postcssrc.js中设置配置即可(vue项目安装配置有些问题)
            `
    },
    {
      name: "使用node16.15.1版本，对应的node-sass版本出错",
      type: "webpack、vue",
      time: "2022-06-23",
      project: "数智化运维平台",
      level: 0.5,
      solveText: `
            (1).原因：npm install项目，导致程序报错，运行不起来；
            (2).解决办法：node版本问题，降低版本，且对应的node有对应的node-sass版本介绍！
            `
    },
    {
      name:
        "根据获取到的经纬度坐标实时显示飞机位置，却与别的系统的显示位置不一样",
      type: "react、Cesium",
      time: "2022-05-31",
      project: "广州无人机项目",
      level: 2,
      solveText: `
            (1).原因：经纬度坐标系不一样，可能一个使用的是火星坐标系，一个使用的是84坐标系；
            (2).解决办法：获取到的经纬度转化对应即可；https://blog.csdn.net/qq_34149805/article/details/78393540
            `
    },
    {
      name:
        "项目需求：根据后端返回的数据，使用cesium动态绘制实体实时移动，实时轨迹绘制。",
      type: "react、vue",
      time: "2022-05-12",
      project: "广州无人机项目",
      level: 2,
      solveText: `
            (1).描述：保证实体实时移动，且轨迹绘制，需使用计时器一直请求更新数据，且针对绘制轨迹还得存储之前的经纬度数据；
            (2).解决思路：1)使用cesium的czml方式添加实体、定时器实时获取，使用czml的更新方法，保证实体移动；
                        2)使用cesium绘制线条的方法，通过CallbackProperty方法更新展示动态绘制的效果；
                        3)后端返回的数据，数量会发生变化，且返回的数据顺序也会发生变化，因此遍历操作时需要针对性把对应获取到的数据给对应的实体;
                        4)在项目右上角点击资源列表 drawer抽屉中点击 "cesium针对数据顺序、数量发生变化，动态绘制对应实体移动以及轨迹"
            `
    },
    {
      name:
        "框架式的项目在使用其特定函数或者使用第三方插件的时候，如加载图片或者一些资源的时候失败显示不出来",
      type: "react、vue",
      time: "2022-05-09",
      project: "广州无人机项目",
      level: 1,
      solveText: `
            (1).描述：在rect项目中使用cesium(EV-Goble)框架的时候，加载czml数据类型时，添加广告牌实体图片显示不出来；
            (2).解决办法：初步尝试使用import方式引入，赋值变量加载，还是出现问题；
                          直接使用引入图片相对路径、绝对路径，还是显示不出来；
                          之后打印其cesium的czml对象发现图片还是加载失败；最后尝试require方式引入，成功！
            `
    },
    {
      name:
        "从gitcode上下载一个后台管理系统的代码，通过下载zip格式和git clone方式，使用npm install安装式报错",
      type: "vue+elementui",
      time: "2022-04-28",
      project: "管理系统项目",
      solveText: `
            (1).报错描述：
                npm ERR! Error while executing:
                npm ERR! C:\Program Files\Git\cmd\git.EXE ls-remote -h -t https://github.com/nhn/raphael.git
                npm ERR!
                npm ERR! fatal: unable to access 'https://github.com/nhn/raphael.git/': OpenSSL SSL_read: Connection was reset, errno 10054\n
                npm ERR! exited with error code: 128
                npm ERR! A complete log of this run can be found in:
                npm ERR!     C:\Users\admin\AppData\Roaming\ npm-cache\_logs\ 2021-03-11T07_34_53_299Z-debug.log      \n
            (2).解决办法：
                cd 项目根目录
                git config --global url."https://".insteadOf git://
            (3).暂时没有找到问题的原因，估测是git配置问题。
            `,
      level: 2
    },
    {
      name:
        "cesium绘制点、线、面选择绘制，不在cesium上点击，出现点、线、面混杂绘制的问题",
      type: "cesium",
      time: "2022-04-08",
      project: "管理系统项目",
      solveText: `(1)cesium绘制函数setInputAction在其点击选择绘制形状的时候已经赋值可以绘制，在切换到其余模块的时候上次的绘制没有结束导致混杂，为此在绘制开始的时候，要判断是否在cesium上开始点击绘制了\n(2)new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas).setInputAction(function (event) { \n &nbsp;&nbsp;if(区别字段 == "绘制图形传值"){\n&nbsp;&nbsp;&nbsp;&nbsp;绘制模块代码\n&nbsp;&nbsp;}\n})`,
      level: 1
    },
    {
      name: "cesium加载json设置边界线宽度无法修改",
      type: "cesium",
      time: "2022-04-06",
      project: "管理系统项目",
      solveText: `(1)使用cesium加载josn的方法设置strokeWidth(宽度)不起作用，修改使用添加面的方法编写，即是获取到该地区的经纬度数据，遍历填充即可`,
      level: 1
    },
    {
      name: "nodejs学习,执行安装后第三方库文件夹没有显示",
      type: "node",
      time: "2022-04-02",
      project: "学习",
      solveText: `(1)安装执行后文件没有出现\n查看npm配置npm config list\n 获取全局安装目录 npm root -g \n(2)查看发现是由于npm全局安装导致的，修改全局配置npm config set global=false\n (3)重新npm install 包`,
      level: 0.5
    },
    {
      name: "vue后端返回换行问题",
      type: "vue",
      time: "2022-03-31",
      project: "管理系统项目",
      solveText: `(1).后端返回的数据中包含换行符,通过正则replace(/换行符/g,"<br/>")替换\n(2).通过v-html放置到标签容器中，不要直接用{{数据}}这中写法`,
      level: 0.5
    },
    {
      name: "vue2.5.2+webpack favicon.ico不显示问题",
      type: "vue",
      time: "2022-03-21",
      project: "PlatFormXB项目管理系统",
      solveText: `(1).favicon.ico放到 index.html放到同一目录\n(2).在webpack.dev.conf.js 里面的 plugins配置\nnew HtmlWebpackPlugin({\nfilename: 'index.html',\ntemplate: 'index.html',\ninject: true,\nfavicon: './favicon.ico'//增加这条\n}),\n在 webpack.prod.conf.js 里面 plugins 配置，不然build的时候也找不到favicon.ico\nnew HtmlWebpackPlugin({\nfilename: config.build.index,\ntemplate: 'index.html',\ninject: true,\nfavicon: './favicon.ico',//增加这条\nminify: {\nremoveComments: true,\ncollapseWhitespace: true,\nremoveAttributeQuotes: true\n},\nchunksSortMode: 'dependency'\n}),\n(3).link rel="shortcut icon" type="image/x-icon" href="./favicon.ico"\n(4).重新启动项目`,
      level: 0.5
    },
    {
      name: "使用cookie储存token，打包完后，在本地登录，路由不跳转",
      type: "vue",
      time: "2022-03-14",
      project: "H6000航测监管平台",
      solveText: ` (1).本地环境下cookie不运行，获取的token储存不到，路由守卫不允许跳转\n(2).使用window.sessionStorage,粗存调取`,
      level: 1
    },
    {
      name: "vue设置配置文件(前端)",
      type: "vue",
      time: "2021-10-20",
      project: "管理系统项目",
      solveText: `(1)由于更换服务器地址原因(没有采纳域名式),设置配置文件，避免重复打包\n(2)在static文件夹设置XXX.js文件，中使用window.xxx变量粗存，在index.html文件中，用script的方式引入，即可，这样修改完配置文件后，刷新即可得到修改后的需求，如果使用import方式引入则达不到该想法需求；`,
      level: 1.5
    }
  ],
  /* 网站汇聚 */
  webSite: [
    {
      name: "Js(三)将es6语法转换成es5语法",
      url: "https://blog.csdn.net/makasa/article/details/120703012"
    },
    {
      name: "js hover悬浮框 不超出屏幕 自动定位",
      url: "https://blog.csdn.net/Embrace924/article/details/81095443"
    },
    {
      name: "vue自定义窗口拖拽事件v-drag",
      url:
        "https://blog.csdn.net/weixin_47239395/article/details/118088986?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-118088986-blog-119460294.pc_relevant_multi_platform_whitelistv2&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-118088986-blog-119460294.pc_relevant_multi_platform_whitelistv2&utm_relevant_index=1"
    },
    {
      name: "vue+element-ui对话框可拖拽功能(不超出屏幕)",
      url: "https://www.jb51.net/article/145807.htm"
    },
    {
      name: "vue+element-ui对话框可拖拽功能、双击放大",
      url: "https://blog.csdn.net/qq_43059898/article/details/119460294"
    },
    {
      name: "vue+cesium 组件方式安装",
      url: "https://vue-cesium.songluck.com/#/zh-CN/component/installation"
    },
    {
      name: "vue实现分环境进行打包",
      url: "https://blog.csdn.net/weixin_43898997/article/details/123355469"
    },
    {
      name: "阿里云端数据库rap",
      url: "http://rap2.taobao.org/account/login"
    },
    {
      name: "试试吧 在线工具平台",
      url: "https://try8.cn/"
    },
    {
      name: "炫酷可视化网站，立足于echarts的研发",
      url: "http://192.144.199.210/forum.php?mod=forumdisplay&fid=2"
    },
    {
      name: "后台管理系统模板，参照研发，也可下载",
      url: "https://blog.csdn.net/weixin_44283432/article/details/109574123"
    },
    {
      name: "中国地图json、svg等其他类型的数据格式地址",
      url: "https://datav.aliyun.com/portal/school/atlas/area_selector"
    },
    {
      name: "中国地图乡镇Json数据获取",
      url: "https://hxkj.vip/demo/echartsMap/"
    },
    {
      name: "Vue+百度地图的使用",
      url: "https://dafrok.github.io/vue-baidu-map/#/zh/start/installation"
    },
    {
      name: "webpack+vue+cesiumjs的环境搭建【script引入】",
      url: "https://www.cnblogs.com/reround/p/11943717.html"
    },
    {
      name: "webpack+vue 中引入1.71版本cesium【第三方依赖引入】",
      url: "https://blog.csdn.net/qq_29384639/article/details/107363563"
    },
    {
      name: "vue项目会用到的UI框架",
      url: "https://blog.csdn.net/qq_41619796/article/details/109514327"
    },
    {
      name: "superMap超图",
      url:
        "http://support.supermap.com.cn:8090/webgl/web/introduction/intro_3DWebgl.html#introduce"
    },
    {
      name: "pixi.js中文网 二维画图",
      url: "https://pixijs.huashengweilai.com/"
    },
    {
      name: "模板之家，后台管理系统模板",
      url: "http://www.cssmoban.com/cssthemes/houtaimoban/"
    },
    {
      name: "visJS 关系联动图",
      url: "https://visjs.github.io/vis-network/examples/"
    },
    {
      name: "visJS介绍入门",
      url: "https://blog.csdn.net/cuishizun/article/details/80399358"
    },
    {
      name: "在线工具",
      url: "https://tool.lu/"
    },
    {
      name: "在线去除图片背景",
      url: "https://www.remove.bg/zh"
    },
    {
      name: "阿里巴巴图标库",
      url: "https://www.iconfont.cn/"
    },
    {
      name: "cesium中文网络",
      url: "http://cesium.xin/"
    },
    {
      name: "cesium初始化页面控件隐藏",
      url: "https://www.cnblogs.com/yaosusu/p/11482089.html"
    },
    {
      name: "webpack+vue+cesium引入静态资源方式(script)",
      url: "https://www.cnblogs.com/reround/p/11943717.html"
    },
    {
      name: "webpack+vue+cesium1.71版本(important)",
      url: "https://blog.csdn.net/qq_29384639/article/details/107363563"
    },
    {
      name: "cesium相关操作",
      url:
        "https://blog.csdn.net/weixin_39150852/article/details/118760306?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-12-118760306.pc_agg_new_rank&utm_term=cesium%E8%AF%A5%E5%8C%BA%E5%9F%9F%E6%97%A0%E5%BD%B1%E5%83%8F&spm=1000.2123.3001.4430"
    },
    {
      name: "cesium读取json",
      url: "https://www.pianshen.com/article/84351280027/"
    },
    {
      name: "cesium鹰眼功能",
      url: "https://www.freesion.com/article/96141264647/"
    },
    {
      name: "屏蔽Cesium的默认双击追踪选中entity行为",
      url: "https://blog.k-res.net/archives/2372.html"
    }
  ]
};

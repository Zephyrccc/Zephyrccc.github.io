(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{410:function(_,e,v){"use strict";v.r(e);var i=v(4),r=Object(i.a)({},(function(){var _=this,e=_._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"user-ini文件利用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-ini文件利用"}},[_._v("#")]),_._v(" .user.ini文件利用")]),_._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[_._v("#")]),_._v(" 背景")]),_._v(" "),e("ul",[e("li",[_._v("传统的利用"),e("code",[_._v(".htaccess")]),_._v("文件添加解析规则绕过仅限于"),e("code",[_._v("apache")]),_._v("局限性很强")]),_._v(" "),e("li",[_._v("而"),e("code",[_._v(".user.ini")]),_._v("则比"),e("code",[_._v(".htaccess")]),_._v("用的更广，不管是"),e("code",[_._v("nginx/apache/IIS")]),_._v("，只要是以"),e("code",[_._v("fastcgi")]),_._v("运行的"),e("code",[_._v("php")]),_._v("都可以用这个方法。利用面可谓很广，不像"),e("code",[_._v(".htaccess")]),_._v("有局限性")])]),_._v(" "),e("h2",{attrs:{id:"user-ini"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-ini"}},[_._v("#")]),_._v(" .user.ini")]),_._v(" "),e("h3",{attrs:{id:"什么是-user-ini"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-user-ini"}},[_._v("#")]),_._v(" 什么是.user.ini")]),_._v(" "),e("p",[e("code",[_._v("php.ini")]),_._v("是"),e("code",[_._v("php")]),_._v("默认的配置文件，其中包括了很多"),e("code",[_._v("php")]),_._v("的配置，这些配置中，又分为几种："),e("code",[_._v("PHP_INI_SYSTEM")]),_._v("、"),e("code",[_._v("PHP_INI_PERDIR")]),_._v("、"),e("code",[_._v("PHP_INI_ALL")]),_._v("、"),e("code",[_._v("PHP_INI_USER")]),_._v("。 "),e("a",{attrs:{href:"http://php.net/manual/zh/ini.list.php",target:"_blank",rel:"noopener noreferrer"}},[_._v("在此可以查看"),e("OutboundLink")],1),_._v("这几种模式有什么区别？官方的解释如下：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Zephyrccc/ImageHostingService/Blog/.user.ini1.png",alt:"user.ini1"}})]),_._v(" "),e("ul",[e("li",[_._v("其中就提到了，模式为"),e("code",[_._v("PHP_INI_USER")]),_._v("的配置项，可以在"),e("code",[_._v("ini_set()")]),_._v("函数中设置、注册表中设置，再就是"),e("code",[_._v(".user.ini")]),_._v("中设置。 这里就提到了"),e("code",[_._v(".user.ini")]),_._v("，那么这是个什么配置文件？那么官方文档在"),e("a",{attrs:{href:"http://php.net/manual/zh/configuration.file.per-user.php",target:"_blank",rel:"noopener noreferrer"}},[_._v("这里"),e("OutboundLink")],1),_._v("又解释了：")]),_._v(" "),e("li",[_._v("除了主"),e("code",[_._v("php.ini")]),_._v("之外，"),e("code",[_._v("PHP")]),_._v(" 还会在每个目录下扫描"),e("code",[_._v("INI")]),_._v("文件，从被执行的"),e("code",[_._v("PHP")]),_._v("文件所在目录开始一直上升到"),e("code",[_._v("web")]),_._v("根目录（"),e("code",[_._v("$_SERVER['DOCUMENT_ROOT']")]),_._v(" 所指定的）。如果被执行的"),e("code",[_._v("PHP")]),_._v("文件在"),e("code",[_._v("web")]),_._v("根目录之外，则只扫描该目录")]),_._v(" "),e("li",[_._v("在 "),e("code",[_._v(".user.ini")]),_._v(" 风格的"),e("code",[_._v("INI")]),_._v("文件中只有具有"),e("code",[_._v("PHP_INI_PERDIR")]),_._v("和"),e("code",[_._v("PHP_INI_USER")]),_._v("模式的"),e("code",[_._v("INI")]),_._v("设置可被识别")]),_._v(" "),e("li",[_._v("这里就很清楚了，"),e("code",[_._v(".user.ini")]),_._v("实际上就是一个可以由用户“自定义”的"),e("code",[_._v("php.ini")]),_._v("，我们能够自定义的设置是模式为"),e("code",[_._v("PHP_INI_PERDIR")]),_._v(" 、"),e("code",[_._v("PHP_INI_USER")]),_._v("的设置。（上面表格中没有提到的"),e("code",[_._v("PHP_INI_PERDIR")]),_._v("也可以在"),e("code",[_._v(".user.ini")]),_._v("中设置）")]),_._v(" "),e("li",[_._v("实际上，除了"),e("code",[_._v("PHP_INI_SYSTEM")]),_._v("以外的模式（包括"),e("code",[_._v("PHP_INI_ALL")]),_._v("）都是可以通过"),e("code",[_._v(".user.ini")]),_._v("来设置的。")]),_._v(" "),e("li",[_._v("而且，和"),e("code",[_._v("php.ini")]),_._v("不同的是，"),e("code",[_._v(".user.ini")]),_._v("是一个能被动态加载的"),e("code",[_._v("ini")]),_._v("文件。也就是说我修改了"),e("code",[_._v(".user.ini")]),_._v("后，不需要重启服务器中间件，只需要等待"),e("code",[_._v("user_ini.cache_ttl")]),_._v("所设置的时间（默认为300秒），即可被重新加载。")]),_._v(" "),e("li",[_._v("然后我们看到"),e("code",[_._v("php.ini")]),_._v("中的配置项，可惜我沮丧地发现，只要稍微敏感的配置项，都是"),e("code",[_._v("PHP_INI_SYSTEM")]),_._v("模式的（甚至是"),e("code",[_._v("php.ini only")]),_._v("的），包括"),e("code",[_._v("disable_functions")]),_._v("、"),e("code",[_._v("extension_dir")]),_._v("、"),e("code",[_._v("enable_dl")]),_._v("等。 不过，我们可以很容易地借助"),e("code",[_._v(".user.ini")]),_._v("文件来构造一个“后门”。")]),_._v(" "),e("li",[_._v("Php配置项中有两个比较有意思的项（下图第一、四个）：")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Zephyrccc/ImageHostingService/Blog/.user.ini2.png",alt:"user.ini2"}})]),_._v(" "),e("p",[e("code",[_._v("auto_append_file")]),_._v("、"),e("code",[_._v("auto_prepend_file")]),_._v("，点开看看什么意思")]),_._v(" "),e("h3",{attrs:{id:"auto-append-file、auto-prepend-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auto-append-file、auto-prepend-file"}},[_._v("#")]),_._v(" auto_append_file、auto_prepend_file")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Zephyrccc/ImageHostingService/Blog/.user.ini3.png",alt:"user.ini3"}})]),_._v(" "),e("p",[_._v("指定一个文件，自动包含在要执行的文件前，类似于在文件前调用了"),e("code",[_._v("require()")]),_._v("函数。而"),e("code",[_._v("auto_append_file")]),_._v("类似，只是在文件后面包含。 使用方法很简单，直接写在"),e("code",[_._v(".user.ini")]),_._v("中：")]),_._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[_._v("auto_prepend_file"),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v("hackcode"),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v(".")]),_._v("gif\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br")])]),e("ul",[e("li",[e("code",[_._v("hackcode.gif")]),_._v("是要包含的文件")]),_._v(" "),e("li",[_._v("所以，我们可以借助"),e("code",[_._v(".user.ini")]),_._v("轻松让所有"),e("code",[_._v("php")]),_._v("文件都“自动”包含某个文件，而这个文件可以是一个正常"),e("code",[_._v("php")]),_._v("文件，也可以是一个包含一句话的"),e("code",[_._v("webshell")])]),_._v(" "),e("li",[_._v("限制：需要在"),e("code",[_._v(".user.ini")]),_._v("同级目录下拥有至少一个可执行php文件")])]),_._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),e("p",[_._v("思考一下在哪些情况下可以用到这个姿势？ 比如，某网站限制不允许上传"),e("code",[_._v(".php")]),_._v("文件，你便可以上传一个"),e("code",[_._v(".user.ini")]),_._v("，再上传一个图片马，包含起来进行"),e("code",[_._v("getshell")]),_._v("。不过前提是含有"),e("code",[_._v(".user.ini")]),_._v("的文件夹下需要有正常的"),e("code",[_._v("php")]),_._v("文件，否则也不能包含了。 再比如，只是想隐藏个后门，这个方式也是最方便的。")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://wooyun.js.org/drops/user.ini%E6%96%87%E4%BB%B6%E6%9E%84%E6%88%90%E7%9A%84PHP%E5%90%8E%E9%97%A8.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("原文链接"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);
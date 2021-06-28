(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{612:function(a,t,e){"use strict";e.r(t);var r=e(27),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"unicode-支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unicode-支持"}},[a._v("#")]),a._v(" Unicode 支持")]),a._v(" "),e("p",[a._v("作为 JDK 7 发布，正则表达式模式匹配的扩展功能支持 Unicode 6。")]),a._v(" "),e("ul",[e("li",[a._v("匹配一个特定的代码点")]),a._v(" "),e("li",[a._v("Unicode 字符属性")])]),a._v(" "),e("h2",{attrs:{id:"匹配特定的代码点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#匹配特定的代码点"}},[a._v("#")]),a._v(" 匹配特定的代码点")]),a._v(" "),e("p",[a._v("您可以使用表单的转义序列匹配特定的 Unicode 代码点 "),e("code",[a._v("\\uFFFF")]),a._v("，其中 FFFF 要匹配的代码点的十六进制值。\n例如，"),e("code",[a._v("\\u6771")]),a._v(" 匹配汉字为“东”。")]),a._v(" "),e("p",[a._v("或则，您可以使用 Perl 样式十六进制表示法指定代码点 "),e("code",[a._v("\\x{...}")]),a._v(" 例如：")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" hexPattern "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\\\x{"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("toHexString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("codePoint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("----？ 然而并没有看懂这个匹配的是个啥。")]),a._v(" "),e("h2",{attrs:{id:"unicode-字符属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unicode-字符属性"}},[a._v("#")]),a._v(" Unicode 字符属性")]),a._v(" "),e("p",[a._v("每个 Unicode 字符，除了它的值，都有一些属性或属性。您可以将属于特定类别的单个字符与表达式 "),e("code",[a._v("\\p{prop}")]),a._v(" 进行匹配。")]),a._v(" "),e("p",[a._v("您可以将不属于特定类别的单个字符与表达式 "),e("code",[a._v("\\p{prop}")]),a._v(" 进行匹配。")]),a._v(" "),e("p",[a._v("三种支持的属性类型是脚本块和“一般”类别。")]),a._v(" "),e("h3",{attrs:{id:"脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[a._v("#")]),a._v(" 脚本")]),a._v(" "),e("p",[a._v("要确定代码点是否属于特定脚本，您可以使用 script 关键字或 sc 短格式，例如 "),e("code",[a._v("\\p{script=Hiragana}")]),a._v("。\n或者，您可以在脚本名称前面加上  Is  字符串，例如"),e("code",[a._v("\\p{IsHiragana}")]),a._v("。")]),a._v(" "),e("p",[a._v("支持的有效脚本名称 Pattern 是被接受的 脚本名称"),e("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Character.UnicodeScript.html#forName-java.lang.String-",target:"_blank",rel:"noopener noreferrer"}},[a._v("UnicodeScript.forName。"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#块"}},[a._v("#")]),a._v(" 块")]),a._v(" "),e("p",[a._v("块可以利用来指定 block 的关键字，或 blk 短形式，例如，"),e("code",[a._v("\\p{block=Mongolian}")]),a._v("。或者，\n您可以使用字符串为块名称前缀 In，例如 "),e("code",[a._v("\\p{InMongolian}")]),a._v("。")]),a._v(" "),e("p",[a._v("支持的有效的块名称 Pattern 是被接受的 "),e("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Character.UnicodeBlock.html#forName-java.lang.String-",target:"_blank",rel:"noopener noreferrer"}},[a._v("UnicodeBlock.forName"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"一般类别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一般类别"}},[a._v("#")]),a._v(" 一般类别")]),a._v(" "),e("p",[a._v("可以使用可选前缀指定类别 Is。例如，IsL 匹配 Unicode 字母的类别。也可以使用 general_category 关键字或简写表来指定类别 gc。\n例如，可以使用 general_category=Lu 或匹配大写字母 gc=Lu。")]),a._v(" "),e("p",[a._v("支持的类别是由类指定的版本中的\n"),e("a",{attrs:{href:"http://www.unicode.org/standard/standard.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unicode标准"),e("OutboundLink")],1),a._v(" "),e("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Character.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Character"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("blockquote",[e("p",[a._v("---?这一章节我是完全没有看懂是个啥")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
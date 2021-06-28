(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{570:function(a,t,s){"use strict";s.r(t);var e=s(27),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"检查文件或目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查文件或目录"}},[a._v("#")]),a._v(" 检查文件或目录")]),a._v(" "),s("p",[a._v("您有一个 Path 表示文件或目录的实例，但文件系统上是否存在该文件？是否可读？可写？可执行？")]),a._v(" "),s("h2",{attrs:{id:"验证文件或目录的存在"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证文件或目录的存在"}},[a._v("#")]),a._v(" 验证文件或目录的存在")]),a._v(" "),s("p",[a._v("Path 类中的方法是语法？（就是不对真实的文件系统做操作），这意味着它们在 Path 实例上操作。\n但是最终你必须访问文件系统来验证某个特定 Path 是否存在，否则不存在。您可以使用 "),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#exists-java.nio.file.Path-java.nio.file.LinkOption...-",target:"_blank",rel:"noopener noreferrer"}},[a._v("exists(Path, LinkOption...)"),s("OutboundLink")],1),a._v(" 和 "),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#notExists-java.nio.file.Path-java.nio.file.LinkOption...-",target:"_blank",rel:"noopener noreferrer"}},[a._v("notExists(Path, LinkOption...)"),s("OutboundLink")],1),a._v(" 方法来做到这一点 。\n注意 "),s("code",[a._v("!Files.exists(path)")]),a._v(" 不等同于 "),s("code",[a._v("Files.notExists(path)")]),a._v("。当您测试文件的存在时，可能有三个结果：")]),a._v(" "),s("ul",[s("li",[a._v("文件被验证存在。")]),a._v(" "),s("li",[a._v("该文件被验证为不存在。")]),a._v(" "),s("li",[a._v("该文件的状态是未知的。当程序无法访问该文件时，可能会发生此结果。")])]),a._v(" "),s("p",[a._v("如果同时 exists 和 notExists 回报 false，该文件的存在，无法验证。")]),a._v(" "),s("h2",{attrs:{id:"检查文件可访问性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查文件可访问性"}},[a._v("#")]),a._v(" 检查文件可访问性")]),a._v(" "),s("p",[a._v("要验证需要的程序可以访问一个文件，你可以使用\n"),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#isReadable-java.nio.file.Path-",target:"_blank",rel:"noopener noreferrer"}},[a._v("isReadable(Path)"),s("OutboundLink")],1),a._v("，\n"),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#isWritable-java.nio.file.Path-",target:"_blank",rel:"noopener noreferrer"}},[a._v("isWritable(Path)"),s("OutboundLink")],1),a._v(" 和\n"),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#isExecutable-java.nio.file.Path-",target:"_blank",rel:"noopener noreferrer"}},[a._v("isExecutable(Path)"),s("OutboundLink")],1),a._v(" 方法。")]),a._v(" "),s("p",[a._v("以下代码段验证特定文件是否存在，并且程序能够执行该文件。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Path")]),a._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" isRegularExecutableFile "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("isRegularFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("isReadable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("isExecutable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("strong",[a._v("注意：")]),a._v(" 一旦这些访问完成，就不能保证文件能访问，因为这些方法的结果是立即过时的。\n许多应用程序中常见的安全漏洞是执行检查，然后访问该文件。有关更多信息，请使用您最喜爱的搜索引擎查找 TOCTTOU（发音为 TOCK，TOCTOU 是 time-of-check-to-time-of-use 的缩写）。")]),a._v(" "),s("h2",{attrs:{id:"检查两个路径是否找到相同的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查两个路径是否找到相同的文件"}},[a._v("#")]),a._v(" 检查两个路径是否找到相同的文件")]),a._v(" "),s("p",[a._v("当您有一个使用符号链接的文件系统时，可能有两个不同的路径来找到相同的文件。该\n"),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#isSameFile-java.nio.file.Path-java.nio.file.Path-",target:"_blank",rel:"noopener noreferrer"}},[a._v("isSameFile(Path, Path)"),s("OutboundLink")],1),a._v("\n方法比较两个路径以确定它们是否在文件系统上找到相同的文件。例如：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Path")]),a._v(" p1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Path")]),a._v(" p2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("isSameFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Logic when the paths locate the same file")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{707:function(a,s,t){"use strict";t.r(s);var n=t(27),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符"}},[a._v("#")]),a._v(" 字符")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#转义序列"}},[a._v("转义序列")])])])]),t("p"),a._v(" "),t("p",[a._v("大多数情况下，如果使用单个字符值，则将使用原始 char 类型。例如：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" ch "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Unicode 字符")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" uniChar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\\u03A9'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 一个字符数组")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" charArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'b'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'c'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'d'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'e'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("然而，有时需要使用 char 作为对象，例如，将对象作为方法参数。Java 编程语言提供了一个 "),t("strong",[a._v("包装类")]),a._v(" ，为了这个目的包装 char 到一个 Character 对象。Character 包含单个字段，其类型为 char。 Character 类还提供了许多有用的类（即静态）方法来处理字符。")]),a._v(" "),t("p",[a._v("你可以使用构造函数来构造一个 Character")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Character")]),a._v(" ch "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Character")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Character 在某些情况下，Java 编译器也会为你创建一个对象。例如，如果您将一个基元传递给 char 期望对象的方法，编译器会自动将 char 转换为 Character。\n如果转换是以其他方式进行，则此功能称为自动装箱或拆箱。有关自动装箱和拆箱的更多信息，请参阅 "),t("RouterLink",{attrs:{to:"/java/data/autoboxing.html"}},[a._v("自动装箱和拆箱")]),a._v("。")],1),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("这个 Character 类是不可变的，所以一旦它被创建，一个 Character 对象就不能被改变。")])]),a._v(" "),t("p",[a._v("下表列出了 Character 类中最有用的一些方法，但并不详尽。有关此类中所有方法（超过 50个）的完整列表，请参阅 java.lang.Character API 规范。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("确定指定的 char 值是分别是一个字母还是一个数字。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isLetter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" ch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isDigit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" ch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("确定指定的 char 值是否为空白。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isWhitespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" ch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("确定指定的 char 值是分别是大写还是小写。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isUpperCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" ch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isLowerCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" ch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("返回指定 char 值的大写或小写形式。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toUpperCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" ch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toLowerCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" ch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("返回 String 表示指定字符值的对象 - 即一个字符的字符串。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" ch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])]),a._v(" "),t("h2",{attrs:{id:"转义序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转义序列"}},[a._v("#")]),a._v(" 转义序列")]),a._v(" "),t("p",[a._v("以反斜杠（"),t("code",[a._v("\\")]),a._v("）开头的字符是转义序列，对编译器有特殊意义。下表显示了 Java 转义字符：")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("转义字符")]),a._v(" "),t("th",[a._v("描述")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[t("code",[a._v("\\t")])]),a._v(" "),t("td",[a._v("在此处插入一个 tab。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("\\b")])]),a._v(" "),t("td",[a._v("在这一点上在文本中插入一个退格。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("\\n")])]),a._v(" "),t("td",[a._v("此时在文本中插入换行符。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("\\r")])]),a._v(" "),t("td",[a._v("此时在文本中插入一个回车符。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("\\f")])]),a._v(" "),t("td",[a._v("在此处插入一个换页符。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("\\'")])]),a._v(" "),t("td",[a._v("此时在文本中插入单引号字符。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v('\\"')])]),a._v(" "),t("td",[a._v("此时在文本中插入一个双引号字符。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("\\\\")])]),a._v(" "),t("td",[a._v("此时在文本中插入一个反斜杠字符。")])])])]),a._v(" "),t("p",[a._v("当在打印语句中遇到转义序列时，编译器会相应地解释它。例如，如果要将引号放在引号内，则必须在内部引号中使用转义序列 「\\」，以打印该句子")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("She")]),a._v(" said "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello!"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("to")]),a._v(" me"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n应该这样写\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"She said \\"Hello!\\" to me."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
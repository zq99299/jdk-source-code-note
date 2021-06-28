(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{822:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"建立连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立连接"}},[s._v("#")]),s._v(" 建立连接")]),s._v(" "),a("p",[s._v("首先，需要与要使用的数据源建立连接。数据源可以是 DBMS、遗留文件系统或具有相应 JDBC 驱动程序的其他数据源。通常，JDBC 应用程序使用以下两个类中的一个连接到目标数据源：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("DriverManager")])]),s._v(" "),a("p",[s._v("这个完全实现的类将应用程序连接到由数据库 URL 指定的数据源。当这个类 "),a("strong",[s._v("首次尝试建立连接时")]),s._v("，它会 "),a("a",{attrs:{href:""}},[s._v("自动加载在类路径中找到的所有 JDBC 4.0 驱动程序")]),s._v("。")]),s._v(" "),a("p",[s._v("注意，您的应用程序必须手动加载 4.0 版本之前的 JDBC 驱动程序。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("DataSource")])]),s._v(" "),a("p",[s._v("此接口优于 DriverManager，因为它允许有关底层数据源的细节对应用程序透明。设置 "),a("code",[s._v("DataSource")]),s._v(" 对象的属性，以便它表示特定的数据源。")]),s._v(" "),a("p",[s._v("有关更多信息，请参见 "),a("RouterLink",{attrs:{to:"/jdbc/basics/sqldatasources.html"}},[s._v("使用 "),a("code",[s._v("DataSource")]),s._v(" 对象")])],1),s._v(" "),a("p",[s._v("有关使用 DataSource 类开发应用程序的更多信息，请参阅最新的 "),a("a",{attrs:{href:"https://docs.oracle.com/javase/tutorial/jdbc/basics/sqldatasources.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java EE 教程"),a("OutboundLink")],1),s._v("。")])])]),s._v(" "),a("p",[s._v("注意：本教程中的示例使用 DriverManager 类而不是 DataSource 类，因为它更容易使用，而且示例不需 DataSource 类的特性。")]),s._v(" "),a("p",[s._v("本节涵盖以下主题：")]),s._v(" "),a("ul",[a("li",[s._v("使用 DriverManager 类")]),s._v(" "),a("li",[s._v("指定数据库连接 url")])]),s._v(" "),a("h2",{attrs:{id:"使用-drivermanager-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-drivermanager-类"}},[s._v("#")]),s._v(" 使用 DriverManager 类")]),s._v(" "),a("p",[s._v("通过 DriverManager 类连接到 DBMS 涉及到调用  DriverManager. getconnection 方法。")]),s._v(" "),a("p",[s._v("下面代码片段来自 "),a("code",[s._v("com.oracle.tutorial.jdbc.JDBCTutorialUtilities#getConnection()")]),s._v(" 方法")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SQLException")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),s._v(" conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Properties")]),s._v(" connectionProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    connectionProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    connectionProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DriverManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jdbc:"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbms "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"://"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serverName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("portNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                   connectionProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"derby"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DriverManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jdbc:"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbms "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('";create=true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                   connectionProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Connected to database"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[a("code",[s._v("DriverManager.getConnection")]),s._v(" 建立数据库连接。这种方法需要一个数据库 URL，该 URL 根据 DBMS 的不同而不同。以下是一些数据库 url 的例子：")]),s._v(" "),a("p",[s._v("MySQL： "),a("code",[s._v("jdbc:mysql://localhost:3306/")]),s._v("，localhost 是托管数据库的服务器的名称，而 3306 是端口号")]),s._v(" "),a("p",[s._v("此方法指定使用 Properties 对象访问 DBMS 所需的用户名和密码。")]),s._v(" "),a("p",[a("strong",[s._v("注意事项")]),s._v("：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("通常，在数据库 URL 中，您还要指定要连接的现有数据库的名称，例如 "),a("code",[s._v("jdbc:mysql://localhost:3306/mysql")]),s._v("  ，连接中末尾的 mysql。表示要连接名为 mysql 的 schema")])]),s._v(" "),a("li",[a("p",[s._v("在 JDBC 的早期版本中，要获得一个 connection，首先必须通过调用 Class.forName 方法，来初始化 JDBC 驱动程序。这个方法需要一个 "),a("code",[s._v("java.sql.Driver")]),s._v(" 类型的对象。每个 JDBC 驱动程序包含一个或多个实现 "),a("code",[s._v("java.sql.Driver")]),s._v(" 接口的类。mysql 的驱动类是  "),a("code",[s._v("com.mysql.jdbc.Driver")]),s._v("，请参阅 DBMS 驱动程序的文档，获取实现 "),a("code",[s._v("java.sql.Driver")]),s._v(" 的类的名称（不同版本的驱动包有可能不一样）。")]),s._v(" "),a("p",[s._v("在类路径中找到的任何 JDBC 4.0 驱动程序都会自动加载。（但是，您必须使用 Class.forName 方法，手动加载JDBC 4.0 之前的任何驱动程序。)")])])]),s._v(" "),a("p",[s._v("该方法返回一个 Connection 对象，它表示与 DBMS 或特定数据库的连接。通过此对象查询数据库。")]),s._v(" "),a("h2",{attrs:{id:"指定数据库连接-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定数据库连接-url"}},[s._v("#")]),s._v(" 指定数据库连接 url")]),s._v(" "),a("p",[s._v("数据库连接 URL 是 DBMS JDBC 驱动程序用来连接数据库的字符串。它可以包含诸如在何处搜索数据库、要连接到的数据库的名称和配置属性等信息。数据库连接 URL 的确切语法由 DBMS 指定。")]),s._v(" "),a("p",[s._v("如 MySQL Connector/J Database URL 语法如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("jdbc:mysql://[host][,failoverhost...]\n    [:port]/[database]\n    [?propertyName1][=propertyValue1]\n    [&propertyName2][=propertyValue2]...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("p",[a("code",[s._v("host:port")]),s._v("：")]),s._v(" "),a("p",[s._v("是托管数据库的计算机的主机名和端口号。如果没有指定，主机和端口的默认值分别是 127.0.0.1 和 3306。")])]),s._v(" "),a("li",[a("p",[s._v("database：")]),s._v(" "),a("p",[s._v("要连接的数据库的名称。如果未指定，则不使用缺省数据库建立连接。")])]),s._v(" "),a("li",[a("p",[s._v("failover：")]),s._v(" "),a("p",[s._v("是备用数据库的名称（MySQL Connector/J 支持故障转移）。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("propertyName=propertyValue")])]),s._v(" "),a("p",[s._v("表示可选的、与号分隔的属性列表。这些属性使您能够指示 MySQL Connector/J 执行各种任务。")])])]),s._v(" "),a("p",[s._v("更多信息请参见 "),a("a",{attrs:{href:"https://dev.mysql.com/doc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 参考手册"),a("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);
# 日期与时间

Date 对象表示日期和时间。如果不先将 Date 对象转换为适当格式的字符串，则不能显示或打印该对象。
那么什么是「适当的」格式呢?

- 首先，格式应该符合最终用户 Locale 的约定。
  例如，德国人承认 `20.4.09` 为有效日期，但美国人希望同样的日期是  `4/20/09`。
- 第二，格式应该包含必要的信息。
  例如，一个测量网络性能的程序可能会报告运行的毫秒数。
  在线约会日历可能不会显示毫秒，但会显示星期几。

本节解释如何以各种方式和对 Locale 敏感的方式格式化日期和时间。
如果遵循这些技术，程序将在适当的 Locale 中显示日期和时间，但源代码将独立于任何特定的 Locale。

- [使用预定义格式](./dateFormat.md)

  DateFormat 类提供了预定义的格式化样式，这些样式特定于 Locale，易于使用。

- [自定义格式](./simpleDateFormat.md)

  使用 SimpleDateFormat 类，您可以创建定制的、特定于 Locale 的格式。

- [更改日期格式符号](./dateFormatSymbols.md)

  使用 DateFormatSymbols 类，可以更改表示月份名称、星期名称和其他格式化元素的符号。
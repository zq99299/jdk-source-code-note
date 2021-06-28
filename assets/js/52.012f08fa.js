(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{433:function(v,_,t){"use strict";t.r(_);var e=t(27),r=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[v._v("#")]),v._v(" 实现")]),v._v(" "),t("p",[v._v("实现是用于存储集合的数据对象，本课介绍以下几种实现：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("通用实现")]),v._v(" ：是最常用的实现，专为日常使用而设计。他们在标题为“通用目的实现”的表中进行了总结。")]),v._v(" "),t("li",[t("strong",[v._v("特殊实现")]),v._v("：专为在特殊情况下使用而设计，并显示非标准性能特性，使用限制或行为")]),v._v(" "),t("li",[t("strong",[v._v("并发实现")]),v._v(" ：支持高并发，通常以牺牲单线程性能为代价。这些实现是 "),t("code",[v._v("java.util.concurrent")]),v._v(" 软件包中的一部分")]),v._v(" "),t("li",[t("strong",[v._v("封装器实现")]),v._v(" ： 与其他类型的实现(通常是通用实现)结合使用，以提供增加或现在的功能")]),v._v(" "),t("li",[t("strong",[v._v("方便实现")]),v._v(" ： 也就是小型实现，通常通过静态工厂方法提供，为特殊集合（例如单例集）的通用实现提供方便，高效的替代")]),v._v(" "),t("li",[t("strong",[v._v("抽象实现")]),v._v(" : 便于构建定制实现的骨架实现。稍后在“自定义集合的实现”中进行介绍。一个高级的话题,这不是特别困难，但相对少的人需要做。")])]),v._v(" "),t("p",[v._v("通用实现被总结在下表")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("接口")]),v._v(" "),t("th",[v._v("哈希表")]),v._v(" "),t("th",[v._v("可变数组")]),v._v(" "),t("th",[v._v("平衡二叉树")]),v._v(" "),t("th",[v._v("链表")]),v._v(" "),t("th",[v._v("哈希表+链表")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("Set")]),v._v(" "),t("td",[v._v("HashSet")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("TreeSet")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("LinkedHashSet")])]),v._v(" "),t("tr",[t("td",[v._v("List")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("ArrayList")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("LinkedList")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("Deque")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("ArrayDeque")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("LinkedList")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("Map")]),v._v(" "),t("td",[v._v("HashMap")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("TreeMap")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("LinkedHashMap")])]),v._v(" "),t("tr",[t("td",[v._v("Queue")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])])])]),v._v(" "),t("p",[v._v("正如你可以从表中看到，Java 集合框架提供了几种通用的实现 Set， List 以及 Map 接口。\n每种情况下，一个实现类 HashSet， ArrayList 和 HashMap  显然是用于大多数应用程序，所有其他事情是相同的，\n请注意， SortedSet 和 SortedMap 没有列在表中。每个接口都有一个实现。有两个通用 Queue 实现 - LinkedList 它也是一个 List 实现，+\n并且 PriorityQueue 从表中省略。这两个实现提供了非常不同的语义：LinkedList 提供 FIFO 语义，\nPriorityQueue 提供优先级队列的元素按照其自然顺序进行排序。")]),v._v(" "),t("p",[v._v("每个通用实现提供其接口中包含的所有可选操作。允许 null 元素，键值对。不同步(线程安全)。\n快速故障迭代器，在迭代期间检测非法并发修改，并快速响应失败，而不是埋下隐患。")]),v._v(" "),t("p",[v._v("事实上，这些实现是不同步的，代表了与过去的分离。遗留集合 Vector 和 hashtable 是同步的。\n采用本方案是因为当同步没有益处的时候使用集合。这样的用途包括在单线程中使用，只读使用等。\n一般来说这是好的 API 设计实践，不让用户使用他们不想使用的功能。此外不必要的同步可能在某些情况下，导致死锁。")]),v._v(" "),t("p",[v._v('如果需要线程安全集合，则"包装器实现"部分中描述的同步包装器，允许任何集合转换为同步集合。\n因此，同步对于通用实现是可选的，而对于传统实现是强制的。此外 '),t("code",[v._v("java.util.concurrent")]),v._v(" 包提供了扩展的接口\n"),t("code",[v._v("BlockingQueue")]),v._v(" 和 "),t("code",[v._v("ConcurrentMap")]),v._v(" 并发实现，这些实现比单纯的同步实现性能高。")]),v._v(" "),t("p",[v._v("通常，你应该考虑接口，而不是实现。在大多数情况下，实现选择仅影响性能。可以随意更改实现")]),v._v(" "),t("p",[v._v("以下部分简要讨论了实现。\n如恒定时间、对数、线性等术语来描述性能。时间复杂度， 反正我是不懂这些术语。这种性能指标有其局限性。\n有时，名义上较慢的实现可能更快。当然有疑问时，还是测试性能。")])])}),[],!1,null,null,null);_.default=r.exports}}]);
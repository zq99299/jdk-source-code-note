# 创建和使用扩展
任何一组包或类都可以轻松地充当扩展的角色。将一组类转换为扩展的第一步是将它们捆绑到一个 JAR 文件中。
完成后，您可以通过两种方式将软件转换为扩展:

- 通过将 JAR 文件放在 Java 运行时环境目录结构中的一个特殊位置，在这种情况下，它被称为已安装的扩展。
- 通过从另一个 JAR 文件的清单中以指定的方式引用 JAR 文件，在这种情况下，它被称为下载扩展。

本课以一个简单的 “toy” 扩展为例，向您展示了扩展机制是如何工作的。

- [已安装扩展](./install.md)

    在本节中，您将创建一个简单的已安装扩展，并了解运行时环境如何将扩展软件视为平台的一部分
- [下载扩展](./download.md)

    本节将向您展示如何修改 JAR 文件的清单，以便与 JAR 绑定的软件可以使用下载扩展。
- [理解扩展类加载](./load.md)

    本节是一个简短的介绍，总结了 Java 平台用于加载类的委托模型，并展示了它与加载扩展中的类之间的关系。

- [创建可扩展的应用程序](./spi.md)

    本节讨论在不修改原始代码的情况下，通过插件或模块扩展应用程序的机制。

    下一课，使扩展安全使用相同的扩展来展示 Java 平台如何控制授予扩展的安全权限。
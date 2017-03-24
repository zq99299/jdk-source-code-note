# 命令行I/O
程序通常从命令行运行，并在命令行环境中与用户进行交互。Java平台通过两种方式支持这种交互：通过标准流和控制台。

## 标准流
标准流是许多操作系统的特征。默认情况下，它们从键盘读取输入并输出到显示器。它们还支持文件和程序之间的I / O，但该功能由命令行解释器而不是程序控制。

Java平台支持三种标准流：
* 标准输入，通过访问System.in; 
* 标准输出，通过System.out; 
* 标准错误，通过访问System.err。

这些对象是自动定义的，不需要打开。

标准输出和标准错误，均为输出。单独进行错误输出允许用户将常规输出转移到文件，并仍然能够读取错误消息。有关更多信息，请参阅命令行解释器的文档。

您可能希望标准流是字符流，但是由于历史原因，它们是字节流。System.out 和 System.err定义为 PrintStream对象。虽然技术上是字节流，但是PrintStream利用内部字符流对象来模拟字符流的许多特征。

相反，System.in是没有字符流特征的字节流。要使用标准输入作为字符流，使用InputStreamReader包装System.in
```java
InputStreamReader cin = new InputStreamReader(System.in);
```

## 控制台
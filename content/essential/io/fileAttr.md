# 管理元数据（文件和文件存储属性）
元数据的定义：“其他数据的数据”。使用文件系统，数据包含在其文件和目录中，元数据跟踪有关每个对象的信息：它是常规文件，目录还是链接？它的大小，创建日期，上次修改日期，文件所有者，组所有者和访问权限是多少？

文件系统的元数据通常称为其**文件属性**。Files类的方法可以用来获得一个文件的一个属性，或则设置一个文件的属性

| 方法	| 说明
|----------------------------
| `size(Path)`	| 以字节为单位返回指定文件的大小。
| `isDirectory(Path, LinkOption)`	| 如果指定Path的文件是目录，则返回true 。
| `isRegularFile(Path, LinkOption...)`	| 如果指定Path的文件是常规文件，则返回true 。
| `isSymbolicLink(Path)`| 如果指定的Path位置是一个符号链接的文件，则返回true 。
| `isHidden(Path)`	| 如果指定Path的文件系统被视为隐藏的文件，则返回true 。
| `getLastModifiedTime(Path, LinkOption...)`    `setLastModifiedTime(Path, FileTime)`	| 返回或设置指定文件的上次修改时间。
| getOwner(Path, LinkOption...)    setOwner(Path, UserPrincipal)	| 返回或设置文件的所有者。
| `getPosixFilePermissions(Path, LinkOption...)`    `setPosixFilePermissions(Path, Set<PosixFilePermission>)`	| 返回或设置文件的POSIX文件权限。
| `getAttribute(Path, String, LinkOption...)`    `setAttribute(Path, String, Object, LinkOption...)`	| 返回或设置文件属性的值。

如果程序在同一时间内需要多个文件属性，则使用检索单个属性的方法可能效率低下。重复访问文件系统以检索单个属性可能会不利地影响性能。因此，`Files`该类提供了两种`readAttributes`在一个批量操作中获取文件属性的方法。

| 方法	| 说明
|----------------
| `readAttributes(Path, String, LinkOption...)`	| 读取文件的属性作为批量操作。该String参数标识要读取的属性。
| `readAttributes(Path, Class<A>, LinkOption...)`	| 读取文件的属性作为批量操作。该Class<A>参数是所请求的属性的类型，该方法返回该类的对象。

在显示`readAttributes`方法的示例之前，应该提到不同的文件系统对于哪些属性应该被跟踪有不同的概念。因此，将相关的文件属性分组到视图中。视图映射到一个特定的文件系统的实例，如POSIX或DOS，或到共同的功能性，如文件所有权。

支持的视图如下：

* **BasicFileAttributeView** - 提供所有文件系统实现所需的基本属性视图。
* **DosFileAttributeView** - 扩展支持DOS属性的文件系统上支持的标准四位的基本属性视图。
* **PosixFileAttributeView** - 扩展支持POSIX系列标准的文件系统（如UNIX）上支持的属性的基本属性视图。这些属性包括文件所有者，组所有者和九个相关访问权限。
* **FileOwnerAttributeView** - 支持支持文件所有者概念的任何文件系统实现。
* **AclFileAttributeView** - 支持读取或更新文件的访问控制列表（ACL）。支持NFSv4 ACL模型。还可以支持任何具有对NFSv4模型的定义良好的ACL模型，如Windows ACL模型。
* **UserDefinedFileAttributeView** - 支持用户定义的元数据。该视图可以映射到系统支持的任何扩展机制。例如，在Solaris OS中，您可以使用此视图来存储文件的MIME类型。

特定的文件系统实现可能只支持基本的文件属性视图，或者可能支持其中几个文件属性视图。文件系统实现可能支持未包含在此API中的其他属性视图。

在大多数情况下，您不必直接处理任何`FileAttributeView`接口。（如果您确实需要直接使用`FileAttributeView`，则可以通过该`getFileAttributeView(Path, Class<V>, LinkOption...)`方法访问它 。）

这些`readAttributes`方法使用泛型，可用于读取任何文件属性视图的属性。本页其余部分的示例使用`readAttributes`方法。

本节的其余部分涵盖以下主题：

* 基本文件属性
* 设定时间戳
* DOS文件属性
* POSIX文件权限
* 设置文件或组所有者
* 用户定义的文件属性
* 文件存储属性

## 基本文件属性

如前所述，要阅读文件的基本属性，您可以使用一种`Files.readAttributes`方法，其中一种批量操作读取所有基本属性。这比单独访问文件系统来读取每个单独的属性要高得多。`varargs`参数目前支持 `LinkOption`枚举。当您不希望遵循符号链接时使用此选项`NOFOLLOW_LINKS`。

有关时间戳：这组基本属性包括三个时间戳：

* creationTime，
* lastModifiedTime，
* lastAccessTime

在特定实现中可能不支持任何这些时间戳，在这种情况下，相应的访问器方法返回实现特定的值。当支持时，返回时间戳`FileTime`对象。

以下代码片段读取并打印给定文件的基本文件属性，并使用`BasicFileAttributes`类中的 方法
```java
Path file = ...;
BasicFileAttributes attr = Files.readAttributes(file, BasicFileAttributes.class);

System.out.println("creationTime: " + attr.creationTime());
System.out.println("lastAccessTime: " + attr.lastAccessTime());
System.out.println("lastModifiedTime: " + attr.lastModifiedTime());

System.out.println("isDirectory: " + attr.isDirectory());
System.out.println("isOther: " + attr.isOther());
System.out.println("isRegularFile: " + attr.isRegularFile());
System.out.println("isSymbolicLink: " + attr.isSymbolicLink());
System.out.println("size: " + attr.size());
```

除了本示例演示的访问器外，有一个`fileKey`方法返回一个表示此文件的唯一标识，如果没有则返回null.在一部分系统上有这个`filekey`.

## 设定时间戳
下面的代码片段设置最后修改时间以毫秒为单位:
```java
Path file = ...;
BasicFileAttributes attr =
    Files.readAttributes(file, BasicFileAttributes.class);
long currentTime = System.currentTimeMillis();
FileTime ft = FileTime.fromMillis(currentTime);
Files.setLastModifiedTime(file, ft);

```

## DOS文件系统
DOS文件属性也支持DOS以外的文件系统,如Samba。以下代码片段使用`DosFileAttributes`类的方法。
```java
Path file = ...;
try {
    DosFileAttributes attr =
        Files.readAttributes(file, DosFileAttributes.class);
    System.out.println("isReadOnly is " + attr.isReadOnly());
    System.out.println("isHidden is " + attr.isHidden());
    System.out.println("isArchive is " + attr.isArchive());
    System.out.println("isSystem is " + attr.isSystem());
} catch (UnsupportedOperationException x) {
    System.err.println("DOS file" +
        " attributes not supported:" + x);
}
```

但是，您可以使用该`setAttribute(Path, String, Object, LinkOption...)`方法设置DOS属性 ，如下所示：
```java
Path file = ...;
Files.setAttribute(file, "dos:hidden", true);
```


## POSIX文件权限
! 以下示例没有经过验证，因为在windows下


`POSIX`是`UNIX`的便携式操作系统接口的缩写，是一组`IEEE`和`ISO标准`，旨在确保不同口味的`UNIX`之间的互操作性。如果程序符合这些POSIX标准，则应该轻松地将其移植到其他与`POSIX`兼容的操作系统上。

除文件所有者和组所有者外，POSIX支持文件所有者，同一组成员以及“其他所有人”的九个文件权限：读取，写入和执行权限。

以下代码片段读取给定文件的POSIX文件属性，并将其打印到标准输出。代码使用`PosixFileAttributes`类中的 方法。

```java
Path file = ...;
PosixFileAttributes attr =
    Files.readAttributes(file, PosixFileAttributes.class);
System.out.format("%s %s %s%n",
    attr.owner().getName(),
    attr.group().getName(),
    PosixFilePermissions.toString(attr.permissions()));
```

该 `PosixFilePermissions`助手类提供了一些有用的方法，具体如下：

* **toString**    在上一个代码片段中使用的方法将文件权限转换为字符串（例如，rw-r--r--）。
* **fromString** 方法接受表示文件权限的字符串，并构造一个Set文件权限。
* **asFileAttribute** 方法接受一个Set文件权限并构造一个可以传递给`Path.createFile`或者`Path.createDirectory`方法的文件属性。

以下代码段从一个文件中读取属性，并创建一个新文件，将属性从原始文件分配给新文件：
```java
Path sourceFile = ...;
Path newFile = ...;
PosixFileAttributes attrs =
    Files.readAttributes(sourceFile, PosixFileAttributes.class);
FileAttribute<Set<PosixFilePermission>> attr =
    PosixFilePermissions.asFileAttribute(attrs.permissions());
Files.createFile(file, attr);
```

该`asFileAttribute`方法将权限包装为`FileAttribute`。然后，代码尝试使用这些权限创建一个新文件。请注意，这umask也适用，所以新文件可能比请求的权限更安全。

要将文件的权限设置为以硬编码字符串表示的值，可以使用以下代码：
```java
Path file = ...;
Set<PosixFilePermission> perms =
    PosixFilePermissions.fromString("rw-------");
FileAttribute<Set<PosixFilePermission>> attr =
    PosixFilePermissions.asFileAttribute(perms);
Files.setPosixFilePermissions(file, perms);
```

这里有一个
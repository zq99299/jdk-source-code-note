# 分支语句
[[toc]]

## break 语句

break 语句有两种形式：标记和未标记。在之前的 switch 语句讨论中，您看到了未标记的形式。您还可以使用未标记的 break 终止 for，while 或 do-while 循环，如下面的 BreakDemo 程序：

```java
class BreakDemo {
    public static void main(String[] args) {

        int[] arrayOfInts =
            { 32, 87, 3, 589,
              12, 1076, 2000,
              8, 622, 127 };
        int searchfor = 12;

        int i;
        boolean foundIt = false;

        for (i = 0; i < arrayOfInts.length; i++) {
            if (arrayOfInts[i] == searchfor) {
                foundIt = true;
                break;
            }
        }

        if (foundIt) {
            System.out.println("Found " + searchfor + " at index " + i);
        } else {
            System.out.println(searchfor + " not in the array");
        }
    }
}

```

该程序搜索数组中的数字 12。当找到该值时终止 for 循环。控制流程然后在 for 循环后传输到语句。该程序的输出是：

```java
Found 12 at index 4
```

未标记的 break 语句终止最内层 switch，for，while，或 do-while 语句，但标记的 break 终止一个外部语句。以下程序 BreakWithLabelDemo 与上一个程序类似，但使用嵌套 for 循环来搜索二维数组中的值。当找到该值时，标记 break 终止外部 for 循环（标记为「search」）：

```java
class BreakWithLabelDemo {
    public static void main(String[] args) {

        int[][] arrayOfInts = {
            { 32, 87, 3, 589 },
            { 12, 1076, 2000, 8 },
            { 622, 127, 77, 955 }
        };
        int searchfor = 12;

        int i;
        int j = 0;
        boolean foundIt = false;

    search:
        for (i = 0; i < arrayOfInts.length; i++) {
            for (j = 0; j < arrayOfInts[i].length;
                 j++) {
                if (arrayOfInts[i][j] == searchfor) {
                    foundIt = true;
                    break search;
                }
            }
        }

        if (foundIt) {
            System.out.println("Found " + searchfor + " at " + i + ", " + j);
        } else {
            System.out.println(searchfor + " not in the array");
        }
    }
}
```
程序输出：

```java
Found 12 at 1, 0
```

该break声明终止标签语句; 它不会将控制流转移到标签上。控制流被传递到标签（终止）语句之后的语句。

## continue

continue 语句跳过的当前迭代 for，while 或 do-while 循环。未标记的跳到最内层循环的结尾，并评估控制循环的表达式  boolean ， ContinueDemo 逐步执行 String，计算字母「p」的出现。如果当前字符不是 p，则该 continue 语句跳过循环的其余部分，并转到下一个字符。如果是 p，程序会增加字母数。

```java

class ContinueDemo {
    public static void main(String[] args) {

        String searchMe = "peter piper picked a " + "peck of pickled peppers";
        int max = searchMe.length();
        int numPs = 0;

        for (int i = 0; i < max; i++) {
            // interested only in p's
            if (searchMe.charAt(i) != 'p')
                continue;

            // process p's
            numPs++;
        }
        System.out.println("Found " + numPs + " p's in the string.");
    }
}
```

程序输出

```java
Found 9 p’s in the string.
```

要更清楚地看到这种效果，请尝试删除该 continue 语句并重新编译。当你再次运行程序时，计数将是错误的，发现 35 ，而不是 9。

标记的 continue 语句跳过标记有给定标签的外部循环的当前迭代。以下示例程序 ContinueWithLabelDemo 使用嵌套循环来搜索另一个字符串中的子字符串。需要两个嵌套循环：一个用于遍历子字符串，一个循环遍历正在搜索的字符串。以下程序 ContinueWithLabelDemo 使用标记的 continue 格式跳过外部循环中的迭代。

```java
class ContinueWithLabelDemo {
    public static void main(String[] args) {

        String searchMe = "Look for a substring in me";
        String substring = "sub";
        boolean foundIt = false;

        int max = searchMe.length() -
                  substring.length();

    test:
        for (int i = 0; i <= max; i++) {
            int n = substring.length();
            int j = i;
            int k = 0;
            while (n-- != 0) {
                if (searchMe.charAt(j++) != substring.charAt(k++)) {
                    continue test;
                }
            }
            foundIt = true;
                break test;
        }
        System.out.println(foundIt ? "Found it" : "Didn't find it");
    }
}
```

程序输出

```java
Found it
```

如果这里不使用 `continue test;` 那么将只作用于 while 中，而不是跳过外层循环。


## return

最后的分支语句是 return 语句。该 return 语句退出当前方法，并且控制流程返回到调用该方法的位置。该 return 语句有两种形式：返回一个值 和 不返回值。要返回一个值，只需在 return 关键字后面跟随返回的值（或计算值的表达式）

```java
return ++count;
```

返回值的数据类型必须与方法声明的返回值的类型相匹配。当声明一个方法时 void，使用该方法 return 不返回值

```java
return;
```


在 [类和对象的课程中](../javaoo/) 会详细讲解

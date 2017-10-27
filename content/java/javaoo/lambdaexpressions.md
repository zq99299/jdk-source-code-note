# Lambda表达式

匿名类的一个问题是，如果您的匿名类的实现非常简单，例如仅包含一个方法的接口，则匿名类的语法可能看起来很笨重且不清楚。在这些情况下，您通常会尝试将功能作为参数传递给另一种方法，例如当有人点击按钮时应该采取什么措施。Lambda表达式使您能够执行此操作，将功能视为方法参数或代码作为数据。

上一节“ 匿名类”介绍如何实现基类而不给它一个名称。虽然这通常比命名类更简洁，对于只有一种方法的类，即使是匿名类似乎有点过于繁琐。Lambda表达式可以更紧凑地表达单一方法类的实例。

本节包含以下主题：

* Lambda表达式的理想用例
 * 方法1：创建搜索匹配一个特征的成员的方法
 * 方法2：创建更广泛的搜索方法
 * 方法3：在本地类中指定搜索条件代码
 * 方法4：在匿名类中指定搜索条件代码
 * 方法5：使用Lambda表达式指定搜索条件代码
 * 方法6：使用带有Lambda表达式的标准功能接口
 * 方法7：在整个应用程序中使用Lambda表达式
 * 方法8：更广泛地使用泛型
 * 方法9：使用接受Lambda表达式作为参数的聚合操作
* Lambda表达式在GUI应用程序
* Lambda表达式的语法
* 访问封闭范围的局部变量
* 目标类型
 * 目标类型和方法参数
* 序列化


## Lambda表达式的理想用例

> **前言**
> 这一节的文字有点多，机器翻译的感觉还是有点度不太通顺，我给总结了下下面的用意
>
> 就是通过一个查询等操作的需求，然后慢慢的把你从最原始的实现方法 引导至lambda表达式来实现。
>
> 原始的方法 -> 接口条件类 -> 匿名类 -> Lambda表达式

---------

> **注意：** 这一章节由于官网摘录的程序，不是完整的demo。所以我决定按照大致意思把demo重新编一个。


假设你在做一个社交软件的搜索功能。

假设这个社交网络应用程序的成员由以下Persion类表示

```java
public class Person {
    public enum Sex {
        MALE, FEMALE
    }

    String name;
    LocalDate birthday;
    Sex gender;
    String emailAddress;
    int age;

    public Person(String name, LocalDate birthday, Sex gender, String emailAddress, int age) {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.emailAddress = emailAddress;
        this.age = age;
    }

    public int getAge() {
        return this.age;
    }

    @Override
    public String toString() {
        return "Persion{" +
                "name='" + name + '\'' +
                ", birthday=" + birthday +
                ", gender=" + gender +
                ", emailAddress='" + emailAddress + '\'' +
                ", age=" + age +
                '}';
    }

    public void printPerson() {
        System.out.println(this.toString());
    }
```

假设您的社交网络应用程序的成员存储在一个`List<Person>`实例中。

本节会从最基本的方式来实现，然后一步一步的引导到Lambda表达式中，使用Lambad表达式来实现功能

> 注：这里我直接使用现有的编程经验来编写，而不再考虑没有学过的只是了。

首先构建一个`junit` 测试类，需要准备一些数据。大致的准备功能如下

```java
public class PersonTest {
    private List<Person> roster = new ArrayList<>();

    @Before
    public void buildData() {
        // 模拟10条数据
        for (int i = 0; i < 10; i++) {
            Person.Sex sex = (i % 2 == 0 ? Person.Sex.FEMALE : Person.Sex.MALE);

            roster.add(new Person(
                    "mrcode-" + i,
                    LocalDate.now(),
                    sex,
                    "email-" + i,
                    18 + i));
        }
    }
}
```

### 方法1：创建搜索匹配一个特征的成员的方法
一种简单的方法是创建几种方法; 每个方法搜索符合一个特征的成员，如性别或年龄。以下方法打印比指定年龄更年长的成员

```java
public static void printPersonsOlderThan(List<Person> roster, int age) {
    for (Person p : roster) {
        if (p.getAge() >= age) {
            p.printPerson();
        }
    }
}
```
> **注意：**List是有序的 Collection。集合是一个对象，该组中的多个元素到单个单元中。集合用于存储，检索，操纵和传达聚合数据。有关集合的更多信息，请参阅 [集合](//content/collections/README.md)。

这种方法可能会使您的应用程序变得脆弱，这是因为引入更新（例如较新的数据类型）而导致应用程序无法正常工作的可能性。假设您升级应用程序并更改Person类的结构，使其包含不同的成员变量; 也许是使用不同数据类型或算法的类记录和测量年龄。您将不得不重写很多API以适应这一变化。此外，这种方法是不必要的限制; 如果你想打印比一定年龄小的会员怎么办？

### 方法2：创建更广泛的搜索方法

以下方法比通用型printPersonsOlderThan更为普遍; 会在特定范围内打印成员：

```java
public static void printPersonsWithinAgeRange(
    List<Person> roster, int low, int high) {
    for (Person p : roster) {
        if (low <= p.getAge() && p.getAge() < high) {
            p.printPerson();
        }
    }
}
```

如果要打印指定性别的成员，或指定性别和年龄范围的组合，该怎么办？如果您决定更改Person类并添加其他属性（如关系状态或地理位置），该怎么办？虽然这种方法比一般的方法printPersonsOlderThan支持的条件更多，但是为每个可能的搜索查询创建一个单独的方法仍然可能导致脆弱的代码。您可以将指定要在其他类中搜索的条件的代码分开。

### 方法3：在本地类中指定搜索条件代码
以下方法打印与您指定的搜索条件匹配的成员：

```java
public static void printPersons(
    List<Person> roster, CheckPerson tester) {
    for (Person p : roster) {
        if (tester.test(p)) {
            p.printPerson();
        }
    }
}
```

该方法通过调用`CheckPerson.test`方法来检查参数中Person包含的每个实例是否满足参数中指定的搜索条件。如果方法返回一个值true，那么该方法在该实例上被调用。

要指定搜索条件，您可以实现 CheckPerson接口：

```java
interface CheckPerson {
    boolean test(Person p);
}
```

以下类CheckPerson通过指定方法的实现来实现接口test。该方法可以筛选符合CheckPersonEligibleForSelectiveService的成员：如果Person参数为男性且年龄在18至25之间，则返回值true：

```java
class CheckPersonEligibleForSelectiveService implements CheckPerson {
    public boolean test(Person p) {
        return p.gender == Person.Sex.MALE &&
            p.getAge() >= 18 &&
            p.getAge() <= 25;
    }
}
```

要使用此类，您将创建一个新的实例并调用该printPersons方法：

```java
printPersons(
    roster, new CheckPersonEligibleForSelectiveService());
```
虽然这种方法不那么脆弱了，如果宁更改Persion结构，可以不必重写该方法。但是如果你计划有更多不同的搜索条件（一种搜索条声明一个实现类），你可以使用一个匿名类而不是一个本地类，并绕过需要为每个搜索声明一个新的类。

### 方法4：在匿名类中指定搜索条件代码

以下调用printPersons方法的一个参数是一个匿名类，用于过滤在美国有资格选择性服务的成员：男性和年龄在18至25岁之间的成员：

```java
printPersons(
    roster,
    new CheckPerson() {
        public boolean test(Person p) {
            return p.getGender() == Person.Sex.MALE
                && p.getAge() >= 18
                && p.getAge() <= 25;
        }
    }
);
```

> 注：这里的p.getGender()在前面的定义中没有声明，这里响应的要修改 Persion的结构，提供该方法

这种方法减少了所需的代码量，因为您不需要为每个要执行的搜索创建一个新类。然而，匿名类的语法是庞大的，因为CheckPerson接口只包含一种方法。在这种情况下，您可以使用lambda表达式而不是匿名类，如下一节所述。

### 方法5：使用Lambda表达式指定搜索条件代码

CheckPerson 接口是一个功能接口。功能接口是只包含一个抽象方法的任何接口 。（功能接口可能包含一个或多个 默认方法或 静态方法）因为功能界面只包含一个抽象方法，所以在实现时可以省略该方法的名称。为此，您不需要使用匿名类表达式，而是使用lambda表达式。

```java
printPersons(
    roster,
    (Person p) -> p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25
);

// 如果只有一行代码的话，可以省略return，上面的代码和下面的代码功能一致

        printPersons(
                roster,
                (Person p) -> {
                    return p.getGender() == Person.Sex.MALE
                            && p.getAge() >= 18
                            && p.getAge() <= 25;
                }
        );
```

有关如何定义lambda表达式的信息，请参阅后面小节-Lambda表达式的语法。

您可以使用标准的功能接口来代替接口CheckPerson，进一步减少了所需的代码量。

### 方法6：使用带有Lambda表达式的标准功能接口

```java
interface CheckPerson {
    boolean test(Person p);
}
```

这是一个非常简单的接口。它是一个功能接口，因为它只包含一个抽象方法。该方法使用一个参数并返回一个 boolean值。该方法非常简单，可能不值得在应用程序中定义一个。因此，JDK定义了几个标准的功能接口，您可以在包中找到它们`java.util.function`。

例如，您可以使用 `Predicate<T>` 接口代替CheckPerson。此接口包含以下方法`boolean test(T t)`：

```java
interface Predicate<T> {
    boolean test(T t);
}
```

该接口`Predicate<T>`是通用接口的示例。(有关泛型相关信息请参考 泛型 章节)。例如，参数化类型`Predicate<Person>`如下：

```java
interface Predicate<Person> {
    boolean test(Person t);
}

```

该参数化类型包含一个具有相同返回类型和参数的方法`CheckPerson.boolean test(Person p)`。因此，您可以使用以下方法`Predicate<T>`来代替CheckPerson：

```java
public static void printPersonsWithPredicate(
    List<Person> roster, Predicate<Person> tester) {
    for (Person p : roster) {
        if (tester.test(p)) {
            p.printPerson();
        }
    }
}
```

因此，以下方法调用与printPersons在方法3中调用的方法相同 ：在本地类中指定搜索条件代码以获取符合选择性服务的成员：

```java
printPersonsWithPredicate(
    roster,
    p -> p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25
);
```

这不是使用lambda表达式的唯一可能的方法。以下方法建议使用lambda表达式的其他方法。

### 方法7：在整个应用程序中使用Lambda表达式

重新考虑printPersonsWithPredicate 使用lambda表达式的方法：

```java
public static void printPersonsWithPredicate(
    List<Person> roster, Predicate<Person> tester) {
    for (Person p : roster) {
        if (tester.test(p)) {
            p.printPerson();
        }
    }
}
```

该方法检查参数中Person包含的每个实例是否满足参数中指定的条件。如果实例满足由此指定的条件，则该实例将调用该方法。

而不是调用该方法printPerson，您可以指定在Person满足指定条件的那些实例上执行的其他操作tester。您可以使用lambda表达式指定此操作。假设你想要一个类似于一个lambda表达式printPerson，一个参数（一个类型的对象Person）并返回void。记住，要使用lambda表达式，需要实现一个功能接口。在这种情况下，您需要一个包含抽象方法的功能接口，该方法可以使用一个类型的参数Person并返回void。`Consumer<T>` 接口包含`void accept(T t)`具有这些特征的方法 。以下方法将p.printPerson()使用`Consumer<Person>`调用该方法的实例替换该调用 accept：

```java
public static void processPersons(
    List<Person> roster,
    Predicate<Person> tester,
    Consumer<Person> block) {
        for (Person p : roster) {
            if (tester.test(p)) {
                block.accept(p);
            }
        }
}
```

因此，以下方法调用与printPersons在方法3中调用的方法相同：在本地类中指定搜索条件代码以获取符合选择性服务的成员。

```java
processPersons(
     roster,
     p -> p.getGender() == Person.Sex.MALE
         && p.getAge() >= 18
         && p.getAge() <= 25,
     p -> p.printPerson()   //程序中调用 accept方法的时候，相当于回调这里的代码块，
     // 如果懂js的回调函数的话 。理解这一段代码就很好懂了
);
```

如果你想要更多的反馈信息，希望传递条件，且满足条件的按照你的规则打印信息，那么可以用到功能接口`Consumer`,包含一个`void accept(T t)` 方法。

```java
public static void processPersonsWithFunction(
    List<Person> roster,
    Predicate<Person> tester,
    Function<Person, String> mapper,
    Consumer<String> block) {
    for (Person p : roster) {
        if (tester.test(p)) {
            String data = mapper.apply(p);
            block.accept(data);
        }
    }
}
```

## 方法8：更广泛地使用泛型

重新考虑该方法processPersonsWithFunction。以下是它的通用版本，它接受包含任何数据类型的元素的集合作为参数：

```java
public static <X, Y> void processElements(
    Iterable<X> source,
    Predicate<X> tester,
    Function <X, Y> mapper,
    Consumer<Y> block) {
    for (X p : source) {
        if (tester.test(p)) {
            Y data = mapper.apply(p);
            block.accept(data);
        }
    }
}
```

要打印符合选择性服务的会员的电子邮件地址，请调用以下processElements方法：

```java
processElements(
                roster,
                p -> p.getGender() == Person.Sex.MALE
                        && p.getAge() >= 18
                        && p.getAge() <= 25,
                p -> p.getEmailAddress(),
                email -> System.out.println(email)
        );
```

此方法调用执行以下操作：

1. 从集合source中获取对象。在此示例中 roster是List，而List实现了Iterable接口。
2. 过滤与Predicate.tester匹配的条件。该Predicate对象是一个lambda表达式，它指定哪些成员将符合选择性服务的条件。
3. mapper接收一个参数，并输出一个结果。在此示例中，该Function对象是一个返回成员的电子邮件地址的lambda表达式。
4. 由指定对象的实例调用Consumer的block方法。在这个例子中，Consumer对象是一个lambda表达式，它打印一个字符串，它是Function对象返回的电子邮件地址。


您可以使用聚合操作替换这些操作。





























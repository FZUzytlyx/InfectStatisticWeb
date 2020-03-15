# 代码风格
#### 参照
#### [菜鸟教程-JavaScript代码规范](https://www.runoob.com/js/js-conventions.html)
#### [W3school-HTML(5) 样式指南和代码约定](https://www.w3school.com.cn/html/html5_syntax.asp)
#### [《码出高效_阿里巴巴Java开发手册》](https://github.com/chjw8016/alibaba-java-style-guide)
----

## **JavaScript代码规范**
#### 参照[菜鸟教程-JavaScript代码规范](https://www.runoob.com/js/js-conventions.html)
## （一）变量名
变量名推荐使用驼峰法来命名(camelCase):
```
firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);
```

## （二）空格与运算符
通常运算符 ( = + - * / ) 前后需要添加空格
## （三）代码缩进
通常使用 4 个空格符号来缩进代码块。
不推荐使用 TAB 键来缩进，因为不同编辑器 TAB 键的解析不一样。

## （四）语句规则
1.简单语句的通用规则:

* 一条语句通常以分号作为结束符。
```
实例:
var values = ["Volvo", "Saab", "Fiat"];

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```
2.复杂语句的通用规则:

* 将左花括号放在第一行的结尾。
* 左花括号前添加一空格。
* 将右花括号独立放在一行。
* 不要以分号结束一个复杂的声明。

## （五）对象规则
对象定义的规则:

* 将左花括号与类名放在同一行。
* 冒号与属性值间有个空格。
* 字符串使用双引号，数字不需要。
* 最后一个属性-值对后面不要添加逗号。
* 将右花括号独立放在一行，并以分号作为结束符号。
```
实例:
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```
短的对象代码可以直接写成一行:
```
实例:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```
## （六）每行代码字符小于 80
为了便于阅读每行字符建议小于数 80 个。
如果一个 JavaScript语句超过了80个字符，建议在运算符或者逗号后换行。

## （七）命名规则
1.一般很多代码语言的命名规则都是类似的，例如:

* 变量和函数为小驼峰法标识,
* 即除第一个单词之外，其他单词首字母大写（lowerCamelCase）全局变量为大写 (UPPERCASE)
* 常量 (如 PI) 为大写 (UPPERCASE)

2.HTML 和 CSS 的横杠(-)字符:

* HTML5 属性可以以 data-(如：data-quantity,data-price)作为前缀。
* CSS 使用 - 来连接属性名 (font-size)。

*  "-" 通常在 JavaScript 中被认为是减法，所以不允许使用。
3.下划线:

* 驼峰法：
JavaScript 中通常推荐使用驼峰法，jQuery 及其他 JavaScript 库都使用驼峰法。
* 变量名不要以 $ 作为开始标记，会与很多 JavaScript 库冲突。

----
## **HTML5代码规范**
#### 参照[W3school-HTML(5) 样式指南和代码约定](https://www.w3school.com.cn/html/html5_syntax.asp)

## （一）请使用正确的文档类型
请始终在文档的首行声明文档类型：
```
<!DOCTYPE html>
```
如果您一贯坚持小写标签，那么可以使用：
```
<!doctype html>
```

## （二）请使用小写元素名
HTML5 允许在元素名中使用混合大小写字母。
推荐使用小写元素名：

* 混合大小写名称并不好
* 开发者习惯使用小写名（比如在 XHTML 中）
* 小写更起来更纯净
* 小写更易书写

## （三）关闭所有 HTML 元素
在 HTML5 中，不必关闭所有元素，但建议关闭所有 HTML 元素。

## （四）样式表
请使用简单的语法来链接样式表（type 属性不是必需的）：
```
<link rel="stylesheet" href="styles.css">
```
短规则可以压缩为一行，就像这样：
```
p.into {font-family:"Verdana"; font-size:16em;}
```
长规则应该分为多行：
```
body {
  background-color: lightgrey;
  font-family: "Arial Black", Helvetica, sans-serif;
  font-size: 16em;
  color: black;
}
```
* 开括号与选择器位于同一行
* 在开括号之前用一个空格
* 使用两个字符的缩进
* 在每个属性与其值之间使用冒号加一个空格
* 在每个逗号或分号之后使用空格
* 在每个属性值对（包括最后一个）之后使用分号
* 只在值包含空格时使用引号来包围值
* 把闭括号放在新的一行，之前不用空格
* 避免每行超过 80 个字符
* 在逗号或分号之后添加空格，是所有书写类型的通用规则。

## （五）HTML 注释
```
* 短注释应该在单行中书写，并在 <!-- 之后增加一个空格，在 <!-- 之前增加一个空格：
<!-- This is a comment -->

长注释，跨越多行，应该通过 <!-- 和 --> 在独立的行中书写：
<!-- 
  This is a long comment example. This is a long comment example. This is a long comment example.
  This is a long comment example. This is a long comment example. This is a long comment example.
-->
```
* 长注释更易观察，如果它们被缩进两个空格的话。

----

## **Java代码规范**
#### 参照[《码出高效_阿里巴巴Java开发手册》](https://github.com/chjw8016/alibaba-java-style-guide)
## （一）缩进
+ 缩进采用4个空格，禁止使用tab字符。

> 说明：如果使用tab缩进，必须设置1个tab为4个空格。IDEA设置tab为4个空格时，请勿勾选Use tab character；而在eclipse中，必须勾选insert   spaces for tabs。

```
正例：
public static void main(String args[]) {
	//缩进4个空格
	String say = "hello";
	//运算符的左右必须有一个空格
	int flag = 0;
	//关键词if与括号之间必须有一个空格，括号内的f与左括号，0与右括号不需要空格
	if (flag == 0) {
		System.out.println(say);
	}
	//左大括号前加空格且不换行；左大括号后换行
	if (flag == 1) {
		System.out.println("world");
		//右大括号前换行，右大括号后有else，不用换行
	} else {
		System.out.println("ok");
		//在右大括号后直接结束，则必须换行
	}
}
```

## （二）变量命名
1.代码中的命名均不能以下划线或美元符号开始，也不能以下划线或美元符号结束。
```
反例： _name / __name / $Object / name_ / name$ / Object$
```
2.代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。
> 说明：正确的英文拼写和语法可以让阅读者易于理解，避免歧义。
> 注意，即使纯拼音命名方式也要避免采用。

```
反例： DaZhePromotion [打折] / getPingfenByName()  [评分] / int某变量 = 3
正例： alibaba / taobao / youku / hangzhou等国际通用的名称，可视同英文。
```
3.中括号是数组类型的一部分，数组定义如下：String[]   args;
```
反例：请勿使用String  args[]的方式来定义。
```
4.杜绝完全不规范的缩写，避免望文不知义。
```
反例： AbstractClass“缩写”命名成AbsClass；condition“缩写”命名成 condi，此类随意缩写严重降低了代码的可阅读性。
```

## （三）每行最多字符数
* 单行字符数限制不超过120个，超出需要换行，换行时遵循如下原则：
>* 第二行相对第一行缩进4个空格，从第三行开始，不再继续缩进。
>* 运算符与下文一起换行。
>* 方法调用的点符号与下文一起换行。
>* 在多个参数超长，逗号后进行换行。
>* 在括号前不要换行。
```
正例：
StringBuffer sb = new StringBuffer();
//超过120个字符的情况下，换行缩进4个空格，并且方法前的点符号一起换行
sb.append("zi").append("xin")...
	.append("huang")...
	.append("huang")...
	.append("huang");
反例：
StringBuffer sb = new StringBuffer();
//超过120个字符的情况下，不要在括号前换行
sb.append("zi").append("xin")...append
	("huang");
//参数很多的方法调用可能超过120个字符，不要在逗号前换行
method(args1, args2, args3, ...
	, argsX);
```

## （四）函数最大行数
* 以80、200、500为规定界限，超过80行的函数即为超大函数，即进行拆分，规定最大行数为80-200行，拆分时遵循如下原则：
>* 每一个代码块都可以封装为一个函数
>* 每一个循环体都可以封装为一个函数
>* 每一个条件体都可以封装为一个函数

## （五）函数、类命名
1.类名使用UpperCamelCase风格，必须遵从驼峰形式，但以下情形例外：（领域模型的相关命名）DO / BO / DTO / VO等。
```
正例：MarcoPolo / UserDO / XmlService / TcpUdpDeal /   TaPromotion
反例：macroPolo / UserDo / XMLService / TCPUDPDeal /   TAPromotion
```
2.方法名、参数名、成员变量、局部变量都统一使用lowerCamelCase风格，必须遵从驼峰形式。
```
正例： localValue / getHttpMessage() /  inputUserId
```
3.抽象类命名使用Abstract或Base开头；异常类命名使用Exception结尾；测试类命名以它要测试的类的名称开始，以Test结尾。

4.POJO类中布尔类型的变量，都不要加is，否则部分框架解析会引起序列化错误。
```
反例：定义为基本数据类型boolean isSuccess；的属性，
它的方法也是isSuccess()，RPC框架在反向解析的时候，“以为”对应的属性名称是success，导致属性获取不到，进而抛出异
常。
```
5.包名统一使用小写，点分隔符之间有且仅有一个自然语义的英语单词。包名统一使用单数形式，但是类名如果有复数含义，类名可以使用复数形式。
```
正例：应用工具类包名为com.alibaba.open.util、类名为MessageUtils（此规则参考spring的框架结构）
```
6.接口类中的方法和属性不要加任何修饰符号（public也不要加），保持代码的简洁性，并加上有效的Javadoc注释。尽量不要在接口里定义变量，如果一定要定义变量，肯定是与接口方法相关，并且是整个应用的基础常量。
```
正例：接口方法签名：void f();
接口基础常量表示：String COMPANY = "alibaba";
反例：接口方法定义：public abstract void f();
说明：JDK8中接口允许有默认实现，那么这个default方法，是对所有实现类都有价值的默认实现。
```
7.枚举类名建议带上Enum后缀，枚举成员名称需要全大写，单词间用下划线隔开。
> 说明：枚举其实就是特殊的常量类，且构造方法被默认强制是私有。

```
正例：枚举名字：DealStatusEnum，成员名称：SUCCESS / UNKNOWN_REASON。
```

## （六）常量
1.常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。

2.不允许出现任何魔法值（即未经定义的常量）直接出现在代码中。
```
反例： String key="Id#taobao_"+tradeId；
cache.put(key,  value);
```
3.long或者Long初始赋值时，必须使用大写的L，不能是小写的l，小写容易跟数字1混淆，造成误解。
```
正例： MAX_STOCK_COUNT
反例： MAX_COUNT
```
4.不要使用一个常量类维护所有常量，应该按常量功能进行归类，分开维护。如：缓存相关的常量放在类：CacheConsts下；系统配置相关的常量放在类：ConfigConsts下。
> 说明：大而全的常量类，非得使用查找功能才能定位到修改的常量，不利于理解和维护。

5.如果变量值仅在一个范围内变化用Enum类。如果还带有名称之外的延伸属性，必须使用Enum类，下面正例中的数字就是延伸信息，表示星期几。
```
正例：publicEnum{MONDAY(1),TUESDAY(2),WEDNESDAY(3),THURSDAY(4),FRIDAY(5),SATURDAY(6), SUNDAY(7);}
```

## （七）空行规则与括号
1.方法体内的执行语句组、变量的定义语句组、不同的业务逻辑之间或者不同的语义之间插入一个空行。相同业务逻辑和语义之间不需要插入空行。
> 说明：没有必要插入多行空格进行隔开。

2.大括号的使用约定。如果是大括号内为空，则简洁地写成{}即可，不需要换行；如果是非空代码块则：

* 左大括号前不换行。
* 左大括号后换行。
* 右大括号前换行。
* 右大括号后还有else等代码则不换行；表示终止右大括号后必须换行。

3.左括号和后一个字符之间不出现空格；同样，右括号和前一个字符之间也不出现空格。

## （八）注释规则
1.类、类属性、类方法的注释必须使用Javadoc规范，使用/**内容*/格式，不得使用//xxx方式。
> 说明：在IDE编辑窗口中，Javadoc方式会提示相关注释，生成Javadoc可以正确输出相应注释；在IDE中，工程调用方法时，不进入方法即可悬浮提示方法、参数、返回值的意义，提高阅读效率。

2.所有的抽象方法（包括接口中的方法）必须要用Javadoc注释、除了返回值、参数、异常说明外，还必须指出该方法做什么事情，实现什么功能。
> 说明：对子类的实现要求，或者调用注意事项，请一并说明。

3.所有的类都必须添加创建者信息。

4.方法内部单行注释，在被注释语句上方另起一行，使用//注释。方法内部多行注释使用/* */注释，注意与代码对齐。

5.所有的枚举类型字段必须要有注释，说明每个数据项的用途。

6.与其“半吊子”英文来注释，不如用中文注释把问题说清楚。专有名词与关键字保持英文原文即可。
```
反例：“TCP连接超时”解释成“传输控制协议连接超时”，理解反而费脑筋。
```
7.代码修改的同时，注释也要进行相应的修改，尤其是参数、返回值、异常、核心逻辑等的修改。
> 说明：代码与注释更新不同步，就像路网与导航软件更新不同步一样，如果导航软件严重滞后，就失去了导航的意义。

8.注释掉的代码尽量要配合说明，而不是简单的注释掉。
> 说明：代码被注释掉有两种可能性：

> 1）后续会恢复此段代码逻辑。

> 2）永久不用。

> 前者如果没有备注信息，难以知晓注释动机。后者建议直接删掉（代码仓库保存了历史代码）。

9.对于注释的要求：

* 能够准确反应设计思想和代码逻辑；
* 能够描述业务含义，使别的程序员能够迅速了解到代码背后的信息。完全没有注释的大段代码对于阅读者形同天书，注释是给自己看的，即使隔很长时间，也能清晰理解当时的思路；注释也是给继任者看的，使其能够快速接替自己的工作。

10.好的命名、代码结构是自解释的，注释力求精简准确、表达到位。避免出现注释的一个极端：过多过滥的注释，代码的逻辑一旦修改，修改注释是相当大的负担。
```
反例：
// put elephant into fridge
put(elephant, fridge);
方法名put，加上两个有意义的变量名elephant和fridge，已经说明了这是在干什么，语义清晰的代码不需要额外的注释。
```
11.特殊注释标记，请注明标记人与标记时间。注意及时处理这些标记，通过标记扫描，经常清理此类标记。线上故障有时候就是来源于这些标记处的代码。
* 待办事宜（TODO）:（标记人，标记时间，[预计处理时间]）表示需要实现，但目前还未实现的功能。这实际上是一个Javadoc的标签，目前的Javadoc还没有实现，但已经被广泛使用。只能应用于类，接口和方法（因为它是一个Javadoc标签）。
* 错误，不能工作（FIXME）:（标记人，标记时间，[预计处理时间]）在注释中用FIXME标记某代码是错误的，而且不能工作，需要及时纠正的情况。

## （九）操作符前后空格
1.if/for/while/switch/do等保留字与左右括号之间都必须加空格。

2.任何运算符左右必须加一个空格。
> 说明：运算符包括赋值运算符=、逻辑运算符&&、加减乘除符号、三目运行符等。

3.方法参数在定义和传入时，多个参数逗号后边必须加空格。
```
正例：下例中实参的"a",后边必须要有一个空格。
method("a", "b", "c");
```

## （十）控制语句

1.在一个switch块内，每个case要么通过break/return等来终止，要么注释说明程序将继续执行到哪一个case为止；在一个switch块内，都必须包含一个default语句并且放在最后，即使它什么代码也没有。

2.在if/else/for/while/do语句中必须使用大括号，即使只有一行代码，避免使用下面的形式：if (condition) statements;

## （十一）其他规则
1.各层命名规约：

（1）Service/DAO层方法命名规约：

>* 获取单个对象的方法用get做前缀。
>* 获取多个对象的方法用list做前缀。
>* 获取统计值的方法用count做前缀。
>* 插入的方法用save（推荐）或insert做前缀。
>* 删除的方法用remove（推荐）或delete做前缀。
>* 修改的方法用update做前缀。


（2）领域模型命名规约：
>* 数据对象：xxxDO，xxx即为数据表名。
>* 数据传输对象：xxxDTO，xxx为业务领域相关的名称。
>* 展示对象：xxxVO，xxx一般为网页名称。
>* POJO是DO/DTO/BO/VO的统称，禁止命名成xxxPOJO。

2.IDE的text file encoding设置为UTF-8;IDE中文件的换行符使用Unix格式，不要使用windows格式。

3.在使用正则表达式时，利用好其预编译功能，可以有效加快正则匹配速度。
> 说明：不要在方法体内定义：Pattern pattern = Pattern.compile(规则);
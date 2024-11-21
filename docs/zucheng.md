# 计算机组成原理

计算机系统的基本组成
由计算机硬件系统和计算机软件系统组成

计算机硬件系统：指构成计算机系统的电子线路和电子元件等物理设备的总称。硬件是构成计算机的物质基础，是计算机系统的核心
计算机软件系统：将解决问题的方法、思想和过程用程序进行描述，程序是软件的核心组成部分。程序通常存储在介质上。一台计算机中全部程序的集合统称为这台计算机的软件系统，按其功能分成应用软件和系统软件两大类

## 计算机软件与硬件的关系

操作系统：操作系统是管理计算机各种资源、自动调度用户作业、处理各种中断的软件。由操作系统管理的资源，通常有硬件、软件和数据信息。操作系统的规模和功能可大可小，随不同的要求而异。常见的操作系统有：DOS、UNIX、Windows、Linux等

**计算机系统的工作过程**

````md
把程序和数据装入主存
从程序的起始地址允许程序
用程序首地址从存储器取出第一条指令，经过译码、执行等一系列步骤完成指令功能，计算下一条指令的地址
用得到的地址继续读第二条指令执行，直到程序结束
每条指令都是在取指、译码和执行的循环中完成的
````

**计算机性能指标**

```js{4}
基本性能指标
字长：一般指一次参与运算数据的基本长度，用二进制数位的长度来衡量。字长对计算机性能有下列几方面的影响：

影响运算精确度。字长越长，计算精确度就越高，反之计算精确度就越低
影响数据的表示范围。字长越长，数据的表示范围就越大
影响运算速度。当需要运算的数据位较多，而字长又比较短时，需要经过多次运算才能完成计算任务，降低了运算速度

```

## 【计算机中的位、字节、字、字长的关系】

**介绍**

```md
位或比特（bit）。一个电子线路单元称为一个“位”（bit），它有两个稳定的工作状态，分别以“0”和“1”表示。是计算机中最小的数据单位。
字节（byte）。8位二进制数称为一个“字节”（byte，简写B）。它是计算机存储信息的基本单位，也是计算机存储空间大小的最基本容量单位。
字（word）。若干个字节组成一个“字”（word）。一个“字”可以存放一条计算机指令或一个数据。
字长。CPU内每个字可包含的二进制的长度称为“字长”（word size）。字长越长，在相同时间内就能传送越多的信息。微机的字长有16位（两个字节）、32位（四个字节）、64位（八个字节）等。
```


## More

更多详细信息可查看该作者的文章：https://blog.csdn.net/bay_Tong/article/details/108610852
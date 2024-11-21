
# 数据结构

## 简介
数据结构三要素：逻辑结构、存储结构、数据的运算；其中逻辑结构包括线性结构（线性表、栈、队列）和非线性结构（树、图、集合）
数据是信息的载体，是描述客观事物属性的数、字符及所有能输入到计算机中并被计算机程序识别和处理的符号的集合
数据元素是数据的基本单位，可由若干数据项组成，数据项是构成数据元素的不可分割的最小单位，数据对象是具有相同性质的数据元素的集合，是数据的一个子集
数据类型是一个值的集合和定义在此集合上的一组操作的总称
数据类型包括：原子类型、结构类型、抽象数据类型
数据结构是相互之间存在一种或多种特定关系的数据元素的集合，它包括逻辑结构、存储结构和数据运算三方面内容

## 栈和队列的简要知识
### 下面是顺序栈上常用的基本运算的实现
```c++
1.初始化
	void InitStack(SqStack &S){
		S.top=-1;
	}
2.栈判空
	bool StackEmpty(SqStack S){
		if(S.top==-1)	return true;
		else	return false;
	}
3.进栈
	bool Push(SqStack &S,ElemType x){
		if(S.top==MaxSize-1)	return false;
		S.data[++S.top]=x;	return true;
	}
4.出栈
	bool Pop(SqStack &S,ElemType &x){
		if(S.top==1)	return false;
		x=S.data[S.top--];
		return true;
	}
5.读栈顶元素
	bool GetTop(SqStack S,ElemType &x){
		if(S.top==-1)	return false;
		x=S.data[S.top];
		return true;
	}
```
## 循环队列的操作
```c++
1.初始化
	void InitQueue(SqQueue &Q){
		Q.rear=Q.front=0;
	}
2.判队空
	bool isEmpty(SqQueue &Q){
		if(Q.rear==Q.front) return true;
		else	return false;
	}
3.入队
	bool EnQueue(SqQueue &Q,ElemType x){
		if((Q.rear+1)%MaxSize==Q.front) return false;
		Q.data[Q.rear]=x;
		Q.rear=(Q.rear+1)%MaxSize;
		return true;
	}
4.出队
	bool DeQueue(SqQueue &Q,ElemType &x){
		if(Q.rear==Q.front)	return fasle;
		x=Q.data[Q.front];
		Q.front=(Q.front+1)%MaxSize;
		return true;
	}
```	


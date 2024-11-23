
# Data structure
## intro
Three elements of data structure: logical structure, storage structure, data operation; The logical structure includes linear structure (linear table, stack, queue) and non-linear structure (tree, graph, set). Data is the carrier of information, a collection of numbers, characters and all symbols that can be entered into the computer and recognized and processed by the computer program. Data element is the basic unit of data, which can be composed of several data items. A data item is an indivisible minimum unit that constitutes a data element, a data object is a collection of data elements with the same property, and is a subset of data, and a data type is a collection of values and a general term for a group of operations defined on this collection. Data types include: atomic type, structure type and abstract data type. Data structure is a collection of data elements with one or more specific relationships between each other, including logical structure, storage structure and data operation.<br>

## A brief knowledge of stacks and queues
### The following is an implementation of the basic operations commonly used on the sequential stack
```c++
1.initialize
	void InitStack(SqStack &S){
		S.top=-1;
	}
2.Stack empty
	bool StackEmpty(SqStack S){
		if(S.top==-1)	return true;
		else	return false;
	}
3.Push on
	bool Push(SqStack &S,ElemType x){
		if(S.top==MaxSize-1)	return false;
		S.data[++S.top]=x;	return true;
	}
4.Pull from storage
	bool Pop(SqStack &S,ElemType &x){
		if(S.top==1)	return false;
		x=S.data[S.top--];
		return true;
	}
5.Read the top element of the stack
	bool GetTop(SqStack S,ElemType &x){
		if(S.top==-1)	return false;
		x=S.data[S.top];
		return true;
	}
```
## Cyclic queue operations
```c++
1.initialize
	void InitQueue(SqQueue &Q){
		Q.rear=Q.front=0;
	}
2.nullify
	bool isEmpty(SqQueue &Q){
		if(Q.rear==Q.front) return true;
		else	return false;
	}
3. enqueue
	bool EnQueue(SqQueue &Q,ElemType x){
		if((Q.rear+1)%MaxSize==Q.front) return false;
		Q.data[Q.rear]=x;
		Q.rear=(Q.rear+1)%MaxSize;
		return true;
	}
4.dequeue
	bool DeQueue(SqQueue &Q,ElemType &x){
		if(Q.rear==Q.front)	return fasle;
		x=Q.data[Q.front];
		Q.front=(Q.front+1)%MaxSize;
		return true;
	}
```	


#
Computer operating system

###
一、Operating System Overview
####
1.1 Operating system definition and objectives <br>
&emsp;&emsp;Definition: The operating system is the hardware and software that controls and manages the computer system and allocates scheduling resources.<br>
&emsp;&emsp;Objectives: Convenience, efficiency (improve the utilization of system resources, improve the throughput of the system), scalability, openness.<br>
####
1.2 The basic functions of the operating system<br>
1. Unified management of computer resources: processor resources, IO device resources, memory resources, file resources;<br>
2. It realizes the abstraction of computer resources: IO device management software provides read and write interface, file management software provides operation file connection;<br>
3. Provides the interface between the user and the computer: GUI (graphical user interface), command form, system call form.<br>

####
1.3 Characteristics of the operating system
The most basic characteristics, mutual existence conditions: concurrency, sharing;


（1）Parallel: refers to two or more events can occur at the same time, multi-core CPU can achieve parallel, a cpu at the same time only one program running;

（2）Concurrent: When two or more events can occur at the same time interval, it appears to the user that each program is running, but in fact each program is executing alternately.
>![Concurrent parallel](/bing.png)

（3）Sharing: The resources in the operating system can be used by multiple concurrent programs, this form is called resource sharing.

&emsp;&emsp;Mutually exclusive sharing: When resources are occupied by programs, other programs that want to use them can only wait.<br>
&emsp;&emsp;Simultaneous access: A resource is accessed concurrently by multiple programs.<br>
&emsp;&emsp;Virtual and asynchronous features presuppose concurrency.<br>

<p>（4）Virtuality: represents the transformation of one physical entity into several logical entities.</p>

&emsp;&emsp;Time division multiplexing technology: resources are multiplexed in time, different programs are used concurrently, and multi-program time-sharing uses computer hardware resources to improve resource utilization.
Space division multiplexing technology: It is used to realize virtual disks (physical disks are virtual logical disks, C disks on the computer, D disks, etc.), virtual memory (logically expand the storage capacity of the program), etc., improve the utilization of resources and improve programming efficiency.<br>
（5）Asynchronism: In a multi-program environment, multiple processes are allowed to execute concurrently, but due to the limitations of resources and other factors, the execution of the process runs in a "stop-and-go" way, and the execution of each process (run, pause, speed, completion) is also unknown.<br>

####
1.4Interrupt processing of the operating system
The function of interrupt mechanism: in order to allow users to interact in multi-channel batch processing system;

Interrupt generation:

&emsp;&emsp;When an interruption occurs, the CPU immediately switches to the management state to carry out management work; (A management state, also called a privileged state, system state, or core state, is the state that a machine is in when a program managed by the operating system is executed.)
After an interruption occurs, the running process is paused and the operating system kernel handles the interruption.
Different interrupt signals are processed differently.
Classification of interrupts:

&emsp;&emsp;Internal interrupt (also called "exception", "exception", "stuck") ------- Signal source: internal CPU, related to the currently executing command;
External interrupt (interrupt) ---------- Signal source: external to the CPU, independent of the currently executing command.
External interrupt handling procedure:

&emsp;&emsp;After each instruction is executed, the CPU needs to check whether there is an external interrupt signal.
If external interrupt signals are detected, it is necessary to protect the CPU environment of the interrupted process (such as program status word PSW, program counter PC, various general purpose registers) and store them in the PCB (process control block);
According to the interrupt signal type into the corresponding interrupt processing program;
Restore the CPU environment of the original process, exit the interrupt, and return to the original process to continue executing.

###
二、Process management
####
2.1 Process entity for process management
Why processes are needed:

&emsp;&emsp;Process is the basic unit of resource allocation and scheduling in system.
Process is the carrier of program independent operation to ensure the normal execution of program.
The existence of processes greatly improves the utilization of operating system resources. +
Process control block (PCB) : A general data structure used to describe and control process operation, record the current state of the process and control process operation of all information, is the unique identification of the process existence.

Process and Thread:

&emsp;&emsp;Thread: The operating system**The smallest unit of operational scheduling**。
Process: The system carries out**Basic unit of resource allocation and scheduling**。
Difference and connection:

&emsp;&emsp;A process can have one or more threads;
The thread is contained in the process and is the unit that actually runs the work in the process.
The threads of a process share process resources;
A process can have multiple threads concurrently, each performing a different task.

```address
Source file address:
https://blog.csdn.net/Royalic/article/details/119999404

```

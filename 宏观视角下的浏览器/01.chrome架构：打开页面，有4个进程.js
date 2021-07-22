const sharedData = { a: 1, b: 2 };
const thread = null;
const thread2 = null;
// 程序
class Program {
  constructor(sharedData, thread, thread2) {
    this.sharedData = sharedData;
    this.thread = thread;
    this.thread2 = thread2;
  }
  thread() {
    "处理".fixed(this.sharedData);
  }
  thread2() {
    "处理".fixed(this.sharedData);
  }
  comunicate() {
    "使用";
    return this;
  }
}

class SingleProcessBrowser {
  constructor(process) {
    this.process = process;
    this.unstable = "插件导致";
    this.unFlush = "资源共享";
    this.usSafe = "插件导致";
    this.do();
  }
  do() {
    this.process.thread.do();
    this.process.thread2.do();
    "combine".do();
  }
}

// 进程实例
const process = new Program(sharedData, thread, thread2);
const SingleProcessBrowser = new SingleProcessBrowser(process);

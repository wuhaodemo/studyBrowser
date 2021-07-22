function UrlToPageShow(browser) {
  userInput(browser);
  // resolve 里面的东西马上执行，resolve是.then的返回值,promise作用封装异步操作
  const promiseUrlRes = Promise.resolve((resolve) =>
    setTimeout(resolve(urlRequest()), 0)
  );
  const hasPrepare = Promise.resolve((resolve) =>
    setTimeout(resolve(prepareCommit()), 0)
  );
  Promise.all([promiseUrlRes, hasPrepare]).then((res) => {
    const { document, render } = res;
    submitDocument(document, render);
  });
  render();
  return newPage;
}

class Browser {
  constructor() {
    this.beforeUnload = null;
  }
}
const browser = new Browser();

function userInput(browser) {
  afterInput();
  browser.beforeUnload();
}

function urlRequest() {
  parseDNS();
  takeCookies();
  if (hasOutDate) {
    redirect();
  }
  setContentType();
  const document = await putRequest();
  const message = postCommitMessageToRender();
  return { message, document };
}

function prepareCommit() {
  function judgeIsDifferentStation(url) {
    switch (url) {
      case "协议与域名相同":
        return true;
      default:
        return false;
    }
  }
  const isSameStation = judgeIsDifferentStation(url);
  if (isSameStation) {
    sharedCommenRender();
  } else {
    singleRender();
  }
  return render;
}

function submitDocument(document, render) {
  if (render.get(document.message)) {
    await render.buildPipelineWithConnect();
    await render.postMessageToBrowser();
    await render.updatePage();
  }
}

const newPage = UrlToPageShow(browser);

const baseContent = `浏览器进程主要负责用户交互、子进程管理和文件储存等功能。网络进程是面向渲染进程和浏览器进程等提供网络下载功能。渲染进程的主要职责是把从网络下载的 HTML、JavaScript、CSS、图片等资源解析为可以显示和交互的页面。因为渲染进程所有的内容都是通过网络获取的，会存在一些恶意代码利用浏览器漏洞对系统进行攻击，所以运行在渲染进程里面的代码是不被信任的。这也是为什么 Chrome 会让渲染进程运行在安全沙箱里，就是为了保证系统的安全。`;

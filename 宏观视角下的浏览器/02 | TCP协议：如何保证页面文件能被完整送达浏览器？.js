function browserRequestFlow() {
  const url = generateRequest();
  const isShouldRequest = findCache(url);
  if (isShouldRequest) {
    var Ip = prepareIpLocation(url);
  }
  waitTcpQueue(Ip);
  buildLink();
  putRequeset();
}
function generateRequest() {
  return url;
}
function findCache(url) {
  if (this.cookie) {
    return "not request";
  } else {
    return "request";
  }
}
function prepareIpLocation(isShouldRequest, url) {
  if (isShouldRequest) {
    // 域名解析
    parse(url);
    return Ip;
  }
}

function buildLink() {
  "三次握手";
}

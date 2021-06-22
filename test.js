console.show()

function getReq(url, cookie) {
  //  log("jhhhh")
  var headers = {
    'Accept-Language': 'zh-cn,zh;q=0.5',
    'User-Agent': 'jdapp;android;9.5.2;10;2363332383167383-6653730323835326;network/wifi;model/Mi 10;addressid/138626975;aid/26328a78f570285b;oaid/3300b0a282a02788;osVer/29;appBuild/87971;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; Mi 10 Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36 Edg/91.0.4472.77',
    'Cookie': cookie
  }
  try {
    var r = http.get(url, {
      // headers: headers
    });
    sleep(1000);
    var req = r;
    // log(req);
    return req;
  } catch (e) {
    // console.error(e);
    return "请求出错！"
  }
}

function getShopName(urls) {
  var shopNames = [] // 数组保存店铺名
  for (let item of urls) {
    log(item)
    console.info("请求中...")
    // 第一次请求获取链接
    var strs = getReq(item, "").body.string().split("\'");
    var re = /^https:\/\/u.jd.com/i;
    var url = "";
    // 遍历筛选链接
    for (let i of strs) {
      if (re.test(i)) { url = i }
    };
 
    
    // 第二次请求获取店铺shop.m.jd链接
    var req_url = getReq(url,"").url.toString();
    // log(req_url)
    // 第三次请求获取店铺名
    var shop = getReq(req_url,"").body.string().split("title");
    
    // console.info(shop)
    
    var shopName = shop[1].split("\n")[1].trim()
    shopNames.push(shopName)
  }
  return shopNames;
}
// var shopNames = getShopName(["https://u.jd.com/GbykL6N","https://u.jd.com/Gy2CQbf"])

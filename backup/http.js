// console.show();
// console.clear(); // 清除控制台
// console.setPosition(400, 400); // 设置控制台位置
// console.show();

function getReq(url, cookie) {
  var headers =  {
    'Accept-Language': 'zh-cn,zh;q=0.5',
    'User-Agent': 'jdapp;android;9.5.2;10;2363332383167383-6653730323835326;network/wifi;model/Mi 10;addressid/138626975;aid/26328a78f570285b;oaid/3300b0a282a02788;osVer/29;appBuild/87971;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; Mi 10 Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36 Edg/91.0.4472.77',
    'Cookie': cookie
  }
  try {
    var r = http.get(url, {
      headers: headers
    });
    
    var req = r.body;
    // log(req);
    // var result = req.result.followDesc;
    // log(result);
    return req;
  }catch(e) {
    // console.error(e);
    return "请求出错！"
  }
  // return code;
}

var url = "https://api.m.jd.com/client.action?functionId=drawShopGift&body=%7B%22follow%22%3A%200%2C%20%22shopId%22%3A%20%221000000264%22%2C%20%22activityId%22%3A%20%2210386229%22%2C%20%22sourceRpc%22%3A%20%22shop_app_home_window%22%2C%20%22venderId%22%3A%20%221000000264%22%7D&uuid=458e719797fc46b59aa739bfc312b328&client=apple&clientVersion=9.4.0&st=1622525669000&sv=120&sign=a36f752186bdafdcfc000711d7d4a04c"
var url1 = 'https://api.m.jd.com/client.action?functionId=drawShopGift&clientVersion=10.0.0&build=88399&client=android&d_brand=Xiaomi&d_model=Mi10&osVersion=10&screen=2120*1080&partner=jingdong&oaid=3300b0a282a02788&openudid=26328a78f570285b&eid=eidAf39b812215s8HeDZMp7RSiyhtbOjIWgMYB3g2qnCN92jERfxB66CAnLyiHvlr6xkhjgx0ASlQQPBfHivBBsG4VZqYPLKN/iSUFzKOn8XD1Bafd5B&sdkVersion=29&lang=zh_CN&uuid=26328a78f570285b&aid=26328a78f570285b&area=18_1501_1504_52593&networkType=UNKNOWN&wifiBssid=unknown&uts=0f31TVRjBSuZvGn4Ab9PfynExMJdttrHNYVMbSTjdj1ycrewAeC+sFKN726YpZ5J4v01yHamcq+rBLcr+H3Q9KYTrmNBlN/aE+j2/zPAVczrQQvB6rusiAcncs0nkAXoHPSw1CCOCYpE675XJOpdy44AR0nQJ5VO+BHGZPFYt6a1OHis6DEd98dLHyjXwpWsLFQInk4px5TkCZaTy8Lt7A==&uemps=0-0&st=1622695222537&sign=45caf5deba7e1fa9f085175baa6c0e89&sv=121&body={"activityId":10388665,"follow":false,"shopId":"1000302787","sourceRpc":"shop_app_home_window","venderId":"1000302787"}&'
var cookie = 'pt_key=AAJgs4hsADAcwVcy9MPTuq-e0c8ZrJNwsJSslaf0-t0K51-NqYvipdJhY7YaLLAgAvfB7dX5QY8;pt_pin=jd_rThoUanszXEJ;'

// getReq("www.baidu.com", "");
console.log(getReq("https://www.baidu.com", ""))
// module.exports = getReq;
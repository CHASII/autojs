console.show();
console.clear(); // 清除控制台
console.setPosition(400, 400); // 设置控制台位置
console.show();

var headers =  {
  'Accept-Language': 'zh-cn,zh;q=0.5',
  'User-Agent': 'jdapp;android;9.5.2;10;2363332383167383-6653730323835326;network/wifi;model/Mi 10;addressid/138626975;aid/26328a78f570285b;oaid/3300b0a282a02788;osVer/29;appBuild/87971;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; Mi 10 Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36 Edg/91.0.4472.77',
  // 'Cookie': ""
}

function get(url) {
  try {
    var r = http.get(url, {
      headers: headers
    });
    var req = r.body.string();
    console.info(req);
  }catch(e){
    log('error');
  }
}

get("https://u.jd.com/8KdrYLK");
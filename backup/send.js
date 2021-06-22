auto.waitFor() // 判断是否开启了无障碍
console.clear(); // 清除控制台
console.setPosition(400, 400); // 设置控制台位置
console.show();

//  导入模块
// var getReq = require('http.js');

var cookies = [
  "pt_key=AAJgmoZlADDwlE5BrzScmNjI8CbnUSQeXSkWQELZWVI2vsJFMsj73XBfLeSu3E1dXbMHzIyxlMw;pt_pin=jd_4b578820cb82b;",
  "pt_key=AAJgmVi9ADDI2n1uQhkieWWLlYfS2TENA0v70uU7z6PbYUNukw8wbNigIw__2MXo5LQbrLAbzMk;pt_pin=jd_4485084bb2bf3;",
  //"pt_key=AAJgml6GADCXhBnh0ZoXZnNV4MXOSIyWc8kag_VLqecXKX6rokmd970Gdo0MDpL2Bg7guCVW0lg;pt_pin=jd_748e740be9862;",
  //"pt_key=AAJgs4hsADAcwVcy9MPTuq-e0c8ZrJNwsJSslaf0-t0K51-NqYvipdJhY7YaLLAgAvfB7dX5QY8;pt_pin=jd_rThoUanszXEJ;",
  //"pt_key=AAJgmTAKADDqcZhBBHVex7tIJcmiZftuNxKlna1VDpes8qm92d4bThU1WcGV8lSbB7IxJq8l0VU;pt_pin=jd_NTMMsVEYLttj;",
  //"pt_key=AAJgtyuJADCPZe-3rjaq9lzuGYwG1CL8txkVXCUSDSeWqKAdj87WuIscywypGZ78VkQF08E9cVs;pt_pin=jd_670126170969b;",
  //"pt_key=AAJgsd3BADCVKxCruhEw2U1wrCWOPKlakgcYfUMiWEbmA3AwCaBNcbOnPW2H52Q4m71lHOsmfUU;pt_pin=jd_79344fb0d36e5;",
]

var urlList = [ 'https://api.m.jd.com/client.action?functionId=followShop&clientVersion=10.0.0&build=88399&client=android&d_brand=Xiaomi&d_model=Mi10&osVersion=10&screen=2120*1080&partner=jingdong&oaid=3300b0a282a02788&openudid=26328a78f570285b&eid=eidAf39b812215s8HeDZMp7RSiyhtbOjIWgMYB3g2qnCN92jERfxB66CAnLyiHvlr6xkhjgx0ASlQQPBfHivBBsG4VZqYPLKN/iSUFzKOn8XD1Bafd5B&sdkVersion=29&lang=zh_CN&uuid=26328a78f570285b&aid=26328a78f570285b&area=18_1501_1504_52593&networkType=wifi&wifiBssid=unknown&uts=0f31TVRjBSvL0iedG9sJJfXP3CZRnhQUM49vAm3nr5s2XRtPZA762c%2F7pbz7bK158hQPJZZrFXnSNowmOILe4LiOpV5KYXoprgU2h7s8nI8pQKGnoB0ipkzJDX4PFhoW4CqBMDgVZ6DvbzrKkgFs9EhYDFMfxRBMwxBTEwCBas9y8MPopvW5Hym1QEKTBzx8HcHhIacgushstpWBuFUuxQ%3D%3D&uemps=0-2&st=1622727475316&sign=d7f75a3d2044c80af4cc136495cff1b3&sv=101&body=%7B%22follow%22%3Atrue%2C%22shopId%22%3A%22856130%22%2C%22sourceRpc%22%3A%22shop_app_home_follow%22%7D&' ];

function sendAll(urlList) {
  for (var i = 0; i < cookies.length; i++) {
     for (var j = 0; j < urlList.length; j++) {
        console.info("cookie"+i+":"+getReq(urlList[j], cookies[i]));
     }
  }
}
sendAll(urlList);

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
    
    var req = r.body.json();
    // log(req);
    var result = req.result.followDesc;

    return result;
  }catch(e) {
    console.error(e);
    return "请求出错！"
  }
  // return code;
}
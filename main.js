// var sendAll = require('send.js');
auto.waitFor() // 判断是否开启了无障碍
console.clear(); // 清除控制台
console.setPosition(400, 400); // 设置控制台位置
console.show();


// 启动app
var appName = 'com.guoshi.httpcanary.premium';
var LinearLayout = 'android.widget.LinearLayout';
var ImageView = 'android.widget.ImageView';
var Button = 'android.widget.Button';
var Relartive = 'android.widget.RelativeLayout';
var TextView = 'android.widget.TextView';
var ScrollView = 'android.widget.ScrollView';
var path = "/sdcard/JD关注/url.txt";

// 每次运行脚本清除文件内容
files.write(path, "");
// if (currentPackage() != appName){

// }
app.launch(appName);
// log()

var urlArray = []; // 存放请求体信息
var urlList = []; // 存放提取出来的所有的url

sleep(2000)

className(ImageView).desc("更多选项").waitFor()
var r_top = className(ImageView).findOnce();

var fondTitle = className(TextView).text('搜索结果');
// log(fondTitle)
// log(r_top)
var r_top_isTrue = r_top.click() // 点击右上角
// console.show();

if (r_top_isTrue) {
    sleep(2000)
  if(className(LinearLayout).depth(6).exists()){
      toast("没有数据，退出脚本")
      //sleep(1000)
      killApp(appName)
      console.hide()
      exit()
      
    }
  //text("什么也没有找到").waitFor()
  
  go();
  // clickJd();
  className("android.widget.TextView").text("搜索结果").waitFor()
  list();
}else if(fondTitle != "") {
  log('进入搜索结果');

  className("android.widget.TextView").text("搜索结果").waitFor()
  //sleep(1000)
  list();
  // mkdirFile();
}else {
  sleep(1000)
  killApp(appName);
  console.hide()
  exit();
}

// 点击

// url.click();
// log(url.size())


// 进入搜索结果
function go() {
    // log("点击了")
  // 点击右边栏
  sleep(1000)
  var r_top_list = className(LinearLayout).find();

  // 点击右边搜索
  sleep(1000)
  r_top_list[2].click();

// 设置文本
  let editText = id("arg").className("android.widget.EditText").findOne()
  editText.setText("functionId=drawShopGift")
  // 点击搜索
  sleep(2000)
  var found = className(Button).text('搜索');
  found.click();

  sleep(2000);
}

// 进入抓包内容
function list() {
  console.info("进入list模块...")
    // 点击结果
    var count = className(Relartive).depth(7).find();
    if(count.size()) {
      for (var i = 0; i < count.size(); i++) {
        count[i].click();
        log(i);
        sleep(2000);
        var text = clickJd();
       //  添加url到文件中
        appendFile(text);
        console.info("添加url到数组成功...");
        sleep(3000);
     }
     
    }else {
      toast("没有搜索结果,退出脚本");
      sleep(1000)
      killApp(appName)
      console.hide()
      exit();
    }
   
    
}
// 复制内容
function clickJd() {
  log('进入clickJd函数');
  var url = id("arg").depth(9).findOne().text()
  sleep(1000)
  desc('请求').click();
  className(TextView).text('Text').click()
  sleep(1000);
  id('arg').className(TextView).find().forEach(function(tv){
    urlArray.push(tv.text());
  })
  var rs_str = url+"&"+urlArray[urlArray.length - 12];
  urlList.push(rs_str);
  back()
  return rs_str+"\n";
}

function appendFile(text) {
  files.append(path,text)
}

console.info(urlList);

// 发起网络请求
var cookies = [
//"pt_key=AAJgwhSCADAGARPzGj4rtrHyvh_0ldeIEfQ27R9mrNoPwmS0hLfm11rsIQdLwYrn2Jz9VhChPaQ;pt_pin=jd_4b578820cb82b;",
"pt_key=AAJgwWrIADBVg6slgx5N1VNRqCz_aPRU7FqEcHVHfXlxRPEjCW4PSmEIJO3czOq5c2thRCigU88;pt_pin=jd_4485084bb2bf3;",
"pt_key=AAJgwfYgADCJwqgV5dmAOJsKn8xm32Q2IcKiALKNjlhybeX0CZp9TGPJmAAuypS5mH5tuBRRtFw;pt_pin=jd_748e740be9862;",
"pt_key=AAJgs4hsADAcwVcy9MPTuq-e0c8ZrJNwsJSslaf0-t0K51-NqYvipdJhY7YaLLAgAvfB7dX5QY8;pt_pin=jd_rThoUanszXEJ;",
"pt_key=AAJgwVdwADDwuCtAR6AEy91wPnZKTHfHDi70GCFfpB_aw-8Nk4FClvmtO_AH7DmxlBUhGY8z9Jo;pt_pin=jd_NTMMsVEYLttj;",
"pt_key=AAJgtyuJADCPZe-3rjaq9lzuGYwG1CL8txkVXCUSDSeWqKAdj87WuIscywypGZ78VkQF08E9cVs;pt_pin=jd_670126170969b;",
"pt_key=AAJgsd3BADCVKxCruhEw2U1wrCWOPKlakgcYfUMiWEbmA3AwCaBNcbOnPW2H52Q4m71lHOsmfUU;pt_pin=jd_79344fb0d36e5;"
]
// var url = [ 'https://api.m.jd.com/client.action?functionId=followShop&clientVersion=10.0.0&build=88399&client=android&d_brand=Xiaomi&d_model=Mi10&osVersion=10&screen=2120*1080&partner=jingdong&oaid=3300b0a282a02788&openudid=26328a78f570285b&eid=eidAf39b812215s8HeDZMp7RSiyhtbOjIWgMYB3g2qnCN92jERfxB66CAnLyiHvlr6xkhjgx0ASlQQPBfHivBBsG4VZqYPLKN/iSUFzKOn8XD1Bafd5B&sdkVersion=29&lang=zh_CN&uuid=26328a78f570285b&aid=26328a78f570285b&area=18_1501_1504_52593&networkType=wifi&wifiBssid=unknown&uts=0f31TVRjBSvL0iedG9sJJfXP3CZRnhQUM49vAm3nr5s2XRtPZA762c%2F7pbz7bK158hQPJZZrFXnSNowmOILe4LiOpV5KYXoprgU2h7s8nI8pQKGnoB0ipkzJDX4PFhoW4CqBMDgVZ6DvbzrKkgFs9EhYDFMfxRBMwxBTEwCBas9y8MPopvW5Hym1QEKTBzx8HcHhIacgushstpWBuFUuxQ%3D%3D&uemps=0-2&st=1622727475316&sign=d7f75a3d2044c80af4cc136495cff1b3&sv=101&body=%7B%22follow%22%3Atrue%2C%22shopId%22%3A%22856130%22%2C%22sourceRpc%22%3A%22shop_app_home_follow%22%7D&' ]

sendAll(urlList, cookies);

// module.exports = urlList;



// console.info()
// var urlList = ['www.baidu.com', 'www.jd.com'];
// log(cookies.length)
// 发送函数
function sendAll(urlList, cookies) {
  let msgs = [];
  for (var i = 0; i < cookies.length; i++) {
     for (var j = 0; j < urlList.length; j++) {
      let msg = "cookie"+i+":"+getReq(urlList[j], cookies[i]); 
      console.info(msg);
      msgs.push(msg);
     }
  }
// 发送消息给bot
  sendMessage(msgs.toString());
  
  sleep(2000);
  console.hide();
  killApp(appName);
  exit()
}

// 网络请求函数
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
    sleep(1000);
    var req = r.body.json();
    var result = req.result.followDesc;
    // var result = req.msg;
    return result;
  }catch(e) {
    // console.error(e);
    return "请求出错！"
  }
}


// 将结果发送给bot
function sendMessage(msg) {
  // url
  let url = 'https://jd2.dudu48021.workers.dev/bot1540229015:AAHPL_uCyTQuggkJHBQVC7jALwrU_SKELOY/sendMessage?chat_id=1204688751&text='+msg;
  try {
    let res = http.get(url);
    console.log(res.body.json().ok);
  }catch(e) {
    console.error("发送到bot失败");
  }
}

function killApp(packageName) {
  shell('am force-stop ' + packageName, true);
};

engines.stopAllAndToast(); // 停止所有脚本
console.error();




le.error();






le.error();





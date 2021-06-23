auto.waitFor() // 判断是否开启了无障碍
console.clear(); // 清除控制台
console.setPosition(0, 400); // 设置控制台位置
console.show();
var LinearLayout = 'android.widget.LinearLayout';
var TextView = 'android.widget.TextView'

// let other = className(TextView).depth(6).bounds(251,1355,829,1498).findOne(1000)
// if(other != null) {
//   sleep(1000)
//   other.click()
// }else {
//   log("null")
// }

// function foundText(msg) {
//   let tv = className(LinearLayout).depth(11).drawingOrder(2); // 找到按钮
//   tv.waitFor()  // 等待按钮出现
//   let content = tv.findOne(1000).children()[0].contentDescription;  // 提取按钮信息
//   let reg =new RegExp(msg)
//   let res = 0;
//   if (reg.test(content)) {
//     // log("true")
//     log("按钮存在，点击...");
//     sleep(1000);
//     if(tv.findOne().click()) {
//       log("点击成功")
//       res = 1;
//     }
//   }
//   return res;
// }

// if(foundText("关注")){
//   log("哈哈哈哈哈")
// }
// 其他弹窗处理
// function otherWindow(msg) {
//   let other = text(msg).findOne(1000)
//   if (other != null) {
//     text(msg).waitFor();
//     sleep(1000);
//     other.click();
//   }
// }

// function otherScript(filename) {
//   var scriptsPath = "/sdcard/脚本/";
//   if (!files.exists(scriptsPath)) {
//     scriptsPath = "/sdcard/Scripts/";
//   }
//   var scriptFiles = files.listDir(scriptsPath, function (name) {
//     return name.endsWith(".js");
//   });
//   // log(scriptFiles[1])
//   let re = new RegExp(filename);
//   let chooseFile = null
//   for (var i = 0; i < scriptFiles.length; i++) {
//     // log(scriptFiles[i])
//      if (re.test(scriptFiles[i])) {
//        console.log(scriptFiles[i]);
//        chooseFile = scriptFiles[i]
//      }
//   }
//   if (chooseFile != null) {
//     var path = files.join(scriptsPath, chooseFile);
//     log("开始运行："+path)
//     engines.execScriptFile(path);
//   }else {
//     log("文件不存在")
//     sleep(1000);
//     console.hide()
//     exit()
//   }


// }
// otherScript("main.js")
// otherWindow("关注店铺领奖励");

// 打开抓包软件开启抓包
function canary() {
  let appName = "com.guoshi.httpcanary.premium"
  app.launch(appName)
  id("arg").className("android.widget.ImageButton").waitFor()
  let btn = id("arg").className("android.widget.ImageButton").depth(10).drawingOrder(3).findOne(3000)
  sleep(1000)
  if(btn.click()){
    log("抓包已开启")
    sleep(1000)
    app.launch("org.telegram.messenger")
    // app.intent({packageName:"org.telegram.messenger",root:true})
  }
}
// canary()
// toast("对话框显示了");
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
    var shop = http.get(req_url).body.string().split("title");
    
    // console.info(shop)
    
    var shopName = shop[1].split("\n")[1].trim()
    shopNames.push(shopName)
  }
  return shopNames;
}

// 点击测试
function foundText(msg) {
  let tv = className(LinearLayout).depth(11).drawingOrder(2); // 找到按钮
  tv.waitFor()  // 等待按钮出现
  let content = tv.findOne(1000).children()[0].contentDescription;  // 提取按钮信息
  let reg = new RegExp(msg)
  let res = 0;
  if (reg.test(content)) {
    // log("true")
    log("按钮存在，点击...");
    sleep(1000);
    if (tv.findOne().click()) {
      log("点击成功")
      res = 1;
    }
  }
  return res;
}
// foundText("关注有礼")

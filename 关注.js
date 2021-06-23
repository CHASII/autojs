console.show();
console.clear(); // 清除控制台
console.setPosition(400, 400); // 设置控制台位置
// console.show();

var appName = 'com.jingdong.app.mall'; //org.telegram.messenger
var LinearLayout = 'android.widget.LinearLayout';
var ImageView = 'android.widget.ImageView';
var Button = 'android.widget.Button';
var Relartive = 'android.widget.RelativeLayout';
var TextView = 'android.widget.TextView';
var ScrollView = 'android.widget.ScrollView';
var ViewGroup = "android.view.ViewGroup";
var View = "android.view.View";
var FrameLayout = "android.widget.FrameLayout";
var Button = 'android.widget.Button';
var EditText = 'android.widget.EditText'
var ViewFlipper = 'android.widget.ViewFlipper'
var Hor = 'android.widget.HorizontalScrollView'
// app.launch(appName);
var urlArray = []; // 存放url的数组
var shop_array = []; // 存放店铺名的数组
var fmatArray = []; // 去除urlArray空元素后的数组
var isSkip = 0;


if (tgClick().length && canary()) {
  console.info("获取连接成功，开始点击链接")
  log("总共获取到" + fmatArray.length + "个店铺")
  shop_array = getShopName(fmatArray)
}

// console.info(shop_array);

// 循环搜索店铺点关注
if (shop_array.length) {
  // 打开一次软件即可
  console.info("获取到" + shop_array.length + "店铺，正在打开京东...")
  // 打开京东
  app.launch(appName)
  sleep(1000);
  // 选择其中一个
  click(51, 1816);
  sleep(3000);

  // 循环开始关注店铺。
  // log(shop_array.length)
  for (var i = 0; i < shop_array.length; i++) {
    console.info('循环开始关注店铺。');
    // log(shop_array[i])
    if (shop_array[i] != null) {
      sleep(2000)
      console.info("开始执行第" + (i + 1) + "个店铺：" + shop_array[i])
      // log(openJd(shop_array[i]))
      if (openJd(shop_array[i])) {
        isSkip = 1;
      }
      // log(isSkip)
    }

  }
  sleep(2000)
  if (isSkip) {
    otherScript("main")
  } else {
    killApp("com.guoshi.httpcanary.premium")
  }
  console.info("执行完毕, 脚本关闭...");
  killApp(appName);
  sleep(1000);
  console.hide()
  exit();
} else {
  console.info("没有店铺信息，退出脚本");
  sleep(2000);
  console.hide();
  killApp(appName);
  exit();
}

// 从tg中获取链接
function tgClick() {
  console.info("获取链接中...")
  var tgCli = className(ViewGroup).depth(9).drawingOrder(1).findOne(3000);
  if (tgCli != null) {
    var all = tgCli.desc().toString().split('\n');
  } else {
    return [];
  }
  urlArray = getUrl(all);
  for (var i = 0; i < urlArray.length; i++) {
    if (urlArray[i] != "") {
      fmatArray.push(urlArray[i]);
    }

  }

  return fmatArray;
}

//  获取店铺名（无效，已经用getShopName函数代替）
function getShop() {
  console.info('获取店铺名...');
  let shopTitle = className(TextView).depth(7).drawingOrder(2)
  shopTitle.waitFor()
  sleep(1500)
  var shop = shopTitle.findOne(2000); // 获取店铺名称

  if (shop != null && shop.text() != "京东网上商城") {
    shopName = shop.text();
    console.info(shopName);
    return shopName;
  } else {
    console.info("没找到店铺名,查找下一个");
    // return 0;
    return null;
  }
}

function isExists(shopName) {
  if (className(ViewFlipper).depth(9).exists()) {
    // log("ViewFlipper存在")
    HomeBar();
    isExists(shopName)
    return 1;
  }
  else if (className(EditText).depth(6).exists() || className(Hor).depth(9).exists()) {
    // log("EditText存在")
    Edit(shopName);
    return 1
  } else {
    back();
    isExists(shopName)
    return 1
  }
  return 0
}

// 打开京东后续操作
function openJd(shopName) {
  sleep(1000);


  // 点击HomeBar
  // isExists(shopName)

  if (isExists(shopName) && click("进店", 0)) {
    console.info("进入店铺成功")
    sleep(2000)

    if (text("关注店铺领奖励").exists()) {
      text("关注店铺领奖励").click();
      sleep(1000);
    } else {
      // log("不存在");
      // log(tv.find().size())
      otherWindow("关注店铺领奖励") // 处理点击前弹窗
      if (foundText("关注有礼")) { // 关注有礼存在则点击
        sleep(1500);
        // 弹窗处理
        otherWindow("收下好礼 先收先得")
        console.info("关注成功,开始返回");
        sleep(1000)
        back()
        // sleep(1000);
        return 1;
      } // 处理点击后弹窗
      else {
        log("不是有礼关注按钮")
        back();
        return 0;
      }
    }
  }
  else {
    console.error("不存在，查找下一个");
    return 0;
  }

}

// 各个判断函数
// 首页bar点击
function HomeBar() {
  var bar = className(ViewFlipper).depth(9).findOne(2000);
  if (bar != null) {
    var b = bar.bounds();
    sleep(2000);
    click(b.centerX(), b.centerY());
  } else {
    log('无搜索框')
  }
}

// 输入文本输入框
function Edit(shopName) {
  var input = className(EditText).findOne(2000);
  if (input != null) {
    sleep(1000);
    input.setText(shopName)
    // 点击搜索进入
    id('a9b').text('搜索').findOnce().click();
    sleep(2000);
  } else {
    sleep(1000)
    afterInput(shopName)
    log('无输入框')
  }
}

// 输入之后，或者重新搜索部分函数
function afterInput(shopName) {
  var afterInput = className(Hor).depth(9).findOne(2000);
  if (afterInput != null) {
    let b = afterInput.bounds();
    click(b.centerX(), b.centerY())
    // afterInput.click()
    Edit(shopName)
  } else {
    log('无搜索框');
  }
}

// 关闭应用
function killApp(packageName) {
  shell('am force-stop ' + packageName, true);
};

// 获取关注url
function getUrl(all) {
  let re = /关注|^\d$|^\d.*跳转APP$/i;
  // let re = /he/i
  let re_url = /^https/i;
  let url_ary = [];
  for (i = 0; i < all.length; i++) {
    // log(all[i])
    let a1 = re.test(all[i]);
    // console.log(a1);
    let j = i;
    if (a1) {
      // log(all[i])
      // log("进入")
      for (j; j < all.length; j++) {
        let a2 = all[j + 1];
        // log("开始内循环")
        if (re_url.test(a2) || a2 == "") {
          // log(all[j+1]);
          url_ary.push(all[j + 1]);
        } else {
          break;
        }
      }
    }
    // log(j);
    i = j;
  }
  // log(url_ary)
  return url_ary;
}

// 其他弹窗处理
function otherWindow(msgs) {
  let strs = msgs.split(" ")
  // let msg = msgs.split(" ")
  for (let msg of strs) {
    // log(msg)
    let other = text(msg).findOne(1500)
    if (other != null) {
      text(msg).waitFor();
      sleep(1000);
      other.click();
      return 1;
    }
  }
  return 0
}

// 打开其他脚本
function otherScript(filename) {
  // 关闭前一个脚本的弹窗
  console.hide();
  var scriptsPath = "/sdcard/脚本/";
  if (!files.exists(scriptsPath)) {
    scriptsPath = "/sdcard/Scripts/";
  }
  // 查找文件
  var scriptFiles = files.listDir(scriptsPath, function (name) {
    return name.endsWith(".js");
  });
  // log(scriptFiles[1])

  let re = new RegExp(filename); // 筛选文件
  let chooseFile = null   // 保存文件名
  // 循环找到文件
  for (var i = 0; i < scriptFiles.length; i++) {
    // log(scriptFiles[i])
    if (re.test(scriptFiles[i])) {
      console.log(scriptFiles[i]);
      chooseFile = scriptFiles[i]
    }
  }
  // 判断文件是否存在
  if (chooseFile != null) {  // 存在即运行
    var path = files.join(scriptsPath, chooseFile);
    log("开始运行：" + path)
    engines.execScriptFile(path);
  } else { // 不存在即退出
    log("文件不存在")
    sleep(1000);
    console.hide()
    exit()
  }

}

// 判断是否是指定消息的按钮
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

// 打开canary抓包
function canary() {
  let appName = "com.guoshi.httpcanary.premium"
  app.launch(appName)
  id("arg").className("android.widget.ImageButton").waitFor()
  let btn = id("arg").className("android.widget.ImageButton").depth(10).drawingOrder(3).findOne(3000)
  sleep(1000)
  if (btn.click()) {
    log("抓包已开启")
    sleep(1000)
    app.launch("org.telegram.messenger")
    return 1;
    // app.intent({packageName:"org.telegram.messenger",root:true})
  } else {
    return 0;
  }
}

// 发送请求
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

// 请求店铺名
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
    var req_url = getReq(url, "").url.toString();
    // log(req_url)
    // 第三次请求获取店铺名
    var shop = getReq(req_url, "").body.string().split("title");

    // console.info(shop)

    var shopName = shop[1].split("\n")[1].trim()
    shopNames.push(shopName)
  }
  return shopNames;
}
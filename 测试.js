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
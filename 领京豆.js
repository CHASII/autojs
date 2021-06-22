// var sendAll = require('send.js');
auto.waitFor() // 判断是否开启了无障碍
console.clear(); // 清除控制台
console.setPosition(0, 400); // 设置控制台位置
console.show();
var LinearLayout = 'android.widget.LinearLayout';
var EditText = 'android.widget.EditText'
var ViewFlipper = 'android.widget.ViewFlipper'

// 判断时候在京东首页
HomeBar();

// 搜索获得  
Edit("领京豆");

// click("升级赚京豆");
text('领京豆').waitFor()

let btn = className(LinearLayout).depth(7).findOne(3000);
if (btn != null) {
  console.info('点击升级赚京豆')
  // let d = btn.bounds();
  //text("点击升级赚京豆").waitFor()
  // let btn1 = text("升级赚京豆").find()
  // log(btn1.size())
  // click(d.centerX(), d.centerY());
  if (click(550, 1400)) {
    log("进入成功,开始执行任务....")
    sleep(1000)
    while (true) {
      console.info("开始查找");
     // text("去完成").waitFor()
      let goBtn = text("去完成").findOne(3000);
      if (goBtn != null) {
        console.info("存在，继续点击")
        sleep(1500);
        let b = goBtn.bounds();
        if (click(b.centerX(), b.centerY())) {
          sleep(5500);
          back();
        }
      } else {
        //console.log("全部完成！退出...")
        toast("全部完成！退出...")
        console.hide()
        exit();
      }
    }
  }
} else {
  log("不存在")
}


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

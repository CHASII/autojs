auto.waitFor() // 判断是否开启了无障碍
console.clear(); // 清除控制台
console.setPosition(400, 400); // 设置控制台位置
console.show();

// 启动app
var appName = 'com.jingdong.app.mall';
var LinearLayout = 'android.widget.LinearLayout';
var ImageView = 'android.widget.ImageView';
var Button = 'android.widget.Button';
var Relartive = 'android.widget.RelativeLayout';
var TextView = 'android.widget.TextView';
var ScrollView = 'android.widget.ScrollView';
var EditText = 'android.widget.EditText'
var Frame = 'android.widget.FrameLayout'
var ViewFlipper = 'android.widget.ViewFlipper'



// 选择打开第一个京东
sleep(1000);

run();

function run() {
  sleep(1500);
  var viewSize = className(ViewFlipper).depth(9).find().size();

  if (viewSize) {
    var b = className(ViewFlipper).depth(9).findOne().bounds();
    click(b.centerX(), b.centerY());
    sleep(1000);
    // 输入玩一玩
    className(EditText).findOnce().setText('玩一玩');
    sleep(500);

    // 点击搜索进入
    id('a9b').text('搜索').findOnce().click();
    sleep(2000);
  }
  var playTitle = id('fd').text("玩一玩").findOne();
  if (playTitle != "") {
    console.info("在标题中");
    play();
  } else {
    console.warn("页面为进入，推出脚本")
  }
  play();
}

function play() {
  // 点击
  textContains("马上领取").waitFor()
  click('马上领取');
  sleep(1000)
  // 去玩
  // var test = click("去玩");

  if (click("去玩")) {
    console.info("执行中...")
    sleep(5000);
    for (var i = 0; i < 15; i++) {
      console.info("开始返回...")
      if(id('vg').depth(13).find().size()) {
        var b1 = id('vg').depth(13).findOne().bounds();
        console.info(b1)
        click(b1.centerX(), b1.centerY())
        sleep(2000);
        click("首页");
        console.info("全部完成，退出脚本");
        killApp(appName);
        sleep(3000)
        console.hide();
        exit();
      }else {
        back();
      }
    }
  }else {
      killApp(appName);
    console.info("全部完成，退出脚本");
    sleep(3000)
    console.hide();
    exit();
  }
  

}

function killApp(packageName) {
  shell('am force-stop ' + packageName, true);
};
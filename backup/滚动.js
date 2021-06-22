auto.waitFor() // 判断是否开启了无障碍
console.clear(); // 清除控制台
console.setPosition(400, 400); // 设置控制台位置
console.show();

console.info("开始执行脚本！");
var ViewGroup = "android.view.ViewGroup";
var ViewFlipper = 'android.widget.ViewFlipper';
var urlArray = []; // 存放url的数组
var shop_array = []; // 存放店铺名的数组

// let imeId = setInterval(function(){
//   className("androidx.recyclerview.widget.RecyclerView").findOne().scrollBackward();
// },1000);
// //  

// // 下滑
// timeId = setInterval(function(){
//   className("androidx.recyclerview.widget.RecyclerView").findOne().drawingOrder(1).scrollBackward();
// },1000);
tgClick()
// log(urlArray)
function tgClick() {
  console.info("获取链接中...")
  var tgCli = className(ViewGroup).depth(9).drawingOrder(1).findOne(3000);
  if (tgCli != null) {
    var all = tgCli.desc().toString().split('\n');
  } else {
    return [];
  }
  getUrl(all);
  return urlArray;
}

function getUrl(all) {
  let re = /关注/i;
  let re_url = /^https/i;
  for (i=0; i < all.length ;i++) {
    let a1 = re.test(all[i]);
    let j = i;
    if(a1) {
      // log("进入")
      for (j; j < all.length; j++) {
        let a2 = all[j+1];
        // log("开始内循环")
        if( re_url.test(a2) || a2=="") {
          log(all[j+1]);
        }else {
          break;
        }
      }
    }
    // log(j);
    i = j;
  }
}
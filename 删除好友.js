// root
console.show()
// 跳转京东好有页面
// log(desc("管理").depth(12).find().size())
app.startActivity({
  packageName: "com.jingdong.app.mall", 
  className: "com.jd.lib.jdfriend.view.activity.FriendListActivity", 
  root: true
});

// var friends = className("android.widget.TextView").depth(10).drawingOrder(3).find()

// log(friends.size())
for (var i = 0;;) {
 // var friends = className("android.view.ViewGroup").depth(9).drawingOrder(2).find()
  var friend = className("android.view.ViewGroup").depth(9).drawingOrder(2).findOne()
  // log(className("android.view.ViewGroup").depth(9).exists())
  if (!className("android.view.ViewGroup").depth(9).exists()) {
    break
  }
  if(friend.click()) {

    let manage = desc("管理").depth(12).findOne(3000)
    if (desc("管理").depth(12).exists()) {
      log("存在")
      click(manage.bounds().centerX(), manage.bounds().centerY());
  
      className("android.widget.Button").depth(4).findOne().click()
  
      className("android.widget.Button").depth(5).id("bq").text("删除").findOne().click()
      console.info("删除"+i+"个好友")
      i++;
    } else {
      log("不存在")
      sleep(1000)
      back()
    }
  }
  sleep(2500)
}
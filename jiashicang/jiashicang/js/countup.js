var $this = $(".scrollNews");
var scrollTimer;
$this.hover(function () {
    clearInterval(scrollTimer);
}, function () {
    scrollTimer = setInterval(function () {
        scrollNews($this);
    }, 1500);
}).trigger("mouseleave");

function scrollNews(obj) {
    var $self = obj.find("ul");
    var lineHeight = $self.find("li:first").height();
    $self.animate({
        "marginTop": -lineHeight + "px"
    }, 500, function () {
        $self.css({
            marginTop: 0
        }).find("li:first").appendTo($self);
    })
}

//列表滚动 右二
var doscroll = function(){
    var $parent = $('#p1');
    var $first = $parent.find('li>div:first');
    console.log($first);
    var iheight = $first.height()*3;
    var height = $parent.height();
    $first.animate({
      height: 0   //或者改成： marginTop: -height + 'px'
      }, 500, function() {// 动画结束后，把它插到最后，形成无缝
      $first.css('height', height).appendTo($parent);
      // $first.css('marginTop', 0).appendTo($parent);
   });
};
  setInterval(function(){doscroll()}, 2000);

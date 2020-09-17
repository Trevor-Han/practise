/*fetch("../json/banner.json").then(function(res) {
    if (res.ok) {
        res.json().then(function(data) {
            console.log(data);
        });
    } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
    }
}, function(e) {
    console.log("Fetch failed!", e);
});*/

/*创建首页的Banner*/
HomeApis.getHomeBanner()
    .then(function (data) {
        console.log(data.banners);
        let html = template('bannerSlide', data);
        $(".swiper-wrapper").html(html);
    })
    .catch(function (err) {
        console.log(err);
    });

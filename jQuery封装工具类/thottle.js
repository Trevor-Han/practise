//懒加载
function Lazyload(odiv) {
    let box    = document.querySelector(odiv);
    let images = box.getElementsByTagName("img");
    let len    = images.length;
    let n      = 0;      //存储图片加载到的位置，避免每次都从第一张图片开始遍历
    return function() {
        let seeHeight = document.documentElement.clientHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for(let i = n; i < len; i++) {
            console.log(images[0].clientHeight);
            if(images[i].offsetTop - (images[0].clientHeight * 3) < seeHeight + scrollTop ) {
                if(images[i].getAttribute('src') === 'images/loading.gif') {
                    images[i].src = images[i].getAttribute('data-src');
                }
                n = n + 1;
            }
        }
    }
}
//函数防抖
function Throttle(fn,delay ,last) {
    let timeout = null,//进行去抖处理
        startTime = new Date();
    return function() {
        let curTime = new Date();
        clearTimeout(timeout);
        if(curTime - startTime >= last) {
            fn();
            startTime = curTime;
        }else {
            timeout = setTimeout( fn,delay);
        }
    }
}
//key形式传参
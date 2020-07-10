window.onload = function () {
    let oMain = document.querySelector(".main");
    // 0.预加载图片
    let urls = [];
    for(let i = 1; i <= 40; i++){
        let index = i < 10 ? "0" + i : i;
        urls.push(`images/img${index}.jpg`);
    }
    preLoadImages(urls, function (oImages) {
        // 1.初始化图片
        let oItems = initImages(oMain, oImages);
        // 2.初始化容器宽度
        let cols = resetWidth(oMain, oItems);
        // 3.实现流式布局
        waterfall(oItems, cols);

        // 4.监听可视区域的变化
        window.onresize = throttle(function () {
            let oItems = document.querySelectorAll(".box");
            let cols = resetWidth(oMain, oItems);
            waterfall(oItems, cols);
        }, 500);
        // 5.监听图片加载事件
        loadImages(oMain, oItems);
    });
}
/**
 * 加载数据
 * @param oMain 存放数据的容器
 * @param oItems 加载之前的数据
 */
function loadImages(oMain, oItems) {
    // 1.监听网页的滚动事件
    window.onscroll = debounce(function () {
        // 1.拿到最后一个元素
        let lastItem = oItems[oItems.length - 1];
        // 2.拿到最后一个元素的offsetTop
        let lastItemTop = lastItem.offsetTop;
        // 3.拿到最后一个元素高度的一半
        let lastItemHeight = lastItem.offsetHeight / 2;
        // 4.拿到可视区域的高度
        let screenHeight = getScreen().height;
        // 5.拿到滚动出去的距离
        let offsetY = getPageScroll().y;
        // 6.判断是否需要加载新的图片
        if((lastItemTop + lastItemHeight) <= (screenHeight + offsetY)){
            // console.log("需要加载新的图片");
            oItems = initImages(oMain);
            let cols = resetWidth(oMain, oItems);
            waterfall(oItems, cols);
        }
    }, 500);
}

/**
 * 流式布局
 * @param oItems 需要布局的元素
 * @param cols 每一行的列数
 */
function waterfall(oItems, cols) {
    // 1.定义数组保存第一行所有元素的高度
    let rowHeight = [];
    // 2.遍历取出所有的图片
    for(let i = 0; i < oItems.length; i++){
        let item = oItems[i];
        if(i < cols){
            // 3.判断是否是第一行
            item.style.position  = "";
            rowHeight.push(item.offsetHeight);
            console.log(rowHeight);
        }else{
            // 4.如果不是第一行, 就按照指定规则来排版
            // 4.1找到第一行中最矮的那个元素
            let minHeight = Math.min.apply(this, rowHeight)
            // 4.2找到第一行中最矮那个元素的索引
            let minIndex = rowHeight.findIndex(function (value) {
                return value === minHeight;
            });
            // 4.3根据索引取出最矮的那个元素
            let minItem = oItems[minIndex];
            // 4.4获取到最矮那个元素的offsetLeft
            let minLeft = minItem.offsetLeft;
            // 4.5设置当前图片的位置
            item.style.position = "absolute";
            item.style.left = minLeft + "px";
            item.style.top = minHeight + "px";
            // 4.6修改当前列对应的高度
            rowHeight[minIndex] += item.offsetHeight;
        }
    }
    // console.log(rowHeight);
}

/**
 * 重新调整容器宽度
 * @param oMain 被调整的容器
 * @param oItems 容器中所有的元素
 * @returns {number} 一行多少列
 */
function resetWidth(oMain, oItems) {
    // 1.拿到可视区域的宽度
    let {width, height} = getScreen();
    // 2.获取到每一张图片的宽度
    let imgWidth = oItems[0].offsetWidth;
    // 3.计算一行可以放下多少张图片
    let cols = Math.floor(width / imgWidth);
    // 4.计算容器的宽度
    let mainWidth = cols * imgWidth;
    // 5.设置容器的宽度
    oMain.style.width = mainWidth + "px";
    oMain.style.margin = "0 auto";
    // 6.返回当前的列数
    return cols;
}
/**
 * 创建所有的图片
 */
function initImages(oMain, oImages) {
    // 1.创建图片
    for(let i = 0; i <= oImages.length - 1; i++){
        let oDiv = document.createElement("div");
        oDiv.className = "box";
        oMain.appendChild(oDiv);
        // document.body.appendChild(oDiv);
        // let oImg = document.createElement("img");
        // let index = i < 10 ? "0" + i : i;
        // oImg.src = `images/img${index}.jpg`;
        oDiv.appendChild(oImages[i]);
    }
    // 2.返回所有创建好的图片
    let oItems = document.querySelectorAll(".box");
    return oItems;
}

// 图片的预加载
function preLoadImage(url, fn) {
    // 1.创建一个img标签
    let oImg = document.createElement("img");
    // 2.设置img标签的图片地址
    oImg.src = url;
    // 3.监听图片是否加载完成了
    oImg.onload = function () {
        fn(oImg);
    }
}
function preLoadImages(urls, fn) {
    // 1.定义变量记录总共有多少张图片需要加载
    let totalCount = urls.length;
    // 2.定义变量记录当前已经加载了多少张图片
    let count = 0;
    // 3.定义数组保存所有加载好的图片
    let oImages = [];
    // 4.循环遍历加载图片
    for(let i = 0; i < urls.length; i ++){
        let url = urls[i];
        preLoadImage(url, function (oImg) {
            oImages.push(oImg);
            count++;
            if(count === totalCount){
                fn(oImages);
            }
        });
    }
}

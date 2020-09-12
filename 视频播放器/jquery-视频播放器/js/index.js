(function($) {

    var video = $("#myVideo");

    //计算时间
    var timeFormat = function(seconds) {
        var minite = Math.floor(seconds / 60);
        if(minite < 10) {
            minite = "0" + minite;
        }
        var second = Math.floor(seconds % 60);
        if(second < 10) {
            second = "0" + second;
        }
        return minite + ":" + second;
    }

    // 播放和暂停功能
    var playAndPause = function() {
        if(video[0].paused || video[0].ended) {
            video[0].play();
            $("#playBtn").removeClass("play").addClass("pause");
        } else {
            video[0].pause();
            $("#playBtn").removeClass("pause").addClass("play");
        }
    }

    //鼠标移入移除效果
    var showTitleAndControl = function(shouldShow) {
        if(shouldShow) {
            $(".control").stop().animate({'bottom' : 0}, 500);
            $(".caption").stop().animate({'top' : 0}, 500);
        } else {
            $(".control").stop().animate({'bottom' : -50}, 500);
            $(".caption").stop().animate({'top' : -50}, 500);
        }
    }

    // 视频暂停
    var stopVideo = function() {
        video[0].pause();
        updateProgress($('.progress').offset().left);
        $('#playBtn').removeClass("pause").addClass("play");
    }

    // 播放速率
    var playSpeed = function (speed) {
        if(speed == 1) {
            $("#speed1Btn").addClass("selected");
            $("#speed3Btn").removeClass("selected");
        } else if (speed == 3) {
            $("#speed1Btn").removeClass("selected");
            $("#speed3Btn").addClass("selected");
        }
        video[0].playbackRate = speed;
    }

    // 进度条可拖拽
    var enableProgressDrag = function () {
        var progressDrag = false;
        $(".progress").on('mousedown', function (e) {
            progressDrag = true;
            updateProgress(e.offsetX);
        });
        $(document).on('mouseup', function (e) {
            if(progressDrag) {
                progressDrag = false;
                updateProgress(e.offsetX);
            }
        });
        $(document).on('mousemove', function (e) {
            if(progressDrag) {
                updateProgress(e.offsetX);
            }
        });
    }

    // 更新进度条
    var updateProgress = function(x) {
        var progress = $(".progress");

        var percent = 100 * x / progress.width();
        if(percent > 100) {
            percent = 100;
        }
        if(percent < 0) {
            percent = 0;
        }
        $(".timeBar").css('width', percent + '%');
        video[0].currentTime = video[0].duration * percent / 100;
    }

    video.on("loadedmetadata", function() {

        // 让视频充满整个父容器
        video.width($(".vContainer").width());
        video.height($(".vContainer").height());

        showTitleAndControl(false);

        //显示时长和时间
        $("#currentTime").html(timeFormat(0));
        $("#duration").html(timeFormat(video[0].duration));

        //鼠标移入和移出
        $(".vContainer").hover(function () {
                // over
                showTitleAndControl(true);
            }, function () {
                // out
                showTitleAndControl(false);
            }
        );

        // 播放暂停
        $("#playBtn").on("click", playAndPause);

        // 结束播放
        $("#stopBtn").on("click", stopVideo);

        // 播放速率
        $("#speed1Btn").on("click", function () {
            playSpeed(1);
        });
        $("#speed3Btn").on("click", function () {
            playSpeed(3);
        });

        enableProgressDrag();

    })

    // 进度条跟随
    video.on("timeupdate", function () {
        var currentTime = video[0].currentTime;
        var duration = video[0].duration;
        var percent = 100 * currentTime / duration;
        $(".timeBar").css("width", percent +  "%");
        $("#currentTime").html(timeFormat(currentTime));
    });

    //让loading消失
    video.on("canplay", function () {
        $(".loading").fadeOut(100);
    });

})(jQuery);

// JavaScript source code(pc버전)
$(function () {
    var filter = "win16|win32|win64|mac|macintel"; if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
            //mobile 
            alert('mobile 접속');
            location.href = 'mobile/index.html';
        } else {
            //pc
            alert('pc 접속');
        }
    }

    console.log($(window).width());
    //$('#topbanner').css('height', screen.height);

    var intervalEvent = setInterval(slideMoveLeft, 3000);
    var execNum = 0;

    $('#search').click(function () {
        $('#search-pop-mask').show().fadeIn("slow");
    });

    $('#finish').click(function () {
        $('#search-pop-mask').show().fadeOut("slow");
    });

    // 슬라이드 이미지 위에 커서 올려놓으면 슬라이드 일시중지
    $('#slide-img,#slide-left,#slide-right').hover(function () {
        clearInterval(intervalEvent);
    }, function () {
        intervalEvent = setInterval(slideMoveLeft, 3000);
    });

    function slideMoveLeft() {
        if (execNum == 3) {
            $('#slide-img > div').animate({
                left: "+=150%"
            });
            execNum = 0;
            return;
        }
        $('#slide-img > div').animate({
            left: "-=50%"
        });
        execNum++;
    }

    // 슬라이드 이미지 누를시 이동하는 페이지 설정
    $('#slide1').click(function () {
        location.href = 'worldcup.html';
    });
    $('#slide-russia').click(function () {
        location.href = 'russia.html';
    });
    $('#slide2').click(function () {
        location.href = 'korea.html#slide2-flag';
    });
    $('#slide3').click(function () {
        location.href = 'moreinfo.html#slide3-flag';
    });

    // 슬라이드 이미지 왼쪽 오른쪽 버튼
    $('#slide-left').click(function () {
        if (execNum == 0) {
            $('#slide-img > div').animate({
                    left: "-=150%"
            });
            execNum = 3;
            return;
        }
        $('#slide-img > div').animate({
            left: "+=50%"
        });
        execNum--;
    });
    $('#slide-right').click(function () {
        if (execNum == 3) {
            $('#slide-img > div').animate({
                    left: "+=150%"
            });
            execNum = 0;
            return;
        }
        $('#slide-img > div').animate({
            left: "-=50%"
        });
        execNum++;
    });


    // 월드컵 프리뷰 ajax 통신
    var req = $.ajax({
        url: "index.json",
        dataType: "json"
    });
    req.done(function (data, status) {
        $("#worldcup-title").text(data[0].title);
        $("#worldcup-subtitle").text(data[0].sub);
        $("#worldcup-content").text(data[0].content);

        $("#highlight-title").text(data[1].title);
        $("#highlight-content").text(data[1].content);

        $("#intro-title").text(data[2].title);

        $("#news-title").text(data[3].title);


    });
    $('#worldcup-title').click(function () {
        location.href = 'worldcup.html';
    });
    $('#go-this-page').click(function () {
        location.href = 'worldcup.html';
    });


    //월드컵 하이라이트 프리뷰
    $('#highlight-go').click(function () {
        location.href = 'https://www.youtube.com/user/FIFATV';
    });
    $('#highlight-go-this-page').click(function () {
        location.href = 'https://www.youtube.com/user/FIFATV';
    });

    // 선수 소개 프리뷰
    $('#intro-title').click(function () {
        location.href = 'korea.html#slide2-flag';
    });
    $('#intro-go-this-page').click(function () {
        location.href = 'korea.html#slide2-flag';
    });

    //퀴즈 슬라이드
    $('#slide-quiz').click(function () {
        location.href = 'quiz.html';
    });


    // 월드컵 공식노래
    $('#world-song').click(function () {
        location.href = 'https://www.youtube.com/watch?v=08HjqG4XuQM&index=11&list=PLCciu7IoERPUkzTmzuGko2iuaE-MB0nHw';
    });

    // RSS
    var req = $.ajax({
        url: "http://fs.jtbc.joins.com//RSS/sports.xml",
        dataType: "xml"
    });
    req.done(function (data) {
        //xdata = $.parseXML(data);
        //var items = $(xdata).find("item");
        var items = $(data).find("item");
        console.log(items);
        if (items.length > 0) {
            // items = items.slice(0, 2);
            var uTag = $("<ul/>");

            items.each(function () {
                var item = $(this);
                var lk = item.find("link").text();
                var title = item.find("title").text();
                var imgTag = $("<img/>").attr({
                    "src": 'img/right_arrow.png',
                });
                var aTag = $("<a/>").attr({
                    "href": lk,
                    "target": "_blank"
                }).text(title);

                var liTag = $("<li/>").append(imgTag);
                liTag.append(aTag);
                uTag.append(liTag);
            });
            $("#news").html(uTag);
        }
    });
    $('#news-title').click(function () {
        location.href = 'http://news.jtbc.joins.com/section/index.aspx?scode=70';
    });
    $('#go-news-page').click(function () {
        location.href = 'http://news.jtbc.joins.com/section/index.aspx?scode=70';
    });






    $('#ranking').click(function () {
        location.href = 'https://www.google.co.kr/search?q=%EC%9B%94%EB%93%9C%EC%BB%B5&oq=%EC%9B%94%EB%93%9C%EC%BB%B5&aqs=chrome..69i57j0l2j69i61j69i60l2.2104j1j7&sourceid=chrome&ie=UTF-8#sie=lg;/m/06qjc4;2;/m/030q7;mt;fp;1';
    });

    $('#schedule').click(function () {
        location.href = 'https://sports.news.naver.com/wfootball/schedule/index.nhn';
    });


    // 선수정보 섞기
    setInterval(updateProfileImg, 1000);



    // 추가정보 프리뷰
    $('#moreinfo-title').click(function () {
        location.href = 'moreinfo.html#intro';
    });
    $('#go-moreinfo-page').click(function () {
        location.href = 'moreinfo.html#intro';
    });
});

var index = 0;
function updateProfileImg() {
    if (index == 0) {
        document.getElementById('profile0').src = "img/kr_img/main/f0.jpg";
        document.getElementById('profile1').src = "img/kr_img/main/f1.jpg";
        document.getElementById('profile2').src = "img/kr_img/main/f2.jpg";
        document.getElementById('profile3').src = "img/kr_img/main/f3.jpg";
        document.getElementById('profile4').src = "img/kr_img/main/f4.jpg";
        document.getElementById('profile5').src = "img/kr_img/main/f5.jpg";
        document.getElementById('profile6').src = "img/kr_img/main/f6.jpg";
        document.getElementById('profile7').src = "img/kr_img/main/f7.jpg";
        document.getElementById('profile8').src = "img/kr_img/main/f8.jpg";

        $('#desc0').text("황희찬");
        $('#desc1').text("손흥민");
        $('#desc2').text("김신욱");
        $('#desc3').text("주세죵");
        $('#desc4').text("정우영");
        $('#desc5').text("이재성");
        $('#desc6').text("이승우");
        $('#desc7').text("문선민");
        $('#desc8').text("기성용");

        index = 1;
    } else if (index == 1) {
        document.getElementById('profile0').src = "img/kr_img/main/g0.jpg";
        document.getElementById('profile1').src = "img/kr_img/main/g1.jpg";
        document.getElementById('profile2').src = "img/kr_img/main/g2.jpg";
        document.getElementById('profile3').src = "img/kr_img/main/g3.jpg";
        document.getElementById('profile4').src = "img/kr_img/main/g4.jpg";
        document.getElementById('profile5').src = "img/kr_img/main/g5.jpg";
        document.getElementById('profile6').src = "img/kr_img/main/g6.jpg";
        document.getElementById('profile7').src = "img/kr_img/main/g7.jpg";
        document.getElementById('profile8').src = "img/kr_img/main/g8.jpg";

        $('#desc0').text("구자철");
        $('#desc1').text("홍철");
        $('#desc2').text("정승현");
        $('#desc3').text("장현수");
        $('#desc4').text("이용");
        $('#desc5').text("윤영선");
        $('#desc6').text("오반석");
        $('#desc7').text("박주호");
        $('#desc8').text("김영권");
        //$('#profile0').attr({
        //    "src": "img/kr_img/구자철.jpg"
        //});
        index = 0;
    }

}

// JavaScript source code
$(function () {
    console.log($(window).width());
    //$('#topbanner').css('height', screen.height);

    var intervalEvent = setInterval(slideMoveLeft, 1000);


    var execNum = 0;
    function slideMoveLeft() {
        $('#slide-img img').animate({
            left: "-=50%"
        });
        execNum++;
        if (execNum % 3 == 0) {
            $('#slide-img img').animate({
                left: "+=150%"
            });
        }

    }

    var heightt = $(window).height();
    console.log(heightt);
    $('#side-menu').css('height', heightt + 'px');


    $('#favorite').on('click', function (e) {
        var bookmarkURL = window.location.href;
        var bookmarkTitle = document.title;
        var triggerDefault = false;

        if (window.sidebar && window.sidebar.addPanel) {
            // Firefox version < 23
            window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
        } else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
            // Firefox version >= 23 and Opera Hotlist
            var $this = $(this);
            $this.attr('href', bookmarkURL);
            $this.attr('title', bookmarkTitle);
            $this.attr('rel', 'sidebar');
            $this.off(e);
            triggerDefault = true;
        } else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorite
            window.external.AddFavorite(bookmarkURL, bookmarkTitle);
        } else {
            // WebKit - Safari/Chrome
            alert((navigator.userAgent.toLowerCase().indexOf('MAC') != -1 ? 'Cmd' : 'Ctrl') + '+D key, please');
        }
        return triggerDefault;
    });
});

function showSideMenu() {
    if ($('#side-menu').css('left') == '-310px') {
        $('#side-menu').animate({
            left: '+=310px'
        });
        document.getElementById('side-menu-button').src = 'img/close.png';
    } else if ($('#side-menu').css('left') == '0px') {
        $('#side-menu').animate({
            left: '-=310px'
        });
        document.getElementById('side-menu-button').src = 'img/side-menu.png';
    }
}

$(document).ready(function(){
    $("#main-text a").attr('target','_blank');
    $.get("table1.txt", function(data, status){
        var arr = data.split('*');
        var player = JSON.parse(arr[0]);
        for(var i=0;i<player.length;i++){
            var row = '<tr><td>'+player[i].position+'</td><td>'+player[i].number+'</td><td><a href="#" target="_blank">'+player[i].name+'</a></td><td>'+player[i].birth+'</td><td>'+player[i].physical+'</td><td>'+player[i].associate+'</td><td>'+player[i].record+'</td></tr>';
            $("#team-table>tbody").append(row);
        }

        var coach = JSON.parse(arr[1]);
        for(var i=0;i<coach.length;i++){
            var row = '<tr><th scope="row">'+coach[i].position+'</th><td><a href="#" target="_blank">'+coach[i].name+'</a>'+coach[i].birth+'</td></tr>';
            $("#coach-table>tbody").append(row);
        }

        function jsonEscape(str)  {
            return str.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
        }

        var cont = JSON.parse(arr[2]);
        for(var i=0;i<cont.length;i++){
            $(".main-text-item:nth-of-type(2) p:eq("+i+")").text(cont[i].content);
        }
    });

    $(document).on("click",".main-text-item:eq(0) a", function(){
        $(this).attr("href", "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+$(this).text());
    });

    $(".main-text-item:nth-of-type(2) h4").click(function(){
        var index = $(".main-text-item:nth-of-type(2) h4").index(this);
        var c_div = $(".main-text-item:nth-of-type(2) div:eq("+index+")");
        if(c_div.css("display") == "none"){
            c_div.css("display", "block");
            $(this).children("img").attr("src", "img/up.png");
        }
        else{
            c_div.css("display", "none");
            $(this).find("img").attr("src", "img/down.png");
        }
    });

    $(".small-banner").click(function(){
        var index = $(".small-banner").index(this);
        var scrollPos = $(".main-text-item:eq("+index+")").offset().top;
        $("html").animate({scrollTop: scrollPos-60}, 500);
    });
});
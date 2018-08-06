$(document).ready(function () {
    $("#difficulty1").addClass("clear");
    $("#difficulty2").addClass("clear");
    $("#difficulty3").addClass("clear");
    $("#q_num").addClass("clear");
    $("#q_content").addClass("clear");
    $("#n1").addClass("clear");
    $("#n2").addClass("clear");
    $("#n3").addClass("clear");
    var n = 1;
    var count = 0;
    $("#start").click(function () {
        $("#start_head").addClass("clear");
        $("#start").addClass("clear");
        $("#difficulty1").removeClass("clear");
        $("#difficulty2").removeClass("clear");
        $("#difficulty3").removeClass("clear");
    });
    $("#difficulty1").click(function () {
        $("#difficulty1").addClass("clear");
        $("#difficulty2").addClass("clear");
        $("#difficulty3").addClass("clear");
        $("#q_num").removeClass("clear");
        $("#q_content").removeClass("clear");
        $("#n1").removeClass("clear");
        $("#n2").removeClass("clear");
        $("#n3").removeClass("clear");
        next_q(1);
    });
    $("#difficulty2").click(function () {
        $("#difficulty1").addClass("clear");
        $("#difficulty2").addClass("clear");
        $("#difficulty3").addClass("clear");
        $("#q_num").removeClass("clear");
        $("#q_content").removeClass("clear");
        $("#n1").removeClass("clear");
        $("#n2").removeClass("clear");
        $("#n3").removeClass("clear");
        next_q(2);
    });
    $("#difficulty3").click(function () {
        $("#difficulty1").addClass("clear");
        $("#difficulty2").addClass("clear");
        $("#difficulty3").addClass("clear");
        $("#q_num").removeClass("clear");
        $("#q_content").removeClass("clear");
        $("#n1").removeClass("clear");
        $("#n2").removeClass("clear");
        $("#n3").removeClass("clear");
        next_q(3);
    });
    function next_q(diff) {
        var nq = $.ajax({
            url: "quizs.txt",
            dataType: "json"
        });
        nq.done(function (data) {
            if (n < 6) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].difficulty == diff && data[i].number == n) {
                        $("#q_num").text(n++ + ".");
                        $("#q_content").text(data[i].content);
                        $("#n1").text(data[i].num1);
                        $("#n2").text(data[i].num2);
                        $("#n3").text(data[i].num3);
                        break;
                    }
                }
                $("#" + data[i].ans).click(function () {
                    alert("정답입니다!");
                    count++;
                    next_q(diff);
                    $("#" + data[i].ans).off();
                    $("#" + data[i].inc1).off();
                    $("#" + data[i].inc2).off();
                });
                $("#" + data[i].inc1).click(function () {
                    alert("오답입니다...");
                    next_q(diff);
                    $("#" + data[i].ans).off();
                    $("#" + data[i].inc1).off();
                    $("#" + data[i].inc2).off();
                });
                $("#" + data[i].inc2).click(function () {
                    alert("오답입니다...");
                    next_q(diff);
                    $("#" + data[i].ans).off();
                    $("#" + data[i].inc1).off();
                    $("#" + data[i].inc2).off();
                });
            }
            else {
                $("#q_content").text("당신은 5개 중 " + count + "개의 문제를 맞췄습니다!");
                $("#q_num").addClass("clear");
                $("#n1").addClass("clear");
                $("#n2").addClass("clear");
                $("#n3").addClass("clear");
            }
        });
    }
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
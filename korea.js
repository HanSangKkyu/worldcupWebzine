var banner_n = 0;

$(document).ready(function(){
	var timer;
	var right_con = $(".preview-item");
	var left_con = $(".preview-left-item");
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
	
	function switchBanner(){
		$(".small-banner").css({width:"270px", background:"gray", borderRadius:"20px"}).find("p").css({fontSize: "16px"});
		banner_n++;
		if(banner_n == 3){
			banner_n = 0;
		}
		$(".small-banner:eq("+banner_n+")").css({width: "300px", background:"white", borderRadius:"20px 0 0 20px"}).find("p").css({fontSize: "20px"});
		right_con.find("img").css("display", "none");
		right_con.find(".preview-"+(banner_n+1)).css("display", "block");
	}

	function startTimer(){
		timer = setInterval(switchBanner, 3000);
	}

	function stopTimer(){
		clearInterval(timer);
	}


	function setFootMargin(){
		// var m_top = $("#main-text>.main-text-item:eq(2)").scrollTop() + $("#main-text>.main-text-item:eq(2)").outerHeight(true);
		// $("#footer-wrap").css({marginTop:m_top+"px"});
	}

	startTimer();
	setFootMargin();

	$(".small-banner").hover(function(){
		stopTimer();
		$(".small-banner").css({width:"270px", background:"gray", borderRadius:"20px"}).find("p").css({fontSize: "20px"});
		var index = $(".small-banner").index(this);
		$(this).css({width: "300px", background:"white", borderRadius:"20px 0 0 20px"}).find("p").css({fontSize: "25px"});
		right_con.find("img").css("display", "none");
		right_con.find(".preview-"+(index+1)).css("display", "block");
		banner_n = index;
	}, function(){
		startTimer();
	});

	$(".small-banner").click(function(){
		var index = $(".small-banner").index(this);
		var scrollPos = $(".main-text-item:eq("+index+")").offset().top;
		$("html").animate({scrollTop: scrollPos-60}, 500);
	});

	$(".preview-item").hover(function(){
		stopTimer();
	}, function(){
		startTimer();
	});

	$(document).on("mouseover", ".main-text-item:eq(0) a", function(e){
		var index = $(".main-text-item:eq(0) a").index(this);
		if(index < 3){
			$("#talkbox>img:eq(1)").css("borderColor", "#E4DD12");
		}else if(index > 22){
			$("#talkbox>img:eq(1)").css("borderColor", "#0831D5");
		}else{
			$("#talkbox>img:eq(1)").css("borderColor", "#E30B00");
		}
		$("#talkbox").css({display:"block", left:e.clientX+20+"px", top:e.clientY-70+"px"});
		$("#talkbox>img:eq(1)").attr("src", "img/kr_img/"+$(this).text()+".jpg");
	});

	$(document).on("mouseout", ".main-text-item:eq(0) a", function(e){
		$("#talkbox").css({display:"none"});
	});

	$(document).on("click",".main-text-item:eq(0) a", function(){
		$(this).attr("href", "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+$(this).text());
	});

	$(".main-text-item:nth-of-type(2) h2").click(function(){
		var index = $(".main-text-item:nth-of-type(2) h2").index(this);
		var c_div = $(".main-text-item:nth-of-type(2) div:eq("+index+")");
		if(c_div.css("display") == "none"){
			c_div.css("display", "block");
			$(this).children("img").attr("src", "img/up.png");
		}
		else{
			c_div.css("display", "none");
			$(this).find("img").attr("src", "img/down.png");
		}
		setFootMargin();
	});

});
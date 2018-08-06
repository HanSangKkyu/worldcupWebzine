$(document).ready(function(){
	$("#fifa1998+.year+.item").hide();
	$("#fifa2002+.year+.item").hide();
	$("#fifa2006+.year+.item").hide();
	$("#fifa2010+.year+.item").hide();
	$("#fifa2014+.year+.item").hide();

	var flag1998=0;
	var flag2002=0;
	var flag2006=0;
	var flag2010=0;
	var flag2014=0;


	$("#fifa1998+.year>img").click(function(){
		if(flag1998==0){
			$("#fifa1998+.year+.item").show();
			$("#fifa1998+.year>img").attr("src","worldcupimg/icon/위.png");
			flag1998=1;
		}else{
			$("#fifa1998+.year+.item").hide();
			$("#fifa1998+.year>img").attr("src","worldcupimg/icon/아래.png");
			flag1998=0;
		}
		
	});

	$("#fifa2002+.year>img").click(function(){
		if(flag2002==0){
			$("#fifa2002+.year+.item").show();
			$("#fifa2002+.year>img").attr("src","worldcupimg/icon/위.png");
			flag2002=1;
		}else{
			$("#fifa2002+.year+.item").hide();
			$("#fifa2002+.year>img").attr("src","worldcupimg/icon/아래.png");			
			flag2002=0;
		}
		
	});

	$("#fifa2006+.year>img").click(function(){
		if(flag2006==0){
			$("#fifa2006+.year+.item").show();
			$("#fifa2006+.year>img").attr("src","worldcupimg/icon/위.png");
			flag2006=1;
		}else{
			$("#fifa2006+.year+.item").hide();
			$("#fifa2006+.year>img").attr("src","worldcupimg/icon/아래.png");
			flag2006=0;
		}
		
	});

	$("#fifa2010+.year>img").click(function(){
		if(flag2010==0){
			$("#fifa2010+.year+.item").show();
			$("#fifa2010+.year>img").attr("src","worldcupimg/icon/위.png");
			flag2010=1;
		}else{
			$("#fifa2010+.year+.item").hide();
			$("#fifa2010+.year>img").attr("src","worldcupimg/icon/아래.png");
			flag2010=0;
		}
		
	});

	$("#fifa2014+.year>img").click(function(){
		if(flag2014==0){
			$("#fifa2014+.year+.item").show();
			$("#fifa2014+.year>img").attr("src","worldcupimg/icon/위.png");
			flag2014=1;
		}else{
			$("#fifa2014+.year+.item").hide();
			$("#fifa2014+.year>img").attr("src","worldcupimg/icon/아래.png");
			flag2014=0;
		}
		
	});


	var req = $.ajax({
		url:"worldcup.json",
		dataType:"json"
	});

	req.done(function(data,status){
		$("#title_history").append(data[0].title);
		$("#history>.history-item>h2").append(data[0].World_Cup_history_h2);
		$("#history>.history-item:nth-of-type(1)").append(data[0].World_Cup_history);
		// var allwiki = $(document).find('wikitable');
		
		var j=1;
		for(var i=1998;i<=2014;i+=4){
			$("#fifa"+i+"+div>a").append(data[j].title);
			$("#host"+i).append(data[j].host);
			$("#host_country"+i).append(data[j].host_country);

			$("#first_place_country"+i).append(data[j].first_place_country);
			$("#first_place"+i).append(data[j].first_place);

			$("#second_place_country"+i).append(data[j].second_place_country);
			$("#second_place"+i).append(data[j].second_place);

			$("#third_place_country"+i).append(data[j].third_place_country);
			$("#third_place"+i).append(data[j].third_place);

			$("#fourth_place_country"+i).append(data[j].fourth_place_country);
			$("#fourth_place"+i).append(data[j].fourth_place);

			$("#ball"+i).append(data[j].ball);

			$("#mascot"+i).append(data[j].mascot);

			$("#highlight"+i).append(data[j].highlight);

			$("#mvp"+i).append(data[j].mvp);
			$("#golden_ball"+i).append(data[j].golden_ball);
			$("#golden_ball_name"+i).append(data[j].golden_ball_name);
			$("#golden_boots"+i).append(data[j].golden_boots);
			$("#golden_boots_name"+i).append(data[j].golden_boots_name);
			$("#golden_glove"+i).append(data[j].golden_glove);
			$("#golden_glove_name"+i).append(data[j].golden_glove_name);
			$("#rookie_award"+i).append(data[j].rookie_award);
			$("#rookie_award_name"+i).append(data[j++].rookie_award_name);
			
		}
	});
});
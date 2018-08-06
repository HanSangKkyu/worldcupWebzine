
$(document).ready(function () {


	function setsize(s) {
		var wid=0;

		if(s=="s1"||s=="s3"){
			wid=2300;
		}else if(s=="s2"){
			wid=5000;
		}

		$("#preview-up > .preview-up-item").css("height",wid);
	}



	$(".main-nav-item").mouseenter(function(){
		$(this).css("color","red");
	});

	$(".main-nav-item").mouseleave(function(){
		$(this).css("color","black");
	});


	$("#s1").mousedown(function(){
		$(".cont").css("display","none");
		$("#c1").css("display","block");
		setsize("s1");
	});

	$("#s2").mousedown(function(){
		$(".cont").css("display","none");
		$("#c2").css("display","block");
		setsize("s2");
	});

	$("#s3").mousedown(function(){
		$(".cont").css("display","none");
		$("#c3").css("display","block");
		setsize("s3");
	});



	$(".worldtype").mouseenter(function(){
		$(this).css("opacity","1.0");
	});

	$(".worldtype").mouseleave(function(){
		$(this).css("opacity","0.3");
	});

	$("#w1").mousedown(function(){
		$(".worldsel").css("display","none");
		$("#k1").css("display","block");
		$(this).css("opacity","1.0");
	});

	$("#w2").mousedown(function(){
		$(".worldsel").css("display","none");
		$("#k2").css("display","block");
		$(this).css("opacity","1.0");
	});

	$("#w3").mousedown(function(){
		$(".worldsel").css("display","none");
		$("#k3").css("display","block");
		$(this).css("opacity","1.0");
	});

	$("#w4").mousedown(function(){
		$(".worldsel").css("display","none");
		$("#k4").css("display","block");
		$(this).css("opacity","1.0");
	});
});
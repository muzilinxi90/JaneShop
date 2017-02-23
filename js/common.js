$(function() {
	// 搜索框文字效果
	$("#search>input").focus(function() {
		$(this).addClass("focus");
		if ($(this).val() === this.defaultValue) {
			$(this).val("");
		}
	}).blur(function() {
		$(this).removeClass("focus");
		if($(this).val() === "") {
			$(this).val(this.defaultValue);
		}
	}).keyup(function(event) {
		if(event.which === 13) {
			alert("回车提交表单！");
		}
	});


	// 网页换肤
	var $li = $("#chSkin li");
	$li.click(function() {
		switchSkin(this.id);
	});
	var cookie_skin = $.cookie("MyCssSkin");
	if(cookie_skin) {
		switchSkin(cookie_skin);
	}

	function switchSkin(skinName) {
		$("#"+skinName).addClass("selected").siblings().removeClass("selected");
		$("#skinFile").attr("href", "css/skin/"+skinName+".css");
		$.cookie("MyCssSkin", skinName, {path: '/', expires: 10});
	}


	// 二级导航菜单
	$("#nav li").hover(
		function() {
			$(this).find(".subNav").show();
		},
		function() {
			$(this).find(".subNav").hide();
		}
	);


	// 热销
	$("#cataInfo .promoted").append('<span class="hot"></span>');
});
$(function() {
	// 中间广告滚动效果
	var $adList = $("#imageRoll ul li");
	var $imgList = $("#imageRoll img");
	var len = $imgList.length;
	var index = 0;
	var adTimer = null;
	// 鼠标控制切换
	$adList.mouseover(function() {
		var index = $adList.index(this);
		showImg(index);
	}).eq(0).mouseover();
	// 鼠标不介入时自动切换
	$("#imageRoll").hover(
		function() {
			if (adTimer) {
				clearInterval(adTimer);
			}
		},
		function() {
			adTimer = setInterval(function() {
				showImg(index);
				index = ++index % len;
			}, 3000);
		}
	).trigger("mouseleave");

	function showImg(index) {
		$adList.eq(index).addClass("chos").siblings().removeClass("chos");
		var newHref = $imgList.eq(index).attr("href");
		$("#imgWrap").attr("href", newHref);
		$imgList.eq(index).fadeIn().siblings().fadeOut();
	}


	// 通知添加提示
	var x = 10;
	var y = 20;
	var myTitle = "";
	$("#noticeInfo a.tooltip").mouseover(function(e) {
		myTitle = this.title;
		this.title = "";
		var tooltip = '<div id="tooltip">' + myTitle + '</div>';
		$("body").append(tooltip);
		$("#tooltip").css({
			"top": (e.pageY + y) + "px",
			"left": (e.pageX + x) + "px"
		}).show("fast");
	}).mouseout(function() {
		this.title = myTitle;
		$("#tooltip").remove();
	}).mousemove(function(e) {
		$("#tooltip").css({
			"top": (e.pageY + y) + "px",
			"left": (e.pageX + x) + "px"
		});
	});


	// 下部横向滚动展示
	$("#brandTab li").click(function() {
		$(this).addClass("chos").siblings().removeClass("chos");
		var idx = $("#brandTab li").index(this);
		showBrandList(idx);
	}).eq(0).click();

	function showBrandList(index) {
		var $brandList = $("#brandList");
		var brandWidth = $("#brand").outerWidth();
		console.log(brandWidth);
		var left = -index * brandWidth;
		$brandList.stop(true, false).animate({left: left}, 1000);
	}


	// 光标滑过产品列表效果
	$("#brandList li").hover(
		function() {
			var maskHTML = '<span class="imageMask"><span>';
			$(this).find("a").append(maskHTML);
			
		},
		function() {
			$(this).find(".imageMask").remove();
		}
	)
})


$(function() {
	// 图片放大镜效果
	// 使用了jqzoom插件
	$(".jqzoom").jqzoom({
		zoomType: 'standard',
		lens: true,
		preloadImages: true,
		alwaysOn: false,
		zoomWidth: 340,
		zoomHeight: 340,
		xOffset: 10,
		yOffset: 0,
		position: 'right'
	});


	// 单击小图切换大图使切换的图片可以观看清晰图片
	$("#itemInfo .imgList li a").bind("click", function() {
		var imgSrc = $(this).find("img").attr("src");
		var i = imgSrc.lastIndexOf(".");
		var ext = imgSrc.substring(i);
		imgSrc = imgSrc.substring(0, i);
		var imgSrc_big = imgSrc + "_big" + ext;
		$("#thickImg").attr("href", imgSrc_big);
	});


	// 产品介绍选项卡切换
	var $tabList = $("#itemInfo .tab_menu li");
	var $tabInfoList = $("#itemInfo .tab_box div");
	$tabList.click(function() {
		$(this).addClass("selected").siblings().removeClass("selected");
		var index = $tabList.index(this);
		$tabInfoList.eq(index).removeClass("hide").siblings().addClass("hide");
	});


	// 右侧颜色切换
	var $smallImgList = $("#itemInfo .imgList li");
	$("#buyInfo .chColor ul li").click(function() {
		$(this).addClass("hover").siblings().removeClass("hover");
		var imgSrcR = $(this).find("img").attr("src");
		var i = imgSrcR.lastIndexOf("/");
		var j = imgSrcR.lastIndexOf(".");
		var colorR = imgSrcR.substring(i+1, j);
		for (var k = $smallImgList.length - 1; k >= 0; k--) {
			var imgSrcL = $smallImgList.eq(k).find("img").attr("src");
			i = imgSrcL.lastIndexOf("/");
			j = imgSrcL.lastIndexOf("_");
			var colorL = imgSrcL.substring(i+1, j);
			if (colorL === colorR) {
				$smallImgList.eq(k).show();
			}
			else {
				$smallImgList.eq(k).hide();
			}
		}
		$("#buyInfo .chColor").find("span").eq(1).text($(this).find("img").attr("title"));
		$("#itemInfo .imgList").find(".imgList_" + colorR).find("a").eq(0).click();
	});


	// 尺寸切换
	var $chSize = $("#buyInfo .chSize");
	$chSize.find("li").click(function() {
		$(this).addClass("selected").siblings().removeClass("selected");
		$chSize.find("span").eq(1).text($(this).text());
	});


	// 产品数量和价格联动
	var $chNum = $("#buyInfo .chNum");
	var price = $("#buyInfo .realPrice").text();
	var $totalPrice = $("#buyInfo .totalPrice span").eq(1);
	$chNum.change(function() {
		$totalPrice.text(price * $chNum.val());
	});


	// 评分
	var $star = $("#buyInfo .chRating ul");
	var $starList = $("#buyInfo .chRating ul li");
	$starList.mouseover(function() {
		var chClass = $(this).attr("class") + "_hover";
		$star.attr("class", chClass);
	}).mouseout(function() {
		var sub = $star.attr("class").lastIndexOf("_");
		var tp = $star.attr("class").substring(sub+1);
		if (tp === "hover") {
			$star.attr("class", "nostar");
		}
	}).click(function() {
		var chClass = $(this).attr("class") + "_star";
		$star.attr("class", chClass);
	});


	// 购物车
	var $buyInfo = $("#buyInfo");
	$("#cart").click(function() {
		var proName = $buyInfo.find("h2").text();
		var proColor = $buyInfo.find(".chColor span").eq(1).text();
		var proSize = $buyInfo.find(".chSize span").eq(1).text();
		var proNum = $buyInfo.find(".chNum").val();
		var proPrice = $buyInfo.find(".totalPrice span").eq(1).text();
		var dialog = "感谢您的购买。您的订单详情如下：\n"
				   + "产品是：" + proName + "\n"
				   + "颜色是：" + proColor + "\n"
				   + "尺寸是：" + proSize + "\n"
				   + "数量是：" + proNum + "\n"
				   + "总价是：" + proPrice + "元";
	   alert(dialog);
	   return false;
	});
})
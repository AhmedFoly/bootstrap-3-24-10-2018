$(document).ready(function(){
	$('.carousel').carousel({
		interval:3000
	});

	// Show Gear
	$(".gear-check").click(function(){
		$(".color-option").fadeToggle();
	});

	// Change Color
	var colorLi = $(".color-option ul li");

	colorLi
	.eq(0).css("backgroundColor","#91ff00").end()
	.eq(1).css("backgroundColor","#8500ff").end()
	.eq(2).css("backgroundColor","#0043ff").end()
	.eq(3).css("backgroundColor","#ff0000");

	colorLi.click(function()
	{
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	   //	console.log($(this).attr("data-value"))
	});


});


// Loading Screen

$(window).load(function()
{
	

	$(".overlay .spinner").fadeOut(2000,
	function()
	{
		$("body").css("overflow","auto");
		
		$(this).parent().fadeOut(500,
		function()
		{
			

			$(this).remove();
		});

	});


	// Button Top


	var scrollButton = $("#scroll-top");

	$(window).scroll(function()
	{
		// console.log($(this).scrollTop());

		if ($(this).scrollTop() >= 1097)
		 {
		 	scrollButton.show();
		 }
		 else
		 {
		 	scrollButton.hide();
		 }


	});

	// Function On Click
		 scrollButton.click(function()
		 {
		 	
		 	$("html,body").animate({scrollTop : 0 }, 600);
		 });
		 


	// 1. Simple mode, it styles document scrollbar:
		$(function() {  
		    $("body").niceScroll();
		});


});

$('#btn1').click(function(){
	$('#btn1').css({'border':'1px dashed #ff4066','color':'#fe617a'})
	$('#btn2').css({'border':'none','color':'#000'})
	$('.lis2').css('border-bottom','none')
	$('.lis1').css('border-bottom','2px solid #ff4066')
	$('.dl_2').css('display','block');
	$('.dl_1').css('display','none')
})
$('#btn2').click(function(){
	$('#btn2').css({'border':'1px dashed #ff4066','color':'#fe617a'})
	$('#btn1').css({'border':'none','color':'#000'})
	$('.lis1').css('border-bottom','none')
	$('.lis2').css('border-bottom','2px solid #ff4066')
	$('.dl_1').css('display','block');
	$('.dl_2').css('display','none')
})
$('#btn1').mouseup(function(){
	$('#btn1').css('text-decoration','none')
})
$('#btn2').mouseup(function(){
	$('#btn2').css('text-decoration','none')
})


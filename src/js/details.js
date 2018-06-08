$(function() {
				var $uli = $("section .tab1 ul li");
				var $oli = $("section .tab1 ol li");
				$oli.addClass("hide");
				$oli[0].className = "show";
				var $a = 0;
				var $imgs1 = $('.imgs1 img')
				
				$uli.mouseover(function() {
					var index = $(this).index();
					
					
					$oli.removeClass().addClass("hide");
					$oli.eq(index).removeClass().addClass("show");
					
				});
				
					
					$uli.mouseover(function(){
						
					$uli.css({'opacity':'0.5'})
					
						$(this).css({'opacity':'1'})
					
				})
				$('.btnright').click(function(){
						
						if(($a -1) *356 > -parseInt($('.ul2').css('width'))){
						$('.ul2').css('margin-left',(--$a * 356) +'px')
							if($('.ul2').css('margin-left') != 0){
								$('.btnleft').css('visibility','visible')
							}
						}else{
							return;
						}
						console.log($('.ul2').css('margin-left'))	
//						console.log($a)
					})
					
				
					$('.btnleft').click(function(){
						
						console.log($a)
						if($a < 0){
							var $aa =(++$a * 356) + 'px';
//							console.log($aa)
						$('.ul2').css('margin-left',$aa)												
						}
						if($a == 0){
							$('.btnleft').css('visibility','hidden')
						}
					})
				$imgs1.mousemove(function(){
					var index = $(this).index();
					
					
					$oli.removeClass().addClass("hide");
					$oli.eq(index).removeClass().addClass("show");
				})
				
				
				
				$(".tree_1 ol li:has(ul)").click(function(event) {
					
					if (this == event.target) {
						
						$(this).children().toggle("slow");
						
					}
				});
				
					
				
			
				
})

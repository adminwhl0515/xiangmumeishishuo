/*window.onload = function(){
	
}


function pbl(ele,child,space){
	if(!ele){
		return;
	}
	child = child || 'div';
	space = space || 10;
	//获取大盒子wrap
	let $bigBox = $('#' + ele);
	//获取里面的子节点
	let $childs = $bigBox.children(child);
	
	let bigBoxWidth = $bigBox.width();
	//计算子节点的宽度
	let childWidth = $childs.eq(0).width();
	//计算列数
	let colNum = Math.floor(bigBoxWidth / childWidth);
	
	let padding = Math.floor((bigBoxWidth - colNum * childWidth) / (colNum + 1));
	$childs.each(function(){
		$(this).css('position','absolute');
		$(this).animate()
	}
}*/

			window.onload = function(){
				pbl('wrap');
			}
			$(window).resize(function(){
				pbl('wrap');
			})
			//求最小高度的下标值
			function minHeight(arr){
				var min = arr[0].top;
				var index = 0;
				for(var i = 0,len = arr.length;i < len;i ++){
					if(min == arr[i].top){
						min = arr[i].top;
						index = i;
					}
				}
				return index;
			}
			//瀑布流
			function pbl(ele,child,space){
				//初始化参数
				if(!ele){return ;}
				child = child || 'div';
				space = space || 10;
//				alert(child);
				//获取大盒子
				let $bigBox = $('#' + ele);
//				//获取所有子节点
				let $childs = $bigBox.children(child);
//				console.log($childs.eq(1).width())
//				//计算大盒子的宽度
				let bigBoxWidth = $bigBox.width() + 20;
				
//				//计算子节点的宽度
				let childWidth = $childs.eq(1).width();
				//alert($childs.eq(0).width())
//				//计算列数
				let colNum = Math.floor(bigBoxWidth / childWidth);
				
//				//计算左右间隙
				let padding = Math.floor((bigBoxWidth - colNum * childWidth) / (colNum + 1));
				console.log(padding)
//				//初始化第一行的坐标值
				let arr = [];
				for(let i = 0;i < colNum;i ++){
					arr[i] = new Object();
					arr[i].left = (i * childWidth) + (i + 1) * padding;
					arr[i].top = space;
				}
				
				$childs.each(function(){
					
					let i = minHeight(arr); //找到最小高度下标
//					for(var i = 0;i < colNum; i++){
						 //定位
						$(this).animate({right : arr[i].left,top : arr[i].top},500);
						arr[i].top += $(this).outerHeight()+ space;
						$bigBox.css('height',arr[i].top);
					
			});
			}

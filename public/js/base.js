
$(function(){setLeftNavTop();
	$('.item_block').click(function(){
		// 计算弹出框位置
		var width = $(document).width();
		var left = (width - $('.item_dialog_block').width())/2;
		left = left<1?1:left;
		top = $(document).scrollTop();
		$('.item_dialog_block').css('left',left );
		$('.item_dialog_block').css('top', top+50);
		$('.dialog_bg').show();
    	$('.item_dialog_block').show();
	});
	
	$('.dialog .close_dialog').click(function(){
		// 重置表单
		$(this).parent().parent().find('form')[0].reset();
		// 关闭弹窗
		$(this).parent().parent().hide();
		$('.dialog_bg').hide();
	});
	$('.cutover_block').click(function(){
		$('.'+$(this).attr('data-select')).removeClass('current');
		$(this).addClass('current');
		$('.'+$(this).attr('data-id')).addClass('current');
	});
	
	$('.jsUrl').click(function(){
		window.location.href = $(this).attr('data-url');
	});
	
	// 显示地图
	$('.contact .ico').click(function(){
		var address = $(this).attr('data-address');
		// goods map
		if(address)
		{
			
			 window.open   ('map.html?Street='+address+'&Latitude='+$(this).attr('data-lat')+'&Longitude='+$(this).attr('data-lng'),   '_blank',   
			'height=400,width=420,top=0,left=24,toolbar=no,menubar=no,scrollbars=no,   resizable=no,location=no,status=no');
			
		}
		return false;
	});
});
$(document).resize(function(){setLeftNavTop();});
$(document).scroll(function(){setLeftNavTop();});
function setLeftNavTop()
{
	var top = $(document).scrollTop();
	if(top>155)
	{
		$('.left_nav').addClass('current');
	}else{
		$('.left_nav').removeClass('current');
	}
}
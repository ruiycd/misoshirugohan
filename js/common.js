//main_visual heightサイズ可変
$(function window_load() {
	var sH = window.innerHeight;
	var box = $('#main');
	box.css('height', sH);
  if(window.innerWidth  >'768'){
	  window.onresize = window_load;
  }
});


$(function(){
 
//fadin
  var $body = $('body');
  var $main_txt = $('#main img');
  var $main_txt_01 = $('#main_txt_01');
  var $main_txt_02 = $('#main_txt_02');
  var $main_txt_03 = $('#main_txt_03');
  $body.hide();
  $main_txt.hide();
  $('body').fadeIn(1000,function(){
    $main_txt_01.fadeIn(1000);
    $main_txt_02.fadeIn(2000);
    $main_txt_03.fadeIn(3000);
  });
  
//sp menu
  var $sp_btn = $('#sp_btn');
  var $sp_list = $('#sp_list');
  var $sp_list_link = $('#sp_list li a');
  var on_off = 'off';
  
  $sp_btn.click(function(){
    if(on_off === 'off'){
      $sp_list.fadeIn();
      on_off = 'on';
    }else{
      $sp_list.fadeOut();
      on_off = 'off';
    }
  });
  $sp_list_link.click(function(){
      $sp_list.fadeOut();
      on_off = 'off';
  });
});
/* 랜덤 뽑기 - 전체선택 기능 */

/* 전체선택 */
$(document).on('click', '#on', function(){
	$('input[name="name"]').prop('checked', true);
});

/* 전체선택 취소 */
$(document).on('click', '#off', function(){
	$('input[name="name"]').prop('checked', false);
});	


/**
$(document).on('click', '.list input', function(){
	var name = $(this).val();
	console.log(name);
});
 */
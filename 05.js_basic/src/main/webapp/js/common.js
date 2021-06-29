/*
  공통 자바스크립트 파일 : js/common.js
 */

/* 현재 날짜 년도4자리-월2자리-일2자리 기본형식의 시간 반환 함수*/
	function getCurrentDate() {
		var currentDate = new Date();
		
		var year = currentDate.getFullYear();
		var month = currentDate.getMonth() + 1;
		if (month <= 9) {
			month = "0" + month;
		}
		var date = currentDate.getDate();
		if (date <= 9) {
			date = "0" + date;
		}
		
		currentDate = year + "-" + month + "-" + date;
		console.log("currentDate : " + currentDate);
		
		return currentDate;
	}
	

/* 현재 시간 시간2자리:분2자리:초2자리 기본형식의 시간 반환 함수 
	-- 01, 02, ... 09, 010, 011, 012
	-- ('0' + 시간) => 뒤에서 2자리 가져오기
*/
	function getCurrentTime() {
		var currentDate = new Date();
		var hour = ('0' + currentDate.getHours()).slice(-2); 
		var min = ('0' + currentDate.getMinutes()).slice(-2);	
		var sec = ('0' + currentDate.getSeconds()).slice(-2); 
		return hour + ":" + min + ":" + sec;
	}	
/**
  3. 사용자 클래스에 멤버메서드 선언 및 prototype 및 json 사용 방법
 */

/* 회원 클래스 선언 */
	function Member(memberId, name, mileage) {
		// 멤버변수 선언 및 초기화 수행
		this.memberId = memberId; 
		this.name = name; 
		this.mileage = mileage; 
}

/* prototype 속성 및 json을 사용한 다중 멤버메서드 선언 및 바인딩 : 클래스에 별도의 바인딩 필요하지 않음 */
Member.prototype = {
	toString:function() { return this.memberId + ", " + this.name + ", " + this.mileage; },	
	setMileage:function(mileage) { this.mileage = mileage; },
	getMileage:function() { return this.mileage; },
	setName:function(name) { this.name = name; },
	getName:function() { return this.name; }		 
}



/*
Member.prototype.toString = function() {
	return this.memberId + ", " + this.name + ", " + this.mileage;
}	

Member.prototype.setMileage = function(mileage) {	
	this.mileage = mileage;
}	

Member.prototype.getMileage = function() {	
	return this.mileage;
}	
*/
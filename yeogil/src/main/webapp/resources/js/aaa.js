var aaa = aaa || {}
aaa = (()=>{
	let init=()=>{
		onCreate();
	}
	let onCreate=()=>{
		setContentView();
	}
	let setContentView = ()=>{
		$('#flight-field').css({"background":"url("+$.ctx()+"/img/common/flight_field_left.png)", 'background-repeat' : 'no-repeat'});

	};
	return {init : init}
})();
var hotel = hotel || {};
hotel =(()=>{
	const WHEN_ERR = "호출하는 JS파일을 찾지 못했습니다."
		let init=()=>{
			onCreate();
		};
		let onCreate=()=>{
			setContentView();
		};
		let setContentView=()=>{
			$.getScript($.js()+'/compo.js',()=>{
				$('.content-header').remove();
				$('#header').remove();
				$('<div id="wrap" class="main"></div>').appendTo('#container');
				$(compo.hotel_main()).appendTo('#container');
				
				$('#qusghk').empty();
				$(compo.hotel_bottom()).appendTo('#qusghk');
				
				hotel_modify();
				hotel_page_move();
				hotel_event();
			});
		};
		
		let hotel_modify=()=>{
			$('#main_hotel_link').remove();
			$('#new_hotel_search_text').remove();
			$('#hotel_main_icon').text("호텔예약");
			$('#night_destination').text("숙박도시");
			$('#hotel_oneway').empty();
		};
		
		let hotel_page_move=()=>{
			$('#main_search_btn').click(function(){
				alert("호텔결과");
				$('#qusghk').empty();
				$(compo.hotel_search_result()).appendTo("#qusghk");
			});
		};
		
		let hotel_event=()=>{
			$('#DepartureCity').click(function(){
				alert("출발도시 리스트");
			});
			$('#ArrivalCity').click(function(){
				alert("숙박도시 리스트");
			});
			$('#date-range200').click(function(){
				alert("달력");
			});
			$('#date-range201').click(function(){
				alert("달력");
			});
			$('#passenger_value').click(function(){
				alert("인원선택");
			});
		};
		return {init:init,hotel:hotel};
})();
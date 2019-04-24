var auth = auth || {};
auth =(()=>{
	const WHEN_ERR = "호출하는 JS파일을 찾지 못했습니다."
		let init=()=>{
			onCreate();
		};
		let onCreate=()=>{
			setContentView();
		};
		let setContentView=()=>{
			modify();
			$('#main_hotel_link').text("호텔예약");
			$('#main_hotel_link').click(function(){
				hotel.init();
			});
			
			$('#main_search_btn').click(function(){
				$('#contents').empty();
				$(compo.search_result()).appendTo('#contents');
				$('#air_result_all').text("호텔예약");
				

			$('#airport_payment').click(function(){
				payment();
				
			});
			
				
				
			});
			
		};
		let payment=()=>{
			alert("결제창이동");
			$('#qusghk').empty();
			$(compo.payment_top()).appendTo('#qusghk');
			$(compo.payment_mid()).appendTo('#qusghk');
			
		};
		let modify=()=>{
			$('#main_text_01').text("여길가자 이용방법");
			$('#main_text_02').text("복잡한건 NO, 심플한 여길가자를 이용해 보세요.");
			
		};
		
		
		
		
		return {init:init};
})();
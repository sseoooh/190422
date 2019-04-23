var auth = auth || {};
auth =(()=>{
	const WHEN_ERR = "호출하는 JS파일을 찾지 못했습니다."
		let init=()=>{
			onCreate();
		}
		let onCreate=()=>{
			setContentView();
		}
		let setContentView=()=>{
			modify();
			$('#main_search_btn').click(function(){
				alert("이동");
				$('#t2hg').empty();
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				$(compo.search_result()).appendTo('#t2hg');
				
				
			});
			$('#private_text').addClass('cursor').click(function(){
				alert("여길가자는 1년이후 고객정보를 파기합니다");
				
			});
			
		};
		let result=()=>{
			alert("다음페이지로이동");
		};
		let modify=()=>{
			
			$('#main_logo').empty();
			$('<th>여길가자   로고</th>').appendTo('#main_logo');
			$('#main_text1').text("호텔");
			$('#main_top_text').text("호텔");
			$('#hot_deal').empty();
			$('#main_title_text').text("여길가자와 함께 여행을 가즈아!");
			$('#main_register').text("회원가입");
			$('#t2hg-compareTo-main-label').empty();
			$('#t2hg-compareTo-title-row').empty();
			$('#main_foot_text').text("All material herein © 2019–2019 Yggg Company Pte. Ltd. All Rights Reserved. 여길가자는 비트캠프의 자회사입니다.")
			
		};
		
		
		return {init:init};
})();
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
			$('#main_search_btn').click(function(){
				result();
			});
		};
		let result=()=>{
			
		};
		
		
		return {init:init};
})();
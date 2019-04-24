"use strict"
var main = main || {};
main = (x=>{													
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
		let init=x=>{
			main.$.init(x);
		}
		let onCreate=()=>{
			setContentView();
		}
		let setContentView=()=>{
			$.when(
					$.getScript($.js()+'/compo.js'),
					$.getScript($.js()+'/auth.js')
					
			).done(()=>{
				auth.init();
			});
		}
		return {init:init, onCreate:onCreate};
})();


main.$ ={
		init : x=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				main.onCreate();
			})
			}
		};
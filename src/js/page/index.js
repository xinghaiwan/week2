require(['js/config.js'],function(){
	require(['mui'],function(mui){
		console.log(mui);
		mui.init();
		function init(){
			mui.ajax('/list',{
				success : function(data){
					console.log(data);
					if(data.code == 0){
						var data = data.data;
						var html = '';
						data.forEach((item) =>{
							html += `
									<li class="mui-table-view-cell" id="con">
										<div class="top">
											<img src="${item.img}" >
											<p>${item.name}</p><br>
											<span>${item.date}<span>
										</div>
										<div class="cont">
											<div id="left">
												<h3>${item.title}</h3>
												<p>
													${item.content}
												</p>
												<h4>${item.downTime}</h4>
											</div>
											<div class="right">
												<img src="${item.maxImg}" >
											</div>
											
										</div>
									</li>`;
											
						});
						main.innerHTML = html;
					}
				}
			});
			addEvent();
		}
		init();
		function addEvent(){
			mui("#main").on('tap','#con',function(){
				location.href = '../pages/detail.html'
			});
		}
	});
});
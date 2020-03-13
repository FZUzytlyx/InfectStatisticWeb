	drawAdMap();
			function drawAdMap() {
				/*基于准备好的dom，初始化echarts图表*/
				var myChart = echarts.init(document.getElementById('main'));
				option = {
					title: {
						text: "中国疫情可视化地图",
						x: 'center'
					},
					tooltip: { 
						/*tooltip提示框，鼠标悬浮交互时的信息提示,触发类型，默认数据触发，见下图，可选为：'item' | 'axis'*/
						trigger: 'item'
					},
					legend: { 
						/*legend图例,布局方式，默认为水平布局，可选为：'horizontal' | 'vertical',date[]图例内容数组*/
						orient: 'vertical', 
						x: 'left',
						data: ['感染人数']
					},
					dataRange: { 
						/*dataRange值域选择
						min:指定的最小值，eg: 0，默认无，必须参数，唯有指定了splitList时可缺省min。
						x:水平安放位置，默认为全图左对齐，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
						y:垂直安放位置，默认为全图底部，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
						text:文本，默认为数值文本
						calculable:是否启用值域漫游，启用后无视splitNumber和splitList，值域显示为线性渐变
						*/
						min: 0, 
						max: 2500,
						x: 'left', 
						y: 'bottom', 
						text: ['高', '低'], 
						calculable: true
					},
					toolbox: { 
						/*orient:布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'*/
						show: true,
						orient: 'vertical',
						x: 'right',
						y: 'center',
						feature: {
							mark: {
								show: true
							},
							dataView: {
								show: true,
								readOnly: false
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					roamController: {
						/*缩放漫游组件,mapYtpeControl:指定漫游组件可控地图类型，如：{ china: true }*/
						show: true,
						x: 'right',
						mapTypeControl: { 
							'china': true
						}
					},
					/*series : eval("[" + dataStr + "]")*/
					series: [ /*通用,驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据，其中个别选项仅在部分图表类型中有效*/
						{
							name: '感染人数',
							type: 'map',
							mapType: 'china',
							itemStyle: {
								normal: {
									label: {
										show: true
									}
								},
								emphasis: {
									label: {
										show: true
									}
								}
							},
							data: [{
								name: '北京',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '天津',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '上海',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '重庆',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '河北',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '河南',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '云南',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '辽宁',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '黑龙江',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '湖南',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '安徽',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '山东',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '新疆',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '江苏',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '浙江',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '江西',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '湖北',
								value: 20000
							}, {
								name: '广西',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '甘肃',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '山西',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '内蒙古',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '陕西',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '吉林',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '福建',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '贵州',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '广东',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '青海',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '西藏',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '四川',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '宁夏',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '海南',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '台湾',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '香港',
								value: Math.round(Math.random() * 1000)
							}, {
								name: '澳门',
								value: Math.round(Math.random() * 1000)
							}]
						}
					]
				};
				
				/*为echarts对象加载数据*/
				myChart.setOption(option);
				myChart.on('click', function (params) {
		             alert(params.name+"感染人数"+params.value+"人"); 
		             var name=params.name;
		            if(name == "新疆") {
		            	window.location.href = "xinjiang.html";
		            } 
		            
		        });
			}
//初始化图标标签
		var myChart=echarts.init(document.getElementById('chart'));
		var option = {
			    title: {
			        text: '全国疫情累计趋势图',
			        x: 'center'
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data: ['确诊', '死亡', '治愈']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    toolbox: {
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    xAxis: {
			        type: 'category',
			        name: '日期',
			        boundaryGap: false,
			        data: ['01.11', '01.17', '01.23', '01.29', '02.04', '02.10', '02.16', '02.22', '02.28', '03.05', '03.11']
			    },
			    yAxis: {
			        type: 'value',
			        name: '人数'
			    },
			    series: [
			        {
			            name: '确诊',
			            type: 'line',			            
			            data: [41, 62, 830, 7736, 24363, 42708, 70635, 76846, 79389, 80710, 80980]
			        },
			        {
			            name: '死亡',
			            type: 'line',			            
			            data: [1, 2, 25, 170, 491, 1017, 1772, 2445, 2838, 3045, 3173]
			        },
			        {
			            name: '治愈',
			            type: 'line',
			            data: [6, 19, 34, 124, 892, 3998, 10853, 22907, 39049, 53793, 62887]
			        }
			    ]
			};
		    myChart.setOption(option,true);
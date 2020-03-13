
//全国疫情累计趋势图
totalLineChart();
function totalLineChart() {
	var myChart = echarts.init(document.getElementById('chart'));
	var option = {
		title : {
			text : '全国疫情累计趋势图',
	        left: 'center',
	        align: 'right'
		},
		tooltip : {
			trigger : 'axis'
		},
		legend : {
			data : [ '确诊', '死亡', '治愈' ],
		    left: 10
		},
		grid : {
			left : '3%',
			right : '4%',
			bottom : '3%',
			containLabel : true
		},
		xAxis : {
			type : 'category',
			name : '日期',
			boundaryGap : false,
			data : [ '01.11', '01.17', '01.23', '01.29', '02.04', '02.10',
					'02.16', '02.22', '02.28', '03.05', '03.11' ]
		},
		yAxis : {
			type : 'value',
			name : '人数'
		},
		series : [
				{
					name : '确诊',
					type : 'line',
					data : [ 41, 62, 830, 7736, 24363, 42708, 70635, 76846,
							79389, 80710, 80980 ]
				},
				{
					name : '死亡',
					type : 'line',
					data : [ 1, 2, 25, 170, 491, 1017, 1772, 2445, 2838, 3045,
							3173 ]
				},
				{
					name : '治愈',
					type : 'line',
					data : [ 6, 19, 34, 124, 892, 3998, 10853, 22907, 39049,
							53793, 62887 ]
				} ]
	};
	myChart.setOption(option, true);
}

//全国疫情现存趋势
function extantLineChart() {
	var myChart = echarts.init(document.getElementById('chart'));
	var option = {
		title : {
			text : '全国疫情现存趋势图',
	        left: 'center',
	        align: 'right'
		},
		tooltip : {
			trigger : 'axis'
		},
		legend : {
			data : [ '现存确诊', '现存疑似'],
		    left: 10
		},
		grid : {
			left : '3%',
			right : '4%',
			bottom : '3%',
			containLabel : true
		},
		xAxis : {
			type : 'category',
			name : '日期',
			boundaryGap : false,
			data : [ '01.11', '01.17', '01.23', '01.29', '02.04', '02.10',
					'02.16', '02.22', '02.28', '03.05', '03.11' ]
		},
		yAxis : {
			type : 'value',
			name : '人数'
		},
		series : [
				{
					name : '现存确诊',
					type : 'line',
					data : [ 34, 41, 771, 7442, 22980, 37693, 58010, 51494, 37502, 23872, 14920]
				},
				{
					name : '现存疑似',
					type : 'line',
					data : [ 0, 0, 1072, 12167, 23260, 21675, 7264, 4148, 1418, 482, 253]
				} ]
	};
	myChart.setOption(option, true);
}

//全国新增确诊|疑似
function increaseLineChart() {
	var myChart = echarts.init(document.getElementById('chart'));
	var option = {
		title : {
			text : '全国新增确诊|疑似',
	        left: 'center',
	        align: 'right'
		},
		tooltip : {
			trigger : 'axis'
		},
		legend : {
			data : [ '确诊', '疑似'],
		    left: 10
		},
		grid : {
			left : '3%',
			right : '4%',
			bottom : '3%',
			containLabel : true
		},
		xAxis : {
			type : 'category',
			name : '日期',
			boundaryGap : false,
			data : [ '01.11', '01.17', '01.23', '01.29', '02.04', '02.10',
					'02.16', '02.22', '02.28', '03.05', '03.11' ]
		},
		yAxis : {
			type : 'value',
			name : '人数'
		},
		series : [
				{
					name : '确诊',
					type : 'line',
					data : [ 0, 17, 259, 1762, 3892, 2473, 2051, 454, 430, 145, 25]
				},
				{
					name : '疑似',
					type : 'line',
					data : [ 0, 0, 257, 4148, 3971, 3536, 1563, 882, 248, 102, 33]
				} ]
	};
	myChart.setOption(option, true);
}


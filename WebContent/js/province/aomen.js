/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('澳门', {"type":"FeatureCollection","features":[{"id":"820001","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@LADC^umZ@DONWE@DALBBF@H@DFBBTC"],["@@P@LC@AGM@OECMBABBTCD@DDH"]],"encodeOffsets":[[[116285,22746]],[[116303,22746]]]},"properties":{"cp":[113.552965,22.207882],"name":"花地玛堂区","childNum":2}},{"id":"820002","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@MK@CA@AAGDEB@NVFJG"],"encodeOffsets":[[116281,22734]]},"properties":{"cp":[113.549052,22.199175],"name":"花王堂区","childNum":1}},{"id":"820003","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@EGOB@DNLHE@C"],"encodeOffsets":[[116285,22729]]},"properties":{"cp":[113.550252,22.193791],"name":"望德堂区","childNum":1}},{"id":"820004","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@YMVAN@BFCBBDAFHDBBFDHIJJEFDPCHHlYJQ"],"encodeOffsets":[[116313,22707]]},"properties":{"cp":[113.55374,22.188119],"name":"大堂区","childNum":1}},{"id":"820005","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@JICGAECACGEBAAEDBFNXB@"],"encodeOffsets":[[116266,22728]]},"properties":{"cp":[113.54167,22.187778],"name":"风顺堂区","childNum":1}},{"id":"820006","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ ZNWRquZCBCC@AEA@@ADCDCAACEAGBQ@INEL"],"encodeOffsets":[[116265,22694]]},"properties":{"cp":[113.558783,22.154124],"name":"嘉模堂区","childNum":1}},{"id":"820007","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@MOIAIEI@@GE@AAUCBdCFIFR@HAFBBDDBDCBC@@FB@BDDDA\\M"],"encodeOffsets":[[116316,22676]]},"properties":{"cp":[113.56925,22.136546],"name":"路凼填海区","childNum":1}},{"id":"820008","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@DKMMa_GC_COD@dVDBBF@@HJ@JFJBNPZK"],"encodeOffsets":[[116329,22670]]},"properties":{"cp":[113.559954,22.124049],"name":"圣方济各堂区","childNum":1}}],"UTF8Encoding":true});
}));

aomenLineChart();
function aomenLineChart() {
	var myChart = echarts.init(document.getElementById('chart'));
	var option = {
		title : {
			text : '澳门疫情趋势图',
			left : 'center',
			align : 'right'
		},
		tooltip : {
			trigger : 'axis'
		},
		legend : {
			data : [ '确诊', '死亡', '治愈' ],
			left : 10
		},
		grid : {
			left : '3%',
			right : '4%',
			bottom : '3%',
			containLabel : true
		},
		toolbox : {
			/* orient:布局方式，默认为水平布局，可选为：'horizontal' | 'vertical' */
			show : true,
			orient : 'vertical',
			x : 'right',
			y : 'center',
			feature : {
				mark : {
					show : true
				},
				dataView : {
					show : true,
					readOnly : false
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true
				}
			}
		},
		xAxis : {
			type : 'category',
			name : '日期',
			boundaryGap : false,
			data : [ '01.11', '01.12', '01.13', '01.14', '01.15', '01.16', '01.17', '01.18', '01.19', 
				'01.20', '01.21', '01.22','01.23', '01.24', '01.25', '01.26', '01.27', '01.28', '01.29', 
				'01.30', '01.31', '02.01', '02.02', '02.03', '02.04', '02.05', '02.06', '02.07', '02.08', 
				'02.09', '02.10', '02.11', '02.12', '02.13', '02.14', '02.15', '02.16', '02.17', '02.18', 
				'02.19', '02.20', '02.21', '02.22', '02.23', '02.24', '02.25', '02.26','02.27', '02.28',  
				'02.29', '03.01', '03.02', '03.03', '03.04', '03.05', '03.06', '03.07', '03.08', '03.09',
				'03.10', '03.11', '03.12', '03.13']
		},
		yAxis : {
			type : 'value',
			name : '人数'
		},
		series : [
				{
					name : '确诊',
					type : 'line',
					data : [ 41, 41, 41, 41, 41, 45, 62, 121, 198, 258, 440, 571, 830, 1287, 1975, 2744, 4515, 
						5974, 7736, 9720, 11821, 14411, 17238, 20471, 24363, 28060, 31211, 34598, 37251, 40235, 
						42708, 44730, 59882, 63932, 66576, 68584, 70635, 72528, 74279, 74675, 75993, 76392, 76846, 
						77262, 77779, 78190, 78630, 78959, 79389, 79968, 80174, 80302, 80422, 80565, 80710, 80813, 
						80859, 80904, 80924, 80955, 80980, 81003, 81021]
				},
				{
					name : '死亡',
					type : 'line',
					data : [ 1, 1, 1, 1, 1, 2, 2, 3, 4, 6, 9, 17, 25, 41, 56, 80, 106, 132, 170, 213, 259, 204, 361, 
						425, 491, 564, 637, 723, 812, 909, 1017, 1114, 1368, 1381, 1524, 1666, 1772, 1870, 2006, 2121, 
						2239, 2348, 2445, 2595, 2666, 2718, 2747, 2791, 2838, 2873, 2915, 2946, 2984, 3015, 3045, 3073, 
						3100, 3123, 3140, 3162, 3173, 3180, 3194]
				},
				{
					name : '治愈',
					type : 'line',
					data : [ 6, 6, 7, 7, 7, 7, 19, 24, 25, 25, 25, 30, 34, 38, 49, 51, 60, 103, 124, 171, 243, 328, 475, 
						632, 892, 1153, 1542, 2052, 2651, 3283, 3998, 4742, 5915, 6728, 8101, 9425, 10853, 12561, 14387, 
						16168, 18266, 20673, 22907, 24757, 27353, 29775, 32531, 36157, 39049, 41675, 44518, 47260, 49914, 
						52109, 53793, 55477, 57143, 58684, 59982, 61567, 62887, 64216, 65649]
				} ]
	};
	myChart.setOption(option, true);
}
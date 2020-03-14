/*初始化echarts*/
var myChart = echarts.init(document.getElementById('main'));
var provinces = [ 'shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning',
		'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian',
		'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong',
		'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang',
		'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing',
		'tianjin', 'chongqing', 'xianggang', 'aomen' ];

var provincesText = [ '上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江',
		'安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州',
		'云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门' ];

var seriesData = [ /*{
	name : '北京',
	value : Math.round(Math.random() * 1000)
}, {
	name : '天津',
	value : Math.round(Math.random() * 1000)
}, {
	name : '上海',
	value : Math.round(Math.random() * 1000)
}, {
	name : '重庆',
	value : Math.round(Math.random() * 1000)
}, {
	name : '河北',
	value : Math.round(Math.random() * 1000)
}, {
	name : '河南',
	value : Math.round(Math.random() * 1000)
}, {
	name : '云南',
	value : Math.round(Math.random() * 1000)
}, {
	name : '辽宁',
	value : Math.round(Math.random() * 1000)
}, {
	name : '黑龙江',
	value : Math.round(Math.random() * 1000)
}, {
	name : '湖南',
	value : Math.round(Math.random() * 1000)
}, {
	name : '安徽',
	value : Math.round(Math.random() * 1000)
}, {
	name : '山东',
	value : Math.round(Math.random() * 1000)
}, {
	name : '新疆',
	value : Math.round(Math.random() * 1000)
}, {
	name : '江苏',
	value : Math.round(Math.random() * 1000)
}, {
	name : '浙江',
	value : Math.round(Math.random() * 1000)
}, {
	name : '江西',
	value : Math.round(Math.random() * 1000)
}, {
	name : '湖北',
	value : Math.round(Math.random() * 1000)
}, {
	name : '广西',
	value : Math.round(Math.random() * 1000)
}, {
	name : '甘肃',
	value : Math.round(Math.random() * 1000)
}, {
	name : '山西',
	value : Math.round(Math.random() * 1000)
}, {
	name : '内蒙古',
	value : Math.round(Math.random() * 1000)
}, {
	name : '陕西',
	value : Math.round(Math.random() * 1000)
}, {
	name : '吉林',
	value : Math.round(Math.random() * 1000)
}, {
	name : '福建',
	value : Math.round(Math.random() * 1000)
}, {
	name : '贵州',
	value : Math.round(Math.random() * 1000)
}, {
	name : '广东',
	value : Math.round(Math.random() * 1000)
}, {
	name : '青海',
	value : Math.round(Math.random() * 1000)
}, {
	name : '西藏',
	value : Math.round(Math.random() * 1000)
}, {
	name : '四川',
	value : Math.round(Math.random() * 1000)
}, {
	name : '宁夏',
	value : Math.round(Math.random() * 1000)
}, {
	name : '海南',
	value : Math.round(Math.random() * 1000)
}, {
	name : '台湾',
	value : Math.round(Math.random() * 1000)
}, {
	name : '香港',
	value : Math.round(Math.random() * 1000)
}, {
	name : '澳门',
	value : Math.round(Math.random() * 1000)
}*/ ];

/*获取点击时选中的日期*/
function dateClick(a){
    var date=a.cal.getNewDateStr();
    alert(date);
}

document.getElementById("back").onclick = function() {
	initEcharts("china", "中国");
	getData();
};

initEcharts("china", "中国");
getData();

function initEcharts(pName, Chinese) {
	/* 基于准备好的dom，初始化echarts图表 */
	var tmpSeriesData = pName === "china" ? seriesData : [];
	option = {
		title : {
			// text: "中国疫情可视化地图",
			text : Chinese || pName,
			x : 'center'
		},
		tooltip : {
			/* tooltip提示框，鼠标悬浮交互时的信息提示,触发类型，默认数据触发，见下图，可选为：'item' | 'axis' */
			trigger : 'item'
		},
		legend : {
			/* legend图例,布局方式，默认为水平布局，可选为：'horizontal' | 'vertical',date[]图例内容数组 */
			orient : 'vertical',
			x : 'left',
			data : [ '感染人数' ]
		},
		dataRange : {
			/*
			 * dataRange值域选择 min:指定的最小值，eg: 0，默认无，必须参数，唯有指定了splitList时可缺省min。
			 * x:水平安放位置，默认为全图左对齐，可选为：'center' | 'left' | 'right' |
			 * {number}（x坐标，单位px） y:垂直安放位置，默认为全图底部，可选为：'top' | 'bottom' |
			 * 'center' | {number}（y坐标，单位px） text:文本，默认为数值文本
			 * calculable:是否启用值域漫游，启用后无视splitNumber和splitList，值域显示为线性渐变
			 */
			min : 0,
			max : 100,
			x : 'left',
			y : 'bottom',
			text : [ '高', '低' ],
			calculable : true
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
		roamController : {
			/* 缩放漫游组件,mapYtpeControl:指定漫游组件可控地图类型，如：{ china: true } */
			show : true,
			x : 'right',
			mapTypeControl : {
				'china' : true
			}
		},
		series : [ /* 通用,驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据，其中个别选项仅在部分图表类型中有效 */
		{
			name : Chinese || pName,
			type : 'map',
			mapType : pName,
			itemStyle : {
				normal : {
					label : {
						show : true
					}
				},
				emphasis : {
					label : {
						show : true
					}
				}
			},
			data : tmpSeriesData,
		} ]
	};

	/* 为echarts对象加载数据 */
	myChart.setOption(option);
	if (pName === "china") {
		myChart.on('click', function(params) {
			for (var i = 0; i < provincesText.length; i++) {
				if (params.name === provincesText[i]) {
					showProvince(provinces[i], provincesText[i]);
					break;
				}
			}
		});

	} else {
		/* 省份，添加双击 回退到全国 */
		myChart.on("dblclick", function() {
			initEcharts("china", "中国");
			getData();
		});
	}

}

/* 展示对应的省 */
function showProvince(pName, Chinese) {
	loadBdScript('$' + pName + 'JS', './js/province/' + pName + '.js',
			function() {
				initEcharts(Chinese);
			});
}

/* 加载对应的JS */
function loadBdScript(scriptId, url, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	if (script.readyState) {
		script.onreadystatechange = function() {
			if (script.readyState === "loaded"
					|| script.readyState === "complete") {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		script.onload = function() {
			callback();
		};
	}
	script.src = url;
	script.id = scriptId;
	document.getElementsByTagName("head")[0].appendChild(script);
};


//获取数据
function getData() {
  $.ajax({
    url: "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5",
    dataType: "jsonp",
    data:{
    	date:$('#datePicker').find("input").val()
    },
    success: function (data) {
      var res = data.data || "";
      res = JSON.parse(res);
      var newArr = [];
      if (res) {
    	  document.getElementById("nowConfirm").innerHTML=res.chinaTotal.nowConfirm;
    	  document.getElementById("importedCase").innerHTML=res.chinaTotal.importedCase;
    	  document.getElementById("nowSevere").innerHTML=res.chinaTotal.nowSevere;
    	  document.getElementById("totalConfirm").innerHTML=res.chinaTotal.confirm;
    	  document.getElementById("dead").innerHTML=res.chinaTotal.dead;
    	  document.getElementById("heal").innerHTML=res.chinaTotal.heal;
    	  
    	  document.getElementById("addConfirm").innerHTML="较昨日"+res.chinaAdd.nowConfirm;
    	  document.getElementById("addImport").innerHTML="较昨日+"+res.chinaAdd.importedCase;
    	  document.getElementById("addSevere").innerHTML="较昨日"+res.chinaAdd.nowSevere;
    	  document.getElementById("addTotalConfirm").innerHTML="较昨日+"+res.chinaAdd.confirm;
    	  document.getElementById("addDead").innerHTML="较昨日+"+res.chinaAdd.dead;
    	  document.getElementById("addHeal").innerHTML="较昨日+"+res.chinaAdd.heal;
        /*获取到各个省份的数据*/
        var province = res.areaTree[0].children;
        for (var i = 0; i < province.length; i++) {
          var json = {
            name: province[i].name,
            value: province[i].total.confirm-province[i].total.heal-province[i].total.dead
          }
          newArr.push(json)
        }
        /*使用指定的配置项和数据显示图表*/
        myChart.setOption({
          series: [
            {
              name: '确诊数',
              type: 'map',
              mapType: 'china',
              roam: false,
              label: {
                show: true,
                color: 'rgb(249, 249, 249)'
              },
              data: newArr
            }
          ]
        });
      }
    }
  })
}
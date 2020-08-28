
// 柱状图模块1
var getAgeitem = [];

// console.log(getAgeitem,"点击调用数据");

// function btn( index ){
//     let data = server.get('/getAge',{
//     }).then( res =>{
//         console.log( res.data.data);
//         this.getAgeitem = res.data.data;
//         console.log(getAgeitem,"点击调用数据");
//     }).catch( error =>{
//         console.error( "请求失败")
//     })
// }
// (function() {
//   // 我的数据在这里
//   // 没有了吧
//     // 1实例化对象
//    var  myChart = echarts.init(document.querySelector(".bar .chert"));
//     // 2. 指定配置项和数据
//     // console.log(res.data,"零一");
//     var option = {
//       color: ["#2f89cf"],
//       title:{},
//       legend:{
//           data:['bar'],
//           left:10
//       },
//       tooltip: {
//         trigger: "axis",
//         axisPointer: {
//           // 坐标轴指示器，坐标轴触发有效
//           type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
//         }
//       },
//       // 修改图表的大小
//       grid: {
//         left: "0%",
//         top: "10px",
//         right: "0%",
//         bottom: "4%",
//         containLabel: true
//       },
//       xAxis: [
//         {
//           type: "category",
//           data: [
//             "摄影图",
//             "矢量图",
//             "视频类",
//             "UI设计",
//           ],
//           axisTick: {
//             alignWithLabel: true
//           },
//           // 修改刻度标签 相关样式
//           axisLabel: {
//             color: "#0099FF",
//             fontSize: "12"
//           },
//           // 不显示x坐标轴的样式
//           axisLine: {
//             show: false
//           }
//         }
//       ],
//       yAxis: [
//         {
//           type: "value",
//           // 修改刻度标签 相关样式
//           axisTick:{
//             show:false,
//           },
//           axisLabel: {
//             color: "#439aff",
//             fontSize: 12
//           },
//           // y轴的线条改为了 2像素
//           axisLine: {
//             lineStyle: {
//                 color:'#439aff',
//                 // color: "#0099FF",
//                 fontSize: 12,
//               width: 1
//             }
//           },
//           // y轴分割线的颜色
//           splitLine: {
//             lineStyle: {
//               color: "#122446"
//             }
//           }
//         }
//       ],
//       series: [
//         {
//           name: "直接访问",
//           type: "bar",
//           barWidth: "35%",
//           data: [20, 40, 60, 80,100],
//           itemStyle: {
//             // 修改柱子圆角
//             barBorderRadius: 5,
//             normal: {
//                 // color: function(params) {
//                 //     var colorList = ["#27a4f7", "#27a4f7", "#bc5375", "#27a4f7",];
//                 //     return colorList[params.dataIndex],
//                 //     //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                    
//                 // },
//                 color: 'rgba(237,125,49, 0.8)', 
//                 color: function(params){
//                     // console.log(params);
//                     var colorList = [
//                         ['#28b0ff','#2b8aff'],
//                         ['#28b0ff','#2b8aff'],
//                         ['#fab601','#e93ca7'],
//                         ['#28b0ff','#2b8aff'],
//                         ['#8D104B','#FF83D8'],
//                         ['#7F610F','#FFE899'],
//                         ['#108D89','#83FFE9']
//                     ];   
                    
//                     var colorItem = colorList[params.dataIndex];     
//                     return new echarts.graphic.LinearGradient(0,0,0,1,[
//                                 {
//                                     offset:0,
//                                     color:colorItem[0]
//                                 },
//                                 {
//                                     offset:1,
//                                     color:colorItem[1]
//                                 }
//                                 ],false);
//                     },
//                     emphasis: {
//                         color: new echarts.graphic.LinearGradient(
//                               0, 0, 0, 1,
//                              [
//                               {offset: 0, color: '#2FDECA'},
//                               {offset: 1, color: '#2FDE80'}
//                              ]
//                         )
//                        }
        
//             }
//           },
//           areaStyle:{}
//         }
//       ]
//     };
//     // 3. 把配置项给实例对象
//     myChart.setOption(option);
//     // 4. 让图表跟随屏幕自动的去适应
//     window.addEventListener("resize", function() {
//       myChart.resize();
//     });
//   })();
   
// 折线图模块1
// (function(){
//   var yearData = [
//     {
//       year: '2020',  // 年份
//       data: [  // 两个数组是因为有两条线
//            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
//            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
//         ]
//     },
//     {
//       year: '2021',  // 年份
//       data: [  // 两个数组是因为有两条线
//            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
//        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
//         ]
//     }
//    ];
//   //数据
//    var myChart = echarts.init(document.querySelector(".line .chert"));
//   // 指定配置
//   var option = {
//     color:[
//       '#e33aa3','#439aff',
//     ],
//     title: {
//         // text: '堆叠区域图',
//         x:'center',
//         y: 'bottom',
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'none',
//             label: {
//                 backgroundColor: '#6a7985'
//             }
//         }
//     },
//     // 图例组件
//     legend: {
//       borderColor:'#657DE9',
//       textStyle:{
//         color:'#fff' //图例文字颜色
//       },
//       right:'10%',
//       icon:'rect',
//       // orient: 'vertical',
//       // x:'center',      //可设定图例在左、右、居中
//       // y:'top',    //可设定图例在上、下、居中
//       // padding:[0,50,0,0],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
//       data: ['收入','支出',]
//     },
//     toolbox: {
//         // feature: {
//         //     saveAsImage: {}
//         // }
//     },
//     grid: {
//         top:'20%',
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         show:true,//显示边框
//          borderColor:'#012f4a',// 边框的颜色
//         containLabel: true
//     },
//     xAxis: [
     
//         {
//             type: 'category',
//             boundaryGap: false,
//             data: ['1月','2月','3月', '4月', '5月', '6月', '7月','8月'],
//             axisTick:{
//               show:false,
//             },
//             axisLabel:{
//               color:'#f4f4f5'
//               //文本的颜色
//             },
//             axisLine:{
//               show:false
//             },
//             // 轴线
//             axisLabel:{
//               color:'#f4f4f5'
//               //文本的颜色
//             },
//         }
//     ],
//     yAxis: [
//         {
//             type: 'value',
//             boundaryGap: [0, '30%'],
//             axisTick:{
//               show:false,
//             },
//             splitLine:{
//               lineStyle:{
//                 color:'#0d1935'
//               }
//               //分割线颜色
//             },
//             axisLabel:{
//               color:'#f4f4f5'
//               //文本的颜色
//             },
//             axisLine:{
//               show:false
//             },
//         }
//     ],
//     series: [
      
//         {
//             name: '收入',
//             type: 'line',
//             // stack: '总量',
//             symbol:'circle',
//             smooth:true,
//             showSymbol:false,
//             symbolSize:12,
//             itemStyle:{
//               color:'#0184d5',
//               borderColor: 'rgba(221,220,107,.1)',
//               borderWidth:12
//             },
//             //  单独修改线的样式
//             lineStyle:{
//               color:'#377dd2',
//               width:2,
//               type:'solid'
//             },
//             // 拐点的样式
           
//             // 区域填充
//             areaStyle: {
//               // color:'#e33aa3'
//               // 渐变颜色
//                  // 渐变色，只需要复制即可
//                  // 渐变色，只需要复制即可
//               // 渐变色，只需要复制即可
//               color: new echarts.graphic.LinearGradient(
//                 0,
//                 0,
//                 0,
//                 1,
//                 [
//                   {
//                     offset: 0,
//                     color: "#1e1636"   // 渐变色的起始颜色
//                   },
//                   {
//                     offset: 1,
//                     color: "#181a3b"   // 渐变线的结束颜色
//                   }
//                 ],
//                 false
//               ),
//               shadowColor: "rgba(0, 0, 0, 0.1)"
//             },
//             data: yearData[0].data[0]
//             // data: [120, 132, 101, 134, 90, 230, 210]
//         },
//         {
//             name: '支出',
//             type: 'line',
//             smooth:true,
//             symbol:'circle',
//             symbolSize:12,
//             itemStyle:{
//               color:'#b6348e',
//               borderColor: 'rgba(221,220,107,.1)',
//               borderWidth:12
//             },
//             // stack: '总量',
//             lineStyle:{
//               color:'#b6348e',
//               width:2,
//               type:'solid'
//             },
//             // 开始不显示拐点，鼠标经过显示
//             showSymbol:false,
//             label: {
//                 normal: {
//                     show: true,
//                     position: 'top'
//                 }
//             },
//             areaStyle: {
//               color:'#387fd5'
//             },
//             data: yearData[1].data[1]
//           }
//     ]
// };
//  //把配置给实例对象
//  myChart.setOption(option);
//  window.addEventListener('resize', function(){
//    myChart.resize();
//  });
//   // 点击切换效果
//   $('.line h2').on('click', 'a',function(){
//     console.log($(this).index()); //获取当前索引
//     // yearDate的相关对象
//     // console.log(yearData[$(this).index()]);
//     var obj = yearData[$(this).index()]
//     option.series[0].data =obj.data[0]; 
//     option.series[1].data =obj.data[1]; 
//     myChart.setOption(option);
//    })
// })();
//  饼状图
// (function(){
//   var myChart = echarts.init(document.querySelector('.pie .chert'))
//   var option = {
//     color:['#2a9aff', '#5b29d7','#f1668d'],
    
//     title: {
//         // text: '某站点用户访问来源',
//         // subtext: '纯属虚构',
//         left: 'center'
//     },
//     tooltip: {
//         trigger: 'item',
//         // formatter: '{a} <br/>{b} : {c} ({d}%)',
   
//     },
//     legend: {
//         // orient: 'vertical',
//         bottom: '0%',
//         textStyle:{
//           color:'#fff',
//           fontSize:12
//         }
//         // data: ['UI设计图', '摄影图', '矢量图',]
//     },
//     series: [
//         {
//             // name: '每月图片销量',
//             type: 'pie',
//             radius: ['40%','60%'],
//             center: ['50%', '38%'],
//             // label:{
//             //   show:true,
//             //   position:'center'
//             // },
//             labelLine:{
//               show:true,
//               normal: {
//                 length:30,
//                 length2:10,
//                 lineStyle: {
//                 color: '#333'
//                 }
//               }
//             },
//             data: [
//                 {value: 300, name: 'UI设计图'},
//                 {value: 300, name: '摄影图'},
//                 {value: 234, name: '矢量图'},
//                 // {value: 135, name: '视频广告'},
//                 // {value: 1548, name: '搜索引擎'}
//             ],
//              label: {

//                             normal: {
//                               formatter: '{d}%',//\n实现换行   // 实现百分%
//                               rich: {
//                                 a: {
//                                   color: '#fff',
//                                   fontSize: 10,
//                                   lineHeight: 10
              
//                                 },
//                                 b: {
//                                   fontSize: 10,
//                                   lineHeight: 10,
//                                   color: '#fff'
              
//                                 },
//                                 c: {
//                                   fontSize: 10,
//                                   lineHeight: 20,
//                                   color: '#fff'
              
//                                 }
              
//                               }
              
//                             }
              
//                           }
//             // emphasis: {
//             //     itemStyle: {
//             //         shadowBlur: 10,
//             //         shadowOffsetX: 0,
//             //         shadowColor: 'rgba(0, 0, 0, 0.5)'
//             //     }
//             // }
//         }
//     ]
// };  
//    //把配置给实例对象
//  myChart.setOption(option);
//  window.addEventListener('resize', function(){
//    myChart.resize();
//  })
// })();
// 3D地球


//  地球

// (function(){
//   var myChart = echarts.init(document.querySelector(".maps .chart-item"));
//    //地球相关配置项
//    var  option = {
//     tooltip:{
//         trigger:'item',
//         formatter:function(params){
//             return params.name;
//         }
//     },
//     viewControl:{
//         center:[]
//     },
//     backgroundColor: '#000',
//     globe: {
//         baseTexture: "imgs/world_1.jpg",
//         heightTexture: "imgs/world_2.jpg",
//         shading: 'color',
//         // environment: 'imgs/bg.jpg',
//         light: {
//             main: {
//                 intensity:3,
//             },
//             ambient: {
//                 intensity:3
//             },
//         },
//         viewControl: {
//             autoRotate: false,
//             targetCoord: [116.46, 39.92]
//         },
//         layers: [{
//             type: 'blend',
//             texture: echartsMap,
//         }]
//     },  
//     series : [
//         {
//             name:'',
//             type: 'scatter3D',
//             coordinateSystem: 'globe',
//             data: markData,
//             blendMode:'lighter',
//             symbolSize: 10,
//             hoverAnimation: true,
//             label: {
//                 normal: {
// //	                   formatter: '{c}',
//                     position: 'right',
//                     show: false
//                 },
//                 emphasis: {
//                     show: false
//                 }
//             },
//             itemStyle: {
//                 normal: {
//                         color:function(params){
//                             if(params.data.idData.isAlarm){
//                                 return "red"
//                             }else{
//                                 return "#05C3F9"
//                             }
//                         }
//                 },
//                 emphasis: {
//                     color: 'yellow'
//                 }
//             },
//             animation:true
//         },
//     ]
// }
// myChart.setOption(option);
//   // 监听浏览器缩放，图表对象调用缩放resize函数
//   window.addEventListener("resize", function() {
//     myChart.resize();
//   });
// })();

//  折线图
// 柱状图模块1
// (function() {
//     // 1实例化对象
//     // let oHeight = document.querySelector("mapts .chert");
//     // oHeight.style.height = 150+"px";
//     var myChart = echarts.init(document.querySelector(".mapts .cherts"));
//     // 2. 指定配置项和数据
//     option = {
//         // backgroundColor:'#232d36',
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {
//                 lineStyle: {
//                     color: {
//                         type: 'linear',
//                         x: 0,
//                         y: 0,
//                         x2: 0,
//                         y2: 1,
//                         colorStops: [{
//                             offset: 0,
//                             color: 'rgba(0, 255, 233,0)'
//                         }, {
//                             offset: 0.5,
//                             color: 'rgba(255, 255, 255,1)',
//                         }, {
//                             offset: 1,
//                             color: 'rgba(0, 255, 233,0)'
//                         }],
//                         global: false
//                     }
//                 },
//             },
//         },
//         grid: {
//             top: '15%',
//             left: '10%',
//             right: '5%',
//             bottom: '15%',
//             // containLabel: true
//         },
//         tooltip:{
//             axisPointer:{
//                 type:'none'  //去掉竖线
//             }
//         },
//         xAxis: [{
//             type: 'category',
//             axisLine: {
//                 show: false,
//                 color:'#A582EA'
//             },
            
//             axisLabel: {
//                 show:false
//             },
//             splitLine: {
//                 show:false,
//                 lineStyle: {
//                     color: '#1c3b6b'
//                 }
//             },
//             boundaryGap: false,
//             data: ["2020-06-21","2020-06-22","2020-06-23","2020-06-24","2020-06-25","2020-06-26","2020-06-27"]//this.$moment(data.times).format("HH-mm") ,
    
//         }],
    
//         yAxis: [{
//             type: 'value',
//             min: 0,
//             // max: 140,
//             splitNumber: 4,
//             splitLine: {
//                 show: true,
//                 lineStyle: {
//                     color: '#00BFF3',
//                     opacity:0.23
//                 }
//             },
//             axisLine: {
//                 show: false,
//             },
//             axisLabel: {
//                 show: false,
//                 margin: 20,
//                 textStyle: {
//                     color: '#fff',
    
//                 },
//             },
//             axisTick: {
//                 show: false,
//             },
//         }],
//         series: [
//             {
//                 name:'液压异常报警',
//                 type: 'line',
//                 showAllSymbol:true,
//                 symbol: 'circle',
//                 symbolSize: 10,
//                 lineStyle: {
//                     normal: {
//                         color: "#672460",
//                     },
//                 },
//                 label: {
//                     show: false,
//                     position: 'top',
//                     textStyle: {
//                         color: '#A582EA',
//                     }
//                 },
//                 itemStyle: {
//                     color: "#e93ca7",
//                     borderColor: "#e93ca7",
//                     borderWidth: 2,
//                 },
//                 // areaStyle: {
//                 //     normal: {
//                 //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                 //             {
//                 //                 offset: 0,
//                 //                 color: 'rgba(43,193,145,0.3)'
//                 //             },
//                 //             {
//                 //                 offset: 1,
//                 //                 color: 'rgba(43,193,145,0)'
//                 //             }
//                 //         ], false),
//                 //     },
//                      //去掉阴影
//                 // },
//                 data: [4,7,5,4,3,5,8]//data.values
//             },
//             {
//                 name:'液位异常报警',
//                 type: 'line',
//                 showAllSymbol:true,
//                 symbol: 'circle',
//                 symbolSize: 10,
//                 lineStyle: {
//                     normal: {
//                         color: "#1c3b6b", //颜色修改
//                     },
//                 },
//                 label: {
//                     show:false, //上面的文字
//                     position: 'top',
//                     textStyle: {
//                         color: '#2CABE3',
//                     }
//                 },
//                 itemStyle: {
//                     color: "#439aff",
//                     borderColor: "#439aff",
//                     borderWidth: 2,
//                 },
//                 // areaStyle: {
//                 //     normal: {
//                 //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                 //             // {
//                 //             //     offset: 0,
//                 //             //     color: 'rgba(81,150,164,0.3)'
//                 //             // },
//                 //             // {
//                 //             //     offset: 1,
//                 //             //     color: 'rgba(81,150,164,0)'
//                 //             // }
//                 //         ], false),
//                 //     }
//                 // },
//                 data: [3,5,4,2,1,7,6]//data.values
//             },
//         ]
//     };
    
//     // 3. 把配置项给实例对象
//     myChart.setOption(option);
//     // 4. 让图表跟随屏幕自动的去适应
//     window.addEventListener("resize", function() {
//       myChart.resize();
//     });
//   })();

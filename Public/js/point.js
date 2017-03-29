/**
 * Created by SEELE on 2016/7/25.
 */
// 百度地图API功能
var map = new BMap.Map('map');
map.addControl(new BMap.NavigationControl());               // 添加平移缩放控件
map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
map.addControl(new BMap.OverviewMapControl());
//var opts = {offset:BMAP_ANCHOR_BOTTOM_RIGHT };               //设置地图类型控件位置
var opts = {offset: new BMap.Size(1800, 420)};               //设置地图类型控件位置
map.addControl(new BMap.ScaleControl(opts));
map.addControl(new BMap.MapTypeControl(opts));          //添加地图类型控件
map.setMapType(BMAP_NORMAL_MAP);
map.centerAndZoom("江苏",13);
// 初始化地图,设置城市和地图级别。
map.enableScrollWheelZoom();
var a = [], overlays = [];
var b=[],area=[];
var coordinate='';
var num;
var ndata='';
var area_mes=0;
var zone_message='';
var store=[];
var storepoint=[];
var lab=[];
var lay={};

//定义坐标对象
function Option(lng,lat){
    this.lng=lng;
    this.lat=lat;
}
//当绘制多边形结束后，分别进行a数组传值与b数组转化字符串。
var overlaycomplete = function(e){
    overlays.push(e.overlay);
    for(var i=0;i< e.overlay.getPath().length;i++){
        if (e.drawingMode == BMAP_DRAWING_POLYGON ) {
            var result=new Option();
            result.lng=e.overlay.getPath()[i].lng;
            result.lat=e.overlay.getPath()[i].lat;
            a.push(result);
        }
    }
    //将a数组中的对象传递给b数组；
    for(var j=0;j< a.length;j++){
       b[j]=new BMap.Point(a[j].lng,a[j].lat) ;
    }
    //将b数组中的对象转化为字符串
    var nlat=0;
    var nlng=0;
    for(var j=0;j< b.length;j++) {
        coordinate+=b[j].lng+','+b[j].lat+'|';
        nlat+=b[j].lat;
        nlng+=b[j].lng;
    }
    coordinate1=coordinate.substring(0,coordinate.length-1);
    num= b.length;
    var zone={};
    zone.lng=nlng/num;
    zone.lat=nlat/num;

    var myGeo = new BMap.Geocoder();
    var pt=new BMap.Point(zone.lng,zone.lat);
       myGeo.getLocation(pt, function(rs){
               var addComp = rs.addressComponents;
             zone_message=addComp.province  + addComp.city  + addComp.district+ addComp.street ;
        });
    ndata=nlng/num+','+nlat/num;
    area_mes= Math.abs(BMapLib.GeoUtils.getPolygonArea(e.overlay))*0.0015;
    //点击多边形的时候
    e.overlay.addEventListener("onmouseover",function(){
        var opts = {
            position : zone,    // 指定文本标注所在的地理位置
            offset   : new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label = new BMap.Label(area_mes.toFixed(2)+'亩', opts);  // 创建文本标注对象
        label.setStyle({
            color : "red",
            fontSize : "12px",
            height : "20px",
            lineHeight : "20px",
            fontFamily:"微软雅黑"
        });
        lab.push(label);
        map.addOverlay( label);
    });
};
var styleOptions = {
    strokeColor:"red",    //边线颜色。
    fillColor:"white",      //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3,       //边线的宽度，以像素为单位。
    strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
    fillOpacity: 0.2,      //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
};
//实例化鼠标绘制工具
var drawingManager = new BMapLib.DrawingManager(map, {
    isOpen: false, //是否开启绘制模式
    enableDrawingTool: true, //是否显示工具栏
    drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
        offset: new BMap.Size(5, 5), //偏离值
        scale: 0.8, //工具栏缩放比例
        drawingModes:[   //设置当前的绘制模式为画点与画多边形
            BMAP_DRAWING_MARKER,
            BMAP_DRAWING_POLYGON
        ]
    },
    polygonOptions: styleOptions //多边形的样式
});
//添加鼠标绘制工具监听事件，用于获取绘制结果
drawingManager.addEventListener('overlaycomplete', overlaycomplete);
var btn=1;

function showAll(arr1,arr2) {
    for (var i = 0; i < arr1.length; i++) {
        var d = [];
        var ply;
        var pol = {};
        for (var j = 0; j < arr1[i].length; j++) {
            d.push(new BMap.Point(arr1[i][j].lng, arr1[i][j].lat));
        }
        ply = new BMap.Polygon(d, {strokeWeight: 2, fillColor: "white", fillOpacity: 0.2, strokeColor: "#ff0000"});

        store.push(ply);
        var contents=arr2[i];
        map.addOverlay(ply);  //添加覆盖物
        addClick(contents,ply);
    }
    //识别地域多边形
 function addClick(contents,ply){
     ply.addEventListener("click",function(e){
         //alert(contents);
         document.getElementById("result").innerHTML =contents;
     })
 }
}
function show() {
    onclick=function() {  //监听按钮事件，使按钮点击事件在多次点击下，只触发一次
        if(document.getElementById("result").innerHTML ==='') {  //如果result中的内容为空
            btn = 1;
        }
        if(btn){
            document.getElementById("result").innerHTML = coordinate1+zone_message;
            btn = 0;
        }
    }
}
//清除覆盖层
function clearAll() {
    for (var i = 0; i < overlays.length; i++) {
        map.removeOverlay(overlays[i]);
        b.splice(0, b.length);
        a.splice(0, a.length);

        coordinate1 = '';
        coordinate = '';
        zone_message = '';
        ndata = '';
        document.getElementById("result").innerHTML = '';
        area_mes = 0;
    }
    for (var i = 0; i < store.length; i++) {
    map.removeOverlay(store[i]);
}
    for (var i = 0; i < lab.length; i++) {
        map.removeOverlay(lab[i]);
    }
   overlays.length = 0;
    store.length=0;
}



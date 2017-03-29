/**
 * Created by SEELE on 2016/8/1.
 */
function G(id) {
    return document.getElementById(id);
}
var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
    {"input" : "suggestId"
        ,"location" : map
    });
ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
    var str = "";
    var _value = e.fromitem.value;
    var value = "";
    if (e.fromitem.index > -1) {
        value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    }
    str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
    value = "";
    if (e.toitem.index > -1) {
        _value = e.toitem.value;
        value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    }
    str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
    G("searchResultPanel").innerHTML = str;
});
var myValue;
ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
    var _value = e.item.value;
    myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
    console.log(_value.province +"+"+  _value.city +"+"+ _value.district  +"+"+ _value.street  +"+"+ _value.business);
    var place;
    if((_value.province).length!=0)
        place=_value.province;
    else if((_value.province).length==0&&(_value.city).length!=0)
        place=_value.city;
    else if ((_value.province).length==0&&(_value.city).length==0&&(_value.district).length!=0)
        place=_value.district;
    else if((_value.province).length==0&&(_value.city).length==0&&(_value.district).length==0&&(_value.street).length!=0)
        place=_value.street;
    else
        place=_value.business;

    setPlace(place);
});
function setPlace(place){
    area.splice(0,area.length);
    map.clearOverlays();    //清除地图上所有覆盖物
    getdata(place);
    function myFun(){
        var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
        map.centerAndZoom(pp, 18);
    map.addOverlay(new BMap.Marker(pp));    //添加标注
    }
    var local = new BMap.LocalSearch(map, { //智能搜索
        onSearchComplete: myFun
    });
    local.search(myValue);
}
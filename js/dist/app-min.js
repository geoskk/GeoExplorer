(function(){"use strict";(function(){this.prototype.get2MeshCode=function(){var a,b,c=Math.floor(this.lat()/2*3+135),d=Math.floor(this.lng()+180),e=10*c+Math.floor(8*(this.lat()/2*3+135-c)),f=10*d+Math.floor(8*(this.lng()+180-d)),g=c.toString(),h=d.toString();for(a=g.length,b=0;3-a>b;b++)g="0"+g;for(a=h.length,b=0;3-a>b;b++)h="0"+h;var i=g+h+e%10+""+f%10;return i};var a=function(a,b){var c=Math.pow(10,b);return Math.floor(a*c)/c},b=function(b){var c=b,d=Math.floor(b);c=60*(c-d);var e=Math.floor(c);c=60*(c-e);var f=c;return[d,e,a(f,3)]},c=function(a){for(var b=a>0?-1:1;Math.abs(a)>180;)a+=360*b;return a};this.prototype.getLatLonStr=function(){var a=this.lat(),d=c(this.lng()),e=0>a?"S":"N";a=Math.abs(a);var f=0>d?"W":"E";d=Math.abs(d);var g=b(a),h=b(d),i=(e+" "+g[0]+" "+g[1]+" "+g[2],f+" "+h[0]+" "+h[1]+" "+h[2],g[2].toString().split(".")),j=e+" "+g[0]+" "+g[1];for(l=0;l<i.length;l++)j+=" "+i[l];i=h[2].toString().split(".");for(var k=f+" "+h[0]+" "+h[1],l=0;l<i.length;l++)k+=" "+i[l];var m=j+" "+k;return m};var d=function(a){return Math.round(3600*a*256)};this.prototype.getLat256s=function(){return d(this.lat())},this.prototype.getLng256s=function(){return d(this.lng())}}).call(google.maps.LatLng),function(a){function b(){var b=a("script:first"),c=b.css("color"),d=!1;if(/^rgba/.test(c))d=!0;else try{d=c!=b.css("color","rgba(0, 0, 0, 0.5)").css("color"),b.css("color",c)}catch(e){}return d}function c(b,c,d){var e="rgb"+(a.support.rgba?"a":"")+"("+parseInt(b[0]+d*(c[0]-b[0]),10)+","+parseInt(b[1]+d*(c[1]-b[1]),10)+","+parseInt(b[2]+d*(c[2]-b[2]),10);return a.support.rgba&&(e+=","+(b&&c?parseFloat(b[3]+d*(c[3]-b[3])):1)),e+=")"}function d(a){var b,c;return(b=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a))?c=[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),1]:(b=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a))?c=[17*parseInt(b[1],16),17*parseInt(b[2],16),17*parseInt(b[3],16),1]:(b=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a))?c=[parseInt(b[1]),parseInt(b[2]),parseInt(b[3]),1]:(b=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(a))&&(c=[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),parseFloat(b[4])]),c}a.extend(!0,a,{support:{rgba:b()}});var e=["color","backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","outlineColor"];a.each(e,function(b,e){a.Tween.propHooks[e]={get:function(b){return a(b.elem).css(e)},set:function(b){var f=b.elem.style,g=d(a(b.elem).css(e)),h=d(b.end);b.run=function(a){f[e]=c(g,h,a)}}}}),a.Tween.propHooks.borderColor={set:function(b){var f=b.elem.style,g=[],h=e.slice(2,6);a.each(h,function(c,e){g[e]=d(a(b.elem).css(e))});var i=d(b.end);b.run=function(b){a.each(h,function(a,d){f[d]=c(g[d],i,b)})}}}}(jQuery),function(){this.shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;var f=c.target;"string"==typeof c.target&&(f=document.getElementById(c.target));a=a.toLowerCase();var g=function(d){if(d=d||window.event,c.disable_in_input){var e;if(d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode),"INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}var f;d.keyCode?f=d.keyCode:d.which&&(f=d.which);var g=String.fromCharCode(f).toLowerCase();188==f&&(g=","),190==f&&(g=".");var h=a.split("+"),i=0,j={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},k={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},l={shift:{wanted:!1,pressed:!1},ctrl:{wanted:!1,pressed:!1},alt:{wanted:!1,pressed:!1},meta:{wanted:!1,pressed:!1}};d.ctrlKey&&(l.ctrl.pressed=!0),d.shiftKey&&(l.shift.pressed=!0),d.altKey&&(l.alt.pressed=!0),d.metaKey&&(l.meta.pressed=!0);var m,n;for(m=0;n=h[m],m<h.length;m++)"ctrl"==n||"control"==n?(i++,l.ctrl.wanted=!0):"shift"==n?(i++,l.shift.wanted=!0):"alt"==n?(i++,l.alt.wanted=!0):"meta"==n?(i++,l.meta.wanted=!0):n.length>1?k[n]==f&&i++:c.keycode?c.keycode==f&&i++:g==n?i++:j[g]&&d.shiftKey&&(g=j[g],g==n&&i++);return i!=h.length||l.ctrl.pressed!=l.ctrl.wanted||l.shift.pressed!=l.shift.wanted||l.alt.pressed!=l.alt.wanted||l.meta.pressed!=l.meta.wanted||(b(d),c.propagate)?void 0:(d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1)};this.all_shortcuts[a]={callback:g,target:f,event:c.type},f.addEventListener?f.addEventListener(c.type,g,!1):f.attachEvent?f.attachEvent("on"+c.type,g):f["on"+c.type]=g},remove:function(a){a=a.toLowerCase();var b=this.all_shortcuts[a];if(delete this.all_shortcuts[a],b){var c=b.event,d=b.target,e=b.callback;d.detachEvent?d.detachEvent("on"+c,e):d.removeEventListener?d.removeEventListener(c,e,!1):d["on"+c]=!1}}}}.call(this),function(){this.Gx=this.Gx||{},this.Gx.Utils={},this.Gx.Utils.localStorageWrapper={data:function(a,b){var c,d=window.localStorage;return d&&a?b?void d.setItem(a,JSON.stringify(b)):(c=d.getItem(a),c?JSON.parse(c):null):null},remove:function(a){window.localStorage.removeItem(a)}},this.Gx.Utils.round=function(a,b){var c=Math.pow(10,b||1);return Math.round(a*c)/c}}.call(this),function(){this.Gx=this.Gx||{},this.Gx.Searcher=function(){var a=function(a){this.app=a,this.geocoder=new google.maps.Geocoder};return a.prototype={search:function(a){var b=this.getLatLngFromString(a);b.OK&&(a=new google.maps.LatLng(b.lat,b.lng),this.app.render({centerPos:a,markerPos:a})),this.geocode(a,_.bind(function(c){var d;c[0]&&c[0].geometry&&(d=c[0].geometry.location),!b.OK&&d&&this.app.render({centerPos:d,markerPos:d}),this.app.render({geocodeResults:c,bookmarkTitle:a})},this))},geocode:function(a,b){var c={};a instanceof google.maps.LatLng?c.latLng=a:c.address=a,this.geocoder.geocode(c,function(a,d){d!==google.maps.GeocoderStatus.OK&&(a=[],c.latLng&&a.push({geometry:{location:c.latLng}})),b(a)})},getLatLngFromString:function(a){var b,c=a.replace("北緯","N").replace("南緯","S").replace("西経","W").replace("東経","E").trim(),d=a.replace(/\.|,|\'/g," ").replace(/"/g,"").replace("N","N ").replace("S","S ").replace("E","E ").replace("W","W "),e=d.search(/N|S/);if(d=d.substr(e)+"00 "+d.substr(0,e-1)+"00",c.match(/(N|S)(\s\d{1,3}){4}\s(E|W)(\s\d{1,3}){3,4}/))b=c;else{if(!d.match(/(N|S)(\s\d{1,3}){4}\s(E|W)(\s\d{1,3}){3,4}/))return{lat:0,lng:0,OK:!1};b=d}var f=b.split(" ").map(function(a){return parseInt(a,10)}),g=f[1]+f[2]/60+f[3]/3600+f[4]/3600/1e3,h=f[6]+f[7]/60+f[8]/3600+(f[9]?f[9]/3600/1e3:0);return{lat:b.match(/S/)?-1*g:g,lng:b.match(/W/)?-1*h:h,OK:!0}}},a}()}.call(this),function(){this.Gx=this.Gx||{},this.Gx.SearchView=Backbone.View.extend({el:"#input_address",events:{keyup:"onSearch"},initialize:function(a){_.bindAll(this,"onSearch","focus"),this.searcher=a,this.$el.val("")},onSearch:function(a){var b=this.$el.val();13===a.keyCode&&""!==b&&this.searcher.search(b)},focus:function(){this.$el.focus().select()}})}.call(this),function(){this.Gx=this.Gx||{},this.Gx.defaultBookmark=[{locationName:"Amsterdam",lat:52.370216,lng:4.895168},{locationName:"Bangkok",lat:13.727896,lng:100.524123},{locationName:"Brussels",lat:50.85034,lng:4.35171},{locationName:"Buenos Aires",lat:-34.603723,lng:-58.381593},{locationName:"Detroit",lat:42.331427,lng:-83.045754},{locationName:"Honolulu",lat:21.306944,lng:-157.858333},{locationName:"Jakarta",lat:-6.211544,lng:106.845172},{locationName:"London",lat:51.511214,lng:-.119824},{locationName:"Los Angels",lat:34.052234,lng:-118.243685},{locationName:"Melbourne",lat:-37.814107,lng:144.96328},{locationName:"Mexico City",lat:19.432608,lng:-99.133208},{locationName:"Moscow",lat:55.755826,lng:37.6173},{locationName:"Mumbai",lat:19.075984,lng:72.877656},{locationName:"Munich",lat:48.13672,lng:11.576754},{locationName:"New Delhi",lat:28.635308,lng:77.22496},{locationName:"New York",lat:40.714353,lng:-74.005973},{locationName:"Paris",lat:48.856614,lng:2.352222},{locationName:"Rio de Janeiro",lat:-22.903539,lng:-43.209587},{locationName:"Rome",lat:41.892916,lng:12.48252},{locationName:"Singapore",lat:1.352083,lng:103.819836},{locationName:"Vancouver",lat:49.261226,lng:-123.113927},{locationName:"台北",lat:25.040539,lng:121.55211},{locationName:"東京",lat:35.689488,lng:139.691706},{locationName:"香港",lat:22.396428,lng:114.109497}]}.call(this),function(){this.Gx=this.Gx||{},this.Gx.BookmarkView=Backbone.View.extend({el:"#bookmark_box",events:{"click #btn_bookmark":"toggleBookmark"},initialize:function(){this.bookmarkListView=new Gx.BookmarkListView({collection:new Gx.BookmarkCollection})},toggleBookmark:function(){this.bookmarkListView.toggle()},save:function(){this.bookmarkListView.save()},setSearchKey:function(a){this.bookmarkListView.setSearchKey(a)},hide:function(){this.bookmarkListView.hide()}}),this.Gx.BookmarkListView=Backbone.View.extend({el:"#bookmark",events:{"keydown #input_bookmark":"onKeyDown","click .icon-plus":"add"},initialize:function(){this.$ul=this.$el.find("ul"),this.$input=this.$el.find("input"),_.bindAll(this,"load","add","save","render"),this.collection.bind("add",this.render),this.load(),this.idx=0},load:function(){var a=Gx.Utils.localStorageWrapper.data(Gx.bookmarkKey)||Gx.defaultBookmark;a instanceof Array&&_.each(a.sort(function(a,b){return a.locationName>b.locationName}),function(a){this.collection.add(a)},this)},onKeyDown:function(a){13===a.keyCode?this.onEnter(a):38===a.keyCode||40===a.keyCode?this.onUpDown(a):46===a.keyCode&&this.onDelete()},onEnter:function(){0!==this.$el.find(".bkm_li_hover").length?(this.collection.each(function(a){a.trigger("deselect:byKey")}),this.collection.at(this.idx).trigger("jump:byKey")):this.add()},onUpDown:function(a){if(0!==this.$el.find("li").length){if(this.adjustIdx(),0===this.$el.find(".bkm_li_hover").length)return void this.collection.at(this.idx).trigger("select:byKey");38===a.keyCode?this.idx--:this.idx++,this.adjustIdx(),this.collection.each(function(a){a.trigger("deselect:byKey")}),this.collection.at(this.idx).trigger("select:byKey")}},onDelete:function(){0!==this.$el.find(".bkm_li_hover").length&&this.collection.at(this.idx).trigger("delete:byKey")},adjustIdx:function(){this.idx<0?this.idx=this.collection.length-1:this.idx>=this.collection.length&&(this.idx=0)},add:function(){var a=app.mapView.map.getCenter(),b=this.$input.val();""!==b&&(this.collection.add({locationName:b,lat:a.lat(),lng:a.lng()}),this.$input.val(""))},save:function(){var a=this.collection.map(function(a){return a.attributes});a.length?Gx.Utils.localStorageWrapper.data(Gx.bookmarkKey,a):Gx.Utils.localStorageWrapper.remove(Gx.bookmarkKey)},render:function(a){var b=new Gx.BookmarkUnitView({model:a}),c=b.render().$el,d=this.$ul.children(),e=this.collection.indexOf(a);return d.length<1?this.$ul.append(c):0===e?d.eq(0).before(c):d.eq(e-1).after(c),c.css({backgroundColor:"#87CEEB"}).animate({backgroundColor:"#EEEEEE"},function(){$(this).attr("style","")}),this},setSearchKey:function(a){this.$input.val(a)},focusInput:function(){this.$input.focus().select()},toggle:function(){this.$el.slideToggle("fast",_.bind(function(){this.focusInput()},this))},hide:function(){this.$el.hide()}}),this.Gx.BookmarkUnitView=Backbone.View.extend({tagName:"li",events:{click:"onClick","click .icon-delete-bookmark":"onDelete"},initialize:function(){_.bindAll(this,"render","remove","onClick","onSelect","onDeselect","onDelete"),this.template=_.template($("#tmpl_bookmark_unit").html()),this.model.bind("destroy",this.remove),this.model.bind("select:byKey",this.onSelect),this.model.bind("deselect:byKey",this.onDeselect),this.model.bind("delete:byKey",this.onDelete),this.model.bind("jump:byKey",this.onClick)},render:function(){return this.$el.html(this.template(this.model.attributes)),this},onClick:function(){this.removeFlg||app.jump(new google.maps.LatLng(this.model.get("lat"),this.model.get("lng")),!0)},onSelect:function(){this.$el.addClass("bkm_li_hover")},onDeselect:function(){this.$el.removeClass("bkm_li_hover")},onDelete:function(){this.removeFlg=!0,this.$el.hide("fast",_.bind(function(){this.model.destroy()},this))}})}.call(this),function(){this.Gx=this.Gx||{},this.Gx.InfoView=Backbone.View.extend({el:"#informations",initialize:function(){this.centerInfoView=new Gx.InfoViewUnit({el:"#center_info",model:new Gx.PositionModel}),this.clickedPointView=new Gx.InfoViewUnit({el:"#clicked_point",model:new Gx.PositionModel}),this.addressResultsView=new Gx.AddressResultsView({collection:new Gx.AddressCollection})},refreshBounds:function(a){var b=a.getCenter(),c=Gx.Utils.round;this.centerInfoView.model.set({meshcode:b.get2MeshCode(),latLngStr:b.getLatLonStr(),lat:c(b.lat(),7),lng:c(b.lng(),7),lat256s:b.getLat256s(),lng256s:b.getLng256s(),zoom:a.getZoom()}),this.clickedPointView.model.set({zoom:a.getZoom()})},setGeocodeResult:function(a){var b,c=Gx.Utils.round;a[0]&&a[0].geometry&&(b=a[0].geometry.location),b&&this.clickedPointView.model.set({meshcode:b.get2MeshCode(),latLngStr:b.getLatLonStr(),lat:c(b.lat(),7),lng:c(b.lng(),7),lat256s:b.getLat256s(),lng256s:b.getLng256s()}),this.addressResultsView.clear(),_.each(a,function(a){this.addressResultsView.add(a)},this)},toggle:function(){this.$el.slideToggle("fast")}}),this.Gx.InfoViewUnit=Backbone.View.extend({initialize:function(){_.bindAll(this,"render"),this.model.bind("change",this.render),this.template=_.template($("#tmpl_point_info").html())},render:function(){return this.$el.html(this.template(this.model.attributes)),$(".llstring").click(function(){$(this).select()}),this}})}.call(this),function(){this.Gx=this.Gx||{},this.Gx.AddressResultsView=Backbone.View.extend({el:"#address_info",initialize:function(){_.bindAll(this,"render","add","clear"),this.collection.bind("add",this.render)},render:function(a){var b=new Gx.AddressUnitView({model:a});return this.$el.append(b.render().$el),this},add:function(a){if(a.formatted_address){var b=new Gx.AddressModel({address:a.formatted_address,types:a.types.join(", "),addressCompos:a.address_components.map(function(a){return{types:a.types.join(", "),longName:a.long_name}})});this.collection.add(b)}},clear:function(){for(var a;a=this.collection.first();)a.destroy()}}),this.Gx.AddressUnitView=Backbone.View.extend({tagName:"div",initialize:function(){_.bindAll(this,"render","remove"),this.template=_.template($("#tmpl_address_info").html()),this.model.bind("destroy",this.remove)},render:function(){return this.$el.html(this.template(this.model.attributes)),this}})}.call(this),function(){this.Gx=this.Gx||{},this.Gx.MapView=Backbone.View.extend({el:"#map_canvas",initialize:function(){var a=Gx.Utils.localStorageWrapper.data(Gx.lastStateKey)||{},b=new google.maps.LatLng(a.lat||35.5291699,a.lng||139.6958934),c={zoom:a.zoom||9,center:b,mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DEFAULT},zoomControl:!0,scaleControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE},mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(document.getElementById("map_canvas"),c),this.posMarker=null},clearMarker:function(){this.posMarker&&this.posMarker.setMap(null)},createMarker:function(a){this.clearMarker(),this.posMarker=new google.maps.Marker({map:this.map,position:a}),this.posMarker.addListener("click",_.bind(function(a){this.setCenter(a.latLng)},this))},setCenter:function(a){this.map.setCenter(a)},saveState:function(){var a=this.map.getCenter();Gx.Utils.localStorageWrapper.data(Gx.lastStateKey,{lat:a.lat(),lng:a.lng(),zoom:this.map.getZoom()})}})}.call(this),function(){this.Gx=this.Gx||{},this.Gx.BookmarkModel=Backbone.Model.extend({defaults:function(){return{locationName:"",lat:0,lng:0}}}),this.Gx.BookmarkCollection=Backbone.Collection.extend({comparator:function(a){return a.get("locationName").toUpperCase()}})}.call(this),function(){this.Gx=this.Gx||{},this.Gx.PositionModel=Backbone.Model.extend({defaults:function(){return{meshcode:"",latLngStr:"",lat:0,lng:0,lat256s:0,lng256s:0,zoom:18}}})}.call(this),function(){this.Gx=this.Gx||{},this.Gx.AddressModel=Backbone.Model.extend({defaults:function(){return{address:"",types:"",addressCompos:[]}}}),this.Gx.AddressCollection=Backbone.Collection.extend()}.call(this),function(){this.Gx=this.Gx||{},this.Gx.lastStateKey="lastState_GeoExplorer",this.Gx.bookmarkKey="bookmarks_GeoExplorer",this.Gx.AppView=Backbone.View.extend({el:"#wrapper",initialize:function(){this.searcher=new Gx.Searcher(this),this.mapView=new Gx.MapView,this.searchView=new Gx.SearchView(this.searcher),this.infoView=new Gx.InfoView,this.bookmarkView=new Gx.BookmarkView},jump:function(a,b){return this.render({centerPos:b?a:null,markerPos:a}),this.searcher.geocode(a,_.bind(function(a){this.render({geocodeResults:a})},this)),this.bookmarkView.hide(),this},render:function(a){return a.centerPos&&this.mapView.setCenter(a.centerPos),a.markerPos&&this.mapView.createMarker(a.markerPos),a.geocodeResults&&this.infoView.setGeocodeResult(a.geocodeResults),a.bookmarkTitle&&this.bookmarkView.setSearchKey(a.bookmarkTitle),a.zoom&&this.mapView.map.setZoom(a.zoom),this}})}.call(this),$(function(){window.app=new Gx.AppView;var a=Backbone.Router.extend({routes:{"(:coord)":"jump"},jump:function(a){if(a&&a.match(/^(-{0,1}\d+\.{0,1}\d+,){2}\d+$/g)){var b=a.split(",").map(function(a){return+a});app.jump(new google.maps.LatLng(b[0],b[1]),!0).render({zoom:b[2]})}}});Gx.router=new a,Backbone.history.start(),function(){window.onbeforeunload=function(){app.mapView.saveState(),app.bookmarkView.save()};var a=app.mapView.map;google.maps.event.addListener(a,"click",function(a){app.jump(a.latLng)}),google.maps.event.addListener(a,"bounds_changed",function(){app.infoView.refreshBounds(a)}),google.maps.event.addListener(a,"idle",function(){var a=app.mapView.map,b=a.getCenter(),c=[b.lat(),b.lng(),a.getZoom()].map(function(a){return Gx.Utils.round(+a,7)}).join(",");Gx.router.navigate(c,!1)}),app.jump(a.getCenter())}(),function(){var a={type:"keydown",propagate:!0,target:document},b=app.mapView.map;shortcut.add("Shift+PageUp",function(){b.setZoom(b.getZoom()+1)},a),shortcut.add("Shift+PageDown",function(){b.setZoom(b.getZoom()-1)},a),shortcut.add("Ctrl+Enter",_.bind(function(){app.infoView.toggle()},this),a),shortcut.add("Ctrl+Q",_.bind(function(){app.searchView.focus()},this),a),shortcut.add("Ctrl+M",_.bind(function(){app.bookmarkView.toggleBookmark()},this),a)}(),function(a){a(),$(window).resize(a)}(function(){$("#map_canvas").css({height:$(window).height()+"px"});var a=$("#informations").height(),b=$("#center_info").height()||80,c=$("#clicked_point").height()||80,d=$("#informations h2").outerHeight(),e=a-(b+c+2*d)-15;$("#address_info").css({maxHeight:e+"px"}),$("#bookmark").css({maxHeight:.8*$(window).height()+"px"})})})}).call(this);
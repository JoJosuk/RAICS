function GmapInit(){jQuery(".map-canvas").each((function(){var e=jQuery(this),t="",a="",o=12,l=!1,s=!0,r=!0,i=google.maps.MapTypeId.ROADMAP,n="",p="",y=e.data("icon-path"),g=e.data("lat"),d=e.data("lng"),m=e.data("zoom"),c=e.data("type"),T=e.data("scrollwheel"),h=e.data("zoomcontrol"),u=e.data("hue"),f=e.data("title"),v=e.data("content");void 0!==m&&!1!==m&&(o=parseFloat(m)),void 0!==g&&!1!==g&&(t=parseFloat(g)),void 0!==d&&!1!==d&&(a=parseFloat(d)),null!=T&&(l=T),null!=h&&(s=h),void 0!==c&&!1!==c&&("satellite"==c?i=google.maps.MapTypeId.SATELLITE:"hybrid"==c?i=google.maps.MapTypeId.HYBRID:"terrain"==c&&(i=google.maps.MapTypeId.TERRAIN)),void 0!==f&&!1!==f&&(n=f),navigator.userAgent.match(/iPad|iPhone|Android/i)&&(r=!1);var w={zoom:o,scrollwheel:l,zoomControl:s,draggable:r,center:new google.maps.LatLng(t,a),mapTypeId:i},I=new google.maps.Map(e[0],w),L=y;void 0!==v&&!1!==v&&(p='<div class="map-data"><h6>'+n+'</h6><div class="map-content">'+v+"</div></div>");var M=new google.maps.InfoWindow({content:p}),b=new google.maps.Marker({position:new google.maps.LatLng(t,a),map:I,icon:L,title:n});if(void 0!==v&&!1!==v&&google.maps.event.addListener(b,"click",(function(){M.open(I,b)})),void 0!==u&&!1!==u){I.setOptions({styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]})}}))}function MapLoadScript(){var e=document.createElement("script");e.type="text/javascript",GmapInit(),document.body.appendChild(e)}window.onload=MapLoadScript;
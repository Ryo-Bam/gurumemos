// googleMapsAPIを持ってくるときに,callback=initMapと記述しているため、initMap関数を作成
function initMap() {
    // welcome.blade.phpで描画領域を設定するときに、id=mapとしたため、その領域を取得し、mapに格納します。
    map = document.getElementById("map");
    // 東京タワーの緯度は35.6585769,経度は139.7454506と事前に調べておいた
    let tokyoTower = {lat: 35.6585769, lng: 139.7454506};
    // オプションを設定
    opt = {
        zoom: 13, //地図の縮尺を指定
        center: tokyoTower, //センターを東京タワーに指定
    };
    // 地図のインスタンスを作成します。第一引数にはマップを描画する領域、第二引数にはオプションを指定
    mapObj = new google.maps.Map(map, opt);
    var placesKeyword = document.getElementById("place_keyword").value;
    // Places Libraryの用意
    var service = new google.maps.places.PlacesService(mapObj);

    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
      });
    // キーワードを元に店舗の名前と緯度経度を取得
    service.findPlaceFromQuery({
    query: placesKeyword,
    fields: ['name', 'geometry'],
    }, function(results, status) {   
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // 結果表示
        var result = document.getElementById('result')
        result.innerHTML=`
  	    <div class="card" id="result" style="width: 18rem; margin: 10px auto">
  	        <div class="card-body">
  	            <h5 class="card-title">検索結果</h5>
  	            <p>
  	            名前: ${results[0].name}
  	            </p>
  	            <p>
  	            緯度: ${results[0].geometry.location.lat()}
  	            経度: ${results[0].geometry.location.lng()}
  	            </p>
              </div>
  	    </div>`
  	    
          // マップの中心地更新
        mapObj.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: mapObj,
            });
        

        marker.addListener("click", () => {									           
            infoWindow.setContent(results[0].name);
            infoWindow.open(mapObj, marker);
          });
        }
    })}
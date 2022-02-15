import React, { useState, useEffect, useRef, useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import axios from 'axios';
import { MemoData } from '../Products/Memos/index';
import { QuestionData } from '../Products/Questions/index';
import { PrimaryButton } from '../Uikit/index';


const SinglePageAndApi = (props) => {

  const [marker, setMarker] = useState(null);
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [address, setAddress] = useState(null);

  const [mapPost, setMapPost] = useState([]);

  const [lat, setLat] = useState(35.6585769);
  const [lng, setLng] = useState(139.7454506);
  const [name, setName] = useState('');

  const [storeIds, setStoreIds] = useState('');
  const [memos, setMemos] = useState('');
  const [questions, setQuestions] = useState('');
  const [category, setCategory] = useState('');
  const [propedQuestions, setPropedQuestions] = useState('');

  //緯度・経度の初期値
  const defaultLatLng = {
    lat: 35.6585769,
    lng: 139.7454506,
  };

  const handleApiLoaded = (objmap) => {
    setMap(objmap.map);
    setMaps(objmap.maps);
    setGeocoder(new objmap.maps.Geocoder());
  };

  //質問のカテゴリーでカテゴリーごとにフィルターをかけてデータを取得
  const categoryChange = (categoryId) => {
    const selectedQuestions = questions.filter(question => {
      return question.question_category_id == Number(categoryId.target.value);
    })
    setPropedQuestions(selectedQuestions);
  }

  //マップ検索した時の関数
  const search = (e) => {
    geocoder.geocode({
      address,
    }, (results, status) => {
      if (status === maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
        if (marker) {
          marker.setMap(null);
        }
        setMarker(new maps.Marker({
          map,
          position: results[0].geometry.location,
        }));
        setLat(results[0].geometry.location.lat());
        setLng(results[0].geometry.location.lng());

        const placesService = new google.maps.places.PlacesService(map);
        placesService.getDetails({ placeId: results[0].place_id }, (place, status) => {
          if (status === "OK") {
            //placeから情報を取得する処理
            setName(place.name);
          }
        })
      }
    });
  };

  //カテゴリーのデータを取得
  const getCategory = async () => {
    const cateData = await axios.get('api/question/category')
      setCategory(cateData.data);
  }

  //メモの情報を取得
  const getStoreDetail = async (storeId) => {
    const memosData = await axios.get(`api/store/${storeId}`)
    setMemos(memosData.data.memos);
  }
  //質問の情報を取得
  const getQuestion = async (storesId) => {
    const quesData = await axios.get(`api/store/ques/${storesId}`)
    setQuestions(quesData.data.questions);
  }

  //マップのデータをデータベースに送信
  const createMaps = async (e) => {
    await axios
      .post('/api/store', {
        lat: lat,
        lng: lng,
        name: name
      })
      .then((res) => {
          setStoreIds(res.data);
          getStoreDetail(res.data);
          getQuestion(res.data);
          getCategory(res.data);
          setMapPost(mapPosts)
        const mapPosts = mapPost
        mapPosts.push(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    //バリデーション
    if (lat !== 35.6585769 && lng !== 139.7454506 && name !== '') {
      createMaps();
    }
  }, [name])


  const setLatLng = ({lat, lng}) => {
    if (marker) {
      marker.setMap(null);
    }
    const latLng = {
      lat,
      lng,
    };
    setMarker(new maps.Marker({
      map,
      position: latLng,
    }));
      map.panTo(latLng);
  };


  return (
    <div className="home_display">
      <div>
      <p className='home_name'>{name}</p>
      <div className="map_search">
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
        <PrimaryButton onClick={search} label={"検索"}></PrimaryButton>
      </div>
      <div style={{ height: '700px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB31b-oK-BfbhXDcnqUlTLF1RmYF8ClBQY" }}
          defaultCenter={defaultLatLng}
          defaultZoom={16}
          onGoogleApiLoaded={handleApiLoaded}
          onClick={setLatLng}
        />
      </div>
      </div>
      <div>
        <MemoData memos={memos} store_id={storeIds} name={name} category={category}/>
        <QuestionData questions={propedQuestions} callback={categoryChange} category={category} />
      </div>
    </div>
  );
}

export default SinglePageAndApi;

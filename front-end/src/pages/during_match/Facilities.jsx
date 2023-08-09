import React, { useEffect, useState, useRef } from 'react'
import StoreDetail from './StoreDetail'
import EntireSectionMapImg from './img/sectionMap.png';
import map2F from './img/sectionMap_2F.png';
import map3F from './img/sectionMap_3F.png';
import map5F from './img/sectionMap_5F.png';
import KELLY from './img/facilities/켈리로고.png'
import JJAKTAE from './img/facilities/짝태시대 로고.png'
import TTANG from './img/facilities/땅땅치킨로고.png'
import PAPA from './img/facilities/파파존스피자로고.png'
import HAPPY from './img/facilities/해피치즈스마일로고.png'
import JOKSU from './img/facilities/족발슈퍼.png'
import CU from './img/facilities/CU로고.png'
import BUTTER from './img/facilities/버터우드로고.png'
import ALTONG from './img/facilities/알통닭강정로고.png'
import HONG from './img/facilities/리얼키친더홍로고.png'
import MANDU from './img/facilities/한만두로고.png'
import YUBU from './img/facilities/대왕유부초밥로고.png'
import axios from 'axios';
import './styles/Facilities.css';


export default function Facilities() {
  const naviCanvasRef = useRef(null);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [floor, setFloor] = useState(map3F)
  const [category, setCategory] = useState('식음매장')
  const [stores, setStores] = useState()
  const [facilities, setFacilities] = useState()
  const [focusedBody, setFocusedBody] = useState(false)

  function selectFloor(e) {
    console.log(e)
    if (e.target.innerText === '2F') {
      setFloor(map2F)
    }
    else if (e.target.innerText === '3F') {
      setFloor(map3F)
    }
    else if (e.target.innerText === '5F') {
      setFloor(map5F)
    }
  }

  const vertices = [
    {x: 20, y: 150},
    {x: 20, y: 260},
    {x: 140, y: 360},
    {x: 210, y: 360}
    ];

  // const [state, setState] = useState('');
  const handleState = (data) => {
    setDestination(data);
    // setState(data);
    console.log(data);
  }

  const onChangeDeparture = (e) => {
    setDeparture(e.target.value);
  }

  const onChangeDestination = (e) => {
    setDestination(e.target.value);
  }

  const getPosition = (position) => {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    setPosition(lat, lng)
  }

  const setPosition = (lat, lng) => {
    if (35.84157845414607 <= lat && lat <= 35.84183530928126 && 128.6806084931448    <= lng && lng <= 128.68125028657408   ) {
      setCurrentPosition('3-9')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.841433997522735 <= lat && lat <= 35.84157845414607 && 128.6804671036832 <= lng && lng <= 128.6811114803539 ){
      setCurrentPosition('3-7')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.841257004439704 <= lat && lat <= 35.84141262165993 && 128.6803969657282 <= lng && lng <= 128.68086784271355 ){
      setCurrentPosition('3-5')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.84100052759342 <= lat && lat <= 35.841257004439704 && 128.68037218713292 <= lng && lng <= 128.68083103853695  ){
      setCurrentPosition('3-2')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.8407297168639 <= lat && lat <= 35.84100052759342 && 128.6802447345874 <= lng && lng <= 128.6809808490198){
      setCurrentPosition('T3-2')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.84040237812547 <= lat && lat <= 35.8407297168639 && 128.6802931653395 <= lng && lng <= 128.68102321286383){
      setCurrentPosition('TC-2')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.840148084408014 <= lat && lat <= 35.84060048530589 && 128.6804344405443 <= lng && lng <= 128.68094754235815){
      setCurrentPosition('TC-2')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.840056734027634 <= lat && lat <= 35.840148084408014 && 128.68094754235815 <= lng && lng <= 128.68164989674025){
      setCurrentPosition('1-3')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.84009687202578 <= lat && lat <= 35.84065138467286 && 128.68164989674025 <= lng && lng <= 128.68232307201419){
      setCurrentPosition('1-8')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.84088727860394 <= lat && lat <= 35.84065138467286 && 128.682132476393 <= lng && lng <= 128.68267484669371){
      setCurrentPosition('RF-3')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.84065138467286 <= lat && lat <= 35.841235745073256 && 128.68225004602883 <= lng && lng <= 128.68272064701438){
      setCurrentPosition('RF-7')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.841235745073256 <= lat && lat <= 35.8417188936227 && 128.68209186069376 <= lng && lng <= 128.68272064701438){
      setCurrentPosition('RF-10')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.841408326501735 <= lat && lat <= 35.84177084845157 && 128.6818359228813  <= lng && lng <= 128.68209186069376){
      setCurrentPosition('LF-7')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else if(35.84145482233314 <= lat && lat <= 35.84186203939144 && 128.68125028657408  <= lng && lng <= 128.6818359228813){
      setCurrentPosition('LF-3')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else {
      setCurrentPosition('3-1')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    }
  }

  function selectDestination(e) {
    console.log(e)
    
  }

  function categorySelect(e) {
    setCategory(e.target.innerText)
  }

  function focusBody(e) {
    if (e.target.className === 'facilities-body' ||
    e.target.className === 'points-canvas' ||
    e.target.className === 'store-img' ||
    e.target.className === 'to-ar-button') {
      setFocusedBody(true)
    } else {
      setFocusedBody(false)
    }
  }

  function selectStore(e) {
    setDestination(e.target.id)
    console.log(e.target.id)
    console.log(currentPosition)
    
    axios.get(`https://laon.info/api/lions/route/${currentPosition ? currentPosition : "3-1"}/${e.target.id}`)
    .then((res) => {
      console.log(res.data)
    })
    
  }

  function goAR() {
    window.location.href = "/ar/ar.html"
  }

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(getPosition)

    const naviCanvas = naviCanvasRef.current;
    naviCanvas.width = 360;
    naviCanvas.height = 400;
    const ctx = naviCanvas.getContext("2d")

    function calcWaypoints(vertices){
      var waypoints=[];
      for(var i=1;i<vertices.length;i++){
          // if (vertices[i]["type"] === "S"){
          //   setFloorImg(sectionMapImg3F);
          // }

          var pt0=vertices[i-1];
          var pt1=vertices[i];
          var dx=pt1["x"]-pt0["x"];
          var dy=pt1["y"]-pt0["y"];
          for(var j=0;j<100;j++){
              var x=pt0.x+dx*j/100;
              var y=pt0.y+dy*j/100;
              waypoints.push({x:x,y:y});
          }
      }
      return(waypoints);
    }

    var points=calcWaypoints(vertices);

    var t=1;

    animate();

    function animate(){
        if(t<points.length-1){ requestAnimationFrame(animate); }
        ctx.beginPath();
        ctx.moveTo(points[t-1].x,points[t-1].y);
        ctx.lineTo(points[t].x,points[t].y);
        ctx.lineWidth = '12';
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        t++;
    }

  },[])

  return (
    <div className='facilities-container font'>

      <div className='floor-select-button'>
        <button onClick={selectFloor}>2F</button>
        <button onClick={selectFloor}>3F</button>
        <button onClick={selectFloor}>5F</button>
      </div>

      <div className='facilities-body' onClick={focusBody}>
        <div className='facilities-navigation'>
          <img className='facilities-img' src={floor} alt=''/>  
          
          <canvas className='points-canvas' ref={naviCanvasRef}></canvas>
        </div>

        <button className='to-ar-button' onClick={goAR}>AR</button>
        
        <div className={`facilities-select ${focusedBody ? "facilities-select-focus-body" : ""}`} onClick={focusBody}>
          <div className='facilities-search-bar'>
            <div className='facilities-category'>
              <input onClick={focusBody} id="departure" onChange={onChangeDeparture} value={currentPosition ? '현위치 : '+ currentPosition+'구역' : '위치 조회중...'} placeholder='출발지'/>
            </div>
            <div className='facilities-category'>
              <input onClick={focusBody} id="destination" onChange={onChangeDestination} value={destination} placeholder='목적지'/>          
            </div>
          </div>

          <div className={`facilities-item-container ${focusedBody ? "item-container-hide" : ""}`}>

            <div className='category-select'>
              <button onClick={categorySelect} className={`${category === "식음매장" ? "category-show-button" : ""}`}>식음매장1</button>
              <button onClick={categorySelect} className={`${category === "편의시설" ? "category-show-button" : ""}`}>편의시설</button>
            </div>

            <div className={`store-list ${category === "편의시설" ? "store-show" : ""}`}>

                <div 
                  className='facilities-store' 
                  onClick={selectStore}
                >
                  <img className='store-img' id="KELLY" src={KELLY} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="짝태시대" src={JJAKTAE} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="리얼키친홍" src={HONG} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="파파존스피자" src={PAPA} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="CU" src={CU} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="해피치즈스마일" src={HAPPY} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="땅땅치킨" src={TTANG} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="대왕유부초밥" src={YUBU} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  id="전설꼬치"
                  onClick={selectStore}
                >
                  전설꼬치
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="버터우드" src={BUTTER} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="알통닭강정" src={ALTONG} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  id="리얼피그"
                  onClick={selectStore}
                >
                  리얼피그
                </div>
                <div 
                  className='facilities-store'
                  id="5직떡볶이"
                  onClick={selectStore}
                >
                  5직떡볶이
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="족발슈퍼" src={JOKSU} alt="" />
                </div>
                <div 
                  className='facilities-store'
                  onClick={selectStore}
                >
                  <img className='store-img' id="한만두" src={MANDU} alt="" />
                </div>
            </div>

            <div className={`facility-list ${category === "식음매장" ? "facility-show" : ""}`}>
              <div 
                className='facilities-store'
                id="여자화장실"
                onClick={selectStore}
              >
                여자화장실
              </div>
              <div 
                className='facilities-store'
                id="남자화장실"
                onClick={selectStore}
              >
                남자화장실
              </div>
              <div 
                className='facilities-store'
                id="여자 장애인 화장실"
                onClick={selectStore}
              >
                여자 장애인 화장실
              </div>
              <div 
                className='facilities-store'
                id="남자 장애인 화장실"
                onClick={selectStore}
              >
                남자 장애인 화장실
              </div>
              <div 
                className='facilities-store'
                id="블루샷"
                onClick={selectStore}
              >
                블루샷
              </div>
              <div 
                className='facilities-store'
                id="수유실"
                onClick={selectStore}
              >
                수유실
              </div>
              <div 
                className='facilities-store'
                id="흡연실"
                onClick={selectStore}
              >
                흡연실
              </div>
              <div 
                className='facilities-store'
                id="쓰레기통"
                onClick={selectStore}
              >
                쓰레기통
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
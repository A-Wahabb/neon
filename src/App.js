import { useEffect, useState } from 'react';
import './ColorStyle.css';
import "./fontImport.css"
import './checkbox.css'
import Navbar from './Navbar'
import HomePage from './Routes/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DesignProofPage from './Routes/DesignProofPage';
import neonbackground1 from './Assets/Imgs/neonbackground1.png'
import neonbackground2 from './Assets/Imgs/neonbackground2.png'
import neonbackground3 from './Assets/Imgs/neonbackground3.png'
import neonbackground4 from './Assets/Imgs/neonbackground4.png'
import neonbackground5 from './Assets/Imgs/neonbackground5.png'
import Footer from './atom/Footer';



function App() {
  const [UserInput, setUserInput] = useState('Type Here')
  const [FontFamily, setFontFamily] = useState('Grayscale-signature')
  const [Color, setColor] = useState('color50')
  const [BackgroundColor, setBackgroundColor] = useState('#000000')
  const [FontSize, setFontSize] = useState('95')
  const [Selction, setSelction] = useState('TEXT')
  const [Image, setImage] = useState('TEXT')
  const [ShowShadow, setShowShadow] = useState(true)
  const [sizeParams, setsizeParams] = useState(
    {
      size: "Small",
      price: "110",
      length: "10",
      height: "",
    }
  )
  const [neonbackground, setneonbackground] = useState(neonbackground1)
  const [Place, setPlace] = useState('Indoor')
  const [Adptr, setAdptr] = useState('')
  const [AcrylicBkgrnd, setAcrylicBkgrnd] = useState('')
  const [FontList, setFontList] = useState([
    'Alexa',
    'Barcelona',
    'Amsterdam',
    'Venetian',
    'Amanda',
    'Austin',
    'Beachfront',
    'Chelsea',
    'Freehand',
    'Neonscript',
    'Northshore',
    'Photogenic',
    'Royalty',
    'Rocket',
    'Signature',
    'Sorrento',
    'WildScript',
    'Avante',
    'Buttercup',
    'ClassicType',
    'Typewriter',
    'Melbourne',
    'NeoTokyo',
    'Monaco',
    'Bellview',
    'Marquee',
    'Mayfair',
    'NeonGlow',
    'NeonLite',
    'Nevada',
    'Neontrace',
    'Vintage',
    'NewCursive',
  ])
  //   const [modalIsOpen, setIsOpen] = React.useState(false);

  //   function openModal() {
  //       setIsOpen(true);
  //   }

  //   function closeModal() {
  //     setIsOpen(false);
  // }

  const neonbackgroundStyle = {
    backgroundImage: neonbackground
  }


  const mystyle = {
    // fontSize: `${FontSize}px`,
    fontFamily: FontFamily,
    boxShadow: 'unset',
    // paddingTop: '50px'
  };
  const BackGroundWall = {
    // backgroundColor: BackgroundColor,
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '10px',
    borderRadius: '7%',
  };

  const settingDetails = (a, b, c, d) => {
    setsizeParams({
      size: a,
      price: b,
      length: c,
      height: d
    })
  }



  // window.fitText(document.getElementById("responsiveText"),3);


  return (
    <div className="App">

      <Router>
        <Navbar />
        <div className='position-fixed bottom_right shadow_'>
          <svg width="36" height="36" viewBox="0 0 36 36"><path fill="white" d="M1 17.99C1 8.51488 8.42339 1.5 18 1.5C27.5766 1.5 35 8.51488 35 17.99C35 27.4651 27.5766 34.48 18 34.48C16.2799 34.48 14.6296 34.2528 13.079 33.8264C12.7776 33.7435 12.4571 33.767 12.171 33.8933L8.79679 35.3828C7.91415 35.7724 6.91779 35.1446 6.88821 34.1803L6.79564 31.156C6.78425 30.7836 6.61663 30.4352 6.33893 30.1868C3.03116 27.2287 1 22.9461 1 17.99ZM12.7854 14.8897L7.79161 22.8124C7.31238 23.5727 8.24695 24.4295 8.96291 23.8862L14.327 19.8152C14.6899 19.5398 15.1913 19.5384 15.5557 19.8116L19.5276 22.7905C20.7193 23.6845 22.4204 23.3706 23.2148 22.1103L28.2085 14.1875C28.6877 13.4272 27.7531 12.5704 27.0371 13.1137L21.673 17.1847C21.3102 17.4601 20.8088 17.4616 20.4444 17.1882L16.4726 14.2094C15.2807 13.3155 13.5797 13.6293 12.7854 14.8897Z"></path></svg>
        </div>
        <Routes>
          <Route path="/" element={<HomePage
            UserInput={UserInput}
            Selction={Selction}
            setSelction={setSelction}
            setUserInput={setUserInput}
            FontList={FontList}
            FontFamily={FontFamily}
            setFontFamily={setFontFamily}
            setColor={setColor}
            Color={Color}
            Place={Place}
            setPlace={setPlace}
            Adptr={Adptr}
            setAdptr={setAdptr}
            AcrylicBkgrnd={AcrylicBkgrnd}
            setAcrylicBkgrnd={setAcrylicBkgrnd}
            sizeParams={sizeParams}
            ShowShadow={ShowShadow}
            setShowShadow={setShowShadow}
            BackGroundWall={BackGroundWall}
            setImage={setImage}
            mystyle={mystyle}
            settingDetails={settingDetails}
            neonbackground={neonbackground}
            setneonbackground={setneonbackground}
            neonbackground1={neonbackground1}
            neonbackground2={neonbackground2}
            neonbackground3={neonbackground3}
            neonbackground4={neonbackground4}
            neonbackground5={neonbackground5}
          />} />
          <Route path="/design-proof" element={<DesignProofPage
            AcrylicBkgrnd={AcrylicBkgrnd}
            sizeParams={sizeParams}
            Color={Color}
            FontFamily={FontFamily}
            UserInput={UserInput}
            ShowShadow={ShowShadow}
            mystyle={mystyle}
            FontSize={FontSize}
            Place={Place}
            neonbackground={neonbackground}
            setneonbackground={setneonbackground}
          />} />
        </Routes>
        <Footer />
      </Router >

    </div >
  );
}

export default App;

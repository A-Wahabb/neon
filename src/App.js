import { useState } from 'react';
import './ColorStyle.css';
import "./fontImport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faAirFreshener } from '@fortawesome/free-solid-svg-icons'
import BannerSlider from './atom/Banner';
import ColorSlction from './atom/ColorSlction';
import FontSlction from './atom/FontSlction';


function App() {
  const [UserInput, setUserInput] = useState('Type Here')
  const [FontFamily, setFontFamily] = useState('Grayscale-signature')
  const [Color, setColor] = useState('color50')
  const [BackgroundColor, setBackgroundColor] = useState('#000000')
  const [FontSize, setFontSize] = useState('95')
  const [Selction, setSelction] = useState('TEXT')
  const [Image, setImage] = useState('TEXT')
  const [ShowShadow, setShowShadow] = useState(true)
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



  const mystyle = {
    fontSize: `${FontSize}px`,
    fontFamily: FontFamily,
    boxShadow: 'unset',
  };
  const BackGroundWall = {
    // backgroundColor: BackgroundColor,
    backgroundImage: `url(${Image})`,
    backgroundSize: '100 % 100 %',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };




  return (
    <div className="App">
      <div className='container pt-5'>
        <nav className="navbar navbar-light bg-light rounded-pill">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Neon Sign</a>
          </div>
        </nav>

        <div className='row pt-5 main-bg'>

          <p className="tc-blue fw-600 fs30 text-center">Create Your Own Custom Neon</p>
          <p className="tc-pink fw-400 fs22 text-center" >Your own creation, handmade from light.</p>

          <div className="row m-auto">
            <div className="col-md-5">
              <div className="Selection_Box">
                <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                  <li className="w-50">
                    <input
                      type="radio"
                      id="SlctTEXT"
                      name="Selction"
                      value="TEXT"
                      defaultChecked={Selction == "TEXT"}
                      onChange={(e) => { setSelction('TEXT') }}
                    />
                    <label htmlFor="SlctTEXT" className="py-1 mb-0">
                      TEXT
                    </label>
                  </li>
                  <li className="w-50">
                    <input
                      type="radio"
                      id="SlctFONT"
                      name="Selction"
                      value="FONT"
                      defaultChecked={Selction == "FONT"}
                      onChange={(e) => { setSelction('FONT') }}
                    />
                    <label htmlFor="SlctFONT" className="py-1 mb-0">
                      FONT
                    </label>
                  </li>
                  <li className="w-50">
                    <input
                      type="radio"
                      id="SlctCOLOR"
                      name="Selction"
                      value="COLOR"
                      defaultChecked={Selction == "COLOR"}
                      onChange={(e) => { setSelction('COLOR') }}
                    />
                    <label htmlFor="SlctCOLOR" className="py-1 mb-0">
                      COLOR
                    </label>
                  </li>
                </ul>
                {Selction === 'TEXT' && <>
                  <div className="px-3 mt-3">
                    <textarea
                      className='inputText w-100 py-3'
                      placeholder='ENTER TEXT HERE &#10;Press Enter/Return for a new line'
                      name='UserInput'
                      onChange={(e) => setUserInput(e.target.value)} />

                  </div>

                </>}
                {Selction === 'FONT' && <>
                  <p className="tc-grey fw-600 text-center fs14">CHOOSE FONT</p>

                  <div className="row w-100 mx-auto g-2 FontsCollection">
                    {FontList.map(each => (

                      <FontSlction
                        FontFamily={FontFamily}
                        name={each}
                        setFontFamily={setFontFamily} />
                    ))}
                    {/* <div className={`col-6 col-sm-4 col-md-3  ${FontFamily == 'Arkania-regular' && 'active'}`} >
                      <p className={`roundbdr mb-0 text-center text-black cursorPointer Arkania-regular   `} onClick={() => setFontFamily('Arkania-regular')}>Font Style</p>
                    </div>
                    <div className={`col-6 col-sm-4 col-md-3  ${FontFamily == 'Grayscale-signature' && 'active'}`} >
                      <p className={`roundbdr mb-0 text-center text-black cursorPointer GrayScaleSign   `} onClick={() => setFontFamily('Grayscale-signature')}>Font Style</p>
                    </div>
                    <div className={`col-6 col-sm-4 col-md-3  ${FontFamily == 'Alisking' && 'active'}`} >
                      <p className={`roundbdr mb-0 text-center text-black cursorPointer Alisking  `} onClick={() => setFontFamily('Alisking')}>Font Style </p>
                    </div>
                    <div className={`col-6 col-sm-4 col-md-3  ${FontFamily == 'Atyla-demo' && 'active'}`} >
                      <p className={`roundbdr mb-0 text-center text-black cursorPointer Atyla-demo   `} onClick={() => setFontFamily('Atyla-demo')}>Font Style</p>
                    </div>
                    <div className={`col-6 col-sm-4 col-md-3  ${FontFamily == 'Hastron' && 'active'}`} >
                      <p className={`roundbdr mb-0 text-center text-black cursorPointer Hastron  `} onClick={() => setFontFamily('Hastron')}>Font Style</p>
                    </div> */}
                  </div>
                </>
                }

                {Selction === 'COLOR' && <>
                  <div className="d-flex flex-wrap " >
                    <ColorSlction
                      name='Warm White'
                      Color={Color}
                      setColor={setColor}
                      Code={'color10'} />

                    <ColorSlction
                      name='White'
                      Color={Color}
                      setColor={setColor}
                      Code={'color20'} />

                    <ColorSlction
                      name='Lemon Yellow'
                      Color={Color}
                      setColor={setColor}
                      Code={'color30'} />

                    <ColorSlction
                      name='Golden Yellow'
                      Color={Color}
                      setColor={setColor}
                      Code={'color40'} />

                    <ColorSlction
                      name='Orange'
                      Color={Color}
                      setColor={setColor}
                      Code={'color50'} />

                    <ColorSlction
                      name='Light Red'
                      Color={Color}
                      setColor={setColor}
                      Code={'color60'} />

                    <ColorSlction
                      name='Red'
                      Color={Color}
                      setColor={setColor}
                      Code={'color70'} />

                    <ColorSlction
                      name='Pink'
                      Color={Color}
                      setColor={setColor}
                      Code={'color80'} />

                    <ColorSlction
                      name='Cotton Candy'
                      Color={Color}
                      setColor={setColor}
                      Code={'color90'} />

                    <ColorSlction
                      name='Deep Pink'
                      Color={Color}
                      setColor={setColor}
                      Code={'color100'} />

                    <ColorSlction
                      name='Purple'
                      Color={Color}
                      setColor={setColor}
                      Code={'color110'} />

                    <ColorSlction
                      name='Deep Blue'
                      Color={Color}
                      setColor={setColor}
                      Code={'color120'} />

                    <ColorSlction
                      name='Electric Blue'
                      Color={Color}
                      setColor={setColor}
                      Code={'color130'} />

                    <ColorSlction
                      name='Ice Blue'
                      Color={Color}
                      setColor={setColor}
                      Code={'color140'} />

                    <ColorSlction
                      name='Tropical Blue'
                      Color={Color}
                      setColor={setColor}
                      Code={'color150'} />

                    <ColorSlction
                      name='Mint'
                      Color={Color}
                      setColor={setColor}
                      Code={'color160'} />

                    <ColorSlction
                      name='Green'
                      Color={Color}
                      setColor={setColor}
                      Code={'color170'} />

                    <ColorSlction
                      name='Deep Green'
                      Color={Color}
                      setColor={setColor}
                      Code={'color180'} />


                  </div>
                </>}

              </div>
            </div>
            <div className="col-md-7 Output">
              <div className="position-absolute">
                <div className="switch">
                  <input type="checkbox" name="toggle" defaultChecked={ShowShadow} onChange={(e) => { setShowShadow(e.target.checked) }} />
                  <label for="toggle">
                    <i className="bulb">
                      <span className="bulb-center"></span>
                      <span className="filament-1"></span>
                      <span className="filament-2"></span>
                      <span className="reflections">
                        <span></span>
                      </span>
                      <span className="sparks">
                        <i className="spark1"></i>
                        <i className="spark2"></i>
                        <i className="spark3"></i>
                        <i className="spark4"></i>
                      </span>
                    </i>
                  </label>
                </div>
              </div>
              <div className='w-100 h-100 position-relative'>
                <div className="d-flex justify-content-center pt-5 w-100 h-100" style={BackGroundWall} >
                  <p className={`bg-transparent ${Color} ${ShowShadow ? 'text-white active' : 'text'}`} style={mystyle}>{UserInput || 'Type here'}</p>
                </div>
                <BannerSlider setImage={setImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

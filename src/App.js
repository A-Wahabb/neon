import { useState } from 'react';
import './ColorStyle.css';
import "./fontImport.css"
import './checkbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faAirFreshener } from '@fortawesome/free-solid-svg-icons'
import BannerSlider from './atom/Banner';
import ColorSlction from './atom/ColorSlction';
import FontSlction from './atom/FontSlction';
import Options from './atom/Options';
import videoImg from '../src/Assets/Imgs/videoimage.jpg'
import OneToFive from '../src/Assets/Imgs/OneToFive.jpg'
import SignDiagramUSA from '../src/Assets/Imgs/SignDiagramUSA.png'
import icondesign from '../src/Assets/Imgs/icondesign.png'
import iconadapter from '../src/Assets/Imgs/iconadapter.png'
import iconshipping from '../src/Assets/Imgs/iconshipping.png'
import iconinstall from '../src/Assets/Imgs/iconinstall.png'
import warranty from '../src/Assets/Imgs/warranty.jpg'
import iconremote from '../src/Assets/Imgs/iconremote.png'
import iconpower from '../src/Assets/Imgs/iconpower.png'
import iconstrong from '../src/Assets/Imgs/iconstrong.png'
import facebookLogo from '../src/Assets/Imgs/facebook-logo.png'
import instagramLogo from '../src/Assets/Imgs/instagram-logo.png'


function App() {
  const [UserInput, setUserInput] = useState('Type Here')
  const [FontFamily, setFontFamily] = useState('Grayscale-signature')
  const [Color, setColor] = useState('color50')
  const [BackgroundColor, setBackgroundColor] = useState('#000000')
  const [FontSize, setFontSize] = useState('95')
  const [Selction, setSelction] = useState('TEXT')
  const [Image, setImage] = useState('TEXT')
  const [ShowShadow, setShowShadow] = useState(true)
  const [slctdSize, setslctdSize] = useState('Small')
  const [Place, setPlace] = useState('Indoor')
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

                <Options
                  slctdSize={slctdSize}
                  setslctdSize={setslctdSize}
                />

                <div className="row p-3 m-auto">
                  <div className="col-sm-6 p-2">

                    <div className={`h-100 align-items-center d-flex justify-content-center p-2 cursorPointer size_box ${Place == 'Indoor' && 'active'} `} onClick={() => { setPlace('Indoor') }}>
                      <div>
                        <p className="text-center fw-600 fs18 text-black mb-0">Indoor</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 p-2">

                    <div className={`h-100 align-items-center d-flex justify-content-center p-2 cursorPointer size_box ${Place == 'IP67 Waterproof Technology' && 'active'} `} onClick={() => { setPlace('IP67 Waterproof Technology') }}>
                      <div>
                        <p className="text-center fw-600 fs18 text-black">IP67 Waterproof Technology*</p>
                        <p className="text-center fw-600 fs18 text-black mb-0">+ $68</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-grey fs11" >*Custom Neon® now offers a range of IP67 Waterproof rated Outdoor Signs. These can be made in the same range of colors as our indoor signs, and offer an ideal solution for outdoor use. See Photos</p>

                </div>

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
      <div className='containerImg'>
        <div className='parallax__container'>
          <div className='parallax--bg bg1 _bg'></div>
        </div>
      </div>
      <div className='my-5 container'>
        <h1 className="tc-pink text-center">Create a Custom Neon® sign in 5 easy steps</h1>
        <div className='mx-auto text-center my-4'>
          <img className='my-2' src={videoImg} alt="" />
          <img className='my-2' className='container' src={OneToFive} alt="" />
        </div>
      </div>
      <div className='containerImg'>
        <div className='parallax__container'>
          <div className='parallax--bg bg2 _bg'></div>
        </div>
      </div>
      <div className='my-5 container'>
        <h1 className="tc-pink text-center">Bring your Imagination to Life</h1>
        <h3 className="text-center">MAKE YOUR OWN UNIQUE SIGN WITH OUR ONLINE DESIGN TOOL</h3>
        <div className='row my-4 gx-3 gy-3'>
          <div className='col-md-6'>
            <h3 className="w-75 tc-blue">Create Custom Made Neon Signs</h3>
            <span className="w-75 tc-grey fs-3">LED Neon Sign Maker</span>
            <p>Create your own neon sign online using our custom neon sign maker! We have created an easy tool to help you create your own custom neon sign and to give you a visual mockup so you can see what it's going to look like before you order.</p>
          </div>
          <div className='col-md-6'>
            <h3 className="w-75 tc-blue">Want an Image or Logo?</h3>
            <span className="w-75 tc-grey fs-3"></span>
            <p>We can do that too! We can create virtually anything you need.
              to go through to a form that will let you upload an image with your logo, company name, tag line or any artwork you would like to turn into a stylish glowing sign.
            </p>
          </div>
          <div className='col-md-6'>
            <h3 className="w-75 tc-blue">Custom Neon® Light Design</h3>
            <span className="w-75 tc-grey fs-3"></span>
            <p>We specialize in custom LED neon signs, personalized neon signs, neon signs for weddings, business and restaurant neon signs, custom neon sidewalk signs, bar signs, and aesthetic neon artwork for custom home décor. Our custom neon installations light up homes, offices, stores, bars, cafes, shopping malls, weddings, parties and events around the world.</p>
            <p>Costing less than the price of real glass neon signs, LED neon signs are easily portable, durable, and safe. Best of all, LED neons can be designed in a wide range of colors and fonts, making it easy to design unique, customized and personalized neon signs. Whether you're after a modern or replica vintage neon sign we've got you covered!</p>
          </div>
          <div className='col-md-6'>
            <h3 className="w-75 tc-blue">Neon Sign Design</h3>
            <span className="w-75 tc-grey fs-3"></span>
            <p>If you can't find a font you like, don't worry, we can replicate almost any style of font, this includes handwriting, images, and logos.</p>
            <p>If you are not able to design your ideal custom neon using our neon sign maker online please contact us for a custom quote, including your ideas, requirements and budget. We love to see our neon light signs brought to life so knowing your budget will allow us to tailor our quote to best suit your requirements.</p>
          </div>
          <div className='col-md-6'>
            <h3 className="w-75 tc-blue">How to Make Your Own Neon Sign</h3>
            <span className="w-75 tc-grey fs-3"></span>
            <p>No matter what you want it to say or what it's for, you can use our clever online neon sign maker to design your very own LED neon light. In five quick steps you'll be the proud owner of a totally unique piece of aesthetic neon wall art, wedding name sign, neon beer sign or cute neon lamp for your baby's bedroom decor.</p>
          </div>
          <div className='col-md-6'>
            <h3 className="w-75 tc-blue">Neon Sign Maker Online</h3>
            <span className="w-75 tc-grey fs-3"></span>
            <p>Create your own neon light using our online neon sign maker. To design your own custom neon word light choose a font, color, and size. Try out as many combinations as you want. You can even view your design on a number of backgrounds to give you a really good idea of how it will look IRL. When you're happy with your custom options just add it to cart. In just a few weeks you'll have a handmade, personalized neon light design. If you can't do what you want with the custom sign tool ask us for a custom quote.</p>
          </div>
        </div>
        <div className='col-12 text-center'>
          <img src={SignDiagramUSA} alt="" />
        </div>
      </div>
      <div className='containerImg'>
        <div className='parallax__container'>
          <div className='parallax--bg bg3 _bg'></div>
        </div>
      </div>
      <div className='row container mx-auto my-5 gy-4'>
        <div className='col-md-6 col-lg-3'>
          <div className='card text-center'>
            <img src={icondesign} className="mb-2 w-50 mx-auto" alt="" />
            <h4 >Customized Neon Signs</h4>
            <p >All of our neon light signs are custom designed by us, and can be altered to your specifications, size and colors. We can make any neon sign you want, in any fonts and a wide selection of colors. </p>
          </div>
        </div>
        <div className='col-md-6 col-lg-3'>
          <div className='card text-center'>
            <img src={iconadapter} className="mb-2 w-50 mx-auto" alt="" />
            <h4 >Adapter Included</h4>
            <p >Your new LED neon comes with a 4.9 ft transparent cord which plugs into a certified adapter (if you need an adapter for another country, ask when checking out). The adapter has an additional 3-6 ft of cable that plugs into the socket.</p>
          </div>
        </div>
        <div className='col-md-6 col-lg-3'>
          <div className='card text-center'>
            <img src={iconshipping} className="mb-2 w-50 mx-auto" alt="" />
            <h4 >Worldwide Shipping</h4>
            <p >Standard orders take 3-5 weeks*, including production and shipping. 'Rush' orders take 2-3 weeks*, including production and shipping to addresses in the USA and Canada. Please choose the 'Rush My Order' option at checkout, and let us know the date by which you need your sign to arrive. </p>
          </div>
        </div>
        <div className='col-md-6 col-lg-3'>
          <div className='card text-center'>
            <img src={iconinstall} className="mb-2 w-50 mx-auto" alt="" />
            <h4 >Easy to Install</h4>
            <p >Our LED Neon signs are mounted on high quality, clear acrylic backboards, stands or boxes. Backboards feature pre-drilled holes for easy wall mounting, and are ready for mounting, right out of the box.</p>
          </div>
        </div>
        <div className='col-md-6 col-lg-3'>
          <div className='card text-center'>
            <img src={warranty} className="mb-2 w-50 mx-auto" alt="" />
            <h4 >24 Months Warranty</h4>
            <p >We offer the latest LED neon flex technology which is both stronger &amp; lighter than glass neon. All of our signs come with a 24-month manufacturer warranty covering faulty items. </p>
          </div>
        </div>
        <div className='col-md-6 col-lg-3'>
          <div className='card text-center'>
            <img src={iconremote} className="mb-2 w-50 mx-auto" alt="" />
            <h4 >Remote Control Available</h4>
            <p >Switch ON/OFF and pick from 10 brightness settings. The LED neon lights can be set to flash with adjustable speeds. (Optional/extra cost on some models)</p>
          </div>
        </div>
        <div className='col-md-6 col-lg-3'>
          <div className='card text-center'>
            <img src={iconpower} className="mb-2 w-50 mx-auto" alt="" />
            <h4 >Low Energy, High Brightness</h4>
            <p >Our LED neon signs are both economical and ecologically friendly. They have low energy consumption and a 100,000+ hours lifespan</p>
          </div>
        </div>
        <div className='col-md-6 col-lg-3'>
          <div className='card text-center'>
            <img src={iconstrong} className="mb-2 w-50 mx-auto" alt="" />
            <h4 >Strong And Powerful</h4>
            <p >Our LED neons signs come in a range of bright, eye-catching colors. The energy-efficient technology ensures a powerful light that lasts for years.</p>
          </div>
        </div>
      </div>
      <div className='py-3 faq_bg'>
        <div className='container text-center my-5'>
          <h1 className='tc-blue fw-600 my-5'>FAQ</h1>
          <div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item bg-transparent">
                <h2 class="accordion-header fw-bold" id="headingOne">
                  <button class="accordion-button  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How Much Does a Custom Neon® Sign Cost?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    The price for custom LED neon signs start at $112 for a sign with two letters. Our handmade LED neon signs, lamps and wall decor are affordable and we are very competitive on price! In addition to great prices, our experienced team also offers unparalleled customer support, from the design stage through to delivery and aftercare.
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent">
                <h2 class="accordion-header fw-bold" id="headingTwo">
                  <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Our Design Service
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start">
                    We are happy to offer a free design service to our customers, providing one or more designs for your approval, at no extra charge. If you have a change of mind and wish to amend or cancel your order before the sign goes into production we will happily offer a partial or full refund. Once a custom sign order is approved and has gone into production we are no longer able to offer a refund. Please note that a custom sign is automatically approved if "YES" is selected when ordering.
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent">
                <h2 class="accordion-header fw-bold" id="headingThree">
                  <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Why Buy a Neon Light Sign from Custom Neon®?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start">
                    <p>All of our LED neon light signs are handmade from LED neon light tubes that are kid-safe and both economical and ecologically friendly! Some great reasons to choose a custom LED sign from us are:</p>
                    <ul>
                      <li>Affordable - We keep our prices as low as possible while offering a high quality product.</li>
                      <li>24 Months Warranty - All of our indoor and outdoor signs come with a 24-month manufacturer warranty covering faulty items.</li>
                      <li>Durable - We offer the latest neon flex technology which is stronger and lighter than vintage style glass neon.</li>
                      <li>Energy Efficient - Our LED neon light signs are both economical and ecologically friendly, with low energy consumption and 100,000+ hours lifespan.</li>
                      <li>Safe - Our bespoke neon signs are made from LED light tubes that do not get hot and contain no breakable glass.</li>
                      <li>Easy to Install - All of the Custom Neon light signs come with pre-drilled holes for easy hanging &amp; wall mounting.</li>
                      <li>Low Maintenance - Custom Neon signs are very hard-wearing and easy to clean.</li>
                      <li>Lightweight - Our custom designed signs are lightweight and portable, making them perfect as LED neon signs for weddings, events, home or business, or truly unique gift ideas.</li>
                      <li>Full Control - The remote control has an on/off switch and 10 brightness settings. Your neon light sign can be set to flash with adjustable speeds.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent">
                <h2 class="accordion-header fw-bold" id="headingfour">
                  <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                    What Neon Light Colors Can I Choose?
                  </button>
                </h2>
                <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start">
                    We have a total of 18 colors to choose from. Eight of these are white when the sign is turned off and colored when the sign is switched on. The remaining ten colors come with a colored tube, so the sign shows its color even when it's turned off.
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent">
                <h2 class="accordion-header fw-bold" id="headingfive">
                  <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                    How Big Can My Custom-made Neon Be?
                  </button>
                </h2>
                <div id="collapsefive" class="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start">
                    <p>Our LED Neon is available in 8/9/10mm thickness, and the minimum letter height is approximately 3-4 inches for simple/non-cursive fonts and 4-5 inches for cursive fonts.</p>
                    <p>If your custom order is for a sign larger than 7ft 8in by 3ft 11in it will be made on two or more backboards that can be easily arranged together. Doing this keeps the signs safer during shipping and allows us to deliver the best possible price for you.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent">
                <h2 class="accordion-header fw-bold" id="headingsix">
                  <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                    What are the Backboard Options?
                  </button>
                </h2>
                <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start">
                    <p>Custom Neon signs are mounted on a clear, acrylic backboard. We offer two standard backing options at no extra cost.</p>
                    <ul>
                      <li>For script/cursive fonts - we recommend the cut around / contoured acrylic backing.</li>
                      <li>For simple/block fonts - we recommend the rectangle acrylic backing.</li>
                    </ul>
                    <p>We also offer a cut-to-letter acrylic backboard option, as well as acrylic stands and boxes. The cost for these options is shown on the tool. </p>
                    <p>Backboard options include clear, black, white, colored, mirrored, glitter and more. If you would like a backboard that is not listed above please contact us for a quote.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer-middle my-auto d-flex flex-container'>
        <div className='row container mx-auto gy-1'>
          <div className='col-6 col-md-4 text-white'>
            About us
          </div>
          <div className='col-6 col-md-4 text-white'>
            FAQ
          </div>
          <div className='col-6 col-md-4 text-white'>
            Contact info
          </div>
          <div className='col-6 col-md-4 text-white'>
            Contact us
          </div>
          <div className='col-6 col-md-4 text-white'>
            Privacy
          </div>
          <div className='col-6 col-md-4 text-white'>
            info@customneon.com
          </div>
          <div className='col-6 col-md-4 text-white'>
            Advanced search
          </div>
          <div className='col-6 col-md-4 text-white'>
            Returns Policy
          </div>
          <div className='col-6 col-md-4 text-white'>
            <div className='d-inline-flex'>
              <img src={facebookLogo} alt="" />
              <img src={instagramLogo} alt="" className='ms-2'/>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;
import React from 'react'
import SignDiagramUSA from '../Assets/Imgs/SignDiagramUSA.png'
import neonbackground1 from '../Assets/Imgs/neonbackground1.png'
import Textfit from 'react-textfit'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';




function DesignProofPage(props) {
  const history = useNavigate();

  const SendWhatsAppMessage = () => {
    let num = "923314250294"
    let message = `*Sign*%0a%0a${props.UserInput.replace('\n', '%0a')}%0aColor:${props.Color}%0aFont: ${props.FontFamily}%0aMaterial: ${props.Place}%0a%0a%0a*Dimension*%0a%0aLength: ${props.sizeParams.length}"%0aHeight: ${props.sizeParams.height}" *%0a%0a%0a*BACKBOARD*%0a%0aBackboard color: ${props.AcrylicBkgrnd}%0aCut Around Acrylic: Ready to hang or wall mount.`

    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    let url = ""
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      // return "tablet";
      alert('tab')

      url = ` https://api.whatsapp.com/send/?phone=${num}&text=${message}&type=phone_number`
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      alert('MObile')
      // return "mobile";
      url = ` https://api.whatsapp.com/send/?phone=${num}&text=${message}&type=phone_number`
    }
    // return "desktop";
    else {
      alert('Desktop')

      url = ` https://web.whatsapp.com/send/?phone=${num}&text=${message}&type=phone_number`
    }
    console.log(props.UserInput)
    window.open(url)
  }

  useEffect(() => {
    if (props.UserInput == 'Type Here') {
      history('/')
    }
  }, [])


  return (

    <div >
      <div className='text-center my-3'>
        <h1 className='fw-bold tc-pink'>D E S I G N <span className='ms-3'> </span> P R O O F</h1>
        <h3 className=''>PLEASE CHECK AND CONFIRM YOUR DESIGN</h3>
        <div className='col-md-4 mx-auto py-3'>
          <div className='divSize'>
            <div className=' mx-auto my-auto'>
              <Textfit className='viewContainer mx-auto mt-3' mode="multi">
                {props.UserInput ? props.UserInput.split("\n").map((l, i) =>
                  <p className={`bg-transparent design_proof ${props.Color} ${props.ShowShadow ? 'text-white active' : 'text'}`} style={props.mystyle} key={i}>{l}</p>
                ) :
                  <p className={`bg-transparent design_proof ${props.Color} ${props.ShowShadow ? 'text-white active' : 'text'}`} style={props.mystyle} >Type Here</p>}
              </Textfit>
            </div>
          </div>
        </div>
      </div>
      <div className='container row mx-auto my-5 g-3'>
        <div className='col-md-6'>
          <div className=''>
            <h3 className='text-center tc-blue'>YOUR SIGN</h3>
            <ul >
              <li>{props.UserInput}</li>
              <li>{props.Color}</li>
              <li>{props.FontFamily}</li>
              {props.place == 'IP67 Waterproof Technology' ?
                <li>IP67 Waterproof Technology</li>
                :
                <li>Material: High-quality LED neon flex - Indoor use</li>
              }
            </ul>
          </div>
          <div className='my-3'>
            <h3 class="text-center tc-blue my-3">DIMENSIONS</h3>
            <ul>
              <li>Length:{props.sizeParams.length}"</li>
              <li>Height:{props.sizeParams.height}" *</li>
              <li>*The sign will be custom made and size may vary slightly.</li>
              <li>The backboard adds a margin of about 0.8" around the text.</li>
            </ul>
          </div>
          <div className='my-3'>
            <h3 class="text-center tc-blue my-3">BACKBOARD</h3>
            <div className="text-center" style={{
              background: '#f5f5f5', padding: '10px 0',
              borderRadius: '15px',
              margin: '10px',
            }}>
              <img src={props.neonbackground} width={220} />

            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <h3 className='text-center tc-blue'>WHAT'S IN THE BOX?</h3>
          <img src={SignDiagramUSA} width='100%' />
          <div className='my-4 w-75'>
            <p>Electrical Plug: USA / Canada</p>
            <p>Some signs may require multiple power cords, which will be provided if necessary.</p>
            <div class="form-check">
              <input class="form-check-input fs-5" type="radio" name="mountingType" id="mountingType1" />
              <label class="form-check-label fs-5 fw-600 d-inline-flex" for="mountingType1">
                Wall Mounting Kit
                <div>
                  <select class="form-control form-control-sm  px-3 mx-3 ">
                    <option>Silver $15</option>
                    <option>Gold $17</option>
                    <option>Black $17</option>
                  </select>
                </div>
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input fs-5" type="radio" name="mountingType" id="mountingType2" checked />
              <label class="form-check-label fs-5 fw-600" for="mountingType2">
                Sign Hanging Kit
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='container row mx-auto mb-5'>
        <h1 className='tc-pink fw bold text-center'>I approve the design for production</h1>
        <h2 className='tc-blue fw bold text-center'>(You can add comments/requests when checking out)</h2>
        <div className='row my-3 g-3'>
          <div className='col-md-6'>
            <div class="form-check">
              <input class="form-check-input fs-5" type="radio" name="AcceptConditions" id="AcceptConditions3" />
              <label class="form-check-label fs-5 fw-600" for="AcceptConditions3">
                <p className='mb-0'><span className='fw-bold tc-pink'>YES</span> I have checked and approve my text, size, color, font and backboard options. </p>
                <p>	Production turnaround time can start now. Make my sign!</p>
              </label>
            </div>
          </div>
          <div className='col-md-6'>
            <div class="form-check">
              <input class="form-check-input fs-5" type="radio" name="AcceptConditions" id="AcceptConditions3" checked />
              <label class="form-check-label fs-5 fw-600" for="AcceptConditions3">
                <p>
                  <span className='fw-bold tc-pink'>NO</span>
                  I need further assistance. The turnaround time will not start yet.  Custom Neon will email you to finalize details (please check junk folder). If we don't hear back within 14 days, we will start manufacturing your order so you receive it in a timely manner.
                </p>
              </label>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button className='py-1 w-25 addtocart' onClick={SendWhatsAppMessage}>Send WhatsApp</button>
        </div>
      </div>
    </div>

  )
}

export default DesignProofPage
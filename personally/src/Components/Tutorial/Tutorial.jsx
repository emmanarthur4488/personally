import React from 'react'
import './tutorial.css'
import Hero3 from '/src/IMG/Hero3.png'
import Digest13 from '/src/IMG/digest13.png'
import Digest14 from '/src/IMG/digest14.png'
import Digest15 from '/src/IMG/digest15.png'
import Digest16 from '/src/IMG/digest16.png'
import Digest17 from '/src/IMG/digest17.png'
import Digest18 from '/src/IMG/digest18.png'
import Subscribe from '/src/IMG/subscribe.png'
import Footer from '../Footer/Footer'

const Tutorial = () => {
  return (
    <div>
      <div className="hero">
        <h1>Design Tools</h1>
        <p>100% customisable and SEO-friendly blog template <br/> for personal and commercial purposes.</p>
      </div>

      <div className="daily_digest">
        <div className="digest">
        
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest13} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest14} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest15} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest16} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest17} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest18} alt=""/>
          </div>
        </div>

        <div className="more">
          <button>More articles</button>
        </div>
      </div>

      <div className="subscribe">
        <h1>Personally Newsletters</h1>
        <p>A bi-weekly newsletter of design inspiration, resources <br/> and anything related to career development.</p>
        <div className="sub_input">
          <input type="email" placeholder="Enter Address"/>
          <button>Subscribe</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Tutorial

import React from 'react'
import './dailyupdate.css'
import Hero2 from '/src/IMG/Hero2.png'
import Digest1 from '/src/IMG/digest1.png'
import Digest2 from '/src/IMG/digest2.png'
import Digest3 from '/src/IMG/digest3.png'
import Digest10 from '/src/IMG/digest10.png'
import Digest11 from '/src/IMG/digest11.png'
import Digest12 from '/src/IMG/digest12.png'
import Footer from '../Footer/Footer'

const DailyUpdate = () => {
  return (
    <div>
      <div className="hero">
        <h1>Daily Digest</h1>
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
            
            <img src={Digest1} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest2} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest3} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest10} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest11} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict real-life <br/> problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest12} alt=""/>
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

export default DailyUpdate

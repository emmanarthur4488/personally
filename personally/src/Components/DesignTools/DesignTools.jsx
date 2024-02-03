import React from 'react'
import './designtools.css'
import {Link} from 'react-router-dom'

import Digest1 from '/src/IMG/digest1.png'
import Digest2 from '/src/IMG/digest2.png'
import Digest3 from '/src/IMG/digest3.png'
import Digest4 from '/src/IMG/digest4.png'
import Digest5 from '/src/IMG/digest5.png'
import Digest6 from '/src/IMG/digest6.png'
import Digest7 from '/src/IMG/digest7.png'
import Digest8 from '/src/IMG/digest8.png'
import Digest9 from '/src/IMG/digest9.png'
import Footer from '../Footer/Footer'


const DesignTools = () => {
  return (
    <div>
      <div className="hero">
        <h1>Minimal blog template for <br/> creative expressions</h1>
        <p>100% customisable and SEO-friendly blog template <br/> for personal and commercial purposes.</p>
      </div>
      <div className="daily_digest">
        <div className="digest">
          <h2>Daily Digest</h2>
          <Link to='/daily digest'><button>View all</button></Link>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict <br/> real-life problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest1} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict <br/> real-life problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest2} alt=""/>
          </div>
        </div>

        <div className="digest_main">
          <h3>August 13, 2021</h3>
          <div className="digest_box">
            <div>
              <h1>10 hilarious cartoons the depict <br/> real-life problems in programmers</h1>
              <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>
            
            <img src={Digest3} alt=""/>
          </div>
        </div>

        <div className="tools">
          <div className="digest">
            <h2>Design tools</h2>
            <Link to='/design tools'><button>View all</button></Link>
          </div>

          <div className="digest_main">
            <h3>August 13, 2021</h3>
            <div className="digest_box">
              <div>
                <h1>10 hilarious cartoons the depict <br/> real-life problems in programmers</h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
              </div>
              
              <img src={Digest4} alt=""/>
            </div>
          </div>

          <div className="digest_main">
            <h3>August 13, 2021</h3>
            <div className="digest_box">
              <div>
                <h1>10 hilarious cartoons the depict <br/> real-life problems in programmers</h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
              </div>
              
              <img src={Digest5} alt=""/>
            </div>
          </div>

          <div className="digest_main">
            <h3>August 13, 2021</h3>
            <div className="digest_box">
              <div>
                <h1>10 hilarious cartoons the depict <br/> real-life problems in programmers</h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
              </div>
              
              <img src={Digest6} alt=""/>
            </div>
          </div>

          
        </div>

        <div className="tools">
          <div className="digest">
            <h2>Tutorials</h2>
            <Link to='/design tutorials'><button>View all</button></Link>
          </div>

          <div className="digest_main">
            <h3>August 13, 2021</h3>
            <div className="digest_box">
              <div>
                <h1>10 hilarious cartoons the depict <br/> real-life problems in programmers</h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
              </div>
              
              <img src={Digest7} alt=""/>
            </div>
          </div>

          <div className="digest_main">
            <h3>August 13, 2021</h3>
            <div className="digest_box">
              <div>
                <h1>10 hilarious cartoons the depict <br/> real-life problems in programmers</h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
              </div>
              
              <img src={Digest8} alt=""/>
            </div>
          </div>

          <div className="digest_main">
            <h3>August 13, 2021</h3>
            <div className="digest_box">
              <div>
                <h1>10 hilarious cartoons the depict <br/> real-life problems in programmers</h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
              </div>
              
              <img src={Digest9} alt=""/>
            </div>
          </div>
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

export default DesignTools

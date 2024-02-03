import React from 'react'
import './dailydigest.css'
import Rect1 from '/src/IMG/Rect1.png'
import Group1 from '/src/IMG/Group1.png'
import Digest1 from '/src/IMG/digest1.png'
import Digest2 from '/src/IMG/digest2.png'
import Digest3 from '/src/IMG/digest3.png'
import Footer from '../Footer/Footer'

const DailyDigest = () => {
  return (
    <div>
      <div className="hero">
        <h1>10 hilarious NFT sales that <br/> broke the internet</h1>
        <p>AUGust 13, 2021 • Daily digest</p>
      </div>
      <div className="rect">
        <img src={Rect1} alt=""/>
      </div>
      <div className="note">
        <p>
          Design comps, layouts, wireframes—will your clients accept that you go about <br/> things the facile way? Authorities in our business will tell in no uncertain terms <br/> that Lorem Ipsum is that huge, huge no no to forswear forever. <br/> <br/>
          Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as <br/> its use is merely the symptom of a worse problem to take into consideration. <br/> <br/>
          The toppings you may chose for that TV dinner pizza slice when you forgot to <br/> shop for foods, the paint you may slap on your face to impress the new boss is <br/> your business. But what about your daily bread?
        </p>
      </div>

      <div className="rect2">
        <img src={Group1} alt=""/>
      </div>

      <div className="note">
        <p>
          The topping you may chose for that TV dinner pizza slice when you forgot to <br/> to shop for foods, the paints you may slap on your face to impress the new boss is <br/> your business. But what about your daily bread? Not so fast, i'd say, there are <br/> some redeeming
          factors in favour greeking text, as it's use is merely the <br/> symptom of a worse problem to take into consideration. <br/> <br/>
          Design comps, layouts, wireframes—will your clients accept that you go about <br/> things the facile way? Authorities in our business will tell in no uncertain terms <br/> that Lorem Ipsum is that huge, huge no no to forswear forever.
        </p>
      </div>

      <div className="note-3">
        <p>
          Design comps, layouts, wireframes—will your clients accept that you go about <br/> things the facile way? Authorities in our business will tell in no uncertain terms <br/> that Lorem Ipsum is that huge, huge no no to forswear forever.
        </p>
      </div>

      <div className="note">
        <p>
        Design comps, layouts, wireframes—will your clients accept that you go about <br/> things the facile way? Authorities in our business will tell in no uncertain terms <br/> that Lorem Ipsum is that huge, huge no no to forswear forever. <br/> <br/>
        The topping you may chose for that TV dinner pizza slice when you forgot to <br/> to shop for foods, the paints you may slap on your face to impress the new boss is <br/> your business. But what about your daily bread? Not so fast, i'd say, there are <br/> some redeeming
        factors in favour greeking text, as it's use is merely the <br/> symptom of a worse problem to take into consideration. <br/> <br/>
        Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as <br/> its use is merely the symptom of a worse problem to take into consideration. <br/> <br/>
        Design comps, layouts, wireframes—will your clients accept that you go about <br/> things the facile way? Authorities in our business will tell in no uncertain terms <br/> that Lorem Ipsum is that huge, huge no no to forswear forever.
        </p>
      </div>

      <div className="daily_digest">
        <div className="digest">
          <h2>Recommended articles</h2>
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

export default DailyDigest

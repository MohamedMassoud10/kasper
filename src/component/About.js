import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import React from "react"
let About=()=>{
  let [counterOn,setCounterOn]=React.useState(false);
    return(
        <div className="About" id="about">
            <div className="const-div">
                <h1>About</h1>
                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.<br/> Mauris blandit aliquet elit, eget tincidunt.</p>
                <img src="../imges/about.png" alt="" />
            </div>
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <div class="stats">
                  <div className="overlay"></div>
          <div class="stats-cont">
            <div class="box">
              <i class="fas fa-mug-hot"></i>
              {counterOn && <CountUp start={0} end={1250} duration={3} delay={0} className={"count"}/>}
              <p>Coffee Drinks</p>
            </div>
            <div class="box">
              <i class="far fa-folder"></i>
              {counterOn &&<CountUp start={0} end={256} duration={3} delay={0} className={"count"}/>}  
                          <p>Completed Projects</p>
            </div>
            <div class="box">
              <i class="far fa-envelope"></i>
              {counterOn &&<CountUp start={0} end={1743} duration={3} delay={0} className={"count"}/>}
              <p>Mail Sent</p>
            </div>
            <div class="box">
              <i class="fas fa-trophy"></i>
              {counterOn &&<CountUp start={0} end={17} duration={3} delay={0} className={"count"}/>}             <p>Awards Received</p>
            </div>
          </div>
        </div>
        </ScrollTrigger>

        </div>
    )
}
export default About;
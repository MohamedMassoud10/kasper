let About=()=>{
    return(
        <div className="About" id="about">
            <div className="const-div">
                <h1>About</h1>
                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.<br/> Mauris blandit aliquet elit, eget tincidunt.</p>
                <img src="../imges/about.png" alt="" />
            </div>
            <div class="stats">
      <div class="stats-cont">
        <div class="box">
          <i class="fas fa-mug-hot"></i>
          <div class="number">1.236</div>
          <p>Coffee Drinks</p>
        </div>
        <div class="box">
          <i class="far fa-folder"></i>
          <div class="number">256</div>
          <p>Completed Projects</p>
        </div>
        <div class="box">
          <i class="far fa-envelope"></i>
          <div class="number">1,743</div>
          <p>Mail Sent</p>
        </div>
        <div class="box">
          <i class="fas fa-trophy"></i>
          <div class="number">17</div>
          <p>Awards Received</p>
        </div>
      </div>
    </div>

        </div>
    )
}
export default About;
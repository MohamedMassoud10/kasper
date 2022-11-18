let Contact=()=>{
    return(
        <div className="contact-us">
             <div class="subscribe">
    <div class="contente">
        <form action="">
        <i class="far fa-envelope fa-lg"></i>
        <input type="email" name="mail" placeholder="Your Email" />
        <input type="submit" value="Subscribe" />
        </form>
        <p>
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blan dit aliquet elit, eget tincidunt.
        </p>
    </div>
    </div>
    <div className="const-div" id="contact">
                <h1>CONTACT US</h1>
                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.<br/> Mauris blandit aliquet elit, eget tincidunt.</p>
        </div>
      <div class="contact" >
        <div class="content">
          <form action="">
            <input class="main-input" type="text" name="name" placeholder="Your Name" />
            <input class="main-input" type="email" name="mail" placeholder="Your Email" />
            <textarea class="main-input" name="message" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" />
          </form>
          <div class="info">
            <h4>Get In Touch</h4>
            <span class="phone">+00 123.456.789</span>
            <span class="phone">+00 123.456.789</span>
            <h4>Where We Are</h4>
            <address>Awesome Address 17<br />New York, NYC<br />123-4567-890<br />USA</address>
          </div>
        </div>
      </div>
      <div class="footer">
      <div class="footer-content">
        <img src="../imges/p1.png" alt="Logo" />
        <p>We Are Social</p>
        <div class="social-icons">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fas fa-home"></i>
          <i class="fab fa-linkedin"></i>
        </div>
        <p class="copyright">&copy; 2021 <span>Kasper</span> All Right Reserved</p>
      </div>
    </div>
        </div>
    )
}
export default Contact;
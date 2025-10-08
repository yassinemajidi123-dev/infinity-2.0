export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="container hero-grid hero-center">
        <div className="hero-content">

          <h1>Infinity TV Best IPTV Subscription</h1>
          <p>
            No more waiting or overpaying. Enjoy 27,000 channels + VOD in 4K quality with no contract.
            Football, movies, series—everything is included. Limited-time offer—save 30% today.
          </p>

          <div className="btns">
            <a className="btn" href="#pricing">See Plans</a>
          </div>

          {/* device strip */}
          <div className="platforms">
            <div className="item">
              <img src="/icons/firetv.png" alt="Fire TV" />
              <span className="label">FIRE TV</span>
            </div>  
            <div className="item">
              <img src="/icons/android.png" alt="Android" />
              <span className="label">ANDROID</span>
            </div>
            <div className="item">
              <img src="/icons/ios.png" alt="iOS" />
              <span className="label">IOS</span>
            </div>
            <div className="item">
              <img src="/icons/windows.png" alt="Windows" />
              <span className="label">WINDOWS</span>
            </div>
            <div className="item">
              <img src="/icons/samsung.png" alt="Samsung" />
              <span className="label">SAMSUNG</span>
            </div>
            <div className="item">
              <img src="/icons/lg.png" alt="LG Smart" />
              <span className="label">LG SMART</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

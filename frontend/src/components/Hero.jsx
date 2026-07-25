const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-pill">New • Automated deployment ready</span>
        <h1>Build, test, and ship faster with GitHub Actions</h1>
        <p>
          Hi, Launch your React app with confidence using a streamlined CI/CD
          pipeline that keeps every release consistent, visible, and reliable.
        </p>
        <div className="hero-actions">
          <a href="#services" className="button primary">
            Explore services
          </a>
          <a href="#contact" className="button secondary">
            Contact us
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <strong>24/7</strong>
            <span>Automation</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Consistent releases</span>
          </div>
          <div>
            <strong>Fast</strong>
            <span>Feedback loops</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

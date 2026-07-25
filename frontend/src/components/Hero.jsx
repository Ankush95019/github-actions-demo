const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-pill">New • Automated deployment ready</span>
        <h1>Build, test, and ship faster with GitHub Actions</h1>
        <p>
          Hi, Launch your React app with confidence using a streamlined CI/CD
          pipeline that keeps every release consistent, visible, and reliable.
          Learn how to automate your workflow and ship faster with GitHub
          Actions. To GitHub Actions, you can automate your software development
          workflows directly in your GitHub repository. You can create workflows
          that build and test every pull request to your repository, or deploy
          merged pull requests to production.
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

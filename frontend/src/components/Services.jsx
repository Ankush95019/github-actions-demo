const services = [
  { title: "Web Development", description: "Build modern React apps." },
  { title: "Testing", description: "Validate changes with automation." },
  { title: "Deployment", description: "Ship updates with confidence." },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <h2>Services</h2>
      <div className="card-grid">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

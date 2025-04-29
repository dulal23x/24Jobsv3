export default function Features() {
  const features = [
    {
      icon: "bi-briefcase",
      title: "Career Opportunities",
      description: "Discover job opportunities tailored to your skills and experience.",
      link: "Explore jobs",
    },
    {
      icon: "bi-people",
      title: "Meaningful Connections",
      description: "Build professional relationships with mentors and peers.",
      link: "Grow your network",
    },
    {
      icon: "bi-journal-text",
      title: "Knowledge Sharing",
      description: "Access industry insights and share your expertise.",
      link: "Discover insights",
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <h2 className="text-center fw-bold fs-3 mb-10 text-gray-800">Why professionals choose Xubly</h2>
        
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-4 mb-6" key={index}>
              <div className="border border-gray-200 rounded-lg p-6 h-100 transition-all hover:shadow-md hover:border-blue-200 text-center">
                <i className={`bi ${feature.icon} fs-1 text-blue-600 mb-4`}></i>
                <h3 className="fw-semibold fs-4 mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a href="#" className="text-blue-600 fw-medium d-flex justify-content-center align-items-center gap-1 hover:underline">
                  {feature.link} <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

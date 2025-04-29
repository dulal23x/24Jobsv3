export default function Hero() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left column: Text content */}
          <div className="col-md-6 mb-8 md:mb-0">
            <h1 className="fw-bold fs-2 fs-md-1 mb-4 text-gray-800 leading-tight">
              Unlock Your Professional Potential with Xubly
            </h1>
            <p className="text-gray-600 mb-6 fs-5">
              Build your network, discover opportunities, and advance your career with the professional community that puts your growth first.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded font-medium transition-colors">
                Join the community
              </button>
              <button className="text-blue-600 border border-blue-600 px-5 py-3 rounded font-medium hover:bg-blue-50 transition-colors">
                Learn more
              </button>
            </div>
          </div>
          
          {/* Right column: Sample Post */}
          <div className="col-md-6">
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="rounded-circle bg-blue-600 text-white d-flex justify-content-center align-items-center" style={{ width: 48, height: 48 }}>
                  <span className="fw-medium">JD</span>
                </div>
                <div>
                  <p className="fw-semibold text-gray-800 mb-0">Jane Doe</p>
                  <p className="text-gray-500 text-sm mb-0">Product Designer at Design Co.</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Just finished a product design sprint with an amazing team! Excited to share our case study next week. #ProductDesign #UX
              </p>
              <div className="d-flex gap-5 text-gray-500 text-sm">
                <span className="d-flex align-items-center gap-1"><i className="bi bi-hand-thumbs-up"></i> 12 reactions</span>
                <span className="d-flex align-items-center gap-1"><i className="bi bi-chat"></i> 12 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

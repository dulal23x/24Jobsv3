export default function Footer() {
  const footerLinks = {
    xubly: ["About", "Careers", "Press", "Blog"],
    products: ["Networking", "Jobs", "Learning", "Premium"],
    resources: ["Help Center", "Guidelines", "Testimonials", "Developers"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Copyright"]
  };

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-4">
          <div>
            <h6 className="fw-bold mb-3">Xubly</h6>
            <ul className="list-unstyled text-sm">
              {footerLinks.xubly.map((link, i) => (
                <li key={i} className="mb-2">
                  <a href="#" className="text-muted hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h6 className="fw-bold mb-3">Products</h6>
            <ul className="list-unstyled text-sm">
              {footerLinks.products.map((link, i) => (
                <li key={i} className="mb-2">
                  <a href="#" className="text-muted hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled text-sm">
              {footerLinks.resources.map((link, i) => (
                <li key={i} className="mb-2">
                  <a href="#" className="text-muted hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled text-sm">
              {footerLinks.legal.map((link, i) => (
                <li key={i} className="mb-2">
                  <a href="#" className="text-muted hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-4 text-sm text-muted">
          © 2025 Xubly Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

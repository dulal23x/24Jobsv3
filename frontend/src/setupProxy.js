// This file is used by Vite in development to handle the proxy
// It helps bypass the host restriction issue

module.exports = function(app) {
  app.use((req, res, next) => {
    // Override the host header to trick Vite
    req.headers.host = 'localhost:5000';
    
    // Add CORS headers
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    
    next();
  });
};
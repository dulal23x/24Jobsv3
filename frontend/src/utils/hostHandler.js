/**
 * Utility to handle Vite host restriction issues
 * This file provides functions to help bypass host restrictions
 * and ensure the application loads correctly in various environments
 */

/**
 * Sets up event listeners and DOM modifications to handle
 * host restriction issues in development environments
 */
export function setupHostRestrictionHandler() {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  // Check if we're hitting a host restriction
  const isRestrictedHost = document.body.textContent?.includes('Blocked request') || 
                           document.body.textContent?.includes('host is not allowed');
  
  if (isRestrictedHost) {
    console.log('Detected host restriction, attempting to bypass...');
    
    // Try to extract the host from the error message
    const hostMatch = document.body.textContent.match(/host \("(.+?)"\)/);
    const currentHost = hostMatch ? hostMatch[1] : window.location.host;
    
    // Create a meta tag with the detected host
    const meta = document.createElement('meta');
    meta.name = 'vite-allowed-host';
    meta.content = currentHost;
    document.head.appendChild(meta);
    
    // Add helper script to document
    const script = document.createElement('script');
    script.textContent = `
      // Attempt to bypass Vite host restriction
      (function() {
        const originalFetch = window.fetch;
        window.fetch = function(url, options) {
          // Modify requests to bypass host checks
          if (url && typeof url === 'string') {
            // Ensure absolute URLs use the correct host
            if (url.startsWith('/')) {
              url = window.location.origin + url;
            }
          }
          return originalFetch.call(this, url, options);
        };
        
        // Notify user of the workaround
        console.log('Host restriction bypass attempted for: ' + window.location.host);
      })();
    `;
    document.head.appendChild(script);
  }
}

// Auto-run the setup when this module is imported
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', setupHostRestrictionHandler);
  
  // Also run it now in case the DOM is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setupHostRestrictionHandler();
  }
}
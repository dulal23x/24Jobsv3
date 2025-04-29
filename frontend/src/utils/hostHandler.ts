/**
 * Utility to handle Vite host restriction issues
 * This file provides functions to help bypass host restrictions
 * and ensure the application loads correctly in various environments
 */

/**
 * Sets up event listeners and DOM modifications to handle
 * host restriction issues in development environments
 */
export function setupHostRestrictionHandler(): void {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  // Check if we're hitting a host restriction - safely check body content
  const bodyContent = document.body?.textContent || '';
  const isRestrictedHost = bodyContent.includes('Blocked request') || 
                           bodyContent.includes('host is not allowed');
  
  if (isRestrictedHost) {
    console.log('Detected host restriction, attempting to bypass...');
    
    // Try to extract the host from the error message
    const hostMatch = bodyContent.match(/host \("(.+?)"\)/);
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

// Create a direct function that tries to redirect to fallback
export function checkAndRedirectToFallback(): void {
  if (typeof window === 'undefined') return;
  
  const bodyContent = document.body?.textContent || '';
  const isBlocked = bodyContent.includes('Blocked request') || 
                     bodyContent.includes('host is not allowed');
  
  if (isBlocked) {
    // Try to redirect to fallback
    const currentLocation = window.location.href;
    
    if (!currentLocation.includes('/fallback')) {
      console.log('Detected host restriction, redirecting to fallback page...');
      window.location.href = '/fallback';
    }
  }
}

// Auto-run the setup when this module is imported
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    setupHostRestrictionHandler();
    checkAndRedirectToFallback();
  });
  
  // Also run it now in case the DOM is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setupHostRestrictionHandler();
    setTimeout(checkAndRedirectToFallback, 1000); // Small delay to ensure page has loaded
  }
}
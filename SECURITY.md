## Helmet.js Configuration

### Configuration Applied

\`\`\`typescript helmet({ 
contentSecurityPolicy: false, 
hsts: { maxAge: 31536000, includeSubDomains: true }, 
frameguard: { action: "deny" }, 
referrerPolicy: { policy: "no-referrer" },
PermittedCrossDomainPolicies: { permittedPolicies: "none" },
}); \`\`\`

### Justification

Given Examples:

1. **contentSecurityPolicy: false** - Disabled because this API returns only
   JSON data and does not serve HTML content. CSP is designed to prevent XSS in
   browsers rendering HTML.

2. **hsts** - Enabled with 1-year max-age to enforce HTTPS connections...

3. **frameguard: { action: "deny" }** - Prevents this API from clickjacking attacks 

4. **referrerPolicy: { policy: "no-referrer" }** - Prvents other websites from seeing my API in their server

5. **PermittedCrossDomainPolicies: { permittedPolicies: "none" }: "none"** - Blocked other domains from accessing this API without permission


### Sources

1. Helmet.js Official Documentation - https://helmetjs.github.io/
2. OWASP Secure Headers Project - https://owasp.org/www-project-secure-headers/


## CORS Configuration

### Configuration Applied

\`\`\`typescript 
CORS { 
        origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    };
 \`\`\`

### Justification

1. **origin: process.env.ALLOWED_ORIGINS?.split(",") || []** - Only allows specified domains to access my API reading from environment variable

2. **credentials: true** - Enabled to allow API to use cookies or Bearer tokens for authentication

3. **methods: ["GET", "POST", "PUT", "DELETE"]** - List of HTTP methods that are allowed 

4. **allowedHeaders: ["Content-Type", "Authorization"]** - List of Headers which clients are allowed to send with requests

### Sources

1. Cross-Origin Resource Sharing (CORS) - MDN Web Docs - https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS#functional_overview
2. CORS (Cross-Origin Resource Sharing) - FastAPI - https://fastapi.tiangolo.com/tutorial/cors/#use-corsmiddleware
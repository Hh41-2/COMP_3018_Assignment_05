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

4. **referrerPolicy: { policy: "no-referrer" }** - 

3. **PermittedCrossDomainPolicies: { permittedPolicies: "none" }: "none"** - Blocked other domains from accessing this API without permission

4. **crossOriginResourcePolicy: { policy: "cross-origin" }** - Prvents other websites from accessing my API

### Sources

1. Helmet.js Official Documentation - https://helmetjs.github.io/
2. OWASP Secure Headers Project - https://owasp.org/www-project-secure-headers/
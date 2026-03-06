# FlowChat Documentation - Production Deployment

## Overview

This repository contains the production documentation for FlowChat, a professional multi-LLM chat platform.

## Quick Start

### Prerequisites
- Node.js >= 18.0
- npm >= 8.0
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/NishantGits/flow-docs.git
cd flow-docs

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Production Deployment

### Build Process

```bash
# Install dependencies
npm ci

# Build with analysis
npm run build:analyze

# The built files will be in /build directory
```

### VM Server Setup

#### 1. Server Requirements
- **OS**: Ubuntu 20.04+ or CentOS 8+
- **RAM**: Minimum 2GB, recommended 4GB
- **Storage**: Minimum 20GB SSD
- **CPU**: 2+ cores recommended
- **Network**: Stable internet connection

#### 2. Web Server Setup

**Option A: Nginx (Recommended)**
```bash
# Install Nginx
sudo apt update && sudo apt install nginx

# Configure Nginx
sudo nano /etc/nginx/sites-available/flowchat-docs
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/flow-docs/build;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";

    location / {
        try_files $uri $uri/ /index.html =404;
    }
}
```

**Option B: Apache**
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/flow-docs/build
    DirectoryIndex index.html
    
    # Enable compression
    LoadModule deflate_module modules/mod_deflate.so
    <Location />
        SetOutputFilter DEFLATE
        SetOutputFilterByType DEFLATE text/plain text/css application/json application/javascript text/xml application/xml text/javascript
    </Location>
</VirtualHost>
```

#### 3. Deployment Steps

```bash
# Build the documentation
npm run build

# Upload to server
rsync -avz build/ user@your-server:/var/www/flow-docs/

# Restart web server
sudo systemctl restart nginx
# or
sudo systemctl restart apache2
```

### SSL/HTTPS Setup

```bash
# Install Certbot (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Nginx will auto-configure SSL
```

### Environment Variables

Create `.env.production` file:
```bash
NODE_ENV=production
GA_TRACKING_ID=G-522JSJVWTB
```

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Documentation

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to server
      run: |
        echo "${{ secrets.SERVER_KEY }}" > server_key
        scp -o StrictHostKeyChecking=no -i server_key -r build/ user@your-server:/var/www/flow-docs/
        ssh -o StrictHostKeyChecking=no -i server_key user@your-server "sudo systemctl restart nginx"
```

## Monitoring

### Health Check

Add health check endpoint:
```bash
# Create health check script
cat > healthcheck.sh << 'EOF
#!/bin/bash
curl -f http://localhost/ || exit 1
EOF

chmod +x healthcheck.sh
```

### Performance Optimization

```bash
# Enable caching in Nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
}

# CDN Configuration (optional)
# Point your domain to Cloudflare/AWS CloudFront for global distribution
```

## Domain Configuration

### DNS Settings
```
A Record: @ -> your-server-ip
AAAA Record: @ -> your-ipv6-address (if available)
CNAME Record: docs -> your-domain.com (if using subdomain)
```

## Security

### Firewall Rules
```bash
# Allow HTTP/HTTPS traffic
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow ssh

# Fail2Ban for brute force protection
sudo apt install fail2ban
sudo systemctl enable fail2ban
```

## Backup Strategy

```bash
# Automated backup script
cat > backup.sh << 'EOF
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf /backups/flow-docs_$DATE.tar.gz /var/www/flow-docs/
find /backups/ -name "flow-docs_*.tar.gz" -mtime +7 -delete
EOF

chmod +x backup.sh

# Add to cron
echo "0 2 * * * /path/to/backup.sh" | crontab -
```

## Troubleshooting

### Common Issues

1. **Build fails**: Check Node.js version, clear node_modules, run `npm ci`
2. **404 errors**: Verify Nginx/Apache configuration, check file permissions
3. **Slow loading**: Enable gzip, check server resources, consider CDN
4. **SSL errors**: Verify certificate paths, check domain validation

### Logs Monitoring

```bash
# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Application logs
journalctl -u nginx -f
```

## Support

For deployment issues:
- **Email**: contact@flowchats.org
- **Documentation**: This README
- **Repository**: https://github.com/NishantGits/flow-docs/issues

---

*Last updated: $(date +%Y-%m-%d)*

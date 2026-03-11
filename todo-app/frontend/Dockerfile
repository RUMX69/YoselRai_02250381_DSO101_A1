# Nginx is a lightweight web server - perfect for serving HTML files
FROM nginx:alpine

# Copy your HTML file into the folder nginx looks at
COPY index.html /usr/share/nginx/html/index.html

# Nginx uses port 80 by default
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
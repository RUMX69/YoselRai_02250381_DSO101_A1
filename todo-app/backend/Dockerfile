# Start with an existing Node.js environment
# Think of this as: "give me a computer that already has Node.js installed"
FROM node:18-alpine

# Set the working directory inside the container
# Like saying: "go into this folder"
WORKDIR /app

# Copy package.json first (the list of dependencies)
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of your code
COPY . .

# Tell Docker this app uses port 5000
EXPOSE 5000

# The command to start the app
CMD ["node", "server.js"]
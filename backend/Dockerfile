# Use a base image with Node.js
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5000 for the Express server
EXPOSE 5000

# Command to run the application
CMD ["node", "server.js"]

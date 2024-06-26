# Specify the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Create uploads directory
RUN mkdir -p /app/uploads && chmod -R 777 /app/uploads

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8080 

# Command to run the application
CMD ["node", "api/server.js"]

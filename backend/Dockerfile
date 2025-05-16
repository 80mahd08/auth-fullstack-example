# Use a lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first (for better Docker caching)
COPY package*.json ./

# Install dependencies (only what you defined in package.json)
RUN npm install

# Now copy the rest of the app code
COPY . .

# Expose the port your app runs on (optional)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]

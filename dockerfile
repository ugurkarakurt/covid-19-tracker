# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

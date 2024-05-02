
# Use an appropriate base image for your Node.js application (e.g., Node.js)
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy your application code into the container
COPY . .

# Install dependencies (if applicable)
RUN npm install --force

# Expose the port your application will run on
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "start"]
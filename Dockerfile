# Build stage
FROM node:22-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy source files
COPY . .

# Build the frontend
# Note: VITE_ variables must be available at build time for the frontend
ARG VITE_BLOGGER_BLOG_ID
ENV VITE_BLOGGER_BLOG_ID=$VITE_BLOGGER_BLOG_ID

RUN npm run build

# Production stage
FROM node:22-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Install tsx globally or as a dependency to run server.ts
RUN npm install -g tsx

# Copy built assets from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./server.ts

# Set environment to production
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Start the server
CMD ["tsx", "server.ts"]

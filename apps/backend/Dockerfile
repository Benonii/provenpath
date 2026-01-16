# Backend Dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install Python and build tools for native dependencies
RUN apk add --no-cache python3 make g++

# Copy package files and lock file
COPY ./apps/backend/package.json ./package-lock.json ./
RUN npm install --production --legacy-peer-deps

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./apps/backend .

# Build the application if needed (though this backend doesn't seem to need building)
# RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Install tsx for running TypeScript
RUN npm install -g tsx

COPY --from=builder /app/src ./src
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/drizzle.config.ts ./drizzle.config.ts

USER nodejs

EXPOSE 5001

ENV PORT 5001

# Start the server with tsx
CMD ["tsx", "src/index.ts"]

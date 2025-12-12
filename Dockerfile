FROM node:20-alpine

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm install --omit=dev

COPY server.js ./
COPY logo.svg ./

# Default to 80 if upstream doesn't provide PORT at runtime
ENV PORT=80

# non-root user
RUN addgroup -S app && adduser -S app -G app
USER app

CMD ["npm", "start"]
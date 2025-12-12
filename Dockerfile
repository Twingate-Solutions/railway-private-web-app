FROM node:20-alpine

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm install --omit=dev

COPY server.js ./

ENV PORT=3000
EXPOSE 3000

# non-root
RUN addgroup -S app && adduser -S app -G app
USER app

CMD ["npm", "start"]
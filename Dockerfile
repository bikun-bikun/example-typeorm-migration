FROM node:12

WORKDIR /app
USER node
ENV PORT 3000

EXPOSE 3000

COPY . .
RUN yarn install
FROM node:gallium-alpine

WORKDIR /app

COPY ./package.json .

RUN npm install -f

COPY . .

ENV NEXT_PUBLIC_AUTH_DOMAIN=https://auth.gocharity.com.ng

RUN npm run build

EXPOSE 3000

CMD ["npx", "next", "start", "-p", "3000"]
# Etapa 1: construir la app
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: servir la app con Vite Preview
FROM node:18
WORKDIR /app
COPY --from=build /app .
RUN npm install --omit=dev
EXPOSE 4173
CMD ["npm", "run", "preview"]

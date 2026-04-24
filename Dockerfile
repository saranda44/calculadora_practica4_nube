# ---------- Stage 1: Builder ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar manifests (donde están las dependencias)
COPY package*.json ./
COPY tsconfig.json ./

# Instalar TODAS las dependencias (incluyendo dev para poder compilar)
RUN npm ci

# Copiar código fuente y compilar
COPY src ./src
RUN npm run build

# ---------- Stage 2: Runtime ----------
FROM node:20-alpine AS runtime

WORKDIR /app

# Instalar solo dependencias de producción
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copiar el build del stage anterior
COPY --from=builder /app/dist ./dist

# Exponer el puerto de la app
EXPOSE 8000

# Correr como usuario no-root por seguridad
USER node

CMD ["node", "dist/index.js"]
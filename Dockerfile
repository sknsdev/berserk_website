FROM node:18-alpine

# Установка PM2
RUN npm install -g pm2

# Установка рабочего каталога
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в рабочую директорию
COPY . .

# Сборка проекта
RUN npm run build

# Запуск PM2 и приложения
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
# Green Api

Тестовое задание разработать пользовательский интерфейс для
отправки и получений сообщений WhatsApp, история переписки сохраняется только во время текущего сеанса.

Работа приложения:
- Пользователь переходит на сайт чата и вводит свои учетные данные из
системы GREEN-API (idInstance, apiTokenInstance, номер телефона) и создает новый чат
- Пользователь пишет текстовое сообщение и отправляет его получателю в
WhatsApp
- Получатель отвечает на сообщение в мессенджере WhatsApp
- Пользователь видит ответ получателя в чате

## Использованные технологии
- React
- TypeScript
- Vite
- zustand
- styled components
- react-router-dom
- react-toastify
- react-hook-form, @hookform/resolvers, zod
- axios

## Установка
1. Склонируйте репозиторий `git clone https://github.com/Kiryll26/green-api.git`
2. Перейдите в директорию проекта `cd green-api`
3. Установите зависимости `npm install`
5. Запустите локальную версию `npm start`
6. Перейдите по локальному адресу http://localhost:4000
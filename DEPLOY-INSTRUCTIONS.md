# 🚀 Деплой на Netlify

## Вариант 1: Drag & Drop (Самый простой)

1. Открой [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Перетащи папку `w26-ethics-test-live` на страницу
3. Готово! Получишь ссылку типа `https://random-name.netlify.app`

## Вариант 2: Через Netlify CLI

```bash
cd "w26-ethics-test"

# Если еще не залогинен
netlify login

# Создать новый сайт и задеплоить
netlify deploy --prod --dir .
```

## Вариант 3: Через Git (Recommended)

1. Создай репозиторий на GitHub
2. Залей код:
   ```bash
   git init
   git add .
   git commit -m "W26 Ethics Test"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. Подключи репозиторий в Netlify Dashboard
4. Auto-deploy при каждом push

## После деплоя

1. **Обнови meta tags** в `index.html`:
   - Замени `YOUR-DOMAIN` на реальный домен

2. **Создай OG image**:
   - Сделай скриншот главной страницы (1200×630px)
   - Сохрани как `assets/web-cover.png`
   - Повторный deploy

3. **Custom domain** (опционально):
   - В Netlify: Domain Settings → Add custom domain
   - Настрой DNS records

## Текущий статус

✅ Приложение готово к деплою
✅ Клик по карте работает
✅ Все на русском языке
✅ AI Mindset стиль применен

## Что деплоится

- **index.html** - Основное приложение (standalone, без зависимостей)
- **netlify.toml** - Конфигурация Netlify
- Ничего строить не нужно, работает сразу!

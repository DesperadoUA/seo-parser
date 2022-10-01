require('dotenv').config()
TIME_PARSE = process.env.TIME_PARSE || 600000
NODE_ENV = process.env.NODE_ENV || 'development'
STORE_STRATEGY = process.env.STORE_STRATEGY || 'db'
HTML_STRATEGY = process.env.HTML_STRATEGY || 'HtmlRequest'
DB_HOST = process.env.DB_HOST || '127.0.0.1'
DB_USER = process.env.DB_USER || 'root'
DB_PASSWORD = process.env.DB_PASSWORD || ''
DB_NAME = process.env.DB_NAME || 'seo-parser'
TELEGA_TOKEN = process.env.TELEGA_TOKEN || '5592644048:AAFj-VcOxRIKOX5_ZVvZu2lENkPoUblc5O8'
CHAT_ID = process.env.CHAT_ID || 486028133
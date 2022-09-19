require('dotenv').config()
TIME_PARSE = process.env.TIME_PARSE || 60000
NODE_ENV = process.env.NODE_ENV || 'development'
STORE_STRATEGY = process.env.STORE_STRATEGY || 'db'
DB_HOST = process.env.DB_HOST || '127.0.0.1'
DB_USER = process.env.DB_USER || 'root'
DB_PASSWORD = process.env.DB_PASSWORD || ''
DB_NAME = process.env.DB_NAME || 'seo-parser'
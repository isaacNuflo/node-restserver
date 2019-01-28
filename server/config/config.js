//=========================
//  Puerto
//=========================

process.env.PORT = process.env.PORT || 3000;

//=========================
//  Entorno
//=========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//=========================
//  Entorno
//=========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/landing'
} else {
    urlDB = 'mongodb://isaac.nuflo:prodequa123@ds111025.mlab.com:11025/landing'
}

process.env.URLDB = urlDB;
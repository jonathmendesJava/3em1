const express = require('express')
const SiteController = require('./controllers/SiteController')
const router = express.Router()

router.get('/', SiteController.index)
router.get('/imc', SiteController.imc)
router.get('/qrCode', SiteController.qrCode)
router.get('/conversor', SiteController.conversor)

module.exports = router
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const getOptions = require('./services/autocomplete.service')
const { getStockInfo, getStockPrices, getChartData, getNews, getTwoYearsChartsData } = require('./services/stock.service')

const app = express()
const port = process.env.PORT || 3080

// Attack middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

// Production static files, comment for development
app.use(express.static(path.join(__dirname, 'stock-analysis-app/dist/stock-analysis-app')))

// Options route
app.get('/api/options/:query', getOptions)
app.get('/api/info/:query', getStockInfo)
app.get('/api/prices/:query', getStockPrices)
app.get('/api/charts/:ticker/:start', getChartData)
app.get('/api/twoyearscharts/:ticker/:start', getTwoYearsChartsData)
app.get('/api/news/:query', getNews)

// Production root file, comment for development
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'stock-analysis-app/dist/stock-analysis-app/index.html'))
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})

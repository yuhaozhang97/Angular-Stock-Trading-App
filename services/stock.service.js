const axios = require('axios');
const API_KEY = $API_KEY

const getStockInfo = async (req, res) => {
    const TiingoURL = 'https://api.tiingo.com/tiingo/daily'
    const { query } = req.params
    let info

    try {
        await axios
            .get(`${TiingoURL}/${query}?token=${API_KEY}`)
            .then(result => {
                info = result.data
            })
            .catch(_ => info = undefined)

        return info ? res.status(200).json(info) : res.status(404).json('404 NOT FOUND')
    } catch(err) {
        console.log(err)
    }
}

const getStockPrices = async (req, res) => {
    const TiingoURL = 'https://api.tiingo.com/iex'
    const { query } = req.params
    let prices

    try {
        await axios
            .get(`${TiingoURL}/${query}?token=${API_KEY}`)
            .then(result => {
                prices = result.data
            })
    
        return prices.length !== 0 ? res.status(200).json(prices) : res.status(404).json('404 NOT FOUND')
    } catch(err) {
        console.log(err)
    }
}

const getChartData = async (req, res) => {
    const { ticker, start } = req.params
    const TiingoURL = `https://api.tiingo.com/iex/${ticker}/prices?startDate=${start}&resampleFreq=10min&columns=open,high,low,close,volume&token=${API_KEY}`
    let history

    try {
        await axios
            .get(TiingoURL)
            .then(result => {
                history = result.data
            })
    
        return history.length !== 0 ? res.status(200).json(history) : res.status(200).json([])
    } catch(err) {
        console.log(err)
    }
}

const getTwoYearsChartsData = async (req, res) => {
    const { ticker, start } = req.params
    const TiingoURL = `https://api.tiingo.com/iex/${ticker}/prices?startDate=${start}&resampleFreq=12hour&columns=open,high,low,close,volume&token=${API_KEY}`
    let history

    try {
        await axios
            .get(TiingoURL)
            .then(result => {
                history = result.data
            })
    
        return history.length !== 0 ? res.status(200).json(history) : res.status(202).json([])
    } catch(err) {
        console.log(err)
    }
}

const getNews = async (req, res) => {
    const { query } = req.params
    const API_TOKEN = '6d9b3f4909c141ef9616f93c3d182a0d'
    const newsURL = `https://newsapi.org/v2/everything?apiKey=${API_TOKEN}&q=${query}`

    let news

    try {
        await axios
            .get(newsURL)
            .then(result => {
                news = result.data.articles
            })
    
        return news.length !== 0 ? res.status(200).json(news) : res.status(200).json([])
    } catch(err) {
        console.log(err)
    }
}

module.exports = { 
    getStockInfo, 
    getStockPrices,
    getChartData,
    getNews,
    getTwoYearsChartsData
}

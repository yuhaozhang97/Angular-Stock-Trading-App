const axios = require('axios');

const TiingoURL = 'https://api.tiingo.com/tiingo/utilities/search'
const API_KEY = '07e77e74fdeee3bdc52bb686cbf38fbe3e5aa0cc'

const getOptions = async (req, res) => {
    const { query } = req.params

    try {
        const result = await axios.get(`${TiingoURL}/${query}?token=${API_KEY}`)
        let tickers = []
        
        result.data.forEach(element => {
            tickers.push(`${element.ticker} | ${element.name}`)
            // tickers.push({ ticker: element.ticker, name: element.name })
        });

        return res.status(200).json(tickers)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getOptions
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItems from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    // console.log(data)

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    // console.log(updatedData)

    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return (
      <div className="CryptocurrenciesList-con">
        <h1 className="CryptocurrenciesList-head">Cryptocurrency Tracker</h1>
        <img
          className="CryptocurrenciesList-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />

        <div className="box-con">
          <div className="titles-con">
            <h1 className="title-sty">Coin Type</h1>
            <div className="usdAndEuro-con">
              <h2 className="title-sty usdAndEuro-con-add">USD</h2>
              <h3 className="title-sty">EURO</h3>
            </div>
          </div>

          <div>
            {isLoading ? (
              <div data-testid="loader" className="loader-sty">
                <Loader
                  type="ThreeDots"
                  color="#ffffff"
                  height={80}
                  width={80}
                />
              </div>
            ) : (
              <ul className="eachItem-con">
                {currencyData.map(eachData => (
                  <CryptocurrencyItems
                    cryptoDetails={eachData}
                    key={eachData.id}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList

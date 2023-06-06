import './index.css'

const CryptocurrencyItems = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoDetails
  return (
    <li className="list-con">
      <div className="logoAndName-con">
        <img className="logo-img-sty" src={currencyLogo} alt={currencyName} />
        <p className="desc-sty">{currencyName}</p>
      </div>
      <div className="usdAndEuroValue-con">
        <p className="desc-sty usdAndEuroValue-con-add">{usdValue}</p>
        <p className="desc-sty">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItems

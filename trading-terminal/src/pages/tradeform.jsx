import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import TradingView from '../components/tradingviewideget';
const TradeForm = () => {

    return (
        <div>
            <div className="card-container">
            <div class="card1">

            <div class="field is-horizontal">
  <div class="field-label is-normal">
  </div>
  <div class="field-body">
    <div class="field">
    <label class="label">Pair </label>
      <div class="control">
        <input class="input" type="text" placeholder="BTC/USD"/>
      </div>
    </div>
  </div>
</div>
<div class="field is-horizontal">
  <div class="field-label is-normal">
  </div>
  <div class="field-body">
  <div class="field-body">
    <div class="field " id="buy-sell-btn">
      <div class="control">
      <button className="button is-outlined is-small">
                    Buy
                  </button>
      <button className="button is-outlined is-small">
                    Sell
                  </button>
      </div>
    </div>
  </div>
  <div class="field-body">
    <div class="field ">
      <div class="control">
        <div class="select is-fullwidth">
          <select>
            <option>Limit</option>
            <option>Market</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
  </div>
  <div class="field-body">
    <div class="field">
    <label class="label">Limit Price</label>
      <div class="control">
        <input class="input" type="text" placeholder="27242.7"/>
      </div>
    </div>
  </div>
</div>
<div class="field is-horizontal">
  <div class="field-label is-normal">
  </div>
  <div class="field-body">
    <div class="field">
    <label class="label">Quantity</label>
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="0.00001"/>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
    <label class="label">Total</label>
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="~2.73" disabled />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">

  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Buy BTC/USD
        </button>
      </div>
    </div>
  </div>
</div>


</div>
<div className='card2'>
        {/* <TradingViewWidget className="ABC" symbol="NASDAQ:AAPL" /> */}
        <TradingView></TradingView>
    </div>
    </div>
</div>
    );
};
export default TradeForm;
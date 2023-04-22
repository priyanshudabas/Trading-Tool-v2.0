import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingView() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_27032') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: 800,
            height: 481,
            symbol: "COINBASE:BTCUSD",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_27032"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_27032' />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/symbols/BTCUSD/?exchange=COINBASE" rel="noopener" target="_blank"><span className="blue-text">Bitcoin chart</span></a> by TradingView
      </div>
    </div>
  );
}
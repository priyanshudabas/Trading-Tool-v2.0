import React, { useEffect } from 'react'
import axios from 'axios'

const Demo = () => {

useEffect(() => {
    axios({
        method: "get",
        url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true"
    }).then((response) => {
        console.log(response.data)
    })
})

  return (
    <div>Demo
        <h1 className="title">Get</h1>
        {console.log("lorem")}
    </div>
  )
}

export default Demo
import React, { useEffect } from 'react'
import axios from 'axios'

const Demo = () => {
var result = []
useEffect(() => {
    axios({
        method: "get",
        url: "https://localhost:7018/api/User"
    }).then((response) => {
      result=response.data  
      console.log(result)
        
    })
})

  return (
    <div>Demo
        <h1 className="title">Get{result.UserName}</h1>
        
    </div>
  )
}

export default Demo
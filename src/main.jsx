import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";

import App from './App'
import './index.css'

function getLibrary(provider) {
  return new Web3Provider(provider);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Web3ReactProvider getLibrary={getLibrary}>
      <App/>
    </Web3ReactProvider>,
)




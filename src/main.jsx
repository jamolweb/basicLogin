import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>
)
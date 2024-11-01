import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import {createStore} from "./store.js";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import 'leaflet/dist/leaflet.css';

const store = createStore()

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ChakraProvider>
                    <App/>
                </ChakraProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header, Footer } from './components/pages';
import './index.css'

ReactDOM.createRoot(document.getElementById('header') as HTMLElement).render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('footer') as HTMLElement).render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>,
);


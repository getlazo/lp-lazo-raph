import { createRoot } from 'react-dom/client'
import { GoogleTagManager } from './components/GoogleTagManager'
import App from './App.tsx'
import './index.css'

const GTM_ID = 'GTM-K7PBBK5S';

createRoot(document.getElementById("root")!).render(
  <>
    <GoogleTagManager gtmId={GTM_ID} />
    <App />
  </>
);

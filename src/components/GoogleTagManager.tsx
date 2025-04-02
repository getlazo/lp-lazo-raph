import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface GoogleTagManagerProps {
  gtmId: string;
}

export const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ gtmId }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(gtmScript);

    const gtmNoscript = document.createElement('noscript');
    const gtmIframe = document.createElement('iframe');
    gtmIframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    gtmIframe.height = '0';
    gtmIframe.width = '0';
    gtmIframe.style.display = 'none';
    gtmIframe.style.visibility = 'hidden';
    gtmNoscript.appendChild(gtmIframe);
    document.body.insertBefore(gtmNoscript, document.body.firstChild);

    return () => {
      document.head.removeChild(gtmScript);
      document.body.removeChild(gtmNoscript);
    };
  }, [gtmId]);

  return null;
};

export const pushToDataLayer = (data: Record<string, any>) => {
  window.dataLayer.push(data);
}; 
import '../styles/globals.css'
import Layout from '../components/Layout';
import Script from 'next/script'
import * as gtag from '../lib/gtag'

function MyApp({Component, pageProps}) {
    return (<Layout>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date()); 
              gtag('config', '${gtag.GA_TRACKING_ID}');
            `,
          }}
        />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-3EX12L863R`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date()); 
              gtag('config', 'G-3EX12L863R');
            `,
          }}
        />
        <Component {...pageProps} />
    </Layout>)
}

export default MyApp
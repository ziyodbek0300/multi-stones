import '../styles/globals.css'
import Layout from '../components/Layout';
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import Head from 'next/head'
function MyApp({Component, pageProps}) {
    return (<Layout>
        {/* Global Site Tag (gtag.js) - Google Ads */}
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

          {/* <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('config', '${gtag.GA_TRACKING_ID}/dNeFCK_q_OADELu4g_Uo', {
              'phone_conversion_number': '(332) 322-2244'
            });
            `,
          }}
        />

        <Script
                  id="gtag-init"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                    gtag('config', '${gtag.GA_TRACKING_ID}/dNeFCK_q_OADELu4g_Uo', {
                      'phone_conversion_number': '(332) 322-2244'
                    });
                    `,
                  }}
                />

        <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': '${gtag.GA_TRACKING_ID}/QaAkCMvJsuEDELu4g_Uo',
                  'event_callback': callback
              });
              return false;
            }`,
            }}
        /> */}

        <Component {...pageProps} />
    </Layout>)
}

export default MyApp
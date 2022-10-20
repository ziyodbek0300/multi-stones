import '../styles/globals.css'
import Layout from '../components/Layout';
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import Head from 'next/head'

function MyApp({Component, pageProps}) {

    return (<Layout>
        {/* Global Site Tag (gtag.js) - Google Ads */}
        {/* <Script
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
        /> */}

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* <Script
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

        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2305511296277892');
            fbq('track', 'PageView');
            `,
          }}
        />

        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5FB4DG');
            `,
          }}
        />       */}

<Script
        id="marquiz-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N84RTFS');`,
        }}
      />

        <Script
          id="service-bell-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(w,d){function e(e,n){w.ServiceBell.q=w.ServiceBell.q||[],w.ServiceBell.q.push([e,n])}if(!w.ServiceBell){var i=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),c=1;c<i;c++)r[c-1]=arguments[c];e(n,r)};["init","identify","dial","alert","bookMeeting","hide","show","expand","collapse","connect","disconnect","showPopup"].forEach((function(r){i[r]=function(){for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];e(n,r)}})),w.ServiceBell=i}var s=d.createElement("script");s.id="service-bell-script",s.src="https://cdn.servicebell.com/main.js",s.async=1;var r=d.getElementsByTagName("script")[0];r.parentNode.insertBefore(s,r)}(window,document);
  ServiceBell("init", "5654b505d3cd4314ba5343c71855c1be", { mode: "iframe-jit" });
            `,
          }}
        />
        <Component {...pageProps} />
    </Layout>)
}

export default MyApp
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from "./_home";
import {ToastContainer} from "react-toastify";
import Script from "next/script";


export default function Home() {
    return (
        <div>
            <Head>
                <title>Multi Stone Masters</title>
                <meta name="description" content="Multi stone masters"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="icon" href="/favicon.ico"/>
                <script>
                    {`
                        function gtag_report_conversion(url) {
                            var callback = function () {
                              if (typeof(url) != 'undefined') {
                                window.location = url;
                              }
                            };
                            gtag('event', 'conversion', {
                                'send_to': 'AW-10982841403/QaAkCMvJsuEDELu4g_Uo',
                                'event_callback': callback
                            });
                            return false;
                          }
                    `}
                </script>
                <script>
                    {`
                        gtag('config', 'AW-10982841403/dNeFCK_q_OADELu4g_Uo', {
                            'phone_conversion_number': '(332) 322-2244'
                          });
                    `}
                </script>
            </Head>

            <main className={styles.main}>
                <HomePage/>
                <ToastContainer/>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

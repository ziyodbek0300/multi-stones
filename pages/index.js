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
                <meta name="facebook-domain-verification" content="nexsh77p3oixpt96g6jjtgzhr5yek2" />
                
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

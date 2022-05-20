
import Head from 'next/head'

import NavbarIndex from '../components/ui/NavbarIndex'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import Header from '../components/ui/Header'
import ContentHome from '../components/ui/home/ContentHome'




export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
        
        <title>Codo a codo</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <NavbarIndex/>

        
          <Header/>
        
        <ContentHome/>
      

      
    </div>
  )
}

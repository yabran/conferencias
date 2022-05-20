import React from 'react'
import Oradores from './Oradores'
import CarrouselHome from './CarrouselHome'
import FormHome from './FormHome'
import Footer from '../Footer'


export default function ContentHome() {

const oradores=[
    {
        name:'Steve Jobs',
        photo:'./assets/steve.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, commodi ex! Esse maxime fugit in dolores, alias ducimus sint cum, natus similique quis porro iste fuga perferendis deleniti ipsam voluptatibus!',
        tags:['JavaScript', 'React']
    },
    {
        name:'Bill Gates',
        photo:'./assets/bill.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, commodi ex! Esse maxime fugit in dolores, alias ducimus sint cum, natus similique quis porro iste fuga perferendis deleniti ipsam voluptatibus!',
        tags:['JavaScript', 'React']
    },
    {
        name:'Ada Lovelace',
        photo:'./assets/ada.jpeg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, commodi ex! Esse maxime fugit in dolores, alias ducimus sint cum, natus similique quis porro iste fuga perferendis deleniti ipsam voluptatibus!',
        tags:['Negocios', 'Startups']
    }
]

const images=['./assets/honolulu.jpg', './assets/hawaii2.jpg', './assets/hawaii3.jpg']

  return (
    <>
        <Oradores oradores={oradores} />
        <CarrouselHome images={images} />
        <FormHome />
        <Footer/>
    </>
  )
}

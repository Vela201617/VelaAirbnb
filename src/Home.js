import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card'
import hikeImage from './Hiking.jpg'
import paintImage from './Wine.jpg'
import horseImage from './Safari.jpg'
import firstRoom from './Room1.webp'
import secondRoom from './Room2.webp'
import thirdRoom from './Room3.jpg'
import fourthRoom from './Room4.jpg'

function Home() {

  return (
    <div className='home'>
       <Banner />

       <div className='home_section'>
          <Card
          src={hikeImage}
          title="Hike Table Mountain"
          description="Hike to the summit of iconic Table Mountain and see the unique Fynbos Floral Kingdom."
          />

          <Card
          src={paintImage}
          title="Paint with red wine in Cape Town"
          description="Sip curated wines, soak in the views, and create a one-of-a-kind piece of art."
          />

          <Card
          src={horseImage}
          title="Discover South African wildlife by horseback"
          description="Explore a game reserve on horseback, spotting giraffes, wildebeest, zebra & other wildlife"
          />
       </div>

       <div className='home_section'>
          <Card
          src={firstRoom}
          title="Entire condo in Cape Town, South Africa"
          description="Cosy with beautiful views"
          price="R849/night"
          />

          <Card
          src={secondRoom}
          title="Room in hotel in Cape Town, South Africa"
          description="City-View Urban Apartment"
          price="R998/night"
          />

          <Card
          src={thirdRoom}
          title="Entire guesthouse in Cape Town, South Africa"
          description="Kai Cottage"
          price="R756/night"
          />

          <Card
          src={fourthRoom}
          title="Entire home in Cape Town, South Africa"
          description="Jamieson Cottage, your quiet cottage accommodation"
          price="R756/night"
          />
       </div>
    </div>
  )
}

export default Home
import React from 'react'
import './SearchPage.css'
import { Button } from "@mui/material";
import SearchResult from './SearchResult'
import elevenRoom from './Room11.webp'
import twelveRoom from './Room12.jpg'
import thirteenRoom from './Room13.webp'
import fourteenRoom from './Room14.webp'
import fifteenRoom from './Room15.webp'

function SearchPage() {
  return (
    <div className="searchPage">
       <div className="searchPage_info">
        <p>62 stays · 26 august to 30 august · 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
       </div>

       <SearchResult
       img={elevenRoom}
       location="Entire rental unit in Cape Town, South Africa"
       title="The Loft @ Foam House"
       description="2 guests · 1 bedroom · 1 bed · 1 bath"
       star={4.98}
       price="R814 / night"
       total="R3,256 total"
       />

       <SearchResult
       img={twelveRoom}
       location="Entire rental unit in Cape Town, South Africa"
       title="Simplydees home"
       description="2 guests · 1 bedroom · 1 bed · 1 bath"
       star={5.0}
       price="R924 / night"
       total="R3,696 total"
       />

       <SearchResult
       img={thirteenRoom}
       location="Entire rental unit in Cape Town, South Africa"
       title="Aurora's Secret - 1605 - 16 On Bree"
       description="2 guests · 1 bedroom · 1 bed · 1 bath"
       star={4.88}
       price="R1,145 / night"
       total="R4,580 total"
       />

       <SearchResult
       img={fourteenRoom}
       location="Private room in guesthouse in Cape Town, South Africa"
       title="Perfectly Located Room w/ Private Ensuite Bathroom"
       description="2 guests · 1 bedroom · 1 bed · 1 private bath"
       star={4.83}
       price="R620 / night"
       total="R2,480 total"
       />

       <SearchResult
       img={fifteenRoom}
       location="Room in hotel in Cape Town, South Africa"
       title="Incredible City View B&B Room in Loop Street"
       description="2 guests · 1 bedroom · 1 bed · 1 private bath"
       star={5.0}
       price="R1,107 / night"
       total="R4,428 total" 
       />
    </div>
  )
}

export default SearchPage
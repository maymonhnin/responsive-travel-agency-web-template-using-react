import React from 'react'
import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Trip from '../components/Trip';

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero 
            cName="hero"
            heroImg="https://images.unsplash.com/photo-1572099606223-6e29045d7de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            title="Your Jounery Your Story"
            text="Choose Your Favourite Destination."
            btnText="Travel Plan"
            url="/"
            btnClass="show"
        />
        <Destination/>

        <Trip/>

        <Footer/>
    </>
  )
}

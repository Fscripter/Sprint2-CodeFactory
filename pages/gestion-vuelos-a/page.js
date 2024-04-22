import Image from 'next/image'
import NavBar from './components/nav/nav'
import SideBar from './components/sidebar/sidebar'

import FlightRegister from './components/flight/flight'

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <section>
        <SideBar></SideBar>
        <FlightRegister></FlightRegister>
      </section>
    </main>
  )
}

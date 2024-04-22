import Image from 'next/image'
import NavBar from '../components/nav/nav'
import SideBar from '../components/sidebar/sidebar'
import QueryPage from './queryPage.js'

function Consultar() {
  return (
    <main>
      <NavBar />
      <section>
        <SideBar />
        <QueryPage></QueryPage>
      </section>
    </main>
  )
}

export default Consultar

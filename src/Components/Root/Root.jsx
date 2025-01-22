import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { NavBar } from "../NavBar/NavBar"


export const Roots = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <NavBar></NavBar>
        <Outlet>

        </Outlet>
        <Footer></Footer>
    </div>
  )
}

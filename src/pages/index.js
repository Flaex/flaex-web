import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"
import Faces from "../components/faces"
import Footer from "../components/footer"
import SEO from "../components/seo"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
// add fas and fab to the library
library.add(fab, fas)

// Main app page
const IndexPage = () => (
  <div className="home">
    <SEO 
      title="Portafolio y blog de @flaex_ | Freddy Polanía"
      description= "Muestras de trabajos, blog de diseño gráfico y tecnologías web"
      keywords= "Diseño logos impresos web tipografía desarrollo web temas CMS front-end"
    />
    <h1 className="hidden">Portafolio & blog Freddy Polanía - @flaex_</h1>
    <div className="menu">
      <Header />
      <Navigation />
      <Faces />
    </div>
    <Footer />
  </div>
)

export default IndexPage

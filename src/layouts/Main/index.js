import React from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import Menu from "@/components/Menu"
import MegaMenu from "@/components/MegaMenu"
import Footer from "@/components/Footer"
import Cookies from "@/components/Cookies"
import * as style from "./style.module.scss"

const MainLayout = ({ children }) => {
  const megaMenuVisible = useSelector((state) => state.settings.megaMenu)

  return (
    <div className={style.layout}>
      <Helmet titleTemplate="%s | Ray Network" title="Cardano Ecosystem">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preload" href="/resources/font/circular.css" as="style" />
        <link href="/resources/font/circular.css" rel="stylesheet" />
        <meta property="og:url" content="https://rraayy.com" />
        <meta
          name="description"
          content="Advanced Ecosystem for Cardano Blockchain Platform. All about ADA finances (DeFi) in one place."
        />
      </Helmet>
      <div>
        <Menu />
        {megaMenuVisible && <MegaMenu />}
        {children}
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
      <Cookies />
    </div>
  )
}

export default MainLayout

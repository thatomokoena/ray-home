import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import About from "@/components/About"
import AboutCompany from "@/components/AboutCompany"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="About" />
      <About />
      <AboutCompany />
    </MainLayout>
  )
}

export default Page

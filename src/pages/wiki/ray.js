import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"

export default () => {
  return (
    <LayoutWiki>
      <Helmet title="Ray Wiki" />
      <div className="ray__block">
        [ray]
      </div>
    </LayoutWiki>
  )
}

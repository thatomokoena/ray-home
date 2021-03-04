import React, { useContext } from "react"
import { Alert } from "antd"
import { globalContext } from "@/provider"
// import style from "./style.module.scss"

export default () => {
  const context = useContext(globalContext)

  return (
    <div className="ray__block">
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">Ray Data Containers</h2>
        <div className="mb-4">
          <Alert
            message="Experimental Feature"
            description="This is an experimental feature that requires further research into the use of Cardano sidechains."
            type="info"
            showIcon
          />
        </div>
        <div className="mb-5">
          <p>
            Data Containers is a protocol that standardizes information written in a blockchain. The basic model is containers that are created by users, with write or read access allowed by the creator.
          </p>
          <p>
            For example, your medical records are always with you: when you visit a new doctor you can share the necessary historical data for your check-up, at the same time the doctor will trust this information, knowing that it is really yours.
          </p>
          <p>
            There can be hundreds of such use cases in your daily life, from medical services, to car maintenance, to a trip to the store. The blockchain era will make your life more secure and simpler.
          </p>
          <p>
            Management of private information is made easier with{' '}
            <a
              href="https://www.atalaprism.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="ray__link"
            >
              Atala PRISM
            </a>
            .
          </p>
        </div>
        {context.isLight && <img src="/resources/images/scheme.png" alt="" className="img-fluid" />}
        {!context.isLight && <img src="/resources/images/scheme-dark.png" alt="" className="img-fluid" />}
      </div>
    </div>
  )
}

import React from "react"


export const wrapRootComponent = ({ Root }) => {
  const ConnectedRootComponent = () => (
    <Root />
  )

  return ConnectedRootComponent
}

// This file contains a simple React component
import * as React from 'react'

/**
 * Component's props
 */
export interface ISimpleComponentProps {
  text: string
}

/**
 * Simple component as an example
 * @param props
 * @constructor
 */
export function SimpleComponent(
  props: React.PropsWithChildren<ISimpleComponentProps>
) {
  const { text, children } = props

  return (
    <div className="simpleComponent">
      <div className="simpleComponent__text" data-testid="test-text">
        {text}
      </div>
      <div className="simpleComponent__content">{children}</div>
    </div>
  )
}

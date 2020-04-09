import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ISimpleComponentProps, SimpleComponent } from '../index'

const defaultProps: ISimpleComponentProps = {
  text: 'Simple text'
}

describe('<SimpleComponent /> Snapshot', () => {

  describe('SimpleComponent Snapshot', () => {
    afterEach(cleanup)

    it('It should take a snapshot', () => {
      const { asFragment } = render(<SimpleComponent {...defaultProps} />)
      expect(asFragment()).toMatchSnapshot()
    })
  })


  describe('SimpleComponent props', () => {
    afterEach(cleanup)

    it('It should render text correctly', () => {
      const { getByTestId } = render(<SimpleComponent {...defaultProps} />)
      expect(getByTestId('test-text')).toHaveTextContent(defaultProps.text)
    })
  })
})



import * as React from 'react'
import { shallow } from 'enzyme'
import { ISimpleComponentProps, SimpleComponent } from '../index'

const defaultProps: ISimpleComponentProps = {
  text: 'Simple text'
}

describe('<SimpleComponent/>', () => {

  it('It should render without errors', () => {
    const component = shallow(
      <SimpleComponent {...defaultProps} />
    )

    expect(component.find('.simpleComponent')).toHaveLength(1)
  })

  it('It should render text correctly', () => {
    const component = shallow(
      <SimpleComponent {...defaultProps} />
    )

    expect(component.find('.simpleComponent__text')).toHaveLength(1)
    expect(component.find('.simpleComponent__text').html()).toMatch(/Simple text/)
  })

  it('It should render children correctly', () => {
    const component = shallow(
      <SimpleComponent {...defaultProps}>
        <span>children element</span>
      </SimpleComponent>
    )

    expect(component.find('.simpleComponent__content')).toHaveLength(1)
    expect(component.find('span').html()).toMatch(/children element/)
  })
})

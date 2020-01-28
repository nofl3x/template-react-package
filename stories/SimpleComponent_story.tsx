import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { SimpleComponent } from '../src/SimpleComponent'

storiesOf('SimpleComponent', module)
  .add('Default SimpleComponent', () => (
    <SimpleComponent text="Simple text">
      Simple content
    </SimpleComponent>
  ))

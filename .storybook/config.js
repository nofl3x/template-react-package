import { configure } from '@storybook/react'

const req = require.context('../stories', true, /_story\.tsx?$/)

function loadStories() {
  req.keys().forEach(req)
}


configure(loadStories, module)

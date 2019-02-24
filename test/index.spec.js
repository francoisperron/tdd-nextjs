import React from 'react'
import { mount } from './testkit/dom-test'
import Home from '../pages/index'

test('Shows homepage', () => {
  const homepage = mount(<Home />)

  expect(homepage.text()).toContain('Hello world')
})
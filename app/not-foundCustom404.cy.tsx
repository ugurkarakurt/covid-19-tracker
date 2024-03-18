import React from 'react'
import Custom404 from './not-found'

describe('<Custom404 />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Custom404 />)
    cy.get('h1').should('contain', "We couldn't find the page you're looking for!")
    cy.get('a').should('contain', 'Go Home Page')
    cy.contains('Go Home Page').click()
  })
})
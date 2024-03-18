import React from 'react'
import RootLayout from './layout'

describe('<RootLayout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )
    cy.get('html').should('exist')
    cy.get('header').should('exist')
    cy.get('main').should('exist')
    cy.get('.creator').should('contain', 'Created by Ugur Karakurt')
  })
})
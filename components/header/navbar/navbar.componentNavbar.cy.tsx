import React from 'react';
import Navbar from './navbar.component';

describe('Navbar', () => {
  it('renders a link to the list page', () => {
    cy.mount(<Navbar />);
    cy.get('nav ul li').contains('World Map').should('exist');
  });

  it('navigates to the list page when the link is clicked', () => {
    cy.mount(<Navbar />);
    cy.get('nav ul li').contains('World Map').click();
    cy.url().should('include', '/list');
  });
});

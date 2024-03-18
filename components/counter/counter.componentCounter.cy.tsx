import React from 'react';
import Counter from './counter.component';

describe('Counter', () => {
  it('renders with initial count', () => {
    cy.mount(<Counter from={0} to={10} />);
    cy.get('span').should('have.text', '0');
  });

});

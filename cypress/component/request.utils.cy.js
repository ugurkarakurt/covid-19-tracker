import { get } from '../../utils/request.utils';

describe('get function', () => {
  it('returns response data for successful request', () => {
    cy.intercept('GET', 'https://example.com', { fixture: 'success.json' }).as('getResponse');

    get('https://example.com').then(() => {
      cy.wait('@getResponse').then((interception) => {
        expect(interception.response.body).to.deep.equal({ message: 'Success' });
      });
    });
  });

  it('returns error response data for failed request', () => {
    cy.intercept('GET', 'https://example.com', { statusCode: 500, body: { message: 'Error' } }).as('getResponse');

    get('https://example.com').then(() => {
      cy.wait('@getResponse').then((interception) => {
        expect(interception.response.body).to.deep.equal({ message: 'Error' });
      });
    });
  });
});

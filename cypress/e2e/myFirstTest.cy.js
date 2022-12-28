/// <reference types="cypress" />

// const navbarText = Cypress.env('navbarText')

describe('My First Test', () => {
  // before(() => {
  //   cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  // })

  // beforeEach('visits the homepage', () => {
  //   cy.visit('/')
  // })

  // afterEach(() => {
  //   cy.log('afterEach hook is here')
  // })

  // after(() => {
  //   cy.log('The final after hook runs once')
  // })

  // it('has an h1 on the page', () => {
  //   cy.visit('/')
  //   cy.get('h1').should('exist')
  // })

  // it('renders the correct h1 text', () => {
  //   cy.get('h1').should('contain.text', 'Kitchen Sink')
  // })

  // it('renders a pragraph under the h1', () => {
  //   cy.get('div.banner').find('p').should('exist')
  // })

  // it('renders a section with the correct elements', () => {
  //   cy.get('div.container').last().within(() => {
  //     cy.get('h4').should('exist')
  //     cy.get('p').should('exist')
  //   })
  // })

  // it('correctly renders the cypress website link', () => {
  //   cy.findByText(navbarText).should('exist')
  // })

  // // Handling Non-Cypress Assync promises
  // it('types into an email field', () => {
  //   cy.visit('/commands/actions')
  //   cy.findByPlaceholderText('Email').type('test@email.com')
  //   cy.wait(2000).then(() => {
  //     // eslint-disable-next-line no-console
  //     fetch('https://api.spacexdata.com/v3/missions')
  //      .then((res) => res.json())
  //      .then((data) => {
  //        // eslint-disable-next-line no-console
  //        console.log(data[0]['mission_name'])
  //      })
  //   })
  // })

  // // Assertions
  // it('shows an active class for the current page', () => {
  //   cy.visit('/commands/actions')
  //   cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
  // })

  // it('should not have an active class on inactive pages', () => {
  //   cy.visit('/commands/actions')
  //   cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active')
  //     .find('a').should('have.attr', 'href', '/commands/querying')
  // })

  // // UI Commands
  // it('links to the actions page correctly', () => {
  //   cy.visit('/')
  //   cy.findAllByText('Actions').first().click({ force: true })
  //   cy.url().should('include', 'commands/actions')
  // })

  // it('let you type in an input field', () => {
  //   cy.visit('/commands/actions')
  //   cy.findByPlaceholderText('Email').type('Test')
  //     .should('have.value', 'Test')
  // })

  // it('let you clear an input field', () => {
  //   cy.visit('/commands/actions')
  //   cy.findByLabelText('Describe:').type('Test describtion')
  //     .should('have.value', 'Test describtion')
  //     .clear().should('be.empty')
  // })

  // it('let you check a checkbox', () => {
  //   cy.visit('/commands/actions')
  //   cy.get('.action-checkboxes [type="checkbox"]').eq(1).click({ force: true })
  //     .should('be.checked')
  // })

  // // Fixtures
  // beforeEach(function () {
  //   cy.fixture('example').then((data) => {
  //     this.data = data
  //     cy.log('This Data', this.data)
  //   })
  // })

  // it('pulls data from a fixture', () => {
  //   cy.fixture('example').then((data) => {
  //     cy.log('Data', data)
  //   })
  // })

  // it('updates fixture data inline', () => {
  //   cy.fixture('example').then((data) => {
  //     data.email = 'updated@mail.cy'
  //     cy.log('Updated', data)
  //   })
  // })

  // it('uses fitxure data in a network request', function () {
  //   cy.visit('/commands/network-requests')
  //   cy.intercept('GET', '**/comments/*', this.data).as('getComment')
  //   cy.get('.network-btn').click()
  //   cy.wait('@getComment').then((res) => {
  //     cy.log('Response', res)
  //   })
  // })

  // // Custom commands
  // it('sets and gets a token from local storage', () => {
  //   cy.setLocalStorage('token', 'abcd123')
  //   cy.getLocalStorage('token').should('eq', 'abcd123')
  // })

  // it('overwrites the type command by using sensitive characters', () => {
  //   cy.visit('/commands/actions')
  //   cy.findByPlaceholderText('Email').type('test@email.com')
  //   cy.findByPlaceholderText('Email').type('test@email.com', { sensitive: true })
  // })

  // Mouse commands
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('triggers a popover on click', () => {
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })

  it('can click on different sections of a canvas', () => {
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(80, 100)
  })

  it('can double click to edit', () => {
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })

  it('can right click to edit', () => {
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })

  it('displays nav links on hover', () => {
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  })
})

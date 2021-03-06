/// <reference path="../support/index.d.ts" />

describe('Test Desktop Navbar', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.visit('/')
  })

  it('should be able to navigate home page', () => {
    cy.get('[id="Home"]').click()
    cy.contains('./Innovation with a mission')
  })

  it('should be able to navigate to /about', () => {
    cy.get('[data-tid="nav-About"]').click()
    cy.contains('./about')
  })

  it('should be able to navigate to /events', () => {
    cy.get('[data-tid="nav-Events"]').click()
    cy.contains('./events')
  })

  it('should be able to navigate to /projects', () => {
    cy.get('[data-tid="nav-Projects"]').click()
    cy.contains('./projects')
  })
})

describe('Test Mobile Navbar', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.viewport('iphone-5')
    cy.visit('/')
    cy.get('[id="Menu"]').click()
  })

  it('should be able to navigate home page', () => {
    cy.get('[id="Home"]').click()
    cy.contains('./Innovation with a mission')
  })

  it('should be able to navigate to /about', () => {
    cy.get('[data-tid="nav-About"]').click()
    cy.contains('./about')
  })

  it('should be able to navigate to /events', () => {
    cy.get('[data-tid="nav-Events"]').click()
    cy.contains('./events')
  })

  it('should be able to navigate to /projects', () => {
    cy.get('[data-tid="nav-Projects"]').click()
    cy.contains('./projects')
  })
})

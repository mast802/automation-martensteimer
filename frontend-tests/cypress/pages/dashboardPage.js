/// <reference types="cypress" />


// Elements
const logoutButton = '.user > .btn'
const viewRoomButton = ':nth-child(1) > .btn'
const viewClientsButton = '.blocks > :nth-child(2) > .btn'

// Action / functions

function performLogout(cy, contentToComfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToComfirm)
}

function veiwRooms(cy, contentToComfirm){
    cy.get(viewRoomButton).click()
    cy.contains(contentToComfirm)
}

function veiwClients(cy, contentToComfirm){
    cy.get(viewClientsButton).click()
    cy.contains(contentToComfirm)
}


// Exports
module.exports = {
    performLogout,
    veiwRooms,
    veiwClients
}
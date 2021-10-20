

import elements from "../fixtures/elements"
import {testdata} from "../fixtures/testdata"

export function cookies () {
    /**
 
 * This goes through the process of accepting the cookies
 */
cy.intercept('GET','https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20211018&st=env').as('getSettings')
cy.wait('@getSettings').its('response.statusCode').should('eq', 200)
cy.xpath(elements.acceptCookies).should('contain',' Akzeptieren ').click()


}


export function goToDiseases() {
   git
    cy.xpath(elements.knowledge,{timeout:9000}).should('contain','Wissen')
    .realHover({position: "right"})
    cy.xpath(elements.diseases,{timeout:9000}).should('contain','Seltene Krankheiten')
    .click({force: true})
    
}

export function enter3m() {

    cy.get(elements.inputDisease, {timeout:9000}).scrollIntoView()
    .should('be.visible')
    .type(testdata.type3m)
    
}
export function clickDiseaseCard() {
    cy.get(elements.diseasesCard, {timeout:9000}).should('be.visible')
    .click()
    cy.title().should("eq", '3M-Syndrom').should('contain','3M-Syndrom')

    
}

export function validateSydrome() {
    cy.xpath(elements.syndrom,{timeout:9000}).should('contain', '3M-Syndrom')
    .invoke('text').then(($test)=>{
        expect($test).to.equal('3M-Syndrom')
    
        
       
    })
   
    
}

export function validatediagnose() {
    let c = cy.xpath(elements.diagnose, {timeout:9000}).should('contain', 'Diagnose')
    .invoke('text').then(($test)=>{
        cy.log($test)
        expect($test).to.equal(testdata.Diagnose)
    
        
       
    })
   
    
}

export function validatetherapie() {
    let c = cy.xpath(elements.therapie, {timeout:9000}).should('contain', 'Therapie')
    .invoke('text').then(($test)=>{
        cy.log($test)
        expect($test).to.equal(testdata.Therapie)
    
        
       
    })
   
    
}

export function validatehaufigkeit() {
    let c = cy.xpath(elements.haufigkeit, {timeout:9000}).should('contain', 'Häufigkeit')
    .invoke('text').then(($test)=>{
        cy.log($test)
        expect($test).to.equal(testdata.Häufigkeit)
    
        
       
    })
    
    
}

export function validateToEnglish() {
    cy.xpath(elements.toEnglish).should('contain', ' English ').click()
    cy.get(elements.pageToEnglish, {timeout:9000}).should('contain', testdata.paragh)
    .invoke('text').then(($test)=>{
        cy.log($test)
        expect($test).to.equal(testdata.paragh)
    
        
       
    })
}
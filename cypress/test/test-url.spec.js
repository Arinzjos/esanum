import { baseUrl } from "../fixtures/testdata";
import {clickDiseaseCard, cookies, enter3m, getTitle, goToDiseases, validatediagnose, validatehaufigkeit, validateSydrome, validatetherapie, validateToEnglish} from "../page_object/page-url";

describe('Open Url', () => {
    
    it('Go to URL and accept cookies', () => {
        
        cy.visit("/"); //use url variable
        
        cookies()
    })


    it('Test go to disease" ', () => {
        // this will take it to the list of diseases
        goToDiseases()
    
    
    });

    it('Test to enter 3m', () => {
        /**
         * We will see 3M-Syndrom when 3m is typed 
         */
        enter3m()
       
        
    });
    
    it('Test that Disease Card is clicked', () => {
        /**
         * Click the 3M-Syndrom
         */
         clickDiseaseCard()
        
    
    
    });
    it('Test to validate Disease Page', () => {
        
         
         validateSydrome()
         validatediagnose()
         validatetherapie()
         validatehaufigkeit()
    
        
    
    
    });

    it('Test to validate Translation (English)', () => {
    
         validateToEnglish()
        
    
    
    });

 

});
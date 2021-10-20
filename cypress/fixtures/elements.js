const elements = {
    acceptCookies: "//*[text()=' Akzeptieren ']",
    knowledge: "//*[@id='app']/div/div/esn-header/header/esn-top-menu/nav/ul/li[3]/a",
    diseases: "//span[contains(text(),'Seltene Krankheiten')]", 
    inputDisease: "input[placeholder='Stichwort']",
    diseasesCard: "sn-picture.ng-star-inserted > .ng-star-inserted",
    syndrom: "//h1[normalize-space()='3M-Syndrom']",
    diagnose: "//h2[normalize-space()='Diagnose']",
    therapie: "//h2[normalize-space()='Therapie']",
    haufigkeit: "//h2[normalize-space()='Häufigkeit']",
    
    toEnglish: "//*[text()=' English ']",
    pageToEnglish: '#disease_492 > p:nth-child(1)',





}
export default elements
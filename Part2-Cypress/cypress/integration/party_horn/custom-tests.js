describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume number changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });

  it('volume number changes when volume slider changes', () => {
    cy.get('#volume-slider')
    .invoke('val', 33)
    .trigger('input');
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });

  it('audio volume changes when slider changes', () => {
    cy.get('#volume-slider')
    .invoke('val', 33)
    .trigger('input');
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop("volume",.33);
    });
  });

  it('Test if the image and sound sources change when you select the party horn radio button', () => {
    cy.get('#radio-party-horn')
    .click();
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3");
    });
    cy.get('#sound-image').then($el => {
      expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg");
    });
  });

  it('Test if the volume image changes when increasing volumes (you must test for all 3 cases)', () => {
    cy.get('#volume-number').clear().type('75');
    
    cy.get('#volume-image').then($el => {
      expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg");
    
      cy.get('#volume-number').clear().type('40');
      cy.get('#volume-image').then($el => {
        expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg");
      });
    
    
      cy.get('#volume-number').clear().type('20');
      
      cy.get('#volume-image').then($el => {
        expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg");
      });
    
      cy.get('#volume-number').clear().type('0');
      
      cy.get('#volume-image').then($el => {
        expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg");
      });
    
    
    });
  });

  it('Test if the honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number')
    .invoke('val', '')
    .trigger('input');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr("disabled", "disabled");
    });

    cy.get('#volume-number')
    .invoke('val', 'Bil')
    .trigger('input');

    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr("disabled", "disabled");
    });

  });

  it('Test if an error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number')
    .invoke('val', '10000')
    .trigger('input');
    cy.get('input:invalid')
    .then($el => {
      expect($el[0].name).to.equal( 'volume-number');
    });
  });


});
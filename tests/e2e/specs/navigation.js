// https://docs.cypress.io/api/table-of-contents

function checkPanelRoutes(linkTitle, navbar) {
  cy.get(`.main-panel a[title="${linkTitle}"]`).click();
  navbar.forEach(item => {
    cy.contains('nav', item);
  });
}

describe('Testing main navigation', () => {
  it('Check if routes are in the navbar', () => {

    cy.visit('/');
    [
      'Miguel Rivas',
      'Projects',
      'Videos',
      'Gallery',
      'Statistics',
      'Resume',
    ].forEach(item => {
      cy.contains('nav', item);
    });

    checkPanelRoutes('DrLogic', [
      'DrLogic',
      'Home',
      'Team',
      'Testimonials',
      'Services',
      'Support',
      'Contact',
      'Error 404',
    ]);

    checkPanelRoutes('Presidente', [
      'Presidente',
      'Carnaval Filter',
      'Carnaval 2015',
      'Verano 2015 Loader',
      'Verano 2015 Filter',
      'Destapa el Coro',
    ]);

    checkPanelRoutes('Formability', [
      'Formability',
      'Demo',
      'Page 401',
      'Page 404',
      'Page 500',
    ]);

    checkPanelRoutes('Nano Grid', [
      'Nano Grid',
      'Home',
      'Documentation',
      'Tests',
    ]);

    checkPanelRoutes('Popkern', [
      'Popkern',
      'Icons',
      'Colors',
    ]);

    checkPanelRoutes('Pixel Perfect Tree', [
      'Pixel Perfect Tree',
      'Error 404',
      'Error 500',
    ]);

    checkPanelRoutes('Canvas', [
      'Canvas',
      'Game',
      'Doll House',
      'Avatar',
      'Pixel',
      'Gear',
      'Wheel',
      'Cube',
      'Spirit',
      'Drakkar',
      'Car',
      'X-wing',
      'Portfolio',
      'Audio 2',
    ]);

    checkPanelRoutes('CSS', [
      'CSS Animation',
      'Window',
      'Pills',
      'Minivan',
      'House',
    ]);

    checkPanelRoutes('Others', [
      'Other Apps',
      'Mineros',
      'Descubria',
      'Voxel',
      'Capital 401',
      'Journey',
      'CSS Study',
      'FlatCSS',
      'Evolution',
      'Stargazer',
      'HTML',
      'Fake Audience',
    ]);

    checkPanelRoutes('Portfolio 2014', [
      'Portfolio 2014',
      'Home',
      'Projects',
      'Contact',
    ]);

    checkPanelRoutes('Portfolio 2016', [
      'Portfolio 2016',
      'Home',
    ]);

    checkPanelRoutes('Portfolio 2018', [
      'Portfolio 2018',
      'Home',
      'DrLogic',
      'Cerveza Presidente',
      'APAP',
      'BPR',
    ]);

  });
})

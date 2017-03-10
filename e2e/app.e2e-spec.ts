import { TablePage } from './app.po';

describe('table App', function() {
  let page: TablePage;

  beforeEach(() => {
    page = new TablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

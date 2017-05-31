import { CookbookClientPage } from './app.po';

describe('cookbook-client App', () => {
  let page: CookbookClientPage;

  beforeEach(() => {
    page = new CookbookClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

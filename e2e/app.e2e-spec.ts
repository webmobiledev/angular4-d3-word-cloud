import { Angular4D3WordCloudPage } from './app.po';

describe('angular4-d3-word-cloud App', () => {
  let page: Angular4D3WordCloudPage;

  beforeEach(() => {
    page = new Angular4D3WordCloudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

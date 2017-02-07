import { GitangularcliPage } from './app.po';

describe('gitangularcli App', function() {
  let page: GitangularcliPage;

  beforeEach(() => {
    page = new GitangularcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

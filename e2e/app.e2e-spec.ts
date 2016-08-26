import { IveysaurStreamPage } from './app.po';

describe('iveysaur-stream App', function() {
  let page: IveysaurStreamPage;

  beforeEach(() => {
    page = new IveysaurStreamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

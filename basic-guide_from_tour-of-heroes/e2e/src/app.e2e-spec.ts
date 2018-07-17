import { AppPage } from './app.po';
import { element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });

  let _heroNames = ['Mr. IQ', 'Magneta', 'Bombasto'];
  let _masterName = 'Master';

  it('should pass properties to children properly', () => {
    let parent = element.all(by.tagName('app-hero-parent')).get(0);
    let heroes = parent.all(by.tagName('app-hero-child'));

    for (let i = 0; i < _heroNames.length; i++) {
      let childTitle = heroes.get(i).element(by.tagName('h3')).getText();
      let childDetail = heroes.get(i).element(by.tagName('p')).getText();

      expect(childTitle).toEqual(_heroNames[i] + ' says');
      expect(childDetail).toContain(_masterName);
    }
  });
});

import { AppPage } from './app.po';
import { element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('コンポーネントの相互作用');
  });
  
  // 入力バインディングで親から子へデータを渡す
  let _heroNames = ['Mr. Nice', 'Narco', 'Bombasto'];
  let _masterName = 'Master';

  it('should pass properties to children properly', function () {
    let parent = element.all(by.tagName('app-hero-parent')).get(0);
    let heroes = parent.all(by.tagName('app-hero-child'));

    for (let i = 0; i < _heroNames.length; i++) {
      let childTitle = heroes.get(i).element(by.tagName('h3')).getText();
      let childDetail = heroes.get(i).element(by.tagName('p')).getText();
      expect(childTitle).toEqual(_heroNames[i] + ' says:');
      expect(childDetail).toContain(_masterName);
    }
  });
  // ...

  // セッターによって入力プロパティの変更を傍受する
  it('should display trimmed, non-empty names', function () {
    let _nonEmptyNameIndex = 0;
    let _nonEmptyName = '"Mr. IQ"';
    let parent = element.all(by.tagName('app-name-parent')).get(0);
    let hero = parent.all(by.tagName('app-name-child')).get(_nonEmptyNameIndex);

    let displayName = hero.element(by.tagName('h3')).getText();
    expect(displayName).toEqual(_nonEmptyName);
  });

  it('should replace empty name with default name', function () {
    let _emptyNameIndex = 1;
    let _defaultName = '"<no name set>"';
    let parent = element.all(by.tagName('app-name-parent')).get(0);
    let hero = parent.all(by.tagName('app-name-child')).get(_emptyNameIndex);

    let displayName = hero.element(by.tagName('h3')).getText();
    expect(displayName).toEqual(_defaultName);
  });
  // ...
});

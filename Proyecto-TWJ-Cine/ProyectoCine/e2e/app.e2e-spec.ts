import { ProyectoCinePage } from './app.po';

describe('proyecto-cine App', () => {
  let page: ProyectoCinePage;

  beforeEach(() => {
    page = new ProyectoCinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import Vue from 'vue';
import NavBar from '@/components/NavBar';

describe('NavBar.vue', () => {
  let navBar;
  beforeAll(() => {
    const Constructor = Vue.extend(NavBar);
    navBar = new Constructor().$mount();
  });

  it('should render links', () => {
    expect(navBar.$el.querySelector('.navbar li').textContent)
      .toContain('HOME');
    expect(navBar.$el.querySelector('.navbar li').textContent)
      .toContain('PROTOTYPES');
    expect(navBar.$el.querySelector('.navbar li').textContent)
      .toContain('IDEAS');
    expect(navBar.$el.querySelector('.navbar li').textContent)
      .toContain('GAMES');
    expect(navBar.$el.querySelector('.navbar li').textContent)
      .toContain('CONTACT');
  });
});

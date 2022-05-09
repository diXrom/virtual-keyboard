export default class Header {
  constructor() {
    this.header = document.createElement('header');
  }

  render() {
    this.header.classList.add('header', 'block-shadowed');
    this.header.innerHTML = `
        <div class="wrapper header__wrapper">
             <div class="header__logo">
                 <div class="logo">
                     <h1 class="logo__title"><span>Virtual</span> keyboard</h1>
                     <h4 class="logo__subtitle"><span>OC</span> Windows</h4>
                 </div>
             </div>
         </div>`;
    return this.header;
  }
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from './components/card';

function App() {
  return (
    <div>
      <body>
    <nav className="nav">
      <a href="#top" className="nav__brand">Brand</a>
      <a href="" className="nav__sign">Sign up</a>
    </nav>
    <header className="header">
      <section className="header__section">
        <h1 className="header__section__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="header__section__email">
          <input type="text" placeholder="Take your Email" className="header__section__email__input"/>
          <button type="submit" id="submit" className="header__section__email__btn">Submit</button>
        </div>
      </section>
    </header>
    <main>
      <div className="cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
      <span></span>
      <section className="formulaire">
        <h2 className="formulaire__title">Contact Us !</h2>
        <form className="formulaire__form">
          <div className="formulaire__form__name">
            <label for="firstName" className="error-message" id="firstNameError">*</label>
            <input name="firstName" id="firstName" type="text" placeholder="Nom" className="formulaire__form__name__input"/>
            <input type="text" placeholder="Prénom" className="formulaire__form__name__input"/>
          </div>
          <div className="formulaire__form__coordonnes">
            <input type="email" placeholder="Adresse Email" className="formulaire__form__coordonnes__input"/>
            <input type="tel" placeholder="Numéro de Téléphone" className="formulaire__form__coordonnes__input"/>
          </div>
          <textarea name="text" id="#" className="formulaire__form__textarea" placeholder="Tape ton message"></textarea>
          <button className="formulaire__form__btn">Submit</button>
        </form>
      </section>
    </main>
    <footer className="footer">
        <ul className="footer__ul">
            <li className="footer__ul__li"><a href="" class="footer__ul__li__a">About </a></li>
            -
            <li className="footer__ul__li"><a href="" class="footer__ul__li__a"> Contact </a></li>
            -
            <li className="footer__ul__li"><a href="" class="footer__ul__li__a"> Term of Us </a></li>
            -
            <li className="footer__ul__li"><a href="" class="footer__ul__li__a"> Privacy Policy</a></li>
        </ul>
        <p className="footer__paragraph">My Website 2022. All right reserved</p>
    </footer>
  </body>
    </div>
  );
}

export default App;

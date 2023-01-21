/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from './components/card';

function App() {
  return (
    <div>
      <body>
    <nav class="nav">
      <a href="#top" class="nav__brand">Brand</a>
      <a href="" class="nav__sign">Sign up</a>
    </nav>
    <header class="header">
      <section class="header__section">
        <h1 class="header__section__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div class="header__section__email">
          <input type="text" placeholder="Take your Email" class="header__section__email__input"/>
          <button type="submit" id="submit" class="header__section__email__btn">Submit</button>
        </div>
      </section>
    </header>
    <main>
      <div class="cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
      <span></span>
      <section class="formulaire">
        <h2 class="formulaire__title">Contact Us !</h2>
        <form action="POST" class="formulaire__form">
          <div class="formulaire__form__name">
            <label for="firstName" class="error-message" id="firstNameError">*</label>
            <input name="firstName" id="firstName" type="text" placeholder="Nom" class="formulaire__form__name__input"/>
            <input type="text" placeholder="Prénom" class="formulaire__form__name__input"/>
          </div>
          <div class="formulaire__form__coordonnes">
            <input type="email" placeholder="Adresse Email" class="formulaire__form__coordonnes__input"/>
            <input type="tel" placeholder="Numéro de Téléphone" class="formulaire__form__coordonnes__input"/>
          </div>
          <textarea name="text" id="#" class="formulaire__form__textarea" placeholder="Tape ton message"></textarea>
          <button class="formulaire__form__btn">Submit</button>
        </form>
      </section>
    </main>
    <footer class="footer">
        <ul class="footer__ul">
            <li class="footer__ul__li"><a href="" class="footer__ul__li__a">About </a></li>
            -
            <li class="footer__ul__li"><a href="" class="footer__ul__li__a"> Contact </a></li>
            -
            <li class="footer__ul__li"><a href="" class="footer__ul__li__a"> Term of Us </a></li>
            -
            <li class="footer__ul__li"><a href="" class="footer__ul__li__a"> Privacy Policy</a></li>
        </ul>
        <p class="footer__paragraph">My Website 2022. All right reserved</p>
    </footer>
    <script
      src="https://kit.fontawesome.com/417135100d.js"
      crossorigin="anonymous"
    ></script>
  </body>
    </div>
  );
}

export default App;

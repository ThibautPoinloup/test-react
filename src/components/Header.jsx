import React from 'react'

export default function Header() {
  return (
    <div>
        <header className="header">
      <section className="header__section">
        <h1 className="header__section__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="header__section__email">
          <input type="text" placeholder="Take your Email" className="header__section__email__input"/>
          <button type="submit" id="submit" className="header__section__email__btn">Submit</button>
        </div>
      </section>
    </header>
    </div>
  )
}

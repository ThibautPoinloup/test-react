function Form() {
    // const formContact = document.getElementById('formContact')

    // formContact.addEventListener('submit', (event) =>{
    //     event.preventDefault();

    //     const firstNameInput = document.getElementById('firstName');
    //     const lastNameInput = document.getElementById('lastName');
    //     const emailInput = document.getElementById('email');
    //     const phoneInput = document.getElementById('phone');
    //     const messageInput = document.getElementById('message');

    //     const formData = {
    //         firstName: firstNameInput.value,
    //         lastName: lastNameInput.value,
    //         email: emailInput.value,
    //         phone: phoneInput.value,
    //         champsText: messageInput.value
    //     }

    //     const errors = {
    //         firstName: false,
    //         lastName: false,
    //         email: false,
    //         phone: false,
    //         champsText: false
    //     }

    //     const firstNameError = document.getElementById('firstNameError');
    //     const lastNameError = document.getElementById('lastNameError');
    //     const emailError = document.getElementById('emailError');
    //     const phoneError = document.getElementById('phoneError');
    //     const messageError = document.getElementById('messageError');

    //     if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
    //         const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    //         const nameRegex = /^[a-zA-Z ]+$/
    //         const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
    //         // On vérifie chaque champs l'un après l'autre pour savoir le(s)quel(s) est/sont vide ou non valide.
    //         if (!formData.firstName || !nameRegex.test(formData.firstName)) {
    //             // Si le champs est invalide on défini l'erreur correspondante sur true.
    //             errors.firstName = true;
    //             firstNameError.style.display = 'block';
    //         }
    //         if (!formData.lastName || !nameRegex.test(formData.lastName)) {
    //             errors.lastName = true;
    //             lastNameError.style.display = 'block';
    //         }
    //         if (!formData.email || !emailRegex.test(formData.email)) {
    //             errors.email = true;
    //             emailError.style.display = 'block';
    //         }
    //         if (!formData.phone || !phoneRegex.test(formData.phone)) {
    //             errors.phone = true;
    //             phoneError.style.display = 'block';
    //         }
    //         if (!formData.message || formData.message.length < 4) {
    //             errors.message = true;
    //             messageError.style.display = 'block';
    //         }
    //     }
    //     if (!Object.values(errors).includes(true)) {
    //         console.log(formData)
    //     }
    // })

    return(
        <div>
        <form id="formContact" className="formulaire__form">
          <div className="formulaire__form__name">
            <div>
                <input name="firstName" id="firstName" type="text" placeholder="Prénom" className="formulaire__form__name__input"/>
                <div>
                    <label for="firstName" className="error-message" id="firstNameError">Entrez votre prénom</label>
                </div>
            </div>
            <div>
                <input type="text" name="lastName" id="lastName" placeholder="Nom" className="formulaire__form__name__input"/>
                <div>
                    <label for="lastName" className="error-message" id="lastNameError">Entrez votre nom</label>
                </div>
            </div>
          </div>
          <div className="formulaire__form__coordonnes">
            <div>
                <input name="email" id="email" type="email" placeholder="Adresse Email" className="formulaire__form__coordonnes__input"/>
                <div>
                    <label for="email" className="error-message" id="emailError">Entrez votre E-mail</label>
                </div>
            </div>
            <div>
                <input name="phone" id="phone" type="tel" placeholder="Numéro de Téléphone" className="formulaire__form__coordonnes__input"/>
                <div>
                    <label for="phone" className="error-message" id="phoneError">Entrez votre numéro de téléphone</label>
                </div>
            </div>
          </div>
          <textarea name="message" id="message" className="formulaire__form__textarea" placeholder="Tape ton message"></textarea>
          <label for="message" className="error-message" id="messageError">Ajoutez votre message</label>
          <button className="formulaire__form__btn">Submit</button>
        </form>
      
    </div>
    )
    
}

export default Form; 
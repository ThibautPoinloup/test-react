import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'




function Card(){
    return (
        <div>
            <article class="cards__article">
             <FontAwesomeIcon icon={faPuzzlePiece} class='cards__article__i'/>
            <i class="fa-solid fa-puzzle-piece cards__article__i"></i>
          <h3 class="cards__article__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p class="cards__article__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia sapiente ab, excepturi rem ipsa et neque iure nemo tempora
            dicta, optio dolorem nam? Ratione explicabo quia iusto nobis aut!
          </p>
        </article>
        </div>

    );
}

export default Card;
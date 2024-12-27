import { NegociacaoControler } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoControler();

const form = document.querySelector(".form");

form?.addEventListener("submit", event => {
    event.preventDefault();//serve pra evitar de fazer o refresh da pagina para ser exibidao o resultado
    controller.adiciona();
});
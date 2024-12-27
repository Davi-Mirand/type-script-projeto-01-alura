import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoControler {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputvalor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp1 = /-/g;
        const data = new Date(this.inputData.value.replace(exp1, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputvalor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this.inputvalor.value = "";
        this.inputQuantidade.value = "";
        this.inputData.value = "";
        this.inputData.focus();
    }
}

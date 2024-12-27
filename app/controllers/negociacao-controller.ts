import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoControler{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputvalor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputvalor = document.querySelector("#valor") as HTMLInputElement;
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao{
        const exp1 = /-/g;
        const data = new Date(this.inputData.value.replace(exp1, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputvalor.value);
        return new Negociacao(data,quantidade,valor)  
    }

    limparFormulario():void {
        this.inputvalor.value = "";
        this.inputQuantidade.value = "";
        this.inputData.value = "";
        this.inputData.focus()
    }

}  
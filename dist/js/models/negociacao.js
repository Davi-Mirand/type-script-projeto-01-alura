export class Negociacao {
    constructor(_data, //consigo ler ate em outros modulos mas n consigo alterar(readonly)
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return this.data;
    }
}

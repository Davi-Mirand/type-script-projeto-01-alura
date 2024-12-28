export class Negociacao {

    constructor(
        public readonly _data: Date,//consigo ler ate em outros modulos mas n consigo alterar(readonly)
        public readonly quantidade: number,
        public readonly valor: number)
    { }



    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
}

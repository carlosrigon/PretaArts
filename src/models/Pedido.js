export default class Pedido {
    constructor (data={
        id: 0,
        cliente: '',
        telefone: '',
        produto: '',
        preco: 0,
        quantidade: 0,
        nomePersona: '',
        cor: '',
        modelo: '',
        material: '',
        valorTotal: 0,
        dataPedido: ''
    }) {
        this.id = data.id;
        this.cliente = data.cliente;
        this.telefone = data.telefone;
        this.produto = data.produto;
        this.preco = data.preco;
        this.quantidade = data.quantidade;
        this.nomePersona = data.nomePersona;
        this.cor = data.cor;
        this.modelo = data.modelo;
        this.material = data.material;
        this.valorTotal = data.valorTotal;
        this.dataPedido = data.dataPedido;
    }
    isValidWithOutId(){
        return this.cliente && this.telefone && this.produto && this.preco > 0 && this.quantidade > 0 && this.nomePersona && this.cor && this.modelo && this.material && this.valorTotal > 0 && this.dataPedido
    }
}
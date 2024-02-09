//Definição da classe produto
class Produto {
  constructor(nome, quantidade, preco) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco = preco;
  }
  //Método para calcular o valor total da quantidade
  calcularValorTotal() {
    return this.quantidade * this.preco;
  }
}

class ProdutoPerecivel extends Produto {
  constructor(nome, quantidade, preco, dataValidade) {
    super(nome, quantidade, preco);
    this.dataValidade = dataValidade;
  }

  verificarValidade() {
    if (this.dataValidade < 2024) {
      return true;
    } else {
      return false;
    }
  }

  exibirMensagemValidade() {
    if (this.verificarValidade()) {
      return "Produto Vencido!";
    } else {
      return "Produto dentro da data validade.";
    }
  }
}

class Estoque {
  constructor() {
    this.produto = [];
  }

  removerProduto(nome) {
    for (let i = 0; i < this.produto.length; i++) {
      if (this.produto[i].nome === nome) {
        //Remover o produto da lista
        this.produto.splice(i, 1);
        break;
      }
    }
  }

  adicionarProduto(produto) {
    this.produto.push(produto);
  }

  verificarEstoqueDisponivel(nome) {
    for (let i = 0; i < this.produto.length; i++) {
      if (this.produto[i].nome === nome) {
        return this.produto[i];
      }
    }
    return "Produto não encontrado!"; // Retorna null se o produto não for encontrado
  }
}

console.log("*****Cadastrando produtos no estoque.*****");
//Teste da classe produto
const produto = new Produto("Arroz Branco", 2, 19.5);
console.log(produto);

const produto2 = new Produto("Feijão", 3, 15.5);

//Teste de classe produto perecível
const produtoPerecivel = new ProdutoPerecivel("Leite", 5, 25.3, 2024);
console.log(produtoPerecivel);

//console.log("Produto vencido? " + produtoPerecivel.verificarValidade());

//Teste da classe estoque
let estoque = new Estoque();
estoque.adicionarProduto(produto);
estoque.adicionarProduto(produtoPerecivel);

//Pulando linha
console.log("\n\n");

//estoque.removerProduto("Arroz Branco")
console.log("*****Lista de produtos no estoque.*****");
console.log(estoque.produto);

//Verificar estoque do produto
console.log("*****Verificando produto no estoque.*****");
console.log(estoque.verificarEstoqueDisponivel(produtoPerecivel.nome));
console.log(estoque.verificarEstoqueDisponivel(produto2.nome));

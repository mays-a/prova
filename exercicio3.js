function registrarPedidos(cliente, prato, mesa, idade) {
    return {
      cliente: cliente,
      prato: prato,
      mesa: mesa,
      idade: idade
    };
}
let pedidos = []
pedidos.push(registrarPedidos("Ana", "Hambúrguer", 1, 10));
pedidos.push(registrarPedidos("Bruno", "Lasanha", 2, 17));
pedidos.push(registrarPedidos("Carlos", "Feijoada", 3, 65));


function classificarIngresso(idade) {
    if (idade < 12) {
      return "Infantil";
    } else if (idade >= 12 && idade <= 17) {
      return "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
      return "Adulto";
    } else {
      return "Sênior";
    }
  }

let pedido1 = pedidos.shift();
let tipo1 = classificarIngresso(pedido1.idade);
let valor1 = 29.9;
console.log("Cliente atendido:", pedido1.cliente);
console.log("Tipo de ingresso:", tipo1);
console.log("Valor da conta: R$", valor1.toFixed(2));
console.log("_________________________");

let pedido2 = pedidos.shift();
let tipo2 = classificarIngresso(pedido2.idade);
let valor2 = 29.9;
console.log("Cliente atendido:", pedido2.cliente);
console.log("Tipo de ingresso:", tipo2);
console.log("Valor da conta: R$", valor2.toFixed(2));
console.log("_________________________");

let pedido3 = pedidos.shift();
let tipo3 = classificarIngresso(pedido3.idade);
let valor3 = 29.9;
console.log("Cliente atendido:", pedido3.cliente);
console.log("Tipo de ingresso:", tipo3);
console.log("Valor da conta: R$", valor3.toFixed(2));
console.log("_________________________");


console.log("Pedidos restantes:", pedidos.length);

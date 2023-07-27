export default class Order {
  pizzaId: number;
  quantity: number;
  constructor(pizzaId: number, quantity: number) {
    this.pizzaId = pizzaId;
    this.quantity = quantity;
  }
}

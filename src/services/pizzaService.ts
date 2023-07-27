import Order from "../models/Order";
import Pizza from "../models/Pizza";
import LoginService from "./authService";

export default class PizzaService {
  static async loadPizzas(): Promise<Pizza[]> {
    return fetch(`http://192.168.1.145:8080/pizza/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: LoginService.jwt,
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  }

  static async saveOrder(order: Order[]): Promise<boolean> {
    return fetch(`http://192.168.1.145:8080/pizza/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: LoginService.jwt,
      },
      body: JSON.stringify(order),
    })
      .then(
        (response) => {
          console.log(response.status);
          return response.status === 200;
        },
        () => {
          console.log("erreur");
          return false;
        }
      )
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}

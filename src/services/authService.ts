import Account from "../models/Account";
import JWT from "../models/JWT";
import Login from "../models/Login";

export default class AuthService {
  static jwt = "";
  static isLogged = false;

  static async getJwt(login): Promise<JWT> {
    try {
      const response = await fetch(`http://192.168.1.145:8080/auth/signin`, {
        method: "POST",
        body: JSON.stringify(login),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        return await response.json();
      } else if (response.status === 401) {
        this.isLogged = false;
      }
    } catch (error) {
      this.isLogged = false;
    }
  }

  static async login(username: string, password: string): Promise<boolean> {
    await this.getJwt(new Login(username, password)).then((response) => {
      console.log(response);
      this.jwt = response.tokenHeader + " " + response.token;
    });

    console.log(this.jwt);

    const isAuthenticated = this.jwt != undefined;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.isLogged = isAuthenticated;
        resolve(isAuthenticated);
      }, 1000);
    });
  }

  static async createAccount(account: Account) {
    try {
      const response = await fetch(`http://192.168.1.145:8080/auth/signup`, {
        method: "POST",
        body: JSON.stringify(account),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        (response) => (this.jwt = response.tokenHeader + " " + response.token);
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    } catch (error) {
      this.isLogged = false;
    }
  }

  static handleError(error: Error): void {
    this.isLogged = false;
  }
}

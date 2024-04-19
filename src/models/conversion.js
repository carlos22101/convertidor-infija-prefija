import { createStack } from "../controllers/dependencies.js";

export class conversion {
    
    constructor() {
        this.stackSalida = createStack();
        this.listaOperadores = createStack();
    }

    convert(expresion) {
        expresion = expresion.match(/[0-9]+|[-+*/()]/g);
        expresion = expresion.reverse();

        expresion.forEach(element => {
            switch (element) {
                case "+":
                case "-":
                case "*":
                case "/":
                    this.listaOperadores.push(element);
                    break;
                case "(":
                    this.listaOperadores.push(element);
                    this.listaOperadores.pop();
                    while (this.listaOperadores.peek() != ")")
                        this.stackSalida.push(this.listaOperadores.pop());
                    this.listaOperadores.pop();
                    break;
                case ")":
                    this.listaOperadores.push(element);
                    break;
                default:
                    this.stackSalida.push(element);
                    break;
            }
        });

        while (!this.listaOperadores.isEmpty())
            this.stackSalida.push(this.listaOperadores.pop());

        expresion = [];

        while (this.stackSalida.size() != 0)
            expresion.push(this.stackSalida.pop());

        let expresionPrefija = expresion.join();

        expresion.reverse();

        return [this.stackSalida.pop(), expresionPrefija];
    }
}
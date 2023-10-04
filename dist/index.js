"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assalariado_1 = require("./model/Assalariado");
let a1 = new Assalariado_1.Assalariado("Jubileu", "3412124141", 50000);
a1.setNome("Jubileia");
a1.setCpf("707070706024");
a1.setSalario(1000);
console.log(`Nome: ${a1.getNome()}, Cpf: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);
//# sourceMappingURL=index.js.map
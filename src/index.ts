import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissonado";
import { Horista } from "./model/Horista";

let a1 = new Assalariado ("Jubileu", "3412124141", 50000);

a1.setNome("Jubileia");
a1.setCpf("707070706024");
a1.setSalario(1000);
console.log(`Nome: ${a1.getNome()}, Cpf: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);


let c1 = new Comissionado (`Jubileu`, `1234567542`, 300000, 0.1);

c1.setNome("Jubileia");
c1.setCpf("2131231321");
c1.setTotalVendas(150000);
c1.setTaxaComissao(0.2);
console.log(`Nome: ${c1.getNome()}, Cpf: ${c1.getCpf()}`);
console.log(`Vencimento: ${c1.vencimento()}`);


let h1 = new Horista (`Jubileu`, `1234567542`, 5, 23);

h1.setNome("Jubileia");
h1.setCpf("52341244324");
h1.setValorHora(1.00);
h1.setHorasTrabalhadas(24);
console.log(`Nome: ${h1.getNome()}, Cpf: ${h1.getCpf()}`);
console.log(`Vencimento: ${h1.vencimento()}`);
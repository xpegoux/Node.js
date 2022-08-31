/*
Aluno: Erivaldo Barros
Aplique o Factory Method para fabricar computadores, usando como base o exemplo visto de static e parametrizado no hipertexto.

Considere que:
- os produtos devem implementar uma interface comum;
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
- há dois tipos de computadores: pc e server;
- RAM e HD devem estar em GB;
- CPU deve estar em GHz;
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;
- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos.*/

import {Computador, Server} from "./creator.js"

var computador = new Computador("12", "250", "2.30");
computador.toString();

var server = new Server("36", "5000", "10");
server.toString();
--> Para listar todos os dados de uma tabela usamos o comando SELECT * FROM usuarios; Obs: usuários é o nome da tabela...
SELECT * FROM usuarios;

--> Para realizar consultas ESPECÍFICAS no mysql usamos o comando reservado WHERE, que significa “onde”, ou seja, quero listar apenas os usuários que possuem a mesma idade, então faríamos:
SELECT * FROM usuarios WHERE idade = 18;

--> O WHERE serve como uma condição de filtro, outro exemplo, quero usuários que possuem o nome “Neto”:
SELECT * FROM usuarios WHERE nome = "Neto Sullivan";

--> Retornar usuários que possuem a idade maior que 18 anos:
SELECT * FROM usuarios WHERE idade >= 18;


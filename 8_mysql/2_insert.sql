--> Sempre que quiser inserir um novo dado ou novos dados no database usaremos o comando INSERT INTO + NOME TABELA(campos a serem inseridos, ou seja, as colunas que receberam novos dados) VALUES(valores de cada coluna);
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Neto Barros",
    "netobarr@mail.com",
    24
);
--> Pode-se notar que a forma em que é colocado os dados segue a ordem mostrada entre parenteses (nome, email, idade), e o tipo de dados também, nome e email são varchar então são entre aspas e idade é int então é sem aspas.
--> O comando usado para editar um registro existente ou atualiza-lo dentro de uma tabela é o UPDATE.
UPDATE usuarios SET nome = "Neto" WHERE nome = "Neto Sullivan";
--> O que o comando faz acima? Ele vai atualizar (update) a tabela usuarios na coluna (set) nome onde (where) esta coluna possui o dado nome = "Neto Sullivan", e aí vai substituir "Neto Sullivan" por apenas "Neto".

--> Assim como o DELETE, NUNCA UTILIZE O UPDATE DESTA FORMA: UPDATE tabela SET coluna = "registro;
-->	Então use sempre com o WHERE!


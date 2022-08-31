--> O DELETE serve para deletar registros dentro de uma tabela.
DELETE FROM usuarios WHERE nome = "Neto Barros";
--> O que acontece acima é que o, delete irá buscar (from) na tabela usuarios onde (where) a coluna nome com o registro "Neto Barros" exista, e após encontrar o registro ele irá deletar permanentemente.
-->	CUIDADO se usar apenas o: DELETE FROM tabela;, irá deletar toda a tabela, então use sempre com o WHERE.
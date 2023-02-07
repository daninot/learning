/* 

~~~~~~~~~~~~~ funções ~~~~~~~~~~~~~

+ console.log() imprime no terminal o que vai dentro do parêntesis;
+ string.toLowerCase() converte todos os caracteres da string informada para letras minúsculas (se forem algarismos, nada é convertido);
+ number(string) converte string em número;
+ string(número) converte número em string;


~~~~~~~~~~~~~ comentários ~~~~~~~~~~~~~~ 

+ p executar usa "node nomedoarquivo.js";
+ 0.5 é a mesma coisa q .5 como valor de constante/ponto flutuante;
+ podemos utilizar o número Pi através do código Math.PI
+ Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. 
  No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN;
+ não precisa definir o tipo da constante, apenas "const" basta. Exemplo: const valor. Mas pra ele saber quando é string, tem que colocar entre aspas e tanto faz qual usar.
+ existe uma terceira forma de escrever strings... chama template string 
+ p fazer comparação é usado ===; 
+ === retorna true ou false;
+ == converte o conteúdo em string para fazer a comparação (conversão implícita);
+ concatenação também converte a variável em string;
+ null e undefined são diferentes:
    null => ausência de valor, pode ser atribuído a uma variável;
    undefined => ausência de valor para variáveis que não foram inicializadas (funções sem return também recebem undefined);
+ tem 3 tipos de escrever variáveis:
    var => funciona em qualquer parte do código; pode usar antes de declarar; carrega o último valor atribuído linearmente;
    let => pode dar erro se usar antes de a variável ser declarada; usa quando precisa reatribuir valores; carrega o valor do escopo;
    const => constante no seu significado real; não pode mudar o valor dela, tem q criar e inicializar; carrega o valor do escopo;
+ 0 e strings vazias (" ") são false 




~~~~~~~~~~~~~ definições ~~~~~~~~~~~~~ 

+ NaN = Not a Number;
+ let é um tipo de variável que não é constante; 



*/
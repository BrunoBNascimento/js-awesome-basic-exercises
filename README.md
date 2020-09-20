# Javascript awesome exercises

## Pré-requisitos
 - NodeJS
 - npm ou yarn
 - vscode ou editor de texto preferido
 - Não é necessário implementar qualquer tipo de interface

### Antes de tudo:

#### Cada pasta que implementa o exercicio, precisa ser um projeto node.
 - Inicie criando a pasta e iniciando um projeto npm.
 - Crie um script que irá rodar o seu programa, ex: `npm run start`

-----

**Dado o seguinte array:**
`['Carlos', 'Roberto', 'Roberto', 'Max', 'Carlos', undefined, null]`
 - Implemente uma função, que recebe um array como argumento e retorna ele sem valores repetidos.
 - Limpe o array retirando os undefined´s e null´s

-----

> A forma mais geral de uma lista permite a inserção ou eliminação de um elemento em qualquer posição na lista. Se
> restringirmos a ocorrência de inserção e eliminação a uma extremidade da lista, por exemplo, extremidades 
> superiores, então temos uma estrutura de dados chamada de pilha.
> Este interessante fenômeno é conhecido como **LIFO**. **LIFO** é um acrônimo para a expressão inglesa **Last In, First Out**
> que, em português significa último a entrar, primeiro a sair.

**Dado isso, implemente uma função que recebe uma variável “livro” e retorna a pilha de livros atualizada**

-----

> Uma fila ou queue em inglês é uma estrutura de dados que usa o método FIFO(acrônimo para First In, First Out, que em > português significa primeiro a entrar, primeiro a sair). A idéia fundamental da fila é que só podemos inserir um novo
> elemento no final da fila e só podemos retirar o elemento do início.

**Dito isso, implemente um programa que simula a fila de um supermercado**

-----

> Teste de unidade é toda a aplicação de teste nas assinaturas de entrada e saída de um sistema. Consiste em validar
> dados válidos e inválidos via I/O sendo aplicado por desenvolvedores ou analistas de teste.

**Leitura adicional:** [Testes unitários com NodeJS](https://dev.to/yuriburk/criando-testes-unitarios-com-jest-em-uma-aplicacao-node-js-31dk)

**Dada as leituras acima, implemente testes unitários para os programas que você criou em cada projeto acima**

-----

> A pesquisa ou busca binária (em inglês binary search algorithm ou binary chop) é um algoritmo de busca em vetores 
> que segue o paradigma de divisão e conquista. Ela parte do pressuposto de que o vetor está ordenado e realiza 
> sucessivas divisões do espaço de busca comparando o elemento buscado (chave) com o elemento no meio do vetor.

**Dado o seguinte array:** `[10, 20, 30, 40, 50, 60, 70, 80, 90]`

**Implemente uma função que realiza a busca binária no array, implemente testes unitários**
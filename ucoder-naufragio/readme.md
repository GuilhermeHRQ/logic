# Naufrágio
**1278** | Tempo Limite: 3 | Nível: 3 | Assunto: Ordenação

Descrição
---
O grande navio Novotanic foi construído para ser o navio mais seguro já construído e, portanto, não precisa carregar consigo botes salva vidas para todos seus tripulantes. Contudo ainda existe uma remota possibilidade de naufrágio. Neste caso deve-se determinar a ordem de prioridade em que as pessoas entrarão no bote salva vidas. Para ser justo e rápido na decisão deseja-se que o navio tenha um sistema computacional capaz de listar a ordem correta em que os tripulantes devem adentrar nos botes, obedecendo a seguinte ordem de prioridade:

Primeiros as mulheres, depois as crianças, depois os médicos, os programadores e por fim o restante das pessoas dando prioridade para os mais jovens. São consideradas crianças todos aqueles que têm de 0 à 12 anos de idade. Em caso de empate em um dos critérios, deve-se analisar os critérios seguintes, ou seja, uma mulher que seja médica tem prioridade sobre uma mulher que não é médica.

A seguir tem-se um exemplo de lista ordenada com a prioridade definida no sistema:

Entrada
---
Cada linha da entrada corresponde aos dados de um tripulante, contendo as seguintes informações separadas por ponto e vírgula: nome;F ou M indicando o gênero; Idade sem casa decimal; S ou N indicando se é médico;S ou N indicando se é programador;

Toda linha termina com um caractere fim de linha.

O arquivo de entrada pode possuir no máximo 500 linhas. A entrada termina com o fim do arquivo de entrada.

Saída
---
Imprima na saída a classificação contendo a posição e o nome do respectivo tripulante, separados por um espaço em branco. A última linha da saída deve terminar com um caractere de fim de linha.

Exemplos de Entrada
---
Bill Gates;M;65;N;S

Manoel Joaquim;M;25;N;N

Maria Silva ;F;45;N;N

Drauzio Varela;M;60;S;N

Ada Lovelace;F;50;N;S

Jose Silva;M;18;N;N

Zezinho;M;8;N;N

Exemplos de Saída
---
1 Ada Lovelace

2 Maria Silva

3 Zezinho

4 Drauzio Varela

5 Bill Gates

6 Jose Silva

7 Manoel Joaquim
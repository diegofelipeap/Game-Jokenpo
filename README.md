# <h1>Jokenpô</h1>

<h2>Descrição:</h2>
Jokenpô é um jogo de Pedra, Papel e Tesoura desenvolvido utilizando HTML, CSS e JavaScript. O projeto é uma aplicação web simples onde você pode jogar contra a máquina e acompanhar o placar das partidas. A <strong>identidade visual</strong> do projeto é baseada no jogo <b><i>Alex Kidd in Miracle World XD</i></b>.<br>

https://github.com/diegofelipeap/Game-Jokenpo/assets/78945288/738df827-e342-44b0-a953-e109d8801430

## Tecnologias Utilizadas
![image](https://github.com/diegofelipeap/Game-Jokenpo/assets/78945288/83cdf6b1-1c69-4676-85b6-e573bff9d440)
![image](https://github.com/diegofelipeap/Game-Jokenpo/assets/78945288/d9c59257-a15d-49c7-8f56-4f43c6f24458)
![image](https://github.com/diegofelipeap/Game-Jokenpo/assets/78945288/85381284-5ffe-4212-91fc-746f190744a5)




## Funcionalidades
- Escolha entre Pedra, Papel ou Tesoura para jogar contra a máquina.
- O resultado do jogo (vitória, derrota ou empate) é exibido na tela.
- Placar dinâmico que atualiza conforme as partidas são jogadas.

## Estrutura do Projeto
O projeto é composto pelos seguintes arquivos:

- `index.html`: Estrutura principal da página, contém os botões de interação e exibição do resultado e placar.
- `style.css`: Estilização da aplicação, incluindo a utilização de uma fonte retro (`Press Start 2P`) e um background animado.
- `script.js`: Lógica do jogo, incluindo a lógica de seleção de jogadas e cálculo do resultado.

## Detalhes do Código
### HTML
- O arquivo HTML define a estrutura básica da aplicação, com um cabeçalho, botões para cada opção do jogo (Pedra, Papel e Tesoura), e elementos para exibir o resultado e os placares.
- A página é estilizada com um favicon e utiliza a fonte retro `Press Start 2P` do Google Fonts para dar um estilo de video-game antigo.

### JavaScript
- A lógica do jogo é implementada em JavaScript.
- `playHuman(humanChoice)`: Função chamada quando o usuário faz uma escolha (Pedra, Papel ou Tesoura). Esta função chama `playTheGame` com a escolha do usuário e uma escolha aleatória da máquina.
- `playMachine()`: Função que retorna uma escolha aleatória para a máquina.
- `playTheGame(human, machine)`: Função que compara as escolhas do usuário e da máquina, atualiza os placares e exibe o resultado na tela.
- As escolhas são gerenciadas através de um ENUM (`GAME_OPTIONS`) para garantir consistência.

### CSS
- O arquivo CSS estiliza a aplicação com uma aparência retro. A fonte `Press Start 2P` é usada para todos os textos.
- O fundo da página utiliza uma imagem GIF (`Jokenpo_background.gif`) que dá uma sensação de movimento constante.
- Um overlay semi-transparente escuro é aplicado sobre o fundo para aumentar a legibilidade dos textos.

## Instruções para Execução
1. Clone o repositório para sua máquina local:
    ```sh
    git clone https://github.com/seu-usuario/jokenpo.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd jokenpo
    ```
3. Abra o arquivo `index.html` no seu navegador preferido.

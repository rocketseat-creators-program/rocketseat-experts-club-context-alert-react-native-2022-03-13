<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Criando um alert global usando context no react native

Fala dev! Nesta aula vamos usar o context do react, que normalmente é usado apenas para gerenciar dados do estado global, para criar um componente visual que ficará também disponível para toda a aplicação.

Dessa forma, vamos construir um alert que poderá ser chamado de qualquer ponto do código, sem que você precise importar o componente de alert dentro de cada tela, além de gerenciar o estado de visualização de forma individual.

É importante ressaltar que é preciso ter muita cautela nesse tipo de abordagem, pois os contexts normalmente fazem com que toda a árvore de componentes internos sejam re-renderizados para toda mudança de state dentro deles. Por isso é importante usar com moderação esse tipo de abordagem, entendo exatamente os trade-offs associados e avaliando quando vale ou não a pena seguir com essa implementação.

Ao final dessa aula você terá um projeto base React Native com a navegação entre telas configurada, além do alert global pronto para ser usado no seu próximo projeto.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/26548010?v=4" width="75px;"/>](https://github.com/femaffezzolli) |
| :--------------------------------------------------------------------------------------------------------------: |
|                                [Felipe Maffezzoli](https://github.com/femaffezzolli)                                 |
# Desafio Técnico - Sistema de Despacho de Entregas

## Agradecimento

Gostaria de agradecer pela oportunidade de participar deste processo seletivo. Foi uma experiência interessante que me permitiu aplicar conhecimentos de desenvolvimento web,
consumo de APIs e lógica de programação para resolver um problema próximo de um cenário real.

---

## Objetivo

O objetivo deste projeto é realizar a atribuição automática de pedidos a entregadores disponíveis, selecionando sempre o entregador mais próximo do local de coleta.

Além disso, o sistema trata situações como:

* Entregadores já ocupados;
* Falta de entregadores disponíveis;
* Coordenadas inválidas nos pedidos.

---

## Tecnologias Utilizadas

### Backend

* Node.js
* Express
* CORS

### Frontend

* React
* JavaScript
* Fetch API

---

## Como Executar o Projeto

### Backend
Execute esses comandos no Terminal:

```bash
cd backend
```
```bash
npm install
```
```bash
npm start
```
O servidor roda na porta: http://localhost:3001

---

### Frontend
Execute esses comandos no Terminal:
```bash
cd frontend
```

```bash
npm install
```
```bash
npm run dev
```
Cole no navegador: http://localhost:5173

---


## O que priorizei?

A atribuição segue os seguintes passos:

1. Carregar pedidos e entregadores.
2. Filtrar apenas entregadores disponíveis.
3. Validar coordenadas dos pedidos.
4. Calcular a distância entre cada pedido e os entregadores livres utilizando a fórmula de Haversine.
5. Selecionar o entregador mais próximo.
6. Marcar o entregador como utilizado para evitar múltiplas atribuições.
7. Retornar o resultado em formato JSON.

---

## Decisões de Implementação

- Escolhi o Express por ser uma ferramenta simples e eficiente para criar APIs em Node.js.
- Utilizei React para construir uma interface dinâmica e facilitar a atualização dos dados na tela.
- Separei o projeto em frontend e backend para deixar a organização do código mais clara.
- Utilizei arquivos JSON para armazenar os dados dos pedidos e entregadores, já que o desafio não exigia banco de dados.
- Para encontrar o entregador mais próximo de cada pedido, utilizei a fórmula de Haversine, que calcula a distância entre coordenadas geográficas.
---

## Melhorias Futuras

Caso o projeto evoluísse para um ambiente de produção, algumas melhorias seriam:

* Conexão a banco de dados;
* Crud;
* Interface com estilização avançada;
* Autenticação e autorização de usuários.

---

## Aprendizados

Durante o desenvolvimento deste desafio, tive a oportunidade de aprofundar meus conhecimentos em:

* Consumo de APIs REST;
* Gerenciamento de estado com React Hooks;
* Integração entre frontend e backend;
* Cálculo de distâncias geográficas utilizando latitude e longitude;
* Organização de aplicações full stack.

## Fontes

1. https://youtu.be/2RWsLmu8yVc?si=PceyLNF3CC1kr8KG
2. https://youtu.be/aJR7f45dBNs?si=Po8_eMwcN29_0KeO
3. https://youtu.be/_gHr2Pe5LCY?si=c888HdBVTUCv1O-Y
4. https://youtu.be/hHM-hr9q4mo?si=-G66teWWqOcp4_1H
5. https://youtu.be/PyrMT0GA3sE?si=HmP0qLwxKqWIbeRY
6. https://youtu.be/37SwqREHRGI?si=1u5shjnsEg50QsPx
7. https://youtu.be/ycIxWTEI908?si=z5q8V_4XvMiA09gQ
8. https://youtu.be/CisMh-qrd5c?si=uHJ3d1_2bOXfgEXj
9. https://youtu.be/0gXiTWMikDU?si=n344u9suamqJvRrS

---

## Considerações Finais

Primeiramente, gostaria de agradecer novamente pela oportunidade de participar deste processo seletivo.

Este foi um dos projetos mais desafiadores que já desenvolvi até o momento. Durante a realização do desafio, precisei sair da minha zona de conforto, pesquisar bastante e buscar soluções para problemas que eu ainda não havia enfrentado na prática.

Apesar de já possuir conhecimentos em desenvolvimento, eu ainda não tinha experiência desenvolvendo uma aplicação utilizando React integrada a um backend próprio. Por isso, além de testar minhas habilidades técnicas, este desafio também me proporcionou um grande aprendizado sobre comunicação entre frontend e backend, gerenciamento e organização de aplicações web.

Ao longo do desenvolvimento, procurei dar o meu melhor em cada etapa, buscando compreender a lógica por trás das tecnologias utilizadas e não apenas fazer o projeto funcionar.

Independentemente do resultado do processo, considero esta experiência muito valiosa para minha evolução como desenvolvedor e estudante. Mais uma vez, agradeço pela oportunidade e pelo tempo dedicado à avaliação do meu projeto.

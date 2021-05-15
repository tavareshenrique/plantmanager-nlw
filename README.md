<p align="center">
   <img src="https://raw.githubusercontent.com/tavareshenrique/plantmanager-nlw/main/assets/icon.png" alt="MoveIt" width="280"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/tavareshenrique/">
      <img alt="Henrique Tavares" src="https://img.shields.io/badge/-Henrique Tavares-00C063?style=flat&logo=Linkedin&logoColor=white" />
   </a>
 <img alt="Repository size" src="https://img.shields.io/github/repo-size/tavareshenrique/plantmanager-nlw?color=00C063">

  <a aria-label="Last Commit" href="https://github.com/tavareshenrique/plantmanager-nlw/commits/master">
    <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/tavareshenrique/plantmanager-nlw?color=00C063">
  </a>
  <a href="https://github.com/tavareshenrique/plantmanager-nlw/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tavareshenrique/plantmanager-nlw?color=00C063">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-00C063">
</p>

> <b>PlantManager</b> é um aplicativo desenvolvido utilizando React Native e TypeScript durante a NLW#5 da [Rocketseat](https://github.com/Rocketseat). Esse projeto consiste em ajuda-lo a gerenciar suas plantihas. 🌱💚

<div align="center">
  <sub>O <strong>PlantManager</strong> foi desenvolvido com 💚 pelo
    <a href="https://github.com/tavareshenrique">Henrique Tavares</a>
  </sub>
</div>

# :pushpin: Conteúdo

- [Tecnologias](#computer-tecnologias)
- [Executando](#construction_worker-executando)
- [Autores](#computer-autores)
- [Licença](#closed_book-licença)

### Demonstração

<div>
  <img src="https://j.gifs.com/mqZwo0.gif" width="400" />
  <img src="https://j.gifs.com/ywP8EW.gif" width="400" />
</div>

# :computer: Tecnologias

Este projeto foi feito utilizando as seguintes tecnologias:

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)
- [date-fns](https://date-fns.org/)
- [lottie-react-native](https://github.com/lottie-react-native/lottie-react-native)
- [react-native-svg](https://github.com/react-native-svg/react-native-svg)
- [react-native-iphone-x-helper](https://github.com/ptelad/react-native-iphone-x-helper)

# :construction_worker: Executando

## 1. Clone o Repositório

```bash
git@github.com:tavareshenrique/plantmanager-nlw.git
```

## 2. Instale as Dependencias

```bash
yarn
```

## 3. Acesse o arquivo `api` na pasta `src/services` e altere a `baseURL` para a sua

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SUA_URL:3333',
});

export default api;
```

## 4. Inicie o Servidor através do JSON Sever

```bash
yarn server
```

> 💡 **Observação**
>
> Caso não tenha o **JSON Server** instalado ou não saiba o que é, [acesse aqui.](https://github.com/typicode/json-server#getting-started)

## 5. Inicie o Expo

```bash
expo start
```

> 💡 **Observação**
>
> **_5.1._** É necessário ter o [Expo](https://docs.expo.io/get-started/installation/) instalado.
> **_5.2._** Ao dar o comando, irá abrir uma página no seu navegador, nessa página você pode escolher por onde executar o App: Emulador Android, Emulador iOS, Celular Android ou iPhone.

# :computer: Autores

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/tavareshenrique/" title="Linkedin">@tavareshenrique</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Rocketseat</b>
        </sub>
       </a>
       <br />
       <a href="https://github.com/Rocketseat" title="Linkedin">@Rocketseat</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Creators">🚀</a>
    </td>
  </tr>
</table>

# :closed_book: Licença

Este projeto está sob a licença [MIT](./LICENSE).

<h4 align="center">
  <img src=".github/01.gif" width="180px" /></br>
 <b>☀🌑 Expo Dark Light Template</b>
</h4>
<p align="center">
    <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/ialexanderbrito/expo-darknlight?style=flat-square">
    <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/ialexanderbrito/expo-darknlight?style=flat-square">
    <img alt="GitHub Issues" src="https://img.shields.io/github/issues/ialexanderbrito/expo-darknlight?style=flat-square">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/ialexanderbrito/expo-darknlight?style=flat-square">
    <a href="https://www.npmjs.com/package/react-native-template-expo-darknlight">
    <img alt="Expo" src="https://img.shields.io/npm/v/expo.svg?label=Expo&style=flat-square"></a>
    <a href="https://www.npmjs.com/package/react-native-template-expo-darknlight">
    <img alt="NPM" src="https://img.shields.io/npm/v/react-native-template-expo-darknlight.svg?label=Expo%20Dark%20n%20Light&style=flat-square"></a>
    <img alt="License" src="https://img.shields.io/github/license/ialexanderbrito/expo-darknlight?style=flat-square">
</p>
<br>

### :rocket: Tecnologias usadas
Esse projeto contém as seguintes tecnologias:
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [React Navigation](https://reactnavigation.org/)
  - [Native Navigation](https://reactnavigation.org/)
  - [Stack Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- Para mais detalhes, veja o <kbd>[package.json](./package.json)</kbd>

### 💻 Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando **React Native** e o **Expo**, já com a implementação
do **Dark Mode** e **Light Mode** nativo do aparelho.

### ⚙ Como rodar este projeto

### Pré-requisitos

Para conseguir utilizar o template, seja através do **Expo CLI** ou com uma **cópia local dos arquivos**, siga os passos abaixo.

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

**[Expo](https://expo.io)**

E também será preciso um editor, eu indico o **[VSCode](https://code.visualstudio.com/)**

### 🧭 Instalando

Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```bash
$ expo init --template react-native-template-expo-darknlight
```

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

### 📁 Estrtura de Arquivos

```bash
expo-darknlight
├── assets/
├── src/
│   ├── @types/
│   │   └── styled.d.ts
│   ├── pages/
│   │   └── Home/
│   │       └── index.tsx
│   │       └── styles.ts
│   ├── themes/
│   │   └── index.ts
│   │   └── dark.ts
│   │   └── light.ts
│   ├── index.tsx
│   ├── routes.js
├── .gitignore
├── babel.config.js
├── App.tsx
├── app.json
├── tsconfig.json
├── package.json
 ```

### 🗂 Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;


  - **@types** - Diretório para armazenar types que o compilador não reconhece nas bibliotecas.

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Home** - Diretório exemplo de uma página cujo nome é **Home**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.tsx`;

      - **index.tsx** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;
      - **styles.ts** - Arquivo com toda a estilização da página a serem renderizados;

  - **routes.tsx** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigators disponibilizados na biblioteca React Navigation;

- **App.tsx** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/routes.tsx` que por sua vez chama as rotas da aplicação;

- **tsconfig.json** - Arquivo de configuração do TypeScript no Editor, ele é o responsável por ativar o Auto Complete de códigos TypeScript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

### 🔄 Notas de Atualização

- 1.0.0
  - Versão Inicial do Projeto.
- 1.0.2
  - Removido algumas pastas.
- 1.0.3
  - Adicionado ESLint, Prettier e EditorConfig.
  - Padronização dos códigos.
- 1.0.4
  - Correção de erros e bugs.
- 1.0.5
  - Correção de erros e bugs.

### :recycle: Como contribuir

- Fork esse repositório;
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### 📱 Social

Me acompanhe nas minhas redes sociais.

<p align="center">

   <a href="https://github.com/ialexanderbrito" target="_blank" >
    <img alt="Github" src="https://img.shields.io/badge/-Github-lightgrey?style=flat-square&logo=Github&logoColor=white"></a>

 <a href="https://twitter.com/ialexanderbrito" target="_blank" >
     <img alt="Twitter" src="https://img.shields.io/badge/-Twitter-9cf?style=flat-square&logo=Twitter&logoColor=white"></a>

  <a href="https://instagram.com/ialexanderbrito" target="_blank" >
    <img alt="Instagram" src="https://img.shields.io/badge/-Instagram-ff2b8e?style=flat-square&logo=Instagram&logoColor=white"></a>

  <a href="https://facebook.com/ialexanderbrito" target="_blank" >
    <img alt="Facebook" src="https://img.shields.io/badge/-Facebook-blue?style=flat-square&logo=Facebook&logoColor=white"></a>

  <a href="https://www.linkedin.com/in/ialexanderbrito/" target="_blank" >
    <img alt="Linkedin" src="https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>

  <a href="mailto:ialexanderbrito@gmail.com" target="_blank" >
    <img alt="Email" src="https://img.shields.io/badge/-Email-c14438?style=flat-square&logo=Gmail&logoColor=white"></a>

  <a href="https://api.whatsapp.com/send?phone=5521979434402" target="_blank" >
    <img alt="WhatsApp" src="https://img.shields.io/badge/-WhatsApp-brightgreen?style=flat-square&logo=WhatsApp&logoColor=white"></a>
</p>

---

Feito com ❤️ by **Alexander** 🤙🏾

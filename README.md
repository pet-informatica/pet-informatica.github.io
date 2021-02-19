<div align="center">

<p>
<img width="256" src="./static/images/logos/pet-primary-signature-light.svg" alt="PET-Informática"/>
</p>
<p>O site oficial do PET-Informática.</p>

</div>

---

## Introdução

Este repositório inclui o site oficial do PET-Informática, disponível em <https://pet.cin.ufpe.br/>.

O site utiliza a framework Vue [Nuxt.js](https://nuxtjs.org/), além de [Tailwind CSS](https://tailwindcss.com/) para a interface.

## Alterando conteúdo do site

O conteúdo do site está disponível como um objeto em [`assets/content-model/data.ts`](assets/content-model/data.ts). Dados como atividades e a lista de integrantes do PET podem ser alterados diretamente através desse arquivos, e as alterações se refletirão no conteúdo do site. Os tipos referentes à esse objeto estão disponíveis em [`assets/content-model/content-model.ts`](assets/content-model/content-model.ts).

## Executando localmente

Para executar localmente, você precisará da versão LTS do [Node.js](https://nodejs.org) mais recente.

Primeiro, instale as dependências do processo executando no terminal o seguinte comando na pasta raiz do repositório:

    npm install

Depois, execute:

    npm run dev

No navegador de sua preferência, acesse `http://localhost:3000` para visualizar o site. 

## Gerando uma versão de produção

Na pasta raiz do repositório, execute:

    npm run generate

Os arquivos estáticos do site estarão disponíveis na pasta `dist` do repositório, criada automaticamente.

## Implantação

**Certifique-se de que a _branch_ `main` está sempre em estado implantável e pronta para produção.** O conteúdo desta branch é implantado automaticamente no GitHub Pages, através de uma GitHub Action que gera uma versão de produção do site e atualiza a branch `gh-pages`.

A atualização no servidor do CIn precisa ser realizada manualmente, gerando uma versão de produção e copiando os arquivos da pasta `dist` para o diretório `~pet/public_html/www/` do _webserver_.

Certifique-se também de atualizar o conteúdo do diretório `static/images` na CDN, caso haja alguma alteração.

# resume-site

Currículo web / apresentação profissional em formato de site estático (React + Vite). Sem
backend, sem dependências em runtime além do React — pode ser hospedado em qualquer serviço de
arquivos estáticos (GitHub Pages, Netlify, Vercel, S3, etc).

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Como usar pra você (ou outra pessoa)

Todo o conteúdo do site vem de **um único arquivo**: [`src/data/profile.ts`](src/data/profile.ts).
Edite os campos ali (nome, cargo, resumo, contatos, experiências, formação, habilidades,
projetos, idiomas) — nenhum outro arquivo precisa mudar. Os tipos TypeScript nesse arquivo
garantem que você não esqueça nenhum campo obrigatório.

- **Foto**: coloque a imagem em `public/` (ex. `public/foto.jpg`) e defina
  `avatarUrl: "/foto.jpg"` no perfil. Deixe `null` para mostrar as iniciais do nome num avatar
  circular (comportamento padrão).
- **Seções**: se quiser remover uma seção (ex. Projetos), basta remover o componente
  correspondente de `src/App.tsx`.
- **Cores/tema**: variáveis de cor (claro/escuro) estão no topo de `src/index.css`
  (`:root` e `:root[data-theme="dark"]`).

## Baixar como PDF

O botão "Baixar PDF" no cabeçalho chama a impressão do navegador (`window.print()`). O CSS em
`src/App.css` (bloco `@media print`) já esconde o cabeçalho/rodapé e ajusta o layout pra ficar
limpo no PDF — sem precisar de nenhuma biblioteca de geração de PDF.

## Build e deploy

```bash
npm run build
```

Gera a versão estática final em `dist/`. Suba essa pasta em qualquer host de arquivos estáticos:

- **GitHub Pages**: `npm run build`, depois publique o conteúdo de `dist/` na branch
  `gh-pages` (ou configure `vite.config.ts` com `base: '/nome-do-repo/'` se o site não for
  publicado na raiz do domínio).
- **Netlify/Vercel**: comando de build `npm run build`, diretório de publicação `dist`.

## Estrutura

```
src/
├── data/profile.ts       # todo o conteúdo do currículo (edite aqui)
├── components/           # uma seção por arquivo (Hero, Experience, Skills, ...)
├── useTheme.ts           # hook do toggle claro/escuro (persiste em localStorage)
├── App.tsx               # monta as seções na ordem em que aparecem no site
├── App.css               # layout e estilos de cada seção + regras de impressão
└── index.css             # reset global e variáveis de tema (cores, fontes)
```
# Preview
# Preview

# Achados de Casa Inteligente

Landing page responsiva feita com Next.js, React e Tailwind CSS (v4), pronta para deploy na Vercel.

## Antes de publicar: configurar os links de afiliado

Abra `app/page.tsx` e procure por `affiliateUrl` no início do arquivo. Substitua cada ocorrência de:

`INSERIR_AQUI_SEU_LINK_DA_SHOPEE_OU_MERCADO_LIVRE`

pelo link de afiliado correto do produto correspondente, incluindo `https://`.

Exemplo:

```ts
affiliateUrl: "https://seulink-de-afiliado.example/...",
```

Os botões só abrem links externos quando o valor configurado começa com `http`. Se o link ainda não foi preenchido, o botão leva à seção informativa da página e aparece um lembrete de configuração.

## Executar localmente

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

Para validar a versão de produção:

```bash
npm run build
npm start
```

## Publicar na Vercel pelo GitHub

1. Crie um repositório no GitHub e envie todos os arquivos desta pasta.
2. Entre em https://vercel.com/new.
3. Importe o repositório do GitHub.
4. A Vercel detectará Next.js automaticamente. Mantenha as configurações padrão e clique em **Deploy**.
5. Depois do deploy, a Vercel fornecerá uma URL pública.

## Publicar sem GitHub

1. Entre em https://vercel.com/new e escolha a opção de importar ou fazer deploy de um projeto.
2. Para a forma mais simples, instale Node.js e a Vercel CLI no computador:
   `npm i -g vercel`
3. Dentro desta pasta, rode `vercel` e siga as instruções. Para publicar em produção, rode `vercel --prod`.

## Personalização

- Nome visual: procure por `casa conectada` e `Casa Conectada` em `app/page.tsx`.
- SEO: edite `metadata` em `app/layout.tsx`.
- Cores e estilos: edite as variáveis no topo de `app/globals.css`.
- Os desenhos dos produtos são ilustrações CSS, para a página funcionar sem depender de imagens externas.
- O texto de transparência sobre links de afiliados já está no rodapé. Mantenha uma divulgação clara e confira as regras do programa de afiliados usado.

## Nota sobre produtos

Antes de publicar, confirme a compatibilidade, disponibilidade e descrição atual de cada produto nas páginas oficiais ou no anúncio do vendedor. Não foram incluídos preços, avaliações nem promessas de economia.

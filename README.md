# Legiva

Site institucional da Legiva, preparado para publicação como frontend estático no GitHub e no Cloudflare Pages.

## Teste local

```bash
pnpm install
pnpm run check
pnpm run build
pnpm run dev
```

O build final é gerado na pasta `dist/`.

## Configuração no Cloudflare Pages

Conecte o repositório GitHub ao Cloudflare Pages usando:

| Configuração | Valor |
|---|---|
| Framework preset | Vite |
| Build command | `pnpm run build` |
| Build output directory | `dist` |
| Node.js | 20 ou superior |
| Variáveis de ambiente | Nenhuma obrigatória para o site atual |

O formulário funciona no frontend: salva uma cópia local no navegador e abre o WhatsApp com o briefing preenchido. O número de destino está definido em `src/pages/Home.tsx`, na constante `whatsappDestination`. Confirme esse número antes da publicação.

## Domínio na Cloudflare

Depois do primeiro deploy, adicione o domínio em **Workers & Pages → Custom domains**. Se o domínio estiver usando DNS da Cloudflare, siga a configuração indicada no painel e aguarde a emissão do certificado. Não altere o endereço final até testar o domínio personalizado.

## Observações

As imagens usadas pelo site foram copiadas para `public/assets`, portanto o projeto não depende mais dos caminhos `/manus-storage`. A configuração Vite também foi simplificada para remover plugins específicos da hospedagem original.

Antes de divulgar o endereço, teste o site em celular e desktop, o menu, todos os links, o favicon, as imagens, o formulário e a abertura do WhatsApp.

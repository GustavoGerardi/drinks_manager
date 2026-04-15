# Drinks Manager

Aplicacao de gestao de bebidas em `Next.js` com arquitetura de micro frontends baseada em `multi-zones`.

## Arquitetura

- `apps/shell`: gateway principal e ponto de entrada da experiencia.
- `apps/catalog`: micro frontend de catalogo de bebidas.
- `apps/inventory`: micro frontend de estoque e reposicao.
- `apps/sales`: micro frontend de vendas e desempenho.
- `apps/api`: backend simples em `Express` com dados ficticios.
- `packages/ui`: componentes compartilhados entre os apps.
- `packages/types`: tipos e mocks compartilhados.

Cada micro frontend roda como uma aplicacao `Next.js` independente e o `shell` faz a composicao por rota:

- `/catalog`
- `/inventory`
- `/sales`

## Como rodar

```bash
npm install
npm run dev
```

Portas esperadas:

- `shell`: `3000`
- `catalog`: `3001`
- `inventory`: `3002`
- `sales`: `3003`
- `api`: `4000`

## Rotas da API

- `GET http://localhost:4000/health`
- `GET http://localhost:4000/api/beverages`
- `GET http://localhost:4000/api/beverages/:id`

## Estrategia de micro frontends

Foi adotado o modelo de `multi-zones` do Next.js porque ele mantem:

- deploy independente por dominio
- ownership claro por equipe
- compartilhamento de design system via workspace
- composicao simples por roteamento

## Proximos passos sugeridos

1. Conectar cada dominio a uma API real.
2. Adicionar autenticacao e perfis de acesso.
3. Persistir dados de estoque, pedidos e catalogo.
4. Criar CI para build isolado de cada micro frontend.

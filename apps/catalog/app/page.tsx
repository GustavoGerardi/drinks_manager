import { beverages } from "@drinks/types";
import { BeverageTable, Section, StatCard } from "@drinks/ui";
import Link from "next/link";

const averagePrice =
  beverages.reduce((total, item) => total + item.price, 0) / beverages.length;

export default function CatalogPage() {
  return (
    <main className="domain-page">
      <section className="domain-hero">
        <div>
          <span className="eyebrow">Catalogo</span>
          <h1>Portifolio de bebidas organizado para precificacao e exposicao.</h1>
          <p>
            Este micro frontend concentra cadastro, segmentacao e governanca de
            produtos sem depender do dominio de estoque ou vendas.
          </p>
        </div>
        <Link href="http://localhost:3000" className="back-link">
          Voltar ao shell
        </Link>
      </section>

      <Section
        eyebrow="Indicadores"
        title="Panorama do catalogo"
        description="Resumo rapido para a equipe responsavel pelo ciclo de vida dos produtos."
      >
        <div className="stats-grid">
          <StatCard
            label="SKUs"
            value={`${beverages.length}`}
            hint="Produtos atualmente publicados"
          />
          <StatCard
            label="Preco medio"
            value={`R$ ${averagePrice.toFixed(2)}`}
            hint="Referencia para revisao de margem"
          />
        </div>
      </Section>

      <Section
        eyebrow="Lista"
        title="Bebidas cadastradas"
        description="Tabela compartilhada pelo design system do workspace."
      >
        <BeverageTable beverages={beverages} />
      </Section>
    </main>
  );
}

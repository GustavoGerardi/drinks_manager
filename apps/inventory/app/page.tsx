import Link from "next/link";
import { beverages } from "@drinks/types";
import { Section, StatCard } from "@drinks/ui";

const lowStockItems = beverages.filter((item) => item.stock > 0 && item.stock <= 30);
const unavailableItems = beverages.filter((item) => item.stock === 0);

export default function InventoryPage() {
  return (
    <main className="domain-page">
      <section className="domain-hero">
        <div>
          <span className="eyebrow">Estoque</span>
          <h1>Operacao preparada para evitar ruptura e reduzir reposicao reativa.</h1>
          <p>
            Este modulo foca em disponibilidade, sinalizacao de risco e ritmo de
            abastecimento entre centro de distribuicao e ponto de venda.
          </p>
        </div>
        <Link href="http://localhost:3000" className="back-link">
          Voltar ao shell
        </Link>
      </section>

      <Section
        eyebrow="Alertas"
        title="Estado atual do estoque"
        description="Indicadores operacionais para decisao rapida da equipe de abastecimento."
      >
        <div className="stats-grid">
          <StatCard
            label="Baixo estoque"
            value={`${lowStockItems.length}`}
            hint="Produtos com cobertura critica"
          />
          <StatCard
            label="Ruptura"
            value={`${unavailableItems.length}`}
            hint="Itens indisponiveis para venda"
          />
        </div>
      </Section>

      <Section
        eyebrow="Reposicao"
        title="Fila priorizada de reabastecimento"
        description="Produtos ordenados pelo impacto operacional."
      >
        <div className="restock-list">
          {[...unavailableItems, ...lowStockItems].map((item) => (
            <article key={item.id} className="restock-card">
              <div>
                <strong>{item.name}</strong>
                <span>
                  {item.category} · {item.volume}
                </span>
              </div>
              <div className="restock-meta">
                <span>{item.stock} un.</span>
                <small>{item.supplier}</small>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}

import Link from "next/link";
import { salesSummary } from "@drinks/types";
import { Section, StatCard } from "@drinks/ui";

const recentOrders = [
  { id: "PED-9182", channel: "App", total: "R$ 182,40", status: "Pago" },
  { id: "PED-9181", channel: "Loja", total: "R$ 64,50", status: "Separacao" },
  { id: "PED-9180", channel: "Marketplace", total: "R$ 236,80", status: "Pago" }
];

export default function SalesPage() {
  return (
    <main className="domain-page">
      <section className="domain-hero">
        <div>
          <span className="eyebrow">Vendas</span>
          <h1>Performance comercial com foco em receita, pedidos e ritmo de conversao.</h1>
          <p>
            Este micro frontend acompanha indicadores de negocio e a esteira
            operacional dos pedidos em tempo quase real.
          </p>
        </div>
        <Link href="http://localhost:3000" className="back-link">
          Voltar ao shell
        </Link>
      </section>

      <Section
        eyebrow="Desempenho"
        title="Resumo comercial"
        description="Cards orientados ao acompanhamento diario e mensal."
      >
        <div className="stats-grid">
          {salesSummary.map((item) => (
            <StatCard
              key={item.period}
              label={item.period}
              value={`R$ ${item.revenue.toLocaleString("pt-BR")}`}
              hint={`${item.orders} pedidos · ticket medio R$ ${item.averageTicket.toFixed(2)}`}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Pedidos"
        title="Ultimos pedidos"
        description="Visao operacional para atendimento e faturamento."
      >
        <div className="orders-list">
          {recentOrders.map((order) => (
            <article key={order.id} className="order-card">
              <div>
                <strong>{order.id}</strong>
                <span>{order.channel}</span>
              </div>
              <div className="order-meta">
                <strong>{order.total}</strong>
                <small>{order.status}</small>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}

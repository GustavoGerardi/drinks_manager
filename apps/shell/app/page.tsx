import { beverages, salesSummary } from "@drinks/types";
import { Section, ShellCard, StatCard } from "@drinks/ui";

const lowStockCount = beverages.filter((item) => item.status === "Baixo estoque").length;
const outOfStockCount = beverages.filter((item) => item.status === "Em falta").length;
const totalRevenue = salesSummary.find((item) => item.period === "Mes")?.revenue ?? 0;

export default function ShellHomePage() {
  return (
    <main className="shell-page">
      <section className="hero">
        <div>
          <span className="eyebrow">Drinks Manager</span>
          <h1>Gestao de bebidas com times independentes e experiencia integrada.</h1>
          <p>
            O shell concentra navegacao, indicadores globais e composicao por rotas.
            Cada dominio de negocio evolui em seu proprio micro frontend.
          </p>
        </div>
        <div className="hero-actions">
          <a href="/catalog" className="primary-link">
            Abrir catalogo
          </a>
          <a href="/inventory" className="secondary-link">
            Ver estoque
          </a>
          <a href="/teste" className="secondary-link">
            Ver Teste Page
          </a>
        </div>
      </section>

      <Section
        eyebrow="Visao executiva"
        title="Indicadores do ecossistema"
        description="Leitura rapida dos dados consolidados que o shell pode consumir de APIs ou BFFs."
      >
        <div className="stats-grid">
          <StatCard
            label="Produtos ativos"
            value={`${beverages.length}`}
            hint="Catalogo sincronizado com o dominio de produtos"
          />
          <StatCard
            label="Baixo estoque"
            value={`${lowStockCount}`}
            hint="Itens que precisam de reposicao ainda hoje"
          />
          <StatCard
            label="Em falta"
            value={`${outOfStockCount}`}
            hint="Produtos indisponiveis no estoque central"
          />
          <StatCard
            label="Receita do mes"
            value={`R$ ${totalRevenue.toLocaleString("pt-BR")}`}
            hint="Resumo trazido pelo micro frontend de vendas"
          />
        </div>
      </Section>

      <Section
        eyebrow="Dominios"
        title="Micro frontends por contexto"
        description="Cada modulo abaixo pode ter deploy, squad e backlog proprios."
      >
        <div className="shell-grid">
          <ShellCard
            title="Catalogo"
            description="Cadastro, precificacao e classificacao das bebidas."
            href="/catalog"
            accent="#ff7a59"
          />
          <ShellCard
            title="Estoque"
            description="Reposicao, ruptura e distribuicao entre unidades."
            href="/inventory"
            accent="#00a6a6"
          />
          <ShellCard
            title="Vendas"
            description="Desempenho comercial, pedidos e ticket medio."
            href="/sales"
            accent="#3b82f6"
          />
        </div>
      </Section>
    </main>
  );
}

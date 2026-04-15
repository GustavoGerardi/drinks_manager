import type { Beverage } from "@drinks/types";
import type { CSSProperties, ReactNode } from "react";

type StatCardProps = {
  label: string;
  value: string;
  hint: string;
};

type ShellCardProps = {
  title: string;
  description: string;
  href: string;
  accent: string;
};

type SectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="panel">
      <div className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <article className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{hint}</small>
    </article>
  );
}

export function ShellCard({ title, description, href, accent }: ShellCardProps) {
  return (
    <a className="shell-card" href={href} style={{ "--accent": accent } as CSSProperties}>
      <div>
        <span className="eyebrow">Micro frontend</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="shell-card-link">Abrir modulo</span>
    </a>
  );
}

export function BeverageTable({ beverages }: { beverages: Beverage[] }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Fornecedor</th>
            <th>Preco</th>
            <th>Estoque</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {beverages.map((beverage) => (
            <tr key={beverage.id}>
              <td>
                <strong>{beverage.name}</strong>
                <span>{beverage.volume}</span>
              </td>
              <td>{beverage.category}</td>
              <td>{beverage.supplier}</td>
              <td>R$ {beverage.price.toFixed(2)}</td>
              <td>{beverage.stock}</td>
              <td>
                <span className={`status status-${slugify(beverage.status)}`}>
                  {beverage.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export type BeverageCategory = "Cerveja" | "Destilado" | "Vinho" | "Nao alcoolico";

export type Beverage = {
  id: string;
  name: string;
  category: BeverageCategory;
  volume: string;
  supplier: string;
  price: number;
  stock: number;
  status: "Ativo" | "Baixo estoque" | "Em falta";
};

export type SaleSummary = {
  period: string;
  revenue: number;
  orders: number;
  averageTicket: number;
};

export const beverages: Beverage[] = [
  {
    id: "bev-001",
    name: "IPA Serra Alta",
    category: "Cerveja",
    volume: "600 ml",
    supplier: "Brew Serra",
    price: 18.9,
    stock: 124,
    status: "Ativo"
  },
  {
    id: "bev-002",
    name: "Gin Citrus Lab",
    category: "Destilado",
    volume: "750 ml",
    supplier: "Mixology Co.",
    price: 89.9,
    stock: 22,
    status: "Baixo estoque"
  },
  {
    id: "bev-003",
    name: "Vinho Tinto Vale do Sol",
    category: "Vinho",
    volume: "750 ml",
    supplier: "Vinicola Aurora Sul",
    price: 64.5,
    stock: 48,
    status: "Ativo"
  },
  {
    id: "bev-004",
    name: "Cha Gelado Pessego",
    category: "Nao alcoolico",
    volume: "350 ml",
    supplier: "Fresh Waves",
    price: 7.5,
    stock: 0,
    status: "Em falta"
  }
];

export const salesSummary: SaleSummary[] = [
  {
    period: "Hoje",
    revenue: 2480,
    orders: 84,
    averageTicket: 29.52
  },
  {
    period: "Semana",
    revenue: 16450,
    orders: 531,
    averageTicket: 30.98
  },
  {
    period: "Mes",
    revenue: 68290,
    orders: 2179,
    averageTicket: 31.34
  }
];

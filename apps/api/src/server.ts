import cors from "cors";
import express from "express";
import { beverages } from "@drinks/types";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({
    ok: true,
    service: "drinks-api"
  });
});

app.get("/api/beverages", (_request, response) => {
  response.json({
    items: beverages,
    total: beverages.length
  });
});

app.get("/api/beverages/:id", (request, response) => {
  const beverage = beverages.find((item) => item.id === request.params.id);

  if (!beverage) {
    response.status(404).json({
      message: "Bebida nao encontrada"
    });
    return;
  }

  response.json(beverage);
});

app.listen(port, () => {
  console.log(`drinks-api running on http://localhost:${port}`);
});

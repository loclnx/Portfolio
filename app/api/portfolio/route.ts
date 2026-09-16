import portfolio from "../../../data/portfolio.json";
import type { PortfolioData } from "../../../data/portfolio";
import { projects } from "../../../data/projects";

/** Mock API endpoint backed by data/portfolio.json. */
export function GET() {
  return Response.json({ ...(portfolio as PortfolioData), projects });
}

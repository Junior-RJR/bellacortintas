export interface TechnicalDocs {
  id: number
  filename: string
  type: "FISPQ" | "Boletim Técnico"
}

export const docs: TechnicalDocs[] = [
  { id: 1, filename: "Fispq - Economico Azul Sereno.pdf", type: "FISPQ" },
  { id: 2, filename: "BT - Massa Corrida.pdf", type: "Boletim Técnico" }
]
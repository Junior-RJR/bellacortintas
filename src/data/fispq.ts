export interface TechnicalDocs {
  id: number
  title: string
  filename: string
  type: "FISPQ" | "Boletim Técnico"
  url: string
}

export const docs: TechnicalDocs [] = [
  {
    id: 1,
    title: "Fispq - Economico Azul Sereno",
    filename: "Fispq - Economico Azul Sereno.pdf",
    type: "FISPQ",
    url: "/fispq/Fispq - Economico Azul Sereno.pdf"
  },
  {
    id: 2,
    title: "BT - Massa Corrida",
    filename: "BT - Massa Corrida.pdf",
    type: "Boletim Técnico",
    url: "/fispq/BT - Massa Corrida.pdf"
  }
]
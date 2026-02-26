export interface ProductVariant {
  size: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  surface: string;
  dilution: string;
  diluteWith: string;
  finish: string;
  yield: string;
  tools: string;
  dryingTime: string;
  coats: string;
  area: string;
  odor: string;
  washable: boolean;
  antiMold: string;
  observation?: string;
  variants: ProductVariant[];
  fispqUrl?: string;
  technicalBulletinUrl?: string;
}

/**
 * Para adicionar as imagens dos produtos:
 * 1. Coloque os arquivos de imagem na pasta /public/produtos/
 * 2. Atualize o campo 'image' com o caminho relativo, ex: "/produtos/tam1.jpg"
 */
export const products: Product[] = [
  {
    id: "massa-corrida",
    name: "Massa Corrida Bellacor",
    description: "Massa Corrida Bellacor, nivela e corrige pequenas imperfeições em superfícies internas. Proporciona um acabamento liso e requintado. É de fácil aplicação e lixamento. Se aplicada uma fina camada, a lata de 25kg pode render até 75m².",
    brand: "Bellacor",
    category: "Premium",
    surface: "Paredes",
    dilution: "Pronta para o uso",
    diluteWith: "-",
    finish: "-",
    yield: "Até 75m² por demão (25kg)",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 30 minutos / final 5h",
    coats: "De 2 a 3 demãos",
    area: "Interior",
    odor: "Baixo",
    washable: false,
    antiMold: "Não",
    variants: [
      // { size: "25 KG", image: "https://storage.googleapis.com/generative-ai-media/bellacor_product_18l.png" },
      // { size: "3,6 L", image: "https://storage.googleapis.com/generative-ai-media/bellacor_product_36l.png" },
      // { size: "900 ML", image: "https://storage.googleapis.com/generative-ai-media/bellacor_product_900ml.png" }
      { size: "25 KG", image: "/produtos/tam1.jpg" },
      { size: "3,6 L", image: "/produtos/tam2.jpg" },
      { size: "900 ML",image: "/produtos/tam3.jpg" }
    ]
  },
  {
    id: "zarcao",
    name: "Zarcão Bellacor",
    description: "O Zarcão Bellacor ajuda na proteção de diversas superfícies permitindo boa durabilidade. Ótima aderência.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Madeiras e Metais",
    dilution: "De 10 a 20%",
    diluteWith: "Aguarrás",
    finish: "Acetinado",
    yield: "Até 50m² por demão",
    tools: "Espátula e desempenadeira",
    dryingTime: "Toque 30 min / demãos 3h / Final 5h",
    coats: "De 2 a 3 demãos",
    area: "Interior",
    odor: "Médio-Alto",
    washable: false,
    antiMold: "Alta Cobertura",
    variants: [
      { size: "3,6 L", image: "/produtos/267903-1.jpeg" },
    ]
  },
  {
    id: "acrilica-economica",
    name: "Tinta Acrílica Fosca Econômica",
    description: "Acrílico Fosco Econômico Bellacor é uma tinta especialmente formulada para pintura interna. Uma opção econômica pra você que quer gastar pouco e mesmo assim ter um bom acabamento. Possui ótimo rendimento e fácil aplicação.",
    brand: "Bellacor",
    category: "Econômica",
    surface: "Paredes",
    dilution: "De 10 a 20%",
    diluteWith: "Água",
    finish: "Fosco",
    yield: "Até 200m² por demão (18L)",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 30 minutos / demãos 2h/ final 4h",
    coats: "De 2 a 3 demãos",
    area: "Interior",
    odor: "Médio-Alto",
    washable: false,
    antiMold: "Baixa ação",
    variants: [
      { size: "18 L", image: "/produtos/265250.jpg" },
      { size: "3,6 L", image: "/produtos/266716.jpg" }
    ]
  },
  {
    id: "esmalte-solvente",
    name: "Esmalte Sintético Brilhante Premium (Base Solvente)",
    description: "Esmalte sintético tradicional, alta proteção, alto brilho e fino acabamento. Possui excelente poder de cobertura, proteção para superfícies de metais e madeiras.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Madeiras e Metais",
    dilution: "Até 10%",
    diluteWith: "Aguarrás",
    finish: "Brilhante",
    yield: "Até 80m² por demão (3,6L)",
    tools: "Trincha, rolo de espuma e pistola",
    dryingTime: "Toque 1 a 2 horas / demãos 8h / Final 18h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Médio",
    washable: true,
    antiMold: "Não",
    variants: [
      { size: "3,6 L", image: "/produtos/266052.jpg" },
      { size: "900 ML",image: "/produtos/266075.jpg" }
      
    ]
  },
  {
    id: "tinta-piso",
    name: "Tinta Piso Cobrebem",
    description: "Bellacor Piso é a Tinta Acrílica para piso de alto rendimento e resistência indicado para pisos cimentados, quadras esportivas, demarcação de garagens, paredes, pisos comerciais, etc.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Piso",
    dilution: "Até 30%",
    diluteWith: "Água",
    finish: "Fosco",
    yield: "Até 300m² por demão (18L)",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 2h / Demão 4h / Tráfego humano 48h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Médio",
    washable: false,
    antiMold: "Não",
    variants: [
      { size: "18 L", image: "/produtos/265380.jpg" },
      { size: "3,6 L", image: "/produtos/266876.jpg" }

    ]
  },
  {
    id: "epoxi-agua",
    name: "Tinta Epóxi Base Água Multiuso",
    description: "Epoxi Base Água Bellacor é uma tinta monocomponente com acabamento brilhante, baixo odor e alta resistência. Proporciona alta lavabilidade e ótima resistência a intempéries.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Madeiras e Metais",
    dilution: "20% na 1ª demão, 10% na 2ª",
    diluteWith: "Água",
    finish: "Brilhante",
    yield: "Até 60m² por demão (3,2L)",
    tools: "Trincha, rolo lã",
    dryingTime: "Toque 30min / demãos 2h / Total 7 dias",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Médio",
    washable: true,
    antiMold: "Não",
    variants: [
      { size: "3,2 L", image: "/produtos/277775.png" },
      { size: "800 ML", image: "/produtos/277774.png" }
    ]
  },
  {
    id: "resina-solvente",
    name: "Resina Impermeabilizante Multiuso Base Solvente",
    description: "Resina de alta performance para proteção de telhas, pedras e tijolos. Mantém o ambiente ventilado durante a aplicação.",
    brand: "Bellacor",
    category: "Standard",
    surface: "Telhas, Pedras, Tijolos",
    dilution: "20% na 1ª camada, 10% na 2ª",
    diluteWith: "Aguarrás",
    finish: "Brilhante",
    yield: "Até 210m² por demão",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 6h / Final 120h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Médio-Alto",
    washable: false,
    antiMold: "-",
    variants: [
      { size: "18 L", image: "/produtos/265162.jpg" }
    ]
  },
  {
    id: "fundo-preparador",
    name: "Fundo Preparador para Parede",
    description: "Indicado para agregar partículas soltas em paredes calcinadas ou descascadas. Uniformiza e prepara a superfície para a pintura.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Paredes",
    dilution: "Pronta para uso",
    diluteWith: "-",
    finish: "-",
    yield: "Até 275m² por demão (18L)",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 30min / Final 4h",
    coats: "1 demão",
    area: "Interior e Exterior",
    odor: "Baixo",
    washable: false,
    antiMold: "Não",
    variants: [
      { size: "18 L", image: "/produtos/265498.jpg" },
      { size: "3,6 L", image: "/produtos/267263.jpg" }
    ]
  },
  {
    id: "cimento-queimado",
    name: "Cimento Queimado Bellacor",
    description: "Efeito decorativo moderno. A parede precisa estar lisa e lixada. Aplicar com desempenadeira de aço inox de cantos arredondados.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Paredes",
    dilution: "Pronta para uso",
    diluteWith: "-",
    finish: "Fosco",
    yield: "8 a 12m² por embalagem",
    tools: "Desempenadeira e Espátula",
    dryingTime: "Toque 3h / Final 24h",
    coats: "De 1 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Baixo",
    washable: true,
    antiMold: "Não",
    variants: [
      { size: "5 KG", image: "/produtos/2705431.jpg" },
    ]
  },
  {
    id: "acrilica-semi-brilho",
    name: "Tinta Acrílica Semi-Brilho Premium",
    description: "Alta cobertura e resistência contra Sol e Chuva. Acabamento perfeito, fácil aplicação e sem cheiro.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Paredes",
    dilution: "Até 20%",
    diluteWith: "Água",
    finish: "Semi Brilho",
    yield: "Até 340m² por demão (18L)",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 30m / demãos 2h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Baixo",
    washable: true,
    antiMold: "Sim",
    variants: [
      { size: "18 L", image: "/produtos/265278.jpg" },
      { size: "3,6 L", image: "/produtos/267128.jpg" }
    ]
  },
  {
    id: "acrilica-acetinada",
    name: "Tinta Acrílica Acetinada Premium",
    description: "Acabamento sofisticado com brilho suave. Alta resistência e lavabilidade.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Paredes",
    dilution: "Até 20%",
    diluteWith: "Água",
    finish: "Acetinado",
    yield: "Até 110m² acabado (18L)",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 30m / demãos 4h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Baixo",
    washable: true,
    antiMold: "Sim",
    variants: [
      { size: "18 L", image: "/produtos/267131.jpg" },
      { size: "3,6 L", image: "/produtos/267128-2.jpg" }
    ]
  },
  {
    id: "acrilica-fosca-premium",
    name: "Tinta Acrílica Fosca Premium",
    description: "Cobertura total com acabamento fosco aveludado. Resistente a intempéries.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Paredes",
    dilution: "10 a 20%",
    diluteWith: "Água",
    finish: "Fosco",
    yield: "Até 340m² por demão (18L)",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 30m / demãos 2h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Baixo",
    washable: true,
    antiMold: "Sim",
    variants: [
      { size: "20 L", image: "/produtos/267616.jpg" },
      { size: "18 L", image: "/produtos/265277-2.jpg" },
      { size: "3,6 L", image: "/produtos/267132.jpg" }
    ]
  },
  {
    id: "cobrebem-standard",
    name: "Tinta Acrílica Fosca Standard Cobrebem",
    description: "Tinta de alta cobertura e resistência, formulada para fácil aplicação e acabamento fosco perfeito.",
    brand: "Bellacor",
    category: "Standard",
    surface: "Paredes",
    dilution: "10 a 20% (18L) / 20 a 30% (menores)",
    diluteWith: "Água",
    finish: "Fosco",
    yield: "Até 300m² por demão (18L)",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 30m / demãos 2h / Final 4h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Médio-Alto",
    washable: true,
    antiMold: "Baixa ação",
    variants: [
      { size: "20 L", image: "/produtos/265377.jpg" },
      { size: "18 L", image: "/produtos/265246.jpg" },
      { size: "3,2 L", image: "/produtos/267112.jpg" },
      { size: "900 ML", image: "/produtos/267113.jpg" }
    ]
  },
  {
    id: "selador-acrilico",
    name: "Selador Acrílico Bellacor",
    description: "Desenvolvido para uso como tinta de fundo. Homogeneíza a absorção do reboco promovendo melhor aderência e economia.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Paredes",
    dilution: "Até 10%",
    diluteWith: "Água",
    finish: "-",
    yield: "Até 125m² por demão (18L)",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 2h / Final 6h",
    coats: "De 2 a 3 demãos",
    area: "Interior",
    odor: "Baixo",
    washable: false,
    antiMold: "Não",
    variants: [
      { size: "18 L", image: "/produtos/selador18.jpg" },
      { size: "3,6 L", image: "/produtos/selador3.6.jpg" }
    ]
  },
  {
    id: "manta-liquida",
    name: "Manta Líquida Vedabem",
    description: "Impermeabilizante com triplo filtro solar para proteção de lajes e paredes.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Paredes e Lajes",
    dilution: "Até 10%",
    diluteWith: "Água",
    finish: "-",
    yield: "Até 35m² por demão",
    tools: "Trincha, rolo e pistola",
    dryingTime: "Toque 4h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Médio",
    washable: true,
    antiMold: "Não",
    variants: [
      { size: "12 KG", image: "/produtos/267744.jpg" },
    ]
  },
  {
    id: "stain-verniz",
    name: "Stain Verniz Impregnante",
    description: "Proteção acetinada para madeiras. Hidro-repelente e com ação fungicida.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Portas, Portões, Janelas e Madeiras",
    dilution: "Pronta para uso",
    diluteWith: "-",
    finish: "Acetinado",
    yield: "Até 34m² por demão",
    tools: "Rolo e Pincel",
    dryingTime: "Demãos 6 a 8h / Final 24h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Médio",
    washable: true,
    antiMold: "Sim",
    variants: [
      { size: "3,2 L", image: "/produtos/277776.png" },
      { size: "800 ML", image: "/produtos/277777.png" }
    ]
  },
  {
    id: "tinta-gesso",
    name: "Tinta Gesso Branca",
    description: "Desenvolvida para ser aplicada direto no gesso e Drywall. Economia com qualidade e acabamento fosco.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Gesso ou Drywall",
    dilution: "20 a 40%",
    diluteWith: "Água",
    finish: "Fosco",
    yield: "Até 40m² por demão",
    tools: "Rolo de lã, Pistola ou Pincel",
    dryingTime: "Toque 30 min / Final 4h",
    coats: "De 2 a 3 demãos",
    area: "Interior",
    odor: "Baixo",
    washable: false,
    antiMold: "Não",
    variants: [
      { size: "18 L", image: "/produtos/265247.jpg" },
      { size: "3,6 L", image: "/produtos/267114.jpg" }
    ]
  },
  {
    id: "verniz-acrilico",
    name: "Verniz Acrílico Bellacor",
    description: "Alta proteção e brilho para concreto, tijolos e pedras. Não utilizar em superfícies horizontais (pisos).",
    brand: "Bellacor",
    category: "-",
    surface: "Concreto, Tijolos e Pedras",
    dilution: "Pronta para uso",
    diluteWith: "-",
    finish: "Brilhante",
    yield: "Até 250m² por demão (18L)",
    tools: "Rolo de Lã, Trincha ou Pincel",
    dryingTime: "Toque 2h / Final 12h",
    coats: "De 1 a 2 demãos",
    area: "Interior e Exterior",
    odor: "Médio-Alto",
    washable: true,
    antiMold: "Sim",
    variants: [
      { size: "18 L", image: "/produtos/267893.jpg" },
      { size: "3,6 L", image: "/produtos/267889.jpg" }
    ]
  },
  {
    id: "massa-acrilica",
    name: "Massa Acrílica Bellacor",
    description: "Ideal para correções e nivelamento em paredes internas ou externas. Fácil aplicação.",
    brand: "Bellacor",
    category: "Premium",
    surface: "Paredes",
    dilution: "Pronta para uso",
    diluteWith: "-",
    finish: "-",
    yield: "Até 60m² por demão",
    tools: "Espátula e desempenadeira",
    dryingTime: "Toque 3h / Final 5h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Baixo",
    washable: false,
    antiMold: "Não",
    variants: [
      { size: "18 L", image: "/produtos/266834-1.png" },
    ]
  },
  {
    id: "fundo-galvanizado",
    name: "Fundo Galvanizado Bellacor",
    description: "Fundo especial para metais galvanizados e alumínio, garantindo aderência.",
    brand: "Bellacor",
    category: "-",
    surface: "Metais, Galvanizados e Alumínio",
    dilution: "10% (Pincel/Rolo) / 30% (Pistola)",
    diluteWith: "Aguarrás",
    finish: "-",
    yield: "Até 12m² por demão",
    tools: "Pincel, Rolo e Pistola",
    dryingTime: "Demãos 8 a 12h / Final 24h",
    coats: "1 demão",
    area: "Interior e Exterior",
    odor: "Médio",
    washable: false,
    antiMold: "-",
    variants: [
      { size: "3,6 L", image: "/produtos/271157-1.png" }
    ]
  },
  {
    id: "verniz-duplo-filtro",
    name: "Verniz Duplo Filtro Solar",
    description: "Proteção extra contra raios UV. Defesa contra fungos e bactérias para madeiras expostas.",
    brand: "Bellacor",
    category: "-",
    surface: "Madeiras",
    dilution: "Até 20%",
    diluteWith: "Aguarrás",
    finish: "-",
    yield: "Até 17m² por demão",
    tools: "Pincel, Trincha ou Rolo",
    dryingTime: "Toque 3h / Final 5h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "-",
    washable: false,
    antiMold: "Sim",
    variants: [
      { size: "3,2 L", image: "/produtos/265432.jpg" },
      { size: "800 ML", image: "/produtos/265433.jpg" },
    ]
  },
  {
    id: "super-cobertura",
    name: "Tinta Super Cobertura Cobrebem",
    description: "Super cobertura com baixo odor, fácil aplicação e baixo respingo.",
    brand: "Bellacor",
    category: "-",
    surface: "Madeiras",
    dilution: "Até 20%",
    diluteWith: "Aguarrás",
    finish: "-",
    yield: "Até 180m² acabado (18L)",
    tools: "Pincel, Trincha ou Rolo",
    dryingTime: "Toque 3h / Final 5h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "Baixo",
    washable: false,
    antiMold: "-",
    variants: [
      { size: "18 L", image: "/produtos/277773.png" },
      { size: "16 L", image: "/produtos/277771.png" },
      { size: "3,2 L", image: "/produtos/277772.png" },
      { size: "800 ML", image: "/produtos/277770.png" }
    ]
  },
  {
    id: "btech-tripla-funcao",
    name: "Esmalte BTECH Tripla Função",
    description: "Praticidade e proteção com secagem ultra rápida para superfícies metálicas.",
    brand: "Bellacor",
    category: "-",
    surface: "Metais e Estruturas Metálicas",
    dilution: "Pincel: Pronto / Rolo: 10% / Pistola: 30%",
    diluteWith: "Aguarrás",
    finish: "-",
    yield: "32m² por embalagem (3,2L)",
    tools: "Pincel, Trincha ou Rolo",
    dryingTime: "Toque 20min / Demãos 8h",
    coats: "De 2 a 3 demãos",
    area: "Interior e Exterior",
    odor: "-",
    washable: false,
    antiMold: "-",
    variants: [
      { size: "3,2 L", image: "/produtos/277779.png" },
      { size: "800 ML", image: "/produtos/277778.png" },
    ]
  }
];

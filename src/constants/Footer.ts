import { FooterOption } from "@/interfaces/HeaderAndFooter";

export const Footerlinks: FooterOption[] = [
  {
    title: "Início",
    links: [
      {
        title: "Projetos",
        url: "/shop",
      },
    ],
  },
  //   {
  //     title: "Serviços",
  //     links: [
  //       {
  //         title: "O que inclui",
  //         url: "/si/included",
  //       },
  //       {
  //         title: "*Economia*",
  //         url: "/si/economy",
  //       },
  //       {
  //         title: "Proj. Personalizado",
  //         url: "/custom/project",
  //       },
  //     ],
  //   },
  {
    title: "Sobre",
    links: [
      {
        title: "Nossa Historia",
        url: "/si/our-history",
      },
      {
        title: "Preços",
        url: "/custom/price",
      },
      {
        title: "FAQ",
        url: "/si/common-questions",
      },
      {
        title: "Contato",
        url: "/si/contact",
      },
    ],
  },
  {
    title: "Políticas",
    links: [
      {
        title: "Politica de Devolução",
        url: "/custom/return-policy",
      },
      {
        title: "Politica de Envio",
        url: "/custom/shipping-policy",
      },
    ],
  },
];

import { FooterOption } from "@/interfaces/HeaderAndFooter";

export const FooterOptions: FooterOption[] = [
  {
    main: "Início",
    options: [
      {
        name: "Projetos",
        path: "/shop",
      },
    ],
  },
  //   {
  //     main: "Serviços",
  //     options: [
  //       {
  //         name: "O que inclui",
  //         path: "/si/included",
  //       },
  //       {
  //         name: "*Economia*",
  //         path: "/si/economy",
  //       },
  //       {
  //         name: "Proj. Personalizado",
  //         path: "/custom/project",
  //       },
  //     ],
  //   },
  {
    main: "Sobre",
    options: [
      {
        name: "Nossa Historia",
        path: "/si/our-history",
      },
      {
        name: "Preços",
        path: "/custom/price",
      },
      {
        name: "FAQ",
        path: "/si/common-questions",
      },
      {
        name: "Contato",
        path: "/si/contact",
      },
    ],
  },
  {
    main: "Políticas",
    options: [
      {
        name: "Politica de Devolução",
        path: "/custom/return-policy",
      },
      {
        name: "Politica de Envio",
        path: "/custom/shipping-policy",
      },
    ],
  },
];

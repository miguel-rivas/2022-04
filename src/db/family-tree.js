const fn = {
  abreu: "Abreu",
  acosta: "Acosta",
  albayaty: "Albayaty",
  alvarez: "Álvarez",
  arias: "Arias",
  ariza: "Ariza",

  batista: "Batista",

  castillo: "Castillo",
  chimalpopoca: "Chimalpopoca",
  colon: "Colon",
  contreras: "Contreras",
  cruz: "Cruz",

  delafuente: "De la Fuente",
  diaz: "Díaz",
  difo: "Difó",
  dominguez: "Dominguez",

  escobosa: "Escobosa",
  estevez: "Estevez",

  fabian: "Fabian",
  fabre: "Fabre",

  grullon: "Grullon",
  gutierrez: "Gutiérrez",

  hernandez: "Hernández",

  jimenez: "Jimenez",

  laureano: "Laureano",
  lescay: "Lescay",
  lespin: "Lespin",
  liz: "Liz",
  lugo: "Lugo",
  luna: "Luna",

  marte: "Marte",
  martinez: "Martinez",
  matias: "Matías",
  mejia: "Mejía",
  medrano: "Medrano",
  mendoza: "Mendoza",
  minaya: "Minaya",
  molina: "Molina",
  mueses: "Mueses",

  nova: "Nova",
  nunez: "Nuñez",

  parra: "Parra",
  perez: "Perez",
  pena: "Peña",
  piantini: "Piantini",
  pina: "Piña",
  polanco: "Polanco",

  ramirez: "Ramirez",
  rivas: "Rivas",
  roa: "Roa",
  rosario: "Rosario",

  sabino: "Sabino",
  sanchez: "Sanchez",
  santos: "Santos",
  segura: "Segura",
  solis: "Solis",
  suero: "Suero",

  tejada: "Tejada",
  tejeda: "Tejeda",
  taveras: "Taveras",
  tuletta: "Tuletta",

  villar: "Villar",
};

let globalIDcount = 0;
const assignID = () => {
  globalIDcount++;
  return `id-${globalIDcount}`;
}

const rp = {
  fernandoRivas: {
    id: assignID(),
    name: ["Fernando", "Euclides"],
    familyName: [fn.rivas, fn.ramirez],
    nickname: "Nano",
  },
  carmenSantos: {
    id: assignID(),
    name: ["María", "del Carmen"],
    familyName: [fn.santos, fn.ramirez],
  },
  virgiliaRamirez: {
    id: assignID(),
    name: ["Ana", "Virgilia"],
    familyName: [fn.ramirez, fn.mendoza],
    nickname: "Virginia",
  },
  pedroRivas: {
    id: assignID(),
    name: ["Pedro", "Antonio"],
    familyName: [fn.rivas, fn.ramirez],
  },
  anaRita: {
    id: assignID(),
    name: ["Ana", "Rita"],
    familyName: [fn.rivas, fn.ramirez],
  },
  pedroRamirezGrullon: {
    id: assignID(),
    name: ["Pedro", "Antonio"],
    familyName: [fn.ramirez, fn.grullon],
  }
}

const fernandoRivasChildren = [
  {
    id: assignID(),
    name: ["Rocio", "Cristal"],
    familyName: [fn.rivas, fn.santos],
    children: [
      {
        id: assignID(),
        group: "pareja",
        name: ["Fernando",],
        familyName: [fn.estevez],
        children: [
          {
            id: assignID(),
            name: ["Shadday"],
            familyName: [fn.estevez, fn.rivas],
          }
        ]
      },
      {
        id: assignID(),
        group: "pareja",
        name: ["Juan", "Carlos"],
        familyName: [fn.ariza],
        children: [
          {
            id: assignID(),
            name: ["Adrian", "Alejandro"],
            familyName: [fn.ariza, fn.rivas],
          }
        ]
      },
    ]
  },
  {
    id: assignID(),
    name: ["Angel", "Francisco"],
    familyName: [fn.rivas, fn.santos],
    children: [
      {
        id: assignID(),
        group: "pareja",
        name: ["Yeimi", "del Carmen"],
        preferedName: "Yeimi",
        familyName: [fn.tejada],
        children: [
          {
            id: assignID(),
            name: ["Ivette"],
            familyName: [fn.rivas, fn.tejada],
          }
        ],
      }
    ]
  },
  {
    id: assignID(),
    name: ["Jesus", "Miguel"],
    familyName: [fn.rivas, fn.santos],
  },
];

const virgiliaRamirezChildren = [
  {
    ...rp.fernandoRivas,
    children: [
      {
        group: "pareja",
        ...rp.carmenSantos,
        children: fernandoRivasChildren,
      }
    ]
  },
  {
    id: assignID(),
    name: ["Pedro", "Antonio"],
    familyName: [fn.rivas, fn.ramirez],
    children: [
      {
        id: assignID(),
        group: "pareja",
        name: [],
        familyName: [],
        nickname: "Sobeyda",
        children: [
          {
            id: assignID(),
            name: ["Alondra"],
            familyName: [fn.rivas],
          },
          {
            id: assignID(),
            name: ["Miguel", "Angel"],
            familyName: [fn.rivas],
          },
          {
            id: assignID(),
            name: ["Marc"],
            familyName: [fn.rivas],
          },
        ]
      },
      {
        id: assignID(),
        group: "pareja",
        name: ["Judith"],
        familyName: ["Malony"],
        children: [
          {
            id: assignID(),
            name: ["Angelina"],
            familyName: [fn.rivas],
          },
          {
            id: assignID(),
            name: ["Samantha"],
            familyName: [fn.rivas],
          },
        ]
      },
    ]
  },
  {
    id: assignID(),
    name: ["David"],
    familyName: [fn.rivas, fn.ramirez],
    children: [
      {
        id: assignID(),
        group: "pareja",
      }
    ]
  },
  {
    id: assignID(),
    name: ["Miguel", "Angel"],
    familyName: [fn.rivas, fn.ramirez],
  },
  {
    id: assignID(),
    name: ["Ana", "Virgilia"],
    familyName: [fn.rivas, fn.ramirez],
    nickname: "Estrella",
    children: [
      {
        id: assignID(),
        group: "pareja",
        name: ["Roberto"],
        familyName: [fn.roa],
        children: [
          {
            id: assignID(),
            group: "asociado",
            name: ["Joseph"],
            familyName: [fn.roa]
          },
          {
            id: assignID(),
            name: ["Annie"],
            familyName: [fn.roa, fn.rivas],
            children: [
              {
                id: assignID(),
                group: "pareja",
                name: ["Ben"],
                familyName: [fn.albayaty],
                children: [
                  {
                    id: assignID(),
                    name: ["Ellie"],
                    familyName: [fn.albayaty, fn.roa],
                  }
                ]
              }
            ]
          },
          {
            id: assignID(),
            name: ["Virginia"],
            familyName: [fn.roa, fn.rivas],
          },
          {
            id: assignID(),
            name: ["Robert"],
            familyName: [fn.roa, fn.rivas],
          },
        ]
      },
    ]
  },
  {
    id: assignID(),
    name: ["Ana", "Violeta"],
    familyName: [fn.rivas, fn.ramirez],
    children: [
      {
        id: assignID(),
        group: "pareja",
        name: ["Joan"],
        familyName: [fn.medrano],
        children: [
          {
            id: assignID(),
            name: ["Naia"],
            familyName: [fn.medrano, fn.rivas],
          },
          {
            id: assignID(),
            name: ["Alaia"],
            familyName: [fn.medrano, fn.rivas],
          },
        ]
      }
    ]
  },
  {
    id: assignID(),
    group: "asociado",
    name: ["María", "de Los Angeles"],
    familyName: [fn.pena],
  },
];

const anaRitaChildren = [
  {
    id: assignID(),
    name: ["Juan", "Alonzo"],
    familyName: [fn.ramirez, fn.rivas],
  },
  {
    id: assignID(),
    name: ["Leonora"],
    familyName: [fn.ramirez, fn.rivas],
  },
]

export default {
  name: ["Family"],
  familyName: ["Tree"],
  children: [
    {
      ...rp.pedroRamirezGrullon,
      children: [
        {
          group: "pareja",
          ...rp.anaRita,
          children: anaRitaChildren,
        },
        {
          group: "pareja",
          name: ["María", "Emilia"],
          familyName: ['-' + fn.fabre, fn.mendoza],
          children: [
            {
              name: ["Alcides", "Guadalupe"],
              familyName: [fn.ramirez, fn.mendoza],
              children: [
                {
                  group: "pareja",
                  name: ["Antonia"],
                  familyName: [fn.ramirez],
                  children: [
                    {
                      name: ["Carmen", "Elsa"],
                      familyName: [fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [],
                          children: [
                            {
                              name: ["Danel"],
                              familyName: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: ["Luz", "Del Alba"],
                      familyName: [fn.ramirez],
                      nickname: "Muñeca",
                    },
                    {
                      name: ["José", "Rafael"],
                      familyName: [fn.ramirez],
                      nickname: "Felo",
                      children: [
                        {
                          group: "pareja",
                          name: ["Jossie"],
                          familyName: [fn.piantini],
                          children: [
                            {
                              name: ["Kisayris"],
                              familyName: [fn.ramirez, fn.piantini],
                            },
                            {
                              name: ["Josue", "Rafael"],
                              familyName: [fn.ramirez, fn.piantini],
                              children: [
                                {
                                  group: "pareja",
                                  name: ["Lidia"],
                                  familyName: [fn.castillo],
                                  children: [
                                    {
                                      name: ["Gabriela"],
                                      familyName: [fn.ramirez, fn.castillo]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Carlos"],
                              familyName: [fn.ramirez, fn.piantini],
                            },
                            {
                              name: ["Nathalie"],
                              familyName: [fn.ramirez, fn.piantini],
                            },
                            {
                              name: ["Priscila"],
                              familyName: [fn.ramirez, fn.piantini],
                            },
                            {
                              name: ["Monica"],
                              familyName: [fn.ramirez, fn.piantini],
                            },
                          ]
                        }
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: ["Ana", "Luz"],
              familyName: [fn.ramirez, fn.mendoza],
              nickname: "Tía Luz",
            },
            {
              name: ["Pedro", "Antonio"],
              familyName: [fn.ramirez, fn.mendoza],
              nickname: "Pepe",
              children: [
                {
                  group: "pareja",
                  name: ["Valencia"],
                  familyName: [fn.perez],
                  children: [
                    {
                      name: ["Yaquelin", "Helena"],
                      familyName: [fn.ramirez, fn.perez],
                    },
                    {
                      name: ["Pedro"],
                      familyName: [fn.ramirez, fn.perez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [],
                          children: [
                            {
                              name: ["Liza"],
                              familyName: [fn.ramirez],
                            },
                            {
                              name: ["Miguel"],
                              familyName: [fn.ramirez],
                            },
                            {
                              name: ["Eric"],
                              familyName: [fn.ramirez],
                            },
                          ],
                        }
                      ],
                    },
                    {
                      name: ["Angela", "Altagracia"],
                      familyName: [fn.ramirez, fn.perez],
                    },
                    {
                      name: ["Ursinio", "De Jesus"],
                      familyName: [fn.ramirez, fn.perez],
                    },
                  ],
                }
              ],
            },
            {
              name: ["Maria"],
              familyName: [fn.ramirez, fn.mendoza],
              nickname: "Maro",
              children: [
                {
                  group: "pareja",
                  name: ["Nicolas"],
                  familyName: [fn.nunez, fn.escobosa],
                  children: [
                    {
                      name: ["Eunice", "Del Carmen"],
                      familyName: [fn.nunez, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [fn.contreras],
                          children: [
                            {
                              name: ["Geraldine"],
                              familyName: [fn.contreras, fn.nunez],
                            },
                            {
                              name: ["Anderis"],
                              familyName: [fn.contreras, fn.nunez],
                            },
                            {
                              name: ["Endira"],
                              familyName: [fn.contreras, fn.nunez],
                            },
                          ]
                        }
                      ]
                    },
                    {
                      name: ["Jose", "Luis"],
                      familyName: [fn.nunez, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [],
                          children: [
                            {
                              name: ["Jocelyn"],
                              familyName: [fn.nunez],
                            }
                          ],
                        },
                        {
                          group: "pareja",
                          name: [],
                          familyName: [],
                          nickname: "Cruzita",
                          children: [
                            {
                              group: "asociado",
                              name: ["Elizabeth"],
                              familyName: [fn.nunez],
                            },
                            {
                              name: ["Denisse"],
                              familyName: [fn.nunez],
                            },
                            {
                              name: ["Michelle"],
                              familyName: [fn.nunez],
                            },
                          ]
                        }
                      ]
                    },
                    {
                      name: ["Rosa", "Virginia"],
                      familyName: [fn.nunez, fn.ramirez],
                    },
                    {
                      name: ["David"],
                      familyName: [fn.nunez, fn.ramirez],
                    },
                  ]
                }
              ]
            },
            {
              name: ["America", "Ana"],
              familyName: [fn.ramirez, fn.mendoza],
              nickname: "Queca",
              children: [
                {
                  group: "pareja",
                  name: ["Juan", "Ramon"],
                  familyName: [fn.santos, fn.jimenez],
                  children: [
                    {
                      ...rp.carmenSantos,
                      children: [
                        {
                          group: "pareja",
                          ...rp.fernandoRivas,
                          children: fernandoRivasChildren,
                        }
                      ]
                    },
                    {
                      name: ["Maria", "Teresa"],
                      familyName: [fn.santos, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: ["Mario", "Antonio"],
                          familyName: [fn.martinez],
                          children: [
                            {
                              name: ["Marioly", "Altagracia"],
                              familyName: [fn.martinez, fn.santos],
                              children: [
                                {
                                  group: "pareja",
                                  name: ["Carlos", "Manuel"],
                                  familyName: [fn.dominguez, fn.marte],
                                  children: [
                                    {
                                      name: ["Laura"],
                                      familyName: [fn.dominguez, fn.martinez]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Jorge", "Luis"],
                              familyName: [fn.martinez, fn.santos],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [],
                                  children: [
                                    {
                                      name: ["Jayliz"],
                                      familyName: [fn.martinez],
                                    },
                                    {
                                      name: ["Jacob"],
                                      familyName: [fn.martinez],
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: ["Jose", "Ricardo"],
                      familyName: [fn.santos, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: ["Isis"],
                          familyName: [fn.santos],
                          children: [
                            {
                              name: ["Juan", "Anibal"],
                              familyName: [fn.santos, fn.santos],
                            },
                            {
                              name: ["Abel", "Ricardo"],
                              familyName: [fn.santos, fn.santos],
                            },
                          ]
                        },
                        {
                          group: "pareja",
                          name: [],
                          familyName: [],
                          children: [
                            {
                              name: [],
                              familyName: [fn.santos]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: ["Faustino"],
                      familyName: [fn.santos, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: ["Rosa", "Delia"],
                          familyName: [fn.sanchez],
                          children: [
                            {
                              name: ["Ana", "Bertilia"],
                              familyName: [fn.santos, fn.sanchez],
                              children: [
                                {
                                  group: "pareja",
                                  name: ["Ricardo"],
                                  familyName: [fn.mejia],
                                  children: [
                                    {
                                      name: ["Cesar", "Ricardo"],
                                      familyName: [fn.mejia, fn.santos],
                                    }
                                  ]
                                },
                                {
                                  group: "pareja",
                                  name: ["Luis", "Antonio"],
                                  familyName: [fn.pina],
                                  children: [
                                    {
                                      name: ["Luis", "Antonio"],
                                      familyName: [fn.pina, fn.santos],
                                    },
                                    {
                                      name: ["Montserrat"],
                                      familyName: [fn.pina, fn.santos],
                                    }
                                  ],
                                }
                              ]
                            }
                          ]
                        },
                        {
                          group: "pareja",
                          name: ["Maritza"],
                          familyName: [],
                          children: [
                            {
                              name: ["Rosemary"],
                              familyName: [fn.santos],
                            }
                          ]
                        },
                        {
                          group: "pareja",
                          name: [],
                          familyName: [],
                          children: [
                            {
                              name: ["Anabel"],
                              familyName: [fn.santos],
                            }
                          ]
                        },
                        {
                          group: "pareja",
                          name: ["Doraluz"],
                          familyName: [fn.lespin],
                          children: [
                            {
                              name: ["Fausto", "Danel"],
                              familyName: [fn.santos, fn.lespin],
                            },
                            {
                              name: ["Sandy", "Noel"],
                              familyName: [fn.santos, fn.lespin],
                            },
                            {
                              name: ["Jose", "Luis"],
                              familyName: [fn.santos, fn.lespin],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: ["Maria", "Elena"],
                      familyName: [fn.santos, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: ["Sócrates", "Francisco"],
                          familyName: [fn.hernandez, fn.polanco],
                          children: [
                            {
                              name: ["Cinthya", "Leticia"],
                              familyName: [fn.hernandez, fn.santos],
                              children: [
                                {
                                  group: "pareja",
                                  name: ["Sergio"],
                                  familyName: [fn.delafuente, fn.chimalpopoca],
                                  children: [
                                    {
                                      name: ["Sofia", 'Elena'],
                                      familyName: [fn.delafuente, fn.hernandez]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Juan", "Francisco"],
                              familyName: [fn.hernandez, fn.santos],
                              children: [
                                {
                                  group: "pareja",
                                  name: ["Dayanna"],
                                  familyName: [fn.fabian],
                                  children: [
                                    {
                                      name: ["Juan", "David"],
                                      familyName: [fn.hernandez, fn.fabian],
                                    },
                                  ]
                                },
                                {
                                  group: "pareja",
                                  name: ["Suleydi", "Del Carmen"],
                                  familyName: [fn.gutierrez, fn.colon],
                                  children: [
                                    {
                                      name: ["Francisco", "Zavier"],
                                      familyName: [fn.hernandez, fn.gutierrez],
                                    },
                                    {
                                      name: ["Juan", "Ramon"],
                                      familyName: [fn.hernandez, fn.gutierrez],
                                    },
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                        {
                          group: "pareja",
                          name: ["Olegario", "Carmen"],
                          familyName: [fn.villar],
                          children: [
                            {
                              name: ["Ramon", "Anibal"],
                              familyName: [fn.villar, fn.santos],
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: ["Maria", "del Rosario"],
                      familyName: [fn.santos, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: ["Victoriano"],
                          familyName: [fn.luna, fn.abreu],
                          children: [
                            {
                              name: ["Carolyn"],
                              familyName: [fn.luna, fn.santos],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [fn.parra],
                                  children: [
                                    {
                                      name: ["Gabriela"],
                                      familyName: [fn.parra, fn.luna],
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Jennifer", "Altagracia"],
                              familyName: [fn.luna, fn.santos],
                              children: [
                                {
                                  group: "pareja",
                                  name: ["Alexander", "Javier"],
                                  familyName: [fn.rivas, fn.taveras],
                                  children: [
                                    {
                                      name: ["Yuliani", "Del Rosario"],
                                      familyName: [fn.rivas, fn.luna],
                                    },
                                    {
                                      name: ["Yulian", "Manuel"],
                                      familyName: [fn.rivas, fn.luna],
                                    },
                                    {
                                      name: ["Juliette", "Altagracia"],
                                      familyName: [fn.rivas, fn.luna],
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Victor", "Manuel"],
                              familyName: [fn.luna, fn.santos],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [fn.sabino],
                                  children: [
                                    {
                                      name: ["Nashla", "Marie"],
                                      familyName: [fn.luna, fn.sabino],
                                    },
                                    {
                                      name: ["Yenevieth", "Del Rosario"],
                                      familyName: [fn.luna, fn.sabino],
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Stalin"],
                              familyName: [fn.luna, fn.santos],
                            },
                          ],
                        },
                        {
                          group: "pareja",
                          name: ["Felix"],
                          familyName: [fn.segura],
                          children: [
                            {
                              name: ["Leanny", "Maria"],
                              familyName: ['-' + fn.segura, fn.santos],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [fn.sanchez],
                                  children: [
                                    {
                                      name: ["Ashley"],
                                      familyName: [fn.sanchez],
                                    },
                                  ]
                                },
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [],
                                  children: [
                                    {
                                      name: ["Alejandro"],
                                      familyName: [fn.santos],
                                    }
                                  ]
                                }
                              ]
                            },
                          ],
                        }
                      ]
                    },
                  ]
                }
              ]
            },
            {
              ...rp.virgiliaRamirez,
              children: [
                {
                  group: "pareja",
                  ...rp.pedroRivas,
                  children: virgiliaRamirezChildren,
                }
              ]

            },
            {
              name: ["Ana", "Elvira"],
              familyName: [fn.ramirez, fn.mendoza],
              nickname: "Milita",
              children: [
                {
                  group: "pareja",
                  name: ["Jose", "Rafael"],
                  familyName: [fn.acosta],
                  children: [
                    {
                      name: ["Jose", "Rafael"],
                      familyName: ['-' + fn.acosta, fn.ramirez],
                      nickname: "Muma"
                    },
                    {
                      name: ["Humberto"],
                      familyName: [fn.acosta, fn.ramirez],
                    },
                  ]
                },
                {
                  group: "pareja",
                  name: ["Patricio"],
                  familyName: [fn.minaya],
                  children: [
                    {
                      name: ["Lucía", "del Carmen"],
                      familyName: [fn.minaya, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: ["Antonio"],
                          familyName: [fn.molina],
                          children: [
                            {
                              name: ["Emely", "Del Rosario"],
                              familyName: [fn.molina, fn.minaya],
                            },
                            {
                              name: ["Luanny"],
                              familyName: [fn.molina, fn.minaya],
                            },
                            {
                              name: ["Annie", "Carolina"],
                              familyName: [fn.molina, fn.minaya],
                              children: [
                                {
                                  group: "pareja",
                                  name: ["Omar"],
                                  familyName: [fn.nova],
                                  children: [

                                  ]
                                }
                              ]
                            },
                          ]
                        }
                      ],
                    },
                    {
                      name: ["Lina", "del Carmen"],
                      familyName: [fn.minaya, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: ["Ramon"],
                          familyName: [fn.solis],
                          children: [
                            {
                              name: ["Esmeralda"],
                              familyName: [fn.solis, fn.minaya],
                            },
                            {
                              name: ["Rubi"],
                              familyName: [fn.solis, fn.minaya],
                            },
                            {
                              name: ["Coral"],
                              familyName: [fn.solis, fn.minaya],
                            },
                          ]
                        }
                      ],
                    },
                    {
                      name: ["Arturo"],
                      familyName: [fn.minaya, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: ["Ana", "Isabel"],
                          familyName: [fn.molina, fn.diaz],
                          nickname: "Chabela",
                          children: [
                            {
                              name: ["Chabely"],
                              familyName: [fn.minaya, fn.molina],
                            },
                            {
                              name: ["Anabel"],
                              familyName: [fn.minaya, fn.molina],
                            },
                            {
                              name: ["Arturo"],
                              familyName: [fn.minaya, fn.molina],
                            },
                            {
                              name: ["Tommy"],
                              familyName: [fn.minaya, fn.molina],
                            },
                          ]
                        }
                      ]
                    },
                    {
                      group: "asociado",
                      name: ["Gabriel"],
                      familyName: [fn.minaya],
                    }
                  ]
                }
              ]
            },
            {
              name: ["Ana", "de las Nieves"],
              familyName: [fn.ramirez, fn.mendoza],
              nickname: "Nieves",
              children: [
                {
                  group: "pareja",
                  name: ["Radames"],
                  familyName: [fn.castillo],
                  children: [
                    {
                      name: ["Annie", "Maryem"],
                      familyName: [fn.castillo, fn.ramirez],
                    },
                    {
                      name: ["Niyra", "Raydhiris"],
                      preferedName: "Niyra",
                      familyName: [fn.castillo, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: ["José", "Manuel"],
                          familyName: [fn.lescay, fn.tejeda],
                          children: [
                            {
                              name: ["Emmanuel", "Alberto"],
                              familyName: [fn.lescay, fn.castillo],
                            }
                          ]
                        }
                      ]
                    },
                  ]
                }
              ]
            },
            {
              name: ["Antonio"],
              familyName: [fn.ramirez, fn.mendoza],
              nickname: "Antonito",
              children: [
                {
                  group: "pareja",
                  name: ["Ana", "Mercedez"],
                  familyName: [fn.difo],
                  children: [
                    {
                      name: ["Joanna"],
                      familyName: [fn.ramirez, fn.difo],
                    },
                    {
                      name: ["Pascal"],
                      familyName: [fn.ramirez, fn.difo],
                    },
                    {
                      name: ["Lizandro"],
                      familyName: [fn.ramirez, fn.difo],
                    },
                  ]
                }
              ]
            },
            {
              name: ["Ana", "Trinidad"],
              familyName: [fn.ramirez, fn.mendoza],
              nickname: "Trina",
              children: [
                {
                  group: "pareja",
                  name: ["Amable"],
                  familyName: [fn.ramirez],
                  children: [
                    {
                      name: ["Amaury"],
                      familyName: [fn.ramirez, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [],
                          children: [

                          ]
                        }
                      ]
                    },
                    {
                      name: ["Lissette"],
                      familyName: [fn.ramirez, fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [],
                          children: [

                          ]
                        }
                      ]
                    },
                  ]
                }
              ]
            },
            {
              name: ["Porfirio", "Antonio"],
              familyName: [fn.ramirez, fn.mendoza],
              children: [
                {
                  group: "pareja",
                  name: ["Esperanza"],
                  children: [
                    {
                      name: ["Jasmin"],
                      familyName: [fn.ramirez],
                    }
                  ]
                }
              ]
            },
            {
              name: ["Jose", "Rafael"],
              familyName: [fn.ramirez, fn.mendoza],
              nickname: "Chepe",
              children: [
                {
                  group: "pareja",
                  name: ["Sonia"],
                  familyName: [],
                  children: [
                    {
                      name: ["Marianne"],
                      familyName: [fn.ramirez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [],
                          children: [
                            {
                              name: [],
                              familyName: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: ["Loly", "Anny"],
                      familyName: [fn.ramirez],
                    },
                  ]
                }
              ]
            },
            {
              name: ["Sergio"],
              familyName: [fn.ramirez, fn.mendoza],
            },
          ]
        }
      ],
    },
    {
      name: ["Fernando"],
      familyName: [fn.rivas, fn.perez],
      children: [
        {
          group: "pareja",
          name: ["Ana", "Julia"],
          familyName: [fn.ramirez],
          nickname: "Mama Julia",
          children: [
            {
              name: ["Ramon", "Antonio"],
              familyName: [fn.rivas, fn.ramirez],
              nickname: "Ramon Chiquito",
              children: [
                {
                  group: "pareja",
                  name: ["Santos"],
                  familyName: [fn.jimenez],
                  children: [
                    {
                      group: "asociado",
                      name: ["Águeda"],
                      familyName: [fn.batista],
                    },
                    {
                      name: ["Máximo", "Alexis"],
                      familyName: [fn.rivas, fn.jimenez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [fn.perez],
                          children: [
                            {
                              name: ["Elaine"],
                              familyName: [fn.perez, fn.contreras]
                            },
                            {
                              name: ["Denisse"],
                              familyName: [fn.perez, fn.contreras]
                            },
                            {
                              name: ["Jorge", "Máximo"],
                              familyName: [fn.perez, fn.contreras]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      name: ["Fernando", "Donato"],
                      familyName: [fn.rivas, fn.jimenez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [fn.alvarez],
                          children: [
                            {
                              name: ["Máximo", "Argenis"],
                              familyName: [fn.rivas, fn.alvarez],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [fn.mueses],
                                  children: [
                                    {
                                      name: ["Evaluna"],
                                      familyName: [fn.rivas, fn.mueses],
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Diana", "Leonor"],
                              familyName: [fn.rivas, fn.alvarez],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [fn.cruz],
                                  children: [
                                    {
                                      name: ["Owen"],
                                      familyName: [fn.cruz, fn.rivas],
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Isis", "Orquídea"],
                              familyName: [fn.rivas, fn.alvarez],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [fn.sanchez],
                                  children: [
                                    {
                                      name: ["Junior", "David"],
                                      familyName: [fn.sanchez, fn.rivas],
                                    },
                                    {
                                      name: ["Liam", "Xavier"],
                                      familyName: [fn.sanchez, fn.rivas],
                                    },
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                        {
                          group: "pareja",
                          name: [],
                          familyName: [fn.rosario],
                          children: [
                            {
                              name: ["Fernando", "Alexis"],
                              familyName: [fn.rivas, fn.rosario],
                            },
                            {
                              name: ["Aldo", "Leonardo"],
                              familyName: [fn.rivas, fn.rosario],
                            },
                            {
                              name: ["Samantha", "Eileen"],
                              familyName: [fn.rivas, fn.rosario],
                            },
                          ]
                        }
                      ]
                    },
                    {
                      name: ["María", "Verónica"],
                      familyName: [fn.rivas, fn.jimenez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [fn.liz],
                          children: [
                            {
                              name: ["Lenny", "Verónica"],
                              familyName: [fn.liz, fn.rivas]
                            },
                            {
                              name: ["Nathalie", "Francheska"],
                              familyName: [fn.liz, fn.rivas]
                            },
                            {
                              name: ["Elvis", "Valentín"],
                              familyName: [fn.liz, fn.rivas]
                            },
                          ]
                        }

                      ]
                    },
                    {
                      name: ["Juana", "Ramona"],
                      familyName: [fn.rivas, fn.jimenez],
                      children: [
                        {
                          group: "pareja",
                          name: ["Antonio"],
                          familyName: [fn.matias],
                          children: [
                            {
                              name: ["Navila", "Idermis"],
                              familyName: [fn.matias, fn.rivas],
                              children: [
                                {
                                  group: "pareja",
                                  name: ["Jarol"],
                                  familyName: [fn.tuletta, fn.arias],
                                  children: [
                                    {
                                      name: ["Luca"],
                                      familyName: [fn.tuletta, fn.matias],
                                    },
                                    {
                                      name: ["Sael"],
                                      familyName: [fn.tuletta, fn.matias],
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Hansell", "Antonio"],
                              familyName: [fn.matias, fn.rivas],
                            },
                            {
                              name: ["Laura", "Massiel"],
                              familyName: [fn.matias, fn.rivas],
                            },
                          ]
                        }
                      ]
                    },
                    {
                      name: ["Eleonora", "del Carmen"],
                      familyName: [fn.rivas, fn.jimenez],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [fn.laureano],
                          children: [
                            {
                              name: ["Katherine"],
                              familyName: [fn.laureano, fn.rivas],
                            }
                          ]
                        }
                      ]
                    },
                  ]
                }
              ]
            },
            {
              name: ["María", "Eleonora"],
              familyName: [fn.rivas, fn.ramirez],
              nickname: "Norita",
            },
            {
              name: ["Ana", "Virgilia"],
              familyName: [fn.rivas, fn.ramirez],
              children: [
                {
                  group: "pareja",
                  name: [],
                  familyName: [fn.grullon],
                  children: [
                    {
                      name: ["Socorro"],
                      familyName: [fn.grullon],
                      children: [
                        {
                          group: "pareja",
                          name: [],
                          familyName: [fn.molina],
                          children: [
                            {
                              name: ["Hugo"],
                              familyName: [fn.molina, fn.grullon],
                            },
                            {
                              name: ["Franchi"],
                              familyName: [fn.molina, fn.grullon],
                            },
                          ]
                        }
                      ]
                    },
                  ]
                }
              ]
            },
            {
              name: ["Ana", "Rosa"],
              familyName: [fn.rivas, fn.ramirez],
            },
            {
              ...rp.anaRita,
              children: [
                {
                  group: "pareja",
                  ...rp.pedroRamirezGrullon,
                  children: anaRitaChildren,
                }
              ]
            },
            {
              name: ["Juan", "Antonio"],
              familyName: [fn.rivas, fn.ramirez],
            },
            {
              name: ["Ana", "Mercedes"],
              familyName: [fn.rivas, fn.ramirez],
              children: [
                {
                  group: "pareja",
                  name: ["Juan"],
                  familyName: [fn.lugo],
                  children: [
                    {
                      name: ["Francia"],
                      familyName: [fn.lugo, fn.rivas],
                      children: [
                        {
                          group: "pareja",
                          name: ["Máximo"],
                          familyName: [],
                          children: []
                        },
                      ],
                    },
                    {
                      name: ["Lupe"],
                      familyName: [fn.lugo, fn.rivas],
                      children: [
                        {
                          group: "pareja",
                          name: ["Percio"],
                          familyName: [],
                          children: [
                            {
                              name: ["Lupercio"],
                              familyName: [],
                            },
                            {
                              name: ["Arnoldo"],
                              familyName: [],
                            },
                            {
                              name: ["Larry"],
                              familyName: [],
                            },
                            {
                              name: ["Nixaliz"],
                              familyName: [],
                            },
                          ]
                        },
                      ],
                    },
                    {
                      name: ["Juan"],
                      familyName: [fn.lugo, fn.rivas],
                      children: [
                        {
                          group: "pareja",
                          name: ["Hilda"],
                          familyName: [],
                          children: [
                            {
                              name: ["Wanda"],
                              familyName: [fn.lugo],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [],
                                  children: [
                                    {
                                      name: ["Matthew"],
                                      familyName: [],
                                    },
                                    {
                                      name: ["Olivia"],
                                      familyName: [],
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Janisse"],
                              familyName: [fn.lugo],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [],
                                  children: [
                                    {
                                      name: ["Jacob"],
                                      familyName: [],
                                    },
                                    {
                                      name: ["Jack"],
                                      familyName: [],
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Stephanie"],
                              familyName: [fn.lugo],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [],
                                  children: [
                                    {
                                      name: ["Eliany"],
                                      familyName: [],
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Emmanuel"],
                              familyName: [fn.lugo],
                            },
                          ]
                        },
                      ],
                    },
                    {
                      name: ["Pilar"],
                      familyName: [fn.lugo, fn.rivas],
                      children: [
                        {
                          group: "pareja",
                          name: ["Juan"],
                          familyName: [],
                          children: [
                            {
                              name: ["Mercedes"],
                              familyName: [],
                              children: [
                                {
                                  group: "pareja",
                                  children: [
                                    {
                                      name: ["Oseas"],
                                      familyName: [],
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Angie"],
                              familyName: [],
                              children: [
                                {
                                  group: "pareja",
                                  children: [
                                    {
                                      name: ["Lyangilee"],
                                      familyName: [],
                                    },
                                    {
                                      name: ["Maddox"],
                                      familyName: [],
                                    },
                                    {
                                      name: ["Harper"],
                                      familyName: [],
                                    },
                                    {
                                      name: ["Hunter"],
                                      familyName: [],
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Juan"],
                              familyName: [],
                            },
                          ]
                        },
                      ],
                    },
                    {
                      name: ["Paulina"],
                      familyName: [fn.lugo, fn.rivas],
                      children: [
                        {
                          group: "pareja",
                          name: ["Pedro"],
                          familyName: [],
                          children: [
                            {
                              name: ["Many"],
                              familyName: [],
                            },
                            {
                              name: ["Paola"],
                              familyName: [],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [],
                                  children: [
                                    {
                                      name: ["Esme"],
                                      familyName: [],
                                    }
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                      ],
                    },
                    {
                      name: ["Elba"],
                      familyName: [fn.lugo, fn.rivas],
                      children: [
                        {
                          group: "pareja",
                          name: ["Gilberto"],
                          familyName: [],
                          children: [
                            {
                              name: ["Shayanne"],
                              familyName: [],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [],
                                  children: [
                                    {
                                      name: ["Kenji"],
                                      familyName: [],
                                    },
                                    {
                                      name: ["Jaxler"],
                                      familyName: [],
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              name: ["Gilbert"],
                              familyName: [],
                            },
                          ]
                        },
                      ],
                    },
                    {
                      name: ["Daniela"],
                      familyName: [fn.lugo, fn.rivas],
                      children: [
                        {
                          group: "pareja",
                          name: ["Félix"],
                          familyName: [],
                          children: [
                            {
                              name: ["Darlene"],
                              familyName: [],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [],
                                  children: [
                                    {
                                      name: ["Isabela"],
                                      familyName: [],
                                    },
                                    {
                                      name: ["Aria"],
                                      familyName: [],
                                    },
                                  ]

                                }
                              ]
                            },
                            {
                              name: ["Lixdania"],
                              familyName: [],
                              children: [
                                {
                                  group: "pareja",
                                  name: [],
                                  familyName: [],
                                  children: [
                                    {
                                      name: ["Noah"],
                                      familyName: [],
                                    },
                                  ]

                                }
                              ]
                            },
                            {
                              name: ["Félix"],
                              familyName: [],
                            },
                          ]
                        },
                      ],
                    },
                  ]
                }
              ]
            },
            {
              name: ["Romelia", "Antonia"],
              familyName: [fn.rivas, fn.ramirez],
            },
            {
              ...rp.pedroRivas,
              children: [
                {
                  group: "pareja",
                  ...rp.virgiliaRamirez,
                  children: virgiliaRamirezChildren,
                },
              ],
            },
            {
              name: ["Digna", "María"],
              familyName: [fn.rivas, fn.ramirez],
              children: [
                {
                  group: "pareja",
                  name: [],
                  familyName: [],
                  children: [
                    {
                      name: ["Altagracia"],
                      familyName: [],
                    },
                    {
                      name: ["Juan", "Felix"],
                      familyName: [],
                    },
                    {
                      name: ["Juana", "Margarita"],
                      familyName: [fn.abreu],
                    },
                    {
                      name: ["Rosa"],
                      familyName: [],
                    },
                    {
                      name: ["Osiris"],
                      familyName: [],
                    },
                    {
                      name: ["Martin"],
                      familyName: [fn.abreu],
                    },
                    {
                      name: ["Andres", "Santiago"],
                      familyName: [fn.abreu, fn.rivas],
                    },
                    {
                      name: ["Felix"],
                      familyName: [fn.perez],
                    },
                    {
                      name: ["Juan", "Antonio"],
                      familyName: [fn.perez],
                    },
                    {
                      name: ["María", "Dolores"],
                      familyName: [fn.perez, fn.rivas],
                    },
                  ]
                }
              ]
            },

          ]
        },
        {
          group: "pareja",
          name: ["Martina"],
          familyName: [fn.suero],
          children: [
            {
              name: ["Felicia"],
              familyName: [fn.rivas, fn.suero],
            }
          ]
        }
      ]
    }
  ]
}
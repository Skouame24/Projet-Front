import { type } from "@testing-library/user-event/dist/type";

export const questions = [
  {
    section: 1,
    items: [
      {
        label: 'Quel est le nom de votre entreprise ?',
        type: 'text',
        value: 'nom'
      },

    ]
  },

  {
    section: 2,
    items: [
      {
        label: "Quel est le lieu du siege de l'entreprise? ",
        type: 'text',
        value: 'lieu'
      },
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'contact',
        type: 'text',
        value: 'contact'
      },

    ]
  },
  
  {
    section: 4,
    items: [
      {
        label: 'Veuillez entrer la date de creation',
        type: 'text',
        value: 'date'
      },

    ]
  },

  {
    section: 5,
    items: [
 {
        label: '' ,
        type: 'select',
        value: "region",
        options: [ 'DISTRICT DE YAMOUSSOUKRO', 'PORO (CHEF LIEU KORHOGO)'
        ,'BAS SASSANDRA (CHEF LIEU DALOA)',
        'GBEKE (CHEF LIEU BOUAKE)','GRANDS PONTS (CHEF LIEU DABOU)',"DISTRICT D'ABIDJAN"]
      }
    ]
  },

  {
    section: 6,
    items: [
      {
        label: 'Veuillez entrer votre Ville',
        type: 'text',
        value: 'ville'
      },

    ]
  },

  {
    section: 7,
    items: [
      {
        label: 'Veuillez entrer votre localisation:Commune',
        type: 'text',
        value: 'commune'
      },

    ]
  },

  {
    section: 8,
    items: [
 {
        label: "",
        type: 'select',
        value: "chriffre_daffaire",
        options: [ 'PETITE ENTREPRISE (Chiffre daffaires annuel hors taxes ⩽ 150 Millions FCFA)',
         'MOYENNE  ENTREPRISE (Chiffre daffaires annuel hors taxes >150 Millions ⩽ 1 Milliard FCFA)','MICRO ENTREPRISE (Chiffre daffaires annuel hors taxes  ⩽30 Millions FCFA)'
        ]
      }
    ]
  },

  {
    section: 9,
    items: [
 {
        label: "",
        type: 'select',
        value: "forme_juridique",
        options: [ 'SARL', 'ENTREPRISE INDIVIDUELLE', 'SOCIETE COOPERATIVE', 'ASSOCIATION','SA'
        ]
      }
    ]
  },

  {
    section: 10,
    items: [
 {
        label: "" ,
        type: 'select',
        value: 'secteur',
        options: [ 'INDUSTRIE', 'SERVICE', 'COMMERCE']
      }
    ]
  },

  {
    section: 11,
    items: [
      {
        label: 'Veuillez decrire votre activitee principale',
        type: 'text',
        value: 'activite'
      },

    ]
  },

  {
    section: 12,
    items: [
 {
        label: "",
        type: 'select',
        value: 'documents_legaux',
        options: [ 'DECLARATION FISCALE DEXISTENCE', 'REGISTRE DE COMMERCE','STATUTS',
         'ETATS FINANCIERS (BILAN, COMPTE DE RESULTAT ...)', 'INFORMEL',
        ]
      }
    ]

  },    

  {
    section:13,
    items: [
 {
        label: "",
        type: 'select',
        value: "regime",
        options: [ "TAXE COMMUNALE DE L'ENTREPRENANT","TAXE D'ENTREPRENANT D'ETAT",
         "REGIME DES MICROENTREPRISES", "REGIME DU REEL NORMAL","REGIME DU REEL SIMPLIFIE","RÉGIME FISCAL",
         "INFORMEL"
        ]
      }
    ]
    
  },    

  {
    section: 14,
    items: [
      {
        label: "Nombres d'employes y compris le dirigeant",
        type: 'text',
        value: 'employes_totaux'
      },

    ]
  },
  {
    section: 15,
    items: [
      {
        label: "Nombres d'employes femmes",
        type: 'text',
        value: 'femmes'
      },

    ]
  },
  {
    section: 16,
    items: [
      {
        label: "Nombres d'employes hommes",
        type: 'text',
        value: 'hommes'
      },

    ]
  },

  {
    section: 17,
    items: [
      {
        label: 'Si vous êtes prêt à soumettre, veuillez appuyer sur  Valider',
        type: 'information'
      }
    ]
  }
]

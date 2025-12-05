// src/data/quizDatabase.js
export const quizDatabase = {
  intro: {
    title: "Introduction au ML",
    questions: [
      {
        id: 1,
        type: "vrai-faux",
        question: "La classification consiste à trier des données en différentes catégories.",
        answer: true,
        explanation: "La classification est un problème où l'on attribue une étiquette à chaque exemple."
      },
      {
        id: 2,
        type: "qcm",
        question: "Que sont les 'features' en Machine Learning ?",
        options: [
          "Les résultats finaux",
          "Les caractéristiques observées (ex: âge, taille, couleur)",
          "Les erreurs du modèle",
          "Les algorithmes utilisés"
        ],
        answer: 1,
        explanation: "Les features sont les variables que l'on observe pour faire une prédiction."
      },
      {
        id: 3,
        type: "vrai-faux",
        question: "Le Machine Learning peut prédire l'avenir avec 100% de certitude.",
        answer: false,
        explanation: "Un modèle de ML fait des prédictions probabilistes, il n'est jamais garanti à 100%."
      }
    ]
  },
  knn: {
    title: "K-Nearest Neighbors",
    questions: [
      {
        id: 1,
        type: "qcm",
        question: "Comment fonctionne l'algorithme KNN ?",
        options: [
          "Il crée un arbre de décisions",
          "Il regarde les K voisins les plus proches et fait voter",
          "Il calcule une moyenne de toutes les données",
          "Il utilise un réseau de neurones profond"
        ],
        answer: 1,
        explanation: "KNN classe un nouvel exemple en fonction des K exemples les plus proches dans le dataset."
      },
      {
        id: 2,
        type: "vrai-faux",
        question: "Il est souvent utile de choisir K impair pour éviter les égalités.",
        answer: true,
        explanation: "Un K impair (3, 5, 7, ...) réduit le risque d'égalité entre deux classes."
      },
      {
        id: 3,
        type: "qcm",
        question: "Quel est un inconvénient du KNN ?",
        options: [
          "Trop complexe à comprendre",
          "Ne fonctionne que sur des images",
          "Lent sur les gros datasets",
          "Ne peut pas gérer plus de deux classes"
        ],
        answer: 2,
        explanation: "Pour chaque prédiction, KNN doit comparer avec beaucoup de points, ce qui peut être coûteux."
      }
    ]
  },
  tree: {
    title: "Arbres de Décision",
    questions: [
      {
        id: 1,
        type: "vrai-faux",
        question: "Un arbre de décision fonctionne comme un jeu de 20 questions.",
        answer: true,
        explanation: "On pose une série de questions oui/non qui mènent à une décision finale."
      },
      {
        id: 2,
        type: "qcm",
        question: "Comment appelle-t-on la réponse finale d'un arbre ?",
        options: [
          "La racine",
          "La branche",
          "La feuille",
          "Le tronc"
        ],
        answer: 2,
        explanation: "Les feuilles correspondent aux sorties finales (classes)."
      },
      {
        id: 3,
        type: "vrai-faux",
        question: "Les arbres de décision nécessitent une normalisation des données.",
        answer: false,
        explanation: "Un avantage des arbres est qu'ils n'ont généralement pas besoin de normalisation."
      },
      {
        id: 4,
        type: "qcm",
        question: "Quel est le risque principal des arbres de décision ?",
        options: [
          "Ils sont trop lents",
          "Ils peuvent overfitter (trop apprendre)",
          "Ils ne gèrent pas les données numériques",
          "Ils ne sont jamais interprétables"
        ],
        answer: 1,
        explanation: "Un arbre peut mémoriser le dataset au lieu de généraliser (sur-apprentissage)."
      }
    ]
  },
  forest: {
    title: "Forêts Aléatoires",
    questions: [
      {
        id: 1,
        type: "qcm",
        question: "Quelle est l'idée principale des forêts aléatoires ?",
        options: [
          "Utiliser un seul arbre très grand",
          "Créer plusieurs arbres et faire voter",
          "Remplacer les arbres par des graphes",
          "Utiliser des questions aléatoires seulement"
        ],
        answer: 1,
        explanation: "Une forêt aléatoire combine de nombreux arbres entraînés sur des sous-ensembles de données/features."
      },
      {
        id: 2,
        type: "vrai-faux",
        question: "Les forêts aléatoires sont souvent plus robustes qu'un seul arbre de décision.",
        answer: true,
        explanation: "En agrégeant plusieurs modèles, on obtient en général de meilleures performances."
      },
      {
        id: 3,
        type: "qcm",
        question: "Comment une forêt aléatoire prend-elle sa décision finale ?",
        options: [
          "Elle prend l'avis du premier arbre",
          "Elle fait la moyenne des valeurs de sortie",
          "La classe la plus votée gagne",
          "Elle choisit au hasard un arbre"
        ],
        answer: 2,
        explanation: "Pour la classification, la classe majoritaire parmi les arbres est choisie."
      },
      {
        id: 4,
        type: "vrai-faux",
        question: "Les forêts aléatoires sont toujours plus rapides qu'un arbre unique.",
        answer: false,
        explanation: "Plus d'arbres signifie plus de calcul, même si on peut paralléliser."
      }
    ]
  },
  confusion: {
    title: "Matrice de Confusion",
    questions: [
      {
        id: 1,
        type: "qcm",
        question: "Que représentent les Vrais Positifs (VP) ?",
        options: [
          "Les erreurs du modèle",
          "Les bonnes prédictions de la classe positive",
          "Le nombre total d'exemples",
          "Les cas inconnus"
        ],
        answer: 1,
        explanation: "Un VP est un exemple positif correctement prédit comme positif."
      },
      {
        id: 2,
        type: "vrai-faux",
        question: "Les Faux Positifs sont des cas où le modèle prédit à tort la classe positive.",
        answer: true,
        explanation: "Par exemple, prédire 'malade' alors que la personne est saine."
      },
      {
        id: 3,
        type: "qcm",
        question: "Comment calcule-t-on l'accuracy (précision totale) ?",
        options: [
          "(VP + FP) / Total",
          "(VP + VN) / Total",
          "VP / (VP + FN)",
          "(FP + FN) / Total"
        ],
        answer: 1,
        explanation: "Accuracy = (Vrais Positifs + Vrais Négatifs) / nombre total d'exemples."
      },
      {
        id: 4,
        type: "vrai-faux",
        question: "Une matrice de confusion ne s'applique qu’à la classification binaire.",
        answer: false,
        explanation: "On peut construire des matrices de confusion multi-classes."
      }
    ]
  },
};

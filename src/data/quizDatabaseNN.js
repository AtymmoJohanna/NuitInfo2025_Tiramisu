// src/data/quizDatabaseNN.js
export const quizDatabaseNN = {
  introNN: {
    title: "Introduction aux Réseaux de Neurones",
    questions: [
      {
        id: 1,
        type: "vrai-faux",
        question: "Les réseaux de neurones sont inspirés par le cerveau humain.",
        answer: true,
        explanation:
          "Les réseaux de neurones artificiels s’inspirent du fonctionnement des neurones biologiques, mais restent beaucoup plus simples."
      },
      {
        id: 2,
        type: "qcm",
        question: "Comment un réseau de neurones apprend-il ?",
        options: [
          "En regardant des exemples et en ajustant ses poids",
          "En exécutant toujours les mêmes règles fixes",
          "En choisissant des réponses au hasard"
        ],
        answer: 0,
        explanation:
          "Le réseau compare ses prédictions aux vraies réponses, mesure l’erreur et ajuste ses poids pour la réduire."
      },
      {
        id: 3,
        type: "vrai-faux",
        question: "Un neurone artificiel fonctionne exactement comme un neurone du cerveau.",
        answer: false,
        explanation:
          "Il y a une analogie, mais le neurone artificiel est un modèle mathématique très simplifié."
      }
    ]
  },

  perceptron: {
    title: "Le Perceptron",
    questions: [
      {
        id: 1,
        type: "vrai-faux",
        question: "Le perceptron est un modèle de neurone artificiel très simple.",
        answer: true,
        explanation:
          "C’est l’un des premiers modèles de neurone artificiel, linéaire et adapté à des problèmes simples."
      },
      {
        id: 2,
        type: "qcm",
        question: "Que fait un perceptron avec ses entrées ?",
        options: [
          "Il les combine avec des poids, calcule une somme puis applique une fonction d’activation",
          "Il trie les données par ordre alphabétique",
          "Il choisit directement une classe au hasard"
        ],
        answer: 0,
        explanation:
          "Le perceptron calcule une somme pondérée des entrées et applique une règle pour décider de la sortie."
      },
      {
        id: 3,
        type: "vrai-faux",
        question: "Le perceptron peut résoudre des problèmes non linéaires comme XOR.",
        answer: false,
        explanation:
          "Le perceptron simple ne peut traiter que des problèmes linéairement séparables."
      }
    ]
  },

  multilayer: {
    title: "Réseaux Multicouches",
    questions: [
      {
        id: 1,
        type: "vrai-faux",
        question: "Ajouter des couches cachées permet de modéliser des fonctions plus complexes.",
        answer: true,
        explanation:
          "Les réseaux multicouches peuvent approximer des fonctions non linéaires grâce aux couches cachées et aux fonctions d’activation."
      },
      {
        id: 2,
        type: "qcm",
        question: "Quel est le rôle de la backpropagation ?",
        options: [
          "Mettre les données dans le bon ordre",
          "Propager l’erreur en arrière pour mettre à jour les poids",
          "Supprimer des neurones inutiles au hasard"
        ],
        answer: 1,
        explanation:
          "La rétropropagation du gradient calcule comment chaque poids contribue à l’erreur et l’ajuste en conséquence."
      },
      {
        id: 3,
        type: "vrai-faux",
        question: "Un réseau trop profond et peu régularisé peut sur-apprendre (overfitting).",
        answer: true,
        explanation:
          "Avec trop de capacité et peu de données, le réseau peut mémoriser le dataset au lieu de généraliser."
      }
    ]
  },

  cnn: {
    title: "CNN – Réseaux Convolutifs",
    questions: [
      {
        id: 1,
        type: "vrai-faux",
        question: "Les CNN sont particulièrement adaptés au traitement des images.",
        answer: true,
        explanation:
          "Les convolutions exploitent la structure spatiale des images et apprennent des filtres visuels (bords, textures, formes...)."
      },
      {
        id: 2,
        type: "qcm",
        question: "Quel est le rôle principal des couches de pooling ?",
        options: [
          "Augmenter la résolution de l’image",
          "Réduire la dimension et rendre le modèle plus robuste",
          "Changer les couleurs de l’image"
        ],
        answer: 1,
        explanation:
          "Le pooling réduit la taille des cartes de features, limite le sur-apprentissage et rend le modèle plus robuste aux petites translations."
      },
      {
        id: 3,
        type: "vrai-faux",
        question: "Dans un CNN, les premières couches apprennent souvent des filtres simples (bords, contrastes).",
        answer: true,
        explanation:
          "Les premières couches capturent des motifs bas niveau, les couches plus profondes combinent ces motifs en concepts plus abstraits."
      }
    ]
  },

  recognition: {
    title: "Reconnaissance d’Images",
    questions: [
      {
        id: 1,
        type: "vrai-faux",
        question: "Un modèle de reconnaissance d’images renvoie souvent une distribution de probabilités sur plusieurs classes.",
        answer: true,
        explanation:
          "On obtient généralement un score par classe, que l’on peut interpréter comme une probabilité ou un degré de confiance."
      },
      {
        id: 2,
        type: "qcm",
        question: "Qu’est-ce que le transfer learning dans le contexte des CNN ?",
        options: [
          "Reprendre un modèle pré-entraîné et l’adapter à une nouvelle tâche",
          "Traduire automatiquement des images",
          "Former plusieurs modèles en parallèle et les supprimer ensuite"
        ],
        answer: 0,
        explanation:
          "On réutilise des features déjà apprises (par ex. sur ImageNet) et on ajuste uniquement les dernières couches sur un nouveau dataset."
      },
      {
        id: 3,
        type: "vrai-faux",
        question: "Les erreurs d’un système de reconnaissance d’images ont la même gravité dans tous les contextes.",
        answer: false,
        explanation:
          "Une erreur dans un filtre Instagram n’a pas la même conséquence qu’une erreur dans un système d’aide au diagnostic médical."
      }
    ]
  },
};

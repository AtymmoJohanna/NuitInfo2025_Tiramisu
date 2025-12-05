// src/pages/PlayImageLab.js
import React, { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { Image as ImageIcon, Zap, Info } from 'lucide-react';

// Traductions simples EN -> FR pour quelques labels COCO-SSD
const labelTranslations = {
  person: "personne",
  bicycle: "vélo",
  car: "voiture",
  motorcycle: "moto",
  airplane: "avion",
  bus: "bus",
  train: "train",
  truck: "camion",
  boat: "bateau",
  traffic_light: "feu de circulation",
  fire_hydrant: "borne d'incendie",
  stop_sign: "panneau stop",
  parking_meter: "parcmètre",
  bench: "banc",
  bird: "oiseau",
  cat: "chat",
  dog: "chien",
  horse: "cheval",
  sheep: "mouton",
  cow: "vache",
  elephant: "éléphant",
  bear: "ours",
  zebra: "zèbre",
  giraffe: "girafe",
  backpack: "sac à dos",
  umbrella: "parapluie",
  handbag: "sac à main",
  tie: "cravate",
  suitcase: "valise",
  frisbee: "frisbee",
  skis: "skis",
  snowboard: "snowboard",
  sports_ball: "ballon",
  kite: "cerf-volant",
  bottle: "bouteille",
  cup: "tasse",
  fork: "fourchette",
  knife: "couteau",
  spoon: "cuillère",
  bowl: "bol",
  banana: "banane",
  apple: "pomme",
  sandwich: "sandwich",
  orange: "orange",
  broccoli: "brocoli",
  carrot: "carotte",
  hot_dog: "hot-dog",
  pizza: "pizza",
  donut: "beignet",
  cake: "gâteau",
  chair: "chaise",
  couch: "canapé",
  potted_plant: "plante en pot",
  bed: "lit",
  tv: "télévision",
  laptop: "ordinateur portable",
  mouse: "souris",
  remote: "télécommande",
  keyboard: "clavier",
  cell_phone: "téléphone",
  microwave: "micro-ondes",
  oven: "four",
  toaster: "grille-pain",
  sink: "évier",
  refrigerator: "réfrigérateur",
  book: "livre",
  clock: "horloge",
  vase: "vase",
  scissors: "ciseaux",
  teddy_bear: "ours en peluche",
  hair_drier: "sèche-cheveux",
  toothbrush: "brosse à dents",
};

const PlayImageLab = ({ index, total }) => {
  const [model, setModel] = useState(null);
  const [loadingModel, setLoadingModel] = useState(true);
  const [imageURL, setImageURL] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isPredicting, setIsPredicting] = useState(false);
  const [error, setError] = useState(null);
  const imageRef = useRef(null);

  // Charger le modèle COCO-SSD au montage
  useEffect(() => {
    let isMounted = true;

    const loadModel = async () => {
      try {
        setLoadingModel(true);
        await tf.ready();
        const loadedModel = await cocoSsd.load(); // modèle de détection d'objets
        if (isMounted) {
          setModel(loadedModel);
        } else if (loadedModel && loadedModel.dispose) {
          loadedModel.dispose();
        }
      } catch (err) {
        console.error('Erreur de chargement du modèle :', err);
        if (isMounted) {
          setError("Impossible de charger le modèle d'IA.");
        }
      } finally {
        if (isMounted) {
          setLoadingModel(false);
        }
      }
    };

    loadModel();

    return () => {
      isMounted = false;
      if (model && model.dispose) {
        model.dispose();
      }
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (imageURL) {
      URL.revokeObjectURL(imageURL);
    }

    const url = URL.createObjectURL(file);
    setImageURL(url);
    setPredictions([]);
    setError(null);
  };

  const handlePredict = async () => {
    if (!model || !imageRef.current) return;
    try {
      setError(null);
      setIsPredicting(true);

      // Détection d'objets dans l'image
      const detections = await model.detect(imageRef.current);
      // Trier par score décroissant et garder les 3 meilleurs
      const top3 = detections
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      setPredictions(top3);
    } catch (err) {
      console.error('Erreur de prédiction :', err);
      setError("Une erreur est survenue pendant l'analyse de l'image.");
    } finally {
      setIsPredicting(false);
    }
  };

  const renderLabel = (cls) => {
    const fr = labelTranslations[cls];
    if (fr) {
      return `${fr} (${cls})`;
    }
    return cls;
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      {/* Bandeau titre */}
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 p-6 rounded-2xl mb-6 text-white">
        <div className="flex items-center gap-4">
          <ImageIcon className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">
              Jouer avec la détection d&apos;objets
            </h2>
            <p className="text-white/90">
              Module interactif – Leçon {index} sur {total}
            </p>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="space-y-6">
        {/* Zone de sélection d'image */}
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-sky-900 mb-3">
            1. Choisis une image
          </h3>
          <p className="text-gray-700 mb-4">
            Charge une image avec un ou plusieurs objets (par exemple une scène de rue,
            un animal, un objet du quotidien). L&apos;IA va essayer de trouver jusqu&apos;à
            trois objets présents dans l&apos;image.
          </p>
          <label className="inline-flex items-center gap-2 px-4 py-2 bg-white text-sky-700 font-semibold rounded-xl shadow cursor-pointer hover:bg-sky-50">
            <ImageIcon className="w-5 h-5" />
            <span>Choisir une image...</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          {imageURL && (
            <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/2">
                <p className="text-sm text-gray-600 mb-2 font-semibold">
                  Image sélectionnée
                </p>
                <div className="border rounded-2xl overflow-hidden bg-white shadow">
                  <img
                    src={imageURL}
                    alt="À analyser"
                    ref={imageRef}
                    className="w-full object-contain max-h-80"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <p className="text-sm text-gray-600 mb-2 font-semibold">
                  2. Lancer l&apos;IA
                </p>
                <button
                  onClick={handlePredict}
                  disabled={!model || loadingModel || !imageURL || isPredicting}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${
                    !model || loadingModel || !imageURL || isPredicting
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  <Zap className="w-5 h-5" />
                  {loadingModel
                    ? 'Chargement du modèle...'
                    : isPredicting
                    ? 'Analyse en cours...'
                    : 'Lancer l’IA'}
                </button>

                {error && (
                  <p className="mt-2 text-sm text-red-600">
                    {error}
                  </p>
                )}

                {/* Résultats */}
                {predictions.length > 0 && (
                  <div className="mt-4 bg-white rounded-xl shadow p-4">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Objet(s) détecté(s)
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      {predictions.map((p, i) => (
                        <li key={i} className="flex justify-between">
                          <span>{renderLabel(p.class)}</span>
                          <span className="font-semibold">
                            {(p.score * 100).toFixed(1)} %
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Explication pédagogique */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Ce que l&apos;IA fait
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            <li>L&apos;image est convertie en nombres (valeurs de pixels).</li>
            <li>Le modèle (COCO‑SSD) parcourt l&apos;image pour repérer des zones où se trouvent des objets.</li>
            <li>Pour chaque zone, il prédit une classe (type d&apos;objet) et un pourcentage de confiance.</li>
            <li>Les trois objets avec les meilleurs scores sont affichés avec leur pourcentage.</li>
          </ol>
        </div>

        {/* Limites et questions de réflexion */}
        <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-rose-900 mb-3">
            À discuter
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Dans quels cas l&apos;IA détecte correctement les objets ?</li>
            <li>Que se passe‑t‑il si les objets sont très petits, flous ou cachés ?</li>
            <li>Y a‑t‑il des objets que le modèle ne connaît pas du tout ?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayImageLab;

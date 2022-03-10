import illustrationA from '../Assets/challenge20km.png';
import illustrationB from '../Assets/challenge50km.png';
import illustrationC from '../Assets/challenge4runs.png';

export default [
  {
    title: 'En marche !',
    illustration: illustrationA,
    text: 'Courir au minimum 20km dans le mois',
    currentValue: 20,
    maxValue: 20,
    inscription: false,
    id: 1,
  },
  {
    title: 'Toujours plus !',
    illustration: illustrationB,
    text: 'Courir au minimum 50km dans le mois',
    currentValue: 23,
    maxValue: 50,
    inscription: false,
    id: 2,
  },
  {
    title: 'Jamais 3 sans 4 !',
    illustration: illustrationC,
    text: 'Effectuer 4 sorties en une semaine',
    currentValue: 3,
    maxValue: 4,
    inscription: false,
    id: 3,
  },
];

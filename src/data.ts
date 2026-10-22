import galeria from './assets/fotos/galeria.jpg';
import recibidor from './assets/fotos/recibidor.jpg';
import living from './assets/fotos/living.jpg';
import comedor from './assets/fotos/comedor.jpg';
import cocina from './assets/fotos/cocina.jpg';
import sala from './assets/fotos/sala.jpg';
import pileta from './assets/fotos/pileta.jpg';
import galeria2 from './assets/fotos/galeria2.jpg';
import frente from './assets/fotos/frente.jpg';

export const WHATSAPP_NUMBER = '5492804503151';
export const WHATSAPP_DISPLAY = '280 450-3151';
export const WHATSAPP_TEXT =
  'Hola! Vi la casa de Mendoza 1042 en Rawson y quisiera más información.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
export const MAPS_QUERY = 'Mendoza 1042, Rawson, Chubut, Argentina';

export const LOT_M2 = 3058.71;
export const BUILT_M2 = 151.94;

// Schematic lot, 1000 x 640 units. Waypoints of the visit route, street to pool.
// Indices 3..9 are the seven zones, in tour order.
export const route: [number, number][] = [
  [260, 645],
  [260, 565],
  [340, 505],
  [520, 478],
  [470, 432],
  [500, 395],
  [550, 380],
  [595, 355],
  [600, 420],
  [735, 397],
];

export const house = { x: 440, y: 330, w: 190, h: 120 };
export const HOUSE_CENTER: [number, number] = [535, 405];

export type Zone = {
  id: string;
  name: string;
  text: string;
  wp: number;
  alt: string;
  photo: ImageMetadata;
  extra?: { photo: ImageMetadata; alt: string };
  cam?: { cx: number; cy: number; w: number };
};

export const zones: Zone[] = [
  {
    id: 'galeria',
    name: 'Galería de arcos',
    text: 'Ladrillo a la vista, techo de madera y piso de piedra, abierta al parque.',
    wp: 3,
    alt: 'Galería con arcos de ladrillo, piso de piedra y sillones blancos con almohadones amarillos.',
    photo: galeria,
    extra: {
      photo: galeria2,
      alt: 'Galería de arcos de ladrillo vista desde el parque, con el piso de piedra, el techo de madera y el deck a la derecha.',
    },
  },
  {
    id: 'recibidor',
    name: 'Recibidor',
    text: 'La entrada principal: puerta de madera, pared blanca y un banco de campo.',
    wp: 4,
    alt: 'Recibidor con puerta de madera con vidrio en abanico, un banco rústico y un perchero de madera.',
    photo: recibidor,
    extra: {
      photo: frente,
      alt: 'Frente de la casa de ladrillo a la vista, con ventanal y la entrada en arco al final del camino de piedra.',
    },
  },
  {
    id: 'living',
    name: 'Living',
    text: 'Ventanales hacia el parque y la galería, con sillones de mimbre.',
    wp: 5,
    alt: 'Living con sillones de mimbre y un gran ventanal que enmarca el arco de la galería y el parque.',
    photo: living,
  },
  {
    id: 'comedor',
    name: 'Comedor',
    text: 'Mesa larga junto a un hogar de ladrillo con marco de madera.',
    wp: 6,
    alt: 'Comedor con mesa larga, sillas blancas y una pared de ladrillo con hogar.',
    photo: comedor,
  },
  {
    id: 'cocina',
    name: 'Cocina',
    text: 'Ventana en arco, mesada con pileta y cocina a gas con horno.',
    wp: 7,
    alt: 'Cocina con una ventana en arco, mesada con bacha y cocina a gas con horno y campana.',
    photo: cocina,
  },
  {
    id: 'sala',
    name: 'Sala vidriada',
    text: 'Ventanales en arco, cielorraso de madera y vista a la cochera.',
    wp: 8,
    alt: 'Sala con ventanales en arco, pared de ladrillo, cielorraso de madera y una mesa redonda.',
    photo: sala,
  },
  {
    id: 'pileta',
    name: 'Pileta y deck',
    text: 'Pileta con cerco de seguridad y deck de madera, pegada a la galería de ladrillo.',
    wp: 9,
    alt: 'Pileta con cerco de seguridad, deck de madera y la galería de ladrillo con arcos.',
    photo: pileta,
  },
];

// Camera per step. Step 0 (the whole lot) is computed from the stage aspect.
export const cameras = zones.map((z, i) => {
  const [x, y] = route[z.wp];
  if (z.id === 'pileta') return { cx: 700, cy: 415, w: 380 };
  return {
    cx: x * 0.4 + HOUSE_CENTER[0] * 0.6 + 20,
    cy: y * 0.4 + HOUSE_CENTER[1] * 0.6 + 12,
    w: 350,
  };
});

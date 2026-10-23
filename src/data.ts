import galeria from './assets/fotos/galeria.jpg';
import recibidor from './assets/fotos/recibidor.jpg';
import living from './assets/fotos/living.jpg';
import comedor from './assets/fotos/comedor.jpg';
import cocina from './assets/fotos/cocina.jpg';
import sala from './assets/fotos/sala.jpg';
import pileta from './assets/fotos/pileta.jpg';
import galeria2 from './assets/fotos/galeria2.jpg';
import frente from './assets/fotos/frente.jpg';
import pileta2 from './assets/fotos/pileta2.jpg';
import dormitorio from './assets/fotos/dormitorio.jpg';

export const WHATSAPP_NUMBER = '5492804503151';
export const WHATSAPP_DISPLAY = '280 450-3151';
export const WHATSAPP_TEXT =
  'Hola! Vi la casa de Mendoza 1042 en Rawson y quisiera más información.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
export const MAPS_QUERY = 'Mendoza 1042, Rawson, Chubut, Argentina';

export const LOT_M2 = 3058.71;
export const BUILT_M2 = 151.94;

// Schematic lot, 1000 x 640 units, redrawn from the owner's hand sketch (north is not shown).
// The street runs along the bottom; the house sits at the left of the lot, pool behind it.
// Waypoints of the visit route, street to pool. Indices 3..10 are the eight zones, in tour order.
export const route: [number, number][] = [
  [265, 605],
  [265, 530],
  [300, 505],
  [333, 440],
  [263, 466],
  [263, 440],
  [263, 415],
  [282, 358],
  [201, 360],
  [333, 300],
  [261, 190],
];

export const lot = 'M100 590V50H871V454L769 590';
export const house = { x: 182, y: 253, w: 177, h: 217 };
export const gallery = { x: 307, w: 52 };
export const poolArea = { x: 179, y: 141, w: 164, h: 100 };
// Semi-covered carport for one vehicle, left of the house.
export const carport = { x: 108, y: 388, w: 62, h: 82 };
export const HOUSE_CENTER: [number, number] = [270, 361];

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
    id: 'dormitorios',
    name: 'Dormitorios',
    text: 'Dos dormitorios. Este tiene placard empotrado y una ventana que da a los arcos de la galería.',
    wp: 7,
    alt: 'Dormitorio con cama de dos plazas, placard empotrado, un sillón de mimbre y una ventana que da a los arcos de la galería.',
    photo: dormitorio,
  },
  {
    id: 'cocina',
    name: 'Cocina',
    text: 'Ventana en arco, mesada con pileta y cocina a gas con horno.',
    wp: 8,
    alt: 'Cocina con una ventana en arco, mesada con bacha y cocina a gas con horno y campana.',
    photo: cocina,
  },
  {
    id: 'sala',
    name: 'Sala vidriada',
    text: 'Ventanales en arco, cielorraso de madera y vista a la cochera.',
    wp: 9,
    alt: 'Sala con ventanales en arco, pared de ladrillo, cielorraso de madera y una mesa redonda.',
    photo: sala,
  },
  {
    id: 'pileta',
    name: 'Pileta y deck',
    text: 'Pileta con cerco de seguridad y deck de madera, pegada a la galería de ladrillo.',
    wp: 10,
    alt: 'Pileta con cerco de seguridad, deck de madera y la galería de ladrillo con arcos.',
    photo: pileta,
    extra: {
      photo: pileta2,
      alt: 'Deck de madera junto a los arcos de la galería y la pileta con cerco de seguridad, entre árboles.',
    },
  },
];

// Camera per step. Step 0 (the whole lot) is computed from the stage aspect.
export const cameras = zones.map((z) => {
  const [x, y] = route[z.wp];
  if (z.id === 'pileta') return { cx: 261, cy: 146, w: 300 };
  return {
    cx: HOUSE_CENTER[0] + (x - HOUSE_CENTER[0]) * 0.4 + 10,
    cy: HOUSE_CENTER[1] + (y - HOUSE_CENTER[1]) * 0.4 + 4,
    w: 410,
  };
});

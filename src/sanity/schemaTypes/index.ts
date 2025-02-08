import { SchemaTypeDefinition } from 'sanity';
import { product } from './prducts'
import { hero } from './hero';
import { trending } from './trending'
import { bike } from './gaming-home'
import { car } from './kitchen'
import { sale } from './sale'
import { searchByCars } from  './phone-cases'
import { searchByBikes } from  './gaming'
import { carAccessories } from  './charging'
import { bikeAccessories } from  './laptop'
import { bikeParts } from  './ear-buds'
import { carCareProducts } from  './cables'
import { touringGadgets } from  './smart-watches.'
import attentionBar  from './attentionBar';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,touringGadgets,carCareProducts,attentionBar, hero,bikeParts,trending,bike,car,sale,searchByCars,searchByBikes,carAccessories,bikeAccessories ] // Correctly includes Menu schema
};
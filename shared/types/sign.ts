export type SignCategory = 'warning' | 'priority' | 'restrictive' | 'mandatory' | 'special' | 'information' | 'service' | 'additional';

export type Sign = {
  number: string
  name: string
  category: SignCategory
  imageUrl: string
};

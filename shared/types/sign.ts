export type SignCategory = 'warning' | 'priority' | 'prohibitory' | 'mandatory' | 'special' | 'information' | 'service' | 'additional';

export type Sign = {
  rulesNumber: string
  name: string
  category: SignCategory
};

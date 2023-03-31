/*const ProduitTable = {
  produits: [
    {
      id: 1,
      nom: 'Pain',
      prix: 1.99,
      promo: '10%',
    },
    {
      id: 2,
      nom: 'Lait',
      prix: 1.19,
      promo: '5%',
    },
    {
      id: 3,
      nom: 'Patate',
      prix: 3.49,
      promo: null,
    },
    {
      id: 4,
      nom: 'Pommes',
      prix: null,
      promo: '20%',
    },
    {
      id: 5,
      nom: 'Fromage',
      prix: 2.99,
      promo: '12%',
    },
    {
      id: 6,
      nom: 'Bananes',
      prix: 1.49,
      promo: '8%',
    },
    {
      id: 7,
      nom: 'Kiwi',
      prix: null,
      promo: '5%',
    },
    {
      id: 8,
      nom: 'Farine',
      prix: 6.99,
      promo: null,
    },
    {
      id: 9,
      nom: 'Pâtes',
      prix: null,
      promo: '15%',
    },
    {
      id: 10,
      nom: 'Chocolat',
      prix: 1.29,
      promo: '25%',
    },
  ],
};
export { ProduitTable };
*/
export class Product {
  id: number;
  name: string;
  price: number | undefined;
  discount: boolean;
  constructor(
    idParam: number,
    nameParam: string,
    priceParam: number | undefined,
    discountParam: boolean = false
  ) {
    this.id = idParam;
    this.name = nameParam;
    this.price = priceParam;
    this.discount = discountParam;
  }
}

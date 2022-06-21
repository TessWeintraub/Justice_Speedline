Array.prototype.last = function () {
  return this[this.length - 1];
}

export const warehouses = [
  {
    id: 1,
    one: 'Warehouse No. 1',
    two: 5,
    three: 20,
    four: 10,
    five: 6,
    characteristic: {
      title: 'Warehouse No. 1',
      button_text: 'Add cargo +',
      one: 'All stores',
      two: 'Manufacturer',
      three: 'Item number',
      four: 'Purchasing technology',
      five: 'Shipment method',
      checked: false
    },
    products: [
      {
        id: 1,
        one: 'f4',
        two: 'YAG',
        three: 'C10',
        four: 'S',
        five: 'AIR',
        payment: 'Cash',
        checked: false
      },
      {
        id: 2,
        one: 'f4',
        two: 'YAG',
        three: 'C11',
        four: 'S',
        five: 'TRUCK',
        payment: 'Cash',
        checked: false
      },
      {
        id: 3,
        one: 'f4',
        two: 'YAG',
        three: 'C12',
        four: 'S',
        five: 'SEA',
        payment: 'Cash',
        checked: false
      },
      {
        id: 4,
        one: 'f4',
        two: 'YAG',
        three: 'C13',
        four: 'D',
        five: 'AIR',
        payment: 'Cash',
        checked: false
      },
      {
        id: 5,
        one: 'f4',
        two: 'YAG',
        three: 'C14',
        four: 'S',
        five: 'SEA',
        payment: 'Cash',
        checked: false
      },
    ]
  },
  {
    id: 2,
    one: 'Warehouse No. 2',
    two: 5,
    three: 14,
    four: 4,
    five: 5,
    characteristic: {
      title: 'Warehouse No. 2',
      button_text: 'Add cargo +',
      one: 'All stores',
      two: 'Manufacturer',
      three: 'Item number',
      four: 'Purchasing technology',
      five: 'Shipment method',
      checked: false
    },
    products: [
      {
        id: 1,
        one: 'CC0201FRNPO',
        two: 'YAG',
        three: 'C20',
        four: 'S',
        five: 'SEA',
        payment: 'Cash',
        checked: false
      },
      {
        id: 2,
        one: 'CC0202FRNPO',
        two: 'YAG',
        three: 'C21',
        four: 'S',
        five: 'AIR',
        payment: 'Cash',
        checked: false
      },
      {
        id: 3,
        one: 'CC0203FRNPO',
        two: 'YAG',
        three: 'C22',
        four: 'S',
        five: 'TRUCK',
        payment: 'Cash',
        checked: false
      },
      {
        id: 4,
        one: 'CC0204FRNPO',
        two: 'YAG',
        three: 'C23',
        four: 'S',
        five: 'AIR',
        payment: 'Cash',
        checked: false
      },
      {
        id: 5,
        one: 'CC0205FRNPO',
        two: 'YAG',
        three: 'C24',
        four: 'S',
        five: 'SEA',
        payment: 'Cash',
        checked: false
      },
    ]
  }
]



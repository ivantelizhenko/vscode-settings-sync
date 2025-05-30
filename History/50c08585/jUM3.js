'use strict';

const me = {
  birthYear: 2004,
  year: 2023,
  firstName: 'ivan',
  secondName: 'telizhenko',
  yearsOld: function () {
    return this.year - this.birthYear;
  },
  abo: () => {
    console.log(this);
  },
};
console.log(me.abo());

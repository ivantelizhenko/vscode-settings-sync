'use strict';

const me = {
  birthYear: 2004,
  year: 2023,
  firstName: 'ivan',
  secondName: 'telizhenko',
  abo: function () {
    console.log('hey');
    console.log(this.year);
    const oba = () => console.log(this);
    oba();
  },
};
me.abo();

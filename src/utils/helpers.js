function* randomIdGenerator() {
  let id = 1;

  while (true) {
    yield id;
    id += 1;
  }
}

const randomIdObject = randomIdGenerator();

const getRandomId = () => randomIdObject.next().value;

const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const getDayName = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return DAYS[d.getDay()];
};

export {
  getRandomId,
  getDayName,
};

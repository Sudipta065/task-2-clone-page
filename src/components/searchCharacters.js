const searchCharacters = (search) => {
  const apiKey = 'MTc0MzozUFQwUUQwR0Q4';

  return fetch(
    `https://barikoi.xyz/v1/api/search/autocomplete/${apiKey}/place?q=${search}&latitude=23.873751&longitude=90.396454`
  )
    .then((response) => response.json())

    .then((results) => results.places)
    .catch((error) => {
      console.error(error);

      return [];
    });
};

export default searchCharacters;

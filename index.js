export default function solution(content) {
  // BEGIN
  // console.log(content);
  const dataRows = content.split('\n').slice(2);
  console.log(`Всего растений содержится в файле: ${dataRows.length}`);

  // step 2
  const data = dataRows.map((row) => row.slice(1, -1).split('|'));
  // console.log(data);

  // const trimSpaces = (string) => string.trim();
  const cleanData = data.map((row) => row.map((cell) => cell.trim()));
  // console.log(cleanData);

  const fixNames = (row) => {
    row[0] = `${row[0].slice(0, 1).toUpperCase()}${row[0].slice(1)}`;
    return row;
  };
  const dataWithFixedNames = cleanData.map((row) => fixNames(row));
  // console.log(dataWithFixedNames);

  // const sortedData =
  // const plantNames = cleanData.map((row) => row[0]);
  // console.log(plantNames);

  const sortedPlantNames = dataWithFixedNames.sort();
  console.log(`Список растений в алфавитном порядке: ${sortedPlantNames.map((row) => row[0]).join(', ')}`);

  // step 3

  const isDangerous = (row) => ((row[4] === 'Да'));
  // console.log(isDangerous(dataWithFixedNames[0]));
  const dangerousPlantsCount = dataWithFixedNames.filter(isDangerous).length;
  // console.log(dangerousPlantsCount);

  const isSafe = (row) => ((row[4] === 'Нет'));
  const safePlants = dataWithFixedNames.filter(isSafe).length;
  // console.log(notDangerousPlantsCount);

  const percentDangerous = Math.round(
    (dangerousPlantsCount / (dangerousPlantsCount + safePlants)) * 100,
  );
  // console.log(percentDangerous);

  const percentSafe = Math.round((safePlants / (dangerousPlantsCount + safePlants)) * 100);
  // console.log(percentSafe);

  console.log(`Опасных растений ${percentDangerous}%, безопасных растений ${percentSafe}%`);

  // step 4

  const lifeExpectancies = cleanData.map((row) => row[3]);
  // console.log(lifeExpectancies);

  const lifeExpectanciesNumbers1 = lifeExpectancies.map((expectancy) => expectancy.split(' ')[0]);
  // console.log(lifeExpectanciesNumbers1);

  const lifeExpectanciesNumbers2 = lifeExpectanciesNumbers1.map((expectancy) => expectancy.split('-'));
  // console.log(lifeExpectanciesNumbers2);

  const lifeExpectanciesNumbers3 = lifeExpectanciesNumbers2.map((expectancy) => expectancy.map((subexpectancy) => Number(subexpectancy)));
  // console.log(lifeExpectanciesNumbers3);

  const lifeExpectanciesNumbers4 = lifeExpectanciesNumbers3.map((expectancy) => {
    if (expectancy.length === 1) {
      return expectancy[0];
    }

    if (expectancy.length === 2) {
      return (expectancy[0] + expectancy[1]) / 2;
    }
  });
  // console.log(lifeExpectanciesNumbers4);

  const cb = (acc, element) => acc += element;
  const sumPlantLifeExpectancies = lifeExpectanciesNumbers4.reduce(cb, 0);
  // console.log(sumPlantLifeExpectancies);

  const averagePlantLifeExpectancy = sumPlantLifeExpectancies / lifeExpectanciesNumbers4.length;
  console.log(`Выведите среднее время жизни всех лесных растений: ${averagePlantLifeExpectancy} лет`);

  // console.log(cleanData)

  // step 5

  // END
}

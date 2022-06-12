const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let dataIXX = await promiseTheaterIXX();
  let dataVGC = await promiseTheaterVGC();
  let dataTheater = dataIXX.concat(dataVGC); //merge dataIXX & dataVGC -> buat array baru

  let result = dataTheater.filter((item) => item.hasil === emosi);
  return result.length;
};

module.exports = {
  promiseOutput,
};

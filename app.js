const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener le clima",
    demand: true,
  },
}).argv;

const getInf = async (direccion) => {
  try {
    let place = await lugar.getLugarLatLng(argv.direccion);
    let latt = place.latt;
    let longt = place.longt;
    let weather = await clima.getClima(latt, longt);

    return `El clima de ${direccion} es de ${weather}`;
  } catch (error) {
      return `No se pudo determinar el clima de ${ direccion }`
  }
};

getInf(argv.direccion).then(console.log).catch(console.log);

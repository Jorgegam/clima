const axios = require('axios');

const getLugarLatLng = async (direccion) => {

const encodedUrl = encodeURI( direccion );

const response = await axios.get(`https://geocode.xyz/${ encodedUrl }?json=1`);

if (Math.trunc(response.data.longt) === 0 && Math.trunc(response.data.latt) === 0) {
    throw new Error(`No hay resultados para ${ direccion }`);
    
}
    const longt = response.data.longt;
    const latt = response.data.latt;

return{
    latt,
    longt,
    direccion
  }
}

module.exports = {
    getLugarLatLng
}
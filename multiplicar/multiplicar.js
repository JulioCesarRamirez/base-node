const fs = require("fs");
const colors = require("colors");

let data = "";

const crearArchivo = async (base, limite = 10) => {
  if (!Number(base)) {
    throw new Error(`El valor introducido ${base} no es un numero`);
  }

  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }

  fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
    if (err) {
      throw err;
    } else {
      return `tabla-${base}-al-${limite}.txt`.green;
    }
  });
};

const listarTabla = (base, limite = 10) => {
  console.log("=================".green);
  console.log(`Tabla de ${base}`.green);
  console.log("=================".green);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}\n`.blue);
  }
};

module.exports = {
  crearArchivo: crearArchivo,
  listarTabla: listarTabla,
};

function somar(numero1, numero2) {
  return _validarTipo(numero1, numero2) ?? numero1 + numero2;
}

function dividir(numero1, numero2) {
  return _validarTipo(numero1, numero2) ?? numero1 / numero2;
}

function _validarTipo(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number") throw Error;
}

exports.somar = somar;
exports.dividir = dividir;

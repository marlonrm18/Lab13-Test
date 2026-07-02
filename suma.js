function suma(numero1, numero2){
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        throw new Error('Deben de ser números');
    }
    return numero1 + numero2;
}

module.exports = suma;
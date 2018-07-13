function orbitalPeriod(arr) {
    return arr.map(item => ({name: item.name, orbitalPeriod: calculateOrbitalPeriod(item.avgAlt)}))
}

function calculateOrbitalPeriod(altitude){
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    let sqrt = Math.sqrt((Math.pow(altitude + earthRadius,3)/ GM ));
    return Math.round(2 * Math.PI * sqrt);
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
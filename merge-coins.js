const results = require('./bithumb-coins.json').data

for (const symbol of Object.keys(results)) {
    results[symbol] = {supportedPlatforms: new Set(['bithumb']), name: symbol};
}

for (const info of require('./upbit-coins.json')) {
    const { market, korean_name, english_name } = info;
    const symbol = market.split('-')[1]
    if(results[symbol] === undefined){
        results[symbol] = {
            name: english_name,
            supportedPlatforms: new Set(['upbit']),
        };
    } else {
        results[symbol].supportedPlatforms.add('upbit');
        results[symbol].name = english_name;
    }
}

for (const value of Object.values(results)) {
    value.supportedPlatforms = Array.from(value.supportedPlatforms);
}

console.log(JSON.stringify(results));

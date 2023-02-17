export function toCelcius(farenhite){
    return((farenhite-32)*5/9);
}

export function toFarenhite(celcius){
    return((celcius*9)/5)+32;
}

export function convert(tempareture,convertTo){
    const input = parseFloat(tempareture);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convertTo(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();
}
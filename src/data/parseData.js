//Receives a pointer to an array and an object containing data to be parsed and put into an array

export default function parseData(dataArray,dataObj) {
    //Height Property - in decimeters. Convert into meters
    const heightMeters = dataObj.height / 10;
    const heightValue = heightMeters !== 1 ? heightMeters + ' meters' : heightMeters + ' meter';
    dataArray.push({key: 'Height', value: heightValue});
    //Weight - in hectograms. Convert to kilograms
    const weightKilogram = dataObj.weight / 10;
    const weightValue = weightKilogram != 1 ? weightKilogram + ' kilograms' : weightKilogram + ' kilogram';
    dataArray.push({key: 'Weight', value: weightValue});
    //Type One
    const typeOneName = dataObj.types[0].type.name
    const typeOneFormat = typeOneName.charAt(0).toUpperCase() + typeOneName.slice(1)
    dataArray.push({key: 'Type 1', value: typeOneFormat});
    //Type Two - if Exists
    if(dataObj.types.length > 1) {
        const typeTwoName = dataObj.types[1].type.name
        const typeTwoFormat = typeTwoName.charAt(0).toUpperCase() + typeTwoName.slice(1)
        dataArray.push({key: 'Type 2', value: typeTwoFormat});
    }
}
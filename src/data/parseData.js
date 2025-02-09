//Receives a pointer to an array and an object containing data to be parsed and put into an array

export default function parseData(dataArray,dataObj) {
    //Height Property
    dataArray.push({key: 'Height', value: dataObj.height});
    //Weight
    dataArray.push({key: 'Weight', value: dataObj.weight});
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
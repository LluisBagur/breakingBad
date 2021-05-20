let baseUrl = 'https://www.breakingbadapi.com/api/'

export const loadCharsInfo = async () =>{
    console.log("IM IN")
    const response = await fetch(`${baseUrl}characters`);
    if (response.ok) {
        console.log(response)
        const data = await response.json();
        console.log(data)
        return data
    }
    throw Error('Error!')
}
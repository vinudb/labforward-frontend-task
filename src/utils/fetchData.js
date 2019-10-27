export const fetchData =async (series=1)=>{
    const response = await fetch(`https://my-json-server.typicode.com/vinudb/labforward-frontend-task/series${series}`)
    
    if (response.status === 200) {
        let result = await response.json();
        const data = result.map((item, index)=>{
            const keyName = {name: "series_"+series}
            return {x: (index+1).toString(), [keyName.name]: item} 
        });
        const threshold = 5;
        const signal = result.map((item, index)=>{
            const keyName = {name: "series_"+series}
            return {x: (index+1).toString(), [keyName.name]: item > threshold? 1 : 0} 
        });
        return { data, signal };
    } else {
        throw new Error('Unable to get data')
    }
}

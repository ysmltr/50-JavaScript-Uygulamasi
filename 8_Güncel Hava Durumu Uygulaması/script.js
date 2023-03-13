const url='https://api.openweathermap.org/data/2.5'

const key='a3e51a8071394c96b26ef0e5d0fd1895'


const setQuery=(e)=>{
    if (e.keyCode=='13') {
        getResult(searchBar.value);
        
    }
}


const getResult=(cityName)=>{
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult);
}

const displayResult=(result)=>{
    console.log(result);
}



const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery);

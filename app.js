const form = document.querySelector('#form')
const city = document.querySelector('#city')
const card = document.querySelector('#card')
let arr =[]



// 6326e206cf9041e5b3853528241406



function rendercard(array) {
    card.innerHTML = ""; // Clear the card content before rendering new cards
    array.forEach((arr) => {
       
    });
    ; // Clear the city input field
}



form.addEventListener('submit',(event)=>{
    event.preventDefault()
    card.innerHTML=""
    
    axios(`http://api.weatherapi.com/v1/current.json?key=6326e206cf9041e5b3853528241406&q=${city.value}&aqi=no`)
    .then((res)=>{

        if (arr.find(element => element.location.name.toLowerCase() === city.value.toLowerCase())) {
            console.log("city is alredy show in card");
            alert("Your City Weather is Already show in card")

            arr.map((item)=>{

                card.innerHTML += `
                <div class='bg-white border border-gray-800 shadow-lg ring ring-gray-700 ring-opacity-50 w-50 mx-auto mt-5 rounded-lg p-4 mb-5'>
                    <h1 class='text-2xl'>${item.location.name}</h1>
                    <p class='text-gray-500'>${item.location.localtime}, ${item.location.country}</p>
                    <div class='mt-5 d-flex justify-content-between align-items-center mx-5 pb-4'>
                        <h2 class='text-4xl md:text-7xl lg:text-8xl'>${item.current.temp_c}°C</h2>
                        <img width="160px" src=${item.current.condition.icon} alt='weatherImg' />
                    </div>
                    <h4>${item.current.condition.text}</h4>
                </div>
                `;
    
    
    city.value = ""
            })
        }
        else{
        console.log(res.data);
        arr.unshift(res.data)
        console.log(arr);


        arr.map((item)=>{

            card.innerHTML += `
            <div class='bg-white border border-gray-800 shadow-lg ring ring-gray-700 ring-opacity-50 w-75 mx-auto mt-5 rounded-lg p-4 mb-5'>
                <h1 class='text-2xl'>${item.location.name}</h1>
                <p class='text-gray-500'>${item.location.localtime}, ${item.location.country}</p>
                <div class='mt-5 d-flex justify-content-between align-items-center mx-5 pb-4'>
                    <h2 class='text-4xl md:text-7xl lg:text-8xl'>${item.current.temp_c}°C</h2>
                    <img width="210px" src=${item.current.condition.icon} alt='weatherImg' />
                </div>
                <h4>${item.current.condition.text}</h4>
            </div>
            `;

city.value = ""

        })
    }
            


})
.catch((err)=>{
    console.log(err);



})
})



















// import { Input, initMDB } from "mdb-ui-kit";

// initMDB({ Input });





















// const form = document.querySelector('#form');
// const city = document.querySelector('#city');
// const card = document.querySelector('#card');
// let arr = [];

// // 6326e206cf9041e5b3853528241406

// function rendercard(array) {
//     card.innerHTML = ""; // Clear the card content before rendering new cards
//     array.forEach((arr) => {
//         card.innerHTML += `
//         <div class='bg-white border border-gray-800 shadow-lg ring ring-gray-700 ring-opacity-50 w-50 mx-auto mt-5 rounded-lg p-4 mb-5'>
//             <h1 class='text-2xl'>${arr.location.name}</h1>
//             <p class='text-gray-500'>${arr.location.localtime}, ${arr.location.country}</p>
//             <div class='mt-5 d-flex justify-content-between align-items-center mx-5 pb-4'>
//                 <h2 class='text-4xl md:text-7xl lg:text-8xl'>${arr.current.temp_c}°C</h2>
//                 <img width="160px" src=${arr.current.condition.icon} alt='weatherImg' />
//             </div>
//             <h4>${arr.current.condition.text}</h4>
//         </div>
//         `;
//     });
//     city.value = ""; // Clear the city input field
// }

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const cityValue = city.value.trim();
//     if (cityValue === "") {
//         alert("Please enter a city name");
//         return;
//     }

//     // Fetch weather data using axios
//     axios(`http://api.weatherapi.com/v1/current.json?key=6326e206cf9041e5b3853528241406&q=${cityValue}&aqi=no`)
//         .then((res) => {

// // arr.filter((element)=>{ element.location.name.toLowerCase() === city.value.toLowerCase() })





//             const existingCityIndex = arr.findIndex(element => element.location.name.toLowerCase() === cityValue.toLowerCase());
// // console.log(existingCityIndex);
//             if (existingCityIndex !== -1) {
//                 // City already exists in the array, update its data
//                 arr[existingCityIndex] = res.data;
//             } else {
//                 // City doesn't exist, add it to the beginning of the array
//                 arr.unshift(res.data);
//             }

//             rendercard(arr);
//         })
//         .catch((err) => {
//             console.log(err);
//             alert("Error fetching weather data. Please try again.");
//         });
// });



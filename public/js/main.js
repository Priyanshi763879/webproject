const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getInfo=async(event)=>{
  event.preventDefault();
  let cityVal=cityName.value;

  if(cityVal===""){
     city_name.innerText=`please write the name before search`;
     datahide.classList.add('data_hide');
   
      
  }else{
    try{let url=`https://api.weatherapi.com/v1/current.json?key=8e6da6f1006040bb9b874528240910&q=${cityVal}`
    const response=await fetch(url);
    const data=await response.json()
     
    console.log('API Data:', data);

    city_name.innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`;

      // Display temperature in Celsius
      temp.innerText = `${data.current.temp_c}°C`;

      // Display weather condition
      temp_status.innerHTML = `<img src="${data.current.condition.icon}" alt="weather icon"> ${data.current.condition.text}`;

      datahide.classList.remove('data_hide');

    
  }catch{
    city_name.innerText=`please enter the city name properly`;
    datahide.classList.add('data_hide');
  }
  }
}


submitBtn.addEventListener('click',getInfo);

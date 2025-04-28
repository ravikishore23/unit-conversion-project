
const convertBtn = document.getElementById("convert-btn")
//const clearBtn=document.getElementById("clear-btn")
const inputEl=document.getElementById("input-el")
const lengthOp=document.getElementById("length-op")
const volumeOp=document.getElementById("volume-op")
const massOp=document.getElementById("mass-op")

convertBtn.addEventListener('click',function(){
    
    let inputArg= inputEl.value
    feet = (inputArg * 3.2808).toFixed(2)
    meter= (inputArg / 3.2808).toFixed(2)
    gallons =(inputArg * 0.264172).toFixed(2)
    liters =(inputArg / 0.264172).toFixed(2)
    pounds = (inputArg * 2.20462).toFixed(2)
    kilograms = (inputArg/ 2.20462).toFixed(2)
    lengthOp.innerHTML=`${inputArg} meters = ${feet} feet | ${inputArg} feet =${meter} meters`
    volumeOp.innerHTML=`${inputArg} liters = ${gallons} gallons | ${inputArg} gallons =${liters} ]liters`
    massOp.innerHTML=`${inputArg} kilograms = ${pounds} pounds | ${inputArg} pounds =${kilograms} kilos`
})


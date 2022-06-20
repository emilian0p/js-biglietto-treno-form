const dataAcquisition = document.querySelector('#data-acquisition');

dataAcquisition.addEventListener('click', function(){
 
    const userName = (document.getElementById('user-name').value);
    const userAge = parseInt(document.getElementById('user-age').value);
    const userDistance = parseInt(document.getElementById('user-km').value);
    console.log(userAge, userDistance);
    const carrozzaUtente = (Math.floor(Math.random() * 10)+1);

    const pricePerKm= 0.26;
    let totalPrice= pricePerKm;
    totalPrice *= userDistance;

    if( userAge < 18){
    const discount= ((totalPrice * 15) / 100);
    totalPrice=totalPrice-discount;
    } 

    else if( userAge >= 65){
        const discount= ((totalPrice * 35) / 100);
        totalPrice=totalPrice-discount;
                
    } 

    // ? arrotondiamo a due cifre max dopo la virgola

    totalPrice= totalPrice.toFixed(2);
    console.log(totalPrice);
    
    document.getElementById('name-utente').innerHTML = userName;

    
    document.getElementById('carrozza').innerHTML = carrozzaUtente;

    
    document.getElementById('prezzo').innerHTML ='€'+ totalPrice;

    
});

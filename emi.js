function calculate() {
    const Amount= document.querySelector('#amount').value;
    const Months= document.querySelector('#months').value;
    const Rate= document.querySelector('#interest').value;

    const Interest=(Amount*(Rate*0.01))/Months;
    const Total=((Amount/Months)+Interest).toFixed(2);
    
    document.querySelector('#total')
        .innerHTML='Your EMI Amount:'+Total;
}


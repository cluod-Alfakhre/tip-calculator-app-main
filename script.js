const moneyInput=document.getElementById('money');
const tipInput=document.getElementById('c-tip');
const peopleInput=document.getElementById('people');
const tipAmount=document.querySelector('.tip-amount .value');
const total=document.querySelector('.total .value');
const reset=document.querySelector('.reset');
let tip;
document.querySelectorAll('input').forEach((el)=>{
    el.addEventListener('input',()=>{
        if(tipInput.value===''){
            tip=document.querySelector('.percent.active').dataset.tip;
        }else{
            tip=tipInput.value;
        }
        calcTip(parseInt(moneyInput.value),parseInt(tip),parseInt(peopleInput.value))
    })
})
document.querySelectorAll('.percent').forEach((el)=>{
    el.addEventListener('click',()=>{
        document.querySelectorAll('.percent').forEach((item)=>{
                item.classList.remove('active');
        })
        el.classList.add('active');
        if(moneyInput.value!==''){
            tip=document.querySelector('.percent.active').dataset.tip;
            calcTip(parseInt(moneyInput.value),parseInt(tip),parseInt(peopleInput.value))
        }
    })
})

reset.addEventListener('click',()=>{
    tipAmount.innerHTML='$0.0';
    total.innerHTML='$0.0';
    document.querySelectorAll('input').forEach((el)=>{
        el.value='';
    })
})

function calcTip(money,tip,people){
    if(moneyInput.value!==''){
        let tipResult=(((money/100)*tip)/people);
        let totalResult=(((money/100)*tip)+money)/people;
        tipAmount.innerHTML=`$${tipResult}`;
        total.innerHTML=`$${totalResult}`;
    }else{
        tipAmount.innerHTML='$0.0';
        total.innerHTML='$0.0';
    }
}

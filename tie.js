function calc(){
    let billamount=parseInt(document.getElementById('billamount').value);
    let rewpercent=parseInt(document.getElementById('percent').value);
let rewardAmount=(billamount*rewpercent)/100;
document.getElementById('reamount').innerHTML='Reward Amount:{ rewardAmount}';
totalamount.innerHTML='Total Amount:{rewardAmount+billamount}';
}
function resetAmount(){
    document.getElementById('billamount').value='';
    document.getElementById('percent').value='';
    document.getElementById('reamount').innerHTML='reward amount';
    document.getElementById('totalamount').innerHTML='Total Amount';
}
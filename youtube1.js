if (typeof window.ethereum !=='undefined') {
console.log('metamask is installed');
}else{
console.log('install metamask')
document.querySelector('.enableEthereumButton').innerHTML="<a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn' target='_blank'> Install Metamask</a>";
document.querySelector('.intro').style.display='none'
}


const ethereumButton=document.querySelector('.enableEthereumButton');
const showAccount= document.querySelector('.showAccount');
const sendEthButton = document.querySelector('.sendEthButton');
const showBalance = document.querySelector('.showBalance')
ethereumButton.addEventListener('click',()=> {
    //will start the metamask extension
getAccount();
}); 

async function getAccount(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    const account = accounts[0];
    showAccount.innerHTML=account;
   

    const balance = await ethereum
    .request ({
    method:'eth_getBalance',
    params:[account,"latest"],
    });
  
    const read = parseInt(balance)/10**18;
    console.log(read.toFixed(5));
    showBalance.innerHTML=read.toFixed(5);
    
    //const value=200;
    //console.log(value)
    }       



    

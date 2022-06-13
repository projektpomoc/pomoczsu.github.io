const select = document.querySelector('select');
const allLang = ['pl', 'ua', 'en']

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();

}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);

    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en'+lang;
        location.reload();
    }
    select.value = hash;
    
    for (let key in langArr){
        let elem = document.querySelector('.lang-' + key);
        if(elem){
            elem.innerHTML = langArr[key][hash];
        }
        
    }

}

changeLanguage();
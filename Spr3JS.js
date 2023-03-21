function get(){
    val = document.getElementById("inp");
    cnt = document.getElementById("sum").value;
    kz = document.getElementById('toKZT');
    dl = document.getElementById('toUSD');
    eu = document.getElementById('toEUR');
    if(val.selectedIndex == 0){
        kz.innerHTML = "-"
        eu.innerHTML = (cnt / 542).toFixed(2);
        dl.innerHTML = (cnt / 429).toFixed(2);
    }
    if(val.selectedIndex == 1){
        kz.innerHTML = (cnt * 429).toFixed(2);
        eu.innerHTML = (cnt * 0.84).toFixed(2);
        dl.innerHTML = "-";
    }
    if(val.selectedIndex == 2){
        kz.innerHTML = (cnt * 507).toFixed(2);
        eu.innerHTML = "-";
        dl.innerHTML = (cnt * 1.176335).toFixed(2);
    }
}

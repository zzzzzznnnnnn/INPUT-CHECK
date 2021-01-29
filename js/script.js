let bu = document.querySelector("#button");
let kodMeli = document.querySelector("#kodmeli");
let mobile = document.querySelector("#phonnumber");
let nam = document.querySelector("#name");
let namKh = document.querySelector("#nameKh");
let email = document.querySelector("#email");
let text = document.querySelector("#text");
setInterval(function () {


    if (kodMeli.value !== "" && mobile.value !== "" && nam.value !== "" && namKh.value !== "" && email.value !== "" && text.value !== "") {
        bu.disabled = false;
        bu.classList.remove("btn-dark");
        bu.classList.add("btn-primary");
        bu.innerText = "send";

    } else {
        bu.disabled = true;
        bu.classList.add("btn-dark");
        bu.classList.remove("btn-primary");
        bu.innerText = "check the input";

    }
}, 20)
bu.addEventListener("click", function () {
        let vaziatMobile;
        if (mobile.value.length === 12 && mobile.value[0] === "9" && mobile.value[1] === "8") {
            vaziatMobile = "معتبر";
        } else {
            vaziatMobile = "نامعتبر";
        }
        let sum = 0;
        for (i = 1; i < kodMeli.value.length; i++) {
            let d = kodMeli.value[kodMeli.value.length - i - 1];
            d = d * (i + 1);
            sum += d;
        }
        let h = sum % 11;
        let raghamAkharMohasebeShodeh;
        if (h < 2) {
            raghamAkharMohasebeShodeh = h;
        } else {
            raghamAkharMohasebeShodeh = 11 - h;
        }
        let vaziatKodmeli;
        if (kodMeli.value[9] == raghamAkharMohasebeShodeh) {


            vaziatKodmeli = "معتبراست و "
        } else {
            vaziatKodmeli = "نامعتبر است و "
        }
        let kodShahr = kodMeli.value.substring(0, 3);
        let esmeShahr;
        switch (kodShahr) {
            case "001":
                esmeShahr = "تهران";
                break;
            case "428":
                esmeShahr = "زنجان";
                break;
            case "031":
                esmeShahr = "کرج";
                break;
            default:
                esmeShahr = "نامشخص";
        }
        let text;
        text=" خانم "+ nam.value+ " با شماره موبایل "+mobile.value+" و ایمیل "+email.value+" کدملی شما "+vaziatKodmeli+" شهر شما "+ esmeShahr+" تشخیص داده شد "
        alert(text);

    }

)

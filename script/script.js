let day = document.getElementById('day'),
    month = document.getElementById('month'),
    year = document.getElementById('year');

function calc_age(birth_month, birth_day, birth_year) {

    let todayDate = new Date(),
        todayYear = todayDate.getFullYear(),
        todayMonth = todayDate.getMonth(),
        toDay = todayDate.getDate(),
        age = todayYear - birth_year;

    if (birth_month !== '' && birth_day !== '' && birth_year !== '') {
        if (todayMonth < (birth_month - 1)) {
            age--;
        }
        if (((birth_month - 1) == todayMonth) && (toDay < birth_day)) {
            age--;
        }

        if (age >= 20 && age <= 40) {
            document.getElementById('btn').removeAttribute('disabled');
            birth_month = parseFloat(birth_month);
            birth_day = parseFloat(birth_day);
            birth_year = parseFloat(birth_year);

            getUrl(birth_month, birth_day, birth_year)
        }
    }
}


let inputs = document.querySelectorAll('.d-flex .elements');
inputs.forEach(data => {
    data.oninput = function () {
        calc_age(month.value, day.value, year.value);
    }
});


function getUrl(d, m, y) {
    return 'https://api.vk.com/method/users.search?count=600&birth_day=' + parseInt(day.value) + '&birth_month=' + parseInt(month.value) + '&birth_year=' + parseInt(year.value) + '&access_token=be158aa8be1d95ceefd80b6d9bb1486dc45f21e19df2b61740eca24f8a515df93131e1a47d2a4067cfe43&v=5.52';
}

function xmlHttreq() {
    var requestNew = new XMLHttpRequest();

    requestNew.onreadystatechange = function () {
        if (this.readyState !== 4) {
            return;
        }
        var serverResponse = JSON.parse(requestNew.response);
        console.log(requestNew.last_name);
    }

    requestNew.open("GET", getUrl(), true);
    requestNew.send();

};

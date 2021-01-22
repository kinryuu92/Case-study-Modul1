class manager{
    constructor(name, position, age, wage, skill, country, img) {
        this._name = name;
        this._position = position;
        this._age = age;
        this._wage = wage;
        this._skill = skill;
        this._country = country;
        this._img = img;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get wage() {
        return this._wage;
    }

    set wage(value) {
        this._wage = value;
    }

    get skill() {
        return this._skill;
    }

    set skill(value) {
        this._skill = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }
}


function display()
{
    let today = new Date();
    let month = (today.getMonth()+1);
    let day = today.getDate();
    let year = today.getFullYear();

    let hour = today.getHours()
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let output = month + '/' + day + '/' + year + ' - ' +
        hour + ':' + minute + ':' + seconds;
    document.getElementById("timeDate").innerHTML = output
}
display()
setInterval(display, 1000);



function getRndinteger(min,max) {
     document.getElementById('match-score').innerHTML = Math.floor(Math.random() * (max - min)) + min;
     document.getElementById('match-score-2').innerHTML = Math.floor(Math.random() * (max - min)) + min;
}

let img = [ "https://givetour.s3.amazonaws.com/UploadFiles/Competitors/138972.png",
    "https://givetour.s3.amazonaws.com/UploadFiles/Competitors/138960.png",
    "https://givetour.s3.amazonaws.com/UploadFiles/Competitors/138957.png",
    "https://givetour.s3.amazonaws.com/UploadFiles/Competitors/138975.png",
    "https://givetour.s3.amazonaws.com/UploadFiles/Competitors/138974.png",
    "https://givetour.s3.amazonaws.com/UploadFiles/Competitors/138966.png",
]
function getImgpush() {
    let rd = Math.floor(Math.random() * img.length)
    document.getElementById("img-push").src = img[rd];
}
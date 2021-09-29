function doRedirect() {
    location.replace(window.location.origin+'/quiz1');
}

var kuliners = [
    ['../img/rendang.jpg','Beef <span>Rendang</span>',"Beef Rendang is a flavorful West Sumatran dry curry that's made with beef, that's cooked together with a spice paste and coconut milk until fork-tender. It's then fried together with the remaining braising liquid until the liquid caramelizes around the beef, coating it with an insane amount of flavor. "],
    ['../img/dendeng.jpg','Beef <span>Dendeng Balado</span>',"Dendeng refers to thinly sliced dried meat in Indonesian cuisine. It is preserved through a mixture of sugar and spices and dried via a frying process. It is similar to jerky. The creation of dendeng is commonly credited to the Minangkabau people, and their earliest dendeng was made from beef, dried so it would be preserved for days and could be taken along with them when they traveled."],
    ['../img/sate.jpeg','Sate <span>Padang</span>',"Sate padang, more commonly referred to as Padang satay is a speciality satay from Minangkabau cuisine, made from beef cut into small cubes with spicy sauce on top. Its main characteristic is the thick yellow sauce made from rice flour mixed with beef and offal broth, turmeric, ginger, garlic, coriander, galangal root, cumin, curry powder and salt. In Medan, many Sate Padang use not only beef but also chicken, goat, lamb and mutton."],
    ['../img/teh.jpg','<span>Talua</span> tea',"Talua tea or egg tea is a typical drink of West Sumatra which is a mandatory menu in traditional stalls and restaurants in Padang. The drink consists of a mixture of tea, sugar and eggs and a little lime juice. The eggs used are usually village chicken eggs."]
]

var listKuliner = document.getElementById("list-kuliner")

function printKuliner(arrayKuliner) {
    var kuliner = ""

    for (const item in arrayKuliner){

        kuliner +=`<div class="col-lg-6">
                    <img src="${arrayKuliner[$item][0]}" class="img-fluid rounded">
                        </div>
                        <div class="col-lg-5">
                        <h3>${arrayKuliner[$item][1]}</h3>
                        <p>${arrayKuliner[$item][2]}</p>
                    </div>`;
        
    }

    listKuliner.innerHTML=kuliner;
}

function filterSearch(string) {
    var filteredKuliner =[]
    var isMatch
    for (const item in kuliners){
        isMatch = items[item][1].toLowerCase().includes(string.toLowerCase()) || items[item][2].toLowerCase().includes(string.toLowerCase())
        console.log(isMatch)
        if(isMatch == true){
            filteredKuliner.push(items[item])
        }
    }
    return filteredKuliner
}

var formSearch = document.getElementById("formItem")
var keyword
var filtered

var pressSearch = document.getElementById("keyword")
pressSearch.addEventListener("keyup", function(event){
    var val = event.target.value
    printKuliner(filterSearch(val))
})

function initialKuliner() {
    printKuliner(kuliners);     
}


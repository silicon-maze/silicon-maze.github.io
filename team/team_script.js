var img_path = "/img/bg-img/4.jpg"
var link = "https://google.com"
var name = "FirstName LastName"

let p_info = [{
        name: 'Dr.K.Balaveera Reddy',
        image_path: '/patrons/chairman.jpg',
        email: '#',
        linkedin: '#',
        designation: 'Chairman BOG'
    },
    {
        name: 'Prof. Karanam Umamaheshwar Rao',
        image_path: '/patrons/Director.jpg',
        email: 'director@nitk.ac.in',
        linkedin: 'https://www.linkedin.com/in/k-umamaheshwar-rao-623a4373',
        designation: 'Director'
    }
]

function insert_in_div(insert_div, persons) {
    persons.forEach((person) => {
        if (person.designation === undefined) person.designation = ''
        div_text = `
            <div class="col-12 col-sm-6 col-lg-3">
            <div class="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                <!-- Thumb -->
                <div class="speaker-single-thumb">
                    <img src="/img/team_page` + person.image_path + `" alt="" style="height:325px">
                </div>
                <!-- Social Info -->
                <div class="social-info">
                    <a href="` + "mailto:" + person.email + `"><i class="zmdi zmdi-email"></i></a>
                    <a href="` + person.linkedin + `"><i class="zmdi zmdi-linkedin"></i></a>
                </div>
                <!-- Info -->
                <div class="speaker-info">
                    <h5>` + person.name + `</h5>
                    <p style="color:gold">` + person.designation + `<p>
                </div>
            </div>
            </div>
            `
        insert_div.innerHTML += div_text
    })
}

function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

var p_div = document.getElementById('p').getElementsByClassName('row')[0]
insert_in_div(p_div, p_info)

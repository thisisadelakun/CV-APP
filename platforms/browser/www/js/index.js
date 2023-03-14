App.controller('home', function (page, seeMore) {
    // const toggleMenuOpen = () => document.body.classList.toggle("open");

    // $(toggleMenuOpen)() {
    //     document.body.classList.toggle("open");
    // }

});

App.controller('about', function (page) {
    // put stuff here
});
App.controller('experience', function (page) {
    // put stuff here
});
App.controller('project', function (page) {
    // put stuff here

    $(page)
        .find('#myBtn')
        .on('click', function () {
            let dots = document.getElementById("dots");
            let moreProject = document.getElementById("more");
            let btnText = document.getElementById("myBtn");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "SEE MORE";
                moreProject.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "SEE LESS";
                moreProject.style.display = "inline";
            }
        });



});

App.controller('contact', function (page) {
    // put stuff here
});

try {
    App.restore();
} catch (err) {
    App.load('home');
}
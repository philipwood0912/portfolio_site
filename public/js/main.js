(() => {
    //variables
    var cards = document.querySelectorAll(".card"),
        cardsvg = document.querySelectorAll(".pieces");
    
    //load event for svg access
    window.addEventListener("load", function(e) {
        //target cards for flip
        cards.forEach(card => {
            card.addEventListener("click", function(e) {
                card.classList.toggle("card-flip");
            });
        });
        //target svg for flip
        cardsvg.forEach(svg => {
            let svgDoc = svg.contentDocument;
            svgDoc.addEventListener("click", function(e) {
                console.log("click");
                let svgParent = svg.parentElement;
                svgParent.parentElement.classList.toggle("card-flip");
                window.location.href = `${document.URL}${svg.dataset.iconref}`;
                debugger;
            });
        });
    });

    //sticky nav functionality
    var navbar = document.getElementById("mainNav");
    var sticky = navbar.offsetTop;
    function stickyBar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    window.onscroll = function() {stickyBar()};
})();
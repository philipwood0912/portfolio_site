
(() => {
    //svg handles / window load
    var cardsvg = document.querySelectorAll(".pieces"),
        lightbox = document.querySelector(".lightbox"),
        lbContent = document.querySelector(".lb-content"),
        videoPlay = document.querySelector("#play"),
        videoBox = document.querySelector(".videobox"),
        videoClose = document.querySelector(".close"),
        icons = document.querySelectorAll(".icon"),
        skillText = document.querySelector(".skillText");

    window.addEventListener("load", function(e) {
        var websvg = document.querySelector("#web"),
            chartsvg = document.querySelector("#chart"),
            spacesvg = document.querySelector("#jet");
        cardsvg.forEach(svg => {
            let svgDoc = svg.contentDocument;
            svgDoc.addEventListener("click", function(e) {
                console.log("click");
                let svgParent = svg.parentElement;
                let svgOverlay = svgParent.childNodes[1];
                svgOverlay.classList.add("hidden");
                svgParent.parentElement.classList.toggle("card-flip");
                svgDoc.href = `/${svg.dataset.iconref}`;
                svgDoc.id = `${svg.dataset.numref}`;
                svg.style.opacity = 0;
            });
            svgDoc.addEventListener("click", parseFlipData);
        });

        function overlayAniHide(target){
            target.classList.add("overlayAniHide");
        }
        function overlayAniShow(target){
            target.classList.remove("overlayAniHide");
        }

        websvg.addEventListener("mouseover", function(e) {
            overlayAniHide(e.target.parentElement.childNodes[1]);
            let dots = e.target.contentDocument.querySelectorAll(".dot");
            dots.forEach((dot, index) => {
                dot.style.opacity = 0;
                dot.classList.add(`d${index}`);
                websvg.addEventListener("mouseleave", function(e) {
                    dot.style.opacity = 1;
                    dot.classList.remove(`d${index}`);
                    overlayAniShow(e.target.parentElement.childNodes[1]);
                });
            });
        });
        chartsvg.addEventListener("mouseover", function(e) {
            overlayAniHide(e.target.parentElement.childNodes[1]);
            let line = e.target.contentDocument.querySelector("#line");
            line.classList.add("animation");
            chartsvg.addEventListener("mouseleave", function(e) {
                line.classList.remove("animation");
                overlayAniShow(e.target.parentElement.childNodes[1]);
            });
        });
        spacesvg.addEventListener("mouseover", function(e) {
            let tarSvg = e.target.contentDocument;
            overlayAniHide(e.target.parentElement.childNodes[1]);
            let boxes = tarSvg.querySelectorAll(".box");
            boxes.forEach(box => {
                box.classList.add(`${box.dataset.aniref}`);
                spacesvg.addEventListener("mouseleave", function(e) {
                    box.classList.remove(`${box.dataset.aniref}`);
                    overlayAniShow(e.target.parentElement.childNodes[1]);
                });
            });
        });
        

        //First api fetch
        //render title
        function renderTitle(data) {
            var titleContent = "";
            for(i = 0; i < data.length; i++){
                titleContent += `<li class="infos" data-imageref="${data[i].Image}" id="${data[i].ID}">${data[i].Name}</li>`;
            }
            return titleContent;
        }
        //parse title data
        function parseTitleData(data, number) {
            let backCard = document.querySelectorAll(".back-flip");
            let content = `<ul class="portList">
                ${renderTitle(data)}
            </ul>`;
            backCard[number].innerHTML = content;
        }
        //card flip api with fetch
        function parseFlipData(event) {
            event.preventDefault();
            let url = `${this.href}`;
            let num = this.id;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    parseTitleData(data, num);
                })
                .catch(err => {
                    console.log(err);
                });
        }

        //second api fetch
        //click function for newly created content
        document.addEventListener("click", function(e) {
            if(e.target.id > 0 && e.target.id < 8){
                console.log("click");
                lightbox.classList.remove("hidden");
                parsePortfolioData(e);
                //debugger;
            }
        });
        //mouseover animation effect for portfolio piece
        document.addEventListener("mouseover", function(e) {
            if(e.target.id > 0 && e.target.id < 8){
                let list = e.target.parentElement;
                e.target.style.background = "rgba(0,0,0,0.5)";
                list.style.background = `url(../images/portfolio/${e.target.dataset.imageref}) center center no-repeat`;
                //debugger;
                e.target.addEventListener("mouseleave", function(e) {
                    e.target.style.background = "none";
                    list.style.background = "none";
                });
            }
        });
        //render icons for lightbox
        function renderIcons(data) {
            portIcons = "";
            for(i = 0; i < data.length; i++){
                portIcons += `<div class="iconBg"><img src="images/icon/${data[i]}.svg" alt="icon"></div>`
            }
            return `<div class="renderedIcons">${portIcons}</div>`
        }
        //render gitlink
        function renderGit(data) {
            return `<a href="${data}" target="_blank"><button>GITHUB</button></a>`
        }
        //render site link if there is one
        function renderSite(data) {
            if (data === ""){
                return `<a href=""><button>NOTLIVE</button></a>`
            } else {
                return `<a href="${data}" target="_blank"><button>LIVE</button></a>`
            }
        }
        //parse data needed to be render for profolio pieces
        function parseInfoData(data) {
           let content = `
                <div class="clipper">
                <img class="port-svg" src="images/portfolio/${data.Image}" alt="portfolio image">
                    <div class="port-info">
                    <h2>${data.Name}</h2>
                    <p>${data.Text}</p>
                    </div>
                </div>
                    <div class="bottom-info">
                        <div class="builtWith">
                        <h2>Built With</h2>
                            ${renderIcons(data.Builds)}
                        </div>
                        <div class="buttonWrap">
                        ${renderGit(data.Github)}
                        ${renderSite(data.Site)}
                        <button id="close" class="close">CLOSE</button>
                        </div>
                    </div>`
           lbContent.innerHTML = content;
        }
        //parse route data - second fetch api
        function parsePortfolioData(event) {
            event.preventDefault();
            let url = `${event.target.id}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    parseInfoData(data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        //close function for lightbox
        document.addEventListener("click", function(e) {
            if(e.target.id === "close"){
                lightbox.classList.add("hidden");
                lbContent.innerHTML = "";
            }
        });

    });

    //video functionality
    var video = document.getElementById("video");
    videoPlay.addEventListener("click", function(e) {
        videoBox.classList.remove("hidden");
        video.volume = 0.3;
        video.play();
    });
    videoClose.addEventListener("click", function(e) {
        video.pause();
        videoBox.classList.add("hidden")
        video.currentTime = 0;
    });

    icons.forEach(icon => {
        icon.addEventListener("mouseover", function(e) {
            skillText.textContent = `${e.target.dataset.skillref}`;
            skillText.style.opacity = 1;
            icon.addEventListener("mouseleave", function(e) {
                skillText.style.opacity = 0;
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
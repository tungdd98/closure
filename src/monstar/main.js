(function () {
    var style = document.createElement("style"),
        head = document.getElementsByTagName("head")[0],
        body = document.body,
        colors = {
            main: "#ffff00",
            text: "#53575a",
        },
        company = "Monstarlab Lifetime",
        link = "https://monstar-lab.com/global";
    style.setAttribute("nonce", "2726c7f26c");
    style.innerHTML = `
        .m-flex-center {
            display: flex; 
            justify-content: center; 
            align-items: center;
            flex-wrap: wrap;
        }
        .m-font-helvetica {
            font-family: Helvetica, sans-serif; 
        }
        .m-text-link {
            color: ${colors.text}; 
            text-decoration: underline;
        }
        .m-modal {
            box-sizing: border-box;
            position: fixed; 
            top: 0; 
            bottom: 0; 
            right: 0; 
            left: 0;
            background: rgba(0, 0, 0, 0.5); 
            line-height: 1.5;
            transition: all 0.5s ease;
            z-index: 9999; 
        }
        .m-modal .m-modal-content {
            position: absolute; 
            padding: 10px; 
            width: 95%; 
            max-width: 480px; 
            min-height: 480px;
            background: ${colors.main}; 
            text-align: center; 
            box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);
        }
        .m-modal .m-modal-close {
            position: absolute; 
            right: 10px; 
            top: 10px; 
            font-size: 28px; 
            color: ${colors.text}; 
            cursor: pointer; 
            line-height: 0.8;
        }
        .m-modal .m-subtitle {
            font-size: 32px;
        }
        .m-modal .m-title {
            margin: 20px 0 50px 0; 
            font-size: 40px; 
            font-weight: bold;
        }
        .m-modal .m-icons {
            position: relative;
            width: 27px; 
            height: 27px;
            margin-left: 20px;
        }
        .m-modal .m-icons > span {
            width: 6px; 
            height: 6px; 
            background: #000; 
            position: absolute;
        }
        .m-modal .m-icons > span:nth-child(1) {
            top: 0; 
            left: 0;
        }
        .m-modal .m-icons > span:nth-child(2) {
            bottom: 0; 
            left: 0;
        }
        .m-modal .m-icons > span:nth-child(3) {
            top: 0; 
            right: 0;
        }
        .m-modal .m-icons > span:nth-child(4) {
            bottom: 0; 
            right: 0;
        }
        .m-modal .m-summary {
            padding: 0 50px; 
            margin-bottom: 20px; 
            color: ${colors.text}; 
            font-size: 18px;
        }
        .m-modal .m-link {
            font-weight: bold; 
            font-size: 24px; 
        }
        .m-top-header {
            min-height: 50px;
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid #EFF0F0;
            border-top: 3px solid ${colors.main};
            background-color: #fff;
            color: ${colors.text};
            font-size: 14px;
            line-height: 1.5;
        }
        .m-hidden {
            opacity: 0;
            visibility: hidden;
        }
    `;
    head.appendChild(style);

    var nodeModal = `<div id="modal-popup" class="m-modal m-flex-center m-font-helvetica m-hidden">
                    <div class="m-modal-content m-flex-center">
                        <div id="modal-close" class="m-modal-close">&times;</div>
                        <div>
                            <div class="m-subtitle">${company} is now…</div>
                            <div class="m-title m-flex-center">
                                Monstarlab
                                <div class="m-icons">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="m-summary">
                                Starting January 21, ${company} will be unified under the
                                Monstarlab brand.
                            </div>
                            <a href="${link}" target="_blank" class="m-link m-text-link">Visit our new website</a>
                        </div>
                    </div>
                </div>`;

    var nodeTopHeader = `<section id="top-header" class="m-top-header m-font-helvetica m-flex-center">
                            <span>${company} is now Monstarlab.&nbsp;</span>
                            <a href="${link}" target="_blank" class="m-text-link">Visit our new website</a>
                        </section>`;

    var checkExistTopHeader = !!document.getElementById("top-header");
    if (!checkExistTopHeader) {
        body.insertAdjacentHTML("afterbegin", nodeTopHeader);
    }
    body.insertAdjacentHTML("beforeend", nodeModal);

    var close = document.getElementById("modal-close"),
        modal = document.getElementById("modal-popup");

    setTimeout(() => {
        modal.classList.remove("m-hidden");
    }, 500);
    close.addEventListener("click", function () {
        modal.classList.add("m-hidden");
    });
})();

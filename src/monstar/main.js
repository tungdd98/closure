(function () {
    var style = document.createElement("style"),
        head = document.getElementsByTagName("head")[0],
        body = document.body,
        colors = {
            main: "#ffff00",
            text: "#53575a",
        };
    style.setAttribute("type", "text/css");
    style.innerHTML = `
        .m-flex-center {
            display: flex; 
            justify-content: center; 
            align-items: center;
        }
        .m-modal {
            box-sizing: border-box;
            position: fixed; 
            top: 0; 
            bottom: 0; 
            right: 0; 
            left: 0;
            background: rgba(0, 0, 0, 0.5); 
            font-family: Helvetica, sans-serif; 
            line-height: 1.5;
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
            left: 0
        }
        .m-modal .m-icons > span:nth-child(2) {
            bottom: 0; 
            left: 0
        }
        .m-modal .m-icons > span:nth-child(3) {
            top: 0; 
            right: 0
        }
        .m-modal .m-icons > span:nth-child(4) {
            bottom: 0; 
            right: 0
        }
        .m-modal .m-summary {
            padding: 0 50px; 
            margin-bottom: 20px; 
            color: ${colors.text}; 
            font-size: 18px;
        }
        .m-modal .m-link {
            color: ${colors.text}; 
            font-weight: bold; 
            font-size: 24px; 
            text-decoration: underline;
        }
    `;
    head.appendChild(style);

    var node = `<div id="modal-popup" class="m-modal m-flex-center">
                    <div class="m-modal-content m-flex-center">
                        <div id="modal-close" class="m-modal-close">&times;</div>
                        <div>
                            <div class="m-subtitle">Fuzz is now…</div>
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
                                Starting January 21, Fuzz will be unified under the
                                Monstarlab brand.
                            </div>
                            <a href="#" class="m-link">Visit our new website</a>
                        </div>
                    </div>
                </div>`;

    body.insertAdjacentHTML("beforeend", node);

    var close = document.getElementById("modal-close"),
        modal = document.getElementById("modal-popup");

    close.addEventListener("click", function () {
        modal.style.display = "none";
    });
})();

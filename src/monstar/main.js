(function () {
    var colors = {
            main: "#ffff00",
            text: "#53575a",
        },
        body = document.body,
        node = `<div
                    style="
                        box-sizing: border-box;
                        position: fixed;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #000000;
                        opacity: 0.5;
                        z-index: 99;
                        font-family: Helvetica, sans-serif;
                        line-height: 1.5;
                    "
                >
                    <div
                        style="
                            position: relative;
                            padding: 10px;
                            width: 95%;
                            max-width: 480px;
                            min-height: 480px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: ${colors.main};
                            text-align: center;
                            box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);
                        "
                    >
                        <div
                            id="modal-close"
                            style="
                                position: absolute;
                                right: 10px;
                                top: 10px;
                                font-size: 28px;
                                color: ${colors.text};
                                cursor: pointer;
                                line-height: 0.8;
                            "
                        >
                            &times;
                        </div>
                        <div>
                            <div style="font-size: 32px">Fuzz is now…</div>
                            <div
                                style="
                                    margin: 20px 0 50px 0;
                                    font-size: 40px;
                                    font-weight: bold;
                                "
                            >
                                Monstarlab
                            </div>
                            <div
                                style="
                                    padding: 0 50px;
                                    margin-bottom: 20px;
                                    color: ${colors.text};
                                    font-size: 18px;
                                "
                            >
                                Starting January 21, Fuzz will be unified under the
                                Monstarlab brand.
                            </div>
                            <a
                                href="#"
                                style="
                                    color: ${colors.text};
                                    font-weight: bold;
                                    font-size: 24px;
                                    text-decoration: underline;
                                "
                                >Visit our new website
                            </a>
                        </div>
                    </div>
                </div>`;
    body.insertAdjacentHTML("beforeend", node);
    var close = document.getElementById("modal-close");
    close.addEventListener("click", function () {
        // node.style.display = "none";
    });
})();

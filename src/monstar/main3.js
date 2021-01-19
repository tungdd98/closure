(function () {
    var configs = {
        body: document.body,
        colors: {
            main: "#ffff00",
            text: "#53575a",
        },
        company: "Monstarlab Lifetime",
        link: "https://monstar-lab.com/global",
    };
    var elmModal = `<div id="modal">
                    <div id="modal-content">
                        <div id="modal-close">&times;</div>
                        <div>
                            <div id="modal-subtitle">${configs.company} is now…</div>
                            <div id="modal-title">
                                Monstarlab
                                <div id="modal-icons">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div id="modal-summary">
                                Starting January 21, ${configs.company} will be unified under the
                                Monstarlab brand.
                            </div>
                            <a href="${configs.link}" target="_blank" id="modal-link">Visit our new website</a>
                        </div>
                    </div>
                </div>`,
        elmTopHeader = `<section id="top-header">
                            <span>${configs.company} is now Monstarlab.&nbsp;</span>
                            <a href="${configs.link}" target="_blank">Visit our new website</a>
                        </section>`;
    configs.body.insertAdjacentHTML("beforeend", elmModal);

    var modal = document.getElementById("modal");
    var nodesModal = {
        modal,
        modalContent: modal.querySelector("#modal-content"),
        modalClose: modal.querySelector("#modal-close"),
        modalSubtitle: modal.querySelector("#modal-subtitle"),
        modalTitle: modal.querySelector("#modal-title"),
        modalIcons: modal.querySelector("#modal-icons"),
        icon1: modal.querySelector("#modal-icons > span:nth-child(1)"),
        icon2: modal.querySelector("#modal-icons > span:nth-child(2)"),
        icon3: modal.querySelector("#modal-icons > span:nth-child(3)"),
        icon4: modal.querySelector("#modal-icons > span:nth-child(4)"),
        modalSummary: modal.querySelector("#modal-summary"),
        modalLink: modal.querySelector("#modal-link"),
    };

    var baseStyles = {
        flexCenter: {
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            "flex-wrap": "wrap",
        },
        fontMain: {
            "font-family": "Helvetica, sans-serif",
        },
        textLink: {
            color: configs.colors.text,
            "text-decoration": "underline",
        },
        icon: {
            width: "6px",
            height: "6px",
            background: "#000",
            position: "absolute",
        },
    };

    var useStyles = {
        modal: {
            "box-sizing": "border-box",
            position: "fixed",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.5)",
            "line-height": 1.5,
            transition: "all 0.5s ease",
            "z-index": 9999,
            opacity: 0,
            visibility: "hidden",
            ...baseStyles.flexCenter,
            ...baseStyles.fontMain,
        },
        modalContent: {
            position: "absolute",
            padding: "10px",
            width: "95%",
            "max-width": "480px",
            "min-height": "480px",
            background: configs.colors.main,
            "text-align": "center",
            "box-shadow": "0px 2px 25px rgba(0, 0, 0, 0.25)",
            ...baseStyles.flexCenter,
        },
        modalClose: {
            position: "absolute",
            right: "10px",
            top: "10px",
            "font-size": "28px",
            color: configs.colors.text,
            cursor: "pointer",
            "line-height": 0.8,
        },
        modalSubtitle: {
            "font-size": "32px",
        },
        modalTitle: {
            margin: "20px 0 50px 0",
            "font-size": "40px",
            "font-weight": "bold",
            ...baseStyles.flexCenter,
        },
        modalIcons: {
            position: "relative",
            width: "27px",
            height: "27px",
            "margin-left": "20px",
        },
        icon1: {
            top: 0,
            left: 0,
            ...baseStyles.icon,
        },
        icon2: {
            bottom: 0,
            left: 0,
            ...baseStyles.icon,
        },
        icon3: {
            top: 0,
            right: 0,
            ...baseStyles.icon,
        },
        icon4: {
            bottom: 0,
            right: 0,
            ...baseStyles.icon,
        },
        modalSummary: {
            padding: "0 50px",
            "margin-bottom": "20px",
            color: configs.colors.text,
            "font-size": "18px",
        },
        modalLink: {
            "font-weight": "bold",
            "font-size": "24px",
            ...baseStyles.textLink,
        },
        topHeader: {
            ...baseStyles.flexCenter,
            ...baseStyles.fontMain,
            position: "relative",
            "min-height": "50px",
            padding: "10px",
            "text-align": "center",
            "border-bottom": "1px solid #EFF0F0",
            "border-top": `3px solid ${configs.colors.main}`,
            "background-color": "#fff",
            color: configs.colors.text,
            "font-size": "14px",
            "line-height": 1.5,
            "z-index": 9999,
        },
        linkHeader: {
            ...baseStyles.textLink,
        },
    };

    Object.keys(nodesModal).forEach((elm) => {
        Object.entries(useStyles[elm]).forEach(
            ([key, value]) => (nodesModal[elm].style[key] = value)
        );
    });

    var checkExistTopHeader = !!document.getElementById("top-header");
    if (!checkExistTopHeader) {
        configs.body.insertAdjacentHTML("afterbegin", elmTopHeader);
        var topHeader = document.getElementById("top-header");
        var nodesTopHeader = {
            topHeader,
            linkHeader: topHeader.querySelector("a"),
        };
        Object.keys(nodesTopHeader).forEach((elm) => {
            Object.entries(useStyles[elm]).forEach(
                ([key, value]) => (nodesTopHeader[elm].style[key] = value)
            );
        });
    }

    setTimeout(function () {
        nodesModal.modal.style.opacity = 1;
        nodesModal.modal.style.visibility = "visible";
    }, 500);

    nodesModal.modalClose.addEventListener("click", function () {
        nodesModal.modal.style.opacity = 0;
        nodesModal.modal.style.visibility = "hidden";
    });

    configs.body.insertAdjacentElement("beforeend", modal);
})();

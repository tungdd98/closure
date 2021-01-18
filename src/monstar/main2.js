(function () {
    var body = document.body,
        company = 'Monstarlab Lifetime',
        colors = {
            main: "#ffff00",
            text: "#53575a",
        },
        link = 'https://monstar-lab.com/global';

    var nodeModal = `<div id="modal-popup" style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; box-sizing: border-box; position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: rgba(0, 0, 0, 0.5); font-family: Helvetica, sans-serif; line-height: 1.5; z-index: 9999; transition: all 0.5s ease; opacity: 0; visibility: hidden;">
    <div style="display: flex; justify-content: center; align-items: center; position: absolute; padding: 10px; width: 95%; max-width: 480px; min-height: 480px; background: ${colors.main}; text-align: center; box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);">
                <div id="modal-close" style="position: absolute; right: 10px; top: 10px; font-size: 28px; color: ${colors.text}; cursor: pointer; line-height: 0.8;">&times;</div>
                <div>
                    <div style="font-size: 32px;">${company} is now…</div>
                    <div style="margin: 20px 0 50px 0; font-size: 40px; font-weight: bold; display: flex; justify-content: center; align-items: center; flex-wrap: wrap;">
                        Monstarlab
                        <div style="position: relative;width: 27px; height: 27px; margin-left: 20px;">
                            <span style="width: 6px; height: 6px; background: #000; position: absolute; top: 0; left: 0;"></span>
                            <span style="width: 6px; height: 6px; background: #000; position: absolute; bottom: 0; left: 0;"></span>
                            <span style="width: 6px; height: 6px; background: #000; position: absolute; top: 0; right: 0;"></span>
                            <span style="width: 6px; height: 6px; background: #000; position: absolute; bottom: 0; right: 0;"></span>
                        </div>
                    </div>
                    <div style="padding: 0 50px; margin-bottom: 20px; color: ${colors.text}; font-size: 18px;">
                        Starting January 21, ${company} will be unified under
                        the Monstarlab brand.
                    </div>
                    <a href="${link}" target="_blank" style="color: ${colors.text}; font-weight: bold; font-size: 24px; text-decoration: underline;">Visit our new website</a>
                </div>
            </div>
        </div>`;
    
    body.insertAdjacentHTML('beforeend', nodeModal);
    var close = document.getElementById("modal-close"),
        modal = document.getElementById("modal-popup");

    setTimeout(function () {
        modal.style.opacity = 1;
        modal.style.visibility = 'visible';
    }, 500);

    close.addEventListener("click", function () {
        modal.style.opacity = 0;
        modal.style.visibility = 'hidden';
    });
})();

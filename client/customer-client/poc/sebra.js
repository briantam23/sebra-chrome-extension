(function() {
    var scriptTag = document.createElement("script");
    scriptTag.setAttribute("data-button", "buynow");
    scriptTag.src = "//dgo.nz/tmp/seo-ads.js";
    document.head.appendChild(scriptTag);
})();
(function() {
    setTimeout(function() {
        var overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = "0";
        overlay.style.right = "0";
        overlay.style.bottom = "0";
        overlay.style.left = "0";
        overlay.style.height = "100%";
        overlay.style.width = "100%";
        overlay.style.textAlign = "center";
        overlay.style.transition = "opacity .5s linear";
        overlay.style.zIndex = "8000";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        overlay.style.opacity = "0"
        if (typeof(window.canRunAds) === "undefined") {
            document.body.appendChild(overlay);

            setTimeout(function() {
                overlay.style.opacity = "1"
            }, 5)
            overlay.innerHTML = "<div class='sebraNotification'>" +
                "<div class='sebraDemoBlogLogo'>&nbsp;</div>" +
                "<div class='sebraTitle'>Demo Blog</div>" +
                "<br/><br/><br/><h2>It looks like you're using AdBlock.</h2>" +
                "<div>We rely on ads to bring you our award winning journalism. " +
                "Please allow ads or go Ad Free by using <i>Sebra 1-click-payment</i> below.</div>" +
                "<br/><br/><br/>" +
                "<div onClick='window.location.reload()' class='sebraBtn secondary'>" +
                "I turned off AdBlock" +
                "</div>" +
                "<div class='sebraBtn primary'>" +
                "Pay &#8779;0.<span class='sebraSmall'>02</span> with Sebra" +
                "</div>" +
                "<style>" +
                ".sebraTitle{display: inline-block; font-size: 28px; vertical-align: middle;}" +
                ".sebraDemoBlogLogo{border-radius: 30px; vertical-align: middle;" +
                "display: inline-block;background-color: #138ef7;" +
                "margin-right: 15px;width: 32px;height: 32px;}" +
                ".sebraNotification{position: relative; background-color: white;" +
                " border-radius: 5px;display: inline-block;top: 50%; " +
                "-ms-transform: translateY(-50%);transform: translateY(-50%);" +
                "padding: 25px;font-family: Helvetica, Arial, sans-serif;color: #333;" +
                " max-width: 450px;}" +
                ".sebraBtn{display: inline-block;border-radius: 5px;" +
                "margin: 0 10px;border: 1px solid;padding: 10px;" +
                ";cursor: pointer; transition: background-color .2s linear;}" +
                ".sebraBtn.primary{border-color:  #064275; background-color: #138ef7;" +
                "color: white;}" +
                ".sebraBtn.secondary{border-color:  #aaa; background-color: #f9f9f9}" +
                ".sebraBtn.primary:hover{background-color: #0d5da0;}" +
                ".sebraBtn.secondary:hover{background-color: #dedede;}" +
                ".sebraBtn .sebraSmall{font-size: 11px;}" +
                "</style>"
            "</div>";
        }

    }, 500)
})();
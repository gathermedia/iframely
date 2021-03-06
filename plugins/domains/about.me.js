module.exports = {

    re: /https?:\/\/about\.me\/([a-zA-Z0-9\-]+)/i,

    mixins: ["*"],

    getLink: function(urlMatch) {

        // Can be embedded inline, but need to research API.

        return {
            type: CONFIG.T.text_html,
            rel: [CONFIG.R.reader, CONFIG.R.ssl],
            html: '<script type="text/javascript" src="' + "//about.me/embed/" + urlMatch[1] +  '"></script>'
        };
    },

    tests: [{
        noFeeds: true
    },
        "http://about.me/zachperkins",
        "https://about.me/mirinanase"
    ]
};
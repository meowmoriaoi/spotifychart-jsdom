const got = require('got');
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;

const chartUrl = 'https://spotifycharts.com/regional/id/daily/latest';

(async () => {
    try {
        const res = await got(chartUrl);
        const dom = new JSDOM(res.body);

        const songList = Array.from(dom.window.document.querySelectorAll('.chart-table-track>strong'))
            .map(x => x.textContent)

        // const songList = [...dom.window.document.querySelectorAll('.chart-table-track>strong')]

        console.log(songList)

    } catch (error) {
        console.log(error)
    }
})();
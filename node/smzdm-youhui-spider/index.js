const request = require('request');
const cheerio = require('cheerio');
cheerio.prototype.removeTagText = function () {
    const html = this.html();
    // <span> 1234565</span>
    return html.replace(/<.*>.*<\/.*>/g, '');
}
request('https://www.smzdm.com/youhui/',
    (err, res) => {
        if (!err) {
            const body = res.body;
            const $ = cheerio.load(body, {
                decodeEntities: false
            })
            $('.list.list_preferential')
                .each(function () {
                    const price = $('.itemName .red', this).text().trim();
                    // js innerHTML
                    //   <span></span>
                    // <i></i>
                    const img = $('img', this).attr('src');
                    const desc = $('.lrInfo', this).text().trim();
                    let title = $('.itemName a', this).removeTagText();

                    console.log({
                        title,
                        price,
                        img,
                        desc
                    })
                });
        }
    }
)

class Router {
    constructor(options) {
        console.log(options);
        // 将数组配置项，转变成 json
        this.routes = {};
        this.bindEvent();
    }
    push(url) {
        window.history.pushState({}, null, url);
    } 
    bindEvent () {
        const links = document.getElementsByTagName('a');
        const that = this;
        [].forEach.call(links, link => {
            link.addEventListener('click', function() {
                const url = this.getAttribute('data-href');
                console.log(url);
                that.push(url);
            })
        })
    }
}
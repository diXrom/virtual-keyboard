export default class Footer {
    constructor() {
        this.footer = document.createElement('footer')
    }
    render() {
        this.footer.classList.add("footer", "block-shadowed");
        this.footer.innerHTML = `
        <div class="wrapper">
            <div class="footer__content layout-2-column">
                <div class="footer__copy">
                <span>©diXrom</span><span>2022</span><a href="https://github.com/diXrom" target="_blank">Github</a>
                </div>
                <div class="footer__rss">
                <a href="https://rs.school/js-stage0/" target="_blank">Rolling Scopes School</a>
                </div>
            </div>
        </div>`
        return this.footer;
    }
}
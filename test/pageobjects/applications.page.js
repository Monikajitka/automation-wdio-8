class ApplicationsPage {

    constructor() {
        this.url = '/admin/prihlasky';
    }

    get table() { return $('.dataTable'); }
    get rows() { return this.table.$('tbody').$$('tr'); }
    get searchField() { return $('input[type="search"]'); }

    async open() {
        await browser.url(this.url);
    }


}

export default new ApplicationsPage();

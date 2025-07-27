export class HomePage {
    readonly aboutButton = "//*[text()='About']";

    constructor(private page) {}

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async getTitle() {
        return this.page.title();
    }

    async clickButton() {
        await this.page.click(this.aboutButton);
    }
}
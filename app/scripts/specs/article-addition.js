'use strict'
describe('editor profile functionality', function () {
    it('by clicking at save-changes with an empty field form shouls show validation messages', function () {
        browser.get('http://localhost:3000/#/svet-login');
        element(by.id('svetLoginBtn')).click();
        element(by.id('myArticles')).click();
        element(by.id('addNews')).click();
        element(by.tagName('md-select')).click();
        element(by.id('1')).click();
        element(by.model('article.topic')).sendKeys('Test topic');
        element(by.model('article.title')).sendKeys('Test title');
        element(by.model('article.summary')).sendKeys('Test summary');
        element(by.model('html')).sendKeys('Test body');
        element(by.model('article.tags')).sendKeys('Test tags');
        element(by.id('submitArticle')).click().then(function () {
            element(by.id('linkBack')).click();
        });
        element.all(by.repeater('article in articles')).then(function (articles) {
            var titleElement = articles[0].element(by.id('authorArticleLinkTitle'));
            expect(titleElement.getText()).toEqual('Test title');
        });
    });
})
;
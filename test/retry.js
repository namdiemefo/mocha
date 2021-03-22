describe('test medium site', function () {

    // all failed tests in this suite will only be retried 2 times
    this.retries(2);

    it('should load medium homepage', function () {
        // can only retry this test 5 times
        this.retries(5);

        cy.visit('https://medium.com');
    })

})
describe.only('some time-consuming operation', function () {

    // set a 5 seconds timeout for this suite
    this.timeout(1000);

    before('some long setup', function (done) {
        // set a hook-level timeout
        this.timeout(2500);

        setTimeout(done, 2250);
    })

    it('should take less than 200ms', function (done) {
        // set a test-level timeout
        this.timeout(100);

        setTimeout(done, 150);
    })

})
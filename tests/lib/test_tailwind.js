(function() {
    var assert = (typeof chai !== "undefined" && chai !== null ? chai.assert : void 0) || require('chai').assert;

    describe('Try / Catch', function() {
        it('testTryCatch', function(){
            var starting = coverageStats.getReport().executed;

            tryCatch();

            var ending = coverageStats.getReport().executed;
            return assert.equal( ending - starting, 16 );
        });
    });

    describe('Conditionals', function() {
        it('testConditionals1', function(){
            var starting = coverageStats.getReport().executed;

            conditional();

            var ending = coverageStats.getReport().executed;
            return assert.equal( ending - starting, 4 );
        });

        it('testConditionals2', function(){
            var starting = coverageStats.getReport().executed;

            conditional( 0 );

            var ending = coverageStats.getReport().executed;
            return assert.equal( ending - starting, 1 );
        });

        it('testConditionals3', function(){
            var starting = coverageStats.getReport().executed;

            conditional( true );

            var ending = coverageStats.getReport().executed;
            return assert.equal( ending - starting, 1 );
        });
    });

    describe('Branching', function() {
        it('testBranching1.1', function(){
            var starting = coverageStats.getReport().executed;

            branching1( false );

            var ending = coverageStats.getReport().executed;
            return assert.equal( ending - starting, 3 );
        });

        it('testBranching1.2', function(){
            var starting = coverageStats.getReport().executed;

            branching1( true );

            var ending = coverageStats.getReport().executed;
            return assert.equal( ending - starting, 2 );
        });

        it('testBranching2.1', function(){
            var starting = coverageStats.getReport().executed;

            branching2( true );

            var ending = coverageStats.getReport().executed;
            return assert.equal( ending - starting, 4 );
        });

        it('testBranching2.2', function(){
            var starting = coverageStats.getReport().executed;

            branching2( false );

            var ending = coverageStats.getReport().executed;
            return assert.equal( ending - starting, 1 );
        });

        it('testBranching2.3', function(){
            var starting = coverageStats.getReport().executed;

            branching2();

            var ending = coverageStats.getReport().executed;
            return assert.equal( ending - starting, 1 );
        });
    });

    describe('Code', function() {
        it('Coverage', function() {
            var report = coverageStats.getReport();

            return assert.equal( report.executed, report.statements );
        });
    });
}).call(this);

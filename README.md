Tailwind
========

Tailwind is a code coverage utiltiy for JavaScript that can run in the browser. It works by importing a script and injecting watch statements which analyze what statements in the code are executed. Analytics about the code coverage can be polled in real-time and used to generated reports.

Tailwind is most effective when combined with a testing framework like [mocha](http://visionmedia.github.io/mocha/).

Example
-------
This code is from the `test_tailwind.html` file in the `tests` directory.
```javascript
// Instruct Tailwind to include the test_script.js file into the page and monitor its execution
Tailwind.runScript(
    'lib/test_script.js',
    function( stats ) // The stats variable provides access to real-time code coverage statistics
    {
        // Run mocha, the testing framework
        mocha.run(
            function()
            {
                // After the tests have run, generate an HTML report showing what statements were executed
                document.getElementById( 'coverage' ).innerHTML = Tailwind.Reporters.html( stats );
            }
        );
    }
);
```

Testing Tailwind
----------------
The tests included in this repository cannot be run from the filesystem because Tailwind includes specified scripts through an ajax request. A quick workaround is to navigate to the Tailwind directory in a console window and start up a python server with `python -m SimpleHTTPServer`. The test will then be accessible at `http://localhost:8000/tests/test_tailwind.html`.

Want to Contribute?
-------------------
Please read our [Code Standards & Guidelines](https://docs.google.com/a/sympoz.com/document/d/1c83xlVHpPxMd-ISZlu-4Rzpi7EbdopV_mmKjcYEQiz4/pub)

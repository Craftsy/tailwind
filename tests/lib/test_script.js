/**
 * Statements
 */
var foo = 'bar',
    bar = foo.length;
bar++;
bar += 5;
bar = bar + 5;

/**
 * Try / Catch
 */
function tryCatch()
{
    try
    {
        'Try clause one';
        throw 'Throw one';
    }
    catch( e )
    {
        'Catch clause one';
    }

    try { 'Try clause two';
        throw 'Throw two' }
    catch( e )
    { 'Catch clause three'; }

    try { 'Try clause three'; throw 'Three three'; } catch( e ) { 'Catch clause three'; }
}

/**
 * Conditional Expression
 */
function conditional( input )
{
    return a = input === true ? true : ( input === 0 ? 0 : input );
}

/**
 * Branching
 */
function branching1( input )
{
    if ( input )
    {
        return true;
    }
    else
    {
        return false;
    }
}

function branching2( input )
{
    switch( input )
    {
        case true:
            var a = 1;
            var b = 2;
            break;

        case false:
            break;

        default:
            break;
    }
}
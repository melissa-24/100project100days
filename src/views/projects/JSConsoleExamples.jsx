

const JSConsoleExamples = () => {
    var dirTest = ['test', 'testTwo', 'testThree']
    var tableTest = [
        {'id': 1, 'name': 'Melissa'},
        {'id': 2, 'name': 'Longenberger'}
    ]
    // These are console clear lines till next comment
    console.log('Before console.clear()')
    console.clear()
    console.log('After console.clear()')
    // End Test Clear
    console.dir(dirTest)
    console.table(tableTest)
    // Lines to next comment must remain together
    console.group('Group Test')
    console.log('Name: Melissa')
    console.log('Name: Longenberger')
    console.groupEnd()
    // Test Group End

    // These are the Time Test lines till next comment
    console.time('Test Timer')
    let sum  = 0
    for(var i = 0; i < 20; i++) {
        sum += i
    }
    console.timeEnd('Test Timer')
    // End Test Time


    return (
        <>
        <h2>Open Console to view (Temporary)</h2>
        <h3>How to open console</h3>
        <ol>
            <li>Right click anywhere on this page</li>
            <li>Chose inspect element</li>
            <li>When side window opens
                <ol>
                    <li>Near top you should see elements and possibly the word console</li>
                    <li>Click console or arrow and chose console</li>
                </ol>
            </li>
        </ol>
        <h3>You should now see the results of the following:</h3>
        <ol>
            <li>console.clear</li>
            <li>console.dir</li>
            <li>console.table</li>
            <li>console.group</li>
            <li>console.time</li>
        </ol>
        </>
    )
}

export default JSConsoleExamples
function launchBrowser()
{
    let browserName = 'chrome';
    if(browserName=='chrome')
    {
        console.log("chrome browser");
    }
    else
    {
        console.log("safari or firefox");
    }


}
function runTests()
{
    let testType="UAT";
    switch (testType) {
        case 'regression':
            console.log("regression");
            break;
            case 'smoke':
                console.log("retest");
            break;
            case 'sanity':
                console.log("sanity");
            break;
    
        default:
            console.log("smoke");
            break;
    }
}
launchBrowser();
runTests();
let companies =[ "Microsoft","Meta", "Apple","DXD","IBM","Intel","Hitachi","TCS","AVGO","MSFT"]
function checkCompany(){
    for (let i = 0; i < companies.length; i++) {
        let num = i + 1; 
        let okn;
        if (num === 1) {
            okn = "st";
        } else if (num === 2) {
            okn = "nd";
        } else if (num === 3) {
            okn = "rd";
        } else {
            okn = "th";
        }
        console.log("My " + num + okn + " choice is " + companies[i]);
    }
}
checkCompany()

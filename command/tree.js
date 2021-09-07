const path = require('path');
const fs = require('fs');


// to print everything in line and --recursive code
function treefunction(Path,space){
    let totalfiles = fs.readdirSync(Path);
    for(let i=0;i<totalfiles.length;i++){
        let newPath = path.join(Path,totalfiles[i]);
        let stats = fs.lstatSync(newPath);
        if(stats.isDirectory()){
            console.log(space+totalfiles[i]);
            console.log(space+"└──");
            treefunction(newPath,space+"\t");
        }
        if(stats.isFile()){
            console.log(space+"├──"+totalfiles[i]);
        }
    }
}

module.exports = {
    treeFn:treefunction
};
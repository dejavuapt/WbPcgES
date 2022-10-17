import chalk from 'chalk';
import * as fs from 'fs';
import path from 'path'

export async function saveData(data){
    const { copy_title } = data
    const fileName = copy_title + '.json'
    var saveJson = JSON.stringify(data, null, " ");
    const __dirname = path.resolve(path.dirname(''))
    const savePath = path.join(__dirname, '.', 'data', fileName)

    return new Promise( (resolve, reject) => {
        fs.writeFile(savePath, saveJson, (error) => { 
            if (error) {return reject(error)}

            console.log(
                chalk.green("File was saved successfully: " + chalk.blue.bold(fileName) + '\n')
            )
            resolve()
        
        })
        
    })
    
}
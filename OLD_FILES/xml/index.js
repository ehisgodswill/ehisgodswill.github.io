const { log } = require('console');

const fs = require('fs'),
    parser = require('xml2js').Parser(),
    xlsx = require('xlsx-populate');
const dirName = ''

fs.readFile(__dirname + '/index.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        const obj = result.ARPNLCropEnumeration_V2_FINAL_NEW;
        // let latitude = '', longitude = '';
        // console.dir(result);
        // console.log('Done');
        // for (let value of obj.FarmBoundary[0].split(';')) {
        //     value = value.trim().split(' ');
        //     latitude += value[0] + ' ';
        //     longitude += value[1] + ' ';
        // }
        xlsx.fromFileAsync('./CollectorID-2.xlsx').then(workbook => {
            const sheet = workbook.sheet(0);
            const maxrowNum = sheet.usedRange()._maxRowNumber + 1;
            const defaultrow = sheet.row(6);
            const row = sheet.row(maxrowNum);
            const range = sheet.range(maxrowNum, 'C', maxrowNum, 'L' );
            
            row._node.attributes = {...defaultrow._node.attributes, ...row._node.attributes }

            range.forEach(cell => {
                cell._styleId =  defaultrow.cell(cell.columnName())._styleId;
                switch (cell.columnName()) {
                    case 'C':
                        cell.value(`0${obj.Collector_Id[0]}${obj.Farmers_ID[0].length <2?'0':''}${obj.Farmers_ID[0]}-${obj.survey_day[0].trim().split('-').reverse().join('-')}`)
                        break;
                    case 'D':
                        cell.value(obj.Respondent_Status[0] === 'SELF' ? 'Self' : 'Care Of');
                        break;
                    case 'E':
                        cell.value(`${obj.First_Name[0].trim()} ${obj.Last_Name[0].trim()} ${obj.Other_Names[0] === '-'? '': obj.Other_Names[0].trim()}`.trim());
                        break;
                    case 'F':
                        cell.value(obj.Sex[0]);
                        break;
                    case 'G':
                        cell.value(obj.FarmStatus[0].trim());
                        break;
                    case 'H':
                        cell.value(obj.Phone_No[0].trim());
                        break;
                    case 'I':
                        for (let i = 0; i < obj.FarmBoundary[0].split(';').length; i++) {
                            const element = obj.FarmBoundary[0].split(';')[i].trim().split(' ');
                            sheet.cell(maxrowNum + i, 'I').value(parseFloat(element[0].trim()));
                        }
                        // cell.value(latitude.trim());
                        break;
                    case 'J':
                        for (let i = 0; i < obj.FarmBoundary[0].split(';').length; i++) {
                            const element = obj.FarmBoundary[0].split(';')[i].trim().split(' ');
                            sheet.cell(maxrowNum + i, 'J').value(parseFloat(element[1].trim()));
                            // console.log(sheet.cell(maxrowNum + i, 'J').value());
                        }
                        // cell.value(longitude.trim());
                        break;
                    case 'K':
                        cell.value(parseFloat(obj.Total_Area_Ha[0]));
                        break;
                    case 'L':
                        let val = ''
                        obj.Crop_information[0].planted_Crops.map(crop => {
                            val += `${crop.Assessed_CropPlanted[0]}-${crop.CropPercentage[0]}-${crop.Category_CropPlanted}; `
                        })
                        cell.value(val.trim());
                        break;
                    default:
                        break;
                }
            })
            for (const key in sheet._dataValidations) {
                if (key[1] === '6' ) {
                    const newKey = key+' '+key[0]+maxrowNum
                    const value = sheet._dataValidations[key];

                    value.attributes.sqref = newKey;
                    sheet._dataValidations[newKey] = value;
                    delete sheet._dataValidations[key];
                }
            }

            return workbook.toFileAsync('./CollectorID-2.xlsx').then(()=> console.log('done', obj.Farmers_ID[0].trim()));
        })


    });
});
const XLSX = require('xlsx');
var fs = require('fs');

const excelFolder = './resources/excel_files/';
let excel_files = [];
excel_files = fs.readdirSync(excelFolder);

excel_files.forEach((e) => {
    var workbook = XLSX.readFile(excelFolder+e);
    var sheet_name_list = workbook.SheetNames;

    sheet_name_list.forEach((sheet)=>{
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        var xlJson = JSON.stringify(xlData);
        xlJson = '{"data":'+xlJson+'}';
        xlJson = JSON.parse(xlJson);
        var writeStream = fs.createWriteStream("resources//data//" + sheet + ".json");
        writeStream.write(JSON.stringify(xlJson, null, 2));
        writeStream.end();
    });
});
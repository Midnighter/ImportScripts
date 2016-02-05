var settings = {
	targetLanguage: 'english',
	// I updated this to be the new spreadsheet that I've created into which we'll import the sources below
	targetSpreadSheetUrl: 'https://docs.google.com/spreadsheets/d/1V3BUANVaLhPmoQAQOdrHebCH4_KzyJnjY99M04AMazE',
	toProcessPath: '0B3H4lorZl65edjY0TjhxZVBZNTg'//'ToProcess'//'https://drive.google.com/open?id=0B3H4lorZl65edjY0TjhxZVBZNTg',
	processedPath: '0B3H4lorZl65eUGlpWUp5WjQ2bVk'//'Processed'//'https://drive.google.com/open?id=0B3H4lorZl65eUGlpWUp5WjQ2bVk'
};

var sourceType = {
	urlSpreadSheet: 1, //processUrlSpreadSheet
	folderSpreadSheet: 2 //processFolder
};

var sources = {
	// Example Source Object
	/*
	'name': {
		pathUrl: 'http://...',
		type: sourceType.urlSpreadSheet,
		translateFrom: 'language here',
		mappings: [
			[sourceColumnIndex, destinationColumnIndex],
			[1,1],
			[0,5],
			[6,2]
		]
	}
	*/
	'refugee-projects-form-responses': {
		type: sourceType.urlSpreadSheet,
		pathUrl: 'https://docs.google.com/spreadsheets/d/1wYKZMMBerbWGFvwsOtra5jKt02IMwAwQDxWBurHTbSQ/edit#gid=1895427304',
		// hasHeader: 1, // I'm not clear as to what hasHeader is indicating given the numeric value
		identifierIndex: 0,
		subsheet: false, // I wasn't sure how you wanted to implement the multiple sheet data in the code, but I'm including it here for clarity
		mappings: [
			[0, 1],
			[1, 30],
			[2, 31],
			[3, 2],
			[4, 8],
			[5, 12],
			[6, 6],
			[7, 7],
			[8, 25],
			// [9, ], Contact Info? boolean — data not needed
			[10, 15],
			[11, 16],
			[12, 21],
			// [13, ], Organization? boolean - data not needed
			// [14, ], Additional Info? boolean- data not needed
			[15, 22],
			[16, 26],
			// [17, ], Your info? boolean - data not needed
			// [18, ], Social media? boolean - data not needed
			[19, 23],
			[20, 29],
			[21, 19],
			[22, 20],
			[23, 17],
			[24, 18],
			[25, 27],
			[26, 3]
		]
	},
	'refugee-crisis-facebook-groups': {
		type: sourceType.urlSpreadSheet,
		pathUrl: 'https://docs.google.com/spreadsheets/d/1VF1cFpOfaInKhIxeRECbZyPbrt1_609HUZJt_8tFWCA/edit#gid=0',
		//hasHeader: 1, // I'm not clear what hasHeader is used for
		mappings: [
			[0, 2],
			[1, 10],
			[2, 16],
			// [3, ], 'Group/Page', not needed
			// [4, 29],  'Members/Likes', not needed
			[5, 22]
		]
	},
	'online-information-services': {
		type: sourceType.urlSpreadSheet,
		pathUrl: 'https://docs.google.com/spreadsheets/d/1nLiyn86UcJChxSgd8xz4WwWpz6fZRL2NLucaSE8adPg/edit#gid=0',
		//hasHeader: 1, // I'm not clear what hasHeader is used for
		mappings: [
			[0, 2],
			[1, 16], // Append to 'Tags', destinationColumnIndex 16
			[2, 8],
			[3, 7],
			[4, 29], // Append to 'Additional Info', destinationColumnIndex 29
			[5, 3],
			[6, 29] // Append to 'Additional Info', destinationColumnIndex 29

		]
	},
	'sbtf-daily-needs-phase-ii--info-sources': {
		type: sourceType.urlSpreadSheet,
		pathUrl: 'https://docs.google.com/spreadsheets/d/1C9fmpzb3VhoGOsCnRAnhbXZNkKd3sVZIN0Ha1VOBQjk/edit#gid=1770681601',
		//hasHeader: 1, // I'm not clear what hasHeader is used for
		identifierIndex: 7,
		subsheet: true, // I've included a boolean that indicates is a subsheet, feel free to put it elsewhere
		sheetGID: 1770681601, // I've included the GID here, feel free to place it elsewhere
		sheetIndex: 1, // I've included the sheetIndex here, feel free to put it elsewhere
		mappings: [
			[0, 2],
			[1, 3],
			[2, 16],
			[3, 10],
			[4, 7],
			// [5, ], 'Type of Source' is an open / closed boolean we don't need
			// [6, ], 'Editing' is another data field we don't need
			[7, 8]
		]
	},
	'sbtf-daily-needs-phase-ii--tools': {
		type: sourceType.urlSpreadSheet,
		pathUrl: 'https://docs.google.com/spreadsheets/d/1C9fmpzb3VhoGOsCnRAnhbXZNkKd3sVZIN0Ha1VOBQjk/edit#gid=374822050',
		//hasHeader: 1, // I'm not clear what hasHeader is used for
		identifierIndex: 1,
		subsheet: true, // I've included a boolean that indicates is a subsheet, feel free to put it elsewhere
		sheetGID: 374822050, // I've included the GID here, feel free to place it elsewhere
		sheetIndex: 2, // I've included the sheetIndex here, feel free to put it elsewhere
		mappings: [
			[0, 28],
			[1, 0],
			[2, 1],
			[3, 2],
			[4, 7],
			[5, 9],
			[6, 16], // 'Platforms', e.g. - Web, iOS, Android... Append to 'Tags'
			[7, 21],
			[8, 22],
			[9, 8],
			// [10, ], 'Android URL' - data not needed
			// [11, ], 'Apple Store URL' - data not needed
		]
	},
	'sbtf-daily-needs-phase-ii--facilities': {
		type: sourceType.urlSpreadSheet,
		pathUrl: 'https://docs.google.com/spreadsheets/d/1C9fmpzb3VhoGOsCnRAnhbXZNkKd3sVZIN0Ha1VOBQjk/edit#gid=1892610775',
		//hasHeader: 1, // I'm not clear what hasHeader is used for
		identifierIndex: 1,
		subsheet: true, // I wasn't sure how you wanted to implement the multiple sheet data in the code, but I'm including it here for clarity
		sheetGID: 1892610775, // I've included the GID here, feel free to place it elsewhere
		sheetIndex: 3, // As it currently stands, its index 3
		mappings: [
			[0, 28],
			[1, 0],
			[2, 1],
			[3, 2],
			[4, 15],
			// [5, ], 'Free Internet' data field which is largely 'Unknown'
			[6, 29], // 'Status' data field which is un-normalized, append to 'Additional Notes'
			[7, 3],
			[8, 10],
			[9, 11],
			[10, 29], // 'Location' which is un-normalized, append to 'Additional Notes'
			[11, 12],
			[12, 8],
			[13, 29], // 'Comments' which should append to 'Additional Notes'
			[14, 29], // 'Source #' provides links to info source, append to 'Additional Notes'
			[15, 29], // 'Source #' provides links to info source, append to 'Additional Notes'
			[16, 29], // 'Source #' provides links to info source, append to 'Additional Notes'
			[17, 29], // 'Source #' provides links to info source, append to 'Additional Notes'
			[18, 29] // 'Source #' provides links to info source, append to 'Additional Notes'
		]
	},
	'sbtf-daily-needs-phase-ii--social-media-sites': {
		type: sourceType.urlSpreadSheet,
		pathUrl: 'https://docs.google.com/spreadsheets/d/1C9fmpzb3VhoGOsCnRAnhbXZNkKd3sVZIN0Ha1VOBQjk/edit#gid=1618921457',
		//hasHeader: 1, // I'm not clear what hasHeader is used for
		identifierIndex: 0,
		subsheet: true, // I wasn't sure how you wanted to implement the multiple sheet data in the code, but I'm including it here for clarity
		sheetGID: 1618921457, // I've included the GID here, feel free to place it elsewhere
		sheetIndex: 4, // As it currently stands, its index 4
		mappings: [
			[0, 0],
			[1, 1],
			[2, 3],
			[3, 4],
			[4, 7],
			[5, 9],
			[6, 10],
			// [7, ], presents a 'media type' field which is useless for us
			[8, 10],
			[9, 22], // 141 of 217 entries are facebook links, we'll need to clean up the other links after import
			// [10, ], this provides the number of 'Members/Likes', which is something we can call programatically later.
			[11, 29] // Provides a 'status' field, which isn't useful for us now but is good to maintain in our 'Additional notes'
		]
	},
	'sbtf-daily-needs-phase-ii--organizations': {
		type: sourceType.urlSpreadSheet,
		pathUrl: 'https://docs.google.com/spreadsheets/d/1C9fmpzb3VhoGOsCnRAnhbXZNkKd3sVZIN0Ha1VOBQjk/edit#gid=1142452757',
		//hasHeader: 1, // I'm not clear as to hasHeader is indicating given the numeric value
		identifierIndex: 0,
		subsheet: true, // I wasn't sure how you wanted to implement the multiple sheet data in the code, but I'm including it here for clarity
		sheetGID: 1142452757, // I've included the GID here, feel free to place it elsewhere
		sheetIndex: 5, // As it currently stands, its index 5
		mappings: [
			[0, 0],
			[1, 28],
			[2, 1],
			[3, 3],
			[4, 4],
			[5, 5],
			[6, 7],
			[7, 15],
			[8, 10],
			[9, 9],
			[10, 11],
			[11, 12],
			[12, 29], // destinationColumnIndex 29 is the catch all 'Additional Info'. Should be appended, not overwritten
			[13, 29], // destinationColumnIndex 29 is the catch all 'Additional Info'. Should be appended, not overwritten
			[14, 21],
			[15, 22],
			[16, 24],
			[17, 8],
			[18, 31], // destinationColumnIndex 31 is 'Additional Countries'. Should be appended and comma delimited, not overwritten
			[19, 31], // destinationColumnIndex 31 is 'Additional Countries'. Should be appended and comma delimited, not overwritten
			[20, 31], // destinationColumnIndex 31 is 'Additional Countries'. Should be appended and comma delimited, not overwritten
			[21, 31], // destinationColumnIndex 31 is 'Additional Countries'. Should be appended and comma delimited, not overwritten
			[22, 31], // destinationColumnIndex 31 is 'Additional Countries'. Should be appended and comma delimited, not overwritten
			[23, 31], // destinationColumnIndex 31 is 'Additional Countries'. Should be appended and comma delimited, not overwritten
			[24, 31], // destinationColumnIndex 31 is 'Additional Countries'. Should be appended and comma delimited, not overwritten
			[25, 31]  // destinationColumnIndex 31 is 'Additional Countries'. Should be appended and comma delimited, not overwritten
		]
	},
	// This may have some duplicates becuase the SBTF team used Sahana as a data source.
	'refugees.sahana.io-organizations': {
		type: sourceType.urlSpreadSheet,
		hasHeader: 1,
		identifierIndex: 3,
		pathUrl: 'https://docs.google.com/spreadsheets/d/1VExxd55_StCcEcWzWz8Yev3LLubOhmyE2iia1Gfm7MA/edit#gid=1955008659',
		mappings: [
			[0, 3],
			[1, 5],
			[2, 16],
			[3, 12],
			[4, 29], // 'Phone Number' append to 'Additional Info'
			[5, 17],
			[6, 16],
			[7, 8],
			[8, 1]
		]
	}
};

var mappingTypes = {
	Array: function(data, mapping) {
		var text = "";
		// I've never seen this 'ii' pattern before. What is it?
		for(var i = 0, ii = mapping.length; i < ii; i++)
			text += " " + data[i];
		return text;
	}
	, Number: function(data, index) { return data[index]; }
	, Function: function(data, func) { return func(data); }
};

function main() {
	processFolder();
	processSheets();
}

function importSpreadSheet(path, sets, key) {
	try {
		var ssTarget = SpreadsheetApp.openByUrl(settings.targetSpreadSheetUrl);
		var targetSheet = ssTarget.getActiveSheet();

		var sourceSheet = SpreadsheetApp.openByUrl(path).getActiveSheet();
		var rowCount = sourceSheet.getDataRange().getNumRows();
		var start = 0;

		if(sets.hasHeader)
			start += sets.hasHeader;
	} catch(e) {
		Logger.log('importSpreadSheet failed with an error:');
		Logger.log(e);
		return;
	}

	for(var i = start, ii = rowCount; i < ii; i++) {
		var cols = sourceSheet.getRange(i+1, 1, 1, 50);
		var vals = cols.getDisplayValues();
		var isEmpty = vals.join('');

		if(isEmpty)
			continue;

		for(var x = 0, xx = vals.length; x < xx; x++) {
			var data = _mapColumnsAndTranslate(vals[x], sets.mappings, sets.translateFrom);
			var rangeKey = key +'_'+data[sets.identifierIndex].replace(/[^A-Za-z0-9]/gi, '_')
			data = _clearArray(data);

			var range = _getRangeByNameOrIndexes(ssTarget, rangeKey, data.length);
			ssTarget.setNamedRange(rangeKey, range);
			range.setValues([data]);
		}
	}

	return true;
}

function processFolder() {
	var folder = DriveApp.getFolderById(settings.toProcessPath);
	var destFolder = DriveApp.getFolderById(settings.processedPath);

	var files = folder.getFiles();

	while(files.hasNext()) {
		var file = files.next();
		var url = file.getUrl();
		var fileName = file.getName();
		var sets = _getSettingsByFileName(fileName);

		if(!sets)
		  continue;

		Logger.log(sets);
		if(importSpreadSheet(url, sets, sets.name)) {//SUCCESS MOVE TO PROCESSED FOLDER
			file.makeCopy((new Date().getTime() + fileName), destFolder);
			file.setTrashed(true);
		}
	}
}

function processSheets() {
	for(var key in source) {
		if(source[key].type != sourceType.urlSpreadSheet)
			continue;

		importSpreadSheet(source[key].pathUrl, source[key], key);
	}
}

function _clearArray(data) {
	for(var i = 0, ii = data.length; i < ii; i++) {
		if(!data[i])
			data[i] = '';
	}
	return data;
}

function _mapColumnsAndTranslate(rowData, mappings, translateFrom) {
	var result = [];
	for(var i = 0, ii = mappings.length; i < ii; i++) {
		var to = mappings[i][1];
		var text = mappingTypes[mappings[i][0].constructor](rowData, mappings[i][1]);//rowData[frm];

		if(translateFrom)
			text = LanguageApp.translate(text, translateFrom, settings.targetLanguage);

		result[to] = text;
	}
	return result;
}

function _getSettingsByFileName(filename) {
	for(var prop in sources) {
		if(filename.toLowerCase().indexOf(prop.toLowerCase()) != -1) {
			var sets = sources[prop];
			sets.name = prop;
			return sets;
		}
	}
	return null;
}

function _getRangeByNameOrIndexes(spreadSheet, rangeName, numColumns) {
	var range = spreadSheet.getRangeByName(rangeName);
	var sheet = spreadSheet.getActiveSheet();
	var rows = 0;

	if(range == null)
		rows = spreadSheet.getDataRange().getNumRows()+1;
	else {
		rows = range.getRow();
		spreadSheet.removeNamedRange(rangeName);
	}

	range = sheet.getRange(rows, 1, 1, numColumns);
	return range;
}
//DESTINATION COLUMNS
/*
See destination-mapping.txt
*/

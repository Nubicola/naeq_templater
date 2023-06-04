<%*

// replace all words that are ALL CAPS with their value

// returns the NAEQ value of the string passed to it
const a_val = "a".charCodeAt(0);
function naeq_calc (str) {
	return str.toLowerCase().split('').reduce( (prev, current, curIdx, array) => ((current.charCodeAt(0)-a_val)*19%26+1)+prev, 0)
}

// find all ALL CAPS and replace them with links to the NAEQ value page
// improvement

// what breaks:
// - existing links get parsed and replaced
// too many words will exceed an async limit

// done
// - Hello gets parsed -> Fixed with corrected regexp
// - replace whole phrases if they're highlighted
let noteContent = tp.file.content;
let newContent = "";
const selection = tp.file.selection();

// if nothing is selected, replace all ALL CAPS WORDS in file
//const query = /(\b[A-Z0-9]['A-Z0-9]+\b|\b[A-Z]\b)\|?/g;
var wordLinksMap = new Map();
function process_pages (word, target_file, map) {
	//console.log("processing " + target_file + " " + word);
	var a = tp.user.process_page(tp, target_file, word);
	//console.log(a);
}

if (selection.length == 0) {
	newContent = noteContent.replace(/(\b[A-Z0-9]['A-Z0-9]+\b|\b[A-Z]\b)\|?/g, function (word) {
		let val = naeq_calc(word);
		let target_file = "NAEQ_"+val;
		let target_link = "[["+target_file+"|"+word.toUpperCase()+"]] ";
		wordLinksMap.set(word, target_file);
		//tp.user.process_page(tp, target_file, word);
		return target_link;	
	});
	await app.vault.modify(tp.file.find_tfile(tp.file.title), newContent);
	wordLinksMap.forEach(process_pages);
// otherwise replace the selection (caps or not!) as a phrase
} else { 
	let val = naeq_calc(selection);
	let target_file = "NAEQ_"+val;
	let target_link = "[["+target_file+"|"+selection.toUpperCase()+"]] ";
	//wordLinksMap.set(selection, target_file);	
	tp.user.process_page(tp, selection, target_file);
	tp.file.cursor_append(target_link)
}

-%>

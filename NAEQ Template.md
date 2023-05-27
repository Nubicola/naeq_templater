<%*

// replace all words that are ALL CAPS with their value

// returns the NAEQ value of the string passed to it
const a_val = "a".charCodeAt(0);
function naeq_calc (str) {
	return str.toLowerCase().split('').reduce( (prev, current, curIdx, array) => ((current.charCodeAt(0)-a_val)*19%26+1)+prev, 0)
}

// put the word into the file that matches the word's value
// NAEQ(CAT) => 38, append to NAEQ_38
async function append_to_other (file, x) {
	//console.log("Looking up file "+file+".md");
	const it_exists = await tp.file.exists(file+".md");
	if (!it_exists) {
		//console.log("File not there!");
		await tp.file.create_new("", file, false);	
	}
	const target_file = tp.file.find_tfile(file);
	//t_content = await app.vault.read(file);
	await app.vault.append(target_file, x+"\n");
}

// given a string, replace it with naeq_value and markup
function replacement_action (to_replace) {
	//let newContent = "\n\n"+ noteContent.replace(/[A-Z]+/g, function (x) {
	// here x is the string that's in all caps
	// don't process it if it already is NAEQ!
	// console.log(to_replace);
	if (to_replace.startsWith("NAEQ")) { return x; }
	let nval = naeq_calc(to_replace);
	// put the string into the target file
	let target_file_name = "NAEQ_"+nval;
	append_to_other(target_file_name, to_replace.toUpperCase());
	// make the link
	//return x + " [[" + target_file_name + "|" + nval + "]]";
	return "[[" + target_file_name + "|" + to_replace.toUpperCase() + "]]";
}

// find all ALL CAPS and replace them with links to the NAEQ value page
// improvement

// what breaks:
// - existing links get parsed and replaced

// done
// - Hello gets parsed -> Fixed with corrected regexp
// - replace whole phrases if they're highlighted
let noteContent = tp.file.content;
let newContent = "";


/*const editor = this.app.workspace.getActiveViewOfType(tp.obsidian.MarkdownView).editor; 
const selection = editor.getSelection(); */ // Get selected text

const selection = tp.file.selection();

// if nothing is selected, replace all ALL CAPS WORDS in file
if (selection.length == 0) {
	newContent = noteContent.replace(/(\b[A-Z0-9]['A-Z0-9]+|\b[A-Z]\b)\|?/g, replacement_action);
	await app.vault.modify(tp.file.find_tfile(tp.file.title), newContent);
} 
// otherwise replace the selection (caps or not!) as a phrase
else { 
	newContent = replacement_action(selection);
	//await app.vault.append(tp.file.find_tfile(tp.file.title), newContent);
	tp.file.cursor_append(newContent)
}

//await app.vault.modify(tp.file.find_tfile(tp.file.title), newContent);

-%>
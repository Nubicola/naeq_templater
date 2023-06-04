async function process_page (tp, word, target_file) {
	//places the word in the target page
  // next step: read the whole file, sort, only add the word if it's not already there
  var p = ""
  p += "about to process " + target_file;

  let full_filename = "/NAEQ/"+target_file;
  
	const it_exists = await tp.file.exists(full_filename+".md");
	if (!it_exists) {
		p += "file not found, creating "+full_filename;
		await tp.file.create_new("", full_filename, false);	
    p += "created! ";
    await app.vault.append(tp.file.find_tfile(full_filename), word+"\n");
    p += "created and appended ";
	} else {
    p += "would like to process! ";
     // naeq_ pages are line oriented; each line has an naeq sum equal to the eq number
    await app.vault.process(tp.file.find_tfile(full_filename), function (contents) {
      // if word is already in there, make no change
      if (contents.includes(word)) { return contents; }
      let lines = contents.split("\n");
      lines.push(word);
      lines.sort();
      let r = "";
      for (var element of lines) {
        r += element + "\n";
      }
      return r;
    });
  }	
  p += "done!";
  //return p;
}

module.exports = process_page;

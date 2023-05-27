# naeq_templater
NAEQ for Obsidian using Templater
This is a template and a workflow for developing and maintaining a personal English Qabbalah library in an Obsidian Vault.

## Brief Howto
1. Install and enable the dependencies in your vault. I currently suggest you use a vault exclusively for NAEQ.
2. Set up templater so that it finds the NAEQ_Template.md file
3. Open a new page. Type in some text.
4. Execute the template on that page
4.1 The template will process ALL TEXTS IN CAPS automatically
4.2 Alternatively, you can select text with your mouse (capitalized or not) and it will process the selection as a phrase
5 The template will create new pages for each NAEQ value and copy the word into that page.
5.1 Note that currently it always appends the word or phrase. It doesn't look for duplicates!
6. The template will replace calculated text with links to the corresponding NAEQ pages

## Release Status
The current release is intended as a MVP (minimum viable product). 
### Known constraints
- All generated pages are dumped into the root folder
- Words and phrases are added to the NAEQ pages--there will be duplicates
- If you run the template on a page that has markdown links, the links will be broken after templating
- The regex is messed up still so HEllo only processes the HE part :|. Workaround is to select the word and run the template

## Code Dependencies
This template depends on the [Templater plugin from silent void](https://github.com/SilentVoid13/Templater)

## Workflow Dependencies
My workflow currently includes
- [Sort and Permute Lines](https://github.com/Vinzent03/obsidian-sort-and-permute-lines) to manage the NAEQ pages, mainly to remove duplicates
- [Text Format](https://github.com/Benature/obsidian-text-format) to convert text to uppercase

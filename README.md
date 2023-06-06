# naeq_templater
NAEQ for Obsidian using Templater
This is a template and a workflow for developing and maintaining a personal English Qabbalah library in an Obsidian Vault. Here's a demo


https://github.com/Nubicola/naeq_templater/assets/89207946/40e3b207-155e-4e65-90fb-4bba9acbba42


## Brief Howto
- Install and enable the dependencies in your vault. I currently suggest you use a vault exclusively for NAEQ.
- Set up templater so that it finds the NAEQ_Template.md file
- Set up templater so that it finds the process_page.js as a user script
- Create an NAEQ folder
- Open a new page. Type in some text.
- Execute the template on that page
    - The template will process ALL TEXTS IN CAPS automatically as separate words
    - Alternatively, you can select text with your mouse (capitalized or not) and it will process the selection as a phrase
- The template will create new pages for each NAEQ value and copy the word into that page.
- The template will replace calculated text with links to the corresponding NAEQ pages
- All NAEQ pages are placed in the NAEQ folder
- PLEASE WAIT for the calculated text and links to be populated. There are some errors in my code with respect to async. It all works, you just have to be patient
- PLEASE DO NOT process overly long text; it also causes an error with respect to async.

## Release Status
The current release is intended as a MVP (minimum viable product). 
### Known constraints
- If you run the template on a page that has markdown links, the links will be broken after templating
- Too much text to process as individual words will lead to errors / including NAEQ pages

## Code Dependencies
This template depends on the [Templater plugin from silent void](https://github.com/SilentVoid13/Templater)

## Workflow Dependencies
My workflow currently includes
- [Text Format](https://github.com/Benature/obsidian-text-format) to convert text to uppercase

## Support
Do you have some ideas about what to do with this? Let me know!
Do you really like what I've done? Feel free to [buy me a coffee](https://www.buymeacoffee.com/nubicola)

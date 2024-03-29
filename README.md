# naeq_templater
NAEQ for Obsidian using Templater

This is a template and a workflow for developing and maintaining a personal English Qabbalah library in an Obsidian Vault. You input text--write your own stuff, copy other people's stuff, whatever--and then you apply the template to it. The text will be magically transformed into links. These links point to a page that has all the words and phrases that correspond to each word in your text. This correspondence is based on the ALW Cipher (go read wikipedia if you don't know)

This is not meant for massive analysis of words. (There's another utility for that). It is intended for discovering numerical relationships between words and phrases. Here's a demo!

https://github.com/Nubicola/naeq_templater/assets/89207946/40e3b207-155e-4e65-90fb-4bba9acbba42


## Brief Howto
### One-Time Setup
- Install Obsidian.md. Learn how to use it.
- Make a new vault for NAEQ
- In the settings, click on "community plugins" and search for "templater." Install it and enable it.
- Make 3 folders in the vault: "NAEQ", "Templates" and "Scripts"
- Open the settings for templater itself. Change "Template folder location" to "Templates". Change "Script files folder location" to "Scripts"
- Close Obsidian. Open a file browser. Copy NAEQ_Template.md file into the "Templates" folder and copy process_page.js into the "Scripts" folder
- Open Obisidian again. You're good to go!

### Using 
- Open a new page. Type in some text.
- Execute the template on that page (press Control-P, then type Templater then select "Insert Templates: NAEQ Template"
    - The template will process ALL TEXTS IN CAPS automatically as separate words
    - Alternatively, you can select text with your mouse (capitalized or not) and it will process the selection as a phrase
- The template will create new pages for each NAEQ value and copy the word into that page.
- The template will replace calculated text with links to the corresponding NAEQ pages
- All NAEQ pages are placed in the NAEQ folder
- PLEASE WAIT for the calculated text and links to be populated. There are some errors in my code with respect to async. It all works, you just have to be patient


## Release Status
The current release is intended as a MVP (minimum viable product). 

### Known constraints
- PLEASE DO NOT process overly long text; it also causes an error with respect to async.
- PLEASE DO NOT process text that is already NAEQ'd or linked as that breaks stuff

## Code Dependencies
This template depends on the [Templater plugin from silent void](https://github.com/SilentVoid13/Templater)

## Workflow Dependencies
My workflow currently includes
- [Text Format](https://github.com/Benature/obsidian-text-format) to convert text to uppercase

## Support
Do you have some ideas about what to do with this? Let me know!
Do you really like what I've done? Feel free to [buy me a coffee](https://www.buymeacoffee.com/nubicola)

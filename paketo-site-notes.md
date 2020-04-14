# UI and Content Changes
There is a new example structure in place in the /docs section. 

## Docs Directory Organization 
As an example or proposed /docs structure, I split up the long single-page doc into more bite-size chunks just to illustrate the menu structure. The /docs section is setup such that anyone can simply add new .md files in any new or existing directory, and the sidebar menu will be created automatically to reflect that structure. 

To determine ordering, all that’s needed is a weight on each .md file within /docs. 

As well, there is a “Next Up” button at the bottom of each Doc page. It's a simple feature in Hugo to plug into, but if not needed it can easily be removed. The Next up will obey the weights on each .md file in /docs. 

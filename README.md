# Prism
This version of prism is in the nodejs environment
New programming language
Using Nodejs for getting files and processing them, ANTLR4 for lexing and parsing

So far it can:
- turn a file into an AST with antlr4
- clean up AST to better suit needs of interpreter/compiler
- interpret (WIP)

TO RUN:
- nodejs
- npm modules needed: antlr4, fs
-   edit main.js to run your code (change input variable at the bottom) 
        or 
    create a file named code.prsm in the folder with your code
- run the node project (run in terminal: node main.js)
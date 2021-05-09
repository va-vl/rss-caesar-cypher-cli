# rss-caesar-cypher-cli

A command line interface tool created for RSS Node.js 2021Q2 course. Implements a custom Caesar Cipher (but with a "y") algorithm. Supports encoding, decoding, positive and negative integer shift values.

## Installation and Launch

1. Open terminal;
2. `git clone https://github.com/va-z/rss-caesar-cypher-cli.git -b caesar-cypher` to clone the __caesar-cypher__ branch;
3. `cd ./rss-caesar-cypher-cli` to go into the app's directory;
4. `npm install` to install dependencies;
5. `node .` to run the app. Without any arguments, must show an error message.

### Optional: global installation

- `npm install -g` to globally install the app on your machine. This will allow you to use `cypher` to run the app anywhere your machine.
- `npm rm -g rss-caesar-cypher` to globally remove the app globally.

## Usage

The app accepts the following arguments:

| Argument | Alias | Description                                                                                          | Values                         | Required |
|----------|-------|------------------------------------------------------------------------------------------------------|--------------------------------|----------|
| --shift  | -s    | Number of letter positions used to produce result. Works _only_ with latin alphabet, preserves case. | Positive and negative integers | Yes      |
| --action | -a    | Action performed by the cypher. Encoding is the same as decoding with a negative shift value.        | "encode" or "decode"           | Yes      |
| --input  | -i    | Path to a file containing text to be encrypted.                                                      | String                         | No       |
| --output | -o    | Path to a file containing encrypted text.                                                            | String                         | No       |
| --help   | -h    | Displays help in the terminal, ignores all other arguments.                                          |                                | No       |

 - Argument order doesn't matter.
 - `--shift` value of 0 returns the same code.
 - `--shift` values greater than 25 "roll over". 
   - `--shift 26` is the same as `--shift 0`. 
   - `--shift 27` is the same as `--shift 1`.
 - `--shift` values less than -25 "roll over". 
   - `--shift -26` is the same as `--shift 0`. 
   - `--shift -27` is the same as `--shift -1`.
 - Omitting the `--input` argument will defer the app to reading inputs from `process.stdin`, i. e. the terminal. Inputs are made with the __Enter__ key. To finish, press `Ctrl + C` / `Cmd + C`.
 - Omitting the `--output` argument will translate results into the terminal.
 - Both `--input` and `--output` can be omitted within the same command.

### Errors

- Omitting or providing invalid values to `--shift` or `--action` will result in an error. 
- Providing `--input` or `--output` without values will result in an error. 
- Providing paths to non-existing or inaccessible files for `--input` or `--output` will result in an error.
- Providing paths to directories instead of files for `--input` or `--output` will result in an error. 

### Examples

1. `node . -s 1 -a encode -i input.txt -o output.txt` - parses the data inside input.txt and cyphers it by shifting all latin letters by one ("a" to "b", "C" to "D"). All non-latin letter symbols are left intact.
2. `node . -s 1 -a decode -i input.txt -o output.txt` - same as 1, but in reverse ("b" to "a", "D" to "C").
3. `node . -s -1 -a encode -i input.txt -o output.txt` - same as 2.
4. `node . -s 1 -a encode` - takes the data from __process.stdin__ (the terminal), on each __Enter__ press shows the encrypted text in the terminal.
5. `node . -s 1 -a encode -i ../some-file.txt` - takes the data from the provided path (here - `../some-file.txt`) and shows the encrypted text in the terminal.
6. `node . -s 1 -a encode -o ../some-file.txt` - takes the data from __process.stdin__ (the terminal) and outputs to the provided path once the process is finished (`Ctrl + C` is pressed).

## Attributions

Resources used: 
 - https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
 - https://www.twilio.com/blog/how-to-build-a-cli-with-node-js
 - https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e

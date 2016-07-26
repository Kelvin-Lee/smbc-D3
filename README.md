# smbc D3
A simple visualization of text [sourced/scraped](https://github.com/Kelvin-Lee/smbc-with-casperjs) from smbc-comics.com using D3.js

## Developer Notes
- I was wondering how D3 would be able to draw anything without a DOM/while working in a NodeJs environment. This link [here](http://linuxsimba.com/running-d3-in-node) provided a fix.

## Notes
- Currently, the input text file is 4k lines long, but only about 500 are worth parsing for English words.
- The input text file was generated in mid July 2015, so it will not have **all** of the content that is on smbc-comics. Just a good chunk.

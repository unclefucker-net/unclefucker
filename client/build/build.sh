#!/bin/bash

echo Building Unclefucker
tsc

#echo Closure Compiler
#java -jar closure-compiler-v20160713.jar --js_output_file=server/public/js/pageda.min.js  server/public/js/pageda.js

echo Restarting server
cd ../../server
PORT=3000 npm start
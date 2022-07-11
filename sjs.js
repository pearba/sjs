var SJS_FILE = __dirname + '/sjs.gz';

require('vm').runInThisContext(require('module').wrap(require('zlib').gunzipSync(require('fs').readFileSync(require('path').normalize(SJS_FILE))).toString()))(exports,require,module,__filename,__dirname);
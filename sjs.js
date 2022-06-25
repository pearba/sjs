var SJS_PATH = __dirname + '/sjs.gz';

require('vm').runInThisContext(require('module').wrap(require('zlib').gunzipSync(require('fs').readFileSync(require('path').normalize(SJS_PATH))).toString()))(exports,require,module,__filename,__dirname);
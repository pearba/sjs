const sjs_path = __dirname + '/sjs.gz';

require('vm').runInThisContext(require('module').wrap(require('zlib').gunzipSync(require('fs').readFileSync(require('path').normalize(sjs_path))).toString()))(exports,require,module,__filename,__dirname);
yaml = require('js-yaml')
fs = require('fs')

// DEBUG ARGS
process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val)
})

console.log('FILE TYPE SPECIFIED: ' + process.argv[3])

// Get document, or throw exception on error
try {
  var doc = yaml.safeLoad(fs.readFileSync(process.argv[2], 'utf8'), {})

  if (process.argv[3] && process.argv[3] === 'json') {
    doc = JSON.stringify(doc, null, 2)
  }

  let type = process.argv[3] ? process.argv[3] : 'js'
  type = 'out.' + type

  fs.writeFile(type, doc, function(err) {
    if (err) {
      return console.log(err)
    }
    console.log(doc)
  })
} catch (e) {
  console.log(e)
}

import yml from 'js-yaml'
import fs from 'fs'

const files = fs.readdirSync('src/configs/')

files
  .filter((file) => /\.yaml|\.yml$/.test(file))
  .forEach((file) => {
    try {
      const yamlStr = fs.readFileSync(`src/configs/${file}`)
      const obj = yml.load(yamlStr, {filename: file})
      
      const newFilename = file.replace(/\.yaml|\.yml/, '.json')
      const jsonStr = JSON.stringify(obj, null, 2) + '\n'
      fs.writeFileSync(`src/configs/${newFilename}`, jsonStr)
      
      console.log(`✓ ${file} --> ${newFilename}`)
    } catch (err) {
      console.log(`✗ ${file}:\n\t${err?.message ?? err ?? 'Whoopsie'}`)
    }
  })

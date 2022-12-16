import { v4 as uuidv4 } from 'uuid'
import * as path from 'path';
import  * as fs from 'fs'

export function createFile(file: Express.Multer.File): string {    
    const ext = file.originalname.split('.').pop()
    const filename = `${uuidv4()}.${ext}`
    const filePath = path.resolve(__dirname, '..', 'static')
    
    if(!fs.existsSync(filePath)){
      fs.mkdirSync(filePath, {recursive: true})
    }
    fs.writeFileSync(path.resolve(filePath, filename), file.buffer)
    return filename
  }
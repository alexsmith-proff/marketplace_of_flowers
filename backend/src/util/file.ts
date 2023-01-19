import { v4 as uuidv4 } from 'uuid'
import * as path from 'path';
import * as fs from 'fs'

export function createFile(file: Express.Multer.File): string {
  const ext = file.originalname.split('.').pop()
  const filename = `${uuidv4()}.${ext}`
  const filePath = path.resolve(__dirname, '..', 'static')

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath, { recursive: true })
  }
  // fs.writeFileSync(path.resolve(filePath, filename), file.buffer)
  return filename
}

export function deleteFile(fileName: string): boolean {
  const filePath = path.resolve(__dirname, '..', 'static')
  fs.unlink(path.resolve(filePath, fileName), (err) => {
    if (err) throw err;
    console.log('File deleted successfully!');
    return true
  });

  return false
}  
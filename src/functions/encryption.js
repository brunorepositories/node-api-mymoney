import crypto from 'crypto'
require('dotenv').config()


export function crypt(text) {
  const cipher = crypto.createCipher(process.env.CRYPT_ALG, process.env.CRYPT_PWD)
  const crypted = cipher.update(text, process.env.CRYPT_TIPO, process.env.CRYPT_COD)
  return crypted
}

export function decrypt(text) {
  const decipher = crypto.createDecipher(process.env.CRYPT_ALG, process.env.CRYPT_PWD)
  const decrypted = decipher.update(text, process.env.CRYPT_TIPO, process.env.CRYPT_COD)
  return decrypted
}

const checkEmail = email => {
   if (email == null) {
      return `Error: input yg diberikan kosong`
   } else if (typeof email != 'string') {
      return `Error : Invalid data type`
   } else if (typeof email == 'string') {
      if (!email.includes('@')) {
         return `Error : input harus berformat email dengan menambahkan @`
      }
      const REGEX_EMAIL = /[\w]+@[a-z]+\.[a-z]/
      return REGEX_EMAIL.test(email) ? `VALID` : `INVALID`
   }
}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
console.log(checkEmail())

const isValidPassword = givenPassword => {
   if (givenPassword == null) {
      return `Error: input yg diberikan kosong`
   } else if (typeof givenPassword != 'string') {
      return `Error: Invalid data type. Parameter type must be string`
   } else if (typeof givenPassword == 'string') {
      if (givenPassword.length < 8) {
         return false
      } else if (!/[A-Z]{1,}/.test(givenPassword)) {
         return false
      } else if (!/[a-z]{1,}/.test(givenPassword)) {
         return false
      } else if (!/[0-9]{1,}/.test(givenPassword)) {
         return false
      } else {
         return true
      }
   }
}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())
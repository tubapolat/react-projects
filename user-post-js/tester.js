import { getUserById, getPostsByUserId } from './userService.js'
console.log(await Promise.all([getUserById(1), getPostsByUserId(1)]));
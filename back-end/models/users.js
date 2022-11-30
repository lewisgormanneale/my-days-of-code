import query from '../db/index.js'

export async function getUsers () {
  const result = await query('SELECT * FROM users;');
  const usersArray = result.rows;
  return usersArray;
}
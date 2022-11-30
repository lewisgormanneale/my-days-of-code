import query from '../db/index.js'

export async function getUsers () {
  const result = await query('SELECT * FROM users;');
  const usersArray = result.rows;
  return usersArray;
}

export async function getUserById(id) {
  const data = await query("SELECT * FROM users WHERE id = $1;", [id]);
  return data.rows[0];
}
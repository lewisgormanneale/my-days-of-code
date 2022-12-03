import query from '../db/index.js'

export async function getProfiles () {
  const result = await query('SELECT * FROM profiles;');
  const profilesArray = result.rows;
  return profilesArray;
}

export async function getProfileById(id) {
  const data = await query("SELECT * FROM profiles WHERE id = $1;", [id]);
  return data.rows[0];
}
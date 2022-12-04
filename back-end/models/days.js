import query from '../db/index.js';

export async function getDays () {
  const result = await query('SELECT * FROM days;');
  const daysArray = result.rows;
  return daysArray;
}

export async function getDayById(id) {
  const data = await query("SELECT * FROM days WHERE id = $1;", [id]);
  return data.rows[0];
}

export async function getDayByUserId(id) {
  const data = await query("SELECT * FROM days WHERE user_id = $1;", [id]);
  return data.rows;
}

export async function createDay(day) {
  const result = await query(
    " INSERT INTO days (day, date, post, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [day.day, day.date, day.post, day.user_id]
  );
  const createdPost = result.rows;
  return createdPost;
}

export async function patchDay(id, day) {
  const result = await query(
    `UPDATE days SET day = $1, date = $2, post = $3 WHERE id = $4 RETURNING *`,
    [day.day, day.date, day.post, id]
  );
  const updatedPost = result.rows;
  return updatedPost;
}

export async function deleteDay(id) {
  const result = await query(`DELETE FROM days WHERE id = $1`, [id]);
  const remove = result.rows[0];
  return remove;
}
import query from '../db/index.js'

export async function getDays () {
  const result = await query('SELECT * FROM days;');
  const daysArray = result.rows;
  return daysArray;
}
import query from '../db/index.js'
import { pool } from "../db/index.js";

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
import { Diary } from '../../client/models/Diary'
import connection from './connection'

export async function getAllDiaryEntries(db = connection): Promise<Diary[]> {
  return db('diary').select()
}

export async function deleteDiaryEntry(
  id: number,
  db = connection
): Promise<Diary> {
  return db('diary').where('id', id).del().returning(['*'])
}

export async function updateDiaryEntry(
  id: number,
  updatedEntry: Diary,
  db = connection
): Promise<Diary> {
  return db('diary')
    .where('id', id)
    .update({
      emotion: updatedEntry.emotion,
      successes: updatedEntry.successes,
      roadblocks: updatedEntry.roadblocks,
      tomorrow_plan: updatedEntry.tomorrow_plan,
    })
    .returning(['*'])
}

export async function createEntry(
  newEntry: Diary,
  db = connection
): Promise<number[]> {
  return db('diary')
    .insert({
      date: newEntry.date,
      emotion: newEntry.emotion,
      successes: newEntry.successes,
      roadblocks: newEntry.roadblocks,
      tomorrow_plan: newEntry.tomorrow_plan,
    })
    .returning(['id'])
}
export default connection

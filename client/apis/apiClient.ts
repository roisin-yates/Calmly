import request from 'superagent'
import { Diary, NewDiary, UpdateDiary } from '../models/Diary'

const URL = '/api'

export async function getEntries(): Promise<Diary[]> {
  try {
    const response = await request.get(URL)
    return response.body.diary
  } catch (err) {
    console.log(err)
    return []
  }
}

export async function deleteEntry(id: number): Promise<Diary[]> {
  try {
    await request.delete(`${URL}/${id}/delete`)
    return []
  } catch (err) {
    console.log(err)
    throw new Error('this entry could not be deleted')
  }
}

export async function updateEntry(
  id: number,
  updatedEntry: UpdateDiary
): Promise<Diary> {
  try {
    const response = await request.put(`${URL}/${id}/update`).send(updatedEntry)
    return response.body.diary
  } catch (err) {
    console.log(err)
    throw new Error('this entry could not be updated')
  }
}

export async function addEntry(newEntry: NewDiary): Promise<Diary> {
  try {
    const response = await request.post(`${URL}/add`).send({ ...newEntry })
    return response.body.diary
  } catch (err) {
    console.log(err)
    throw new Error('this entry could not be added')
  }
}

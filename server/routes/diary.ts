import express from 'express'

import {
  createEntry,
  deleteDiaryEntry,
  getAllDiaryEntries,
  updateDiaryEntry,
} from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllDiaryEntries()
    .then((diary) => {
      res.header('Content-Type', 'application/json')
      res.json({ diary })
    })
    .catch((err) => {
      console.log(err)
      res
        .sendStatus(500)
        .json({ error: 'there was an error fetching your diary entries' })
    })
})

router.post('/add', async (req, res) => {
  try {
    const newEntry = { ...req.body }
    const [newId] = await createEntry(newEntry)
    res.json({
      diary: {
        ...newEntry,
        id: newId.id,
      },
    })
  } catch (err) {
    console.log('There was an error trying to add this entry')
    res
      .status(500)
      .json({ error: 'there was an error trying to add this entry' })
  }
})

router.delete('/:id/delete', async (req, res) => {
  try {
    const id = req.params.id
    await deleteDiaryEntry(Number(id))
  } catch (err) {
    console.error('Error deleting your diary entry:', err)
    res.status(500).json({ error: 'could not delete entry' })
  }
})
export default router

router.put('/:id/update', async (req, res) => {
  try {
    const id = req.params.id
    const newEntry = req.body
    await updateDiaryEntry(Number(id), newEntry)
    res.json({
      diary: {
        newEntry,
      },
    })
  } catch (err) {
    console.error('Error updating your diary entry:', err)
    res.status(500).json({ error: 'could not update this entry' })
  }
})

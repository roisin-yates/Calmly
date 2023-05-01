import { useEffect, useState } from 'react'
import { getDiaryEntries } from '../actions/index'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Diary } from '../models/Diary'
import Entry from './Entry'

export default function EntriesList() {
  const { loading, error, data } = useAppSelector((state) => state.diary)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDiaryEntries())
  }, [dispatch])

  return (
    <div className="m-6">
      <h2 className="is-size-3 has-text-centered has-text-weight-bold">
        Diary entries
      </h2>
      {data.map((entry) => {
        return (
          <div key={entry.id}>
            <Entry entry={entry} />
          </div>
        )
      })}
    </div>
  )
}

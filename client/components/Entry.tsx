import { Diary } from '../models/Diary'
import { useAppDispatch } from '../hooks/hooks'
import { deleteDiaryEntry } from '../actions'
import { useState } from 'react'
import EditEntry from './EditEntry'

export interface DiaryEntry {
  entry: Diary
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Entry({ entry }: DiaryEntry) {
  const dispatch = useAppDispatch()
  const [isDeleted, setIsDeleted] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  function handleClick() {
    dispatch(deleteDiaryEntry(entry.id))
    setIsDeleted(true)
  }

  function editHandleClick() {
    setIsEditing(true)
  }

  if (isDeleted) {
    return null
  }

  return (
    <div key={entry.id} className="box entry">
      <div className="is-flex is-justify-content-space-between">
        <span
          className={
            isEditing ? 'is-hidden' : 'material-symbols-outlined is-size-1'
          }
        >
          {entry.emotion === 'calm'
            ? 'sentiment_calm'
            : entry.emotion === 'happy'
            ? 'sentiment_very_satisfied'
            : entry.emotion === 'neutral'
            ? 'sentiment_neutral'
            : entry.emotion === 'unhappy'
            ? 'sentiment_dissatisfied'
            : 'sentiment_extremely_dissatisfied'}
        </span>
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <span className="material-symbols-outlined options">
              more_horiz
            </span>
          </div>
          <div className="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <button
                className="dropdown-item no-default"
                onClick={handleClick}
              >
                <span className="material-symbols-outlined icon">close</span>
                Delete
              </button>
              <button
                className="dropdown-item no-default"
                onClick={editHandleClick}
              >
                <span className="material-symbols-outlined icon">edit</span>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      {!isEditing ? (
        <>
          <h3 className="has-text-weight-bold">
            On {entry.date} I felt {entry.emotion}
          </h3>
          <p>
            <span className="has-text-weight-bold">Roadblocks:</span>{' '}
            {entry.roadblocks}
          </p>
          <p>
            <span className="has-text-weight-bold">Successess:</span>{' '}
            {entry.successes}
          </p>
          <p>
            <span className="has-text-weight-bold">My plan for tomorrow:</span>{' '}
            {entry.tomorrow_plan}
          </p>
        </>
      ) : (
        <EditEntry entry={entry} setIsEditing={setIsEditing} />
      )}
    </div>
  )
}

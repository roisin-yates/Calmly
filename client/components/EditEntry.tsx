import { DiaryEntry } from './Entry'
import { useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { updateDiaryEntry } from '../actions'

export default function EditEntry({ entry, setIsEditing }: DiaryEntry) {
  const dispatch = useAppDispatch()
  const [emotion, setEmotion] = useState(entry.emotion)
  const [roadblocks, setRoadblocks] = useState(entry.roadblocks)
  const [successes, setSuccesses] = useState(entry.successes)
  const [tomorrowPlan, setTomorrowPlan] = useState(entry.tomorrow_plan)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmotion(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const updatedEntry = {
      id: entry.id,
      emotion,
      successes,
      roadblocks,
      tomorrow_plan: tomorrowPlan,
    }

    dispatch(updateDiaryEntry(entry.id, updatedEntry))
      .then(() => {
        setIsEditing(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <form
        className="is-flex is-flex-direction-column"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="happy">
            <input
              type="radio"
              name="mood"
              value="happy"
              id="happy"
              className="is-hidden"
              checked={emotion === 'happy'}
              onChange={handleChange}
            />
            <span
              className={`material-symbols-outlined is-size-1 is-clickable ${
                emotion === 'happy' ? 'checked' : ''
              }`}
            >
              sentiment_very_satisfied
            </span>
          </label>
          <input
            type="radio"
            name="mood"
            value="calm"
            className="is-hidden"
            id="calm"
            checked={emotion === 'calm'}
            onChange={handleChange}
          />
          <label htmlFor="calm">
            <span
              className={`material-symbols-outlined is-size-1 is-clickable ${
                emotion === 'calm' ? 'checked' : ''
              }`}
            >
              sentiment_calm
            </span>
          </label>
          <input
            type="radio"
            name="mood"
            value="neutral"
            className="is-hidden"
            id="neutral"
            checked={emotion === 'neutral'}
            onChange={handleChange}
          />
          <label htmlFor="neutral">
            <span
              className={`material-symbols-outlined is-size-1 is-clickable ${
                emotion === 'neutral' ? 'checked' : ''
              }`}
            >
              sentiment_neutral
            </span>
          </label>
          <input
            type="radio"
            name="mood"
            value="unhappy"
            id="unhappy"
            className="is-hidden"
            checked={emotion === 'unhappy'}
            onChange={handleChange}
          />
          <label htmlFor="unhappy">
            <span
              className={`material-symbols-outlined is-size-1 is-clickable ${
                emotion === 'unhappy' ? 'checked' : ''
              }`}
            >
              sentiment_dissatisfied
            </span>
          </label>
          <input
            type="radio"
            name="mood"
            value="very unhappy"
            className="is-hidden"
            id="very-unhappy"
            checked={emotion === 'very unhappy'}
            onChange={handleChange}
          />
          <label htmlFor="very-unhappy">
            <span
              className={`material-symbols-outlined is-size-1 is-clickable ${
                emotion === 'very unhappy' ? 'checked' : ''
              }`}
            >
              sentiment_extremely_dissatisfied
            </span>
          </label>
        </div>
        <label htmlFor="roadblocks">Roadblocks</label>
        <input
          type="text"
          id="roadblocks"
          value={roadblocks}
          onChange={(event) => setRoadblocks(event.target.value)}
        />
        <label htmlFor="successes">Successes</label>
        <input
          type="text"
          id="successes"
          value={successes}
          onChange={(event) => setSuccesses(event.target.value)}
        />
        <label htmlFor="tomorrow_plan">Plan for tomorrow</label>
        <input
          type="text"
          id="tomorrow_plan"
          value={tomorrowPlan}
          onChange={(event) => setTomorrowPlan(event.target.value)}
        />
        <button type="submit" className="button">
          Save
        </button>
      </form>
    </>
  )
}

import { useState } from 'react'
import { addDiaryEntry } from '../actions'
import { useAppDispatch } from '../hooks/hooks'

export default function AddEntry() {
  const dispatch = useAppDispatch()

  const [emotion, setEmotion] = useState('happy')
  const [roadblocks, setRoadblocks] = useState('')
  const [successes, setSuccesses] = useState('')
  const [tomorrowPlan, setTomorrowPlan] = useState('')
  const [date, setDate] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmotion(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(
      addDiaryEntry({
        date,
        emotion,
        roadblocks,
        successes,
        tomorrow_plan: tomorrowPlan,
      })
    )
    setEmotion('')
    setRoadblocks('')
    setSuccesses('')
    setTomorrowPlan('')
    setDate('')
  }
  return (
    <>
      <div className="m-6">
        <h3 className="is-size-3 has-text-weight-bold has-text-centered">
          Add a new Diary Entry
        </h3>
        <form
          className="is-flex is-flex-direction-column entry box"
          onSubmit={handleSubmit}
        >
          <label htmlFor="date">Add the date:</label>
          <input
            type="date"
            name="date"
            id="date"
            className="is-size-4 mb-3"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <p>How did you feel today?</p>
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
          <textarea
            className="textarea mb-2"
            id="roadblocks"
            value={roadblocks}
            placeholder="Discuss your roadblocks here"
            onChange={(event) => setRoadblocks(event.target.value)}
          ></textarea>
          <label htmlFor="successes">Successes</label>
          <textarea
            className="textarea mb-2"
            id="successes"
            value={successes}
            placeholder="Discuss your successes here"
            onChange={(event) => setSuccesses(event.target.value)}
          ></textarea>
          <label htmlFor="tomorrow_plan">Plan for tomorrow</label>
          <textarea
            className="textarea mb-6"
            id="tomorrow_plan"
            value={tomorrowPlan}
            placeholder="Discuss your plan for the next day here"
            onChange={(event) => setTomorrowPlan(event.target.value)}
          ></textarea>
          <button type="submit" className="button">
            Save
          </button>
        </form>
      </div>
    </>
  )
}

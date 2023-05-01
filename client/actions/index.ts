import { Dispatch } from 'redux'
import { getEntries } from '../apis/apiClient'
import { Diary, UpdateDiary, NewDiary } from '../models/Diary'
import { ThunkAction } from '../store'
import { deleteEntry, updateEntry, addEntry } from '../apis/apiClient'

export const SET_PENDING_ENTRIES = 'SET_PENDING_ENTRIES'
export const SET_SUCCESSFUL_ENTRIES = 'SET_SUCCESSFUL_ENTRIES'
export const SET_ERROR = 'SET_ERROR'
export const SET_DELETE_SUCCESS = 'SET_DELETE_SUCCESS'
export const SET_UPDATE_SUCCESS = 'SET_UPDATE_SUCCESS'
export const SET_ADD_SUCCESS = 'SET_ADD_SUCCESS'

export type DiaryAction =
  | {
      type: typeof SET_PENDING_ENTRIES
      payload: null
    }
  | {
      type: typeof SET_SUCCESSFUL_ENTRIES
      payload: Diary[]
    }
  | {
      type: typeof SET_ERROR
      payload: string
    }
  | {
      type: typeof SET_DELETE_SUCCESS
      payload: number
    }
  | {
      type: typeof SET_UPDATE_SUCCESS
      payload: UpdateDiary
    }
  | {
      type: typeof SET_ADD_SUCCESS
      payload: NewDiary
    }
export function setDiaryPending(): DiaryAction {
  return {
    type: SET_PENDING_ENTRIES,
    payload: null,
  }
}

export function setDiarySuccess(entries: Diary[]): DiaryAction {
  return {
    type: SET_SUCCESSFUL_ENTRIES,
    payload: entries,
  }
}

export function setError(error: string): DiaryAction {
  return {
    type: SET_ERROR,
    payload: error,
  }
}

export function deleteDiarySuccess(message: number): DiaryAction {
  return {
    type: SET_DELETE_SUCCESS,
    payload: message,
  }
}

export function addEntrySuccess(entry: NewDiary): DiaryAction {
  return {
    type: SET_ADD_SUCCESS,
    payload: entry,
  }
}

export function updateEntrySuccess(entry: UpdateDiary): DiaryAction {
  return {
    type: SET_UPDATE_SUCCESS,
    payload: entry,
  }
}

export function getDiaryEntries(): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setDiaryPending())
    return getEntries()
      .then((entries) => {
        dispatch(setDiarySuccess(entries))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function deleteDiaryEntry(id: number): ThunkAction {
  return (dispatch: Dispatch) => {
    return deleteEntry(id)
      .then(() => {
        dispatch(deleteDiarySuccess(id))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function updateDiaryEntry(
  id: number,
  newEntry: UpdateDiary
): ThunkAction {
  return (dispatch: Dispatch) => {
    return updateEntry(id, newEntry)
      .then(() => {
        dispatch(updateEntrySuccess(newEntry))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function addDiaryEntry(newEntry: NewDiary): ThunkAction {
  return (dispatch: Dispatch) => {
    return addEntry(newEntry)
      .then((entry) => {
        dispatch(addEntrySuccess(entry))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

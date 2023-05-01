import {
  SET_ERROR,
  SET_PENDING_ENTRIES,
  SET_SUCCESSFUL_ENTRIES,
  DiaryAction,
  SET_ADD_SUCCESS,
  SET_UPDATE_SUCCESS,
  SET_DELETE_SUCCESS,
} from '../actions/index'
import { UpdateDiary } from '../models/Diary'

export interface DiaryState {
  loading: boolean
  error: string | undefined
  data: UpdateDiary[]
}

const initialState: DiaryState = {
  loading: false,
  error: undefined,
  data: [],
}

const diaryReducer = (
  state = initialState,
  action: DiaryAction
): DiaryState => {
  switch (action.type) {
    case SET_PENDING_ENTRIES:
      return {
        loading: true,
        error: undefined,
        data: [],
      }
    case SET_SUCCESSFUL_ENTRIES:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    case SET_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    case SET_ADD_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: [...state.data, action.payload],
      }
    case SET_UPDATE_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: [
          ...state.data.map((entry) =>
            entry.id === action.payload.id
              ? {
                  ...entry,
                  roadblocks: action.payload.roadblocks,
                  successes: action.payload.successes,
                  tomorrow_plan: action.payload.tomorrow_plan,
                  emotion: action.payload.emotion,
                }
              : entry
          ),
        ],
      }
    case SET_DELETE_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: [
          ...state.data.filter((entry) => {
            return entry.id !== action.payload
          }),
        ],
      }
    default:
      return state
  }
}

export default diaryReducer

export interface Diary {
  id: number
  date: string
  emotion: string
  roadblocks: string
  successes: string
  tomorrow_plan: string
}

export interface UpdateDiary extends Partial<Diary> {
  id?: number
  date?: string
}

export interface NewDiary extends Partial<Diary> {
  id?: number
}

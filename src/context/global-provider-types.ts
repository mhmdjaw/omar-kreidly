export type CursorType = 'unhovered' | 'hovered' | 'hidden' | 'text'

export interface State {
  cursorType: CursorType
}

export interface GlobalContext {
  cursorType: CursorType
  onCursor: (cursorType: CursorType) => void
}

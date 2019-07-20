export const rows: Rows = [
  {
    id: "up20-un30",
    generation: "20~30歳",
    answers: [0.18, 0.22, 0.37, 0.23]
  },
  {
    id: "up30-un40",
    generation: "30~40歳",
    answers: [0.12, 0.28, 0.42, 0.18]
  }
];

export type Row = {
  id: string
  generation: string
  answers: number[]
}

export type Rows = Row[]
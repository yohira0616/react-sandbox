import TodoModel from "../TodoModel";

export function fetch() {
  const defaultData: TodoModel[] = [{
    id: 1,
    name: "hoge"
  }, {
    id: 2,
    name: "fuga"
  }];
  return defaultData
}
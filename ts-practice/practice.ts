type Items<T> = {
  list: T[];
};

const items: Items<string> = {
  list: ["a", "b", "c"],
};

const items2: Items<number> = {
  list: [1, 2, 3],
};

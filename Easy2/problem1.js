function greetings(arr, obj) {
  return `Hello, ${arr.join(" ")}! Nice to have ${obj["title"]} ${
    obj["occupation"]
  } around`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

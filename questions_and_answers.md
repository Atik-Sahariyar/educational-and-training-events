<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`



<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `undefined`?

<i>Write your explanation here</i>

 Explaination: In the provided code there's a typOf: `greetign`  should be `greeting`. Due to this typeOf , the `greeting` variable remains undefided, so `consol.log(greetign) outputs` outputs `undefined`. The correct answer is C: `undefined`.

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"` ?

<i>Write your explanation here</i>
JavaScript coverts the number `1` to a string and concatenates it write the string "2" , resulting in the string `"12"`.
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  A: `['🍕', '🍫', '🥑', '🍔']`?

<i>Write your explanation here</i>
 Reassingining `info.favoriteFood` dose not change the original `food`.
 
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined` ?

<i>Write your explanation here</i>
When the `sayHi()` function is called without an argument, the `name` parameter inside the function is `undefined`. The function still executes and returns a string containing `"Hi there,"` followed by the value of `name`, which is `undefined`. Therefore , the output is B:`Hi there, undefined`.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: 2 ?

<i>Write your explanation here</i>
  The `forEach` loop iterates through the `nums` array.
  Numbers `1`, '2', and '3' are truhly values, so `count` is increased by 1 for each of them. The number `0` is falsy, so it dose'nt increase `count`. Hence, `count` becomes `2`.
  </p>
</details>

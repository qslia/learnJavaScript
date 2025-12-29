In JavaScript, `unshift()` is an array method that **adds one or more elements to the beginning of an array** and returns the new length of the array.

## How `unshift()` works in your code:

```javascript
digits.unshift(1);
```

This line:
1. Adds the number `1` to the **start** of the `digits` array
2. Shifts all existing elements to higher indices
3. Returns the new array length (which you're not using in your code)

## Example from your `plusOne` function:

When `digits = [9, 9, 9]`:
- After the loop, it becomes `[0, 0, 0]`
- `digits.unshift(1)` changes it to `[1, 0, 0, 0]`
- This correctly represents `999 + 1 = 1000`

## Comparison with `push()`:
- `unshift()` adds to the **beginning** of array
- `push()` adds to the **end** of array

```javascript
let arr = [2, 3, 4];
arr.unshift(1); // arr is now [1, 2, 3, 4]
arr.push(5);    // arr is now [1, 2, 3, 4, 5]
```

In your algorithm, `unshift(1)` handles the **carry-over** case when all digits are 9, like turning `999` into `1000`.
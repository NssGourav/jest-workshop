# Jest Workshop Submission

## Student Details
- Name: Gourav NSS  
- Roll Number: 2024-B-03072007  
- GitHub Username: NssGourav  

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: No coupon should return original subtotal
**What it protects against:**  
Prevents unintended discounts or logic changes when no coupon is provided.

---

### 2. Test Name: Automatic discount applied for high-value orders
**What it protects against:**  
Ensures the 5% automatic discount is correctly applied when the subtotal is 1000 or more.

---

### 3. Test Name: SAVE10 coupon works irrespective of letter casing
**What it protects against:**  
Avoids failures caused by case-sensitive coupon validation and ensures correct discount calculation.

---

### 4. Test Name: FLAT50 discount should not produce negative total
**What it protects against:**  
Prevents the final amount from going below zero when flat discounts exceed the subtotal.

---

### 5. Test Name: Invalid subtotal input should throw an error
**What it protects against:**  
Ensures invalid or negative subtotal values are rejected instead of producing incorrect results.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? **Yes**
- GitHub Actions Run URL: (https://github.com/NssGourav/jest-workshop/actions/runs/21825527123/job/62969381369)

---

## Reflection (1–2 lines)
I learned how meaningful test cases help catch edge cases early and how CI ensures tests are automatically executed on every push and pull request.

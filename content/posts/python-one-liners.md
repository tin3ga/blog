---
title: "Python One Liners"
date: 2023-11-23T16:58:18+03:00
draft: false
tags: ["python"]
weight: 130
---

1. Multiple variable assignments

```python
name, age, occupation = "fatma", 30, "cook"
print(name, age, occupation)
# fatma 30 cook

```

2. HTTP server

```python
python -m http.server
```

3. Swap variables

```python
a = "a"
b = "b"
a, b = b, a
print(a, b)
# b a
```

4. Ternary operator

```python
yob = 1997
print("hey kid(gen alpha)" if yob >= 2013 else "wassup gen z" if yob >= 1995 else"hello future grandma(millennials)" if yob >= 1980 else "hey grandma(gen x)" if yob >= 1965 else "hello ancestor (baby boomer)")
# wassup gen z

```

5. Variable unpacking

```python
users = ['kalama', 'kairetu','munga','mwanaisha']
print(*users)
#kalama kairetu munga mwanaisha

user1, user2 , *other_users= users
print(other_users)
#['munga', 'mwanaisha']

```

6. Reverse a list

```python
z = [10,20,30,40]
print(z[::-1])
#[40, 30, 20, 10]


```

7. Sort a list

```python
numbers = [1000000, -500000, 999999999, -1000000000, 123456789]
print(sorted(numbers))
# [-1000000000, -500000, 1000000, 123456789, 999999999]
```

8. Sort a list - reversed

```python
numbers = [1000000, -500000, 999999999, -1000000000, 123456789]
print(sorted(numbers, reverse=True))
#[999999999, 123456789, 1000000, -500000, -1000000000]
```

9. Filter from a list

```python
numbers = [1,2,3,4,5,6,7,8,9,10]
odd = list(filter(lambda x: x%2!=0, numbers))
print(odd)
#[1, 3, 5, 7, 9]

```

10. List comprehension

```python
names = ['lizzy','bruce','wafula']
print([name.title() for name in names])
#['Lizzy', 'Bruce', 'Wafula']
```

11. Remove duplicates from a list

```python

num = [5, 2, 8, 3, 5, 2, 1, 8, 9, 4, 1]
print(list(set(num)))
# [1, 2, 3, 4, 5, 8, 9]
```

12. Combine two lists to a dictionary

```python
letters = ["a", "b", "c", "d"]
num = [1,2,3,4]
print(dict(zip(letters, num)))
# {'a': 1, 'b': 2, 'c': 3, 'd': 4}

```

13. Unpacking using \* operator and zip

```python
pair = [('jack', 50),('inaam', 80), ( 'Anna ', 70), ('John', 35)]
names, marks = zip(*pair)
print(names)
print(marks)
#('jack', 'inaam', 'Anna ', 'John')
#(50, 80, 70, 35)


```

14. Type conversion of items in an iterable using map function

```python
strings = ("1","2","3","4","5","6","7","8")
print(tuple(map(int, strings)))
# (1, 2, 3, 4, 5, 6, 7, 8)

```

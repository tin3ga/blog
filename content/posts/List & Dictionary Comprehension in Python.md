---
title: "List & Dictionary Comprehension in Python"
date: 2023-09-08T12:02:19+03:00
tags: ["python", "list comprehension","dictionary comprehension"]
weight: 130
draft: false
---

## List Comprehension
Python lists are a fundamental data structure for storing and managing data collections. Lists are adaptable, flexible, and may store a variety of data kinds, including integers, strings, and even other lists.
List comprehension lets you make a new list by applying an expression to each item in an existing iterable (such as a list, tuple, or range) and optionally filtering the items depending on a condition. List comprehensions are a more compact and readable means of creating lists than typical for loops.
As an example, suppose we want to create a new list of even numbers from a list of random numbers.

```
numbers = [84, 77, 50, 89, 33, 36, 59, 31, 76, 1, 20, 58, 59, 93, 70, 28, 51, 7, 48, 74]

```
Using a for loop 

```
even_numbers = []

for number in numbers:
    if number % 2 == 0:
        even_numbers.append(number)
```

Using list comprehension

```
even_numbers = [num for num in numbers if num % 2 == 0]
```

**the syntax for list comprehension is :**

```
list = [new_item for item in some_list if conditional_statement]
```

## Dictionary Comprehension
Dictionaries in Python are a versatile data structure that may be used to store and manage collections of key-value pairs. 
Dictionary comprehension is a simple and effective method for creating dictionaries in Python. You can create dictionaries by specifying key-value pairs based on an expression and an iterable. Dictionary comprehensions are a logical extension of list comprehensions and a useful feature for easily generating dictionaries without the use of explicit loops.

suppose we have a dictionary of cars and year of manufacture, and we want to create a dictionary of  recently manufactured ones
```
car_dictionary = {
    "Tesla Model 3": 2020,
    "Toyota Camry": 2022,
    "Ford Mustang": 2021,
    "Honda Civic": 2023,
    "Chevrolet Silverado": 2019
}

```

using a for loop
```
recently_manufactured = {}

for (car,year) in car_dictionary.items():
    if year > 2021:
        recently_manufactured[car] = year

```

using dictionary comprehension
```
recently_manufactured = {car:year for (car, year) in car_dictionary.items() if year > 2021}
```

**the syntax for dictionary comprehension is:**
```
dictionary = [new_key:new_value for (key, value) in some_dict.items() if conditional_statement]
```






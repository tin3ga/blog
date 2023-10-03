---
title: "Combine Iterables Together Using Zip Function"
date: 2023-10-03T12:05:16+03:00
tags: ["python", "lists","zip function"]
weight: 150
draft: false
---
## Introduction

The `zip()` function in Python is a built-in function that allows you to combine two or more iterables (such as lists, tuples, or other sequences) element-wise. It creates an iterator that generates tuples, where each tuple contains one element from each of the input iterables. The resulting iterator stops when the shortest input iterable is exhausted. This is particularly useful when you want to work with multiple sequences simultaneously.

syntax:

```
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']

for item in zip(list1, list2):
    print(item)


output is a tuple containing elements from the two lists:

(1, 'a')
(2, 'b')
(3, 'c')


```

Suppose we have two lists and we need to combine the content in each using a for loop.

```
movies = ['Godfather', 'DieHard', 'Casablanca', 'Mad Max: Fury Road', 'Heat']

year = [1997, 1988, 1942, 2015, 1995 ]
```

using range and count variable:

![](https://res.cloudinary.com/tinegadev/image/upload/v1696325532/zip_function/alc7wmjkdak0cebnba7p.png)

However if one list is shorter we get an index error
![](https://res.cloudinary.com/tinegadev/image/upload/v1696325506/zip_function/ccjn2pdc0v27oilsvkfy.png)

Using the zip function by default stops when the shortest input iterable is exhausted.

![](https://res.cloudinary.com/tinegadev/image/upload/v1696325599/zip_function/jljnikdgrklkd0nvzmy1.png)
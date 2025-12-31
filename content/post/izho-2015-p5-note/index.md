---
title: On Problem 5 of IZhO 2015
summary: We give an alternative solution to the problem.
date: 2025-12-30
math: true
authors:
  - admin
tags:
  - Combinatorics
  - Set theory
  - Bijections
---

## Introduction

Greetings, dear reader!

Today

## The problem

{{< problem "IZho 2015, P5" >}}
Let $A_n$ be the set of partitions of the sequence $1,2,\ldots,n$ into several subsequences such that every two neighbouring terms of each subsequence have different parity, and $B_n$ the set of partitions of the sequence $1,2,\ldots,n$ into several subsequences such that all the terms of each subsequence have the same parity (for example, the partition $\{(1,4,5,8),(2,3),(6,9),(7)\}$ is an element of $A_9$, and the partition $\{(1,3,5),(2,4),(6)\}$ is an element of $B_6$).

Prove that for every positive integer $n$ the sets $A_n$ and $B_{n+1}$ contain the same number of elements.

{{< /problem >}}

It might just be me, but the statement seems unnecessarily complicated (and on a funnier note, the notation in the first example looks a bit like a set of cycles in the ninth alternating group). Anyhow, I encourage you to try solving it on your own before looking at any solutions, as the problem admits several beautiful and intuitive methods, and you might even discover a new one yourself.

{{< solution >}}
Since we aim to prove that two sets have the same number of elements, it is natural to attempt to construct a bijection from one to the other.

Firstly, we consider the subsequences as sets, and display their elements in increasing order for all purposes (see below).

Consider a partition of $A_n$ for some positive integer $n$. We represent it through a grid with the columns being different sets and the following important note: the parity of the elements in the $i^{\text{th}}$ row must be the same as that of $i$ itself (row $1$ contains odd elements, row $2$ even, and so on).

For instance, the partition $(1,4,5,8),(2,3),(6,9),(7)$ from the problem statement can be arranged as in the grid below.

| Subsequence 1 | Subsequence 2 | Subsequence 3 | Subsequence 4 |
|:-------------:|:-------------:|:-------------:|:-------------:|
| 1 | &nbsp; | &nbsp; | 7 |
| 4 | 2 | 6 | &nbsp; |
| 5 | 3 | 9 | &nbsp; |
| 8 | &nbsp; | &nbsp; | &nbsp; |



{{< /solution >}}
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

### The Bijection: From $B_{n+1}$ to $A_n$

We construct a bijection $\phi: B_{n+1} \to A_n$ as follows. Given a partition $\pi \in B_{n+1}$, we perform the following steps:

**Step 1:** Locate the element $n+1$ in partition $\pi$. Since $n+1$ has opposite parity to $n$, it lies in some subsequence with other numbers of the same parity. Let $S = (s_1, s_2, \ldots, s_k, n+1)$ be this subsequence (written in increasing order).

**Step 2:** Remove $n+1$ from the partition to obtain a partition $\pi'$ of $\{1, 2, \ldots, n\}$. Separate the subsequences of $\pi'$ into two groups:
- **Odd subsequences**: $O_1, O_2, \ldots, O_a$ (sorted by largest element in descending order)
- **Even subsequences**: $E_1, E_2, \ldots, E_b$ (sorted by largest element in descending order)

**Step 3:** The position of $n+1$ in $S$ encodes crucial information. Specifically, if $n+1$ is at position $k+1$ (the $(k+1)$-th element of $S$), then the first $k$ elements of $S$ come from one parity class. Use this position to define a "weaving pattern":
- Initialize $a_1, a_2, \ldots$ as indices for odd subsequences and $e_1, e_2, \ldots$ as indices for even subsequences
- Based on whether $n$ is even or odd, and the position $k+1$, alternate between taking elements from the odd and even subsequences, building new subsequences that satisfy the alternating parity constraint

**Step 4:** The result is a partition in $A_n$ where consecutive elements in each subsequence have opposite parities.

### Example: Reversing the Grid

Consider the partition in $B_{10}$: $\pi = \{(1,3,5,7,9,10), (2,4), (6,8)\}$

- Element $10$ (even) is in the subsequence $(1,3,5,7,9,10)$ at position $6$
- Removing $10$: $\pi' = \{(1,3,5,7,9), (2,4), (6,8)\}$
- Odd subsequences (by largest): $O_1 = (1,3,5,7,9)$
- Even subsequences (by largest): $E_1 = (2,4)$, $E_2 = (6,8)$
- Since $10$ was at position $6$ (the end of the odd subsequence), we interleave by alternating: take from odd, then even, then odd, etc.

Starting from the largest elements and building downward:
- Take $9$ (odd), then nothing matching from even of that level... 

Actually, the simplest bijection works this way: the **position of $n+1$ determines the pairing**. If $n+1$ is in position $j$ within its uniform-parity subsequence (after removing it), then:
- Take the $j$-th largest element from each odd subsequence
- Take the $j$-th largest element from the corresponding even subsequence
- Pair them into a single alternating subsequence

This uniquely reconstructs the $A_n$ partition, and the map is invertible.

{{< /solution >}}
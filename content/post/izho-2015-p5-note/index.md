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

### What the grid is really encoding (intuition)

The grid is just a convenient way to remember the only condition defining $A_n$: inside each column, consecutive entries come from consecutive rows, hence they must have opposite parity.

So each column comes with a list of “vertical adjacencies” (pairs of neighbours in that column). The bijection will act on those adjacencies.

The trick is very simple:

- If $a$ and $b$ have opposite parity, then $a$ and $b+1$ have the same parity.

Thus, if we take every vertical adjacency $a$ (above) / $b$ (below) in the grid and replace it by an adjacency between $a$ and $b+1$, then columns stop being alternating and become monochromatic (all-odd or all-even). The extra point $n+1$ is needed only because the bottom element in some adjacency could be $n$, and we must be allowed to send it to $n+1$.

You can literally see this as taking each vertical edge in the grid and “sliding” its lower endpoint one step to the right on the number line.

### Example (the grid above)

From the grid we read the vertical arrows (one per vertical adjacency):
$$1\to 4,\; 4\to 5,\; 5\to 8,\; 2\to 3,\; 6\to 9.$$
Now shift the lower endpoint of each arrow by $+1$:
$$1\to 5,\; 4\to 6,\; 5\to 9,\; 2\to 4,\; 6\to 10.$$
Following these arrows gives the monochromatic subsequences
$$ (1,5,9),\quad (2,4,6,10),\quad (3),\quad (7),\quad (8),$$
which is an element of $B_{10}$.

### Step 1: Turn the grid into arrows

Given such a grid, connect every entry to the entry immediately below it in the same column (whenever such an entry exists). In other words, if a column is
$$x_1 < x_2 < \cdots < x_k,$$
we draw the arrows
$$x_1 \to x_2,\; x_2 \to x_3,\;\ldots,\; x_{k-1} \to x_k.$$
This produces a directed graph on $\{1,2,\ldots,n\}$ which is a disjoint union of directed paths.

### Step 2: Shift the arrow heads by $+1$

Define a map $\Phi: A_n \to B_{n+1}$ as follows.

Start with the vertex set $\{1,2,\ldots,n+1\}$, and for every arrow $a \to b$ coming from Step 1, draw instead the arrow
$$a \to (b+1).$$

If you prefer to think directly on the grid: this operation keeps each entry $a$ in place, but it “pushes” the entry immediately below it from $b$ to $b+1$. When you do this everywhere, equal numbers may appear (coming from different columns); in that case the corresponding columns are glued together. The glued columns are exactly the monochromatic subsequences in the image.

Now take the directed paths of this new arrow diagram; each path gives a subsequence (read in the direction of the arrows), and isolated vertices give singleton subsequences. This is the element $\Phi(\pi)$ of $B_{n+1}$.

Why is this in $B_{n+1}$? In $A_n$ every arrow $a\to b$ connects opposite parities. Therefore $a$ and $b+1$ have the same parity, so every path in the new diagram consists entirely of odd numbers or entirely of even numbers.

Why is it still a disjoint union of paths? In the original diagram, each vertex has outdegree $\le 1$ and indegree $\le 1$. After the transformation $a\to b \mapsto a\to(b+1)$, outdegrees stay the same, and indegrees also stay $\le 1$ because no vertex $b$ can be the head of two different arrows in the original diagram.

### Step 3: The inverse map

Given a partition in $B_{n+1}$, draw arrows between consecutive elements in each subsequence (so arrows connect same parity). Then replace each arrow
$$a \to c$$
by
$$a \to (c-1),$$
and finally delete the vertex $n+1$ if it appears.

Since $a$ and $c$ have the same parity, $a$ and $c-1$ have opposite parity, so the resulting paths correspond to an element of $A_n$.

It is immediate that these two procedures undo each other (one shifts arrow heads by $+1$, the other shifts them back by $-1$), hence $\Phi$ is a bijection. Therefore $|A_n| = |B_{n+1}|$.

{{< /solution >}}

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

Hello, dear reader!

Today

## The problem

{{< problem >}}
Let $A_n$ be the set of partitions of the sequence $1,2,\ldots,n$ into several subsequences such that every two neighbouring terms of each subsequence have different parity, and $B_n$ the set of partitions of the sequence $1,2,\ldots,n$ into several subsequences such that all the terms of each subsequence have the same parity (for example, the partition $\{(1,4,5,8),(2,3),(6,9),(7)\}$ is an element of $A_9$, and the partition $\{(1,3,5),(2,4),(6)\}$ is an element of $B_6$).
{{< /problem >}}

{{< solution >}}
Let $\mathcal{F}\subseteq\mathscr{P}(n)$ be a family of sets such that for any $A,B\in\mathcal{F}$ we have $A\cup B\in\mathcal{F}$. Then
$$
\max_{i\in[n]}\tilde d_i\geq\frac{1}{2}\text{.}
$$
{{< /solution >}}
---
title: A note regarding the union-closed sets conjecture
summary: We present an upper bound on average set size using double counting.
date: 2025-08-13
math: true
authors:
  - admin
tags:
  - Research note
  - Set theory
  - Union-closed sets conjecture
  - Extremal set theory
image:
  caption: 'Embed rich media such as videos and LaTeX math'
---

## Introduction

The union-closed sets conjecture is a famous open problem in set theory.

A family of sets is said to be _union-closed_ if the union of any two sets from the family belongs to it.

{{< conjecture "Frankl, 1979" >}}
For every union-closed family containing a non-empty set there exists an element that belongs to at least half of the sets in the family.
{{< /conjecture >}}

Let's switch to formal notation. Let $\mathcal{F}\subseteq\mathscr{P}(n)$ be a family of subsets of $[n]=\{1,2,\ldots,n\}$ and denote $m=|\mathcal{F}|$. For each $x\in[n]$ define the _degree_ of $x$ in $\mathcal{F}$ as the number of sets containing $x$:
$$
d_x:=|\{i\in[m]:x\in F_i\}|
$$
and the _normalized degree_ as $\tilde d_x=\frac{d_x}{m}$.

We can now reformulate the union-closed sets conjecture and state it using the introduced terminology.

{{< conjecture >}}
Let $\mathcal{F}\subseteq\mathscr{P}(n)$ be a family of sets such that for any $A,B\in\mathcal{F}$ we have $A\cup B\in\mathcal{F}$. Then
$$
\max_{i\in[n]}\tilde d_i\geq\frac{1}{2}\text{.}
$$
{{< /conjecture >}}

A recent development has been the proof of $\max_{i\in[n]}\tilde d_i\geq c$ for the constant $c=0.01$ (see the video below for an explanation from the author of the paper, [arXiv:2211.09055v2](https://arxiv.org/abs/2211.09055v2)), later improved to $c\approx0.3823455$ ([arXiv:2212.12500v2](https://arxiv.org/abs/2212.12500v2)). This approach looks very promising.

{{< youtube veMx-r1iQpY >}}

## Main result

We aim to establish a necessary condition under the assumption that Frankl's conjecture is false. While this condition is not strong enough to prove the conjecture and is weaker than [Reimer's average set size theorem](https://www.semanticscholar.org/paper/An-Average-Set-Size-Theorem-Reimer/8bd3cddbc4e5d2f4050c299132cba5fa571502b4?utm_source=direct_link) -- in fact, it does not even rely on union-closedness -- the method of proof is elegant.

Define the _pair count_ of $x$ as
$$
p_x:=|\{(A,B)\in\mathcal{F}\times\mathcal{F}:x\in A\cup B\}|
$$
and the _normalized pair count_ as $\tilde p_x=\frac{p_x}{m^2}$.

{{< lemma >}}
$\tilde p_x=2\tilde d_x-\tilde d_x^2$.
{{< /lemma >}}

{{< spoiler text="Proof" >}}
The sum of two even numbers is even.
{{< /spoiler >}}

Define the average set size
$$
S:=\frac{1}{m}\sum_{F\in\mathcal{F}}|F|=\sum_{i=1}^n\tilde d_i\text{.}
$$

{{< proposition >}}
If $\tilde d_i<\frac{1}{2}$ for every $i\in[n]$, then $S<\frac{n}{2}$.
{{< /proposition >}}

{{< proof >}}
The sum of two even numbers is even.
{{< /proof >}}

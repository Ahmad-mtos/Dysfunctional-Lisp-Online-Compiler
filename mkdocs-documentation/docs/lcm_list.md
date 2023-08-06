# LCM Over a List

In this project we will build a code that, given a list of numbers, outputs their LCM (Least common multiple).

## Factorize

Let's start with a simple function that factorizes a number.

```no
(func factorize (num)
    (return '())
)
```

> (read: [func](../syntax_abstract/), [return](../special_forms/#return))

In the simple code above, we have defined a function called *factorize* which takes one argument, and returns a list (currently empty).

Now let's iterate over numbers from 2 to num, and whenever we find a number that divides num, we update num and add the number to the list of factors.

```no
(func factorize (num)
    (setq i 2)
    (setq ret '())
    (while (lesseq i num)
        (while (equal (mod num i) 0)
            (setq ret (cons i ret))
            (setq num (divide num i))
        )
        (setq i (plus i 1))
    )
    (return ret)
)
```

> (read: [while](../special_forms/#while), [setq](../special_forms/#setq), [lesseq](../predefined_functions/#lesseq), [equal](../predefined_functions/#equal), [cons](../predefined_functions/#cons), [divide](../predefined_functions/#divide), [plus](../predefined_functions/#plus))

let's dissect the previous code

```no
(setq i 2)
(setq ret '())
```

here we simply defined two variables *i* and *ret* and given them the initial values 2 and '() respectivly.

```no
(while (lesseq i num)
    .
    .
    .
    (setq i (plus i 1))
)
```

This part is a while loop that runs as long as *i <= num*, and in each iteration we are incrementing i by 1.

```no
(while (equal (mod num i) 0)
    (setq ret (cons i ret))
    (setq num (divide num i))
)
```

This part is a while loop that runs as long as *num % i == 0*, meaning *i* is a factor of num. The first statement in the body is pushing this value *i* to the list *ret* of factors, then dividing num by that factor to make sure we only accuire prime factors.

```no
    (return ret)
```

Finally we return the resulting list of factors.

Now let's test out our function, to do so, we need the entry point of the DL programming languge [prog](../special_forms/#prog).

```no
(prog (num)
    (return (factorize num))
)
```

Try all the above out in the editor, you can see the following results of differnet inputs:

- num: 28, output: '( 7 2 2 )
- num: 27, output: '( 3 3 3 )
- num: 28135,output: '( 331 17 5 )

## PrimitiveGCD

The algorithm we are gonna follow to calculate the GCD using prime factorizations, that is, the GCD of two numbers is the product of their shared factors raised to the smaller power.

Since the factorize function we've done above returns a sorted list of the prime factors, we can use that property to do a two-pointer algorithm.

Let's say we are calculating the GCD of *a* and *b*, having the factorized lists *lst1* and *lst2* respectivly. Initially, both pointers, say *x* and *y*, will point to the head of each list, we then will face 3 possibilities:

- *x > y*: we need to pop the head of lst1 and continue.
- *y < x*: we need to pop the head of lst2 and continue.
- *x == y*: we will multiply either value with the result.

```no
(func primitiveGCD (a b)
    (setq lst1 (factorize a))
    (setq lst2 (factorize b))
    (setq ans 1)
    (while true
        (cond (isempty lst1) (break))
        (cond (isempty lst2) (break))
        (setq x (head lst1))
        (setq y (head lst2))
        (while (less x y)
            (setq lst2 (tail lst2))
            (cond (isempty lst2) (break))
            (setq y (head lst2))
        )
        (cond (isempty lst2) (break))
        (cond (equal x y)
            (setq ans (times ans x))
        )
        (cond (equal x y)
            (setq lst2 (tail lst2))
        )
        (setq lst1 (tail lst1))
    )
    (return ans)
)
```

> (read: [cond](../special_forms/#cond), [break](../special_forms/#break), [head](../predefined_functions/#head), [tail](../predefined_functions/#tail), [isempty](../predefined_functions/#isempty), [less](../predefined_functions/#less), [times](../predefined_functions/#times))

Let's test out this function in the editor:

```no
(prog (a b)
    (return (primitiveGCD a b))
    //(return (factorize num))
)
```

- a: 8, b:4, output: 4
- a: 64, b:96, output: 32
- a: 2280, b:26480, output: 40


## LCM

Now that we've calculated the GCD, we can easily calculate the LCM using the formula: *LCM(a, b) = (a * b) / GCD(a, b)*

```no
(func LCM (a b)
    (return (divide (times a b) (primitiveGCD a b)))
)
```

> (read: [divide](../predefined_functions/#divide))

But with this we can only calculate the LCM of two number, what if we wanted to calculate it for more numbers? Let's now do a function that calculates the LCM of a given list.

```no
(func listLCM (lst)
    (setq ans 1)
    (while (not (isempty lst))
        (setq ans (LCM ans (head lst)))
        (setq lst (tail lst))
    )
    (return ans)
)
```

Here we are simply looping over the list and updating the LCM with the current head of the list.

Let's test out this function in the editor:

```no
(prog (lst)
    (return (listLCM lst))
    //(return (primitiveGCD a b))
    //(return (factorize num))
)
```

- lst: '(1 2 3 4 5 6), output: 60
- lst: '(3 3 6 9), output: 18

## GCD alternative 

To avoid the factorization process which might take a lot of time, we can use the Euclidean algorithm to calculate the GCD of two numbers.

```no
(func GCD (a b)
    (cond (equal b 0) (return a))
    (return (GCD b (mod a b)))
)
```


# Special Forms

Special Forms are lists that have special meanings. They start with a keyword that depicts the structure of the list and sets the behavior of it.

## prog 

```no
(prog Params Body)
```

### Defenition

This special form acts as an entry point to your program, it's like the 'main' function in many programming langugages. 

The Params parameter is a list of atoms. This parameter in the *prog* represents the input that's going to be taken from the user.

The Body parameter of the form is considered as the body of the function, containing a list of elements, which represent the sequence of statements that are going to be evaluated.

The *prog* form should always be included in any program, and it should always be the last element in it.

```Returns: The evaluation of the last statement inside its body, or the value returned from a 'return' form.```

### Examples

```no
(prog (a b)
    (plus a b)
)
```

this is a program that asks for 2 inputs, *a* and *b*, then returns their sum using the predefined function *plus*.

```no
(prog (a b)
    (minus a b)
    (plus a b)
)
```

This code behaves the same as the previous one, since the last statment is the *plus* function.

## func

```no
(func Atom Params Body)
```

### Defenition

This special form introduces a new user-defined function.

The Atom parameter becomes the name of the function. 

The Params paremeter should contain a number of atoms that represent the function parameters.

The Body parameter of the form is considered as the body of the function, containing a list of elements, which represent the sequence of statements that are going to be evaluated.

```Returns: The evaluation of the last statement inside its body, or the value returned from a 'return' form.```    

### Examples

```no
(func sum3 (a b c)
    (plus (plus a b) c)
)

(prog ()
    (sum3 1 2 3)
)
```
returns: 6

In this code we can see how we first define a new function called *sum3* that takes 3 parameters, and returns the sum of them, then we call that function inside the *prog* form. 

Notice how the parameters are spread and not in a list when calling the *sum3* function.

## quote

```no
(quote List)
```

or

```no
`List
```

### Defenition

Any list is supposed to be a special form or starts with a predicate or user-defined function, expect if it was quoted, then it can contain other kinds of data.

The main purpose of the *quote* form is to be able to create lists of numbers or other data, which can be manipulated using the **lists predefined functions**.

To evaluate a quoted list, we can simply use the special form *eval*. The contents of the quoted list should fall under the main rule of lists.

```Returns: its argument without evaluating it. The meaning of the function is to prevent evaluating its argument.```

### Examples

```no
(prog ()
    (head '(1 2 3))
)
```

Returns: 1

```no
(prog ()
    (tail (quote (1 2 3)))
)
```

Returns: '(2 3) 

(or in other words, (quote (2 3)))  

## setq

```no
(setq Atom Element)
```

### Defenition

This special form assigns a new value to a variable, or defines the variable if it hasn't been defined before.

The Atom parameter becomes the name of the variable.

The Element paremeter gets evaluated, and the value it returns is assigned to the variable.

```Returns: null```

### Examples

```no
(prog ()
    (setq x 5)
    (setq x (plus 10 5))
)
```

In this code first we define the variable *x* with the value 5, then we assign it a new value which is `(plus 10 5)`, which gets evaluated first and then assigned to *x*, which will finally hold the value of 15. 

## cond

```no
(cond Element Element [Element])
```

### Defenition

This special form represents the conditional statement in Dysfunctional Lisp.

The first Element parameter represents the condition statement. After evaluation it should hold a boolean value.

The second Element parameter which is going to be evaluated in case the condition statement returned *true*.

The third Element parameter is an optional parameter which is going to be evaluated in case the condition statement returned *false*.

```Returns: The evaluation of the second element if the condition was true, or the evaluation of the third element if the condition was false, or null in the absence of the third element.```

### Examples

```no
(prog (flag a b) 
    (cond (greater flag 5) (plus a b) (minus a b))
)
```

This code requires 3 inputs, if the first input was greater than 5, then it returns *a + b*, otherwise it returns *a - b*.

## while

```no
(while Element Body)
```

### Defenition

This is the only form capable of looping (aside from recursion) in Dysfunctional Lisp. 

The Element parameter represents the condition in which the *while* form will keep looping as long as its evaluation is *true*.

The Body parameter represents the body of the *while* form, which is a sequence of elements that are going to be evaluated in each repetetion.

```Returns: null```

### Examples

```no
(prog ()
    (setq i 1)
    (setq sum 0)
    (while (lesseq i 10)
        (setq sum (plus sum i))
        (setq i (plus i 1))
    )
    (return sum)
)
```

Returns: 45

This is a simple code where we sum the numbers from 1 to 10.

## lambda

```no
(lambda Params Body)
```

### Defenition

This special form represents a lambda function, at current stage of Dysfunctional Lisp, lambda functions are only used as callback functions, as we will see in the examples.

The Params parameter represents the parameters of the lambda function.

The Body parameter is considered as the body of the lambda function, containing a list of elements, which represent the sequence of statements that are going to be evaluated.

```Returns: The evaluation of the last statement inside its body, or the value returned from a 'return' form.```

### Examples

```no
(func map (lst f)
    (cond (isempty lst) (return '()))
    (cons (f (head lst)) (map (tail lst) f))
)

(prog ()
    (setq lst '(1 2 3 4))
    (map lst (lambda (a) (times a a)))
)
```

Returns: ```'(1 4 9 16)```

## return

```no
(return Element)
```

### Defenition

This special form makes sense within a form that defines a local context (*func*, *lambda*
or *prog*). It evaluates its argument and interrupts the execution of the nearest
enclosing form with the context.

The Element parameter gets evaluated and returned.

```Returns: The Evaluation of its argument```

### Examples

```no
(prog ()
    (return 5)
    10
)
```

Returns: 5

## break

```no
(break)
```

### Defenition

The special form makes sense within a *while* form. It unconditionally interrupts the
execution of the nearest *while* form.

```Returns: null```

### Examples

```no
(prog ()
    (setq i 0)
    (while true
        (cond (greatereq i 10) (break))
        (setq i (plus i 1))
    )
    (return i)
)
```

Returns: 10
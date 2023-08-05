# Grammar

In the following image, you can see the grammar of Dysfunctional Lisp. We will use the following terminology throghout the docs.

![Grammar](https://i.ibb.co/N2h7LM4/photo-2023-08-03-18-48-24.jpg)

## Program

As we mentioned in the previous page, DL programs are a sequence of function declarations. But more precisely it's a sequence of one or more Elements.

## Body

This non-terminal is used as the body of various special forms, namely (prog, func, lambda, while). 

Because it's constructed of multiple elements, it allows *sequencing*. meaning the evaluation of the previously mentioned special forms that use the Body non-terminal isn't restrained by a single element/statement. 

The evaluation of such forms is the evaluation of the last element, except if one of the elements included the special form *return*, then the evaluation of that element will be the overall evaluation.

## Params

A sequence of zero or more elements separated by whitespaces and enclosed by parentheses.

This non-terminal is used as the parameter list of various special forms, namely (prog, func, lambda).

What sets this non-terminal apart from normal lists is that first it has the possibility of being empty, second it only includes atoms.


## Element

An abstraction that represents either a list, an atom, or a literal.

## List

A sequence of one or more elements separated by whitespaces and enclosed by parentheses.

## Atom

An Atom non-terminal is either a terminal atom, which have the usual syntax of identifiers which evaluates to a value of a literal, or a list. Or a keyword, which is a reserved word by the language.

## Literal

Either an integer, a real, a boolean, or a null.

## Real

Two integers seperated by a dot.

## Boolean

Either true or false.
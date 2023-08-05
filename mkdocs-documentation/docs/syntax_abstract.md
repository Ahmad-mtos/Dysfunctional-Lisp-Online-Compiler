# Abstract 

Dysfunctional Lisp programs consist of a sequence of function declarations, with one of them serving as the entry point to the program, referred to as "prog." The language defines three types of entities:

- Literals: Explicitly written values such as integers, real numbers, booleans, and null values.
- Atoms: These can be viewed as variables in conventional programming languages. They follow the syntax rules for identifiers and can hold values that are either literals or functions.
- Lists: Sequences of elements enclosed by parentheses and separated by whitespace.

Program execution begins with the very last element of the program, which is a special form known as "prog." Each element is evaluated according to its specific semantics. If an element is an atom, its value is simply returned by the interpreter. If an element is a list, it is treated as a function call, where the first element represents the function name and the remaining elements are considered arguments for the call.

Certain lists have special meanings and are referred to as Special Forms. Special forms are evaluated differently, as described in the subsequent section. The special form lists begin with keywords.

In addition to the language's core features, Dysfunctional Lisp provides a multitude of Predefined Functions that can be utilized. Some of these include: Arithmetic functions, Operations on lists, Comparison functions, Predicates, Logical operators.
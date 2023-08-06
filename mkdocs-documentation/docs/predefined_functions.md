# Predefined Functions

Predefined Functions are designed to execute specific actions on their provided arguments and subsequently yield an Element as a result. These functions are categorized into six distinct types:

- Arithmetic Functions: plus, minus, times, divide, mod.
- Lists Functions: head, tail, cons, isempty.
- Comparison Functions: equal, nonequal, less, lesseq, greater, greatereq.
- Predicate Functions: isint, isreal, isbool, isnull.
- Logical Functions: and, or, xor, not.
- Evaluation Functions: eval.

## Arithmetic Functions

Arithmetic Functions are essential operations that perform mathematical calculations on numerical inputs. They return results based on the input data types, either as Integers or Real numbers. 

### plus

```
(plus param1 param2)
```

#### Definition

The **plus** function is designed to perform addition on two parameters and return their sum. Both parameters are expected to evaluate as either an Integer or a Real. If at least one of the parameters is evaluated as a Real, the function will yield a Real as the result. Otherwise, if both parameters are Integers, the function will return an Integer as the result.

#### Examples

```
(plus 3 4) // returns 7
(plus (plus 1 5) -1) // returns 5
(plus 1 1.0) // returns 2.000000
```

### minus

```
(minus param1 param2)
```

#### Definition

The **minus** function is designed to perform subtraction on two parameters and return the result of subtraction param2 from param1. Both parameters are expected to evaluate as either an Integer or a Real. If at least one of the parameters is evaluated as a Real, the function will yield a Real as the result. Otherwise, if both parameters are Integers, the function will return an Integer as the result.

#### Examples

```
(minus 3 4) // returns -1
(minus (plus 1 5) -1) // returns 7
(minus 1 1.0) // returns 0.000000
```

### times

```
(times param1 param2)
```

#### Definition

The **times** function is designed to perform multiplication on two parameters and return their product. Both parameters are expected to evaluate as either an Integer or a Real. If at least one of the parameters is evaluated as a Real, the function will yield a Real as the result. Otherwise, if both parameters are Integers, the function will return an Integer as the result.

#### Examples

```
(times 3 4) // returns 12
(times (plus 1 5) -1) // returns -5
(times 1 1.0) // returns 1.000000
```

### divide

```
(divide param1 param2)
```

#### Definition

The **divide** function is designed to perform division on two parameters and return the result of dividing param1 on param2. Both parameters are expected to evaluate as either an Integer or a Real. If at least one of the parameters is evaluated as a Real, the function will yield a Real as the result. Otherwise, if both parameters are Integers, the function will return the result rounded down to the nearest Integer.

#### Examples

```
(divide 5 2) // returns 2
(divide (plus 1 5) -1) // returns -5
(divide 1 1.0) // returns 1.000000
```

### mod

```
(mod param1 param2)
```

#### Definition

The **mod** function is designed to perform division on two parameters and return the remaining of dividing param1 on param2. Both parameters are expected to evaluate as Integer. The function will return the result as an Integer.

#### Examples

```
(mod 5 2) // returns 1
(mod (plus 1 5) -1) // returns 0
(mod 1 1.0) // error
```

## List Functions

List Functions are essential operations for manipulating lists, enabling various actions on list elements.

### head

```
(head param1)
```

#### Definition

The "head" function takes a single parameter that should evaluate to a **quoted** list. The function returns the first element of the list.

#### Examples

```
(head '(1 2 3)) // returns 1
(head (cons 3 (cons 2 (cons 1 '())))) // returns 3
(head '()) // error
```

### tail

```
(tail param1)
```

#### Definition

The "tail" function takes a single parameter that should evaluate to a **quoted** list. The function returns a **quoted** list with all elements of the list except the first one.

#### Examples

```
(tail '(1 2 3)) // returns '(2 3)
(tail (cons 3 (cons 2 (cons 1 '())))) // returns '(2 1)
(tail '()) // error
```

### cons

```
(cons param1 param2)
```

#### Definition

The "cons" function requires two parameters. The first parameter should evaluate to an Element, while the second parameter should evaluate to a **quoted** list. The function returns a new **quoted** list with the first parameter as its first element.

#### Examples

```
(cons 1 '()) // returns '(1)
(cons '(1) '(2 '(3))) // returns '('(1)2'(3))
(cons 1 2) // error
```

### isempty

```
(isempty param1)
```

#### Definition

The "isempty" function takes a single parameter. The parameter should evaluate to a **quoted** list. The function returns a Boolean denoting if the parameter list is empty.

#### Examples

```
(isempty '()) // true
(isempty '('())) // false
```

## Comparison Functions

Comparison Functions are essential operations for evaluating Literal values. These functions take two parameters, both of which should evaluate to a Literal of the same type, and returns a Boolean.

### equal

```
(equal param1 param2)
```

#### Definition

The "equal" function requires two parameters. Both parameters evaluate to Literals of the same type. The function returns a Boolean, indicating whether the parameters are equal.

#### Examples

```
(equal 1 2) // returns false
(equal 1.0 1.0) // returns true
(equal null null ) // return true
(equal 1 1.0) // error
```

### nonequal

```
(nonequal param1 param2)
```

#### Definition

The "nonequal" function requires two parameters. Both parameters evaluate to Literals of the same type. The function returns a Boolean, indicating whether the parameters are nonequal.

#### Examples

```
(nonequal 1 2) // returns true
(nonequal 1.0 1.0) // returns false
(nonequal null null ) // return false
(nonequal 1 1.0) // error
```

### less

```
(less param1 param2)
```

#### Definition

The "less" function requires two parameters. Both parameters evaluate to Literals of the same type. The function returns a Boolean, indicating whether the first parameter is less than the second parameter.

#### Examples

```
(less 1 2) // returns true
(less false true) // returns true
(less null null) // return false
(less 1 1.0) // error
```

### lesseq

```
(lesseq param1 param2)
```

#### Definition

The "lesseq" function requires two parameters. Both parameters evaluate to Literals of the same type. The function returns a Boolean, indicating whether the first parameter is less than or equal to the second parameter.

#### Examples

```
(lesseq 1 2) // returns true
(lesseq false true) // returns true
(lesseq null null) // return true
(lesseq 1 1.0) // error
```

### greater

```
(greater param1 param2)
```

#### Definition

The "greater" function requires two parameters. Both parameters evaluate to Literals of the same type. The function returns a Boolean, indicating whether the first parameter is greater than the second parameter.

#### Examples

```
(greater 1 2) // returns false
(greater false true) // returns false
(greater null null) // return false
(greater 1 1.0) // error
```

### greatereq

```
(greatereq param1 param2)
```

#### Definition

The "greatereq" function requires two parameters. Both parameters evaluate to Literals of the same type. The function returns a Boolean, indicating whether the first parameter is greater than or equal to the second parameter.

#### Examples

```
(greatereq 1 2) // returns false
(greatereq false true) // returns false
(greatereq null null) // return true
(greatereq 1 1.0) // error
```

## Predicate Functions

Predicate Functions are essential operations for evaluating the type of a Literal. These functions take one parameter and returns a Boolean.

### isint

```
(isint param1)
```

#### Definition

the "isint" function require a single parameter. The function will return True if the parameter evaluates to an Integer.

#### Examples

```
(isint 1) // returns true
(isint 1.0) // returns false
(isint true) // returns false
(isint null) // returns false
```

### isreal

```
(isreal param1)
```

#### Definition

the "isreal" function require a single parameter. The function will return True if the parameter evaluates to a Real.

#### Examples

```
(isreal 1) // returns false
(isreal 1.0) // returns true
(isreal true) // returns false
(isreal null) // returns false
```

### isbool

```
(isbool param1)
```

#### Definition

the "isbool" function require a single parameter. The function will return True if the parameter evaluates to a Boolean.

#### Examples

```
(isbool 1) // returns false
(isbool 1.0) // returns false
(isbool true) // returns true
(isbool null) // returns false
```

### isnull

```
(isnull param1)
```

#### Definition

the "isnull" function require a single parameter. The function will return True if the parameter evaluates to a null.

#### Examples

```
(isnull 1) // returns false
(isnull 1.0) // returns false
(isnull true) // returns false
(isnull null) // returns true
```

## Logical Functions

Logical Functions are essential operations for Booleans. These functions take parameters, which should evaluate to a Boolean, and returns a Boolean.

### and

```
(and param1 param2)
```

#### Definition

The "and" function requires two parameters, both parameters should evaluate to a Boolean. The function returns a Boolean denoting the result of the "and" operation on the parameters.

#### Examples

```
(and true true) // returns true
(and true false) // returns false
(and true 1) // error
```

### or

```
(or param1 param2)
```

#### Definition

The "or" function requires two parameters, both parameters should evaluate to a Boolean. The function returns a Boolean denoting the result of the "or" operation on the parameters.

#### Examples

```
(or true true) // returns true
(or true false) // returns true
(or true 1) // error
```

### xor

```
(xor param1 param2)
```

#### Definition

The "xor" function requires two parameters, both parameters should evaluate to a Boolean. The function returns a Boolean denoting the result of the "xor" operation on the parameters.

#### Examples

```
(xor true true) // returns false
(xor true false) // returns true
(xor true 1) // error
```

### not

```
(not param1 param2)
```

#### Definition

The "not" function requires a single parameter, that should evaluate to a Boolean. The function returns a Boolean denoting the result of the "not" operation on the parameter.

#### Examples

```
(not true) // returns false
(not false) // returns true
(not 1) // error
```

## Evaluation Function

Evaluation Functions are essential to evaluate quoted lists.

### eval

```
(eval param1)
```

#### Definition

The "eval" function requires a single parameter, that should evaluates to a quoted list. The function will unquote the parameter and returns the result of the evaluation of the list.

#### Example

```
(eval '(plus 1 3))  // returns 4
(eval '(1 3)) // return (1 3)
(eval (plus 1 3)) // error
```
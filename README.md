# LAB: TDD with Jest

This is the first lab in a three day series about schema and schema
validation. For this lab, you'll learn to work with Jest (a new
testing suite, more robust than QUnit) by writing functions to
check a values type (`is*`) and functions to cast a value into
another type (`castTo*`).

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Looking in the `starter_code` folder, you'll see that there is a partial implementation
of our validation "module". 

In the `root` of that folder, you'll find a file called `index.js` that connects the
validation module and attempts to run the functions imported from it.

In the `__tests__` folder, you'll find a file called `types.test.js`
that has the shells for the basic tests you need to write and make pass.
See below for testing requirements.

In the `lib` folder, you'll find a file called `types.js` that wires in the
validation module.

## Requirements

**USE TDD Practices**

### is* functions

* `isNumber`
* `isString`
* `isBoolean`
* `isArray`
* `isObject`
* `isFunction`

### castTo*

* `castToNumber`
* `castToString`
* `castToBoolean`
* BONUS: `castToArray`

### getCaster

* add your casters to `getCaster`

### Testing

* `is*`
    * Test that each function returns true for valid input
    * Test that each function returns false for invalid input
* `castTo*`
    * Test that each function returns a correctly formated value from valid input
    * Test that each function throws an error from invalid input

### Developer Implementation

Write a validation module that exports an object with functions. There are
two kinds of functions you'll need to implement:

1. Check if a value is of a specified type `is*` function:
    `isNumber`, `isString`, etc.
2. Cast a value to a specified type `castTo*` function:
    `castToNumber`, `castToString`, etc.

---

## Rubric

* 1 point per function (0.5 implementation / 0.5 test)

## End User Implementation
* Use the `index.js` file to validate objects using the imported functions
    from the module
* `console.log()` the return values


## Assignemnt Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations


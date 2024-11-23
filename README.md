# e-commerce-project-with-advanced-JavaScript
# e-commerce-project-with-advanced-JavaScript
Arithmetic operations in Javascript
Note that * and / have the same priority, so if present in the same calculation, operations will be done from left to right
Next will be + and -

Note:
integers are whole numbers such as 1, 2
floats => 0.1, 2.2, 

Computers have problems with working with floats, since numbers are stored as binaries.
As such, keen interest is needed when dealing with calculations that need money.
So the best practice is to convert money to cents then convert to currency

e.g 
2050.35 + 98.17 => (205035+98.17)/100

What if we need to calculate tax, say 10% of transaction total?

((2095+799) * 0.1)/100 = 2.894

Then rounding it in cents form to 2.89
Type Math.round((2095+799) * 0.1) / 100

### String-numerics concatenation
'$' + (2095 +799) / 100 => $28.94
Strings are characters such as letters (a, b, c...); numbers (1,2,3...); symbols (!, @,#, $...) and escape character \'
e.g - using escape character
'I\'m learning Javascript
\n ==> new line of text
\" ==> double quote to be treated as text

template strings -- using text inside `...`
##### Use cases

1. ###### Interpolation
Let's you insert a value directly into a string using ${} e.g 

`Items (${1 + 1}): $${(2095 + 799) / 100}` yields items (2): $28.94

2. ##### Multi-line string
`I am writing
a multi-line string
using template strings`

#Some important VSC Settings

##### Variables 
a container for holding piece of data/information

Conditions  for naming a variable
1. Do not use special/keywoords
2. Do not start with a number. use in the middle or end
3. Do not use characters; except for $ and underscore _

In JS a semicolon imploies the end of instruction; working the sam way as period(.) in English

The following two codes outputs different messages
console.log("hello"); console.log(2);
will show:
hello
2

JavaScript is an interpreter, hence variables can be executed as assigned and reassigned.

Rules for reassigning
1. Do not use 'let" for the second time. let creates a new variable


###  Best practices for naming variables
1. Use camelCase naming conventions; and is the standard for javascript
2. Use PascalCase
3. kebab-case -- in HTML, CSS and file names
4. snake_case -->  other programming languages
5. Do no use either short or loonger names for readability.


### Ways to create a variable
Using let, const and var

let ==> declare variables once, but can be changed later
const ==> for a variable that cannot change
var ==> No longer used in new JS codes because of constraints

#typeof  variable prints the variable type

### Booleans and If-statements
Booleans are special types of values
They are of two types:
true -- a yes to something
false -- a no to something

It is used for comparing two values; one on the left and the other to the right

Used alongside comparison operators such as
> greater than
< less than
>= greater than or equal to
<= less than or equal to
=== equal to
== tries to convert two numbers into the same value e.g console.log(5 == '5.00') gives true; that the two are equal though that is false. So we use double equals. Avoid it.
!== not equal to

for example:
3>5: false

Order of operations of comparison operators with arithmetic operators
1. (...)
2. * /
3. + -
4. Comparison Operators

If-statements: A control statement that checks for conditions in a group of codes

#### Syntax rules for if-statements
1. start with keyword 'if'
2. Next, Write conditions inside the parenthesis
3. Then, Write the statement/what should be fulfilled if the condition is right.
4. You can use keyword 'else' to end, the condition to be met when the fist condition is false. Otherwise use 'else if' (can be multiple) and always end with 'else' 







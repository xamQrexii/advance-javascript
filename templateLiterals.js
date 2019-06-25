// TEMPLATE LITERALS aka STRING LITERALS aka TEMPLATES STRING

// old way, you can use single or double quote
// let instructor = "Osama"
// let course = "Advance Javascript"

// concatenate strings
// let sentence = "My name is " + instructor + " and I am teaching you " + course
// console.log(sentence)  //RESULT: My name is Osama and I am teaching you Advance Javascript

/************************************************** */

// Old Way
// let instructor = "Osama"
// let course = "Advance Javascript"

// template literal
// let sentence = `My name is ${instructor} and I am teaching you ${course}`
// console.log(sentence)  //RESULT: My name is Osama and I am teaching you Advance Javascript

/************************************************** */

// MULTI-LINE

// The old way
// var myMultiString = 'Some text that I want\nOn two lines!';
// console.log(myMultiString)

// The new way
/*var myMultiString= `This will be
on two lines!`;*/
// console.log(myMultiString);


// Make sure you have <div id='root' style="white-space: pre-wrap"></div> in ur HTML File

// Thing to notice that we have style in div
// style="white-space: pre-wrap"
// refer link for help https://www.w3schools.com/cssref/pr_text_white-space.asp

/************************************************** */

let paragraph =
            `Paragraph:
        1. Sind:
                1.1 Karachi:
                1.2 Hyderabad:
        2. Punjab:
                2.1 Lahore:
                2.2 Islamabad:
        3. KPK:
                3.1 Peshawer:
                3.2 SAWAT:
        4. Balochistan:
                3.1 Quetta:
                3.2 Ziyarat:
        Conclusion: This is Template literal example`;

console.log(paragraph);
document.getElementById('root').innerHTML = paragraph;
// document.write(paragraph);
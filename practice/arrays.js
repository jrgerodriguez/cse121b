const grades = ["A", "B", "A"];
function convert(letter) {
    
    if (letter === "A") {
        result = 4;
    }
    else {
        result = 3;
    }
    return `<li>${result}</li>`;
};

const gpa = grades.map(convert);

document.getElementById("myList").innerHTML = gpa;


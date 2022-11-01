console.log("This is library website using ES6 classes");

// Constructor
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}


class Display {
    // Implementing add function
    add(book) {
        console.log("Adding book to UI");
        let tableRow = `<tr>
                        <th scope="row">1</th>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

        let tableBody = document.getElementById("tableBody");
        tableBody.innerHTML += tableRow;
    }

    // Implementing clear function
    clear() {
        document.getElementById("libraryForm").reset();
    }

    // Implementing clear function
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2)
            return false;

        else
            return true;
    }

    // Implementing show function
    show(type, message) {
        let url,Warning;
        if (type == "success") {
            url = "#check-circle-fill"
            Warning = "Success!"
        }
        else if (type == "danger") {
            url = "#exclamation-triangle-fill"
            Warning = "Failed!"
        }
        document.getElementById('message').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                                         <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                                         </symbol>
                                                        
                                                         <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                                         <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                         </symbol>
                                                     </svg>

    
                                                    <div class="alert alert-${type} d-flex align-items-center alert-dismissible fade show " role="alert">
                                                    ${ /* <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="${type}:"><use xlink:href=url/></svg>
                                                    <div> */''}
                                                        <strong>${Warning} :</strong>&nbsp; ${message}.
                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                        </div>
                                                     </div>`

        setTimeout(() => {
            document.getElementById('message').innerHTML = ""
        }, 5000);
    }
}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted library form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let SE = document.getElementById('SE');
    let Med = document.getElementById('Med');
    let Fc = document.getElementById('Fc');
    let dr = document.getElementById('dr');


    if (SE.checked) {
        type = SE.value;
    }
    else if (Med.checked) {
        type = Med.value;
    }
    else if (Fc.checked) {
        type = Fc.value;
    }
    else if (dr.checked) {
        type = dr.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', "Your book has been successfully added");
    }

    else {
        display.show('danger', "Sorry, you can not add this book");
    }
    e.preventDefault();
}




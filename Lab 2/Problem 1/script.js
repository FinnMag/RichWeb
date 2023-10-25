// Get references to HTML elements
const formName = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const search = document.getElementById("search");
const addButton = document.getElementById("add-contact");
const tableBody = document.querySelector("tbody");
const errorDiv = document.getElementById("error");
const sortName = document.getElementById("sort-name");
let contacts = []; // Array to store contact information

// Function to add a contact to the directory
function addContact() {
    addButton.addEventListener("click", function () {
        // Get values from form inputs and trim whitespace
        const addName = formName.value.trim();
        const addPhone = phone.value.trim();
        const addEmail = email.value.trim();

        // Validate the form inputs
        if (validateForm(addName, addPhone, addEmail)) {
            // Create a new table row and populate it with contact information
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${addName}</td>
                <td>${addPhone}</td>
                <td>${addEmail}</td>
            `;
            tableBody.appendChild(newRow);

            // Store the contact information in the 'contacts' array
            const contact = { addName, addPhone, addEmail };
            contacts.push(contact);

            // Clear form inputs after adding the contact
            formName.value = "";
            phone.value = "";
            email.value = "";
        }
    });

    // Search functionality to filter contacts
    search.addEventListener("input", function () {
        const searchPhrase = search.value.trim();

        // Filter the contacts array based on the search input
        const filteredContacts = contacts.filter(contact => contact.addPhone.includes(searchPhrase));

        // Clear the table and populate it with the filtered contacts
        tableBody.innerHTML = "";
        filteredContacts.forEach((contact, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${contact.addName}</td><td>${contact.addPhone}</td><td>${contact.addEmail}</td>`;
            tableBody.appendChild(row);
        });
    });
}

// Function to validate name, phone, and email inputs
function validateForm(name, phone, email) {
    if (!name || !phone || !email) {
        errorDiv.textContent = "Please fill all fields";
        errorDiv.style.display = "block";
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        errorDiv.textContent = "Phone must contain 10 digits";
        errorDiv.style.display = "block";
        return false;
    }

    if (!/^.+@.+\..+$/.test(email) || email.length > 40) {
        errorDiv.textContent = "Invalid or too long email address";
        errorDiv.style.display = "block";
        return false;
    }

    // Hide the error message if inputs are valid
    errorDiv.style.display = "none";
    return true;
}

// Event listener when the page is loaded
document.addEventListener("DOMContentLoaded", addContact);

// Event listener for sorting contacts by name
sortName.addEventListener("click", function () {
    contacts.sort((a, b) => {
        if (sortName.dataset.sort === "asc") {
            return a.addName.localeCompare(b.addName);
        } 
        
        else {
            return b.addName.localeCompare(a.addName);
        }
    });

    // Toggle between ascending and descending sorting
    sortName.dataset.sort = sortName.dataset.sort === "asc" ? "desc" : "asc";

    // Clear the table and repopulate it with the sorted contacts
    tableBody.innerHTML = "";
    contacts.forEach(contact => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${contact.addName}</td><td>${contact.addPhone}</td><td>${contact.addEmail}</td>`;
        tableBody.appendChild(row);
    });
});

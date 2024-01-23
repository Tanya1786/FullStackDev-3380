function displayContacts(pageNum) {
    const contactsInPage = 10;
    const start = (pageNum - 1) * contactsInPage;
    const end = start + contactsInPage;
    const contactList = users.slice(start, end);

    const contacts = document.querySelector('.contact-list');
    let contactListHTML = '';

    function processContactList(contact) {
        contactListHTML += `<li class="contact-item cf">
            <div class="contact-details">
                <img class="avatar" src="${contact.image}">
                <h3>${contact.name}</h3>
                <span class="date">Joined ${contact.joined}</span>
            </div>
            <div class="joined-details"></div>
        </li>`;
    }

    contactList.forEach(processContactList);

    contacts.innerHTML = contactListHTML;
}

function displayPagination(totalPages) {
    const paginationContainer = document.querySelector('.pagination');
    let paginationHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<li><a href="#" onclick="displayContacts(${i})">${i}</a></li>`;
    }

    paginationContainer.innerHTML = paginationHTML;
}

function onDOMContentLoaded() {
    const totalPages = Math.ceil(users.length / 10);
    displayContacts(1);
    displayPagination(totalPages);
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
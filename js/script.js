

const getFormDetais = (event) => {
    const getInputValue = (seletor) => document.querySelector(seletor).value;
    const noteName = getInputValue("#note-name");
    const noteDetails = getInputValue("#note-details");
    const noteSubmitTime = {
        date: new Date().getDate(),
        day: new Date().getDay(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        time: new Date().getTime(),
        hour: new Date().getHours(),
        minite: new Date().getMinutes(),
        second: new Date().getSeconds(),
    };

    // random id generator
    const getRandomId = () => {
        const randomElement = ["Q", "1", "W", "2", "z", "4", "w", "_", "3", "q", "5", "T", "6", "y", "7", "U", "8", "X", "_"];
        let randomId = "";
        for (let i = 0; i < 9; i++) {
            randomId += randomElement[Math.floor(Math.random() * 19)];
        }
        return randomId;
    };

    const noteId = getRandomId();
    const takenNoteFromUser = { noteId, noteName, noteDetails, noteSubmitTime };

    let note = [];

    if (localStorage.getItem("note")) {
        note = JSON.parse(localStorage.getItem("note"));
    }
    note.push(takenNoteFromUser);
    localStorage.setItem("note", JSON.stringify(note));

    console.log(note);
};

/**
 * funtion for showing every note item in user interFace
 * Data will load to local storage
 */
const showItemInUi = () => {
    const toDoCardDisplay = document.querySelector("#todo-card-showing-area");
    toDoCardDisplay.innerHTML = ""
    let note = [];
    note = JSON.parse(localStorage.getItem("note"));
    note.forEach((element) => {
        const div = document.createElement("div")
        div.id = element.noteId;
        div.classList = ["to-do-card"];
        div.innerHTML = `
            <div class="to-do-card-items">
            <div class="edit-tools-box  d-none">
                <i class="fas fa-search-plus"></i>
                <i class="fas fa-pen-square"></i>
                <i class="fas fa-trash-alt"></i>
                <i class="fas fa-share-alt"></i>
            </div>
                <i class="fas fa-ellipsis-v menu-icon" onclick="getEditToolsBoxPosition('${element.noteId}')"></i>
                <h3>${element.noteName.substr(0, 20)}....</h3>
                <hr class="">
                <p>${element.noteDetails.substr(0, 100)}....</p>
                <p class="date">${element.noteSubmitTime.date}/${element.noteSubmitTime.month}/${element.noteSubmitTime.year}</p>
            </div>
        `;
        toDoCardDisplay.appendChild(div)
    });
};
showItemInUi()


const getEditToolsBoxPosition = (boxId) => {
    const menuIcon = document.querySelector(`#${boxId} .menu-icon`);
    const toolsBox = document.querySelector(`#${boxId} .edit-tools-box`);
    console.log(boxId);
    toolsBox.classList.toggle("d-none")
    menuIcon.addEventListener("click", e => {
    })
}
;

const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const githubForm = document.getElementById("github-form");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI()


eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e) {

    let username = nameInput.value.trim();

    if (username === "") {
        alert("Lütfen Geçerli Bir Kullanıcı Adı Girin.")
    } 
    else {

        github.getGitHubData(username)
        .then(response => {
            if (response.user.message === "Not Found"){
                ui.showError("Kullanıcı Bulunamadı");
                
            }
            else {
                ui.showUserInfo(response.user);
                ui.showUserRepo(response.repo);
            }
        })
        .catch(err => ui.ShowError(err));
    }

    ui.clearInput();    //Input Temizleme
    e.preventDefault();
}

function clearAllSearched(){
    // Tüm arananları temizle

}

function getAllSearched(){
    // Arananları Storagedan al ve UI ya ekle
}


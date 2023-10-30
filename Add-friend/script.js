let changeS = document.querySelector("h4");

let addFriend = document.querySelector("#add-f");

let check = 0 ;


addFriend.addEventListener("click",function(){
    if (check == 0) {
        changeS.innerHTML = "Friends";
        changeS.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        addFriend.style.backgroundColor = "red"
        addFriend.style.color = "white"

        check = 1

    } else {
        changeS.innerHTML = "Unknown";
        changeS.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "green"
        addFriend.style.color = "white"
        check = 0
    }
})


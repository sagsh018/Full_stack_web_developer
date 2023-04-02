let choice = prompt("Enter your choice or enter quit to leave the app");

let todo_list = [];

while(choice.toLowerCase() !== "quit" && choice.toLowerCase() !== "q"){
    if(choice.toLowerCase() === "new"){
        let todo = prompt("Enter the todo");
        todo_list.push(todo);
        console.log(todo_list);
    } else if(choice.toLowerCase() === "list"){
        console.log("***********");
        for(let i = 0; i<todo_list.length; i++){
            console.log(`${i} : ${todo_list[i]}`);
        }
        console.log("***********");
    } else if(choice.toLowerCase() === "delete"){
        let delete_index = parseInt(prompt("Enter the index of todo you want to delete"));
        if(!Number.isNaN(delete_index)) {
            todo_list.splice(delete_index, 1);
            console.log("***********");
            for(let i = 0; i<todo_list.length; i++){
                console.log(`${i} : ${todo_list[i]}`);
            }
            console.log("***********");
        } else {
            console.log("Unknown Index");
        }
    } else if(choice.toLowerCase() === "quit"){
        console.log("You choose to quit");
        break;
    } else {
        choice = prompt("You have entered incorrect choice, press enter to continue again !");
    }
    choice = prompt("Enter your choice or enter quit to leave the app");
}
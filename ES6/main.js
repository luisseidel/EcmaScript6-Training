class List {
    constructor() {
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor() {
        super();
        this.usuario = "luis";
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

const minhaLista = new TodoList();
document.getElementById("novoTodo").onclick = function() {
    minhaLista.add("Novo Todo");
}
minhaLista.mostraUsuario();
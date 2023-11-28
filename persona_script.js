let persona = {
    nome: "Carlo",
    cognome: "Filiberto",
    età: "25",
    saluta: function() {
        console.log(`ciao sono ${this.nome} ${this.cognome} e ho ${this.età} anni`)
    }


}
persona.saluta()
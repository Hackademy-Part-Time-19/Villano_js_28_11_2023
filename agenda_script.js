function creaContatto(nome, numeroTelefono) {
    return {
        nome: nome,
        numeroTelefono: numeroTelefono
    };
}
let agenda = {
    nome:"Agenda Immobiliare",
    contatti:[
        creaContatto("Agenzia Immobiliare Sestante a chiaia", "335 8167464"),
        creaContatto("Veneruso Immobiliare", "379 2426931"),
        creaContatto("Omicron", "081 19183095"),
        creaContatto("Gruppo Italiano Immobiliare", "081 5518969"),
        creaContatto("Regus - Naples, Centro Direzionale", "02 89626156")

    ],
    mostraContatti: function() {
        console.log("Contatti nell'agenda:");
        this.contatti.forEach(function(contatto) {
            console.log("Nome: " + contatto.nome + ", Numero di telefono: " + contatto.numeroTelefono);
        });
    },
    mostraContatto: function(nomeCercato) {
        var contattoTrovato = this.contatti.find(function(contatto) {
            return contatto.nome === nomeCercato;
        });

        if (contattoTrovato) {
            console.log("Contatto trovato:");
            console.log("Nome: " + contattoTrovato.nome + ", Numero di telefono: " + contattoTrovato.numeroTelefono);
        } else {
            console.log("Contatto non trovato.");
        }
    },
    eliminaContatto: function(nomeCercato) {
        var contattoDaEliminare = this.contatti.find(function(contatto) {
            return contatto.nome === nomeCercato;
        });

        if (contattoDaEliminare) {
            let MyIndex = this.contatti.indexOf(contattoDaEliminare)
            this.contatti.splice(MyIndex,1);
            console.log("Contatto eliminato con successo.");
        } else {
            console.log("Contatto non trovato. Impossibile eliminare.");
        }
    },
    aggiungiContatto: function(nome, numeroTelefono) {
        this.contatti.push(creaContatto(nome, numeroTelefono));
    },
    modificaContatto: function(nomeCercato, nuovoNumeroTelefono) {
        var contattoDaModificare = this.contatti.find(function(contatto) {
            return contatto.nome === nomeCercato;
        });

        if (contattoDaModificare) {
            contattoDaModificare.numeroTelefono = nuovoNumeroTelefono;
            console.log("Contatto modificato con successo.");
        } else {
            console.log("Contatto non trovato. Impossibile modificare.");
        }
    },

}
agenda.mostraContatti();
console.log("\nMostra Contatto")
agenda.mostraContatto("Omicron");
console.log("\nElimina Contatto\n")
agenda.eliminaContatto("Omicron");
agenda.mostraContatti();
console.log("\nAggiungi Contatto")
agenda.aggiungiContatto("Studiomnia Immobiliare Posillipo - Dr. Luigi Chiavarone","366 4991260");
agenda.mostraContatti();
console.log("\nModifica Contatto")
agenda.modificaContatto("Veneruso Immobiliare","081 0685036");
agenda.mostraContatti();

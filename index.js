const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque =" ";
        switch (this.tipo){
            case 'mago':
                ataque = "usou magia";
                break;
            case 'guerreiro':
                ataque = "usou espada";
                break;
            case 'monje':
                ataque = "usou artes marciais";
                break;
            case 'ninja':
            ataque = "usou shuriken";
            break;
            default:
            ataque = "não possui ataque definido";
        }
        console.log (`O ${this.tipo} atacou usando ${ataque}`);
    }
}
function recebendoDados(){
    rl.question('Digite o nome do heroi: ', (nome) => {
        rl.question('Digite a idade do heroi: ', (idade) => {
            rl.question('Digite o tipo do heroi: ', (tipo) => {
                const heroi = new Heroi(nome, parseInt(idade), tipo);
                heroi.atacar();
                rl.close();
            });
        });
    });
}
recebendoDados()


    /*
        rl.question('Digite o nome do heroi: ', (nome) => {
        rl.question('Digite a idade do heroi: ', (idade) => {
        rl.question('Digite o tipo do heroi: ', (tipo)) => {
            const heroi = new heroi (nome, parseInt(idade), tipo) ;
            heroi.atacar();
            rl.close();
            };
            
        });
    });
};*/

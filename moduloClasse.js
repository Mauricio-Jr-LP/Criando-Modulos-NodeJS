class ModuloClass
{
    constructor()
    {
        this.nome = 'Mauricio';
        this.funcao();
    } //construtor
 
    funcao() 
    {
        console.log(this.nome)    
    } //função

}

module.exports = ModuloClass;
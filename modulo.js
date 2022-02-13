function funcaoDoModulo() //Função que é executada quando usar esse modulo
{
    console.log('Executando o modulo: funcaoDoModulo');
}

exports.funcaoDoModulo = funcaoDoModulo; //Exportando a função do modulo para ter esse resultado quando invocada

//exportando varaiveis
var numero = 21

exports.n = numero; //exports.nome que desejar atribuir = nome da variavel


//exportando objeto
var objeto = 
{
    nome: 'Mauricio',
    idade: 21,
    formacao: 'Sistemas de Informação'
}

exports.pessoal = objeto;
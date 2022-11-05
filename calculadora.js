
// função declarativa
function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Inteira (%)\n 5 Divisão Real (/)\n 6 Potenciação (**)'));
// 'number' para converter a string para um numero
    // 'prompt' para abrir uma janela no navegador
// '\n' para quebra de linha

    if (!operacao || operacao > 6) {
        alert('Operação inválida')
        calculadora()

    }
    else {
        let n1 = Number(prompt('Insira o primeiro valor'))
        let n2 = Number(prompt('Insira o segundo valor'))
        let resultado;
// e se / senão 
//declaração das operações

        if (!n1 || !n2) {
            alert('Erro!')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaoperacao()
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaoperacao()
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaoperacao()
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaoperacao()
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaoperacao()
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} è igual a ${resultado}`);
                novaoperacao()
            }
// função para continuar as operações
            function novaoperacao() {
                let opcao = prompt('Continuar?\n 1 - Sim\n 2 - Não')
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais')
                } else {
                    alert('Digite uma upção valida')
                    novaoperacao();
                }



            }
        }

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao()
                break;
            case 3:
                multiplicacao()
                break;
            case 4:
                divisaoInteira()
                break;
            case 5:
                divisaoReal()
                break;
            case 6:
                potenciacao()
                break;
                // switch case para substituir else if com break para não virar loop
        }
    }
}
calculadora();
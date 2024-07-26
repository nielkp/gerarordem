class OrdemServico{

    constructor(){
        const form = document.getElementById("form");

        form.addEventListener("submit", this.gerar.bind(this))
    }

    gerar(e){
        e.preventDefault()
        let ordemServico = new OrdemServico().lerDados()
        

        document.getElementById('os')
        .value = 'PLANO:  '+ ordemServico.plano + 'M'
        + '\nRECLAMAÇÃO:  '+ ordemServico.reclamacao
        +'\nSUPORTE PRESTADO:  '+ ordemServico.suporte
        +'\nOBSERVAÇÕES:  ' + ordemServico.pessoa 
        +'\n----- \n REFERÊNCIA:  '+ ordemServico.referencia 
        + '\n TELEFONE DE CONTATO:  '+ ordemServico.numero1 + '/' + ordemServico.numero2  
        +'\n CÓDIGO DO CLIENTE:  '+ ordemServico.codigo 
        +'\n NOME DO SOLICITANTE: ' + ordemServico.solicitante

    
        
    }

    lerDados(){
        let dados = {}

        dados.plano = document.getElementById('plano').value
        dados.referencia = document.getElementById('referencia').value || ''
        dados.numero1 = document.getElementById('numero1').value 
        dados.numero2 = document.getElementById('numero2').value || ''
        dados.codigo = document.getElementById('codigo').value
        dados.solicitante = document.getElementById('solicitante').value
        dados.reclamacao = document.getElementById('reclamacao').value || 'CLIENTE SEM ACESSO'
        dados.suporte = document.getElementById('suporte').value || 'ONU INATIVA, VERIFICADO QUE O CONECTOR ESTAVA BEM CONECTADO, DESLIGADO E LIGADO A ONU MAS SEM SUCESSO. '

        const pessoa = document.querySelector('input[name="pessoa"]:checked')
        if(pessoa?.value === 'pj'){
            dados.pessoa = 'CLIENTE CIENTE DA PASSIVIDADE DE COBRANÇA E DO PRAZO DE ATÉ 12 HORAS ÚTEIS.'
        } else{
            dados.pessoa = 'CLIENTE CIENTE DA PASSIVIDADE DE COBRANÇA E DO PRAZO DE ATÉ 2 DIAS ÚTEIS.'
        }
        
        return dados
    }

    copiar(){
        var copyText = document.getElementById("os");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    }

    limpar(){
        var radios = document.getElementsByName("pessoa");
        for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
        }

        document.getElementById('plano').value = ''
        document.getElementById('reclamacao').value = ''
        document.getElementById('suporte').value = ''
        document.getElementById('referencia').value = ''
        document.getElementById('numero1').value = ''
        document.getElementById('numero2').value = ''
        document.getElementById('codigo').value = ''
        document.getElementById('solicitante').value = ''
    }
}

var ordemServico = new OrdemServico()


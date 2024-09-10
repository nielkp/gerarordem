class OrdemServico{

    constructor(){
        const form = document.getElementById("form");

        form.addEventListener("submit", this.gerar.bind(this))
    }

    gerar(e){
        e.preventDefault()
        let ordemServico = new OrdemServico().lerDados()
        
		var dataAtual = new Date();
		var dia = dataAtual.getDate();
		var mes = dataAtual.getMonth() + 1;
		var ano = dataAtual.getFullYear();
		var dataFormatada = dia + "/" + mes + "/" + ano;

        document.getElementById('os')
        .value = 'DATA DE ABERTURA:  '+ dataFormatada
        + '\nLED DA ONU:  '+ ordemServico.ledonu
        +'\nRECLAMAÇÃO:  '+ ordemServico.reclamacao
        +'\nSUPORTE PRESTADO:  ' + ordemServico.suporte 
		+'\nOBSERVAÇÕES:  ' + ordemServico.pessoa 
        +'\n\nREFERÊNCIAS:  '+ ordemServico.referencia 
        + '\nTELEFONES:  '+ ordemServico.telefones
        +'\nID CLIENTE:  '+ ordemServico.idcliente 
		+'\nPLANO:  '+ ordemServico.plano + "M"
        +'\nSOLICITANTE: ' + ordemServico.solicitante

    
        
    }

    lerDados(){
        let dados = {}
        dados.ledonu = document.getElementById('ledonu').value || ''
        dados.reclamacao = document.getElementById('reclamacao').value || ''
        dados.suporte = document.getElementById('suporte').value || ''
        dados.referencia = document.getElementById('referencia').value || ''
        dados.telefones = document.getElementById('telefones').value || ''
		dados.idcliente = document.getElementById('idcliente').value || ''
        dados.plano = document.getElementById('plano').value || ''
        dados.solicitante = document.getElementById('solicitante').value || ''
        

        const pessoa = document.querySelector('input[name="pessoa"]:checked')
        if(pessoa?.value === 'pj'){
            dados.pessoa = 'O suporte técnico é passível de cobrança, quando o problema é ocasionado pelo cliente, por exemplo: equipamento quebrado, mau uso, ou problema na rede interna. Será a cobrança no valor de R$80,00 Reais, cobrado dinheiro ou pix no ato prestação serviço, prazo até 12 horas úteis!!'
        } else{
            dados.pessoa = 'O suporte técnico é passível de cobrança, quando o problema é ocasionado pelo cliente, por exemplo: equipamento quebrado, mau uso, ou problema na rede interna. Será a cobrança no valor de R$80,00 Reais, cobrado dinheiro ou pix no ato prestação serviço, prazo até 2 dias úteis!!'
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
	
	prazopf(){

        navigator.clipboard.writeText("Entendi, nesse caso, somente um técnico no local para resolver o problema. Vou gerar uma ordem de serviço para o técnico ir ao local, e o prazo máximo para esse atendimento é de 2 dias úteis, porém esse é o prazo máximo, geralmente eles atendem bem antes. O suporte técnico é passível de cobrança, quando o problema é ocasionado pelo cliente, por exemplo: equipamento quebrado, mau uso, ou problema na rede interna. Será gerada a cobrança no valor de R$80,00 Reais a serem pagos via boleto com data para 5 dias após a visita. Mas fique tranquilo caso o problema seja referente a rede não é gerado cobrança.");
    }
	
	prazopj(){
		navigator.clipboard.writeText("Entendi, nesse caso, somente um técnico no local para resolver o problema. Vou gerar uma ordem de serviço para o técnico ir ao local, e o prazo máximo para esse atendimento é de 12 horas úteis, porém esse é o prazo máximo, geralmente eles atendem bem antes. O suporte técnico é passível de cobrança, quando o problema é ocasionado pelo cliente, por exemplo: equipamento quebrado, mau uso, ou problema na rede interna. Será gerada a cobrança no valor de R$80,00 Reais a serem pagos via boleto com data para 5 dias após a visita. Mas fique tranquilo caso o problema seja referente a rede não é gerado cobrança.");
	}

    limpar(){
        var radios = document.getElementsByName("pessoa");
        for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
        }
        document.getElementById('ledonu').value = ''
        document.getElementById('reclamacao').value = ''
        document.getElementById('suporte').value = ''
        document.getElementById('telefones').value = ''
        document.getElementById('idcliente').value = ''
        document.getElementById('referencia').value = ''
        document.getElementById('solicitante').value = ''
		document.getElementById('plano').value = ''
    }
}

var ordemServico = new OrdemServico()

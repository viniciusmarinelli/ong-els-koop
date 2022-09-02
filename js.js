function clickBtn() {
    var inputNome = document.querySelector("#nomeContato");
    var inputEmail = document.querySelector("#emailContato");
    var inputMensagem = document.querySelector("#mensagemConatato");
    var inputCaptcha = document.querySelector("#captcha");
    var nomeContato = inputNome.value;
    var emailContato = inputEmail.value;
    var mensagemContato = inputMensagem.value;
    var captcha = inputCaptcha.value;
    var textoSpan = document.querySelector("#captchaLabel");
    var textoNovo = `</br><small style="color: red;">Captcha errado! Tente novamente.</small>`
    if (nomeContato != "" && emailContato != "" && mensagemContato != "" && captcha != "") {
        if (captcha == 10) {
            var confirmacao = confirm(`Confirmação\nNome: ${nomeContato}\nE-mail: ${emailContato}\nMensagem: ${mensagemContato}`);
            if (confirmacao) {
                alert("Mensagem Enviada!");
                onsubmit(true);
            }
        } else {
        textoSpan.insertAdjacentHTML('afterend', textoNovo);
        }
    }
}

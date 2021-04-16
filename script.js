function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 ||pass.value.length == 0) {
        window.alert('[ERRO] verifique os dados')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        }else {
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}
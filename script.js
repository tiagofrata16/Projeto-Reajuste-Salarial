 function calcular(){
    var sal = document.getElementById('txtsal')
    var res = document.getElementById('res')

    if(sal.value.length == 0){
         window.alert('ERRO-Preencha o campo!')
         res.innerHTML = `Impossível calcular`
    }else{
         var s = Number(sal.value)
         if(s < 150 || s > 5000){
            window.alert('ERRO-Insira um salário válido')
         }else{
            res.innerHTML = ``
                if(s <= 280){
                    var p = '20%'
                    var aum = s * 0.2 
                    var ns = s * 1.2
                }else if(s < 700) {
                    var p = '15%'
                    var aum = s * 0.15 
                    var ns = s * 1.15
                
                }else if(s < 1500){ 
                    var p = '10%'
                    var aum = s * 0.1
                    var ns = s * 1.1
                }else{
                    var p = '5%'
                    var aum = s * 0.05 
                    var ns = s * 1.05
                }
                    res.innerHTML += `Antigo salário: R$${s.toFixed(2)}<br>`
                    res.innerHTML += `Porcentagem do aumento: ${p}<br>`
                    res.innerHTML += `Aumento: R$${aum.toFixed(2)}<br>`
                    res.innerHTML += `Novo salário: R$${ns.toFixed(2)}<br>`
         }
    }

    
    
 }
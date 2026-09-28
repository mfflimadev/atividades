const salario= 4500
if(salario<= 2000){
    console.log('Isento')   
}else if(salario>2000){ 
    const resto1= salario-2000
    const imposto1= resto1*1.08 
    console.log(`Imposto devido:R$ ${imposto1}`)
}else if(salario>3000){ 
    const resto2= salario-4500
    const imposto1max=1080
    const imposto2= resto2*1.18
    console.log(`Imposto devido:R$ ${imposto1max + imposto2}`)

}else if(salario>4500){ 
    const resto3= salario-4500
    const imposto2max=1770
    const imposto3= resto3*1.28
    console.log(`Imposto devido:R$ ${imposto2max + imposto3}`)
}
function calcularImposto(){
  let valor = parseFloat(document.getElementById("salario").value);
  let msg;
  let imposto;
  if(valor < 1903.99 ){
     msg="Isento";
  }
  else if(valor > 1903.99 && valor < 2826.66 ){
    imposto = valor *0.075;
    msg="7,5% do salário bruto";
  }
  else if(valor > 2826.66 && valor < 3751.06){
    imposto = valor*0.15;
    msg="15% do salário bruto";
  }
  else if(valor >3751.06 && valor <4664.69 ){
    imposto = valor *0.225;
    msg="22,5% do salario bruto";
  }
  else {
    imposto = valor *0.275;
    msg="27,5% do salário bruto";
  }
  document.getElementById("resultado").innerText = `${msg} = ${imposto}`;
}
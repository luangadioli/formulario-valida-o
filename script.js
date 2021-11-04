function validarNome(){
   var cadastroNome = document.getElementById('name_form').value;
   var nomeTamanho = document.getElementById('name_form').value.length;
   var botao = document.getElementsByClassName('submit');


   if (cadastroNome == ""){
      document.getElementById("nomeErro").innerHTML = "Preencha o seu nome !!"
      document.getElementById('name_form').classList.add("bordavermelha");
   }
   else if(nomeTamanho < 10){
      document.getElementById("nomeErro").innerHTML = "Preencha no minimo 10 caracteres !!"
      document.getElementById('name_form').classList.add("bordavermelha");
   }
   else{
      document.getElementById("nomeErro").innerHTML = ""
      document.getElementById('name_form').classList.remove("bordavermelha");
   }

}

function validarEndereco(){

   var endereco = document.getElementById('endereco_form').value;


   if (endereco == ""){
      document.getElementById("enderecoErro").innerHTML = "Preencha o seu Endereço !!"
      document.getElementById('endereco_form').classList.add("bordavermelha");
   }
   else{
      document.getElementById("enderecoErro").innerHTML = ""
      document.getElementById('endereco_form').classList.remove("bordavermelha");
   }
   

}

function validarMask(t, mask){

   let i = t.value.length;
   let exit = mask.substring(1, 0);
   let text = mask.substring(i)
   if (text.substring(0, 1) != exit) {
     t.value += text.substring(0, 1);
   }


}

function validarCep(){
   var cep = document.getElementById('cep_form').value;
   var cepTamanho = cep.length;
   
   if (cep == ""){
      document.getElementById("cepErro").innerHTML = "Preencha o seu cep !!"
      document.getElementById('cep_form').classList.add("bordavermelha");
   }
   else if(cepTamanho < 7){
      document.getElementById("cepErro").innerHTML = "Preencha no minimo 10 caracteres !!"
      document.getElementById('cep_form').classList.add("bordavermelha");
   }
   else{
      document.getElementById("cepErro").innerHTML = ""
      document.getElementById('cep_form').classList.remove("bordavermelha");
   }
}




 function aniversario() {

   var data_atual = new Date();
   var dataNiver = document.getElementById('data_form').value;
   console.log(dataNiver);
   var dataTamanho = document.getElementById('data_form').value.length;
   var anos = data_atual.getFullYear() - dataNiver.slice(6,10);

   if(data_atual.getMonth() != dataNiver.slice(3,5)){
      if(data_atual.getMonth() < dataNiver.slice(3,5)){
         anos--;
      }
   }
   else{
      if(data_atual.getDate() < dataNiver.slice(0,2)){
         anos--;
      }
   }
   
   if (dataNiver == ""){
      document.getElementById("dataErro").innerHTML = "Preencha sua data de aniversário !!"
      document.getElementById('data_form').classList.add("bordavermelha");
   }
   else if(dataTamanho < 9){
      document.getElementById("dataErro").innerHTML = "Preencha todo o campo !!"
      document.getElementById('data_form').classList.add("bordavermelha");
   }
   else{
      document.getElementById("dataErro2").innerHTML = "Você tem " + anos + " anos de idade"
      document.getElementById('data_form').classList.remove("bordavermelha");
   }

   

 }

function validarCpf(){


   var cpf = document.getElementById('cpf_form').value;

   
   if (cpf == ""){
      document.getElementById("cpfErro").innerHTML = "Preencha seu cpf !!"
      document.getElementById('cpf_form').classList.add("bordavermelha");
   }
   else if(!validaCPF(cpf)){
      document.getElementById("cpfErro").innerHTML = "cpf inválido !!"
      document.getElementById('cpf_form').classList.add("bordavermelha");
   }
   else{
      document.getElementById("cpfErro").innerHTML = ""
      document.getElementById('cpf_form').classList.remove("bordavermelha");
   }

}

function validaCPF(cpf_form) {
   cpf_form = cpf_form.split('.').join('').split('-').join('');

   digitoUm = false;
   digitoDois = false;
   soma = 0;
   contador = 10;

   for(i=0; i < cpf_form.length - 2; i++) {
     soma += cpf_form[i] * (contador - i);
   }

   if ((soma * 10 % 11) == cpf_form[9]) {
     digitoUm = true;
   }

   soma = 0
   for(i=0; i < cpf_form.length - 1; i++) {
     soma += cpf_form[i] * (contador + 1 - i);
   }

   if ((soma * 10 % 11) == cpf_form[10]) {
     digitoDois = true;
   }

   if (digitoUm && digitoDois) {
     console.log('cpf_form válido');
     return true;
   }
   else {
     console.log('cpf_form inválido');
     return false;
   }
 }

function todasFunc(){

   validarNome();
   validarEndereco();
   validarCep();
   validarCpf();
   aniversario();

}
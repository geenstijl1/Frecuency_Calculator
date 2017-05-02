function frecuency(){
  var ra = myform.Ra.value;
  var rb = myform.Rb.value;
  var cap = myform.Cap.value;
  ra = ra * 1000;
  rb = rb * 1000;
  var time1 = 0.693 * cap * ra;
  var time2 = ((ra*rb)/(ra+rb) * cap * Math.log((rb - 2*ra )/(2*rb - ra)));
  var resultado = 1 / (time1 + time2);
  alert(resultado.toFixed(3));


}

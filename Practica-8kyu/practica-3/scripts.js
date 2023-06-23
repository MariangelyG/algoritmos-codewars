// Cree una función llamada shortcutpara eliminar las vocales minúsculasa ( , e, i, o, u) 
// en una cadena determinada.

const shortcut = (string) => {
    return string.replace(/[aeiou]/gi,'');;
  }


  console.log(shortcut(('hello', 'hll')));
  console.log(shortcut('how are you today?', 'hw r y tdy?'))
  console.log(shortcut('complain', 'cmpln'))
  console.log(shortcut('never', 'nvr'))

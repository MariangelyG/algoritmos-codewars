// Cree una función llamada shortcutpara eliminar las vocales minúsculasa ( , e, i, o, u) 
// en una cadena determinada.

function shortcut (string) {
    return string.replace(/[aeiou]/gi, '');;
  }
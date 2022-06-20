

export const Patterns = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  name: /\D+$/,
  length: /^[ 0-9]+$/,
  width: /^[ 0-9]+$/,
  height: /^[ 0-9]+$/,
  number: /^[ 0-9]+$/,
  technology: /\D+$/,
  manufacturer: /\D+$/,
  shipping:  /\D+$/,
  payment: /\D+$/,
  from: /\D+$/,
  inWh: /^[ 0-9]+$/
}


Array.prototype.last = function() {
  return this[this.length - 1];
}
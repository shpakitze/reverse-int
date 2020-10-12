module.exports = function reverse (n) {
  let s='';
  let nn=Math.abs(n);
    while (nn>0) {
        s+=nn%10;
        nn=(nn-nn%10)/10;

  }
  return s;
}

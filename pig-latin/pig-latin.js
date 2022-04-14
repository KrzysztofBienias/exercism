export class translator {
  static string(str) {
    if (/^thr|^sch|[^aeiou]qu/.test(str)) return str.substring(3, str.length) + str.substring(0, 3) + 'ay';

    if (/^ch|^qu|^th|^rh/.test(str)) return str.substring(2, str.length) + str.substring(0, 2) + 'ay';

    if (/^[aeiou]|^yt|^xr/.test(str)) return str + 'ay';

    return str.substring(1, str.length) + str.charAt(0) + 'ay';
  }

  static translate(str) { 
    return str.split(' ').map(w => translator.string(w)).join(' ');
  }
}

export default function unicodeToStringEmoji(obj) {
  if (!obj.category) return false;

  let s;
  let emoji;
  let hi;
  let lo;
  const unified = obj.unified;

  if (unified.indexOf('-') > -1) {
    const parts = [];

    s = unified.split('-');

    for (let i = 0; i < s.length; i += 1) {
      let part = parseInt(s[i], 16);

      if (part >= 0x10000 && part <= 0x10FFFF) {
        hi = Math.floor((part - 0x10000) / 0x400) + 0xD800;
        lo = ((part - 0x10000) % 0x400) + 0xDC00;

        part = (String.fromCharCode(hi) + String.fromCharCode(lo));
      } else {
        part = String.fromCharCode(part);
      }

      parts.push(part);
    }

    emoji = parts.join('');
  } else {
    s = parseInt(unified, 16);

    if (s >= 0x10000 && s <= 0x10FFFF) {
      hi = Math.floor((s - 0x10000) / 0x400) + 0xD800;
      lo = ((s - 0x10000) % 0x400) + 0xDC00;
      emoji = (String.fromCharCode(hi) + String.fromCharCode(lo));
    } else {
      emoji = String.fromCharCode(s);
    }
  }

  return emoji;
}

export function stringToUnicodeEmoji(str, idy = 0) {
  if (!str) return false;

  let code;
  let idx = idy;
  const END = str.length;
  const surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

  while ((surrogatePairs.exec(str)) != null) {
    const li = surrogatePairs.lastIndex;

    if (li - 2 < idx) {
      idx += 1;
    } else {
      break;
    }
  }

  if (idx >= END || idx < 0) {
    return NaN;
  }

  code = str.charCodeAt(idx);

  if (code >= 0xD800 && code <= 0xDBFF) {
    const HI = code;
    const LOW = str.charCodeAt(idx + 1);

    code = ((HI - 0xD800) * 0x400) + (LOW - 0xDC00) + 0x10000;
  }

  return code.toString(16);
}

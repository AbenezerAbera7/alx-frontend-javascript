export default function createIteratorObject(report) {{
  let result = [];
  for (const [key, value] of Object.entries(report)) {
    result.push(value);
  }

  return result;

  };
}
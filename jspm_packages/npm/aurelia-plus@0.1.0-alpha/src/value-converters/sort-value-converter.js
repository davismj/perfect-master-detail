/* */ 
"format cjs";
export class SortValueConverter {
  toView(array, properties, direction = 1) {
    if (!properties) {
      return array.slice().sort();
    }
    if (!(properties instanceof Array)) {
      properties = [properties];
    }
    if (typeof(direction) === 'string') {
      if (/asc/.test(direction)) {
        direction = 1;
      } else if (/desc/i.test(direction)) {
        direction = -1;
      } else if (/none/i.test(direction)) {
        direction = 0;
      } else {
        console.warn(`Improper parameter to SortValueConverter on direction: ${direction}. Proper values are 'asc', 'desc', or 'none'.`);
        return;
      }
    }
    if (direction === 0) {
      return array;
    } else {
      return array.slice().sort((a,b) => {
        for (let i = 0, length = properties.length; i < length; i++) {
          let property = properties[i];
          let aProp = a[property] || '';
          let bProp = b[property] || '';
          if (aProp.toLowerCase) {
            aProp = aProp.toLowerCase()
          }
          if (bProp.toLowerCase) {
            bProp = bProp.toLowerCase()
          }

          if (aProp < bProp) {
            return -1 * direction;
          } else if (aProp > bProp) {
            return 1 * direction;
          }  
        };
        return 0 * direction;
      });
    }
  }
}

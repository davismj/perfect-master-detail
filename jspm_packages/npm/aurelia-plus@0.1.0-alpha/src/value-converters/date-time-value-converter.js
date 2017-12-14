/* */ 
"format cjs";

export class DateValueConverter {
  toView(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.toDateString();
  }
}

export class TimeValueConverter {
  toView(date) {
    toView(date) {
      if (!(date instanceof Date)) {
        date = new Date(date);
      }
      return date.toTimeString();
    }
  }
}

export class DateTimeValueConverter {
  toView(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.toLocaleString();
  }
}


const xlsx = require("xlsx");

export let data = {
  monday: {
    date: "",
    moning: [],
    lunch: [],
    dinner: []
  },
  Tuesday: {
    date: "",
    moning: [],
    lunch: [],
    dinner: []
  },
  Wensday: {
    date: "",
    moning: [],
    lunch: [],
    dinner: []
  },
  Thursday: {
    date: "",
    moning: [],
    lunch: [],
    dinner: []
  },
  Friday: {
    date: "",
    moning: [],
    lunch: [],
    dinner: []
  },
  Saturday: {
    date: "",
    moning: [],
    lunch: [],
    dinner: []
  },
  sunday: {
    date: "",
    moning: [],
    lunch: [],
    dinner: []
  }
};

export function process_RS(stream, cb) {
  var buffers = [];
  stream.on("data", function(data) {
    buffers.push(data);
  });
  stream.on("end", function() {
    var buffer = Buffer.concat(buffers);
    var workbook = xlsx.read(buffer, { type: "buffer" });
    cb(workbook);
  });
}

export function call(workbook) {
  const first_sheet_name = workbook.SheetNames[0];
  const ws = workbook.Sheets[first_sheet_name];
  if (ws["B2"] !== undefined) {
    data.monday.date += ws["B2"].w;
  }
  if (ws["C2"] !== undefined) {
    data.Tuesday.date += ws["C2"].w;
  }
  if (ws["D2"] !== undefined) {
    data.Wensday.date += ws["D2"].w;
  }
  if (ws["E2"] !== undefined) {
    data.Thursday.date += ws["E2"].w;
  }
  if (ws["F2"] !== undefined) {
    data.Friday.date += ws["F2"].w;
  }
  if (ws["G2"] !== undefined) {
    data.Saturday.date += ws["G2"].w;
  }
  if (ws["H2"] !== undefined) {
    data.sunday.date += ws["H2"].w;
  }
  for (let i = 3; i <= 9; i++) {
    if (ws["B" + i] !== undefined) {
      data.monday.moning.push(ws["B" + i].w);
    }
    if (ws["C" + i] !== undefined) {
      data.Tuesday.moning.push(ws["C" + i].w);
    }
    if (ws["D" + i] !== undefined) {
      data.Wensday.moning.push(ws["D" + i].w);
    }
    if (ws["E" + i] !== undefined) {
      data.Thursday.moning.push(ws["E" + i].w);
    }
    if (ws["F" + i] !== undefined) {
      data.Friday.moning.push(ws["F" + i].w);
    }
    if (ws["G" + i] !== undefined) {
      data.Saturday.moning.push(ws["G" + i].w);
    }
    if (ws["H" + i] !== undefined) {
      data.sunday.moning.push(ws["H" + i].w);
    }
  }
  for (let i = 11; i <= 17; i++) {
    if (ws["B" + i] !== undefined) {
      data.monday.lunch.push(ws["B" + i].w);
    }
    if (ws["C" + i] !== undefined) {
      data.Tuesday.lunch.push(ws["C" + i].w);
    }
    if (ws["D" + i] !== undefined) {
      data.Wensday.lunch.push(ws["D" + i].w);
    }
    if (ws["E" + i] !== undefined) {
      data.Thursday.lunch.push(ws["E" + i].w);
    }
    if (ws["F" + i] !== undefined) {
      data.Friday.lunch.push(ws["F" + i].w);
    }
    if (ws["G" + i] !== undefined) {
      data.Saturday.lunch.push(ws["G" + i].w);
    }
    if (ws["H" + i] !== undefined) {
      data.sunday.lunch.push(ws["H" + i].w);
    }
  }
  for (let i = 19; i <= 25; i++) {
    if (ws["B" + i] !== undefined) {
      data.monday.dinner.push(ws["B" + i].w);
    }
    if (ws["C" + i] !== undefined) {
      data.Tuesday.dinner.push(ws["C" + i].w);
    }
    if (ws["D" + i] !== undefined) {
      data.Wensday.dinner.push(ws["D" + i].w);
    }
    if (ws["E" + i] !== undefined) {
      data.Thursday.dinner.push(ws["E" + i].w);
    }
    if (ws["F" + i] !== undefined) {
      data.Friday.dinner.push(ws["F" + i].w);
    }
    if (ws["G" + i] !== undefined) {
      data.Saturday.dinner.push(ws["G" + i].w);
    }
    if (ws["H" + i] !== undefined) {
      data.sunday.dinner.push(ws["H" + i].w);
    }
  }
  console.log(data);
}

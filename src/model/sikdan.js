const mongoose = require("mongoose");

const SikdanSchema = new mongoose.Schema({
  Monday: {
    type: Object,
    required: "isRequired"
  },
  Tuesday: {
    type: Object,
    required: "isRequired"
  },
  Wensday: {
    type: Object,
    required: "isRequired"
  },
  Friday: {
    type: Object,
    required: "isRequired"
  },
  Saturday: {
    type: Object,
    required: "isRequired"
  },
  Sunday: {
    type: Object,
    required: "isRequired"
  }
});

const model = mongoose.model("Sikdan", SikdanSchema);
export default model;

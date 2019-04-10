import Sikdan from "./model/sikdan";

export const Api = async (req, res) => {
  const data = await Sikdan.findOne({}).sort({ _id: -1 });
  res.send(data);
};

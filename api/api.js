import axios from "axios";

export async function getDataAll(url) {
  console.log("inside getDataAll");
  try {
    let res = await axios.get(url);
    return { status: "success", res };
  } catch (err) {
    return { status: "failure", err: "Get Data Failed" };
  }
}

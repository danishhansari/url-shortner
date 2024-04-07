import { nanoid } from "nanoid";
import { User } from "../models/user.models.js";

export async function handleURL(req, res) {
  const { url } = req.body;
  const shortId = nanoid(8);
  await User.create({
    originalURL: url,
    shortId: shortId,
  });
  return res.status(200).json({ status: "Success" });
}

export async function redirectUser(req, res) {
  const id = req.params.id;
  const find = await User.findOne({ shortId: id });
  if (!find) {
    return res.status(401).json({ message: "Can't find the url" });
  }
  res.redirect(find.originalURL);
}

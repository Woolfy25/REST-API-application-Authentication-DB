const express = require("express");
const router = express.Router();
const {
  getAccount,
  createAccount,
  loginAccount,
  removeAccount,
  updateAccount,
  getContacts,
  createContacts,
  updateContacts,
  removeContact,
} = require("../controllers/controler");

router.get("/account", getAccount);
router.post("/account/register", createAccount);
router.post("/account/login", loginAccount);
router.put("/account/:contactId", updateAccount);
router.delete("/account/:contactId", removeAccount);

router.get("/contacts", getContacts);
router.post("/contacts", createContacts);
router.put("/contacts/:contactId", updateContacts);
router.delete("/contacts/:contactId", removeContact);

module.exports = router;

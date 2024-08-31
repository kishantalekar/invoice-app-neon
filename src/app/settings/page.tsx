import { useState } from "react";

export default function Settings() {
  //👇🏻 default bank info
  const [bankInfo, setBankInfo] = useState({
    account_name: "",
    account_number: 1234567890,
    bank_name: "",
    currency: "",
  });

  //👇🏻 bank info from the form entries
  const [inputBankInfo, setInputBankInfo] = useState({
    accountName: "",
    accountNumber: 1234567890,
    bankName: "",
    currency: "",
  });

  return <></>;
}

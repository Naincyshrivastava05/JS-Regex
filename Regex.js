function validatePin(pin) {
  const pinPattern = /^[1-9][0-9]{5}$/;
  if (pinPattern.test(pin)) {
      console.log(`Valid PIN: ${pin}`);
      return true;
  } else {
      console.error(`Invalid PIN: ${pin}`);
      return false;
  }
}

validatePin("400088"); 
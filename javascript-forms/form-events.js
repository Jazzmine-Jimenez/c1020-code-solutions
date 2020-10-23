function handleFocus(event){
  console.log("Focus event was fired");
  console.log("Event name:", event.target.name);
}

function handleBlur(event){
  console.log("Blur event was fired");
  console.log("Event name:", event.target.name);
}

function handleInput(event){
  console.log("Event name:", event.target.name);
  console.log("Event value:", event.target.value);
}

$name = document.forms[0].elements.name;
$name.addEventListener("focus", handleFocus);
$name.addEventListener("blur", handleBlur);
$name.addEventListener("input", handleInput);

$email = document.forms[0].elements.email;
$email.addEventListener("focus", handleBlur);
$email.addEventListener("blur", handleBlur);
$email.addEventListener("input", handleInput);

$textArea = document.forms[0].elements.message;
$textArea.addEventListener("focus", handleInput);
$textArea.addEventListener("blur", handleBlur);
$textArea.addEventListener("input", handleInput);

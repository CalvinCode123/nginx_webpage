let h1_element = document.getElementById("title");
//h1_element.style.border = "thick solid #0000FF";

function changeMeToRed() {
  let h1_element = document.getElementById("title");
  h1_element.style.border = "thick solid #ff0000";
}

function changeMeToBlue() {
  let h1_element = document.getElementById("title");
  h1_element.style.border = "thick solid #1e00ff";
}

function changeMeToGreen() {
  let h1_element = document.getElementById("title");
  h1_element.style.border = "thick solid #00ff2f";
}

function lightMode() {
  let body_element = document.getElementById("page");
  body_element.style.backgroundColor = "white";
}

function darkMode() {
  let body_element = document.getElementById("page");
  body_element.style.backgroundColor = "grey";
}

function toggleDarkmode() {
  let body_element = document.getElementById("page");
  let toggle = document.getElementById("toggle_button");
  button_mode = toggle.textContent;
  if (button_mode == "Lightmode") {
    button_mode = "Darkmode";
    body_element.style.backgroundColor = "white";
    body_element.style.color = "black";
  } else {
    button_mode = "Lightmode";
    body_element.style.backgroundColor = "rgb(32, 32, 32)";
    body_element.style.color = "white";
  }
  toggle.textContent = button_mode;
}

function runForm() {
  let e1 = document.getElementById("first_name");
  let e2 = document.getElementById("password_field");
  //alert(`${e1.value} ${e2.value}`);

  let dietary_requirement = document.getElementsByName("grouping_alpha");
  for (let e of dietary_requirement) {
    console.log(e.checked);
  }

  let burger_additions = document.getElementsByName("burger_toppings");
  for (let e of burger_additions) {
    console.log(e.checked);
  }
}

function runForm2() {
  let x1 = document.getElementById("first_name_field");
  let x2 = document.getElementById("lastname_field");
  let x3 = document.getElementById("email_field");

  //alert(
  //  `Hello ${x1.value} ${x2.value}. Your email: ${x3.value} has been added to the mailing list`,
  // );

  let age_range = document.getElementsByName("grouping_age_range");

  for (let e of age_range) {
    console.log(e.checked);
    if (e.checked) {
      val = e.value;
      break;
    }
  }
  switch (val) {
    case "1":
      alert(`You are getting £4.81`);
      break;
    case "2":
      alert(`You are getting £6.83`);
      break;
    case "3":
      alert(`You are getting £9.18`);
      break;
    case "4":
      alert(`You are getting £9.50`);
      break;
  }
}

function runForm3() {
  const date = new Date().toLocaleDateString();
  let r1 = document.getElementById("name_field");
  let r2 = document.getElementById("blog_name_field");
  let r3 = document.getElementById("blog_body_field");
  //let r4 = document.getElementById("date_field");
  //console.log(r1.value, r2.value, r3.value, r4.value);

  /*
  document.getElementById("blog_name").innerHTML = "written by " + r1.value;
  document.getElementById("blog_title").innerHTML = r2.value;
  document.getElementById("blog_content").innerHTML = r3.value;
  document.getElementById("date").innerHTML = r4.value;
  */

  currentContent = document.getElementById("blog");

  let newPost = `<div>
      <h1>${r2.value}</h1>

      <h4>Written by ${r1.value}</h4>
      <p>On <i>${date}</i></p>
      <p>${r3.value}</p>
      <hr>

    </div>`;

  console.log(currentContent);
  console.log(newPost);

  currentContent.innerHTML = newPost + currentContent.innerHTML;
  //document.getElementById("blog").innerHTML = currentContent;

  document.getElementById("blog_form").reset();
}

function hideGif() {
  let checkBox = document.getElementById("hide_gif");
  if (checkBox.checked) {
    document.getElementById("meme").style.visibility = "visible";
  } else {
    document.getElementById("meme").style.visibility = "hidden";
  }
}

let listItem = document.createElement("option"); 
let itemText = document.createTextNode("content"); 
listItem.appendChild(itemText);


selectButtonShow();

document.getElementById("componentId").append(listItem);


function addComponent() {
  let listItem = document.createElement("option");
  let itemText = document.createTextNode(
    document.getElementById("addId").value
  ); 
  listItem.appendChild(itemText);

  document.getElementById("componentId").append(listItem);

  let component = document.getElementById("component").value;
  let componentId = document.getElementById("componentId").value;

  switch (
    component
  ) {
      case "div":
      document.getElementById(componentId).append(addDiv());
      break;
      case "button":
      document.getElementById(componentId).append(addButton());
      break;
      case "link":
      document.getElementById(componentId).append(addLink());
      break;
      case "paragraph":
      document.getElementById(componentId).append(addParagraph());
      break;
      case "image":
      document.getElementById(componentId).append(addImage());
      break;
      case "input":
      document.getElementById(componentId).append(addInput());
      break;
      case "header":
      document.getElementById(componentId).append(addHeader());
      break;
  }
}


function addDiv() {
  var bgColor = document.getElementById("Color").value;
  var textColor = document.getElementById("textColor").value;
  var Text = document.getElementById("Text").value;
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;
  var fSize = document.getElementById("fontSize").value;

  // var div="<div id='"+addId+"' class='bg-"+bgColor+" "+addClass+" text-"+textColor+"'>"+Text+"</div>";

  
  var div = document.createElement("div");
  div.setAttribute("id", addId);
  div.setAttribute("class", `${addClass} text-${textColor} bg-${bgColor} fs-${fSize}`);
  div.textContent = Text;

  return div;
}

function addButton() {
  var buttonSize = document.getElementById("btnSize").value;
  var Text = document.getElementById("Text").value;
  var fSize = document.getElementById("fontSize").value;
  var textColor = document.getElementById("textColor").value;
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;
  var bgColor = document.getElementById("Color").value;

  var button = document.createElement("button");
  button.setAttribute("id", addId);
  button.setAttribute("class", `${addClass} ${buttonSize} text-${textColor} bg-${bgColor} fs-${fSize}`);
  button.textContent = Text;

  return button;
}

function addHeader() {
  var bgColor = document.getElementById("Color").value;
  var textColor = document.getElementById("textColor").value;
  var Text = document.getElementById("Text").value;
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;
  var hSize = document.getElementById("header").value;

  var header = document.createElement(`h${hSize}`);

  header.setAttribute("id", addId);
  header.setAttribute("class", `${addClass} text-${textColor} bg-${bgColor}`);
  header.textContent = Text;

  return header;
}

function addImage() {
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;
  var imageLink = document.getElementById("image").value;

  var image = document.createElement("img");

  image.setAttribute("src", imageLink);
  image.setAttribute("id", addId);
  image.setAttribute("class", addClass);

  return image;
}

function addInput() {
  var type = document.getElementById("input").value;
  var placeholder = "";

  if (type == "text") {
    placeholder = "Enter Text";
  } else if (type == "email") {
    placeholder = "Enter mail address";
  } else if (type == "password") {
    placeholder = "Enter your password";
  } else {
    placeholder = "Enter a number";
  }

  var input = document.createElement("input");


  input.setAttribute("type",type)
  input.setAttribute("id", addId);
  input.setAttribute("class",`${"form-control mb-3"}`)
  input.setAttribute("placeholder", placeholder);
  

  return input;
}

function addLink()
{

  var link = document.createElement("link");

  var addLink = document.getElementById("addLink").value;

  link.setAttribute("href", addLink);

  return link;


}

function addParagraph(){
  var bgColor = document.getElementById("Color").value;
  var textColor = document.getElementById("textColor").value;
  var Text = document.getElementById("Text").value;
  var addClass = document.getElementById("addClass").value;
  var addId = document.getElementById("addId").value;
  var fSize = document.getElementById("fontSize").value;

  var paragraph = document.createElement("p");

  paragraph.setAttribute("id",addId)
  paragraph.setAttribute("class", `${addClass} text-${textColor} bg-${bgColor} fs-${fSize}`);

paragraph.textContent = Text;

return paragraph;

}



function select() {
  var component = document.getElementById("component").value;

  if (component == "button") {
    selectButtonShow();
  } else if (component == "div") {
    selectDivShow();
  } else if (component == "link") {
    selectLinkShow();
  } else if (component == "paragraph") {
    selectParagraphShow();
  } else if (component == "image") {
    selectImageShow();
  } else if (component == "input") {
    selectInputShow();
  } else if (component == "header") {
    selectHeaderShow();
  } else {
    return;
  }
}

function noneEl()
{
  let arrayAll =["addIdDiv","addClassDiv","btnDiv","colorDiv","fontSizeDiv","textDiv","headerDiv","inputDiv","imageDiv","linkDiv","textColorDiv"];

  arrayAll.forEach(element => {
    document.getElementById(element).style.display="none";
  });
}

function paragraphBlock()
{
  let paragraphBlockArr =["addIdDiv","addClassDiv","colorDiv","fontSizeDiv","textDiv","textColorDiv"];

  paragraphBlockArr.forEach(element => {
    document.getElementById(element).style.display="block";
  });

}

function headerBlock()
{
  let headerBlockArr =["addIdDiv","addClassDiv","colorDiv","textDiv","textColorDiv","headerDiv"];

  headerBlockArr.forEach(element => {
    document.getElementById(element).style.display="block";
  });
}

function buttonBlock()
{
  let buttonBlockArr =["addIdDiv","addClassDiv","btnDiv","colorDiv","fontSizeDiv","textDiv","textColorDiv"];

  buttonBlockArr.forEach(element => {
    document.getElementById(element).style.display="block";
  });
}

function divBlock()
{
  let buttonBlockArr =["addIdDiv","addClassDiv","fontSizeDiv","colorDiv","textDiv","textColorDiv"];

  buttonBlockArr.forEach(element => {
    document.getElementById(element).style.display="block";
  });
}


function selectButtonShow() {
noneEl();
buttonBlock();
}

function selectDivShow() {
noneEl();
divBlock();
}

function selectParagraphShow() {
noneEl();
paragraphBlock();
}

function selectHeaderShow() {
  noneEl();
  headerBlock();
  }


function selectLinkShow() {
  noneEl();
  document.getElementById("linkDiv").style.display = "block";
}

function selectImageShow() {
  noneEl();
  document.getElementById("imageDiv").style.display = "block";
}

function selectInputShow() {
  noneEl();
  document.getElementById("inputDiv").style.display = "block";
}



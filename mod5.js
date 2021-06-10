document.getElementById("formTable").style.display = 'none';

function getForm()
{
  var fname = document.getElementById("fNameF").value;
  var lname = document.getElementById("lNameF").value;
  var address = document.getElementById("addressF").value;
  var city = document.getElementById("cityF").value;
  var state = document.getElementById("stateF").value;

  var info = [fname, lname, address, city, state];

  console.log(fname + " "  + lname);
  console.log(address + " " + city + " " + state);

  document.getElementById("p1").style.display = 'none';
  document.getElementById("myForm").style.display = 'none';
  document.getElementById("formTable").style.display = 'initial';

  var table = document.getElementById("formTable");

  for (var i = 0; i < info.length; i++)
  {
    table.rows[1].cells[0].textContent = info[i];
  }

  table.rows[0].style.backgroundColor = "#63b094";
  table.rows[0].style.color = "#1b1c1c";
  table.rows[1].style.color = "#25473b";
}

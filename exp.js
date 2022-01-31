document.getElementById('button').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";
});

document.getElementById('form').addEventListener("submit", function(event){
  event.preventDefault() 

  var phone = document.getElementById('Phone').value
  console.log(phone)

  var network = document.getElementById('network').value
  console.log(network)

  var lname = document.getElementById('lname').value
  console.log(lname)
})
 

document.getElementById('btn').addEventListener("click", function() {
    document.querySelector('.modal').style.display = "flex";
});
''
document.querySelector('.quit').addEventListener("click", function() {
    document.querySelector('.modal').style.display = "none";
});

document.getElementById('temp').addEventListener("submit", function(event){
  event.preventDefault() 

  var disco = document.getElementById('disco').value
  console.log(disco)

  var plan = document.getElementById('plan').value
  console.log(plan)

  var metre = document.getElementById('metre').value
  console.log(metre)

  var numb = document.getElementById('numb').value
  console.log(numb)

  var email = document.getElementById('email').value
  console.log(email)

  var amnt = document.getElementById('amnt').value
  console.log(amnt)
})


document.getElementById('press').addEventListener("click", function() {
    document.querySelector('.mod').style.display = "flex";
});

document.querySelector('.stop').addEventListener("click", function() {
    document.querySelector('.mod').style.display = "none";
});

document.getElementById('rept').addEventListener("submit", function(event){
  event.preventDefault() 

  var cable = document.getElementById('cabletv').value
  console.log(cable)

  var bouq = document.getElementById('bouquet').value
  console.log(bouq)

  var smtCard = document.getElementById('smartcard').value
  console.log(smtCard)

  var phNum = document.getElementById('phNum').value
  console.log(phNum)

  var mail = document.getElementById('mail').value
  console.log(mail)
})

document.getElementById('hold').addEventListener("click", function() {
    document.querySelector('.modarl').style.display = "flex";
});

document.querySelector('.off').addEventListener("click", function() {
    document.querySelector('.modarl').style.display = "none";
});

document.getElementById('serv').addEventListener("submit", function(event){
  event.preventDefault() 

  var service = document.getElementById('service').value
  console.log(service)
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


document.getElementById("PayForElectricity").addEventListener("click", function () {
    var disco = document.getElementById("disco");
    var discoValue = disco.options[disco.selectedIndex].value;

    var plan = document.getElementById("plan");
    var planValue = plan.options[plan.selectedIndex].value;

    var meter_number = document.getElementById("metre").value;

    var data = {
      disco: discoValue,
      account_type: planValue,
      meter_number,
    };

    fetch(
      "https://vas-vendors.myfela.ng/staging/electricity/v2/validateMeterNo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTY2ZTU2NzIyYWU2NTA2NGZiNGJlOCIsImlhdCI6MTYwNzEwNTk5OCwiZXhwIjozMTcxNTE1NDgzOTh9.-1ZVCt99jk6a4KTOch4dH3mZaIDSu79ojO0P6QPf_Go",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("sdhcjhsdhs");
        if (data.status === "success") {
          console.log(`data.status: ${data}`);
          const verified = document.getElementById("suc");
          console.log("verified");
          verified.removeAttribute("hidden");
        } else {
          document.getElementById("failure").style.display = "visible";
        }
      })
      .catch((error) => {
        console.log("eror:", error);
      });
  });
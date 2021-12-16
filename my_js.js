function myData() {
    let contact_us = document.getElementById("contact_us");
    let contact_us_all = contact_us.querySelectorAll("form");
    var information = {};

    if (contact_us_all){
        for (let node of contact_us_all){
            let first_name = node.querySelector("#user_first_name").value;
            let last_name = node.querySelector("#user_last_name").value;
            let email = node.querySelector("#user_email").value;
            
            information = {
                "first_name": first_name,
                "last_name": last_name,
                "email": email
            };
            console.log(information)
        };

        let user_cookie = getCookie("information");
        if (user_cookie){
            let user_data = JSON.parse(user_cookie);
            if(user_data){
                console.log("user data")
                for (node of contact_us_all){
                    node.querySelector("#user_first_name").innerHTML = user_data["first_name"]
                    node.querySelector("#user_last_name").innerHTML = user_data["last_name"];
                    node.querySelector("#user_email").innerHTML = user_data["email"];
                    console.log(user_data["first_name"])
                };
            };
        }
        else{
            my_cookie(information);
            console.log("else")
        };
    };
}

function my_cookie(information_obj){
    var user_information = information_obj;
    let minutes = 5;
    let information_json = JSON.stringify(user_information);

    const d = new Date();
    d.setTime(d.getTime() + (minutes*60*1000));
    let expires = "expires="+ d.toUTCString();
    
    document.cookie = "information" + "=" + information_json + ";" + expires + ";path=/";
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }





// The below variables are basic configurations designed to be easily editable.
const sitename = "NFS Discord Replacement"
const servername = "Jeffery Dahmer's fridge" //
const siteadmin = "Thomas Bragg"
const correctauthanswers = ["easthope", "EASTHOPE", "eASTHOPE", "Easthope"];
const sites = ["Totton", "Dibden", "Fawley", "OLC"];

document.getElementById("sitename").innerHTML = sitename;
document.getElementById("siteadmin").innerHTML = siteadmin;

function isauthed() {
	console.log("placeholder for real auth check")
  return true;
}
function authchecker() {
  let nfsauthanswer = document.forms["nfs-auth-question"]["nfs-auth-answer"].value;
  if (correctauthanswers.includes(nfsauthanswer.trim())) {
    authwin();
    return true;
  } else {
    alert("Incorrect.");
    window.location.replace("https://google.com");
    return false;
  }
}

function authwin() {
	console.log("Insert the code that would set a cookie to 1 thus the pupil being authed in.")
}

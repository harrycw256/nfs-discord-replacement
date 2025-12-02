// The below variables are basic configurations designed to be easily editable.
const sitename = "NFS Discord Replacement"
const servername = "Jeffery Dahmer's fridge" //
const siteadmin = "Thomas Bragg"
const correctauthanswers = ["easthope", "EASTHOPE", "eASTHOPE", "Easthope"];
const sites = ["Totton", "Dibden", "Fawley", "OLC"];


document.getElementById("sitename").innerHTML = sitename;
document.getElementById("siteadmin").innerHTML = siteadmin;

function isauthed() {
	var authmybeasthope = document.cookie;
	if (authmybeasthope === 'authedmaboi=RowanDaBeasthope') {
		console.log("FUCK YEAH WE'RE AUTHEEEED");
		return true;
	} else {
		console.log("WE ARE NOT AUTH FUCK FUCK FUCK");
		return false;
	}
  return true;
}
function authchecker() {
  let nfsauthanswer = document.forms["nfs-auth-question"]["nfs-auth-answer"].value;
  if (correctauthanswers.includes(nfsauthanswer.trim())) {
	document.cookie = "authedmaboi=RowanDaBeasthope; expires=Thu, 10 Dec 2099 07:42:55 UTC";
	authwin();
    return true;
  } else {
    alert("Incorrect.");
    window.location.replace("https://google.com");
    return false;
  }
}

function authwin() {
	document.location.replace("/index.html");
}

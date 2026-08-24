/* Local demo auth: never use this as production security; connect it to server auth when deploying. */
(()=>{const link=document.getElementById('account-link'),user=JSON.parse(localStorage.getItem('mood-user')||'null');if(link&&user){link.href='user.html';link.textContent=`مرحباً ${user.name.split(' ')[0]}`}})();

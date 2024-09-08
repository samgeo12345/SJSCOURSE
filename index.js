document.addEventListener("DOMContentLoaded", function() {
    // Elements related to Login
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const login = document.getElementById("login");

    // Elements related to Sign Up
    const email = document.getElementById("email");
    const passwords = document.getElementById("passwords");
    const signin = document.getElementById("signin");

    const users=document.getElementById("user");
    const passes=document.getElementById("pass");

    // Handle Login
    login.addEventListener("click", function(event) {
        event.preventDefault();  // Prevents form from submitting automatically
        if (username.checkValidity() && password.checkValidity()) {
            const user = username.value.trim();
            const pass = password.value.trim();

            const storedEmail = localStorage.getItem("emails").split("@")[0];
            const storedPassword = localStorage.getItem("passwordss");

            if (user === storedEmail && pass === storedPassword) {
                window.location.href = "main.html";
            } else {
                username.classList.add("user-input");
                users.classList.add("label-user");
                password.classList.add("pass-input");
                passes.classList.add("label-pass");
            }
        } else {
            if(username.value.trim()==="" && password.value.trim()===""){
                username.reportValidity(); 
            }
            else if(username.value.trim()===""){
                username.reportValidity(); 
            }
            else{
                password.reportValidity();
            }
            // Trigger validation message for username
              // Trigger validation message for password
        }
    });

    // Handle Sign Up
    signin.addEventListener("click", function(event) {
        event.preventDefault();  // Prevents form from submitting automatically
        if (email.checkValidity() && passwords.checkValidity()) {
            const emails = email.value.trim();
            const passwordss = passwords.value.trim();
            localStorage.setItem("emails", emails);
            localStorage.setItem("passwordss", passwordss);
            alert("Account created successfully!");
            window.location.href = "main.html";
        } else {
            if(email.value.trim()==="" && passwords.value.trim()===""){
                email.reportValidity(); 
            }
            else if(email.value.trim()===""){
                email.reportValidity(); 
            }
            else{
                passwords.reportValidity();
            } // Trigger validation message for password
        }
    });

    // Toggle between login and sign-up forms
    const signinform = document.getElementById("signinform");
    const signindiv = document.getElementById("signindiv");
    const loginform = document.getElementById("loginform");
    const loginback = document.getElementById("loginback");

    signinform.addEventListener("click", function() {
        loginform.style.display = "none";
        signindiv.style.display = "block";
    });

    loginback.addEventListener("click", function() {
        loginform.style.display = "block";
        signindiv.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const left=document.getElementById("left");
    const right=document.getElementById("right");
    const tablescroll=document.getElementById("tablescroll");
    left.addEventListener("click",function(){
        tablescroll.scrollBy({left:-100,behavior:'smooth'});
    });
    right.addEventListener("click",function(){
        tablescroll.scrollBy({left:100,behavior:'smooth'});
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const left2=document.getElementById("left2");
    const right2=document.getElementById("right2");
    const tablescroll2=document.getElementById("tablescroll2");
    left2.addEventListener("click",function(){
        tablescroll2.scrollBy({left:-150,behavior:'smooth'});
    });
    right2.addEventListener("click",function(){
        tablescroll2.scrollBy({left:150,behavior:'smooth'});
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const ps=document.getElementById("ps1");
    const divs=document.getElementById("divs1");
    const imgs1=document.getElementById("imgs1");
    divs.addEventListener("mouseover",function(event){
        imgs1.style.opacity="0.4";
        imgs1.style.transition=".3s ease-in-out";
        ps.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i> <strong>WORKSHOP</strong><br>Explore the foundations of the World Wide Web, from its history and structure to the technologies that power it. This course covers essential web technologies like HTML, CSS, JavaScript, and web protocols, providing you with the knowledge to understand and navigate the digital landscape of the internet.';
    });
    divs.addEventListener("mouseout",function(){
        imgs1.style.opacity="";
        ps.innerHTML="";
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const ps2=document.getElementById("ps2");
    const divs2=document.getElementById("divs2");
    const imgs2=document.getElementById("imgs2");
    divs2.addEventListener("mouseover",function(event){
        imgs2.style.opacity="0.4";
        imgs2.style.transition=".3s ease-in-out";
        ps2.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i> <strong>MAKING PORTFOLIO</strong><br>Create a compelling portfolio to showcase your skills, projects, and achievements. Learn to design a visually appealing and user-friendly website that reflects your personal brand and stands out to potential employers or clients. Master the tools and techniques to highlight your expertise and make a strong impression online.';
    });
    divs2.addEventListener("mouseout",function(){
        imgs2.style.opacity="";
        ps2.innerHTML="";
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const ps3=document.getElementById("ps3");
    const divs3=document.getElementById("divs3");
    const imgs3=document.getElementById("imgs3");
    divs3.addEventListener("mouseover",function(event){
        imgs3.style.opacity="0.4";
        imgs3.style.transition=".3s ease-in-out";
        ps3.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i> <strong>CREATING WEBSITE</strong><br>Delve into web development by learning both frontend and backend technologies. Gain skills in HTML, CSS, JavaScript, and server-side programming to create dynamic and responsive websites. Understand how to build and deploy full-stack applications, ensuring seamless user interactions and robust functionality.';
    });
    divs3.addEventListener("mouseout",function(){
        imgs3.style.opacity="";
        ps3.innerHTML="";
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const ps4=document.getElementById("ps4");
    const divs4=document.getElementById("divs4");
    const imgs4=document.getElementById("imgs4");
    divs4.addEventListener("mouseover",function(event){
        imgs4.style.opacity="0.5";
        imgs4.style.transition=".3s ease-in-out";
        ps4.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i> <strong>WORKSHOP</strong><br>This quote emphasizes the importance of proactive action and creativity in shaping one’s own future. Its a great reminder for developers and creators to take charge of their journey and craft the future they desire through innovation and purposeful effort.';
    });
    divs4.addEventListener("mouseout",function(){
        imgs4.style.opacity="";
        ps4.innerHTML="";
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const ps5=document.getElementById("ps5");
    const divs5=document.getElementById("divs5");
    const imgs5=document.getElementById("imgs5");
    divs5.addEventListener("mouseover",function(event){
        imgs5.style.opacity="0.5";
        imgs5.style.transition=".3s ease-in-out";
        ps5.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i> <strong>WORKSHOP</strong><br>Embrace your unique qualities and become the best version of yourself. Cultivate traits like creativity, respect, calmness, and bravery, and strive to be free, happy, and true to who you are. Discover what you truly want and shape your path with positivity and purpose.';
    });
    divs5.addEventListener("mouseout",function(){
        imgs5.style.opacity="";
        ps5.innerHTML="";
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const menublock=document.getElementById("menublock");
    const menuoptions=document.getElementById("menuoptions");
    const bar=document.getElementById("bar");
    menublock.addEventListener("click",function(){
        if(menuoptions.style.display=="block"){
            menuoptions.style.display="none";
            bar.style.background="";
            menublock.style.color="black";
            menublock.innerHTML='<i class="fas fa-bars"></i>';
        }
        else{
            menuoptions.style.display="block";
            bar.style.background="linear-gradient(110deg,blue,lightblue)";
            menublock.style.color="white";
            menublock.innerHTML='<i class="fa-solid fa-xmark"></i>';
        }
    });
});
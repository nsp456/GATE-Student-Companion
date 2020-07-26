  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBAzW87u-wFarbtOXelubEwmr4PnsmBo48",
    authDomain: "form-c8c4b.firebaseapp.com",
    databaseURL: "https://form-c8c4b.firebaseio.com",
    projectId: "form-c8c4b",
    storageBucket: "form-c8c4b.appspot.com",
    messagingSenderId: "420519316295",
    appId: "1:420519316295:web:d59c600f1efbfa7dee5a62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();

    function signUp(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        // promise.catch(e => alert(e.message));   
        auth.onAuthStateChanged(function(user){
            if(user){
                var email = user.email;
                let n;
                for(let i=0; i<email.length;i++) {
                    if (email[i] === "@") 
                        n=i;
                }
                // alert("Signed Up");
                console.log("Signed up successfully");
                // alert("Welcome to GATE Student Companion Mr./Mrs. "+email.substring(0,n));
                window.location.href = 'gate.html';        
            }
            else
                promise.catch(e => alert(e.message));  
        });           
    }

    function signIn(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        // promise.catch(e => alert(e.message));  
        auth.onAuthStateChanged(function(user){
            if(user){
                var email = user.email;
                let n;
                for(let i=0; i<email.length;i++) {
                    if (email[i] === "@") 
                        n=i;
                }
                // alert("Signed In");
                console.log("Signed in successfully");
                // alert("Welcome to GATE Student Companion Mr./Mrs. "+email.substring(0,n));
                window.location.href = 'gate.html';
            }
            else
                promise.catch(e => alert(e.message));  
        });       
    }

    function signOut(){
        auth.signOut();
        alert("Signed Out Successfully !");
        console.log("Signed out successfully");
        window.location.href = 'index.html';
    }
    
    auth.onAuthStateChanged(function(user){
        if(user){
            flagu=true;
            var node = document.createElement("LI"); 
            var alreadyIn = " "+user.email+". You're already Signed In. Just click on Sign In or Sign Up to access the resources." ;            
            var textnode = document.createTextNode(alreadyIn);         
            node.appendChild(textnode);                              
            document.getElementById("cu").appendChild(node);
        }
        else{
            flagu=false;
            var node = document.createElement("LI");                
            var textnode = document.createTextNode(" none");         
            node.appendChild(textnode);                              
            document.getElementById("cu").appendChild(node);
        }                 
    });

var nn, mm, yy, xx, cc, maleanswer, femaleanswer;
        var selector;
        var selectorr;

        var malenames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var femalenames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

        

        //checkking if date validation base works
        function validatingInput(){
            alert(nn);
            alert(mm);
            alert(yy);
            alert(xx);
            alert(cc);
        }
        
        function getInputValue(){
            var d = new Date(document.getElementById('myInput').value);
            nn = d.getDay();
            mm = d.getMonth();
            yy = d.getFullYear();
            xx = yy.toString().substr(-2);
            cc = yy.toString().substr(2);
        }
        
        // function timeVerifier(){
        //     if(nn<31){
        //         alert("Input a valid date");
        //     }else if(mm>12){
        //         alert("Input a valid month");
        //     }else{

        //     }
        // }


        function genderselector(){
            getInputValue();
            //validatingInput();
            //to remove extra pop ups
            alert('Ignore the next five pop ups');
             if(selector===true){
                 maleanswer = malenames[nn];
                 alert(`Your male Akan Name is ${maleanswer}.`);
             }else if(selector===false){
                 selectorr === true;
             }else if(selectorr===true){
                 femaleanswer = femalenames[nn];
                 alert(`Your female akan name is ${femaleanswer} .`);
             }else{
                 selector === true;
             }
        }
        function maleisclicked(){
            selector = true;
        }
        function femaleisclicked(){
            
            selectorr = true;
        }
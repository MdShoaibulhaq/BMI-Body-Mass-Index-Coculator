

        function Clear(){
           document.getElementById("age").value="";
           document.getElementById("txtheight").value="";
           document.getElementById("txtweight").value="";
           document.querySelector('input[name="gender"]:checked').checked=false;
           document.getElementById("lblResult").outerHTML="";
           document.getElementById("lblBMI").innerText="";

        }
        function Calculate() {
            var age = parseInt(document.getElementById("age").value);
            var height = parseFloat(document.getElementById("txtheight").value) * 0.3048;
            var weight = parseFloat(document.getElementById("txtweight").value);

            var BMI = weight/(height * height);

            document.getElementById("lblResult").innerHTML=`BMI=${Math.round(BMI)} per kg/m<sup>2</sup> `

            if (BMI<18.5){
                document.getElementById("lblBMI").innerText="You're in the underweight range";
            }
            else if(BMI>=18.5 && BMI<25){
                document.getElementById("lblBMI").innerText="You're in the healthy weight range";

            }
            else if(BMI>=25 && BMI<30){
                document.getElementById("lblBMI").innerText="You're in the overweight range";

            }
            else if (BMI>=30 && BMI<35){
                document.getElementById("lblBMI").innerText="You're in the obesity class 1 range";

            }
            else if (BMI>=35 && BMI<40){
                document.getElementById("lblBMI").innerText="You're in the obesity class 2 range";

            }
            else if (BMI>=40){
                document.getElementById("lblBMI").innerText="You're in the obesity class 3 range";

            }
            else{
                document.getElementById("lblBMI").innerText="Please enter values";
            }
        }
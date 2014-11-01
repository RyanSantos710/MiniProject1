$(function(){
    $("input").on("keyup", function(e){                         //when "= +" is pressed, execute
        if(e.keyCode == 187 ){                                   //keyCode for "= +" is keyCode === 187
            var $this = $(this);                                //stores the specific event to this
            var number1 = ($("#number1").val()) || "0";     //assign variable OR assign it to 0
            var number2 = $this.val() || "0";                   //assign variable OR assign it to 0
            var answerAdd = parseInt(number1) + parseInt(number2);
            console.log(number1);                               //check number1
            console.log(number2);                               //check number2
            console.log(answerAdd);                                //check if answer is correct
            $("div#answer").text(answerAdd);                       //display answer
            $(".solution").show();                              //shows text "answer" when an answer is present
            $("input").val('');
        } 
    });                                                         // end of input and function
    
    $("input").on("keyup", function(e){                         //when "- _" is pressed, execute
        if(e.keyCode === 189){                                   //keyCode for "- _" is keyCode === 189
            var $this = $(this);                                //stores the specific event to this
            var number1 = ($("#number1").val()) || "0";     //assign variable OR assign it to 0
            var number2 = $this.val() || "0";                   //assign variable OR assign it to 0
            var answerSub = parseInt(number1) - parseInt(number2);
            console.log(number1);                               //check number1
            console.log(number2);                               //check number2
            console.log(answerSub);                                //check if answer is correct
            $("div#answer").text(answerSub);                       //display answer
            $(".solution").show();                              //shows text "answer" when an answer is present
            $("input").val('');
        }                                                       //end of if statement
    });                                                         // end of input and function   
    
    
     $("input").on("keyup", function(e){                         //when "shift + 8" is pressed, execute
        if(e.keyCode === 56 && e.shiftKey){                      //keyCode for "8" is 56 AND shiftKey checks if shift is pressed
            var $this = $(this);                                //stores the specific event to this
            var number1 = ($("#number1").val()) || "0";     //assign variable OR assign it to 0
            var number2 = $this.val() || "0";                   //assign variable OR assign it to 0
            var answerMult = parseInt(number1) * parseInt(number2);
            console.log(number1);                               //check number1
            console.log(number2);                               //check number2
            console.log(answerMult);                                //check if answer is correct
            $("div#answer").text(answerMult);                       //display answer
            $(".solution").show();                              //shows text "answer" when an answer is present
            $("input").val('');                               //clears input field after button is clicked

        }                                                       //end of if statement
    });                                                         // end of input and function 
    
    $("input").on("keyup", function(e){                         //when "/ ?" is pressed, execute
        if(e.keyCode === 191){                                   //keyCode for "/ ?" is keyCode === 191
            var $this = $(this);                                //stores the specific event to this
            var number1 = ($("#number1").val()) || "0";     //assign variable OR assign it to 0
            var number2 = $this.val() || "0";                   //assign variable OR assign it to 0
            var answerDivide = parseInt(number1) / parseInt(number2);
            console.log(number1);                               //check number1
            console.log(number2);                               //check number2
            console.log(answerDivide);                                //check if answer is correct
            $("div#answer").text(answerDivide);                       //display answer
            $(".solution").show();                              //shows text "answer" when an answer is present
            $("input").val('');
        }                                                       //end of if statement
    });                                                         // end of input and function
    
    
});                                                             //end of function
  //  problem solving-1  convert kilometer to meter

        function kilometerToMeter(convert){
            var meter = convert*1000;
            return meter;
        }
    

    // problem solving-2  budgetCalculator

        function budgetCalculator(clock,phone,laptop){
            var clockPrice = clock*50;
            var phonePrice = phone*100;
            var laptopPrice = laptop*500;
            var totalPrice = clockPrice+phonePrice+laptopPrice;
            return totalPrice;
        }
        var result = budgetCalculator(2,3,8);
        console.log(result);
            

      // problem solving-3 hotelCost 


         function hotelCost(day){
               var cost = 0;
               if(day<=10){
                cost = day*100;
                }
                else if(day<=20){
                var first10 = 10*100;
                var remaining = day-10;
                var second10 = remaining*80;
                cost = first10+second10;
                }
                else{
                var first10 = 10*100;
                var second10 = 10*80;
                var remaining = day-20;
                var Third = remaining*50;
                cost = first10+second10+Third;
                }
                return cost;
                
                }
            
            
        

            // problem solving-04 megaFriend



                function megaFriend(frnd)
                {
                var maxStr = frnd[0].length;
                var ans = frnd[0];
                for (var i = 1; i < frnd.length; i++) {
                    var maxi = frnd[i].length;
                    if (maxi > maxStr) {
                        ans = frnd[i];
                        maxStr = maxi;
                    }
                }
                return ans;

        }


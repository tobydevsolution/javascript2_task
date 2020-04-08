
// create array of objects called data with key value pairs

      let Data = [
      {
         principal: 2500,
         time: 1.8

      },

      {
         principal: 1000,
         time: 5

      },

      {
         principal: 3000,
         time: 1

      },

      {
         principal: 2000,
         time: 3

      }
      
      ];


   function interestCalculator(Data) {
      for (let i=0; i<Data.length; i++) {
         //statement
         //iterate for first condition
         if(Data[i].principal >= 2500 && Data[i].time < 3) {
            Data[i].rate = 3;
            //iterate for second condition
         }else if (Data[i].principal >= 2500 && Data[i].time >=3) {
            Data[i].rate = 4;
             //iterate for third condition
         }else if  (Data[i].principal < 2500 || Data[i].time <=3) {
            Data[i].rate = 1;
         }else {
            Data[i].rate = 1;
         }
      }
      const interestData = [];

      //calculate interst for each individual
      ( 2500 * 3 * 3) / 100. 

      ( 2500 * 4 * 3) / 100.

      ( 2500 * 1 * 3) / 100.

     
     console.log(interestData);
      return interestData;
     
   }

   interestCalculator.apply(null, Data);

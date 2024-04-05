import inquirer from "inquirer";

const welcome = () =>{
    console.log("Welcome to ATM");
    return new Promise((res =>{
        setTimeout(res, 1000);
    }))
}

async function atm(){
     await welcome();
     const balance: number = Math.floor(Math.random() * 1000)
     console.log(balance)
     let answers  = await inquirer.prompt([
         {
         type:"string",
         name:"userId",
         message:"Enter your user: "
         },
         {
          type:"number",
          name:"userPin",
          message:"Enter your pin: "
         },
         {
          type:"list",
          name:"account_Type",
          choices:["savings","current"],
          message: "Enter your account type: "
         },
         {
          type:"list",
          name:"transaction_Type",
          choices:["withdraw","fast cash"],
          message: "Enter your transaction type: ",
          when(answers){
                   return answers.account_Type 
          }
         },
        {
            type:"list",
            name:"amount",
            choices:[100,200,300,400,500],
            when(answers){
                return answers.transaction_Type == "fast cash"
            }
        },
        {
            type:"number",
            name:"amount",
            message:"Enter amount: ",
            when(answers){
                return answers.transaction_Type == "withdraw"
            }
        }
        ])
        if(answers.userId && answers.userPin){
            const enter_amount = answers.amount
            if(balance >= enter_amount){
                const remaining_balance = balance - enter_amount
                console.log("remaining balance: ", remaining_balance);
            }
            else{
                console.log("insufficient balance");
            }
        } else {
            console.log("invalid user");
        }
    }

    await atm()
/*
    
    const welcome = () =>{
        console.log("Welcome to ATM");
        return new Promise((res =>{
            setTimeout(res, 1000);
        }))
    }
    
    async function id(){
         await welcome();
         const balance: number = Math.floor(Math.random() * 1000)
         console.log(balance)
         var ids  = await inquirer.prompt([
             {
             type:"string",
             name:"userId",
             message:"Enter your user: "
             },
             {
              type:"number",
              name:"userPin",
              message:"Enter your pin: "
             },
            ])
            async function account(){
                await id(); 
                const answers = await inquirer.prompt([
                 {
                     type:"list",
                     name:"account_Type",
                     choices:["savings","current"],
                     message: "Enter your account type: "
                    },
                    {
                     type:"list",
                     name:"transaction_Type",
                     choices:["withdraw","fast cash"],
                     message: "Enter your transaction type: ",
                     when(answers){
                              return answers.account_Type 
                     }
                    },
                   {
                       type:"list",
                       name:"amount",
                       choices:[100,200,300,400,500],
                       when(answers){
                           return answers.transaction_Type == "fast cash"
                       }
                   },
                   {
                       type:"number",
                       name:"amount",
                       message:"Enter amount: ",
                       when(answers){
                           return answers.transaction_Type == "withdraw"
                       }
                    }
                ])   
                if(answers.userId && answers.userPin){
                    const enter_amount = answers.amount
                    if(balance >= enter_amount){
                        const remaining_balance = balance - enter_amount
                        console.log("remaining balance: ", remaining_balance);
                    }
                    else{
                        console.log("insufficient balance");
                    }
                } else {
                    console.log("invalid user");
                }    
             }
        }*/
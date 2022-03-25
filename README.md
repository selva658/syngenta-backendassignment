# syngenta-backendassignment
step 1:npm i
<br>
step 2:npm run server
<br>
step 3:open postman
<br>
step 4:(Adding new dishes)Method:post-http://localhost:4000/
         =>choose <b>Boby<b>=><b>raw<b>=><b>JSON<b>,
         =>{
             "restaurantname":"your data",
             "location":"your data",
             "category":[]
            }
         =>click <b>send<b> button.Data is now added.
  
  step 5:(List all dishes)Method:Get--http://localhost:4000/
  
  step 6:(Add dishes to a cart)Method:post-http://localhost:4000/cart
  
         =>choose <b>Boby<b>=><b>raw<b>=><b>JSON<b>,
         =>{
              "orders_id":"pass the id of Restataurant(example:623d42815ed92b020fcc3ff2 you can get id from step5)
            }
         =>click <b>send<b> button.Data is now added to cart.
  
  step 7:( Order dishes)Method:Get-http://localhost:4000/cart

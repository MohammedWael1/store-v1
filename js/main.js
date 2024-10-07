var app ={
    data(){
        return{
            products : products,
            isCartVisible : false,
            cart : [],

        }
    } ,

    methods : {
        addToCart(product){
  

             var checkCart = this.cart.some(function(item){
                return item.product.id == product.id
             })
        if (!checkCart){
                  // add product to cart
                      this.cart.push({
                       product : product ,
                       quantity : 1 ,
                        })

        }else {
            // update quantity
            var newPro = this.cart.find(function(item){
                 return item.product.id == product.id
            })
           newPro.quantity++;
        }

          product.stock--;
             },


        deleteCart(item){

            var idx = this.cart.findIndex(function(searcItem){
                return searcItem.product.id == item.product.id

            })
            // delete item in cart array
              this.cart.splice(idx,1); 
            
            // find product that was deleted
                this.products.find(function(product){
                return product.id == item.product.id
                }).stock += item.quantity
          },
    
    }

};

Vue.createApp(app).mount('#app');
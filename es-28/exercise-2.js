const order = {
    customer :{
      address :{
       
      }
    }
   
};

if (!order?.customer?.address?.city) {
  console.log('City is required');
}
else {
  console.log("city is declared")
}

/* order && order.customer && order.customer.address && !order.customer.address.city */

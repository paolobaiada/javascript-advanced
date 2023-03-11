const order = {
    customer : "chris", 
   address : "1165", 
    city : "roma"  
};

if (order?.customer?.address?.city) {
  console.log('City is required');
}

/* order && order.customer && order.customer.address && !order.customer.address.city */

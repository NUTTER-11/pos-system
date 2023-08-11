

const orderidarray = [];                                                                  //empty array of name orderid is created
const orderarray = [];                                                                    //empty array of name order is created
const orderitemsarray = [];                                                               //empty array of name orderitems is created
const orderPricearray = [];                                                               //empty array of name orderprice is created
const orderImageArray = []                                                                //empty array of name orderimage is created
const orderItemIdArray = []                                                               //empty array of name orderitemid is created
const orderItemquantity =[]

let i = 0;

function orderbasket(itemid, itemname, itemprice, itemimage) {

  if (orderitemsarray.indexOf(itemname) > -1) {                                             //if we found anything there then we have to do this
    const ItemidNumber = orderitemsarray.indexOf(itemname)                                  //search for the item and which index no it is located after finding it stores its value to itemidno 
    orderItemquantity[ItemidNumber] = orderItemquantity[ItemidNumber + 1];                  //increment the value in the total elements
    incrementitem(orderidarray[ItemidNumber], 1)                                            //increment the value in the increment item elements
  } else {
    //function is created which accepts the values from div when we click on paticular picture and ge the parameters from there
    orderidarray.push(i);                                                                   //pushes the value to paticular array mutating the array 
    orderItemIdArray.push(itemid);                                                          //pushes the value to paticular array mutating the array 
    orderitemsarray.push(itemname);                                                         //pushes the value to paticular array mutating the array 
    orderPricearray.push(itemprice);                                                        //pushes the value to paticular array 
    orderPricearray.push(itemprice);                                                        //pushes the value to paticular array
    orderImageArray.push(itemimage);                                                        //pushes the value to paticular array
    orderItemquantity.push(1)                                                               //quantitu will always be incremented
    orderarray.push(itemid, itemname, itemprice, itemimage);                                //pushes the value to paticular array

    const orderlist = document.getElementById("orderlist");                                 //all the values that are being appended in const orderlist will be displayed at place where id is orderlist
    const orderitemparent = document.createElement("li"); 
    const orderitem = document.createElement("span"); 
    orderitem.className = "d-flex justify-content-between";                                 // adding  alignment to the 3 categories

    const orderitempricespan = document.createElement("span");                               //create a span for red color

    //for creating a text node
    const orderitemname = document.createTextNode(itemname);
    const orderitemprice = document.createTextNode("  ₹" + itemprice);

    orderitempricespan.className = "text-danger";                                            //FOR ADJUSTING TEXT COLOR TO DANGER
    orderitempricespan.appendChild(orderitemprice);                                          //add price text node into span  --- for changing the color of price

    const deletebutton = document.createElement("button");
    const deletebuttontext = document.createTextNode("X");
    deletebutton.setAttribute("onclick", "deleteItem(" + i + ", this)");
    console.log("deleteItem(" + i + ", this)")                                              //+i+ == oderid , this tells to use this 
    deletebutton.className = "btn btn-outline-danger btn-sm";
    deletebutton.style = "height: fit-content;";
    deletebutton.appendChild(deletebuttontext);

    const orderitemimgtag = document.createElement("img");                                   //image adding image src
    orderitemimgtag.src = itemimage;                                                         //ASSIGNING THE SRC ITEM IMAGE TO IMG
    orderitemimgtag.className = "w-25 h-25";                                                 //changing the sdorces image width to 25
    orderitem.appendChild(orderitemimgtag);                                                  //append child to li tag
    //attaching the text nodes to list

    orderitem.appendChild(orderitemname);
    orderitem.appendChild(orderitempricespan);
    orderitem.appendChild(deletebutton);
    orderitemparent.appendChild(orderitem);
    orderlist.appendChild(orderitemparent);                                                   //attach the span to list

    const decrementbutton = document.createElement("button");
    const decrementbuttonText = document.createTextNode("-");
    decrementbutton.className = "btn-sm btn btn-danger rounded-pill px-2 ms-2";
    decrementbutton.setAttribute("onclick", "incrementitem(" + i + ",-1)");


    const incrementbutton = document.createElement("button");
    const incrementbuttonText = document.createTextNode("+");
    incrementbutton.className = "btn-sm btn btn-success rounded-pill px-2";
    incrementbutton.setAttribute("onclick", "incrementitem(" + i + ",+1)");
  
  
    const amountItemSpan = document.createElement("span");
    const amountItemText = document.createTextNode("1");
    amountItemSpan.className = "px-3 ms-1 fw-bold item" + i;

    incrementbutton.appendChild(incrementbuttonText);
    orderitemparent.appendChild(incrementbutton);
    

    amountItemSpan.appendChild(amountItemText);
    orderitemparent.appendChild(amountItemSpan);

    decrementbutton.appendChild(decrementbuttonText);
    orderitemparent.appendChild(decrementbutton);
    
    
    
    
    console.log(orderidarray);
    i++;
  }
}

function totalitems() {
  if (orderItemquantity.length) {
    document.getElementById("totalitems").innerText = orderItemquantity.reduce(                       //operation performed for calculating the total items if elements are present in array
      (total, num) => { return total + num });
  }
  else {
    document.getElementById("totalitems").innerText = "0";                                            //operation performed for calculating the total items if elements are  not present in array
  }

}



function costitems() {
  if (orderPricearray.length === 0) {
    document.getElementById("totalcost").innerText = 0;
  } else {
    const totalTempArray = [];
    orderItemquantity.map((quantity, index) => {
      totalTempArray.push(quantity * orderPricearray[index]);
    });
    document.getElementById("totalcost").innerText =
      totalTempArray.reduce(sumarray).toFixed(2);

    function sumarray(total, num) {
      return (total + num);
    };
    
  }
};


function orderbasketclear() {
  let orderlist = document.getElementById("orderlist");
  orderlist.innerHTML = "";
  orderitemsarray.length = 0;                                                                                        //set order items array to
  orderPricearray.length = 0;                                                                                        //set order price array to 0
  orderarray.length = 0;                                                                                             //set order order array to 0
  orderidarray.length = 0;                                                                                           //set order orderid array to 0
  orderItemquantity.length = 0;                                                                                      //set order items quantity array to 0
  i = 0;

  totalitems();
  costitems();
}

function deleteItem(orderid,button) {
  const indexnum = orderidarray.indexOf(orderid);
  orderItemIdArray.splice(indexnum, 1);
  //splice - it manuplates the orignal array ,,, spice -- creates the clone and manulpuates the cloned array
  orderidarray.splice(indexnum, 1);                                                                                   //from which item , to at what position
  orderitemsarray.splice(indexnum, 1);                                                                                //this will help in deleteing the item name
  orderPricearray.splice(indexnum, 1);                                                                                //this will help in deleteing the item array
  orderImageArray.splice(indexnum, 1);
  console.log(orderidarray);
  orderItemquantity.length = 0;
  totalitems();
  costitems();
  document.getElementById("orderlist").removeChild(button.parentElement.parentElement);

}


function incrementitem(orderid,val) {
  const itemSpan = document.querySelector('.item'+ orderid);                                                        //with the help of +orderid so we can access any item oderid will attach the id no with item
  itemSpan.innerText = parseInt(itemSpan.innerText) + val;                                                          //when we click on the increment button so it will increase the value we had used parse int so it will increment by 1 otherwise it will increment by 10 val is written herebeacuse increment and decrement is done by same
  const indexnum = orderidarray.indexOf(orderid);                                                                   //this is here  for the cost function
  orderItemquantity[indexnum] = parseInt(itemSpan.innerText)  
  totalitems()  
  costitems();
  //console.log(orderItemquantity)
  //console.log(itemSpan.innerText)
  if (itemSpan.innerText == 0) {
    orderItemIdArray.splice(indexnum, 1)
    //splice - it manuplates the orignal array ,,, spice -- creates the clone and manulpuates the cloned array
    orderidarray.splice(indexnum, 1);                                                                                  //from which item , to at what position
    orderitemsarray.splice(indexnum, 1);                                                                               //this will help in deleteing the item name
    orderPricearray.splice(indexnum, 1);                                                                               //this will help in deleteing the item array
    orderImageArray.splice(indexnum, 1);
    orderItemquantity.splice(indexnum,1)
    console.log(orderidarray);
    document.getElementById("orderlist").removeChild(itemSpan.parentElement);
    
  }
}

  //console.log(button.parentElement)

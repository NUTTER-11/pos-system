import React, { useState } from "react";

function OrderBasketItem({ item, index, incrementItem, deleteItem }) {
  return (
    <li className="d-flex justify-content-between">
      <span className="w-25 h-25">
        <img src={item.itemimage} alt={item.itemname} className="w-100 h-100" />
      </span>
      <span>{item.itemname}</span>
      <span className="text-danger px-5 ms-2">₹{item.price}</span>

      <button
        className="btn-sm btn btn-danger rounded-pill px-2 ms-2"
        onClick={() => incrementItem(index, -1)}
      >
        -
      </button>
      <span className="px-4 ms-1 fw-bold">{item.quantity}</span>
      <button
        className="btn-sm btn btn-success rounded-pill px-2"
        onClick={() => incrementItem(index, 1)}
      >
        +
      </button>
      <span className="px- ms-3 "></span>
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={() => deleteItem(index)}
        style={{ height: "fit-content" }}
      >
        X
      </button>
    </li>
  );
}

function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("burger"); // Default active category
    const orderbasket = (itemId, itemName, itemPrice, itemImage) => {
      // Logic to add the selected item to the order basket
      const newItem = {
        id: itemId,
        name: itemName,
        price: itemPrice,
        image: itemImage,
        quantity: 1, // You can set an initial quantity
      };

      // Update the orderItems state with the new item
          const existingItem = orderItems.find((item) => item.id === itemId);
          if (existingItem) {
            // Item already exists, increase the quantity
            existingItem.quantity += 1;
            setOrderItems([...orderItems]);
          } else {
            setOrderItems([...orderItems, newItem]);
          }
    };

  const deleteItem = (index) => {
    const newOrderItems = [...orderItems];
    newOrderItems.splice(index, 1);
    setOrderItems(newOrderItems);
  };

  const incrementItem = (index, value) => {
    const newOrderItems = [...orderItems];
    newOrderItems[index].quantity += value;

    if (newOrderItems[index].quantity <= 0) {
      newOrderItems.splice(index, 1);
    }

    setOrderItems(newOrderItems);
  };

  const totalItems = orderItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

const totalCost = orderItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);


  const orderbasketclear = () => {
    setOrderItems([]);
  };
   const handleCategoryChange = (category) => {
     setActiveCategory(category);
   };


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="card rounded-pill mb-3">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeCategory === "burger" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange("burger")}
                  role="tab"
                  aria-controls="pills-burger"
                  aria-selected={activeCategory === "burger"}
                >
                  Burger
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeCategory === "pizza" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange("pizza")}
                  role="tab"
                  aria-controls="pills-pizza"
                  aria-selected={activeCategory === "pizza"}
                >
                  Pizza
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeCategory === "drinks" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange("drinks")}
                  role="tab"
                  aria-controls="pills-drinks"
                  aria-selected={activeCategory === "drinks"}
                >
                  Drinks
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className={`tab-pane fade ${
                activeCategory === "burger" ? "show active" : ""
              }`}
              id="pills-burger"
              role="tabpanel"
              aria-labelledby="pills-burger-tab"
            >
              {/* Content for Burger category */}
              <div
                className="tab-pane fade show active"
                id="pills-burger"
                role="tabpanel"
                aria-labelledby="pills-burger-tab"
              >
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "1",
                          "Veggie Burger",
                          65,
                          "https://s7d1.scene7.com/is/image/mcdonalds/mcd-Veggie-burger-deluxe-uae:product-header-desktop?wid=829&hei=455&dpr=off"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://s7d1.scene7.com/is/image/mcdonalds/mcd-Veggie-burger-deluxe-uae:product-header-desktop?wid=829&hei=455&dpr=off"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Veggie Burger
                        </h5>
                        <p className="card-text fw-bold">₹65</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "2",
                          "Makhni Burger",
                          75,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymVqIlaFUeuVx1zUaRSPu1bP59l0eKR7Bfg&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymVqIlaFUeuVx1zUaRSPu1bP59l0eKR7Bfg&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Makhni Burger
                        </h5>
                        <p className="card-text fw-bold">₹75</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "3",
                          "Cream Burger",
                          70,
                          "https://tastesbetterfromscratch.com/wp-content/uploads/2019/06/Black-Bean-Burgers-Web-18-500x375.jpg"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://tastesbetterfromscratch.com/wp-content/uploads/2019/06/Black-Bean-Burgers-Web-18-500x375.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Cream Burger
                        </h5>
                        <p className="card-text fw-bold">₹70</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "4",
                          "Chesse Burger",
                          75,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRclrY6anIsphPOwfr0HSo0YNNbNzAToH1Yg&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRclrY6anIsphPOwfr0HSo0YNNbNzAToH1Yg&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Chesse Burger
                        </h5>
                        <p className="card-text fw-bold">₹75</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-2 row-cols-md-4 g-4">
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "5",
                          "Ollive Burger",
                          85,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3-90YFqESp7Rl9XdZs3hiz0wChE5b0lujA&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3-90YFqESp7Rl9XdZs3hiz0wChE5b0lujA&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          ollive Burger
                        </h5>
                        <p className="card-text fw-bold">₹85</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "6",
                          "Paneer tikka Burger",
                          90,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBDrDjDeCKsd0LBcTmJK64N1AeHDQMzPY0A&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBDrDjDeCKsd0LBcTmJK64N1AeHDQMzPY0A&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Paneer Tikka Burger
                        </h5>
                        <p className="card-text fw-bold">₹90</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() => orderbasket("7", "Mexican Burger", 95, "")}
                    >
                      <img
                        draggable="false"
                        src=""
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Mexican Burger
                        </h5>
                        <p className="card-text fw-bold">₹95</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "8",
                          "Chesse Burger",
                          125,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJBTWZGm6YD-GWlo--7EzEQT0zlqzmOXJbw&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJBTWZGm6YD-GWlo--7EzEQT0zlqzmOXJbw&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Maha Burger
                        </h5>
                        <p className="card-text fw-bold">₹125</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-3 row-cols-md-4 g-4">
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "9",
                          "Turkey Burger",
                          110,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10hCV8nGZaYhfZlYcOCZarCpudkF54rFUwg&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10hCV8nGZaYhfZlYcOCZarCpudkF54rFUwg&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Turkey Burger
                        </h5>
                        <p className="card-text fw-bold">₹110</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "10",
                          "Smash Burger",
                          130,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6T0356swnin32WhdsfitCZnf38_ZAgF7Ew&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6T0356swnin32WhdsfitCZnf38_ZAgF7Ew&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Smash Burger
                        </h5>
                        <p className="card-text fw-bold">₹130</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "11",
                          "Grill Burger",
                          85,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7hHnNyL3S7v1PM0aR_28jMSRigQ3Kb5ykQ&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7hHnNyL3S7v1PM0aR_28jMSRigQ3Kb5ykQ&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Grill Burger
                        </h5>
                        <p className="card-text fw-bold">₹85</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "12",
                          "Special Burger",
                          130,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQY1m9kmk2SqjVcig0KJgE9XIxZ5_1gz8Aw&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQY1m9kmk2SqjVcig0KJgE9XIxZ5_1gz8Aw&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Special Burger
                        </h5>
                        <p className="card-text fw-bold">₹130</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane fade ${
                activeCategory === "pizza" ? "show active" : ""
              }`}
              id="pills-pizza"
              role="tabpanel"
              aria-labelledby="pills-pizza-tab"
            >
              {/* Content for Burger category */}
              <div
                className="tab-pane fade show active"
                id="pills-pizza"
                role="tabpanel"
                aria-labelledby="pills-pizza-tab"
              >
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "13",
                          "Veggie pizza",
                          165,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKriLIz5YggkLD31OZYFxCJ-5W_K-kIDLs4g&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKriLIz5YggkLD31OZYFxCJ-5W_K-kIDLs4g&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Veggie Pizza
                        </h5>
                        <p className="card-text fw-bold">₹165</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "14",
                          "Makhni Pizza",
                          170,
                          "https://cdn.dotpe.in/longtail/store-items/7864951/4swe7oMd.jpeg"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://cdn.dotpe.in/longtail/store-items/7864951/4swe7oMd.jpeg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Makhni Pizza
                        </h5>
                        <p className="card-text fw-bold">₹170</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "15",
                          "Chesse Pizza",
                          180,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiHYwKRmLe0PfRlSMXRIPn9Rpd-l3613NGQ&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiHYwKRmLe0PfRlSMXRIPn9Rpd-l3613NGQ&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Chesse Pizza
                        </h5>
                        <p className="card-text fw-bold">₹180</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "16",
                          "Onion Pizza",
                          150,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mSnUG5HNHM_ADKZDs8FEk1aRn5vUWStIHd-HKWZn87OOREsiUQJhgIHwQZ7Prxau7vE&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mSnUG5HNHM_ADKZDs8FEk1aRn5vUWStIHd-HKWZn87OOREsiUQJhgIHwQZ7Prxau7vE&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Onion Pizza
                        </h5>
                        <p className="card-text fw-bold">₹150</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-2 row-cols-md-4 g-4">
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "17",
                          "Pepperoni pizza",
                          185,
                          "https://myfoodbook.com.au/sites/default/files/styles/schema_img/public/recipe_photo/pepperoni-pizza.jpg"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://myfoodbook.com.au/sites/default/files/styles/schema_img/public/recipe_photo/pepperoni-pizza.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Pepperoni pizza
                        </h5>
                        <p className="card-text fw-bold">₹185</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "18",
                          "Cheesiano Pizza",
                          190,
                          "https://media-cdn.tripadvisor.com/media/photo-s/15/9c/11/a4/pizza.jpg"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://media-cdn.tripadvisor.com/media/photo-s/15/9c/11/a4/pizza.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Cheesiano Pizza
                        </h5>
                        <p className="card-text fw-bold">₹190</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "19",
                          "Chicago-Style Deep Dish Pizza",
                          230,
                          "https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/02ea0224-7316-406d-bb3d-5ed36e17a7b6/Derivates/85848d56-2911-4221-950f-b071d2d8fedf.jpg"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/02ea0224-7316-406d-bb3d-5ed36e17a7b6/Derivates/85848d56-2911-4221-950f-b071d2d8fedf.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Chicago-Style Deep Dish Pizza
                        </h5>
                        <p className="card-text fw-bold">₹230</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "20",
                          "Mexican pizza",
                          195,
                          "https://tastesbetterfromscratch.com/wp-content/uploads/2019/07/Mexican-Pizza-Thumbnail-11.jpg"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://tastesbetterfromscratch.com/wp-content/uploads/2019/07/Mexican-Pizza-Thumbnail-11.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Mexican Pizza
                        </h5>
                        <p className="card-text fw-bold">₹195</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-3 row-cols-md-4 g-4">
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "21",
                          "Courgette, lemon and mozzarella pizza",
                          190,
                          "https://www.sainsburysmagazine.co.uk/uploads/media/720x770/05/4495-Courgette-pizza-1120.jpg?v=1-0"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://www.sainsburysmagazine.co.uk/uploads/media/720x770/05/4495-Courgette-pizza-1120.jpg?v=1-0"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Courgette, lemon and mozzarella pizza
                        </h5>
                        <p className="card-text fw-bold">₹190</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "22",
                          "London Yard Pizza",
                          230,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvSJfCWGHIcs0SA9GCVuxj1iZUTBzlF46wGCe77eXBDLfPSTbqZCi1iw8-gdMqPoE_Z0&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvSJfCWGHIcs0SA9GCVuxj1iZUTBzlF46wGCe77eXBDLfPSTbqZCi1iw8-gdMqPoE_Z0&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          London Yard Pizza
                        </h5>
                        <p className="card-text fw-bold">₹230</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "23",
                          "Bacon Pizza",
                          185,
                          "https://www.thespruceeats.com/thmb/23NTwSODwjvMBSuc87GILHxD8t4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bacon-pizza-482053-hero-01-2f6c8ac218e54d16968e0dd8378cc1d4.jpg"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://www.thespruceeats.com/thmb/23NTwSODwjvMBSuc87GILHxD8t4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bacon-pizza-482053-hero-01-2f6c8ac218e54d16968e0dd8378cc1d4.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Bacon Pizza
                        </h5>
                        <p className="card-text fw-bold">₹185</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket(
                          "24",
                          "Special Pizza",
                          230,
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G5H9tWuiuFhSvvWaufl_NMz8I7IXk33X-g&usqp=CAU"
                        )
                      }
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G5H9tWuiuFhSvvWaufl_NMz8I7IXk33X-g&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          Special Pizza
                        </h5>
                        <p className="card-text fw-bold">₹230</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
            className={`tab-pane fade ${
              activeCategory === "drinks" ? "show active" : ""
            }`}
            id="pills-drinks"
            role="tabpanel"
            aria-labelledby="pills-drinks-tab"
          >
            <div
              className="tab-pane fade show active"
              id="pills-drinks"
              role="tabpanel"
              aria-labelledby="pills-drinks-tab"
            >
              <div className="row row-cols-1 row-cols-md-4 g-4">
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket('25','Coca-Cola',45,'https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/products/coca-cola-original/desktop/coca-cola-original-12oz.jpg?wid=325')}
                    >
                      <img
                        draggable="false"
                        src="https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/products/coca-cola-original/desktop/coca-cola-original-12oz.jpg?wid=325"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">Coca-Cola</h5>
                        <p className="card-text fw-bold">₹45</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                    className="card p-3 mb-3"
                    onClick={() =>
                      orderbasket('26', 'Fanta', 45, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJuFyA4HmKH8fl0N2c_Qhu6irN3wTwH3JWQ&usqp=CAU')}
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJuFyA4HmKH8fl0N2c_Qhu6irN3wTwH3JWQ&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">Fanta</h5>
                        <p className="card-text fw-bold">₹45</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket('27','Sprite',45,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOSwMWtSiadQQyhVbRUTqkMzyB8v1QyExuw&usqp=CAU')}
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOSwMWtSiadQQyhVbRUTqkMzyB8v1QyExuw&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">Sprite</h5>
                        <p className="card-text fw-bold">₹45</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card p-3 mb-3"
                      onClick={() =>
                        orderbasket('28','Pepsi',45,'https://5.imimg.com/data5/SELLER/Default/2021/12/MC/DC/HA/26602448/250-ml-pepsi-soft-drink-can-500x500.jpg')} >
                      <img
                        draggable="false"
                        src="https://5.imimg.com/data5/SELLER/Default/2021/12/MC/DC/HA/26602448/250-ml-pepsi-soft-drink-can-500x500.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">Pepsi</h5>
                        <p className="card-text fw-bold">₹45</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="d-flex justify-content-between align_items_center">
                <span>Orders</span>
                <button
                  onClick={orderbasketclear}
                  className="btn btn-sm btn-danger"
                >
                  Clear
                </button>
              </h5>
              <ul
                id="orderlist"
                className="list-unstyled"
                style={{ height: "50vh", overflowY: "auto" }}
              >
                {orderItems.map((item, index) => (
                  <li
                    key={index}
                    className="d-flex justify-content-between align_items_center"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-25 h-30 mr-2"
                      />
                      <OrderBasketItem
                        item={item}
                        index={index}
                        incrementItem={incrementItem}
                        deleteItem={deleteItem}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <ul id="orderlist" className="list-unstyled">
                <li className="d-flex justify-content-between align_items_center">
                  <big>Total items:</big>
                  <big id="totalitems" className="card-text">
                    {totalItems}
                  </big>
                </li>
                <li className="d-flex justify-content-between align_items_center">
                  <big>Total Cost:</big>
                  <big>
                    ₹
                    <span id="totalcost" className="card-text">
                      {totalCost}
                    </span>
                  </big>
                </li>
                <li>
                  <hr />
                  <button
                    className="btn btn-primary btn-lg w-100"
                    onClick={() => alert("click to proceed")}
                  >
                    Checkout
                  </button>
                </li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

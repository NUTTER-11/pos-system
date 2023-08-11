<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
      integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
      integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS"
      crossorigin="anonymous"
    ></script>
    <script src="script.js"></script>
    <body>
      <div class="bg-dark p-3">
        <div class="row mx-0 py-3 bg-light">
          <div class="col-sm-8">
            <p>
              order no 11 <small class="text_muted">Today jun 22 2023</small>
            </p>
            <div class="'card rounded-pill mb-3">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-burger-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-burger"
                    type="button"
                    role="tab"
                    aria-controls="pills-burger"
                    aria-selected="true"
                  >
                    Burger
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-pizza-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-pizza"
                    type="button"
                    role="tab"
                    aria-controls="pills-pizza"
                    aria-selected="false"
                  >
                    Pizza
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-drinks-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-drinks"
                    type="button"
                    role="tab"
                    aria-controls="pills-drinks"
                    aria-selected="false"
                  >
                    Drinks
                  </button>
                </li>
              </ul>
            </div>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-burger"
                role="tabpanel"
                aria-labelledby="pills-burger-tab"
                tabindex="0"
              >
                <div class="row row-cols-1 row-cols-md-4 g-4">
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('1','Veggie Burger',65,'https://s7d1.scene7.com/is/image/mcdonalds/mcd-Veggie-burger-deluxe-uae:product-header-desktop?wid=829&hei=455&dpr=off'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://s7d1.scene7.com/is/image/mcdonalds/mcd-Veggie-burger-deluxe-uae:product-header-desktop?wid=829&hei=455&dpr=off"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Veggie Burger</h5>
                        <p class="card-text fw-bold">₹65</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('2','Makhni Burger',75,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymVqIlaFUeuVx1zUaRSPu1bP59l0eKR7Bfg&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymVqIlaFUeuVx1zUaRSPu1bP59l0eKR7Bfg&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Makhni Burger</h5>
                        <p class="card-text fw-bold">₹75</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('3','Cream Burger',70,'https://tastesbetterfromscratch.com/wp-content/uploads/2019/06/Black-Bean-Burgers-Web-18-500x375.jpg'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://tastesbetterfromscratch.com/wp-content/uploads/2019/06/Black-Bean-Burgers-Web-18-500x375.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Cream Burger</h5>
                        <p class="card-text fw-bold">₹70</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('4','Chesse Burger',75,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRclrY6anIsphPOwfr0HSo0YNNbNzAToH1Yg&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRclrY6anIsphPOwfr0HSo0YNNbNzAToH1Yg&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Chesse Burger</h5>
                        <p class="card-text fw-bold">₹75</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="row row-cols-2 row-cols-md-4 g-4">
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('5','Ollive Burger',85,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3-90YFqESp7Rl9XdZs3hiz0wChE5b0lujA&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3-90YFqESp7Rl9XdZs3hiz0wChE5b0lujA&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">ollive Burger</h5>
                        <p class="card-text fw-bold">₹85</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('6','Paneer tikka Burger',90,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBDrDjDeCKsd0LBcTmJK64N1AeHDQMzPY0A&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBDrDjDeCKsd0LBcTmJK64N1AeHDQMzPY0A&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Paneer Tikka Burger</h5>
                        <p class="card-text fw-bold">₹90</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('7','Mexican Burger',95,'data:image/jpeg;base64,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'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="data:image/jpeg;base64,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"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Mexican Burger</h5>
                        <p class="card-text fw-bold">₹95</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('8','Chesse Burger',125,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJBTWZGm6YD-GWlo--7EzEQT0zlqzmOXJbw&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJBTWZGm6YD-GWlo--7EzEQT0zlqzmOXJbw&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Maha Burger</h5>
                        <p class="card-text fw-bold">₹125</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="row row-cols-3 row-cols-md-4 g-4">
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('9','Turkey Burger',110,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10hCV8nGZaYhfZlYcOCZarCpudkF54rFUwg&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10hCV8nGZaYhfZlYcOCZarCpudkF54rFUwg&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Turkey Burger</h5>
                        <p class="card-text fw-bold">₹110</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('10','Smash Burger',130,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6T0356swnin32WhdsfitCZnf38_ZAgF7Ew&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6T0356swnin32WhdsfitCZnf38_ZAgF7Ew&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Smash Burger</h5>
                        <p class="card-text fw-bold">₹130</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('11','Grill Burger',85,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7hHnNyL3S7v1PM0aR_28jMSRigQ3Kb5ykQ&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7hHnNyL3S7v1PM0aR_28jMSRigQ3Kb5ykQ&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Grill Burger</h5>
                        <p class="card-text fw-bold">₹85</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('12','Special Burger',130,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQY1m9kmk2SqjVcig0KJgE9XIxZ5_1gz8Aw&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQY1m9kmk2SqjVcig0KJgE9XIxZ5_1gz8Aw&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Special Burger</h5>
                        <p class="card-text fw-bold">₹130</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-pizza"
                role="tabpanel"
                aria-labelledby="pills-pizza-tab"
                tabindex="0"
              >
                <div class="row row-cols-1 row-cols-md-4 g-4">
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('13','Veggie pizza',165,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKriLIz5YggkLD31OZYFxCJ-5W_K-kIDLs4g&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKriLIz5YggkLD31OZYFxCJ-5W_K-kIDLs4g&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Veggie Pizza</h5>
                        <p class="card-text fw-bold">₹165</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('14','Makhni Pizza',170,'https://cdn.dotpe.in/longtail/store-items/7864951/4swe7oMd.jpeg'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://cdn.dotpe.in/longtail/store-items/7864951/4swe7oMd.jpeg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Makhni Pizza</h5>
                        <p class="card-text fw-bold">₹170</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('15','Chesse Pizza',180,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiHYwKRmLe0PfRlSMXRIPn9Rpd-l3613NGQ&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiHYwKRmLe0PfRlSMXRIPn9Rpd-l3613NGQ&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Chesse Pizza</h5>
                        <p class="card-text fw-bold">₹180</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('16','Onion Pizza',150,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mSnUG5HNHM_ADKZDs8FEk1aRn5vUWStIHd-HKWZn87OOREsiUQJhgIHwQZ7Prxau7vE&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mSnUG5HNHM_ADKZDs8FEk1aRn5vUWStIHd-HKWZn87OOREsiUQJhgIHwQZ7Prxau7vE&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Onion Pizza</h5>
                        <p class="card-text fw-bold">₹150</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="row row-cols-2 row-cols-md-4 g-4">
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('17','Pepperoni pizza',185,'https://myfoodbook.com.au/sites/default/files/styles/schema_img/public/recipe_photo/pepperoni-pizza.jpg'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://myfoodbook.com.au/sites/default/files/styles/schema_img/public/recipe_photo/pepperoni-pizza.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Pepperoni pizza</h5>
                        <p class="card-text fw-bold">₹185</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('18','Cheesiano Pizza',190,'https://media-cdn.tripadvisor.com/media/photo-s/15/9c/11/a4/pizza.jpg'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://media-cdn.tripadvisor.com/media/photo-s/15/9c/11/a4/pizza.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Cheesiano Pizza</h5>
                        <p class="card-text fw-bold">₹190</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('19','Chicago-Style Deep Dish Pizza',230,'https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/02ea0224-7316-406d-bb3d-5ed36e17a7b6/Derivates/85848d56-2911-4221-950f-b071d2d8fedf.jpg'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/02ea0224-7316-406d-bb3d-5ed36e17a7b6/Derivates/85848d56-2911-4221-950f-b071d2d8fedf.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Chicago-Style Deep Dish Pizza</h5>
                        <p class="card-text fw-bold">₹230</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('20','Mexican pizza',195,'https://tastesbetterfromscratch.com/wp-content/uploads/2019/07/Mexican-Pizza-Thumbnail-11.jpg'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://tastesbetterfromscratch.com/wp-content/uploads/2019/07/Mexican-Pizza-Thumbnail-11.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Mexican Pizza</h5>
                        <p class="card-text fw-bold">₹195</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="row row-cols-3 row-cols-md-4 g-4">
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('21','Courgette, lemon and mozzarella pizza',190,'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/05/4495-Courgette-pizza-1120.jpg?v=1-0'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://www.sainsburysmagazine.co.uk/uploads/media/720x770/05/4495-Courgette-pizza-1120.jpg?v=1-0"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Courgette, lemon and mozzarella pizza</h5>
                        <p class="card-text fw-bold">₹190</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('22','London Yard Pizza',230,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvSJfCWGHIcs0SA9GCVuxj1iZUTBzlF46wGCe77eXBDLfPSTbqZCi1iw8-gdMqPoE_Z0&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvSJfCWGHIcs0SA9GCVuxj1iZUTBzlF46wGCe77eXBDLfPSTbqZCi1iw8-gdMqPoE_Z0&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">London Yard Pizza</h5>
                        <p class="card-text fw-bold">₹230</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('23','Bacon Pizza',185,'https://www.thespruceeats.com/thmb/23NTwSODwjvMBSuc87GILHxD8t4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bacon-pizza-482053-hero-01-2f6c8ac218e54d16968e0dd8378cc1d4.jpg'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://www.thespruceeats.com/thmb/23NTwSODwjvMBSuc87GILHxD8t4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bacon-pizza-482053-hero-01-2f6c8ac218e54d16968e0dd8378cc1d4.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Bacon Pizza</h5>
                        <p class="card-text fw-bold">₹185</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('24','Special Pizza',230,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G5H9tWuiuFhSvvWaufl_NMz8I7IXk33X-g&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G5H9tWuiuFhSvvWaufl_NMz8I7IXk33X-g&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Special Pizza</h5>
                        <p class="card-text fw-bold">₹230</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-drinks"
                role="tabpanel"
                aria-labelledby="pills-drinks-tab"
                tabindex="0"
              >
                <div class="row row-cols-1 row-cols-md-4 g-4">
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('25','Coca-Cola',45,'https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/products/coca-cola-original/desktop/coca-cola-original-12oz.jpg?wid=325'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/products/coca-cola-original/desktop/coca-cola-original-12oz.jpg?wid=325"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Coca-Cola</h5>
                        <p class="card-text fw-bold">₹45</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('26','Fanta',45,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJuFyA4HmKH8fl0N2c_Qhu6irN3wTwH3JWQ&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJuFyA4HmKH8fl0N2c_Qhu6irN3wTwH3JWQ&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Fanta</h5>
                        <p class="card-text fw-bold">₹45</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('27','Sprite',45,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOSwMWtSiadQQyhVbRUTqkMzyB8v1QyExuw&usqp=CAU'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOSwMWtSiadQQyhVbRUTqkMzyB8v1QyExuw&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Sprite</h5>
                        <p class="card-text fw-bold">₹45</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card p-3 mb-3"
                      onclick="orderbasket('28','Pepsi',45,'https://5.imimg.com/data5/SELLER/Default/2021/12/MC/DC/HA/26602448/250-ml-pepsi-soft-drink-can-500x500.jpg'); totalitems(); costitems();"
                    >
                      <img
                        draggable="false"
                        src="https://5.imimg.com/data5/SELLER/Default/2021/12/MC/DC/HA/26602448/250-ml-pepsi-soft-drink-can-500x500.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-truncate">Pepsi</h5>
                        <p class="card-text fw-bold">₹45</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="d-flex justify-content-between align_items_center"><span>Orders</span><button onclick="orderbasketclear()" class="btn btn-sm btn-danger" >Clear</button></h5>
              <ul id="orderlist" class="list-unstyled" style="height:50vh;overflow-y:auto">
                
                  
                  <img src="" class="w-25" style="width: 50px" /><span
                    class="text-danger"
                  ></span>
                </li>
              </ul>
              <ul id="orderlist" class="list-unstyled">
                <li class="d-flex justify-content-between align_items_center">
                <big>Total items:</big><big id="totalitems" class="card-text">0</big>
                  </li>
                <li class="d-flex justify-content-between align_items_center">
                <big>Total Cost:</big><big>₹<span id="totalcost" class="card-text">0</span></big>
                  </li>
                <li>
                  <hr>
                  <button class="btn btn-primary btn-lg w-100" onclick="alert('click to procees')">Checkout</button>
                </li>

               </ul>
              <hr />
         
            </div>
          </div>
          </div>
        </div>
      </div>
    </body>
  </head>
</html>

<template>
  <main>
      <!-- breadCrumbs -->
      <div class="a-spacing-top-medium"></div>
      <div class="container-fluid">
          <div class="wayfinding-breadcrumbs-container">
              <ul class="a-unordered-list a-horizontal a-size-small">
                  <li>
                      <span class="a-list-item">
                          <a href="#" class="a-link-normal a-color-tertiary">{{product.category.type || 'categoria'}}</a>
                      </span>
                  </li> 
                  <li>
                      <span class="a-list-item">></span>
                  </li>
                    <li>
                      <span class="a-list-item">
                          <a href="#" class="a-link-normal a-color-tertiary">{{product.title}}</a>
                      </span>
                  </li> 
              </ul>
          </div>
      </div>
      <div class="container-fluid">
          <div class="dp-container">
              <div class="row">
                  <!-- First 3 grid - product image anda author section -->
                      <div class="col-lg-3 col-md-3 col-sm-4">
                      <div class="leeftCol">
                          <!-- Image -->
                          <div class="imgBlock">
                              <div class="eBooksimg">
                                  <img src="/img/spcBody.jpg" class="img-fluid" alt="">
                              </div>
                          </div>

                          <!-- Follow Author -->
                          <div class="authorFollow">
                              <hr class="a-divider-normal">
                              <h1 class="authorFollowHeading">Follow The Author</h1>
                              <div class="a-spacing-top-small">
                                  <div class="row">
                                      <!-- Author's Image -->
                                      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                          <div class="smallAuthorImageContainer">
                                              <a href="#">
                                                  <img src="/img/avatar.png"  class="img-fluid" alt="">
                                              </a>
                                          </div>
                                      </div>
                                       <!-- Author's Name -->
                                       <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                                           <div class="authorNameCol">
                                               <a href="" class="">{{product.owner.name  || ' '}}</a>
                                           </div>
                                       </div>
                                        <!-- Author's Button -->
                                        <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                                            <div class="authorBtn mt-2">
                                                <a href="#">
                                                    <span class="btnFollow">
                                                        <span class="a-btn-inner">
                                                            <button class="a-btn-texr">+ Follow</button>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- Middle 6 grid Description -->
                  <div class="col-lg-3 col-md-6 col-sm-8">
                      <div class="centerCol">
                          <!--Product Title  -->
                          <div class="titleDiv">
                              <h1 class="productTitle">
                                  <span class="largeTitle">{{product.title}}</span>
                                  <span class="smallTitle">PaperBack</span>
                              </h1>
                          </div>
                          <!-- Author's name -->
                          <div class="bylineinfo">
                              by
                              <a href="#" class="authorName">
                                  {{product.owner.name}}
                                  <i class="fas fa-chevron-down" style="font-size: 8px !important; color: #555 !important;"></i>
                                  (Author)
                              </a>
                          </div>
                          <div class="reviewGroup">
                               <no-ssr>
                              <star-rating :rating="product.averageRating"
                               :show-rating="false"
                               :glow="1"
                               :border-width="1"
                               :rounded-corners="true"
                               :read-only="true"
                               :star-sizes="14"
                               :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]">
                               
                                 </star-rating>
                            </no-ssr>
                          </div>
                          <hr style="margin-top: 10px;">
                          <!-- A tags Dummy Data -->
                          <div class="mediaMatrix">
                              <div class="formats">
                                  <a href="#" class="link-expander">>
                                      <span class="tmmShowPrompt">See all 18 formats and editions</span>
                                  </a>
                                  <ul >
                                      <!-- Kindle -->
                                      <li class="swatchElement" style="width: 117px;">
                                          <span class="a-list-item">
                                              <span class="a-button-toggle">
                                                  <span class="a-button-inner">
                                                      <a href="#" class="a-button-text">
                                                          <span>Kindle</span>
                                                          <br>
                                                          <span class="a-color-secondary">-</span>
                                                      </a>
                                                  </span>
                                              </span>
                                              <span class="tmm-olp-links"></span>
                                              <span class="tmm-olp-links">
                                                  <a href="#" class="a-size-mini">
                                                      <span class="kcpAppBox">
                                                          <span class="a-decarative">
                                                              Read with Our 
                                                              <span class="a-text-bold">Free App</span>
                                                          </span>
                                                      </span>
                                                  </a>
                                              </span>
                                          </span>
                                      </li>
                                       <!-- Audible -->
                                      <li class="swatchElement" style="width: 117px;">
                                          <span class="a-list-item">
                                              <span class="a-button-toggle">
                                                  <span class="a-button-inner">
                                                      <a href="#" class="a-button-text">
                                                          <span> <img src="/img/audibleLogo.png" class="img-fluid" style="width: 20px;"> Audible</span>
                                                          <br>
                                                          <span class="a-color-secondary">-</span>
                                                      </a>
                                                  </span>
                                              </span>
                                              <span class="tmm-olp-links"></span>
                                              <span class="tmm-olp-links">
                                                  <a href="#" class="a-size-mini">
                                                      <span class="kcpAppBox">
                                                          <span class="a-decarative">
                                                              Read with Our 
                                                              <span class="a-text-bold">Free App</span> with you Audible Trial
                                                          </span>
                                                      </span>
                                                  </a>
                                              </span>
                                          </span>
                                      </li>
                                       <!-- PaperBack -->
                                       <li class="swatchElement" style="width: 117px;">
                                          <span class="a-list-item">
                                              <span class="a-button-toggle">
                                                  <span class="a-button-inner">
                                                      <a href="#" class="a-button-text">
                                                          <span>PaperBack</span>
                                                          <br>
                                                          <span class="a-color-secondary">-</span>
                                                      </a>
                                                  </span>
                                              </span>   
                                          </span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <!-- Description -->
                          <div class="bookDescription">
                              <div class="bookDescriptionInner">{{product.description}}</div>
                          </div>

                          <!-- Product Specification -->
                          <div class="aboutEbooksFeature">
                              <hr>
                              <div class="row">
                                  <div class="col-sm-4 mb-1">
                                      <div class="a-declarative">
                                          Length: <span><a href="#" class="">386 pages <i class="a-icon a-icon-popover"></i></a></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- Last 3 grid Buying section-->
                   <div class="col-lg-3 col-md-3 col-sm-6">
                      <div class="combinedBuybox">
                          <div class="buyBox">
                              <div class="a-section">
                                  <div class="clearfix">
                                      <div class="float-left">
                                          <form action="">
                                              <input type="radio" id="test1" name="radio-group checked">
                                                <label for="test1">Buy Now</label>                                         
                                         </form>
                                      </div>

                                      <!-- Product Price-->
                                      <div class="float-right">
                                          <span class="a-size-medium a-color-price offer-price a-text-normal">
                                              ${{product.price}}
                                          </span>
                                      </div>
                                  </div>
                              </div>

                              <div class="a-section a-spacing-none">
                                  <div class="row">
                                      <div class="col-sm-5 col-5">
                                          <select name="" id="">
                                              <option value="1">Qty: &nbsp; 1</option>
                                              <option value="2">Qty: &nbsp; 2</option>
                                              <option value="3">Qty: &nbsp; 3</option>
                                              <option value="4">Qty: &nbsp; 4</option>
                                              <option value="5">Qty: &nbsp; 5</option>
                                          </select>
                                      </div>
                                  </div>
                              </div>

                                <div class="a-section a-spacing-small a-spacing-top-micro">
                                    <div class="row">
                                        <span class="a-color-base buyboxShippingLabel"></span>
                                    </div>
                                </div>
                                <div class="a-section a-spacing-small">
                                    <div class="a-section a-spacing-none">
                                        <span class="a-size-medium a-color-success">In Stock</span>
                                    </div>

                                    <div class="a-section a-spacing-mini">Shipts from and sold by Amazon.com</div>

                                </div>

                                <div class="a-section">
                                    <div class="a-button-stack" @click="addProductToCart(product)">
                                        <span class="a-spacing-small a-button-primary a-button-icon">
                                            <span class="a-button-inner">
                                                <i class="a-icon a-icon-cart"></i>
                                                <input type="submit" name="submit.add-to-cart" class="a-button-input">
                                                <span class="a-button-text">Add to cart</span> 
                                            </span>
                                        </span>
                                    </div>
                                     <div class="a-button-stack">
                                        <span class="a-spacing-small a-button-primary a-button-icon">
                                            <span class="a-button-inner">
                                                <i class="a-icon a-icon-buynow"></i>
                                                <input type="submit" name="submit.add-to-cart" class="a-button-input">
                                                <span class="a-button-text">Buy Now</span> 
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div class="a-row">
                                    <div class="a-spacing top-small">
                                        <div class="a-section a-spacing-none">
                                            <div class="a-section a-spacing-none a-spacing-top-mini">
                                                this item shipts to 
                                                <b>California</b>
                                                <b>Get it by Monday, Sept 23 - Monday, Sept. 30</b>
                                                Choose this date at checkout
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr>
                                <span class="a-declarative">
                                    <a href="#" class="a-row a-link-normal">
                                        <div class="a-row a-spacing-mini">
                                            <i class="fal fa-map-market-alt"></i>
                                            <span class="a-size-small">Deliver to California</span>
                                        </div>
                                    </a>
                                </span>
                                <br>
                                <hr>
                                <div class="a-section">
                                    <div class="clearfix">
                                        <div class="float-left">
                                            <form action="">
                                                <input type="radio" id="test2" name="radio-group">
                                                <label for="test2">Buy Now</label>
                                            </form>
                                        </div>
                                        <div class="float-right">
                                            <span class="a-color-base offer-price a-text-normal">${{product.price}}</span>
                                        </div>
                                    </div>
                                </div>
                          </div>
                      </div>

                      <div class="kcpAppBaseBox text-center">
                          <img src="/img/readyondevice.png" class="img-fluid" alt="">
                      </div>
                                    
                  </div>
              </div>
                <br>
                <hr>
                <div class="books-entity-teaser">
                    <div class="bucket">
                        <h2>More about the author</h2>
                        <div class="content">
                            <div class="row">
                                <!-- Authors photo and button -->
                                <div class="col-md-2 col-sm-4 col-4">
                                    <div class="authorContent">
                                        <div class="authorImageSingle">
                                            <a href="#">
                                                <img src="/img/avatar.png" width="100px" class="img-fluid" alt="">
                                            </a>
                                        </div>
                                        <div class="authorFollow">
                                            <button class="followButton" type="button">
                                                <span class="pr-fb-icon">               
                                                </span>
                                                <span class="pr-fb-text">Follow</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!-- Authors about -->
                                <div class="col-md-10 col-sm-8 pl-0">
                                    <div class="mainContent">
                                        <h3>Biography</h3>
                                        <div id="authorBio">{{product.owner.about}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <ReviewSection :product='product' :reviews="reviews"></ReviewSection>
          </div>
      </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import ReviewSection from '~/components/ReviewSection';
import StarRating from 'vue-star-rating';
components: {
    ReviewSection,
    StarRating
}

export default {
    
    async asyncData({ $axios, params }){
        try {
            let singleProduct = await $axios.$get(`http://localhost:3030/api/products/${params.id}`);
            let manyReviews = await $axios.$get(`http://localhost:3030/api/review/${params.id}`);

            const [productResponse, reviewsResponse] = await Promise.all([
                singleProduct, manyReviews
            ]);
            console.log(singleProduct);

            return {
                product: productResponse.product,
                reviews: reviewsResponse.reviews
            }

          
       } catch (err){
            console.log(err);
        }
    },
    methods: {
        ...mapActions(["addProductToCart"])
    }
}
</script>


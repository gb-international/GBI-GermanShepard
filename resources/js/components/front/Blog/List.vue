<template>
  <!--*****    Author:@Ajay  **********-->
  <div id="howwework">
    <div class="howwework_banner text_on_image banner_bg">
      <div class="content-blog-banner">
        <h1 class="text-center blog-heading">Travel Blog</h1>
        <div class="search-blog-form">
          <form method="post" novalidate="novalidate">
            <div class="col-lg-12">
              <div class="row justify-content-center">
                <div class="col-lg-9 col-md-6 col-sm-12 p-0">
                  <input
                    type="text"
                    class="form-control search-slt"
                    placeholder="Enter the place"
                  />
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div class="select-cat">
                    <select
                      class="form-control search-slt"
                      id="exampleFormControlSelect1"
                    >
                      <option>Select Vehicle</option>
                      <option>Example one</option>
                      <option>Example one</option>
                    </select>
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <p class="text-center"><button type="submit" class="btn btn-defalt btn-lg center-block profile_button">Search</button></p>
      </div>
    </div>

    <div class="blog-list mt-3">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 border-radius-0" v-for="i in 10" :key="i">
            <div class="card border-radius-0">
                <div class="container pt-3">
                    <img
                        class="card-img-top border-radius-0"
                        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-1.jpg"
                        alt="Bologna"
                    />

                </div>
              <div class="card-body">
                <h4 class="card-title text-left text-primary">Adventure</h4>
                <router-link :to="`/blog/new-one`">
                    <h6 class="card-subtitle mb-2">
                    Emilia-Romagna Region, Italy
                    </h6>
                    <p class="card-text">
                    It is the seventh most populous city in Italy, at the heart of
                    a metropolitan area of about one million people.
                    </p>
                </router-link>
                <div class="card-tags">
                    <span class="text-dark card-tag">relaxation</span>
                    <span class="text-dark card-tag">yoga</span>
                    <span class="text-dark card-tag">inida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowWework",
  metaInfo: {
    title: "How We Work",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one",
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs",
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/about-us/how-we-work",
      },
      { name: "type", content: "website" },
    ],
  },

  data() {
    return {};
  },
};
</script>

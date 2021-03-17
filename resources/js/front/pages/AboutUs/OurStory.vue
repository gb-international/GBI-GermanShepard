<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  
  <div id="ourstory">
    <!-- <vue-headful
      title="About Us"
      description="@GoWithGBI Story On How GBI believes in its core values and implement the same  to make your educational travel program a successful one "
      keywords="@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs"
      image
      lang="en_US"
      ogLocale="en_US,en_UK"
      url="https://www.gowithgbi.com/about-us/our-story"
    /> -->

    <div class="banner_ourstory text_on_image banner_bg">
      <div class="content">
        <p class="heading">Our Story</p>
      </div>
    </div>

    <div class="container">
      <heading text="Our Story" />
      <sub-heading text="One’s action can inspire others to dream bigger" />
      <paragraph text="The journey of GB International dates back to 1983 when Mr. Jasbir Singh Rikhi founded the company single-handedly with the desire of guiding students for a better future. He seeks to use travel as a tool to guide young minds learn from experiences outside their comfort zone. GBI has been working hard to transform this very idea into reality through finely curated travel tours." />
      <br />
      <sub-heading text="Success does not lie in results but in efforts" />
      <paragraph text="At GBI, we believe that to travel is to learn. It’s a belief that has shaped our path for the last 35 years and something that drive us to keep “moving ahead with time”. We foster a worldwide perspective and are attuned socially and culturally to the ever changing landscape of the classroom and the competitive global market. Keeping this in mind, we offer a number of tour programs covering a wide array of topics. Since its inception, GBI has sent more than one lakh students to different destinations across the globe." />
  
  
      <!-- End how we work -->
      <!-- Start Mission-->
      <section class="bgcolor-section">
        <div class="col-lg-12">
          <article class="about-story">
            <div class="row">
              <div class="col-md-6 col-lg-7">
                <div class="ourstory-content">
                  <heading text="Mission" />
                  <sub-heading text="Learn from the diversity" />
                  <paragraph text="Our mission is to facilitate a true connection between the students and the educational tour by trying to compliment classroom learning with a touch of the real. At GBI, we strive to combine reliable travel support with practical knowledge of textbooks to create an enriching travel experience that last a lifetime." />
                </div>
              </div>
              <div class="col-md-6 col-lg-5">
                <div class="ourstory-content">
                  <figure v-lazyload class="image__wrapper">
                    <ImageSpinner class="image__spinner" />
                    <img
                      id="ourstoryimg1"
                      class="image__item ic-cal-re"
                      :data-url="`/assets/front/images/mission.png`"
                      alt="our story"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section class="whitebg-section">
        <div class="col-lg-12">
          <article class="about-vision pa-t-15">
            <div class="row">
              <div class="col-md-6 col-lg-5">
                <div class="ourstory-content">
                  <figure v-lazyload class="image__wrapper">
                    <ImageSpinner class="image__spinner" />
                    <img
                      id="ourstoryimg2"
                      class="image__item"
                      :data-url="`/assets/front/images/vision.png`"
                      alt="our story"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-md-6 col-lg-7">
                <div class="ourstory-content">
                  <heading text="Vision" />
                  <sub-heading text="The choice of journey shapes mundane reality" />
                  <paragraph text="GBI’s philosophy behind all its program is to reach out to young minds to bring in them confidence and expand their horizons to prepare them face the challenges of mundane reality. We aim to enhance their skills through excursion to understand how various culture and different countries work." />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <!-- End Mission -->

      <!-- Start Behind Face GBI-->
      <section class="bgcolor-section mt-3">
        <div class="col-lg-12">
          <article class="about-story-face">
            <heading class="text-center" text="Faces Behind Gbi" />

            <div class="our-experience">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img class="image__item" :data-url="`/assets/front/images/user.jpg`" alt="ceo" />
              </figure>
              <h2>Mr. Jasbir Singh Rikhi</h2>
              <p>CEO</p>
            </div>
            <div class="our-experience">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="`/assets/front/images/user.jpg`"
                  alt="Director Operations"
                />
              </figure>
              <h2>Mr. Chanpreet Rikhi</h2>
              <p>Director Operations</p>
            </div>
            <div class="our-experience">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="`/assets/front/images/user.jpg`"
                  alt="Assistant Director"
                />
              </figure>
              <h2>Mrs. Gurpreet Kaur Rikhi</h2>
              <p>Assistant Director</p>
            </div>
          </article>
        </div>
      </section>
      <!-- End Behind Face GBI -->
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import Paragraph from '@/front/components/layout/Paragraph.vue';
export default {
  name: "OurStory",
  components:{
    "heading":Heading,
    "sub-heading":SubHeading,
    "paragraph" : Paragraph
  },
  metaInfo: {
    title: 'About Us',
    meta:[
      { name: 'description', content: '@GoWithGBI Story On How GBI believes in its core values and implement the same  to make your educational travel program a successful one' },
      { name: 'keywords', content: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/about-us/our-story' },
    ]
  },
};
</script>
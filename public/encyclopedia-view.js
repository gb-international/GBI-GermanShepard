(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["encyclopedia-view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel-theme.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_pdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-pdf */ "./node_modules/vue-pdf/src/vuePdfNoSss.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // optional style for arrows & dots



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "State",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a,
    pdf: vue_pdf__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      settings: {
        "dots": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "initialSlide": 0,
        "responsive": [{
          "breakpoint": 1024,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "infinite": true,
            "dots": true
          }
        }, {
          "breakpoint": 600,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "initialSlide": 2
          }
        }, {
          "breakpoint": 480,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1
          }
        }]
      },
      state_data: [],
      comment_data: [],
      state_list: [],
      reply_modal: false,
      comment_id: false,
      encyclopedia_id: '',
      reply_input: '',
      show: false,
      src: '',
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      form: new Form({
        body: '',
        encyclopedia_id: '',
        parent_id: null
      })
    };
  },
  watch: {
    '$route.params.id': function $routeParamsId(id) {
      this.stateData();
      this.scrollToTop();
    },
    'loadedRatio': function loadedRatio() {
      console.log(this.loadedRatio);
    }
  },
  created: function created() {
    this.stateData();
    this.states();
    this.scrollToTop();
  },
  methods: {
    updateCurrent: function updateCurrent(page_num) {
      this.page = page_num;
    },
    pdfShow: function pdfShow(name) {
      this.src = '';
      this.show = true;
      this.src = '/encyclopedia/pdf/' + name;
      console.log(this.src);
    },
    password: function password(updatePassword, reason) {
      updatePassword(prompt('password is "test"'));
    },
    error: function error(err) {
      console.log(err);
    },
    stateData: function stateData() {
      var _this = this;

      var api = "/api/encyclopedia/".concat(this.$route.params.id);
      axios(api).then(function (response) {
        _this.state_data = response.data;
        _this.form.encyclopedia_id = _this.state_data.id;

        _this.stateComments();
      });
    },
    stateComments: function stateComments() {
      var _this2 = this;

      var url = "/api/ency-comments/".concat(this.form.encyclopedia_id);
      axios(url).then(function (response) {
        _this2.comment_data = response.data;
      });
    },
    states: function states() {
      var _this3 = this;

      axios.get('/api/encyclopedia-list').then(function (response) {
        _this3.state_list = response.data;
      });
    },
    ReplyModal: function ReplyModal(comment_row) {
      if (this.$session.get('login') == undefined) {
        $("#loginButton").click();
        return false;
      }

      this.reply_modal = !this.reply_modal;
      this.comment_id = comment_row;
    },
    ReplySubmit: function ReplySubmit() {
      this.reply_modal = !this.reply_modal;
      this.form.parent_id = this.comment_id;
      this.form.body = this.reply_input;
      this.reply_input = '';
      this.addComment();
    },
    getImgUrl: function getImgUrl(img) {
      return '/encyclopedia/' + img;
    },
    getProfileImage: function getProfileImage(img) {
      return '/uploadimage/' + img;
    },
    addComment: function addComment() {
      var _this4 = this;

      if (this.$session.get('login') == undefined) {
        $("#loginButton").click();
      } else {
        // add data to the database 
        axios.post("/api/encyclopedia-comments", this.form, {
          headers: {
            Authorization: "Bearer ".concat(this.$session.get('access_token'))
          }
        }).then(function (response) {
          _this4.stateData();

          _this4.stateComments();

          _this4.form.body = '';
          _this4.form.parent_id = null;
        });
      }
    },
    goToState: function goToState(slug) {
      var url = "/encyclopedia/" + slug;
      this.$router.push(url);
    },
    scrollToTop: function scrollToTop() {
      this.prototype.scrollTo(0, 0);
    }
  },
  filters: {
    pdfFilter: function pdfFilter(string) {
      return string.replace(".pdf", '');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=template&id=6e790462&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=template&id=6e790462& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.state_data
    ? _c("div", { staticClass: "State" }, [
        _c("section", { staticClass: "banner-block" }, [
          _c("img", {
            staticClass: "top-img",
            attrs: {
              id: "traveleduimg",
              src: _vm.getImgUrl(_vm.state_data.banner_image)
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container state_body mt-30" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-8" }, [
              _c("h4", { staticClass: "state_name mb-20" }, [
                _vm._v(_vm._s(_vm.state_data.state_name))
              ]),
              _vm._v(" "),
              _c("div", {
                staticClass: "state_description",
                domProps: { innerHTML: _vm._s(_vm.state_data.description) }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "card state_card" }, [
                _c("div", {
                  staticClass: "map_show",
                  domProps: { innerHTML: _vm._s(_vm.state_data.map_link) }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card state_images" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }, [
                    _c("img", {
                      attrs: {
                        src: _vm.getImgUrl(_vm.state_data.image_one),
                        loading: "lazy",
                        alt: _vm.state_data.state_name
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("img", {
                      attrs: {
                        src: _vm.getImgUrl(_vm.state_data.image_two),
                        loading: "lazy",
                        alt: _vm.state_data.state_name
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("img", {
                      attrs: {
                        src: _vm.getImgUrl(_vm.state_data.image_three),
                        loading: "lazy",
                        alt: _vm.state_data.state_name
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("img", {
                      attrs: {
                        src: _vm.getImgUrl(_vm.state_data.image_four),
                        loading: "lazy",
                        alt: _vm.state_data.state_name
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("img", {
                      attrs: {
                        src: _vm.getImgUrl(_vm.state_data.image_five),
                        loading: "lazy",
                        alt: _vm.state_data.state_name
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("img", {
                      attrs: {
                        src: _vm.getImgUrl(_vm.state_data.image_six),
                        loading: "lazy",
                        alt: _vm.state_data.state_name
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("img", {
                      attrs: {
                        src: _vm.getImgUrl(_vm.state_data.image_seven),
                        loading: "lazy",
                        alt: _vm.state_data.state_name
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("img", {
                      attrs: {
                        src: _vm.getImgUrl(_vm.state_data.image_eight),
                        loading: "lazy",
                        alt: _vm.state_data.state_name
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card state_card" },
                _vm._l(_vm.state_data.itinerarypdfs, function(pdf) {
                  return _c(
                    "p",
                    {
                      staticClass: "link",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#pdf_modal"
                      },
                      on: {
                        click: function($event) {
                          return _vm.pdfShow(pdf.name)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm._f("pdfFilter")(pdf.name)) +
                          "\n          "
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _vm.state_list.length
                ? _c(
                    "div",
                    { staticClass: "state_list" },
                    [
                      _c(
                        "VueSlickCarousel",
                        _vm._b(
                          { attrs: { arrows: true, dots: true } },
                          "VueSlickCarousel",
                          _vm.settings,
                          false
                        ),
                        _vm._l(_vm.state_list, function(state) {
                          return _c(
                            "div",
                            { staticClass: "card_scroll states_card" },
                            [
                              _c("p"),
                              _c("div", { staticClass: "card" }, [
                                _c("img", {
                                  staticClass: "card-img-top",
                                  attrs: {
                                    src: _vm.getImgUrl(state.thumbnail),
                                    loading: "lazy",
                                    alt: state.state_name
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "card-img-overlay text-center"
                                  },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "card-text text-white" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/encyclopedia/" + state.slug
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                     " +
                                                _vm._s(state.state_name)
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("p")
                            ]
                          )
                        }),
                        0
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12" }, [
              _c("div", { staticClass: "col-md-8" }, [
                _c("div", { staticClass: "comment_section" }, [
                  _c(
                    "div",
                    { staticClass: "container mt-3" },
                    [
                      _c("h4", [_vm._v("Reviews")]),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          staticClass: "form",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.addComment()
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.body,
                                    expression: "form.body"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("body")
                                },
                                attrs: {
                                  rows: "3",
                                  placeholder:
                                    "Share your experiences and insights with us"
                                },
                                domProps: { value: _vm.form.body },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "body",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "body" }
                              }),
                              _vm._v(" "),
                              _vm._m(0)
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.comment_data, function(comment) {
                        return _c("div", { staticClass: "comment_section" }, [
                          comment.parent_id == null
                            ? _c("div", { staticClass: "media p-3" }, [
                                _c("img", {
                                  staticClass: "mr-3 mt-3 rounded-circle",
                                  staticStyle: { width: "60px" },
                                  attrs: {
                                    src: _vm.getProfileImage(
                                      comment.user.information.photo
                                    ),
                                    alt: "John Doe"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "media-body" },
                                  [
                                    _c("h4", [
                                      _vm._v(_vm._s(comment.user.name) + " "),
                                      _c(
                                        "small",
                                        { staticClass: "text-small" },
                                        [
                                          _c("i", [
                                            _vm._v(_vm._s(comment.created_at))
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-dark float-right",
                                          on: {
                                            click: function($event) {
                                              return _vm.ReplyModal(comment.id)
                                            }
                                          }
                                        },
                                        [_vm._v(" Reply")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [_vm._v(_vm._s(comment.body))]),
                                    _vm._v(" "),
                                    _vm.reply_modal == true &&
                                    _vm.comment_id == comment.id
                                      ? _c("div", [
                                          _c(
                                            "form",
                                            {
                                              staticClass: "form",
                                              on: {
                                                submit: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.ReplySubmit()
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("textarea", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.reply_input,
                                                        expression:
                                                          "reply_input"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      rows: "3",
                                                      placeholder:
                                                        "Type here..."
                                                    },
                                                    domProps: {
                                                      value: _vm.reply_input
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.reply_input =
                                                          $event.target.value
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _vm._m(1, true)
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm._l(_vm.state_data.comments, function(
                                      reply
                                    ) {
                                      return reply.parent_id == comment.id
                                        ? _c(
                                            "div",
                                            { staticClass: "media p-3" },
                                            [
                                              _c("img", {
                                                staticClass:
                                                  "mr-3 mt-3 rounded-circle",
                                                staticStyle: { width: "45px" },
                                                attrs: {
                                                  src: _vm.getProfileImage(
                                                    comment.user.information
                                                      .photo
                                                  ),
                                                  alt: "Jane Doe"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "media-body" },
                                                [
                                                  _c("h4", [
                                                    _vm._v(
                                                      _vm._s(
                                                        comment.user.name
                                                      ) + " "
                                                    ),
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "text-small"
                                                      },
                                                      [
                                                        _c("i", [
                                                          _vm._v(
                                                            _vm._s(
                                                              comment.created_at
                                                            )
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("p", [
                                                    _vm._v(
                                                      _vm._s(reply.body) + " "
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    })
                                  ],
                                  2
                                )
                              ])
                            : _vm._e()
                        ])
                      })
                    ],
                    2
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal fade", attrs: { id: "pdf_modal" } }, [
            _c("div", { staticClass: "modal-dialog modal-lg" }, [
              _vm.show
                ? _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button", "data-dismiss": "modal" },
                          on: {
                            click: function($event) {
                              _vm.show = !_vm.show
                            }
                          }
                        },
                        [_vm._v("×")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modal-body" },
                      [
                        _vm.loadedRatio != 1
                          ? _c("span", { staticClass: "loading_spin" })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.show
                          ? _c("pdf", {
                              ref: "pdf",
                              attrs: { src: _vm.src, page: _vm.page },
                              on: {
                                password: _vm.password,
                                progress: function($event) {
                                  _vm.loadedRatio = $event
                                },
                                error: _vm.error,
                                "num-pages": function($event) {
                                  _vm.numPages = $event
                                },
                                "link-clicked": function($event) {
                                  _vm.page = $event
                                }
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "div",
                        { attrs: { id: "pagination" } },
                        [
                          _vm._v("\n             Page : "),
                          _vm._l(_vm.numPages, function(page_num) {
                            return _c(
                              "a",
                              {
                                staticClass: "btn btn-default",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.updateCurrent(page_num)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(page_num) +
                                    "\n              "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          attrs: { type: "button", "data-dismiss": "modal" },
                          on: {
                            click: function($event) {
                              _vm.show = !_vm.show
                            }
                          }
                        },
                        [_vm._v("Close")]
                      )
                    ])
                  ])
                : _vm._e()
            ])
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info profile_button comment_btn",
            attrs: { type: "submit" }
          },
          [_vm._v("Submit")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info profile_button comment_btn",
            attrs: { type: "submit" }
          },
          [_vm._v("Submit")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/front/Encyclopedia/State-view.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/front/Encyclopedia/State-view.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _State_view_vue_vue_type_template_id_6e790462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State-view.vue?vue&type=template&id=6e790462& */ "./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=template&id=6e790462&");
/* harmony import */ var _State_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State-view.vue?vue&type=script&lang=js& */ "./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _State_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _State_view_vue_vue_type_template_id_6e790462___WEBPACK_IMPORTED_MODULE_0__["render"],
  _State_view_vue_vue_type_template_id_6e790462___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/Encyclopedia/State-view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_State_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./State-view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_State_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=template&id=6e790462&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=template&id=6e790462& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_State_view_vue_vue_type_template_id_6e790462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./State-view.vue?vue&type=template&id=6e790462& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/Encyclopedia/State-view.vue?vue&type=template&id=6e790462&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_State_view_vue_vue_type_template_id_6e790462___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_State_view_vue_vue_type_template_id_6e790462___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
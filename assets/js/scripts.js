function initTransportationSlider() {
    return new Swiper('.our-transportation-cards', {
        spaceBetween: 30,
        navigation: {
            nextEl: ".btn-nav-next",
            prevEl: ".btn-nav-prev",
        },
        pagination: {
            el: ".transportation-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        on: {
            paginationUpdate(swiper, paginationEl) {
                const topPagination = document.querySelector('.transportation-pagination-top');
                if (topPagination) {
                    topPagination.innerHTML = paginationEl.innerHTML;
                }
            }
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                },
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                },
            },
            1440: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: "row",
                },
            },
        }
    });
}

function initDeliverySlider() {
    return new Swiper('.delivery-cards', {
        spaceBetween: 10,
        navigation: {
            nextEl: ".btn-nav-delivery-next",
            prevEl: ".btn-nav-delivery-prev",
        },
        pagination: {
            el: ".delivery-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                },
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                },
            },
            1400: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: "column",
                },
            },
        }
    })

}

function initReviewsSlider() {
    return new Swiper('.reviews-cards', {
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-nav-reviews-next",
            prevEl: ".btn-nav-reviews-prev",
        },
        pagination: {
            el: ".reviews-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        on: {
            paginationUpdate(swiper, paginationEl) {
                const topPagination = document.querySelector('.reviews-pagination-top');
                if (topPagination) {
                    topPagination.innerHTML = paginationEl.innerHTML;
                }
            }
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 'auto',
            },
        }
    });
}

function initProjectsSlider() {
    return new Swiper('.our-projects-cards', {
        spaceBetween: 20,
        pagination: {
            el: ".our-projects-pagination",
            type: "fraction",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 'auto',
            },
        }

    })
}

function initPromotionSlider() {
    return new Swiper('.promotion-cards', {
        spaceBetween: 20,
        pagination: {
            el: ".promotion-pagination",
            type: "fraction",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }

    })
}

function initButtonsScroll() {
    return new Swiper('.buttons-scroll', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
    })
}

function initWhyUsSlider() {
    return new Swiper('.why-us-cards', {
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-nav-whu-us-next",
            prevEl: ".btn-nav-whu-us-prev",
        },
        pagination: {
            el: ".whu-us-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                },
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                },
            },
            1400: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: "row",
                },
            },
        }
    })
}

function initWorkWithUsSlider() {
    return new Swiper('.work-with-us-cards', {
        navigation: {
            nextEl: ".btn-nav-work-with-us-next",
            prevEl: ".btn-nav-work-with-us-prev",
        },
        pagination: {
            el: ".work-with-us-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        breakpoints: {
            0: {
                spaceBetween: 5,
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
            },
            768: {
                spaceBetween: 5,
                slidesPerView: 2,
                grid: {
                    rows: 1,
                },
            },
            1024: {
                spaceBetween: 5,
                slidesPerView: 3,
                grid: {
                    rows: 1,
                },
            },
            1400: {
                spaceBetween: 20,
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: "row",
                },
            },
        }
    })
}

function initHowHelpSlider() {
    return new Swiper('.how-help-cards', {
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-nav-how-help-next",
            prevEl: ".btn-nav-how-help-prev",
        },
        pagination: {
            el: ".how-help-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        }
    })
}

function initAchievementsSlider() {
    return new Swiper('.achievements-cards', {
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-nav-achievements-next",
            prevEl: ".btn-nav-achievements-prev",
        },
        pagination: {
            el: ".achievements-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                },
            },
            1400: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: "row",
                },
            },
        }
    })
}

function initTeamSlider() {
    return new Swiper('.team-cards', {
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-nav-team-next",
            prevEl: ".btn-nav-team-prev",
        },
        pagination: {
            el: ".team-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        }


    })
}

function initChooseUsSlider() {
    return new Swiper('.choose-us-cards', {
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-nav-choose-us-next",
            prevEl: ".btn-nav-choose-us-prev",
        },
        pagination: {
            el: ".choose-us-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                },
            },
            1400: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: "column",
                },
            },
        }
    })
}

function initImplementedSlider() {
    return new Swiper('.implemented-cards', {
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-nav-implemented-next",
            prevEl: ".btn-nav-implemented-prev",
        },
        pagination: {
            el: ".implemented-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
        on: {
            paginationUpdate(swiper, paginationEl) {
                const topPagination = document.querySelector('.implemented-pagination-top');
                if (topPagination) {
                    topPagination.innerHTML = paginationEl.innerHTML;
                }
            }
        },
    })
}

function initTrustSlider() {
    return new Swiper('.trust-cards', {
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-nav-trust-next",
            prevEl: ".btn-nav-trust-prev",
        },
        pagination: {
            el: ".trust-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: "row",
                },
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: "row",
                },
            },
            1400: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: "row",
                },
            },
        }

    })
}

initTransportationSlider();
initDeliverySlider();
initReviewsSlider();
initProjectsSlider();
initPromotionSlider();
initButtonsScroll();
initWhyUsSlider();
initWorkWithUsSlider();
initHowHelpSlider();
initAchievementsSlider();
initTeamSlider();
initChooseUsSlider();
initImplementedSlider();
initTrustSlider();

const Data =
    [
        {
            // Header 
            header_top: [
                {
                    img: <img src="images/logo.png" alt="Company Name" class="logo"></img>,
                    header_title: "Company Name",
                    description: "Taline goes here",

                },

                {
                    header_phone: "phone",
                    img: <a href="#" class="phone"><img src="images/icon-phone.png" class="icon"></img>+1 823 424 9134</a>,
                },

            ],
            header_bottom: [
                {
                    menubar: [
                        {
                            li: <a href="about.html">About us</a>,
                            li: <a href="insurance.html">Insurance plans</a>,
                            li: <a href="resource.html">Resources</a>,
                            li: <a href="contact.html">Contact</a>
                        }
                    ],
                    links: [
                        {
                            li: <i class="fa fa-facebook"></i>,
                            li: <i class="fa fa-twitter"></i>,
                            li: <i class="fa fa-google-plus"></i>,
                            li: <i class="fa fa-pinterest"></i>,
                        }
                    ],
                }
            ],
            // Header End

            // Home Page
            PageHome: [
                {
                    section_title: "Welcome to our website",
                    section_subtitle: "Etiam suscipit leo tincidunt risus dignissim quisque semper mollis",
                    features: [
                        {
                            feature_title: "24 hours Service",
                            feature_description: "Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt labore dolore magna aliqua",
                        },
                        {
                            feature_title: "Hospitality",
                            feature_description: "Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt labore dolore magna aliqua",
                        },
                        {
                            feature_title: "Praesent pellentesque",
                            feature_description: "Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt labore dolore magna aliqua",
                        },
                        {
                            feature_title: "Consectetur interdum",
                            feature_description: "Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt labore dolore magna aliqua",
                        },
                        {
                            feature_title: "Sollicitudin sit tortor pellentesque.",
                            feature_description: `<a href="#">Read more</a>`,
                        },
                    ]
                },
                {
                    section_title: "Our insurance offer",
                    section_subtitle: "Phasellus vel felis in nulla mollis posuere eget rutrum eros",
                    offers: [
                        {
                            offer_image: <img src="dummy/offer-tall.jpg" alt="offer 1"></img>,
                            offer_image_title: "Massa augue",
                            description: "Conubia nostra per inceptos"
                        },

                        {
                            offer_image: <img src="dummy/offer-1.jpg" alt="offer 2"></img>,
                            offer_image_title: "Curabitur vehicula",
                            description: "Conubia nostra per inceptos"
                        },

                        {
                            offer_image: <img src="dummy/offer-wide.jpg" alt="offer 2"></img>,
                            offer_image_title: "Vivamus rhoncus porttitor",
                            description: "Conubia nostra per inceptos"
                        },

                        {
                            offer_image: <img src="dummy/offer-2.jpg" alt="offer 2"></img>,
                            offer_image_title: "Curabitur vehicula",
                            offer_image_description: "Conubia nostra per inceptos"
                        },

                        {
                            offer_image: <img src="dummy/offer-3.jpg" alt="offer 2"></img>,
                            offer_image_title: "Curabitur vehicula",
                            offer_image_description: "Conubia nostra per inceptos"
                        },

                        {
                            offer_image: <img src="dummy/offer-4.jpg" alt="offer 2"></img>,
                            offer_image_title: "Curabitur vehicula",
                            offer_image_description: "Conubia nostra per inceptos"
                        },
                    ]
                },

                {
                    section_title: "Latest News",
                    news: [
                        {
                            news_img: <img src="dummy/featured-image-1.jpg" alt=""></img>,
                            news_cal: <img src="images/icon-calendar.png" alt=""></img>,
                            news_descriptionc: "Donec laoreet non nec aliquam pellentesque interdum"
                        },

                        {
                            news_img: <img src="dummy/featured-image-2.jpg" alt=""></img>,
                            news_cal: <img src="images/icon-calendar.png" alt=""></img>,
                            news_descriptionc: "Donec laoreet non nec aliquam pellentesque interdum"
                        },

                        {
                            news_img: <img src="dummy/featured-image-3.jpg" alt=""></img>,
                            news_cal: <img src="images/icon-calendar.png" alt=""></img>,
                            news_descriptionc: "Donec laoreet non nec aliquam pellentesque interdum"
                        },

                    ]
                },

                {
                    section_slidescription: [
                        {
                            slide1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quod explicabo optio quia ex odit, sequi harum voluptatibus autem. Nam autem corporis deleniti fugiat omnis itaque, quis laudantium dolor facere.",

                            slide2: "At doloremque, itaque molestias neque nesciunt placeat aspernatur veniam fugit enim, dolor, repudiandae a. Laborum optio dolorum qui maxime doloribus eligendi in enim minima quo? Quis tenetur eos, libero exercitationem.",

                            slide3: "Ipsam nesciunt velit voluptatem? Voluptas amet, porro eaque asperiores magni rerum vitae nulla inventore, numquam facilis doloribus placeat iure suscipit adipisci dolores modi saepe descriptionerunt nisi. Nam, illum aperiam velit."
                        }
                    ]
                },
                {
                    section_title: "Our partners",
                    partners: [
                        {
                            partner_img1: <img src="dummy/money-logo.png" alt=""></img>,
                        },
                        {
                            partner_img2: <img src="dummy/nyt-logo.png" alt=""></img>,
                        },
                        {
                            partner_img2: <img src="dummy/forbes-logo.png" alt=""></img>,
                        },
                        {
                            partner_img2: <img src="dummy/wsj-logo.png" alt=""></img>,
                        },
                        {
                            partner_img2: <img src="dummy/bbs-logo.png" alt=""></img>,
                        },
                    ]
                }
            ],
            // Home Page End

            

            // Footer
            footer: [
                {
                    footer_title: "Contact",
                    address: "Company Name INC. 523 Burt Street, Omaha",
                    phone: <a href="#">Phone: +1 823 424 9134</a>,
                    mail: <a href="mailto:info@company.com">info@company.com</a>
                },

                {
                    footer_title: "Company",
                    links: [
                        {
                            li: <a href="#">About us</a>,
                            li: <a href="#">Infoline</a>,
                            li: <a href="#">Team</a>,
                            li: <a href="#">Join us</a>,
                            li: <a href="#">Cooperation</a>
                        }
                    ]
                },

                {
                    footer_title: "Products",
                    links: [
                        {
                            li: <a href="#">Life insurance</a>,
                            li: <a href="#">Home insurance</a>,
                            li: <a href="#">Car insurance</a>,
                            li: <a href="#">Business insurance</a>,
                            li: <a href="#">Investment insurance</a>
                        }
                    ]
                },

                {
                    footer_title: "Our solution",
                    links: [
                        {
                            li: <a href="#">Presentation</a>,
                            li: <a href="#">Testimonials</a>,
                            li: <a href="#">Examples</a>,
                            li: <a href="#">Our experts</a>,
                            li: <a href="#">Resources</a>
                        }
                    ]
                },

                {
                    footer_title: "Press Room",
                    links: [
                        {
                            li: <a href="#">Advertisement</a>,
                            li: <a href="#">Interviews</a>,
                            li: <a href="#">Hot news</a>,
                            li: <a href="#">Photos</a>,
                            li: <a href="#">Marketing</a>
                        }
                    ]
                },

                {
                    footer_title: "Resources",
                    links: [
                        {
                            li: <a href="#">Sed imperdiet magna</a>,
                            li: <a href="#">Pellentesque molestie</a>,
                            li: <a href="#">Nulla luctus cursus</a>,
                            li: <a href="#">Ligula vel lacinia</a>,
                            li: <a href="#">Mauris scelerisque</a>
                        }
                    ]
                },
                {
                    bottom_footer: [
                        {
                            li: <a href="#">Home</a>,
                            li: <a href="#">About us</a>,
                            li: <a href="#">Insurance plans</a>,
                            li: <a href="#">Resources</a>,
                            li: <a href="#">Contact</a>
                        },

                        {
                            copyright: "Copyright 2014 Company name. Designed by Themezy. All rights reserved."
                        }
                    ]
                }
            ],
            // Footer End

            // Insurance Plan
            PageInsurance: [
                {
                    id:1,
                    catagory: "skyscraper",
                    title: "Happy Holiday",
                    description: "Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque."
                },

                {
                    id:2,
                    catagory: "skyscraper",
                    title: "Bussiness Insurance",
                    description: "Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque."
                },

                {
                    id:3,
                    catagory: "shopping-Center",
                    title: "Safe Hourse",
                    description: "Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque."
                },

                {
                    id:4,
                    catagory: "shopping-Center",
                    title: "Financial Balance",
                    description: "Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque."
                },

                {
                    id:5,
                    catagory: "apartment",
                    title: "Medical 24",
                    description: "Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque."
                },

                {
                    id:6,
                    catagory: "apartment",
                    title: "Car Protect",
                    description: "Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque."
                },
            ],
            // Insurance Plan -End
        }
    ]

    export default Data


   
        // Resource Page End
    
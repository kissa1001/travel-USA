angular.module('myApp', [])
.controller('appCtrl', function($scope, $attrs) {
    $scope.data = [
        {
            day: 1,
            notice: {
                tag: "Прилет в город Сиэтл, штат Вашингтон",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/30/26/seattle.jpg"
            },
            places: [
                {
                    tag: "Отель: The Edge Water",
                    url: "http://www.edgewaterhotel.com/",
                    img: "http://www.noblehousemenus.com/images/social/EdgewaterHotel.jpg"
                }
            ]
        },
        {
            day: 2,
            places: [
                {
                    tag: "Cпейс-Нидл (Space Needle)",
                    url: "http://tonkosti.ru/%D0%A1%D0%BF%D0%B5%D0%B9%D1%81-%D0%9D%D0%B8%D0%B4%D0%BB",
                    img: "http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/07/25/101867425-space-needle.1910x1000.jpg"
                },
                {
                    tag: "Стена жевательной резинки (The Gum Wall)",
                    url: "http://tonkosti.ru/%D0%A1%D1%82%D0%B5%D0%BD%D0%B0_%D0%B6%D0%B5%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9_%D1%80%D0%B5%D0%B7%D0%B8%D0%BD%D0%BA%D0%B8",
                    img: "https://lifehacker.ru/wp-content/uploads/2014/08/8739492578_2243c3a0ed_k.jpg"
                }
            ]
        },
        {
            day: 3,
            places: [
                {
                    tag: "Собор Сент-Джеймс (St. James Cathedral)",
                    url: "http://tonkosti.ru/%D0%A1%D0%BE%D0%B1%D0%BE%D1%80_%D0%A1%D0%B5%D0%BD%D1%82-%D0%94%D0%B6%D0%B5%D0%B9%D0%BC%D1%81",
                    img: "http://pics4.city-data.com/cpicv/vfiles31384.jpg"
                }
            ]
        },
        {
            day: 4,
            notice: {
                tag: "Покупать билет на автобус на сайте Wanderu, чтобы поехать в Сан-Франциско, штат Кадифорния (24h)",
                img: "http://www.americancities.ru/f/gallery/originWM_sf_34.jpg"
            }
        },
        {
            day: 5,
            places: [
                {
                    tag: "Отель: Marina Village Inn",
                    url: "http://marinavillageinn.com",
                    img: "http://r-ec.bstatic.com/images/hotel/840x460/404/40406911.jpg"
                },
                {
                    tag: "Мост «Золотые Ворота» (The Golden Gate Bridge)",
                    url: "http://tonkosti.ru/%D0%9C%D0%BE%D1%81%D1%82_%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5_%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%C2%BB",
                    img: "http://simpletravel.info/assets/images/image1.jpg"
                }
            ]
        },
        {
            day: 6,
            places: [
                {
                    tag: "Алькатрас (Alcatraz Island)",
                    url: "http://tonkosti.ru/%D0%90%D0%BB%D1%8C%D0%BA%D0%B0%D1%82%D1%80%D0%B0%D1%81",
                    img: "http://www.hifishermanswharf.com/interactive/top_imgs/hero_hotels_near_alcatraz_island.jpg"
                },
                {
                    tag: "Музей Рипли «Хочешь — верь, хочешь — нет!» (Ripley's believe it or not)",
                    url: "https://www.youtube.com/watch?v=EslQBdEHe9Q",
                    img: "https://s-media-cache-ak0.pinimg.com/736x/31/59/25/315925f6cfa5175f165b408d0b465779.jpg"
                }
            ]
        },
        {
            day: 7,
            places: [
                {
                    tag: "Пирс-39 (Pier 39)",
                    url: "http://www.americancities.ru/san_francisco/showplaces/pier_39/",
                    img: "http://www.hifishermanswharf.com/interactive/top_imgs/hero_hotels_near_pier_39.jpg"
                },
                {
                    tag: "Холмы Твин Пикс (Twin Peaks)",
                    url: " http://california-tours.ru/holmy-tvin-piks-san-frantsisko/",
                    img: "http://ic.pics.livejournal.com/mb_world/14035362/7117/7117_original.jpg"
                }
            ]
        },
        {
            day: 8,
            places: [
                {
                    tag: "Чайнатаун Сан-Франциско (China Town)",
                    url: "http://tonkosti.ru/%D0%A7%D0%B0%D0%B9%D0%BD%D0%B0%D1%82%D0%B0%D1%83%D0%BD_%D0%A1%D0%B0%D0%BD-%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%81%D0%BA%D0%BE",
                    img: "http://yourbigtour.com/wp-content/uploads/2014/12/bt013-Chinatown-San-Francisco.jpg"
                }
            ]
        },
        {
            day: 9,
            notice: {
                tag: "Покупать билет на автобус на сайте Wanderu, чтобы поехать в Лос Анжелес, штат Кадифорния (7h)",
                img: "https://lonelyplanetimages.imgix.net/a/g/hi/t/f4003584e847990e3cae4b5d8062e342-los-angeles.jpg?sharp=10&vib=20&w=1200"
            },
            places: [
                {
                    tag: "Отель: O Hotel",
                    url: "http://ohotelgroup.com",
                    img: "https://s3.amazonaws.com/images.stashrewards.com/o-hotel-exterior_hpg.jpg"
                }
            ]
        },
        {
            day: 10,
            places: [
                {
                    tag: "Аллея звезд Голливуда (Walk of Fame)",
                    url: "http://tonkosti.ru/%D0%90%D0%BB%D0%BB%D0%B5%D1%8F_%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4_%D0%93%D0%BE%D0%BB%D0%BB%D0%B8%D0%B2%D1%83%D0%B4%D0%B0",
                    img: "http://orogoldstorelocator.com/wp-content/uploads/2016/02/OROGOLD-Hollywood-Walk-of-Fame.jpg"
                },
                {
                    tag: "Беверли-Хилз (Beverley Hills)",
                    url: "http://tonkosti.ru/%D0%91%D0%B5%D0%B2%D0%B5%D1%80%D0%BB%D0%B8-%D0%A5%D0%B8%D0%BB%D0%B7",
                    img: "http://www.lasightseeing.net/PhotoGallery/16Beverly_hills.jpg"
                }
            ]
        },
        {
            day: 11,
            places: [
                {
                    tag: "Знак Голливуд (Hollywood Sign)",
                    url: "http://www.americancities.ru/los_angeles/showplaces/hollywood_sign/",
                    img: "http://www.complexmania.com/wp-content/uploads/2016/08/district-hollywood-los-angeles-california.jpg"
                },
                {
                    tag: "Обсерватория гриффита (Observatory Griffith)",
                    url: "http://venividi.ru/node/28685",
                    img: "https://s-media-cache-ak0.pinimg.com/originals/0f/3b/a9/0f3ba93147d68ba3d53478352cef8b09.jpg"
                }
            ]
        },
        {
            day: 12,
            notice: {
                tag: "Покупать билет на автобус на сайте Wanderu, чтобы поехать в Лас Вегас, штат Невада (5h)",
                img: "http://www.searchrank.com/wp-content/uploads/2015/09/las-vegas.jpg"
            },
            places: [
                {
                    tag: "Отель: Bellagio Hotel and Casino",
                    url: "http://bellagio.com",
                    img: "http://nevadatv.com/wp-content/uploads/2012/04/bellagiofountain2.jpg"
                }
            ]
        },
        {
            day: 13,
            places: [
                {
                    tag: "Плотина Гувера (Hoover Dam)",
                    url: "http://tonkosti.ru/%D0%9F%D0%BB%D0%BE%D1%82%D0%B8%D0%BD%D0%B0_%D0%93%D1%83%D0%B2%D0%B5%D1%80%D0%B0",
                    img: "https://bboserup.files.wordpress.com/2012/07/mg_6628.jpg"
                },
                {
                    tag: "Стрип (Strip)",
                    url: "http://tonkosti.ru/%D0%A1%D1%82%D1%80%D0%B8%D0%BF",
                    img: "http://www.mrwallpaper.com/wallpapers/las-vegas-strip.jpg"
                }
            ]
        },
        {
            day: 14,
            places: [
                {
                    tag: "Колесо обозрения «Хай Роллер» (High Roller Ferris Wheel)",
                    url: "http://tonkosti.ru/%D0%9A%D0%BE%D0%BB%D0%B5%D1%81%D0%BE_%D0%BE%D0%B1%D0%BE%D0%B7%D1%80%D0%B5%D0%BD%D0%B8%D1%8F_%C2%AB%D0%A5%D0%B0%D0%B9_%D0%A0%D0%BE%D0%BB%D0%BB%D0%B5%D1%80%C2%BB",
                    img: "http://assets.nydailynews.com/polopoly_fs/1.2526451.1455089818!/img/httpImage/image.jpg_gen/derivatives/article_750/wheel11n-1-web.jpg"
                },
                {
                    tag: "Башня «Стратосфера» (Stratosphere Tower)",
                    url: "http://tonkosti.ru/%D0%91%D0%B0%D1%88%D0%BD%D1%8F_%C2%AB%D0%A1%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%81%D1%84%D0%B5%D1%80%D0%B0%C2%BB",
                    img: "http://xn--h1aqbff.xn--p1ai/attachments/Image/stratosphere_tower.jpg?template=generic"
                }
            ]
        },
        {
            day: 15,
            notice: {
                tag: "Покупать билет на автобус на сайте Wanderu, чтобы поехать в Гранд Каньен национальный парк в штате Аризона (13h)",
                img: "http://www.maverickairlines.com/images/plane-gc-opt.jpg"
            },
            places: [
                {
                    tag: "Отель: Bright Angel Lodge",
                    url: "grandcanyonlodges.com",
                    img: "https://c2.staticflickr.com/8/7154/6415134387_7d8d1767e0_b.jpg"
                }
            ]
        },
        {
            day: 16,
            places: [
                {
                    tag: "Национальный парк Гранд-Каньон (Grand Canyon National Park)",
                    url: "http://tonkosti.ru/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BF%D0%B0%D1%80%D0%BA_%D0%93%D1%80%D0%B0%D0%BD%D0%B4-%D0%9A%D0%B0%D0%BD%D1%8C%D0%BE%D0%BD",
                    img: "https://i.ytimg.com/vi/VCGWRk5ASVY/maxresdefault.jpg"
                }
            ]
        },
        {
            day: 17,
            notice: {
                tag: "Покупать билет на автобус на сайте Wanderu, чтобы поехать в Сиэтл чтобы лететь домой (2 дня)",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/30/26/seattle.jpg"
            },
            places: [
                {
                    tag: "Отель: The Edge Water",
                    url: "http://www.edgewaterhotel.com/",
                    img: "http://www.noblehousemenus.com/images/social/EdgewaterHotel.jpg"
                }
            ]
        },
        {
            day: 20,
            notice: {
                tag: "Выезд из США",
                img: "https://images.trvl-media.com/media/content/expus/graphics/launch/flight1320x742.jpg"
            }
        }
    ];
});

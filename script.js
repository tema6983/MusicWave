// Расширенный список треков
let tracks = [
    { id: '1', title: "New Jeans", artist: "New Jeans", cover: "https://static.hitmcdn.com/cover/175/ea4/39414.jpg", file: "https://fine.sunproxy.net/file/Y1NON3BpK1EwYVdxSVBuL2RZMVZIWHlBVytGbVg3cWFuemNXWlpmV0QxL0h2YU5JWEpBLzBRUFFXZmM2T0NxZjNPZUxRUzY4YXVtK29UeHRZQ0ZUdkxuejBjNDhrT2t4WHdzRVpGa25KaGM9/NewJeans_-_New_Jeans_(SkySound.cc).mp3", popular: true,},
    { id: '2', title: "Дурак и молния", artist: "Король и шут", cover: "https://static.hitmcdn.com/covers/a/b5b/aa9/2559.jpg", file: "https://muzn.cc/file/w000Bp17klt6KGbcYZqNsBYp-bY5_zUhnF037Nsd-ML5_AOFkTCohLLjwi6Mpe8sd0dpSucyyZBAZsL6y_4Tnn1a7hIbGAxJO-_kW9V4tFWnwtIU8ZfmXQAa8eccSF1dtXXOz6ZoyCCTXhP9lcm0tPsyUGKtRE7BeIptJivWYC6frHaIb-zbGcq1Xn8pE7cDH-6RoiKE_KEZ1DsCwCx-a9RWRuMScq1lGgDMCneAGMizwMOUMg2GiFw5zpecxVfOtW3DWVzMjWQsR_uw_DCeBnodUXD1OcmCOIO-_ZTXCxKQfz0wWAC-eu86kOiWhI3eAHRlf2jzVqWSLQ9CbFpNb2qDZw9BUi028H3Q3RSXGRZ54_MMECSH_1N0SxDcGZy1_bxGuKwyLJ-3maWKPEtRm24.mp3", popular: true,},
    { id: '3', title: "Trenchtown", artist: "MiyaGi", cover: "https://static.hitmcdn.com/covers/a/5c2/ec6/529946.jpg", file: "https://muzn.cc/file/fcJ_3o4u_kJB9wuHy855k2K5z5DTRqzmLq4sjWqMAkUT8elliH5xaygqUIrVali5qDI-lGNtniSI2DVH6J9aSFC6r5umEx6EK9yN_yqHVUpjVnCjN7lUWvwQY56VB3N9EskCUFHKZlRvUJ7_ytfl0njG2X9K6EsWi7s1tVVkKWVTfPnsQOZZcQQMh3OkyL0HqwFjfcln_3Nn8h9xs-p-XUCNKOwrTiiV2iZENhKjP0e7CDifuY5UI3dgsbZHqJoeoY1O7e5vNnktvAUx0NGYF24yaGglYh9otaqSpvt324riirLDdXxjmzpXAgRlqSriMF20R2gSuM9iXALFumVemWaCDWDTHf7DKBr8fagRHrpz.mp3", popular: true,},
    { id: '4', title: "Slow Mo", artist: "Скриптонит", cover: "https://static.hitmcdn.com/covers/a/01f/59e/805320.jpg", file: "https://muzn.cc/file/sPMikBc0urKtRJGuOnnkjWt1c1D1MxVH08-hq8UPRHmZZnajsmgROeQ2IrpEEIgv_bWQ1ijkpT4QsoW5FfY7K24LJPPDitEYxqVHAM8xeC_WhYCG2A0LTl0uHHX4A52yk1FYLMXrhbaiKy34LS41iLd96DFWn0HNRO8dk8mR2KZRGe_hkCtkzvsQcdU5q-ybCXVkvKT52_d4Hoo9vsYaMX4JrldiQt-E5e6-pTxpLn8ETaxXXyclonaxUuwkgA-nV2hIzxF1qKpZp-v1WJRPo1JM69M0esD1xyswOg7suBGY7zCZceGBEyiw2CT4UAgj-xmHiNuqQ5t0taP1JOr_-PsFHzeKs8dBJilYmqcuFVFIDon1BweWetr7mhym5H-f8SyTVQ.mp3", popular: true,},
    { id: '5', title: "Chest Pain (I Love)", artist: "Malcolm Todd", cover: "https://static.hitmcdn.com/cover/cd1/db6/126339.jpg", file: "https://muzn.cc/file/dupxnPJp_7gzK171-Ft6fZgewgR605oQeQ0k27JhUrdbp8CYYpQNxRzbo5TiORWj8LyabQsu3Hc79NS1y0X6ZD-v34j8ZvSoMaeFYCwLflKTHMHYuKtLWYM89gvBwsA-ToYQAZe1JgTUNxJfySBFxMtOPLDtIL5JCOC3iw0kt3F54YMxl09twAItQYxl-r282bBOEnOqAgShL3DfY6w-athXjxDhtB9Uq-x1Gy8ATMhiIdr5MEcQSLaFTCHmMhJ0YtbYx4_OiBRSIkamvK1CVr8wMGL_8fwlY6TarhDoVkvQdQ3u3IpzK3HdYsLtSshb1p_wDnc7N-g__LkIjmHCG15NiekTCrziH9Cr88idCv_mgnNFAfj2OyufHBvrgRg_.mp3", popular: true,},
    { id: '6', title: "Пачка сигарет", artist: "Круппа крови", cover: "https://static.hitmcdn.com/covers/a/c5a/b6c/5238.jpg", file: "https://muzn.cc/file/uc_LqFB08b2V_einL8cKLztoYCTNlbf014x5S8-TvpuKtYAPYz0kcdbOg2qFUnnJC-vMmQ2QsCzpT7OpDcunqCPh2djlvs5_pJ_7eH0lhdSUJE54VSnVs9Hn_gwJfoocXqeMjAw2JExSgsGvSxWWJKThU8bCi21R30SgM13m74qJ7qBCVHBMDDd37kACDwkl6nLtrsHlxKKjUCISqEnIqP7jlfwXy8hQFKq2YUqnfVNPE42DEMg45m5vKpqmbhihyTBXXoNgWDPEV2eapLXyESBgFVGoBMy6K6duOeIbfZK0xHZtwk9uE9B0-kMQk0vsH7DFrjm6xCNUztumHFa-zcvmZDM9dDuFyPJ-87LCOBjCOcB2xb7-ylKSl1sLQVIlGjI.mp3", popular: true,},
    { id: '7', title: "LABIRINT", artist: "Face", cover: "https://static.hitmcdn.com/covers/a/e42/0ab/585193.jpg", file: "https://muzn.cc/file/Hj_rmJfuexXxoyK5c9y2RlqrFmo0Wy_c3EXz5Gu6vBs5bWqYs7YWNRHbUyspKyjFhfKH_w6ytVuvSIYOsiWTqP0V65bKLsPUDCUrcss_RqkkDjx9hT2P-zYsaHIoDHNIWIZMSwAJb_nptyj7ofPz84viSh_rwSjgnX_MMHYXguXNfALUwJ7A_KXVkhiYeY1iiMSGn02sclEGrWsS5SBFOoHpUximGAjLAV3JyfbXcGhGBUnTFLPIwOWL9ZttPpdSPCNQvrGMCo2uA0wPHh7PdTHzpxTcWduATJCCxRNCrH1LWQwFKtG7AAWkjWuF-upqg4ddaEiqC1n03I9zP7aOwrZT3UoV_v-PUt3Acxr4Fqp_gsMSGsA.mp3", popular: true,},
    { id: '8', title: "two", artist: "bbno$", cover: "https://avatars.mds.yandex.net/i?id=4d1b1a9f412288e46b12d2b1e76ef5cd1fb48384-9882580-images-thumbs&n=13", file: "https://muzn.cc/file/Lox9XFZNZt6AI1qUP6a1O2o0HL4iYTE21J5kVmA_8CZWOUtUnYxbgtkaNiAEw_ebaqGo1F7t37iU502byVHX13rMDz01a_ghVRXltAj_NX3XO4AhamZeMaNR-kfU7ivjkp5fhqgKK9E4IsUA-T20mwYLzaom4go2ZTaUFWHb22YYLfM278rmoGoPnhogox-D2Ojtr5Vo_4fZqF0sQTlM6H08xyRWDr8m99dzBBa9mmzgcNjASw5JNKBrv8RNlijmG-cSSgQ09SnVi6i4l6nFpjqIAK6ACVbL94bhekVt2Kr4Wmm8cjUthVmSs8R-xC7_4fCiK4iH44a-6bH5aRa7ToIXFnSiOTCe.mp3", popular: true,},
    { id: '9', title: "Golden Hour", artist: "JVKE", cover: "https://static.hitmcdn.com/cover/e56/190/33874.jpg", file: "https://muzn.cc/file/XxbcRA80O6aHy4_2zAwMya16XVVWCW9ohLf1lEDCEJ0pcqePzeKxQKL__iTvF6CdZ7zLJ9gB-KTd7-FF_nvQ-Mgquvcm-NB1bYklA75PSk3NNv6Nx3M2Afjooq_IPOmX4HnYCkwnSOocut3oA0JnIow2pNLH1bf8IlRPZOvP8nEkdWHuZ3LIG8xmGnprG-IRTHV8bx1BYh94clJBLQ-4A4Lq0vfcXMi7FoZAA3uWRzaifvGxVAEz_5e_9NTIPsMY01dYA7ZpYhccD5x9dJxHkEr6MvC0hkcCQ8O2oDKaMRaMvmmEX64x9-4jjPb1bAS55l0tmLcvY0oL27beW59FU4FsLM4ytJyH9k0zp4SFF9Y.mp3", popular: true,},
    { id: '10', title: "Hit the Road Jack", artist: "Ray Charles", cover: "https://avatars.yandex.net/get-music-content/63210/55c94fac.a.4186580-1/150x150", file: "https://muzn.cc/file/KrGfvAV7k153j0c09iA6y3waWQI_T-GO1Q3oRHYPmIatlWL3fXA96zMc6WSTSUegRbRBk7hQiBnQS5on0pscBvb_5tATZrN-S0B06xIWzIRUmOqMi59DELFEKS9K4RXOYSV1IA_FlNUbLUNzVYhXjuk8Symerwel1ZG9_-pofm2H3rqb9UZ3FCNk2ga3wfdXvw0P132Vinc38QFuxpawqMrgikH2iCVQbMAaIUAVqkM5cpLeZNHx62ThC5u82g8IQbk7C9arhD34-S6fKHexf6QP3Q0WEVWtemOwfiGrGM79_Cos5M1uiYo0helvsXgcJerzTYX8XnA7afGpkwnSiwr1qqB-93d-IIO2ZNQO207FrFMli3Y9pkUOPHsn.mp3", popular: true,},
    //Рок
  { id: '11', title: "Bohemian Rhapsody", artist: "Queen", cover: "https://static.hitmcdn.com/covers/a/b1c/438/417378.jpg", file: "https://muzn.cc/file/kjBAwgFqrrxhHoBotxmgNNe5VdpA1iQ4RATDeApqDyhEQCkanwrQHCWgB4Pc8J6sxb-NlGUgsla0RmhngfNwTEa6ULFuyArgRkuJCk3mLnXPCcv_FMNgYq-DDXAq7UCZid1MRhUARQYXpr4YvFAG3MhdN8mBfrEb9CgRLCAsE_P3Ctd3NoEJvP0nqBbPvDHbxUJH7C7A2Kec8RZUf6u-FMF6FLgKMn7R2jtaw6dhvXSNe4jll6eylNQtjUU7FTBr4ZXhRXtnJKbxlAUjPEhCfoXCx1D3USZIDiG9KE7FUbJdnfGuEfUszf6fTOpXu9owyJzBhLW_IOvVvD6_VcdqleaXB6_2U3eK9dPgqfxhaCH3JK1RjMOV.mp3", popular: false, genre: "rock"},
  { id: '12', title: "Thunder", artist: "Imagine Dragons", cover: "https://static.hitmcdn.com/covers/a/a50/d9f/206083.jpg", file: "https://muzn.cc/file/P9a6RY7JWIHVtwqgEEb_JTgwiusdWUAhfa01UWzFi0yLjty0XvgBPZtMK0GAX2LKXr7YSL45Lv0UJR82OJ8TRr_IQoDuVGOSGXQzZWXLFKL4UzuIkj3mIbBU09SIvLj36Nr0hp67CBCkOhjNrG5w5b8fRXFYHbVCDebblJLP2IJp-M4jTVvjBS3FrLjBWA0K7u-s6v1GrZTqXI7AM5IxHZBN8PC6xwjoKGNYCiH1r00c4_0kHXYCEfU7b7J3OqY9GvxRUpH8ZWnFR9IMI22HPqthTKko0gSZGd4PiqC5uGkqNmUNLc_fjO7BECJp73ACf7GmdcQaYF9M_bmCq93gHVZyJOV_ClCIEmKJ46N_Ay4OSjb6g8rp.mp3", popular: false, genre: "rock"},
  { id: '13', title: "Believer", artist: "Imagine Dragons", cover: "https://static.hitmcdn.com/covers/a/95e/323/371376.jpg", file: "https://muzn.cc/file/an63mshc4blThrCE5TbuJKeAtkbumSzBOFXoMWw9okmrUYLBJrs0zNrOIHE_lQIP3XQY9a_OiVeGtsvP6RdEc27SDYibSl_gck9n0A6cyAW7msRGkMkp6IWg_K3cVhDTqDUqENBmjD1d4yBzEFoeKxprNG3PubyQ1xC2lcxMI6otdiFgCe5EIDxl-0vObLUWRwofylIjgjN5c374eblvZxL4hSCSV4Ps-XRXsZobsmwdbL0NlsNRpNhBU_jJmQ0toFMh7Lj35DtAHfYl-g_U4iCdgkmxVCu-LuvEq0J9E4oMXMlQ6B5gjiYwDaUkCGifXwsyS1DHFL_CWcobJ4tGI-mHGkAg1mKWjjS3Fa31YWWG5_z3vmqW.mp3", popular: false, genre: "rock"},
  { id: '14', title: "Back In Black", artist: "AC/DC", cover: "https://avatars.yandex.net/get-music-content/63210/06eace8e.a.2834452-1/150x150", file: "https://muzn.cc/file/HSezUf1DSvsxGPLNe-5rjDXIBHTMGZufiFgt3KCZOEcYujLHFJkdMtymtr1jADqBFaOGS65UExrdI9PPMuWeFdhtcJhPxL8dHVBmEtj4GLLrO8CAfj5NneHe0arF1NXs4i8iyxXU4-HvIK5gwtN9i9eaBY2MjOxMnHJ5HLpZL3i2dEP5Dwo4pYxpmkpJEOML_hnGVjgsYsc4S3Nnvjh_MuKAVpy8N6uSGk1EgENgwrvK9lSaoVubPLO9idDnhcRDXBtp_oER4s5Hz6pdZ76PttbBn1PKXSgRmygmIjeaSEaf1n07xKeRbnw02FOZXr-YmP47CgKQBzigimJeFZT4-tK8_oODsCt7mPyskSy-Ojr_i7g.mp3", popular: false, genre: "rock"},
  { id: '15', title: "We Will Rock You", artist: "Queen", cover: "https://avatars.yandex.net/get-music-content/49707/19fa6f8c.a.514168-1/150x150", file: "https://muzn.cc/file/uXuDznWPu9n-udC9yeS3eHc_Rtl5mgIgR6K1LrN91OWUxEC547mJxXOdd8pi9_zTJMJIKFqHpQX437dmbvl6xxoYujUGM1KdAf5Fk90IenIn9mkk9i4EsjC-xq03CvkddxN65uLHa4G4kcHJFOBEkQGN2mGRqrM5kxDUVgzUDuJpBGVoaF-ORB0PN2QfI3OE9XY7jC7EUd_4dNlQgrvynhX_xDjd3j96jyZfeH4IB00baRWh9nVOqnzddY66cNdb5kTvwBRWhDLLGwem3993JVso0llTR0XOHc0i2iyGfwkDr-9hqsXOg-GlsmvymVc-SIerG2XDkiCR97GbPL4vDxgV6HwSc3P7_eFSygbdGmdd5PKVn2A.mp3", popular: false, genre: "rock"},
    //hip-pop
    { id: '16', title: "Run It Up", artist: "Hanumankind", cover: "https://avatars.mds.yandex.net/i?id=c7a45cfad48d6a46287dca7274bfbc68929fac78-7457232-images-thumbs&n=13", file: "https://muzn.cc/file/az-3wGPPPzdljhGJj6Vz2BNp7vdmQ5j6BYBWVej4MV-mLiQofD2PpCu0cQw8oZfSM9-IVf7nZAQB-EKQpVNwE0CBz_mPL6h0NS2JdY1tSZll0rjYkzKgW_PiorcBz1jGyRa2boD0Y6K2Q1zOlVR0Ca3p_EQ-iyjjo-tO6qtca6Hubcc__v-d8X4wUHSJcuJtzGnBBttJpbH28NqrlPDHEd0K1hNsuu01Ds-bR2XZ2XESFX9j28Tcsgod9c385dA7uqDYJv9UgzmGAEewAsehpaEBdnDdl2nwjY1diH-8NOmk53O49CRmMNx1chccTjQywDOmKmNsgqhCAzXkHoge1qK50H_H85szKrL75oeize38g9ct.mp3", popular: false, genre: "hip-pop"},
    { id: '17', title: "Big Dawgs", artist: "Hanumankind,Kalmi", cover: "https://avatars.mds.yandex.net/get-entity_search/98180/953726851/S600xU", file: "https://muzn.cc/file/9cbrQ_ITu7X-lr-xSiD5YKzA9ukvf8gVxm9cAuSIQU1Y6PxFaoa05WT8Wih8PMds6ODe2EnH__HIz-hw_rxzbEQOe-KD7xpSEcgwncPI6oKUgeVReFrPsEtIbsuRy1A2tG4RLuQVVkmExtHhUnlnUk9Tn4WHlmyKk1BQbbZ6Fp82FUOkfco6GMF6p0XUS32dY3WSDrQbzyYylfpuDw81lr40lQ_zHq-aSpoiDvqDVq27LHFyLsB4ZTaBLl2idkImh4TRWb9d5ev9WpizlQ6g8nSLBvg0OTJVWU5GDOoVzF-2CdHrCwTWCzR7pXGOgegV2G5m3G6DJqJLuyswTlbcHR5870Z3pw4WQxn6FIqWsLjBHSl16X6mvHlyRjCmeXzN.mp3", popular: false, genre: "hip-pop"},
    { id: '18', title: "FE!N", artist: "Travis Scott", cover: "https://avatars.mds.yandex.net/get-entity_search/5098055/980555505/S600xU", file: "https://muzn.cc/file/eVvveCxLQ3OAXjdEBFY3xoG9BCMaXfC7V2eD013dq50m3dE2FMrrWVmJV8pbY5cayXGF9L5FHbfydHcQBEHrx74nKzbaQESKmrffxe7jsOYRCFl6gNmQXU8zZV-POGWDxAhG_zi6L6lnMrzOPB7HEz9G1ixCQ-uJHrGs6sDIIWCbO9fD81hdoglfMvAsCWATlkDkyVzITCVszz44GJgH3MUcPOEt-MhVhMsC56RgRw5xVeN5CJfLNjNqkyufVxxBVe3UX30Kq8WKbJLCIT0USBXvkfiSSK1SqkUO37YMmPjd9BsKiPbROfZuja_CP6UFzWZDidWdAKO-wEsXQTH-rkDtzdIWf-ghgUNOuRpLYA6yLg.mp3", popular: false, genre: "hip-pop"},
    { id: '19', title: "大展鴻圖", artist: "SKAI ISYOURGOD,AR", cover: "https://avatars.mds.yandex.net/i?id=e536b19c750ee6f47c7bc6ee1bddbd14ce8cd46b-9147529-images-thumbs&n=13", file: "https://muznc.net/uploads/files/skai-isyourgod-ar-blueprint-supreme.mp3", popular: false, genre: "hip-pop"},
    { id: '20', title: "八方來財", artist: "SKAI ISYOURGOD", cover: "https://avatars.mds.yandex.net/i?id=e536b19c750ee6f47c7bc6ee1bddbd14ce8cd46b-9147529-images-thumbs&n=13", file: "https://track.pinkamuz.pro/play/33b230b7b4303032358b3731353332313030340600/f41bdaac2a44c45a0ad989d2b76672df/0.mp3", popular: false, genre: "hip-pop"},
    //Funk
    { id: '21', title: "MONTAGEM BAILÃO", artist: "Repsaj", cover: "https://avatars.mds.yandex.net/i?id=caa9221ab1f0dd69f0eb0d2aeb6e3ccf38bf7b9a-4230909-images-thumbs&n=13", file: "https://track.pinkamuz.pro/play/b330b1b434303135378e3731353332b63430b20000/1a1a157627577321dabc3a69ce15c6f7/3.mp3", popular: false, genre: "Funk"},
    { id: '22', title: "DIA DELÍCIA", artist: "Nakama, Mc Staff, ΣP", cover: "https://avatars.mds.yandex.net/i?id=2a00000197387686e818b846ca1d77880f8d-1677519-fast-images&n=13", file: "https://track.pinkamuz.pro/play/33313731b1b43434318a373135b3b034b434350300/f14c0c808307c05b71de8157f2bcc155/3.mp3", popular: false, genre: "Funk"},
    { id: '23', title: "Montagem Bandido", artist: "Jmilton, Itamar Mc", cover: "https://avatars.mds.yandex.net/i?id=2a00000197571c05a9f7856d79406d2c2ced-1404084-fast-images&n=13", file: "https://track.pinkamuz.pro/play/33313731b1b434363089373135b334303432b20400/1d18cfd3747813f7bc75428223bb785d/0.mp3", popular: false, genre: "Funk"},
    { id: '24', title: "Vem Vem", artist: "Jmilton", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6c/54/86/6c5486ec-93b7-4e35-449c-e71d1c841a9c/199350791888.jpg/88x88bb.jpg", file: "https://track.pinkamuz.pro/play/333730303632373533893731353332b63432360500/aa76b241b0caa197ba5634d736ca7301/0.mp3", popular: false, genre: "Funk"},
    { id: '25', title: "MONTAGEM TOMADA", artist: "MXZI", cover: "https://avatars.mds.yandex.net/i?id=d6039d1eff1e51145709d1541cf62976124008b7-10133983-images-thumbs&n=13", file: "https://track.pinkamuz.pro/play/b3303134b3303735358b3731353332b634b4300700/bd190919ccf1ca796dc2579a33988cc0/2.mp3", popular: false, genre: "Funk"},
    // k-pop
    { id: '26', title: "Gentleman", artist: "PSY", cover: "https://static.hitmcdn.com/covers/a/257/8eb/10862.jpg", file: "https://dl1.mp3party.net/online/7715159.mp3", popular: false, genre: "k-pop"},
    { id: '27', title: "APT.", artist: "ROS. feat. Bruno Mars", cover: "https://static.hitmcdn.com/cover/11c/adb/132721.jpg", file: "https://dl1.mp3party.net/online/11181513.mp3", popular: false, genre: "k-pop"},
    { id: '28', title: "Super Shy", artist: "NewJeans", cover: "https://static.hitmcdn.com/cover/9f2/6e2/38122.jpg", file: "https://dl1.mp3party.net/online/10855948.mp3", popular: false, genre: "k-pop"},
    { id: '29', title: "How You Like That", artist: "BLACKPINK", cover: "https://static.hitmcdn.com/covers/a/e4e/c5b/613026.jpg", file: "https://dl1.mp3party.net/online/9317291.mp3", popular: false, genre: "k-pop"},
    { id: '30', title: "BOOMBAYAH", artist: "BLACKPINK", cover: "https://static.hitmcdn.com/covers/a/fbc/55f/564447.jpg", file: "https://dl1.mp3party.net/online/4274136.mp3", popular: false, genre: "k-pop"},
    //Метал
    { id: '31', title: "life force", artist: "ptasinski,RJ Pasin", cover: "https://avatars.mds.yandex.net/i?id=ce8546b9904143d282985e7fef0e48a2e3bad870-8483391-images-thumbs&n=13", file: "https://track.pinkamuz.pro/play/333533303735313737883731353332b63437320000/67375b857ed9657734eb02603c701d8c/0.mp3", popular: false, genre: "metal"},
    { id: '32', title: "lobster", artist: "ptasinski,RJ Pasin", cover: "https://avatars.mds.yandex.net/i?id=67eaba8b3b5bf5c81a9c3968ac34864765a111b8-5166492-images-thumbs&n=13", file: "https://eu.hitmo-top.com/get/music/20240708/Rj_Pasin_-_Lobster_78103891.mp3", popular: false, genre: "metal"},
    { id: '33', title: "te amo", artist: "ptasinski,RJ Pasin", cover: "https://avatars.mds.yandex.net/i?id=ce8546b9904143d282985e7fef0e48a2e3bad870-8483391-images-thumbs&n=13", file: "https://eu.hitmo-top.com/get/music/20250113/Rj_Pasin_-_Te_amo_full_version_78937205.mp3", popular: false, genre: "metal"},
    { id: '34', title: "Recreate", artist: "ptasinski,RJ Pasin", cover: "https://avatars.mds.yandex.net/i?id=87c12d7ab3b2d6db5af3ea512c21518dd1cee80d-5429127-images-thumbs&n=13", file: "https://track.pinkamuz.pro/play/333736b634313635318e373135333231b230370700/1cd303da2a6ac96b5ef238591afed80e/9.mp3", popular: false, genre: "metal"},
    { id: '35', title: "Denial", artist: "ptasinski,RJ Pasin", cover: "https://avatars.mds.yandex.net/i?id=4ca593a7c3b0a0d60f0818bd0cefaa096294f37f-5018153-images-thumbs&n=13", file: "https://track.pinkamuz.pro/play/33343531b73035b2348d3731353332313731320000/1cd303da2a6ac96b5ef238591afed80e/1.mp3", popular: false, genre: "metal"},
  //R&B
  { id: '36', title: "Blinding Lights", artist: "The Weeknd", cover: "https://static.hitmcdn.com/covers/a/8c6/352/587534.jpg", file: "https://dl1.mp3party.net/online/9214084.mp3", popular: false, genre: "R&B"},
  { id: '37', title: "Smack That", artist: "Akon", cover: "https://avatars.yandex.net/get-music-content/34131/b41c030f.a.2060-1/150x150", file: "https://dl1.mp3party.net/online/1847398.mp3", popular: false, genre: "R&B"},
  { id: '38', title: "I Want You Back", artist: "Jackson 5", cover: "https://static.hitmcdn.com/covers/a/6d3/a2d/3745.jpg", file: "https://dl1.mp3party.net/online/213479.mp3", popular: false, genre: "R&B"},
  { id: '39', title: "Happy", artist: "Pharrell Williams", cover: "https://static.hitmcdn.com/covers/a/b9f/94c/1702.jpg", file: "https://dl1.mp3party.net/online/107701.mp3", popular: false, genre: "R&B"},
  { id: '40', title: "California Gurls", artist: "Katy Perry", cover: "https://static.hitmcdn.com/covers/a/d69/3d5/5327.jpg", file: "https://dl1.mp3party.net/online/8907236.mp3", popular: false, genre: "R&B"},
   //rap
   { id: '41', title: "Anxiety", artist: "Doechii", cover: "https://static.hitmcdn.com/cover/b9b/cf6/132718.jpg", file: "https://dl1.mp3party.net/online/11271401.mp3", popular: false, genre: "rap"},
   { id: '42', title: "Not Like Us", artist: "Kendrick Lamar", cover: "https://static.hitmcdn.com/cover/815/e49/132811.jpg", file: "https://dl1.mp3party.net/online/11068467.mp3", popular: false, genre: "rap"},
   { id: '43', title: "Marlboro", artist: "Miyagi", cover: "https://static.hitmcdn.com/covers/a/2ef/40c/554661.jpg", file: "https://dl1.mp3party.net/online/8844803.mp3", popular: false, genre: "rap"},
   { id: '44', title: "Kosandra", artist: "Miyagi & Andy Panda", cover: "https://static.hitmcdn.com/covers/a/b29/626/596739.jpg", file: "https://dl1.mp3party.net/online/9205871.mp3", popular: false, genre: "rap"},
   { id: '45', title: "I Got Love", artist: "Miyagi & Эндшпиль", cover: "https://static.hitmcdn.com/covers/a/92f/969/199510.jpg", file: "https://dl1.mp3party.net/online/9545388.mp3", popular: false, genre: "rap"},
  ];
  
  // Список жанров
  const genres = [
      { id: "rock", name: "Рок", icon: "fa-guitar" },
      { id: "hip-pop", name: "Хип-Поп", icon: "fa-microphone" },
      { id: "Funk", name: "Funk", icon: "fa-sliders-h" },
      { id: "k-pop", name: "k-pop", icon: "fa-music" },
      { id: "metal", name: "Метал", icon: "fa-drum" },
      { id: "R&B", name: "R&B", icon: "fa-moon" },
      { id: "rap", name: "Рэп", icon: "fa-comment" },
    ];
  
  const playbackSettings = {
    repeat: false,
    shuffle: false,
    currentPlaylist: null
  };
  
  const achievements = [
    { id: 'first_listen', title: 'Первый трек', description: 'Прослушал первый трек', icon: 'fa-music', condition: (user) => user.stats.tracksListened >= 1 },
    { id: 'playlist_creator', title: 'Создатель', description: 'Создал первый плейлист', icon: 'fa-list', condition: (user) => user.stats.playlistsCreated >= 1 },
    { id: 'music_lover', title: 'Любитель музыки', description: 'Прослушал 10 треков', icon: 'fa-heart', condition: (user) => user.stats.tracksListened >= 10 },
    { id: 'collector', title: 'Коллекционер', description: 'Создал 3 плейлиста', icon: 'fa-folder-plus', condition: (user) => user.stats.playlistsCreated >= 3 },
    { id: 'explorer', title: 'Исследователь', description: 'Прослушал все треки', icon: 'fa-globe', condition: (user) => user.stats.tracksListened >= tracks.length },
    { id: 'night_owl', title: 'Ночная сова', description: 'Слушал музыку после полуночи', icon: 'fa-moon', condition: (user) => user.stats.listenedAtNight },
    { id: 'early_bird', title: 'Жаворонок', description: 'Слушал музыку до 8 утра', icon: 'fa-sun', condition: (user) => user.stats.listenedInMorning },
    { id: 'marathon', title: 'Марафонец', description: 'Слушал музыку более 1 часа подряд', icon: 'fa-running', condition: (user) => user.stats.longestSession >= 60 },
    { id: 'taste_maker', title: 'Знаток', description: 'Добавил 10 треков в избранное', icon: 'fa-star', condition: (user) => user.likedTracks.length >= 10 },
    { id: 'veteran', title: 'Ветеран', description: 'Использует приложение более недели', icon: 'fa-award', condition: (user) => (new Date() - new Date(user.joinDate)) > 7 * 24 * 60 * 60 * 1000 }
  ];
  
  let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
  let users = JSON.parse(localStorage.getItem('users')) || [{
    id: 1, 
    name: "Admin", 
    email: "admin@example.com", 
    password: hashCode("admin123"), 
    avatar: "A", 
    likedTracks: [],
    playlists: [],
    stats: { tracksListened: 0, playlistsCreated: 0, listenedAtNight: false, listenedInMorning: false, longestSession: 0, lastListenTime: null },
    joinDate: new Date().toISOString(),
    achievementsUnlocked: []
  }];
  
  let currentTrackIndex = 0;
  let isPlaying = false;
  let isMuted = false;
  let lastVolume = 0.7;
  let currentPlaylistId = null;
  let sessionStartTime = null;
  
  let audioPlayer = new Howl({
    src: [tracks[0].file],
    html5: true,
    volume: 0.7,
    onplay: function() { updatePlayButton(true); updateProgress(); sessionStartTime = new Date(); },
    onpause: function() { updatePlayButton(false); updateSessionDuration(); },
    onend: handleTrackEnd, // Изменено здесь
    onloaderror: function(_, err) { console.error('Audio load error:', err); showNotification('Ошибка загрузки трека'); handleTrackEnd(); }
});
  
  const elements = {
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),
    searchContainer: document.getElementById('search-container'),
    searchToggle: document.getElementById('search-toggle'),
    userPlaylistsContainer: document.getElementById('user-playlists-container'),
    createPlaylistBtn: document.getElementById('create-playlist-btn'),
    playlistModal: document.getElementById('playlist-modal'),
    addTrackModal: document.getElementById('add-track-modal'),
    savePlaylistBtn: document.getElementById('save-playlist-btn'),
    playBtn: document.getElementById('play-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    shuffleBtn: document.getElementById('shuffle-btn'),
    repeatBtn: document.getElementById('repeat-btn'),
    progressBar: document.getElementById('progress-bar'),
    currentTimeEl: document.getElementById('current-time'),
    durationEl: document.getElementById('duration'),
    currentCover: document.getElementById('current-cover'),
    currentTitle: document.getElementById('current-title'),
    currentArtist: document.getElementById('current-artist'),
    volumeBtn: document.getElementById('volume-btn'),
    volumeSlider: document.getElementById('volume-slider'),
    volumeIcon: document.getElementById('volume-icon'),
    likeBtn: document.getElementById('like-btn'),
    themeToggle: document.getElementById('theme-toggle'),
    closeButtons: document.querySelectorAll('.close'),
    popularTracksSection: document.querySelector('.popular-tracks'),
    userPlaylistsSection: document.querySelector('.user-playlists'),
    profileSection: document.getElementById('profile-section'),
    mainContainer: document.querySelector('main'),
    authModal: document.getElementById('auth-modal'),
    authBtn: document.getElementById('auth-btn'),
    loginBtn: document.getElementById('login-btn'),
    registerBtn: document.getElementById('register-btn'),
    logoutBtn: document.getElementById('logout-btn'),
    profileBtn: document.getElementById('profile-btn'),
    userProfile: document.getElementById('user-profile'),
    userAuth: document.getElementById('user-auth'),
    userAvatar: document.getElementById('user-avatar'),
    usernameDisplay: document.getElementById('username-display'),
    profileAvatar: document.getElementById('profile-avatar'),
    profileUsername: document.getElementById('profile-username'),
    tracksListened: document.getElementById('tracks-listened'),
    playlistsCreated: document.getElementById('playlists-created'),
    achievementsEarned: document.getElementById('achievements-earned'),
    achievementsGrid: document.getElementById('achievements-grid'),
    backFromProfile: document.getElementById('back-from-profile'),
    genresModal: document.getElementById('genres-modal'),
    genresContainer: document.getElementById('genres-container'),
    genresToggle: document.getElementById('genres-toggle'),
    backToGenres: document.getElementById('back-to-genres'),
    genreTracks: document.getElementById('genre-tracks'),
    genreTracksList: document.getElementById('genre-tracks-list'),
    currentGenreName: document.getElementById('current-genre-name'),
    genreSearch: document.getElementById('genre-search')
  };
  
  function initAuth() {
    if (currentUser) {
        showUserProfile(currentUser);
    } else {
        showAuthButton();
    }
    
    elements.authBtn.addEventListener('click', () => {
        elements.authModal.style.display = 'block';
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        
        document.getElementById('login-form').classList.add('active');
        document.querySelector('[data-tab="login"]').classList.add('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            document.querySelectorAll('.auth-form, .tab-btn').forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
            document.getElementById(`${tab}-form`).classList.add('active');
        });
    });
    
    elements.loginBtn.addEventListener('click', login);
    elements.registerBtn.addEventListener('click', register);
    elements.logoutBtn.addEventListener('click', logout);
    elements.profileBtn.addEventListener('click', openProfile);
    initPasswordToggles();
  }
  
  function initPasswordToggles() {
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', function() {
            const input = document.getElementById(this.getAttribute('data-target'));
            input.type = input.type === 'password' ? 'text' : 'password';
            this.classList.toggle('fa-eye-slash');
        });
    });
  }
  
  function login() {
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = ['gmail.com', 'mail.ru', 'yandex.ru', 'yahoo.com', 'outlook.com'];
    
    // Проверка на латинские символы в пароле
  if (!/^[\x00-\x7F]*$/.test(password)) {
    errorElement.textContent = '✖ Пароль должен содержать латинские буквы';
    return;
  }

    if (!emailRegex.test(email)) {
        errorElement.textContent = '✖ Неверный формат email';
        return;
    }
    
    if (!allowedDomains.includes(email.split('@')[1])) {
        errorElement.textContent = `✖ Допускаются только: ${allowedDomains.join(', ')}`;
        return;
    }
    
    const user = users.find(u => u.email === email);
    if (user && user.password === hashCode(password)) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        showUserProfile(user);
        elements.authModal.style.display = 'none';
        showNotification(`Добро пожаловать, ${user.name}!`);
        renderPlaylists();
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        errorElement.textContent = '';
    } else {
        errorElement.textContent = '✖ Неверный email или пароль';
    }
  }
  
  function register() {
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim().toLowerCase();
    const password = document.getElementById('register-password').value;
    const errorElement = document.getElementById('register-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = ['gmail.com', 'mail.ru', 'yandex.ru', 'yahoo.com', 'outlook.com'];
    
    if (!name || !email || !password) {
        errorElement.textContent = '✖ Заполните все поля';
        return;
    }

    // Проверка на латинские символы в пароле
  if (!/^[\x00-\x7F]*$/.test(password)) {
    errorElement.textContent = '✖ Пароль должен содержать латинские буквы';
    return;
  }
    if (!emailRegex.test(email)) {
        errorElement.textContent = '✖ Неверный формат email';
        return;
    }
    
    if (!allowedDomains.includes(email.split('@')[1])) {
        errorElement.textContent = `✖ Разрешены только: ${allowedDomains.join(', ')}`;
        return;
    }
    
    if (password.length < 6) {
        errorElement.textContent = '✖ Пароль должен быть не менее 6 символов';
        return;
    }
    
    if (users.some(u => u.email === email)) {
        errorElement.textContent = '✖ Пользователь с таким email уже существует';
        return;
    }
  
    const newUser = {
        id: Date.now(),
        name,
        email,
        password: hashCode(password),
        avatar: name.charAt(0).toUpperCase(),
        likedTracks: [],
        playlists: [],
        stats: { tracksListened: 0, playlistsCreated: 0, listenedAtNight: false, listenedInMorning: false, longestSession: 0, lastListenTime: null },
        joinDate: new Date().toISOString(),
        achievementsUnlocked: []
    };
  
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    showUserProfile(newUser);
    elements.authModal.style.display = 'none';
    showNotification(`Добро пожаловать, ${name}!`);
    renderPlaylists();
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
    errorElement.textContent = '';
  }
  
  function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showAuthButton();
    showNotification('Вы вышли из аккаунта');
    renderPlaylists();
  }
  
  function showUserProfile(user) {
    elements.userAuth.style.display = 'none';
    elements.userProfile.style.display = 'flex';
    elements.usernameDisplay.textContent = user.name;
    elements.userAvatar.textContent = user.avatar;
  }
  
  function showAuthButton() {
    elements.userAuth.style.display = 'block';
    elements.userProfile.style.display = 'none';
  }
  
  function hashCode(str) {
    // Исправлено для работы с английскими буквами
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashArray = Array.from(new Uint8Array(data));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  
  function toggleLike(trackId) {
    if (!currentUser) { 
        showNotification('Войдите, чтобы ставить лайки'); 
        elements.authModal.style.display = 'block'; 
        return; 
    }
    
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;
    
    if (currentUser.likedTracks.includes(trackId)) {
        currentUser.likedTracks = currentUser.likedTracks.filter(id => id !== trackId);
        showNotification('Лайк удалён');
    } else {
        currentUser.likedTracks.push(trackId);
        showNotification('Лайк поставлен');
    }
    
    users[userIndex] = currentUser;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateLikeButton(trackId);
    checkAchievements();
  }
  
  function updateLikeButton(trackId) {
    elements.likeBtn.innerHTML = currentUser?.likedTracks.includes(trackId) 
        ? '<i class="fas fa-heart" style="color: var(--primary-color)"></i>' 
        : '<i class="far fa-heart"></i>';
  }
  
  function handleTrackEnd() {
    updateSessionDuration();
    
    if (playbackSettings.repeat) {
        // Воспроизводим текущий трек заново
        const currentTrackId = playbackSettings.currentPlaylist
            ? currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist).tracks[currentTrackIndex]
            : tracks[currentTrackIndex].id;
        playTrack(currentTrackId);
    } else if (playbackSettings.shuffle) {
        playRandomTrack();
    } else {
        nextTrack();
    }
}
  
function playRandomTrack() {
    let availableTracks = [];

    if (playbackSettings.currentPlaylist) {
        const playlist = currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist);
        if (!playlist) {
            nextTrack();
            return;
        }
        availableTracks = playlist.tracks
            .map(trackId => tracks.find(t => t.id === trackId))
            .filter(Boolean);
    } else {
        availableTracks = tracks;
    }

    if (availableTracks.length === 0) {
        showNotification('Плейлист пуст');
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * availableTracks.length);
    } while (availableTracks.length > 1 && randomIndex === currentTrackIndex);

    currentTrackIndex = randomIndex;
    playTrack(availableTracks[currentTrackIndex].id);
}
  
  function playTrack(trackId) {
    document.querySelectorAll('.play-btn i').forEach(icon => {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    });
    
    let trackList = [];
    
    if (playbackSettings.currentPlaylist) {
        const playlist = currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist);
        trackList = playlist.tracks
            .map(trackId => tracks.find(t => t.id === trackId))
            .filter(Boolean);
    } else {
        trackList = tracks;
    }
  
    const trackIndex = trackList.findIndex(t => t.id === trackId);
    if (trackIndex === -1) return;
    
    currentTrackIndex = trackIndex;
    const track = trackList[trackIndex];
  
    audioPlayer.unload();
    audioPlayer = new Howl({
        src: [track.file],
        html5: true,
        volume: isMuted ? 0 : lastVolume,
        onplay: () => {
            updatePlayButton(true);
            updateNowPlaying(track);
            updateProgress();
            updateListeningStats();
            sessionStartTime = new Date();
        },
        onpause: () => {
            updatePlayButton(false);
            updateSessionDuration();
        },
        onend: handleTrackEnd,
        onloaderror: (_, err) => {
            console.error('Audio load error:', err);
            showNotification('Ошибка загрузки трека');
            handleTrackEnd();
        }
    });
  
    audioPlayer.play();
    
    const activeBtn = document.querySelector(`.play-btn[data-id="${trackId}"] i`);
    if (activeBtn) {
        activeBtn.classList.remove('fa-play');
        activeBtn.classList.add('fa-pause');
    }
    updateLikeButton(trackId);
  }
  
  function togglePlay() {
    if (audioPlayer.playing()) {
        audioPlayer.pause();
        updateSessionDuration();
        const currentTrackId = tracks[currentTrackIndex]?.id;
        const playingBtn = document.querySelector(`.play-btn[data-id="${currentTrackId}"] i`);
        if (playingBtn) {
            playingBtn.classList.remove('fa-pause');
            playingBtn.classList.add('fa-play');
        }
    } else {
        audioPlayer.play();
        updateListeningStats();
        const currentTrackId = tracks[currentTrackIndex]?.id;
        const playingBtn = document.querySelector(`.play-btn[data-id="${currentTrackId}"] i`);
        if (playingBtn) {
            playingBtn.classList.remove('fa-play');
            playingBtn.classList.add('fa-pause');
        }
    }
  }
  
  function nextTrack() {
    let trackList = [];
    
    if (playbackSettings.currentPlaylist) {
        const playlist = currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist);
        trackList = playlist.tracks
            .map(trackId => tracks.find(t => t.id === trackId))
            .filter(Boolean);
    } else {
        trackList = tracks;
    }
  
    if (trackList.length === 0) {
        showNotification('Плейлист пуст');
        return;
    }
  
    currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
    playTrack(trackList[currentTrackIndex].id);
  }
  
  function prevTrack() {
    let trackList = [];
    
    if (playbackSettings.currentPlaylist) {
        const playlist = currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist);
        trackList = playlist.tracks
            .map(trackId => tracks.find(t => t.id === trackId))
            .filter(Boolean);
    } else {
        trackList = tracks;
    }
  
    if (trackList.length === 0) {
        showNotification('Плейлист пуст');
        return;
    }
  
    currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
    playTrack(trackList[currentTrackIndex].id);
  }
  
  function updatePlayButton(playing) {
    elements.playBtn.innerHTML = playing ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    isPlaying = playing;
  }
  
  function updateNowPlaying(track) {
    elements.currentTitle.textContent = track.title;
    elements.currentArtist.textContent = track.artist;
    elements.currentCover.src = track.cover;
  }
  
  function updateProgress() {
    if (!audioPlayer) return;
    
    const seek = audioPlayer.seek() || 0;
    const duration = audioPlayer.duration() || 1;
    
    elements.progressBar.value = (seek / duration) * 100;
    elements.currentTimeEl.textContent = formatTime(seek);
    elements.durationEl.textContent = formatTime(duration);
    
    if (audioPlayer.playing()) {
        requestAnimationFrame(updateProgress);
    }
  }
  
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
  
  function setProgress() {
    if (!audioPlayer) return;
    
    const duration = audioPlayer.duration();
    const seek = (elements.progressBar.value / 100) * duration;
    audioPlayer.seek(seek);
  }
  
  function initVolumeControls() {
    const savedVolume = localStorage.getItem('volume');
    if (savedVolume !== null) {
        lastVolume = parseFloat(savedVolume);
        audioPlayer.volume(lastVolume);
        elements.volumeSlider.value = lastVolume * 100;
        updateVolumeIcon(lastVolume);
    }
  
    elements.volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        lastVolume = volume;
        audioPlayer.volume(volume);
        updateVolumeIcon(volume);
        isMuted = false;
        localStorage.setItem('volume', volume);
    });
  
    elements.volumeBtn.addEventListener('click', toggleMute);
  }
  
  function toggleMute() {
    isMuted = !isMuted;
    audioPlayer.volume(isMuted ? 0 : lastVolume);
    elements.volumeSlider.value = isMuted ? 0 : lastVolume * 100;
    updateVolumeIcon(isMuted ? 0 : lastVolume);
  }
  
  function updateVolumeIcon(volume) {
    if (volume === 0) {
        elements.volumeIcon.className = 'fas fa-volume-mute';
    } else if (volume < 0.33) {
        elements.volumeIcon.className = 'fas fa-volume-down';
    } else {
        elements.volumeIcon.className = 'fas fa-volume-up';
    }
  }
  
  function savePlaylists() {
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;
    
    users[userIndex] = currentUser;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }
  
  function renderPlaylists() {
    elements.userPlaylistsContainer.innerHTML = '';
    
    if (!currentUser) {
        elements.userPlaylistsContainer.innerHTML = '<p class="empty">Войдите, чтобы видеть свои плейлисты</p>';
        return;
    }
  
    if (currentUser.playlists.length === 0) {
        elements.userPlaylistsContainer.innerHTML = '<p class="empty">У вас пока нет плейлистов</p>';
        return;
    }
  
    currentUser.playlists.forEach(playlist => {
        const playlistCard = document.createElement('div');
        playlistCard.className = 'playlist-card';
        playlistCard.dataset.id = playlist.id;
  
        if (playlist.tracks.length >= 4) {
            playlistCard.classList.add('mosaic');
            playlistCard.innerHTML = `
                <div class="playlist-menu" data-id="${playlist.id}"><i class="fas fa-ellipsis-h"></i></div>
                <div class="cover-grid">
                    ${playlist.tracks.slice(0,4).map(trackId => {
                        const track = tracks.find(t => t.id === trackId);
                        return `<img src="${track?.cover || 'default-cover.png'}" alt="Обложка">`;
                    }).join('')}
                </div>
                <h3>${playlist.name}</h3>
                <p>${playlist.tracks.length} треков</p>`;
        } else if (playlist.tracks.length > 0) {
            const firstTrack = tracks.find(t => t.id === playlist.tracks[0]);
            playlistCard.innerHTML = `
                <div class="playlist-menu" data-id="${playlist.id}"><i class="fas fa-ellipsis-h"></i></div>
                <img src="${firstTrack?.cover || 'default-cover.png'}" alt="${playlist.name}">
                <h3>${playlist.name}</h3>
                <p>${playlist.tracks.length} треков</p>`;
        } else {
            playlistCard.innerHTML = `
                <div class="playlist-menu" data-id="${playlist.id}"><i class="fas fa-ellipsis-h"></i></div>
                <img src="default-cover.png" alt="${playlist.name}">
                <h3>${playlist.name}</h3>
                <p>0 треков</p>`;
        }
  
        playlistCard.addEventListener('click', () => {
            playbackSettings.currentPlaylist = playlist.id;
            openPlaylist(playlist.id);
        });
  
        elements.userPlaylistsContainer.appendChild(playlistCard);
    });
  
    document.querySelectorAll('.playlist-menu').forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
            const playlistId = e.target.closest('.playlist-menu').dataset.id;
            if (confirm('Удалить этот плейлист?')) {
                currentUser.playlists = currentUser.playlists.filter(p => p.id !== playlistId);
                savePlaylists();
                renderPlaylists();
            }
        });
    });
  }
  
  function openPlaylist(playlistId) {
    const playlist = currentUser.playlists.find(p => p.id === playlistId);
    if (!playlist) return;
  
    playbackSettings.currentPlaylist = playlistId;
    elements.popularTracksSection.style.display = 'none';
    elements.userPlaylistsSection.style.display = 'none';
  
    const playlistView = document.createElement('div');
    playlistView.className = 'playlist-view';
    playlistView.dataset.playlistId = playlistId;
    
    playlistView.innerHTML = `
        <div class="playlist-header">
            <button class="back-button" id="back-to-playlists">
                <i class="fas fa-arrow-left"></i> Назад
            </button>
            <h2>${playlist.name}</h2>
            <button class="add-tracks-btn" data-id="${playlistId}">
                <i class="fas fa-plus"></i> Добавить треки
            </button>
        </div>
        <div class="track-list" id="playlist-tracks">
            ${playlist.tracks.length === 0 
                ? '<p class="empty">Плейлист пуст</p>' 
                : playlist.tracks.map(trackId => {
                    const track = tracks.find(t => t.id === trackId);
                    return `
                        <div class="track-item" data-id="${track.id}">
                            <img src="${track.cover}" class="track-cover">
                            <div class="track-info">
                                <h4>${track.title}</h4>
                                <p>${track.artist}</p>
                            </div>
                            <div class="track-actions">
                                <button class="play-btn" data-id="${track.id}">
                                    <i class="fas fa-play"></i>
                                </button>
                                <button class="remove-from-playlist-btn" data-id="${track.id}">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>`;
                }).join('')}
        </div>`;
  
    elements.mainContainer.appendChild(playlistView);
  
    document.getElementById('back-to-playlists').addEventListener('click', () => {
        playbackSettings.currentPlaylist = null;
        playlistView.remove();
        elements.popularTracksSection.style.display = 'block';
        elements.userPlaylistsSection.style.display = 'block';
        renderPlaylists();
    });
  
    document.querySelector('.add-tracks-btn').addEventListener('click', () => {
        currentPlaylistId = playlistId;
        openAddTrackModal();
    });
  
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const trackId = e.target.closest('button').dataset.id;
            playTrack(trackId);
        });
    });
  
    document.querySelectorAll('.remove-from-playlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const trackId = e.target.closest('button').dataset.id;
            removeTrackFromPlaylist(playlistId, trackId);
        });
    });
  }
  
  function openAddTrackModal() {
    const playlist = currentUser.playlists.find(p => p.id === currentPlaylistId);
    if (!playlist) return;
  
    document.getElementById('modal-playlist-name').textContent = playlist.name;
    const availableTracks = document.getElementById('available-tracks');
    const carouselNav = document.getElementById('carousel-nav');
    
    availableTracks.innerHTML = '<div class="loading-indicator"><i class="fas fa-spinner"></i> Загрузка треков...</div>';
    carouselNav.innerHTML = '';
  
    const available = tracks.filter(track => !playlist.tracks.includes(track.id));
    
    if (available.length === 0) {
        availableTracks.innerHTML = '<p class="empty">Нет доступных треков для добавления</p>';
        return;
    }
  
    availableTracks.innerHTML = '';
    
    available.forEach((track, index) => {
        const trackElement = document.createElement('div');
        trackElement.className = 'track-carousel-item';
        trackElement.innerHTML = `
            <img src="${track.cover}" class="carousel-track-cover" alt="${track.title}">
            <div class="carousel-track-info">
                <h4>${track.title}</h4>
                <p>${track.artist}</p>
            </div>
            <button class="add-track-btn" data-id="${track.id}" title="Добавить в плейлист">
                <i class="fas fa-plus"></i>
            </button>
        `;
        availableTracks.appendChild(trackElement);
        
        if (index === 0) {
            const navBtn = document.createElement('button');
            navBtn.className = 'carousel-nav-btn active';
            navBtn.dataset.index = index;
            carouselNav.appendChild(navBtn);
        }
  
        trackElement.querySelector('.add-track-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const trackId = e.target.closest('button').dataset.id;
            if (addTrackToPlaylist(currentPlaylistId, trackId)) {
                showNotification(`Трек "${track.title}" добавлен в плейлист`);
                elements.addTrackModal.style.display = 'none';
            }
        });
    });
  
    initCarouselNavigation();
    
    elements.addTrackModal.style.display = 'block';
  }
  
  function initCarouselNavigation() {
    const carousel = document.querySelector('.track-carousel');
    const navButtons = document.querySelectorAll('.carousel-nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            carousel.scrollTo({
                left: index * 200,
                behavior: 'smooth'
            });
            
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
  }
  
  function addTrackToPlaylist(playlistId, trackId) {
    const playlist = currentUser.playlists.find(p => p.id === playlistId);
    const track = tracks.find(t => t.id === trackId);
    
    if (!playlist || !track) return false;
    
    if (playlist.tracks.includes(trackId)) {
        showNotification(`Трек "${track.title}" уже есть в плейлисте`);
        return false;
    }
  
    playlist.tracks.push(trackId);
    if (!playlist.cover) {
        playlist.cover = track.cover;
    }
    
    savePlaylists();
    updatePlaylistView(playlistId, track);
    renderPlaylists();
    checkAchievements();
    return true;
  }
  
  function updatePlaylistView(playlistId, track) {
    const playlistView = document.querySelector(`.playlist-view[data-playlist-id="${playlistId}"]`);
    if (!playlistView) return;
  
    const tracksContainer = playlistView.querySelector('#playlist-tracks');
    const emptyMessage = playlistView.querySelector('.empty');
    
    if (emptyMessage) {
        tracksContainer.innerHTML = '';
    }
  
    const trackElement = document.createElement('div');
    trackElement.className = 'track-item';
    trackElement.dataset.id = track.id;
    trackElement.innerHTML = `
        <img src="${track.cover}" class="track-cover">
        <div class="track-info">
            <h4>${track.title}</h4>
            <p>${track.artist}</p>
        </div>
        <div class="track-actions">
            <button class="play-btn" data-id="${track.id}">
                <i class="fas fa-play"></i>
            </button>
            <button class="remove-from-playlist-btn" data-id="${track.id}">
                <i class="fas fa-times"></i>
            </button>
        </div>`;
  
    tracksContainer.appendChild(trackElement);
    
    trackElement.querySelector('.play-btn').addEventListener('click', (e) => {
        playTrack(e.target.closest('button').dataset.id);
    });
  
    trackElement.querySelector('.remove-from-playlist-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        removeTrackFromPlaylist(playlistId, e.target.closest('button').dataset.id);
    });
  }
  
  function removeTrackFromPlaylist(playlistId, trackId) {
    const playlist = currentUser.playlists.find(p => p.id === playlistId);
    if (!playlist) return;
  
    const trackIndex = playlist.tracks.indexOf(trackId);
    if (trackIndex === -1) return;
  
    playlist.tracks.splice(trackIndex, 1);
    savePlaylists();
  
    const playlistView = document.querySelector(`.playlist-view[data-playlist-id="${playlistId}"]`);
    if (playlistView) {
        const tracksContainer = playlistView.querySelector('#playlist-tracks');
        if (playlist.tracks.length === 0) {
            tracksContainer.innerHTML = '<p class="empty">Плейлист пуст</p>';
        } else {
            const trackElement = tracksContainer.querySelector(`.track-item[data-id="${trackId}"]`);
            if (trackElement) {
                trackElement.remove();
            }
        }
    }
  
    renderPlaylists();
    showNotification(`Трек "${tracks.find(t => t.id === trackId)?.title}" удален из плейлиста`);
  }
  
  const debouncedSearch = _.debounce(searchTracks, 300);
  
  function searchTracks(query) {
    const normalizedQuery = query.trim().toLowerCase();
    
    if (!normalizedQuery) {
        elements.searchResults.style.display = 'none';
        return;
    }
  
    const results = tracks.filter(track => 
        track.title.toLowerCase().includes(normalizedQuery) ||
        track.artist.toLowerCase().includes(normalizedQuery)
    );
  
    displaySearchResults(results);
  }
  
  function displaySearchResults(results) {
    const fragment = document.createDocumentFragment();
    
    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'Ничего не найдено';
        fragment.appendChild(noResults);
    } else {
        results.slice(0, 5).forEach(track => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <img src="${track.cover}" class="search-result-cover">
                <div class="search-result-info">
                    <h4>${track.title}</h4>
                    <p>${track.artist}</p>
                </div>`;
            item.addEventListener('click', () => {
                playTrack(track.id);
                elements.searchResults.style.display = 'none';
            });
            fragment.appendChild(item);
        });
    }
  
    elements.searchResults.innerHTML = '';
    elements.searchResults.appendChild(fragment);
    elements.searchResults.style.display = 'block';
  }
  
  function renderPopularTracks() {
    const popularTracks = tracks.filter(track => track.popular);
    const container = document.getElementById('popular-tracks');
    
    container.innerHTML = popularTracks.map(track => `
        <div class="track-item" data-id="${track.id}">
            <img src="${track.cover}" class="track-cover">
            <div class="track-info">
                <h4>${track.title}</h4>
                <p>${track.artist}</p>
            </div>
            <div class="track-actions">
                <button class="play-btn" data-id="${track.id}">
                    <i class="fas fa-play"></i>
                </button>
                <button class="add-to-playlist-btn" data-id="${track.id}">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>`).join('');
  
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const trackId = e.target.closest('button').dataset.id;
            playTrack(trackId);
        });
    });
  
    document.querySelectorAll('.add-to-playlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!currentUser) {
                showNotification('Войдите, чтобы добавлять треки');
                elements.authModal.style.display = 'block';
                return;
            }
            const trackId = e.target.closest('button').dataset.id;
            showPlaylistSelection(trackId);
        });
    });
  }
  
  function showPlaylistSelection(trackId) {
    if (currentUser.playlists.length === 0) {
        showNotification('Сначала создайте плейлист!');
        elements.playlistModal.style.display = 'block';
        return;
    }
  
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Добавить в плейлист</h3>
            <div class="playlist-selection">
                ${currentUser.playlists.map(playlist => `
                    <div class="playlist-option" data-id="${playlist.id}">
                        ${playlist.tracks.length > 0 
                            ? `<img src="${tracks.find(t => t.id === playlist.tracks[0])?.cover || 'default-cover.png'}" class="playlist-option-cover">`
                            : `<div class="playlist-option-cover"><i class="fas fa-music"></i></div>`}
                        <div class="playlist-option-info">
                            <h4>${playlist.name}</h4>
                            <p>${playlist.tracks.length} треков</p>
                        </div>
                    </div>`).join('')}
            </div>
        </div>`;
  
    document.body.appendChild(modal);
    modal.style.display = 'block';
  
    modal.querySelector('.close').addEventListener('click', () => {
        modal.remove();
    });
  
    modal.querySelectorAll('.playlist-option').forEach(option => {
        option.addEventListener('click', () => {
            const playlistId = option.dataset.id;
            if (addTrackToPlaylist(playlistId, trackId)) {
                modal.remove();
            }
        });
    });
  }
  
  function openProfile() {
    hideAllSections();
    elements.profileSection.style.display = 'block';
  
    if (!currentUser) return;
  
    elements.profileUsername.textContent = currentUser.name;
    elements.profileAvatar.textContent = currentUser.avatar;
    elements.tracksListened.textContent = currentUser.stats.tracksListened || 0;
    elements.playlistsCreated.textContent = currentUser.stats.playlistsCreated || 0;
    renderAchievements();
  }
  
  function renderAchievements() {
    const grid = elements.achievementsGrid;
    grid.innerHTML = '';
  
    if (!currentUser) return;
  
    let earnedCount = 0;
    achievements.forEach(achievement => {
        const isUnlocked = currentUser.achievementsUnlocked.includes(achievement.id);
        if (isUnlocked) earnedCount++;
  
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
            <div class="achievement-icon"><i class="fas ${achievement.icon}"></i></div>
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-desc">${achievement.description}</div>`;
        grid.appendChild(card);
    });
  
    elements.achievementsEarned.textContent = `${earnedCount}/${achievements.length}`;
  }
  
  function updateListeningStats() {
    if (!currentUser) return;
  
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;
  
    users[userIndex].stats.tracksListened++;
    const now = new Date();
    const hours = now.getHours();
  
    if (hours >= 0 && hours < 8) {
        users[userIndex].stats.listenedInMorning = true;
    }
  
    if (hours >= 23 || hours < 5) {
        users[userIndex].stats.listenedAtNight = true;
    }
  
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = users[userIndex];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    checkAchievements();
  }
  
  function updateSessionDuration() {
    if (!sessionStartTime || !currentUser) return;
  
    const now = new Date();
    const duration = (now - sessionStartTime) / 1000 / 60;
    sessionStartTime = null;
  
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;
  
    if (duration > users[userIndex].stats.longestSession) {
        users[userIndex].stats.longestSession = duration;
        localStorage.setItem('users', JSON.stringify(users));
        currentUser = users[userIndex];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        if (duration >= 60) {
            checkAchievements();
        }
    }
  }
  
  function checkAchievements() {
    if (!currentUser) return;
  
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;
  
    achievements.forEach(achievement => {
        const wasUnlocked = currentUser.achievementsUnlocked.includes(achievement.id);
        const isUnlockedNow = achievement.condition(currentUser);
  
        if (isUnlockedNow && !wasUnlocked) {
            users[userIndex].achievementsUnlocked.push(achievement.id);
            showNotification(`Достижение получено: ${achievement.title} - ${achievement.description}`);
            localStorage.setItem('users', JSON.stringify(users));
            currentUser = users[userIndex];
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    });
  }
  
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
  
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 2000);
  }
  
  function initPlayerControls() {
    elements.playBtn.addEventListener('click', togglePlay);
    elements.nextBtn.addEventListener('click', nextTrack);
    elements.prevBtn.addEventListener('click', prevTrack);
    elements.progressBar.addEventListener('input', setProgress);
  
    elements.repeatBtn.addEventListener('click', () => {
        playbackSettings.repeat = !playbackSettings.repeat;
        elements.repeatBtn.innerHTML = playbackSettings.repeat
            ? '<i class="fas fa-redo" style="color: var(--primary-color)"></i>'
            : '<i class="fas fa-redo"></i>';
    });
  
    elements.shuffleBtn.addEventListener('click', () => {
        playbackSettings.shuffle = !playbackSettings.shuffle;
        elements.shuffleBtn.innerHTML = playbackSettings.shuffle
            ? '<i class="fas fa-random" style="color: var(--primary-color)"></i>'
            : '<i class="fas fa-random"></i>';
    });
  }
  
  function renderGenres() {
    elements.genresContainer.innerHTML = '';
    
    // Подсчет количества треков по жанрам
    const genreCounts = {};
    tracks.forEach(track => {
        if (track.genre) {
            genreCounts[track.genre] = (genreCounts[track.genre] || 0) + 1;
        }
    });
    
    genres.forEach(genre => {
        const count = genreCounts[genre.id] || 0;
        
        const genreCard = document.createElement('div');
        genreCard.className = 'genre-card';
        genreCard.dataset.id = genre.id;
        genreCard.innerHTML = `
            <div class="genre-icon"><i class="fas ${genre.icon}"></i></div>
            <div class="genre-title">${genre.name}</div>
            <div class="genre-count">${count} треков</div>
        `;
        
        genreCard.addEventListener('click', () => {
            showGenreTracks(genre.id);
        });
        
        elements.genresContainer.appendChild(genreCard);
    });
  }
  
  function showGenreTracks(genreId) {
    const genre = genres.find(g => g.id === genreId);
    if (!genre) return;
    
    elements.genresContainer.style.display = 'none';
    elements.genreTracks.style.display = 'block';
    
    elements.currentGenreName.innerHTML = `
        <i class="fas ${genre.icon}"></i> ${genre.name}
    `;
    
    elements.genreTracksList.innerHTML = '';
    
    const genreTracksList = tracks.filter(track => track.genre === genreId);
    
    if (genreTracksList.length === 0) {
        elements.genreTracksList.innerHTML = '<p class="empty">В этом жанре пока нет треков</p>';
        return;
    }
    
    genreTracksList.forEach(track => {
        const trackItem = document.createElement('div');
        trackItem.className = 'track-item';
        trackItem.dataset.id = track.id;
        trackItem.innerHTML = `
            <img src="${track.cover}" class="track-cover">
            <div class="track-info">
                <h4>${track.title}</h4>
                <p>${track.artist}</p>
            </div>
            <div class="track-actions">
                <button class="play-btn" data-id="${track.id}">
                    <i class="fas fa-play"></i>
                </button>
                <button class="add-to-playlist-btn" data-id="${track.id}">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
        
        trackItem.querySelector('.play-btn').addEventListener('click', (e) => {
            const trackId = e.target.closest('button').dataset.id;
            playTrack(trackId);
        });
        
        trackItem.querySelector('.add-to-playlist-btn').addEventListener('click', (e) => {
            if (!currentUser) {
                showNotification('Войдите, чтобы добавлять треки');
                elements.authModal.style.display = 'block';
                return;
            }
            const trackId = e.target.closest('button').dataset.id;
            showPlaylistSelection(trackId);
        });
        
        elements.genreTracksList.appendChild(trackItem);
    });
  }
  
  function openGenresModal() {
    renderGenres();
    elements.genresModal.style.display = 'block';
    
    // Поиск по жанрам
    elements.genreSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.genre-card').forEach(card => {
            const genreName = card.querySelector('.genre-title').textContent.toLowerCase();
            card.style.display = genreName.includes(searchTerm) ? 'block' : 'none';
        });
    });
  }
  
  function hideAllSections() {
    elements.popularTracksSection.style.display = 'none';
    elements.userPlaylistsSection.style.display = 'none';
    elements.profileSection.style.display = 'none';
    
    // Удаляем открытые плейлисты
    document.querySelectorAll('.playlist-view').forEach(view => view.remove());
  }
  
  function init() {
    const oldPlaylists = JSON.parse(localStorage.getItem('playlists'));
    if (oldPlaylists) {
        users.forEach(user => {
            user.playlists = oldPlaylists.filter(p => p.ownerId === user.id);
        });
        localStorage.removeItem('playlists');
    }
  
    initAuth();
    initPlayerControls();
    initVolumeControls();
  
    elements.searchToggle.addEventListener('click', (e) => {
      e.preventDefault();
      elements.searchContainer.style.display = 'block';
      elements.searchInput.focus();
  });
  
    elements.createPlaylistBtn.addEventListener('click', () => {
        if (!currentUser) {
            showNotification('Войдите, чтобы создавать плейлисты');
            elements.authModal.style.display = 'block';
            return;
        }
        elements.playlistModal.style.display = 'block';
    });
  
    elements.savePlaylistBtn.addEventListener('click', () => {
        const playlistName = document.getElementById('playlist-name').value.trim();
        if (!playlistName) {
            showNotification('Введите название плейлиста');
            return;
        }
  
        currentUser.playlists.push({
            id: Date.now().toString(),
            name: playlistName,
            tracks: [],
            cover: tracks[currentTrackIndex]?.cover || null
        });
  
        currentUser.stats.playlistsCreated++;
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
        renderPlaylists();
        elements.playlistModal.style.display = 'none';
        document.getElementById('playlist-name').value = '';
        showNotification(`Плейлист "${playlistName}" создан!`);
        checkAchievements();
    });
  
    elements.likeBtn.addEventListener('click', () => {
        const currentTrack = playbackSettings.currentPlaylist
            ? currentUser.playlists.find(p => p.id === playbackSettings.currentPlaylist).tracks[currentTrackIndex]
            : tracks[currentTrackIndex].id;
        toggleLike(currentTrack);
    });
  
    elements.themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        elements.themeToggle.innerHTML = document.body.classList.contains('light-theme')
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    });
  
    elements.closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
  
    elements.genresToggle.addEventListener('click', (e) => {
        e.preventDefault();
        openGenresModal();
    });
  
    elements.backToGenres.addEventListener('click', () => {
        elements.genreTracks.style.display = 'none';
        elements.genresContainer.style.display = 'grid';
    });
  
    elements.searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
  
    elements.backFromProfile.addEventListener('click', () => {
        hideAllSections();
        elements.popularTracksSection.style.display = 'block';
        elements.userPlaylistsSection.style.display = 'block';
    });
  
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container') && !e.target.closest('#search-toggle')) {
            elements.searchContainer.style.display = 'none';
            elements.searchResults.style.display = 'none';
        }
  
        if (e.target === elements.playlistModal) {
            elements.playlistModal.style.display = 'none';
        }
        if (e.target === elements.addTrackModal) {
            elements.addTrackModal.style.display = 'none';
        }
        if (e.target === elements.authModal) {
            elements.authModal.style.display = 'none';
        }
        if (e.target === elements.genresModal) {
            elements.genresModal.style.display = 'none';
        }
    });
  
    renderPopularTracks();
    renderPlaylists();
    updateNowPlaying(tracks[0]);
    updateLikeButton(tracks[0].id);
  }
  
  document.addEventListener('DOMContentLoaded', init);

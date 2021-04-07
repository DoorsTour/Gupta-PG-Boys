var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.938772704341739,
        "pitch": -0.11597191944861152,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": 2.8565123657332103,
          "pitch": 0.2002532806455033,
          "rotation": 6.283185307179586,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.1869995627136838,
        "pitch": 0.13177171546227484,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": 0.22500094929017322,
          "pitch": 0.3862595613033406,
          "rotation": 0,
          "target": "4-hotspot-1"
        },
        {
          "yaw": -2.816880698985795,
          "pitch": 0.4689125821159337,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-mess",
      "name": "Mess",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.12656370121580274,
        "pitch": 0.15422985191702665,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -1.7176520068882777,
          "pitch": 0.09165098535773808,
          "rotation": 10.995574287564278,
          "target": "4-hotspot-1"
        },
        {
          "yaw": 2.978873952494311,
          "pitch": 0.3172563880378654,
          "rotation": 0,
          "target": "3-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-area",
      "name": "Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.2300614518129223,
        "pitch": 0.3793566341335932,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -3.107899281388386,
          "pitch": 0.30514413582529976,
          "rotation": 0,
          "target": "2-mess"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hotspot-1",
      "name": "Hotspot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.476146590644536,
        "pitch": 0.10851788332186629,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": 0.025402176260374887,
          "pitch": 0.3292375999782102,
          "rotation": 1.5707963267948966,
          "target": "1-reception"
        },
        {
          "yaw": 1.731388146535954,
          "pitch": 0.36063991992696387,
          "rotation": 4.71238898038469,
          "target": "2-mess"
        },
        {
          "yaw": 3.071364046433616,
          "pitch": -0.09096300271959024,
          "rotation": 0,
          "target": "5-hotspot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hotspot-2",
      "name": "Hotspot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.477892171743445,
        "pitch": 0.1861011793384506,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -3.1083524786650685,
          "pitch": 0.7905351067912711,
          "rotation": 0,
          "target": "4-hotspot-1"
        },
        {
          "yaw": -0.16797267582298758,
          "pitch": 0.10714839692691314,
          "rotation": 4.71238898038469,
          "target": "14-3gb"
        },
        {
          "yaw": 0.06824790837177375,
          "pitch": 0.26384590877080605,
          "rotation": 0,
          "target": "6-fridge-g-floor"
        },
        {
          "yaw": -2.6726134798824273,
          "pitch": 0.0881352114481544,
          "rotation": 1.5707963267948966,
          "target": "10-2ga"
        },
        {
          "yaw": -3.091110258450918,
          "pitch": 0.08045967622404504,
          "rotation": 6.283185307179586,
          "target": "24-water-coolerg"
        },
        {
          "yaw": -2.273796836447355,
          "pitch": 0.032183491893500005,
          "rotation": 0.7853981633974483,
          "target": "23-staircase"
        },
        {
          "yaw": -1.330151057595307,
          "pitch": 0.227116710870213,
          "rotation": 6.283185307179586,
          "target": "13-3ga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-fridge-g-floor",
      "name": "Fridge, G. Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.494065095237465,
        "pitch": 0.1827589124430311,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -2.8946037492943653,
          "pitch": 0.11442161131508222,
          "rotation": 0,
          "target": "15-3gc"
        },
        {
          "yaw": -2.3403388592912595,
          "pitch": -0.011603854746638831,
          "rotation": 0,
          "target": "16-3gd"
        },
        {
          "yaw": 1.4288185358684489,
          "pitch": 0.3119833808894583,
          "rotation": 0,
          "target": "5-hotspot-2"
        },
        {
          "yaw": 1.669741236334973,
          "pitch": 0.18425446759427544,
          "rotation": 7.853981633974483,
          "target": "14-3gb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-1ga",
      "name": "1.G.a",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.512457337830659,
        "pitch": 0.3733048968179311,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -0.19137547910078467,
          "pitch": 0.1809260111914739,
          "rotation": 0,
          "target": "24-water-coolerg"
        },
        {
          "yaw": -1.878325508147718,
          "pitch": 0.2935498011040316,
          "rotation": 0,
          "target": "9-washroom-1ga"
        },
        {
          "yaw": -2.8382941482723485,
          "pitch": 0.28199401140163083,
          "rotation": 0,
          "target": "8-balcony-1ga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-balcony-1ga",
      "name": "Balcony (1.G.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9979366489995645,
        "pitch": 0.19378193450333825,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -1.4729087151139009,
          "pitch": 0.3264814232125204,
          "rotation": 0,
          "target": "7-1ga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-washroom-1ga",
      "name": "Washroom (1.G.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7798130645783026,
        "pitch": 0.13881374528494028,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -2.3525323112813226,
          "pitch": 0.4824158826543261,
          "rotation": 0,
          "target": "7-1ga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2ga",
      "name": "2.G.a",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7179264030013357,
        "pitch": 0.47980903859779644,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -2.3528060449448045,
          "pitch": 0.13129267432896974,
          "rotation": 0,
          "target": "12-washroom-2ga"
        },
        {
          "yaw": -2.918955714925641,
          "pitch": 0.24359070923506465,
          "rotation": 0,
          "target": "11-balcony-2ga"
        },
        {
          "yaw": -0.2697694672803461,
          "pitch": 0.20474635101570726,
          "rotation": 0,
          "target": "5-hotspot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-balcony-2ga",
      "name": "Balcony (2.G.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9362293584038541,
        "pitch": 0.17849273958334422,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -1.5151993486110307,
          "pitch": 0.21381636901352508,
          "rotation": 0,
          "target": "10-2ga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-washroom-2ga",
      "name": "Washroom (2.G.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9149001099208434,
        "pitch": 0.12545242974863058,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -1.0748470853740884,
          "pitch": 0.28173638397584355,
          "rotation": 4.71238898038469,
          "target": "10-2ga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-3ga",
      "name": "3.G.a",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.9225186167543402,
        "pitch": 0.6047412445164291,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.7469781647631937,
          "pitch": 0.19206032630821923,
          "rotation": 0,
          "target": "5-hotspot-2"
        },
        {
          "yaw": -2.997058805960279,
          "pitch": 0.28184911799528223,
          "rotation": 0,
          "target": "17-washroom-3ga"
        },
        {
          "yaw": 2.6346978693131486,
          "pitch": 0.21968532779376737,
          "rotation": 0,
          "target": "21-balcony-3ga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-3gb",
      "name": "3.G.b",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.9411901979629924,
        "pitch": 0.6513264308054616,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -2.9522629685515476,
          "pitch": 0.20939067720564708,
          "rotation": 0,
          "target": "18-washroom-3gb"
        },
        {
          "yaw": 2.5805031611747236,
          "pitch": 0.2551700482361774,
          "rotation": 1.5707963267948966,
          "target": "22-balcony-3gb"
        },
        {
          "yaw": 0.7878742735343884,
          "pitch": 0.22822607429612773,
          "rotation": 0,
          "target": "5-hotspot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-3gc",
      "name": "3.g.c",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.7996086614933517,
        "pitch": 0.6097667437214263,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.7431755063572485,
          "pitch": 0.22067332924022054,
          "rotation": 0,
          "target": "6-fridge-g-floor"
        },
        {
          "yaw": -2.960494957283771,
          "pitch": 0.19601160702164222,
          "rotation": 0,
          "target": "19-washroom-3gc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-3gd",
      "name": "3.g.d",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.764049730315044,
        "pitch": 0.7628519266273059,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.7847903107631211,
          "pitch": 0.2259812966113337,
          "rotation": 0,
          "target": "6-fridge-g-floor"
        },
        {
          "yaw": -2.996941283866441,
          "pitch": 0.09596606212715209,
          "rotation": 0,
          "target": "20-washroom-3gd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-washroom-3ga",
      "name": "Washroom (3.G.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.6431477227178073,
        "pitch": 0.22992485418856923,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -1.0974888061364627,
          "pitch": 0.2534411639375378,
          "rotation": 4.71238898038469,
          "target": "14-3gb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-washroom-3gb",
      "name": "Washroom (3.G.b)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7008345183445854,
        "pitch": 0.18318095593278017,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.106938468617539,
          "pitch": 0.234581280740084,
          "rotation": 0,
          "target": "14-3gb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-washroom-3gc",
      "name": "Washroom (3.G.c)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7840648756993005,
        "pitch": 0.16247899858421988,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.0784881224913647,
          "pitch": 0.27377461909995837,
          "rotation": 0,
          "target": "15-3gc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-washroom-3gd",
      "name": "Washroom (3.G.d)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7588360824361864,
        "pitch": 0.19142764118705458,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.0342156558023259,
          "pitch": 0.23299603997885754,
          "rotation": 0,
          "target": "16-3gd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-balcony-3ga",
      "name": "Balcony (3.G.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.8504051967572472,
        "pitch": 0.20928448926359344,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -1.6234284363819391,
          "pitch": 0.09159276592604115,
          "rotation": 0,
          "target": "13-3ga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-balcony-3gb",
      "name": "Balcony (3.G.b)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9341672128667913,
        "pitch": 0.20576490940393555,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.6046434884168121,
          "pitch": 0.15112490719814176,
          "rotation": 0,
          "target": "14-3gb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-staircase",
      "name": "Staircase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.881559795545101,
        "pitch": 0.48390117358833606,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -2.854632785263032,
          "pitch": 0.8146779803787609,
          "rotation": 6.283185307179586,
          "target": "5-hotspot-2"
        },
        {
          "yaw": 2.5613063133564085,
          "pitch": 0.05329486756497914,
          "rotation": 0,
          "target": "25-1st-floor-gallery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-water-coolerg",
      "name": "Water cooler.G",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.268240424103574,
        "pitch": 0.19059492350507234,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": 2.7563647886398286,
          "pitch": 0.09700501576699949,
          "rotation": 4.71238898038469,
          "target": "5-hotspot-2"
        },
        {
          "yaw": -0.8698328912365518,
          "pitch": 0.12178266368520596,
          "rotation": 0,
          "target": "7-1ga"
        },
        {
          "yaw": -1.1508985626116335,
          "pitch": 0.08143439641905204,
          "rotation": 4.71238898038469,
          "target": "7-1ga"
        },
        {
          "yaw": -0.23085063613007684,
          "pitch": 0.20027459668862235,
          "rotation": 0,
          "target": "7-1ga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-1st-floor-gallery",
      "name": "1st floor gallery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.619175737776871,
        "pitch": 0.1952366590962349,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -0.9908663397416912,
          "pitch": 0.5187954519967519,
          "rotation": 5.497787143782138,
          "target": "23-staircase"
        },
        {
          "yaw": -0.42976144993333776,
          "pitch": 0.20824496122262204,
          "rotation": 10.995574287564278,
          "target": "26-21a"
        },
        {
          "yaw": -0.13077435929332815,
          "pitch": 0.2017985695318245,
          "rotation": 0,
          "target": "36-fridge-1st-floor"
        },
        {
          "yaw": -2.3351678271969973,
          "pitch": 0.01820779197006317,
          "rotation": 6.283185307179586,
          "target": "37-21b"
        },
        {
          "yaw": 3.0634184378764218,
          "pitch": 0.19297584051015448,
          "rotation": 6.283185307179586,
          "target": "40-water-cooler-1"
        },
        {
          "yaw": -0.23831072797607789,
          "pitch": 0.05174291706176248,
          "rotation": 4.71238898038469,
          "target": "29-31a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-21a",
      "name": "2.1.a",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6761196218790673,
          "pitch": 0.3901620757782869,
          "rotation": 0,
          "target": "25-1st-floor-gallery"
        },
        {
          "yaw": -0.36296589907056287,
          "pitch": 0.19869456586139478,
          "rotation": 0,
          "target": "27-washroom-21a"
        },
        {
          "yaw": 0.06178037572527728,
          "pitch": 0.20578818055162884,
          "rotation": 0,
          "target": "28-balcony-21a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-washroom-21a",
      "name": "Washroom (2.1.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.8872868000122986,
        "pitch": 0.09846633135869709,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -0.9764268310189337,
          "pitch": 0.32639011342060087,
          "rotation": 4.71238898038469,
          "target": "26-21a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-balcony-21a",
      "name": "Balcony (2.1.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9299886161870958,
        "pitch": 0.2094863547167254,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -1.5522657958352966,
          "pitch": 0.23354273061495867,
          "rotation": 0,
          "target": "26-21a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-31a",
      "name": "3.1.a",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.7515601472873534,
        "pitch": 0.5420148833079281,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.7615924822265896,
          "pitch": 0.28234266573475963,
          "rotation": 0,
          "target": "25-1st-floor-gallery"
        },
        {
          "yaw": -2.898351349788431,
          "pitch": 0.2128529692806147,
          "rotation": 0,
          "target": "30-washroom-31a"
        },
        {
          "yaw": 2.6396614397295117,
          "pitch": 0.2864777153938256,
          "rotation": 0,
          "target": "31-balcony-31a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-washroom-31a",
      "name": "Washroom (3.1.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7667131254273425,
        "pitch": 0.14769188619236218,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.001416250694266,
          "pitch": 0.23346782657636744,
          "rotation": 0,
          "target": "29-31a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-balcony-31a",
      "name": "Balcony (3.1.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.8388290333511756,
        "pitch": 0.11668375960102395,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.4944308203128074,
          "pitch": 0.2555915781408373,
          "rotation": 0,
          "target": "29-31a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-31b",
      "name": "3.1.b",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.7266268722588656,
        "pitch": 0.4566977257502174,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.7996850153893433,
          "pitch": 0.312657622248917,
          "rotation": 0,
          "target": "36-fridge-1st-floor"
        },
        {
          "yaw": -2.9442757108549316,
          "pitch": 0.35390483327707756,
          "rotation": 0,
          "target": "34-washroom-31b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-31c",
      "name": "3.1.c",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.7462173026383887,
        "pitch": 0.5269589143271567,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.761872396256237,
          "pitch": 0.329307376604433,
          "rotation": 0,
          "target": "36-fridge-1st-floor"
        },
        {
          "yaw": -2.9478838501151188,
          "pitch": 0.3395118833981492,
          "rotation": 0,
          "target": "35-washroom-31c"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-washroom-31b",
      "name": "Washroom (3.1.b)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7751127689736563,
        "pitch": 0.13524222149852783,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.9941634710334881,
          "pitch": 0.26539629646597795,
          "rotation": 0,
          "target": "32-31b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-washroom-31c",
      "name": "Washroom (3.1.c)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.782966871236777,
        "pitch": 0.1406538431332116,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.0392387309649145,
          "pitch": 0.24151648989717067,
          "rotation": 0,
          "target": "33-31c"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-fridge-1st-floor",
      "name": "Fridge, 1st Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.140500366105604,
        "pitch": 0.18276321876862944,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.872108836610959,
          "pitch": 0.1535023878243642,
          "rotation": 0,
          "target": "32-31b"
        },
        {
          "yaw": -2.4283315275861774,
          "pitch": 0.15457921739015035,
          "rotation": 1.5707963267948966,
          "target": "33-31c"
        },
        {
          "yaw": 1.4335182160596895,
          "pitch": 0.18187553409745227,
          "rotation": 0,
          "target": "25-1st-floor-gallery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-21b",
      "name": "2.1.b",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2539702344098984,
          "pitch": 0.1700609660300767,
          "rotation": 0,
          "target": "25-1st-floor-gallery"
        },
        {
          "yaw": -2.3264449338557363,
          "pitch": 0.15716495297105304,
          "rotation": 0,
          "target": "38-washroom-21b"
        },
        {
          "yaw": -2.9604582410361306,
          "pitch": 0.21182618265860675,
          "rotation": 0,
          "target": "39-balcony-21b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-washroom-21b",
      "name": "Washroom (2.1.b)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.8285648622554254,
        "pitch": 0.16349441033229084,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.0263379601729898,
          "pitch": 0.18031765034865188,
          "rotation": 0,
          "target": "37-21b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-balcony-21b",
      "name": "Balcony (2.1.b)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.923201455099358,
        "pitch": 0.1307987305204925,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.5168134038539733,
          "pitch": 0.2335378249199831,
          "rotation": 0,
          "target": "37-21b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-water-cooler-1",
      "name": "Water Cooler, 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.1218345930780913,
        "pitch": 0.0744368113932623,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.998904099022554,
          "pitch": 0.17749915820579076,
          "rotation": 4.71238898038469,
          "target": "25-1st-floor-gallery"
        },
        {
          "yaw": -0.8770798809096636,
          "pitch": 0.179501961100744,
          "rotation": 0,
          "target": "41-11a"
        },
        {
          "yaw": -0.32619356149386824,
          "pitch": 0.07976478287202937,
          "rotation": 0,
          "target": "41-11a"
        },
        {
          "yaw": -1.1283494737775506,
          "pitch": 0.03670112075755583,
          "rotation": 4.71238898038469,
          "target": "41-11a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-11a",
      "name": "1.1.a",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.1790120645972753,
        "pitch": 0.5295025447682473,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.9239297990896507,
          "pitch": 0.3018173815461971,
          "rotation": 0,
          "target": "43-washroom-11a"
        },
        {
          "yaw": -2.9085314799990964,
          "pitch": 0.27227219715696727,
          "rotation": 0,
          "target": "42-balcony-11a"
        },
        {
          "yaw": -0.20403628675107832,
          "pitch": 0.14976879763966267,
          "rotation": 0,
          "target": "40-water-cooler-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-balcony-11a",
      "name": "Balcony (1.1.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9500495899788222,
        "pitch": 0.20429461217778133,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.4885957606440527,
          "pitch": 0.27542881563332244,
          "rotation": 0,
          "target": "41-11a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-washroom-11a",
      "name": "Washroom (1.1.a)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7541286253956212,
        "pitch": 0.23837092295998374,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.297322055976391,
          "pitch": 0.41037250840954087,
          "rotation": 0,
          "target": "41-11a"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

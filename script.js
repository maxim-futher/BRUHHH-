
document.addEventListener('DOMContentLoaded', () => {
    const validPasswords = ["elite", "autismo severo", "autismosevero"];
    const incorrectMessages = [
        "Fallaste, perro",
        "Error 666: ЖОПА УНИЧТОЖЕНА (CULO DESTRUIDO).",
        "Жопометр: 0% точности.",
        "Внимание: твой жопа скоро взорвётся.",
        "КГБ теперь следит за твоим жопой.",
        "JAJAJAJAJAJAJA… ¿EN SERIO PUSISTE ESO?",
        "Gracias por el intento, ahora el gobierno sabe tu ubicación.",
        "Contraseña incorrecta. El FBI ha sido notificado.",
        "Fallaste. Y con cada intento, pierdes una neurona.",
        "Incorrecto. Vuelve cuando aprendas a escribir.",
        "Error. Culómetro: 0% precisión.",
        "JAJAJA, contraseña incorrecta. Culo eliminado.",
        "JAJAJAJA, error fatal. Tu culo será reiniciado.",
        "Пароль провалился, как твои надежды.",
        "Ошибка. Путин не одобряет.",
        "НЕ МОЖЕТ БЫТЬ… ОН ВЕРНУЛСЯ.",
        "Я ТЕБЯ ВИЖУ.",
        "ОСТАВЬ НАДЕЖДУ, ВСЁ ПОТЕРЯНО.",
        "Бип бип боп боп... ХА-ХА-ХА.",
        "Maxim papa eta moy",
        "Маряьна, ничего",
        "*Lucia pone my little pony*",
        "Oriana, que hiciste...",
        "Jade, ¿y pinkie pie?",
        "Lara confundió la realidad con un videojuego y desinstaló tu vida.",
        "Iker! -¿que?, ¡AHHH!"
    ];

    const passwordInput = document.getElementById('password-input');
    const submitBtn = document.getElementById('submit-btn');
    const loginSection = document.getElementById('login-section');
    const gallerySection = document.getElementById('gallery-section');
    const errorMessage = document.getElementById('error-message');
    const galleryContainer = document.getElementById('gallery-container');

    // ESTA LISTA FUE GENERADA AUTOMATICAMENTE
    const mediaByDate = {
    "2025-07-24": [
        {
            "type": "image",
            "src": "organized/2025-07-24/P7240001.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-07-24/P7240002.JPG"
        }
    ],
    "2025-09-05": [
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050004.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050005.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050006.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050007.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050008.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050009.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050010.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050011.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050012.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050013.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050014.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050015.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050018.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050021.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050022.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050023.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050024.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050025.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050027.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050029.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-05/P9050031.JPG"
        }
    ],
    "2025-09-08": [
        {
            "type": "image",
            "src": "organized/2025-09-08/P9080061(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-08/P9080061.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-08/P9080062(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-08/P9080062.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-08/P9080066(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-08/P9080066.JPG"
        }
    ],
    "2025-09-09": [
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090069(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090069.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090070(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090070.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090072(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090072.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090073(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090073.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090074(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090074.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090075(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090075.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090076(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090076.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090077(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090077.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090078(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090078.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090080(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090080.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090081(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090081.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090082(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090082.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090097(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090097.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090098(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090098.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090099(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090099.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090100(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090100.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090101(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090101.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090103(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090103.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090105(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-09/P9090105.JPG"
        }
    ],
    "2025-09-10": [
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100113(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100113.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100114(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100114.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100115(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100115.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100116(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100116.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100118(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100118.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100128(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100128.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100129(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-10/P9100129.JPG"
        }
    ],
    "2025-09-12": [
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120146(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120146.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120147(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120147.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120148(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120148.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120149(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120149.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120150(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120150.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120151(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120151.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120152(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120152.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120153(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120153.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120154(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120154.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120155(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120155.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120156(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120156.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120157(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120157.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120158(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120158.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120159(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120159.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120160(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120160.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120161(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120161.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120162(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120162.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120163(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120163.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120164(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120164.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120165(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120165.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120166(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120166.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120167(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120167.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120168(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120168.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120169(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120169.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120170(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120170.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120171(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120171.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120175(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120175.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120189(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-12/P9120189.JPG"
        }
    ],
    "2025-09-15": [
        {
            "type": "image",
            "src": "organized/2025-09-15/P9150209(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-15/P9150209.JPG"
        }
    ],
    "2025-09-16": [
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160220(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160220.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160221(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160221.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160225(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160225.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160226(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160226.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160227(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160227.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160234(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160234.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160235(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160235.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160241(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160241.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160242(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160242.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160243(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160243.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160244(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160244.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160245(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160245.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160246(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160246.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160247(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160247.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160248(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160248.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160249(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160249.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160250(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160250.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160251(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160251.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160252(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160252.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160253(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160253.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160254(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160254.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160255(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160255.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160256(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160256.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160257(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160257.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160258(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160258.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160259(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160259.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160260(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160260.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160261(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160261.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160262(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160262.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160263(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160263.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160264(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160264.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160265(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160265.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160266(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160266.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160267(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160267.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160268(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160268.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160269(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160269.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160270(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160270.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160271(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160271.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160272(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160272.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160273(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160273.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160274(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160274.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160275(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160275.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160276(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160276.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160277(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160277.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160278(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160278.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160279(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160279.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160280(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160280.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160281(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160281.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160282(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160282.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160283(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160283.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160284(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160284.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160285(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160285.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160286(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160286.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160287(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160287.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160288(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160288.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160289(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160289.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160290(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160290.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160291(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160291.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160292(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160292.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160293(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160293.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160294(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160294.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160295(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160295.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160296(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160296.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160297(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160297.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160298(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160298.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160299(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160299.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160300(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160300.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160301(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160301.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160302(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160302.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160303(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160303.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160304(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160304.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160305(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160305.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160306(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160306.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160307(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160307.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160308(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160308.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160309(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160309.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160310(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160310.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160311(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160311.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160312(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160312.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160314(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160314.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160315(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160315.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160316(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160316.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160317(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160317.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160318(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160318.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160319(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160319.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160320(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160320.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160321(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160321.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160322(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160322.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160324(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160324.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160325(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160325.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160326(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160326.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160327(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160327.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160328(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160328.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160329(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160329.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160330(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160330.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160331(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160331.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160332(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160332.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160333(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160333.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160334(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160334.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160335(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160335.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160336(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160336.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160337(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160337.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160338(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160338.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160339(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160339.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160340(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160340.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160341(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160341.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160342(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160342.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160343(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160343.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160344(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160344.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160346(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160346.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160347(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160347.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160352(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160352.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160356(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160356.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160357(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160357.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160362(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160362.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160366(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160366.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160374(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160374.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160376(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160376.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160377(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160377.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160378(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160378.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160383(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160383.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160385(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160385.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160386(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160386.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160389(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160389.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160391(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160391.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160392(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160392.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160395(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160395.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160396(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160396.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160397(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160397.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160398(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160398.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160399(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160399.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160400(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-16/P9160400.JPG"
        }
    ],
    "2025-09-18": [
        {
            "type": "image",
            "src": "organized/2025-09-18/P9180001.JPG"
        }
    ],
    "2025-09-22": [
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220002.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220003.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220009.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220010.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220011.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220012.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220013.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220014.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220015.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220016.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220017.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220018.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220019.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220020.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220021.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220022.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220023.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220024.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220025.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220026.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220027.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220028.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220029.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220030.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220031.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220032.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220033.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220034.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220035.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220036.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220037.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220039.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220040.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220041.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220042.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220043.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220044.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220045.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220046.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220050.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220051.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220052.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220053.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220054.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220055.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220056.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220057.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220058.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220059.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220060.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220061.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220062.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220063.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220064.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220065.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220066.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220067.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220068.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220069.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220070.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220071.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220073.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220074.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220075.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220076.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220077.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220078.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220079.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220080.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220081.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220082.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220083.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220084.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220085.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220086.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220087.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220088.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220089.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220090.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220091.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220092.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220093.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220094.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220095.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220096.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220097.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220099.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220100.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220102.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220112.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220113.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220122.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220131.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-09-22/P9220140.JPG"
        }
    ],
    "2025-10-03": [
        {
            "type": "image",
            "src": "organized/2025-10-03/PA030157.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-10-03/PA030158.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-10-03/PA030159.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-10-03/PA030160.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-10-03/PA030161.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-10-03/PA030162.JPG"
        },
        {
            "type": "image",
            "src": "organized/2025-10-03/PA030163.JPG"
        }
    ]
};
    const sortedDates = [
    "2025-07-24",
    "2025-09-05",
    "2025-09-08",
    "2025-09-09",
    "2025-09-10",
    "2025-09-12",
    "2025-09-15",
    "2025-09-16",
    "2025-09-18",
    "2025-09-22",
    "2025-10-03"
];
    // FIN DE LA LISTA GENERADA AUTOMATICAMENTE

    submitBtn.addEventListener('click', () => {
        const enteredPassword = passwordInput.value.toLowerCase();
        if (validPasswords.includes(enteredPassword)) {
            loginSection.classList.add('hidden');
            gallerySection.classList.remove('hidden');
            loadGallery();
        } else {
            const randomIndex = Math.floor(Math.random() * incorrectMessages.length);
            errorMessage.textContent = incorrectMessages[randomIndex];
            errorMessage.classList.remove('hidden');
            passwordInput.value = '';
        }
    });

    function loadGallery() {
        sortedDates.forEach(date => {
            const dateHeader = document.createElement('h2');
            dateHeader.textContent = date;
            galleryContainer.appendChild(dateHeader);

            const dateContainer = document.createElement('div');
            dateContainer.classList.add('date-container');

            mediaByDate[date].forEach(file => {
                let element;
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('media-item');

                if (file.type === 'image') {
                    element = document.createElement('img');
                    element.src = file.src;
                    element.alt = 'Imagen de la galería';
                } else if (file.type === 'video') {
                    element = document.createElement('video');
                    element.src = file.src;
                    element.controls = true;
                    element.autoplay = false;
                }

                if (element) {
                    element.dataset.rotation = 0;
                    const rotateBtn = document.createElement('button');
                    rotateBtn.textContent = '⟳';
                    rotateBtn.classList.add('rotate-btn');
                    rotateBtn.addEventListener('click', () => {
                        let currentRotation = parseInt(element.dataset.rotation);
                        let newRotation = currentRotation + 90;
                        element.style.transform = `rotate(${newRotation}deg)`;
                        element.dataset.rotation = newRotation;
                    });
                    
                    itemDiv.appendChild(element);
                    itemDiv.appendChild(rotateBtn);
                }
                dateContainer.appendChild(itemDiv);
            });

            galleryContainer.appendChild(dateContainer);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input');
    const submitBtn = document.getElementById('submit-btn');
    const errorMessage = document.getElementById('error-message');
    const loginSection = document.getElementById('login-section');
    const gallerySection = document.getElementById('gallery-section');
    const galleryContainer = document.getElementById('gallery-container');

    // 🔐 Contraseñas válidas
    const validPasswords = ["elite", "autismo severo", "autismosevero"];

    // 💀 Mensajes de error aleatorios
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

    // 🔘 Evento del botón de acceso
    submitBtn.addEventListener('click', () => {
        const userPassword = passwordInput.value.trim().toLowerCase();

        if (validPasswords.includes(userPassword)) {
            loginSection.classList.add('hidden');
            gallerySection.classList.remove('hidden');
            loadGallery();
        } else {
            const randomMsg = incorrectMessages[Math.floor(Math.random() * incorrectMessages.length)];
            errorMessage.textContent = randomMsg;
            errorMessage.classList.remove('hidden');
        }
    });

    // 🎞️ Archivos multimedia (esto será reemplazado automáticamente por tu script de Node)
    const mediaFiles = [
    {
        "src": "organized/2025-07-24/P7240001.JPG",
        "date": "2025-07-24",
        "type": "image"
    },
    {
        "src": "organized/2025-07-24/P7240002.JPG",
        "date": "2025-07-24",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050004.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050005.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050006.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050007.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050008.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050009.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050010.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050011.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050012.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050013.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050014.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050015.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050016.MOV",
        "date": "2025-09-05",
        "type": "video"
    },
    {
        "src": "organized/2025-09-05/P9050018.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050021.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050022.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050023.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050024.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050025.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050027.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050029.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-05/P9050031.JPG",
        "date": "2025-09-05",
        "type": "image"
    },
    {
        "src": "organized/2025-09-08/P9080061(1).JPG",
        "date": "2025-09-08",
        "type": "image"
    },
    {
        "src": "organized/2025-09-08/P9080061.JPG",
        "date": "2025-09-08",
        "type": "image"
    },
    {
        "src": "organized/2025-09-08/P9080062(1).JPG",
        "date": "2025-09-08",
        "type": "image"
    },
    {
        "src": "organized/2025-09-08/P9080062.JPG",
        "date": "2025-09-08",
        "type": "image"
    },
    {
        "src": "organized/2025-09-08/P9080066(1).JPG",
        "date": "2025-09-08",
        "type": "image"
    },
    {
        "src": "organized/2025-09-08/P9080066.JPG",
        "date": "2025-09-08",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090069(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090069.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090070(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090070.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090072(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090072.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090073(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090073.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090074(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090074.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090075(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090075.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090076(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090076.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090077(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090077.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090078(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090078.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090080(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090080.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090081(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090081.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090082(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090082.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090097(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090097.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090098(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090098.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090099(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090099.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090100(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090100.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090101(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090101.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090103(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090103.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090105(1).JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-09/P9090105.JPG",
        "date": "2025-09-09",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100113(1).JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100113.JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100114(1).JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100114.JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100115(1).JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100115.JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100116(1).JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100116.JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100118(1).JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100118.JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100128(1).JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100128.JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100129(1).JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-10/P9100129.JPG",
        "date": "2025-09-10",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120146(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120146.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120147(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120147.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120148(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120148.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120149(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120149.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120150(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120150.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120151(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120151.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120152(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120152.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120153(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120153.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120154(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120154.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120155(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120155.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120156(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120156.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120157(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120157.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120158(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120158.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120159(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120159.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120160(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120160.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120161(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120161.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120162(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120162.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120163(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120163.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120164(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120164.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120165(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120165.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120166(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120166.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120167(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120167.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120168(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120168.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120169(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120169.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120170(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120170.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120171(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120171.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120175(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120175.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120189(1).JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-12/P9120189.JPG",
        "date": "2025-09-12",
        "type": "image"
    },
    {
        "src": "organized/2025-09-15/P9150209(1).JPG",
        "date": "2025-09-15",
        "type": "image"
    },
    {
        "src": "organized/2025-09-15/P9150209.JPG",
        "date": "2025-09-15",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160220(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160220.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160221(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160221.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160225(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160225.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160226(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160226.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160227(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160227.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160234(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160234.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160235(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160235.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160241(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160241.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160242(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160242.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160243(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160243.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160244(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160244.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160245(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160245.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160246(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160246.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160247(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160247.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160248(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160248.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160249(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160249.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160250(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160250.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160251(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160251.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160252(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160252.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160253(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160253.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160254(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160254.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160255(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160255.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160256(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160256.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160257(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160257.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160258(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160258.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160259(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160259.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160260(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160260.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160261(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160261.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160262(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160262.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160263(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160263.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160264(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160264.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160265(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160265.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160266(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160266.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160267(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160267.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160268(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160268.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160269(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160269.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160270(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160270.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160271(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160271.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160272(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160272.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160273(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160273.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160274(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160274.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160275(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160275.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160276(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160276.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160277(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160277.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160278(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160278.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160279(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160279.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160280(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160280.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160281(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160281.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160282(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160282.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160283(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160283.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160284(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160284.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160285(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160285.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160286(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160286.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160287(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160287.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160288(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160288.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160289(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160289.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160290(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160290.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160291(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160291.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160292(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160292.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160293(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160293.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160294(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160294.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160295(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160295.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160296(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160296.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160297(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160297.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160298(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160298.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160299(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160299.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160300(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160300.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160301(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160301.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160302(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160302.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160303(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160303.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160304(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160304.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160305(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160305.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160306(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160306.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160307(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160307.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160308(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160308.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160309(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160309.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160310(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160310.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160311(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160311.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160312(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160312.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160314(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160314.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160315(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160315.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160316(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160316.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160317(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160317.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160318(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160318.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160319(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160319.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160320(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160320.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160321(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160321.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160322(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160322.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160324(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160324.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160325(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160325.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160326(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160326.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160327(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160327.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160328(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160328.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160329(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160329.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160330(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160330.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160331(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160331.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160332(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160332.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160333(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160333.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160334(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160334.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160335(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160335.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160336(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160336.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160337(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160337.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160338(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160338.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160339(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160339.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160340(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160340.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160341(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160341.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160342(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160342.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160343(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160343.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160344(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160344.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160346(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160346.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160347(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160347.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160352(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160352.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160356(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160356.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160357(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160357.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160362(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160362.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160366(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160366.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160374(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160374.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160376(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160376.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160377(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160377.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160378(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160378.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160383(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160383.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160385(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160385.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160386(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160386.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160389(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160389.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160391(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160391.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160392(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160392.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160395(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160395.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160396(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160396.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160397(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160397.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160398(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160398.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160399(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160399.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160400(1).JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-16/P9160400.JPG",
        "date": "2025-09-16",
        "type": "image"
    },
    {
        "src": "organized/2025-09-18/P9180001.JPG",
        "date": "2025-09-18",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220002.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220003.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220009.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220010.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220011.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220012.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220013.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220014.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220015.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220016.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220017.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220018.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220019.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220020.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220021.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220022.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220023.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220024.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220025.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220026.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220027.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220028.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220029.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220030.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220031.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220032.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220033.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220034.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220035.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220036.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220037.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220039.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220040.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220041.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220042.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220043.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220044.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220045.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220046.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220050.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220051.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220052.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220053.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220054.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220055.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220056.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220057.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220058.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220059.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220060.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220061.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220062.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220063.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220064.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220065.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220066.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220067.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220068.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220069.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220070.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220071.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220073.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220074.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220075.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220076.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220077.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220078.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220079.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220080.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220081.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220082.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220083.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220084.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220085.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220086.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220087.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220088.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220089.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220090.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220091.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220092.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220093.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220094.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220095.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220096.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220097.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220099.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220100.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220102.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220112.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220113.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220122.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220131.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-09-22/P9220140.JPG",
        "date": "2025-09-22",
        "type": "image"
    },
    {
        "src": "organized/2025-10-03/PA030157.JPG",
        "date": "2025-10-03",
        "type": "image"
    },
    {
        "src": "organized/2025-10-03/PA030158.JPG",
        "date": "2025-10-03",
        "type": "image"
    },
    {
        "src": "organized/2025-10-03/PA030159.JPG",
        "date": "2025-10-03",
        "type": "image"
    },
    {
        "src": "organized/2025-10-03/PA030160.JPG",
        "date": "2025-10-03",
        "type": "image"
    },
    {
        "src": "organized/2025-10-03/PA030161.JPG",
        "date": "2025-10-03",
        "type": "image"
    },
    {
        "src": "organized/2025-10-03/PA030162.JPG",
        "date": "2025-10-03",
        "type": "image"
    },
    {
        "src": "organized/2025-10-03/PA030163.JPG",
        "date": "2025-10-03",
        "type": "image"
    }
];

    // 🧩 Agrupa por fecha
    function groupByDate(files) {
        const groups = {};
        files.forEach(file => {
            if (!groups[file.date]) groups[file.date] = [];
            groups[file.date].push(file);
        });
        return groups;
    }

    // 🖼️ Carga la galería
    function loadGallery() {
        const grouped = groupByDate(mediaFiles);
        galleryContainer.innerHTML = "";

        Object.keys(grouped).sort((a, b) => new Date(b) - new Date(a)).forEach(date => {
            const groupDiv = document.createElement("div");
            groupDiv.className = "date-group";

            const title = document.createElement("h3");
            title.textContent = new Date(date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });

            const grid = document.createElement("div");
            grid.className = "media-grid";

            grouped[date].forEach(item => {
                const div = document.createElement("div");
                div.className = "media-item";

                if (item.type === "image") {
                    const img = document.createElement("img");
                    img.src = item.src;
                    div.appendChild(img);
                } else if (item.type === "video") {
                    const vid = document.createElement("video");
                    vid.src = item.src;
                    vid.controls = true;
                    div.appendChild(vid);
                }

                grid.appendChild(div);
            });

            groupDiv.appendChild(title);
            groupDiv.appendChild(grid);
            galleryContainer.appendChild(groupDiv);
        });
    }
});

// =====================
// VISOR DE IMÁGENES Y VIDEOS (ZOOM)
// =====================

function openZoomViewer(src, type) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(0, 0, 0, 0.9)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "9999";
  overlay.style.backdropFilter = "blur(2px)";

  const close = document.createElement("span");
  close.textContent = "✕";
  close.style.position = "absolute";
  close.style.top = "20px";
  close.style.right = "30px";
  close.style.fontSize = "32px";
  close.style.color = "white";
  close.style.cursor = "pointer";
  close.style.fontWeight = "bold";

  let media;
  if (type === "video") {
    media = document.createElement("video");
    media.src = src;
    media.controls = true;
    media.autoplay = true;
    media.style.maxWidth = "90vw";
    media.style.maxHeight = "90vh";
    media.style.borderRadius = "10px";
    media.style.boxShadow = "0 0 25px rgba(255,255,255,0.3)";
  } else {
    media = document.createElement("img");
    media.src = src;
    media.style.maxWidth = "90vw";
    media.style.maxHeight = "90vh";
    media.style.cursor = "zoom-in";
    media.style.borderRadius = "10px";
    media.style.boxShadow = "0 0 25px rgba(255,255,255,0.3)";

    // efecto de zoom al hacer clic
    let zoom = 1;
    media.addEventListener("click", (e) => {
      zoom += 0.25;
      if (zoom > 2.5) zoom = 1;
      media.style.transform = `scale(${zoom})`;
      media.style.transition = "transform 0.3s ease";
      e.stopPropagation();
    });
  }

  overlay.appendChild(media);
  overlay.appendChild(close);
  document.body.appendChild(overlay);

  // Cerrar al hacer clic afuera o en la X
  overlay.addEventListener("click", () => overlay.remove());
  close.addEventListener("click", () => overlay.remove());
}

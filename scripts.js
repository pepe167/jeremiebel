
const evenements = [
    {
        titre: "Festival Mizik Kreyòl",
        date: "15 Jiyè 2025",
        heure: "6:00 PM",
        lieu: "Plas D'Armes",
        description: "Gwo fèt ak mizik lokal, manje ak animasyon."
    }
];

const commerces = [
    {
        nom: "Hotel Jérémie Palace",
        categorie: "Hotel",
        adresse: "Rue du Quai",
        telephone: "+509 3456 7890",
        lien: "https://facebook.com/hoteljeremiepalace"
    }
];

const infos = [
    {
        titre: "Hôpital Saint-Antoine",
        categorie: "Sante",
        adresse: "Centre-ville",
        telephone: "+509 2234 5678"
    },
    {
        titre: "Commissariat",
        categorie: "Sekirite",
        adresse: "Rue de la République",
        telephone: "+509 3344 1122"
    }
];

function displayData() {
    const evDiv = document.getElementById('liste-evenements');
    evenements.forEach(e => {
        evDiv.innerHTML += `<div><strong>${e.titre}</strong><br>${e.date} à ${e.heure}<br>${e.lieu}<br>${e.description}</div><hr>`;
    });

    const comDiv = document.getElementById('liste-commerces');
    commerces.forEach(c => {
        comDiv.innerHTML += `<div><strong>${c.nom}</strong> (${c.categorie})<br>${c.adresse}<br>Tel: ${c.telephone}<br><a href="${c.lien}" target="_blank">Facebook</a></div><hr>`;
    });

    const infoDiv = document.getElementById('liste-infos');
    infos.forEach(i => {
        infoDiv.innerHTML += `<div><strong>${i.titre}</strong> (${i.categorie})<br>${i.adresse}<br>Tel: ${i.telephone}</div><hr>`;
    });
}

displayData();
document.addEventListener("DOMContentLoaded", () => {
    const accueil = document.getElementById("accueil");
    accueil.querySelectorAll("p, img").forEach(el => {
        el.style.opacity = "0"; // Reinit
        setTimeout(() => el.style.animation = "fadeIn 2s ease forwards", 500);
    });
});

// script.js

window.onload = function() {
    const photo = document.getElementById('creator-photo');

    // Ajoute animasyon fade-in
    setTimeout(function() {
        photo.style.opacity = 1;
        photo.style.transform = 'scale(1)';
    }, 500);  // Delè anvan foto a parèt, pou efè plis atiran
}

window.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.animated');
    items.forEach((el, i) => {
        el.style.animationDelay = (i * 0.2) + 's';
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const animatedItems = document.querySelectorAll('.animated');
    animatedItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
    });
});

// document.getElementById("whatsappForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     const message = document.getElementById("message").value.trim();
//     if (!message) {
//       alert("Tanpri ekri yon mesaj.");
//       return;
//     }

//     const encodedMessage = encodeURIComponent(message);
//     const phoneNumber = "50938123456"; // 👉 Mete nimewo WhatsApp ou la

//     const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(whatsappLink, "_blank");
//   });

 if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    document.getElementById('body').style.backgroundImage = "url('background.jpg')";
    document.getElementById('body').style.backgroundSize = "cover";
  }


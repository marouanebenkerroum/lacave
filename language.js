// Default language
let currentLanguage = 'en';

function changeLanguage(language) {
    // Update the current language
    currentLanguage = language;

    // Header Section
    const headerLogo = document.querySelector('.logo-header img');
   
    // Add more header elements as needed

    // Footer Section
    const footerPhone = document.querySelector('.footer-1 address p:first-child');
    const footericons= document.querySelectorAll('.footer2 icon p:first-child');
   // const Explore= document.getElementById('explore');

    // Main Content
    const homeMadeText = document.getElementById('homeMade');
    // Add more elements from the main content as needed

    // Menu Section
    const menuItems = document.querySelectorAll('#menu li a');
    // Add more elements from the menu as needed

    // Flags
    const langButtons = document.querySelectorAll('.lang-button');

    // Translate header elements\
 //   translateElement(title, translations.title);
 //   translateElement(Explore, translations.Explore);
    translateElement(headerLogo, translations.headerLogo);
    translateElement(footericons, translations.footericons);
    // Translate footer elements
    translateElement(footerPhone, translations.footerPhone);
    // Translate main content elements
    translateElement(homeMadeText, translations.homeMadeText);
    // Translate menu elements
    menuItems.forEach((item, index) => {
        translateElement(item, translations.menuItems[index]);
    });
    // Translate flags
    langButtons.forEach((button, index) => {
        translateElement(button, translations.langButtons[index]);
    });
}

function translateElement(element, translation) {
    // Get the translation based on the current language
    const translatedText = translation[currentLanguage];

    // Update the element's text content with the translated text
    if (translatedText) {
        element.textContent = translatedText;
    }
}

// Example translation data
const translations = {
    Explore:{
        en: 'And explore all the items of our diverse Menu',
        fr: 'Et Explorez tous les éléments de notre menu diversifié.',
        es: 'Explore todos los elementos de nuestro variado menú.',
    },
    headerLogo: {
        en: 'La Cave Restaurant and Cafe',
        fr: 'Restaurant La Cave et Café',
        es: 'Restaurante La Cave y Café',
    },
    footerPhone: {
        en: 'Phone number: 05357-41044',
        fr: 'Numéro de téléphone : 05357-41044',
        es: 'Número de teléfono: 05357-41044',
    },
    homeMadeText: {
        en: 'ENJOY Home Made Moroccan food.',
        fr: 'DÉGUSTEZ des plats marocains faits maison.',
        es: 'DISFRUTE de la comida marroquí casera.',
    },
    menuItems: [
        { en: 'Home', fr: 'Accueil', es: 'Inicio' },
        { en: 'Starters', fr: 'Entrées', es: 'Entradas' },
        { en:'Soup', fr:'Soupe', es:'Sopa'},
        { en:'Moroccan Dishes', fr:'Plats marocains', es:'Platos marroquíes'},
        { en:'Main course', fr:'Plat principal', es:'Platos principal'},
        { en:'Pasta', fr:'Pâtes', es:'Pasta'},
        { en:'Desert', fr:'Dessert', es:'Postre'},
        { en:'Cold Drinks', fr:'Boissions Froides', es:'Bebidas frías'},
        { en:'Hot Drinks', fr:'Boissons chaudes', es:'Bebidas calientes' }


        // Add more menu items as needed
    ],
    
    footericons: [
        { en: 'Itineraire' , fr: 'itinéraire', es: 'el itinerario'},
        { en: 'Contact us', fr:'Contactez nous', es: 'Contacto' },
        { en: 'Call us', fr: 'Appelez nous', es:'llamanos'},
    ],
    langButtons: [
        { en: 'English', fr: 'Français', es: 'Español' },
        // Add more language buttons as needed
    ],
}
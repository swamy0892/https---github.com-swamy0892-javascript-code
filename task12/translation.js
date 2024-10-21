const translations = {
    english: "Hi, welcome to Google translation.",
    hindi: "नमस्ते, Google अनुवाद में आपका स्वागत है।",
    french: "Salut, bienvenue dans la traduction de Google.",
    telugu: "హాయ్, గూగుల్ అనువాదానికి స్వాగతం.",
    dutch: "Hoi, welkom bij Google vertaling."
};

document.getElementById('languageSelector').addEventListener('change', function() {
    const selectedLanguage = this.value;
    document.getElementById('translatedText').innerText = translations[selectedLanguage];
});

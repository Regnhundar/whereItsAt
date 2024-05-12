# Hooks och bibliotek:
Förklaringar och motivering till användandet av hooks eller bibliotek som vi inte gått igenom på lektion.

## useLocation 
useLocation är en hook från react-router-dom. 
Den ger oss tillgång till adressfältet i webläsaren och kan rendera om komponenter beroende på var vi befinner oss i vår applikation.
Vi kan jämföra den med en if-sats som innehåller document.location.pathname.endsWith("adress-här") i vanilla-javascript, dock med react-specifika användningsområden såsom tidigare nämnda omrendering av komponenter.

Jag har använt mig av hooken på två ställen. Dels i app.js där jag beroende på vad adressfältet säger renderar ut navigationen. 
Jag tycker det ser bättre ut att enbart ha en splash som möter dig när du först startar appen. Sedan dyker nav upp när du väl klickar dig in.

Det andra stället jag använt det på är i själva navigation-komponenten.
I komponenten togglar jag className navigation__link--active på den länk vars sida vi står på så länken blir highlightad.
Man kan göra samma sak med en vanlig state-variabel där du sätter den klickade länken till active och på så vis togglar klass. Dock förlorar du din highlight om du laddar om sidan så jag tycker useLocation är en mer elegant lösning.

## useNavigation
En enkel och mycket användbar hook. Låter dig att hoppa mellan sidor utan att skapa en Link-komponent.
Importeras från react-router-dom där du sedan sparar hooken i en variabel, ex const navigate = useNavigate().
Efter det så använder man variabeln och skriver adressen man vill ta sig till inom parantes, ex navigate("/order").

Jag har använt hooken på flera ställen. Exempelvis om du rensar din orderlista. Det finns ingen anledning att stirra på en tom varukorg så istället skickar jag tillbaka användaren till listan på events, navigate("/events");
Du kan också göra en enkel bakåt-knapp och i knappens funktion skriver du navigate(-1).

## Swiper.js
Swiper är ett bibliotek som innehåller funktioner, komponenter och animeringar för att ge dig något liknande en "onSwipe" eventlystnare.
Du kan med hjälp av swiper navigera en sida eller sektion av kort, artiklar osv.
Man behöver installera swiper följt av att du i din app importerar de delar du vill använda dig av. Vill du använda dig av moduler såsom i mitt fall Pagination och EffectCards så måste de också importeras.
Sedan får du importera de css-filer som är relevanta för din applikation.
Swiper kommer med flera komponenter. Jag har använt mig av Swiper och SwiperSlide. 
Swiper är föräldern och du behöver skicka ned inställningar för de moduler du tänkt använda. Komponenten wrappar sedan SwiperSlide som i sin tur wrappar det innehåll du vill ska reagera på en swipe.

I mitt fall använde jag det för att ge en rolig effekt när man bläddrar bland biljetter man köpt. Jag lyckades dock inte att få det att se bra ut i vertikal-riktning så jag frångick skissen och nu animeras korten horisontalt istället.
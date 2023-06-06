
https://karoltrombala.github.io/goit-js-hw-07/

Kryteria przyjęcia

Utworzono repozytorium goit-js-hw-07.
Przy oddaniu pracy domowej dołączono linki: do plików źródłowych i strony roboczej na GitHub Pages.
Wiersz poleceń i konsola nie zawiera błędów i ostrzeżeń.
Nazwy zmiennych i funkcji są zrozumiałe i opisowe.
Sformatowano kod przy użyciu Prettier.

Pliki startowe

Pobierz pliki startowe z podstawowymi znacznikami, gotowymi stylami i dołączonymi plikami skryptów dla każdego zadania. Skopiuj je do swojego projektu.

W pliku gallery-items.js znajduje się tablica galleryItems, która zawiera obiekty z informacją o obrazkach: małe (miniatura), oryginalne (duże) i opis. Została już dołączona do każdego z plików JS w projekcie.

Zadanie 1 - galeria obrazów

Utwórz galerię z możliwością kliknięcia w jej elementy i przeglądania pełnego obrazu w oknie modalnym. Obejrzyj wersję demonstracyjną wideo o działaniu galerii.

Wykonaj to zadanie w plikach 01-gallery.html i 01-gallery.js. Działanie strony możemy “rozbić” na kilka zadań

1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii.
2. Implementacja oddelegowania do div.gallery i otrzymania url większego obrazu.
3. Połączenie skryptu i stylów biblioteki okna modalnego basicLightbox. Użyj CDN serwisu jsdelivr i dodaj do projektu linki do zminimalizowanych (.min) plików biblioteki.
4. Otworzenie okna modalnego po kliknięciu w element galerii. Aby to zrobić, zapoznaj się z dokumentacją i przykładami.
5. Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. Użyj gotowego znacznika okna modalnego z obrazem z przykładów biblioteki basicLightbox.

Znacznik elementu galerii

Link do oryginalnego obrazka powinien być przechowywany w atrybucie data source w elemencie <img>, oraz w href linku. Nie dodawaj innych tagów HTML lub klas CSS oprócz tych, które znajdują się w tym szablonie.

<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>


Zwróć uwagę na to, że obrazek zamieniono w link, a więc po domyślnym kliknięciu użytkownik zostanie przekierowany na inną stronę. Zablokuj to zachowanie.

Zamknięcie z klawiatury

UWAGA:

Następna funkcja nie jest obowiązkowa przy oddawaniu zadania, ale będzie dobrą dodatkową praktyką.

Dodaj zamknięcie okna modalnego po naciśnięciu klawiszy Escape. Zrób tak, aby nasłuchiwanie klawiatury było aktywne tylko wtedy, gdy otwarte jest okno modalne. W bibliotece basicLightbox istnieje metoda na programowe zamknięcie okna modalnego.


Zadanie 2 - biblioteka SimpleLightbox

Utwórz taką samą galerię jak w zadaniu pierwszym, używając jednak biblioteki SimpleLightbox, która zajmie się opracowaniem kliknięć w obrazki, otwieraniem i zamykaniem okna modalnego oraz przewijaniem obrazków za pomocą klawiatury.

Konieczna jest nieznaczna zmiana znacznika galerii, użyj tego szablonu (pamiętaj też o odpowiednim użyciu znacznika li).

<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>


Wykonuj to zadanie w plikach 02-lightbox.html i 02-lightbox.js. Możemy je rozbić na kilka mniejszych zadań:

1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii. Użyj gotowego kodu z zadania pierwszego (modyfikując element zgodnie z zaleceniem powyżej).
2. Połączenie skryptu i stylów biblioteki poprzez użycie CDN serwisu cdnjs. Koniecznym jest dodanie linków do dwóch plików: simple-lightbox.min.js i simple-lightbox.min.css.
3. Inicjalizacja biblioteki po utworzeniu elementów galerii i dodaniu ich do ul.gallery. Aby to zrobić, zapoznaj się z dokumentacją SimpleLightbox - najpierw sekcje «Usage» i «Markup».
4. W dokumentacji zwróć uwagę na sekcję «Options» i dodaj wyświetlanie podpisów do obrazków z atrybutu alt. Niech podpis będzie pod spodem i pojawia się po 250 milisekundach po otwarciu obrazka.
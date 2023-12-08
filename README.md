# Dokumentation des Projekts

# Zusammenfassung der HTML-Dateien

## `fazit.html`
- **Struktur**: Grundlegende HTML-Struktur mit Kopf- und Körperbereich.
- **Styling**: Verlinkt auf `style.css` für das Styling und bezieht Google Fonts (Montserrat).
- **Inhalt**: Enthält ein Hamburger-Menü für die Navigation, einen Haupttextabschnitt, der ein Fazit zum Thema Mental Health im Spitzensport gibt, und einen Footer-Bereich.
- **Hauptbild**: Ein Bild wird im Hauptbereich angezeigt.

## `forschungsmethoden.html`
- **Struktur und Styling**: Ähnlich wie `fazit.html`.
- **Inhalt**: Bietet Informationen zu Forschungsmethoden im Kontext von Mental Health im Spitzensport.
- **Bild**: Ein Bild wird im Hauptbereich angezeigt.

## `index.html`
- **Struktur**: Grundlegende Struktur mit eingebundenem CSS und Google Fonts.
- **Inhalt**: Menü-Button, ein Haupttextbereich mit einem Link zur Startseite, und eine Video-Hintergrundsektion.
- **Animation**: Eine Textanimation für den Titel "Mental Health im Spitzensport".
- **Artikelabschnitte**: Drei Artikelabschnitte mit Links zu weiteren Seiten der Webseite.

## `kontakt.html`
- **Struktur und Styling**: Ähnlich wie die anderen Seiten.
- **Inhalt**: Bietet ein Kontaktformular für Benutzer, um Nachrichten zu senden. 
- **Navigation**: Enthält ein Hamburger-Menü für die Navigation.
- **Footer**: Standard-Footer-Bereich mit Kontaktinformationen.

## `umfrage.html`
- **Struktur und Styling**: Verwendet `umfrage.css` für das spezifische Styling der Umfrage-Seite.
- **Inhalt**: Präsentiert eine Stimmungsumfrage mit Schiebereglern und Fragen zur mentalen Gesundheit.
- **Navigation**: Hamburger-Menü wie auf anderen Seiten.
- **Zusätzlicher Inhalt**: Ein Abschnitt, der die Wichtigkeit des Sprechens über mentale Gesundheit hervorhebt, mit Links zu hilfreichen Ressourcen.


# CSS-Dateien Zusammenfassung

## `startseite.css`
- **Grundstil**: Schriftart `Arial`, weisser Hintergrund, Textlinks weiss ohne Unterstreichung.
- **Menü**: Menü-Button mit weissen Balken, Änderung zu hellem Grau beim Hover. Dunkelgrüner Hintergrund für das Menü-Overlay.
- **Hauptabschnitt und Artikel**: Hellgrauer Hintergrund für Hauptbereich. Artikel-Boxen in Weiss mit Schatten, Überschriften auf dunkelgrauem Hintergrund mit weissem Text, Textabschnitte in mittelgrau.
- **Footer**: Dunkelgraue Hintergrundfarbe mit weissem Text.
- **Weitere Elemente**: Video-Hintergrund, Textanimationscontainer in Weiss, verschiedene Abschnittsstile.

## `umfrage.css`
- **Grundstil und Textbereiche**: Dunkelgrüner Hintergrund, Schriftart `Arial`, Links in Braunton.
- **Container**: Weisser Hintergrund mit dunkelgrauen und mittelgrauen Textelementen.
- **Navigationsbuttons**: Blauer bzw. grauer Hintergrund mit weissem Text.
- **Responsives Design**: Anpassungen für verschiedene Bildschirmgrössen, speziell für kleinere Geräte.

## `style.css`
- **Allgemeiner Stil**: Schriftart `Arial`, dunkelgrüner Hintergrund, helle Textfarben für Körper und Links.
- **Footer**: Ähnlich `startseite.css`, mit dunkelgrauem Hintergrund und weissem Text. Weisse Links im Footer.
- **Artikelabschnitt und Hauptbild**: Stile für Artikelbereiche und Hauptbild.
- **Kontaktformular und Slider**: Spezifische Stile für Kontaktformular und Umfrage-Slider.


 # Zusammenfassung der JavaScript-Dateien

## `script.js`
- **Navigationsmenü**: Fügt interaktive Funktionalität zum Hamburger-Menü hinzu. Beim Klicken auf den Menü-Button wird das Menü ein- oder ausgeblendet.
- **Menü-Schliessen**: Ein Event-Listener auf dem Schliess-Button des Menüs ermöglicht das Schliessen des Menüs.
- **Menü-Links**: Stellt sicher, dass das Menü geschlossen wird, wenn ein Menü-Link angeklickt wird.
- **Fehlerkontrolle**: Überprüft, ob die erforderlichen Elemente im DOM vorhanden sind, und gibt bei Fehlen eine Fehlermeldung in der Konsole aus.

## `umfrage.js`
- **Umfrage-Logik**: Steuert die Anzeige der Fragen der Umfrage. Erlaubt dem Benutzer, zwischen den Fragen vor- und zurückzunavigieren.
- **Frageanzeige**: Funktionen `showQuestion`, `showNextQuestion` und `showPreviousQuestion` steuern, welche Frage angezeigt wird.
- **Ergebnisberechnung**: Die Funktion `berechneErgebnis` berechnet das Ergebnis der Umfrage basierend auf den Antworten und zeigt es an.
- **Frage- und Antwortlogik**: Verwaltet den aktuellen Status der Frage und passt die Anzeige entsprechend an.

#ReadMe mit Offenlegung von Quellen / Arbeitsmittel / Methodik

Meine Website zeigt das Thema der Bachelorarbeit: Mental Health im Spitzensport und ist in vier Hauptbereiche aufgeteilt: eine Startseite, zwei Artikelbeiträge, eine Umfrage und ein Kontaktformular.

## Quellen

- **ChatGPT von OpenAI**: Wurde vorallem für die Inhaltsentwicklung, Fehlerbehebung und das Debugging eingesetzt.
- **Ältere Projekte**: Alter Code von früheren Projekten. Immer wieder habe ich Codesnippets aus vorherigen Arbeiten kopieren können und diese auf mein Projekt anpassen.
- **CodePen**: Quelle für Designinspiration und spezifische Code-Snippets, wie den Scroll-Down-Pfeil, doch die meisten Sachen konnte ich trotzdem nicht umsetzen oder passten am schluss einfach nicht mehr mit meinem Design überein.

## Arbeitsmittel

- **Frontend**:  HTML5, CSS3 und JavaScript.
- **Backend**:  PHP und MySQL, unterstützt durch Funktionalitäten wie das Kontaktformular und die Umfrage.

## Methodik

Mein ursprüngliches Ziel war es, eine Webseite zu erstellen, die ähnlich wie die von Red Bulletin aufgebaut ist. Jedoch wurde mir schnell klar, dass dieser Stil nicht ganz meinen Vorstellungen entsprach, da das ganze in meinen Augen zu einfach und langweilig aussah. Daraufhin liess ich mich von verschiedenen Webseiten von Kreativagenturen inspirieren. Ich  schaute aber vorallem, das  meine eigenen Vorstellungen und was ich cool finde auf Webseiten integrierte. 

Der gesamte Entwicklungsprozess war viel Recherche, dem Verwerfen nicht passender Ideen und kontinuierlichem Testen was ich auch mithilfe von ChatGPT, Codepen und den Codesnipets aus alten Projekten schaffen kann oder eben auch tnich. Besonders herausfordernd waren das Menu sowie der Footer der irgendwie trotz gleichem Code und File nie gleich aussah. Diese Probleme konnte ich dank dem Grundverständnis des Codes und meinen Ideen was die Fehler sein könnten mithilfe von ChatGPT meistern konnte. 




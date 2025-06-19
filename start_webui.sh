#!/bin/bash

echo "Starte Open WebUI..."

# Pfad zum Open WebUI Verzeichnis (passt sich an, egal wo das Skript liegt)
# WEBUI_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEBUI_DIR="/home/hardy/open-webui" # Expliziter Pfad für Robustheit

# --- Start Ollama Server (im Hintergrund, falls nicht schon läuft) ---
echo "Überprüfe und starte Ollama Server..."
if ! pgrep -x "ollama" > /dev/null
then
    # Starte Ollama in einem neuen Terminal-Fenster (abhängig von deiner WSL-Distribution)
    # Für Ubuntu/WSL: Eine Möglichkeit ist, ein neues Fenster zu öffnen
    # Dies ist oft distributionsabhängig und kann fehlschlagen oder in einem GUI-Kontext besser funktionieren.
    # Eine robustere Methode ist, es direkt im Hintergrund zu starten und die Logs umzuleiten.
    echo "Ollama läuft nicht. Versuche, es im Hintergrund zu starten..."
    (nohup ollama serve > "$WEBUI_DIR/ollama_server.log" 2>&1 &) # Startet im Hintergrund und leitet Output um
    sleep 2 # Warte kurz, bis Ollama hochfährt
    if pgrep -x "ollama" > /dev/null; then
        echo "Ollama Server erfolgreich gestartet."
    else
        echo "WARNUNG: Ollama Server konnte nicht automatisch gestartet werden. Bitte manuell starten: 'ollama serve' in einem separaten Terminal."
    fi
else
    echo "Ollama Server läuft bereits."
fi

# --- Start Open WebUI Backend ---
echo "Starte Open WebUI Backend..."

# Navigiere zum Open WebUI Verzeichnis, aktiviere venv und starte uvicorn
cd "$WEBUI_DIR" || { echo "FEHLER: Konnte nicht zu $WEBUI_DIR wechseln. Abbruch."; exit 1; }

# Aktiviere die virtuelle Umgebung
source venv/bin/activate || { echo "FEHLER: Konnte virtuelle Umgebung nicht aktivieren. Abbruch."; exit 1; }

# Setze PYTHONPATH temporär für diese Session, falls nötig (siehe vorherige Schritte)
export PYTHONPATH="$PYTHONPATH:$(pwd)/backend"

# Starte Uvicorn
echo "Starte Uvicorn auf http://0.0.0.0:8080 ..."
# Führe uvicorn im Vordergrund aus, damit du die Logs siehst
uvicorn backend.open_webui.main:app --host 0.0.0.0 --port 8080 --reload
# Alternativ, um im Hintergrund zu laufen (weniger empfohlen für Debugging):
# nohup uvicorn backend.open_webui.main:app --host 0.0.0.0 --port 8080 > "$WEBUI_DIR/webui_server.log" 2>&1 &
# echo "Open WebUI Server im Hintergrund gestartet. Überprüfe $WEBUI_DIR/webui_server.log für Logs."
